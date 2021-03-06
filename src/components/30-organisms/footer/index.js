// TODO fix that stuff
/* eslint-disable import/no-extraneous-dependencies */
import { html, svg, css, unsafeCSS } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat';
import { classMap } from 'lit-html/directives/class-map';
import { CaretSvg } from '@axa-ch/materials/icons';
import '@axa-ch/container';
import defineOnce from '../../../utils/define-once';
import { applyDefaults } from '../../../utils/with-react';
import styles from './index.scss';
import childStyles from './child.scss';

import InlineStyles from '../../../utils/inline-styles';

const HEADINGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

const _setMaxHeightToZero = panel => {
  panel.style.maxHeight = '0px';
};

const _renderFooterLinks = (columnIndex, itemIndex) => {
  return html`
    <li class="o-footer__main-content-panel-list-item js-footer_list-item">
      <slot name="column-${columnIndex}-item-${itemIndex}" />
    </li>
  `;
};

class AXAFooter extends InlineStyles {
  static get tagName() {
    return 'axa-footer';
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  // Parent class InlineStyles needs a static method to retrive styles
  // name of such method is passed when calling: this.inlineStyles('resetHeadingCss');
  static get resetHeadingCss() {
    return childStyles;
  }

  static get properties() {
    return {
      // 'clickevents' prevents the throwing of native click events and sends a custom axa-footer-click event.
      clickevents: { type: Boolean },
      onItemClick: { type: Function, attribute: false },
    };
  }

  constructor() {
    super();
    applyDefaults(this);
    this._accordionActiveIndex = -1;
    this.slotsNotPrepared = true;
  }

  firstUpdated() {
    // call parent class method that add inline styles
    this.inlineStyles('resetHeadingCss');
  }

  _revealChildrenWithSlotAttribute(rawNode, slotElements) {
    if (typeof rawNode.hasAttribute === 'function') {
      if (rawNode.hasAttribute('slot')) {
        slotElements.push(rawNode);
      }
      if (rawNode.hasChildNodes()) {
        const children = Array.prototype.slice.call(rawNode.childNodes);
        children.forEach(ch => {
          this._revealChildrenWithSlotAttribute(ch, slotElements);
        });
      }
    }
  }

  /**
   * A slot element needs to be a direct child of a webcomponent. Since AEM
   * (and potentially other systems) wrap those children, they are no longer
   * direct childs to the webcomponents. We workaround this problem by
   * taking the slot-attribute to the direct children of the component.
   *
   * @param {*} nestedChild A direct child of the component, which has a slot
   * element nested somewhere lower, which would belong to the top component.
   */
  _setSlotNameFromNestedChildToDirectChildNodeOfComponent(nestedChild) {
    let currentNode = nestedChild;
    const domTree = [currentNode];
    while (
      AXAFooter.tagName.toUpperCase() !== currentNode.tagName.toUpperCase()
    ) {
      currentNode = currentNode.parentNode;
      domTree.push(currentNode);
    }
    const slotElement = domTree[domTree.length - 2];
    slotElement.setAttribute('slot', nestedChild.getAttribute('slot'));
    return slotElement;
  }

  /**
   * Takes all the child elements and extracts all the ones that come with a
   * slot-attribute. Those elements will then be changed to be distinguishable
   * from each other. Each block of links will need a title, so that the block will be displayed.
   *
   * Each title marks the beginning of a new column:
   *
   * TITLE -> start column 0
   * ITEM -> add item to column 0
   * ITEM -> add item to column 0
   * ITEM -> add item to column 0
   * ITEM -> add item to column 0
   *
   * TITLE* -> start column 1
   * ITEM -> add item to column 1
   * ITEM -> add item to column 1
   * ITEM -> add item to column 1
   */
  _prepareSlotsWithIndexes() {
    const slotElements = Array.prototype.slice.call(
      this.querySelectorAll('[slot]')
    );

    const childrenArr = slotElements.map(c =>
      this._setSlotNameFromNestedChildToDirectChildNodeOfComponent(c)
    );

    const filter = criteria => child =>
      child.getAttribute('slot').includes(criteria);

    const noHeaderFilter = criteria => child => {
      const { nodeName } = child;
      return (
        filter(criteria)(child) && !HEADINGS.includes(nodeName.toLowerCase())
      );
    };

    const onlyColumns = childrenArr.filter(
      // only accepts those slots that are columns
      filter('column-')
    );
    const onlySocials = childrenArr.filter(
      // only accepts those slots that are social columns
      noHeaderFilter('social-')
    );

    let currentColumnIndex = -1;
    let totalAmountPreviousColumns = 0;
    onlyColumns.forEach((child, index) => {
      const { nodeName } = child;
      if (HEADINGS.includes(nodeName.toLowerCase())) {
        currentColumnIndex += 1;
        totalAmountPreviousColumns = index;
        child.setAttribute(
          'slot',
          child
            .getAttribute('slot')
            .replace('column-title', `column-${currentColumnIndex}-title`)
        );
      } else {
        // -1 because TITLE is always first of dom index -> see * in big comment above
        const actualIndex = index - totalAmountPreviousColumns - 1;
        const slotName = `${child
          .getAttribute('slot')
          .replace(
            'column-item',
            `column-${currentColumnIndex}-item`
          )}-${actualIndex}`;
        child.setAttribute('slot', slotName);
      }
    });

    onlySocials.forEach((child, index) => {
      const slotName = `${child.getAttribute('slot')}-${index}`;
      child.setAttribute('slot', slotName);
    });
  }

  render() {
    const accordionContent = {
      'o-footer__main-content-panel': true,
      'o-footer__main-content-panel--open': this._accordionActiveIndex === 0,
      'js-footer__main-content-panel': true,
    };

    const shortAccordionContent = {
      'o-footer__main-content-panel': true,
      'o-footer__main-content-panel--short': true,
      'o-footer__main-content-panel--open': this._accordionActiveIndex === 1,
      'js-footer__main-content-panel': true,
    };

    const accordionCaretState = index => {
      return {
        'o-footer__accordion-button-caret': true,
        'o-footer__accordion-button-caret--open':
          this._accordionActiveIndex === index,
      };
    };

    const showCaret = svg([CaretSvg || '']);

    const links = this.querySelectorAll('a');
    // Add event listsner on the <a> tag, which is inside a slot element.
    // That's why we cannot use @click, as it comes from light dom
    [].forEach.call(links, link => {
      link.addEventListener('click', this._handleLinkClick);
    });

    if (this.slotsNotPrepared) {
      this._prepareSlotsWithIndexes();
      this.slotsNotPrepared = false;
    }

    return html`
      <footer class="o-footer">
        <axa-container>
          <div class="o-footer__content">
            <div class="o-footer__collection">
              <div class="o-footer__main">
                <button
                  class="o-footer__accordion-button"
                  @click="${ev => this._handleAccordionClick(0, ev)}"
                >
                  <slot name="column-0-title" class="o-footer__title"></slot>
                  <span class="${classMap(accordionCaretState(0))}">
                    ${showCaret}
                  </span>
                </button>
                <ul class="${classMap(accordionContent)}">
                  ${repeat(
                    new Array(
                      this.querySelectorAll('[slot^="column-0-item-"]').length
                    ),
                    (item, index) => _renderFooterLinks(0, index)
                  )}
                </ul>
              </div>

              <div class="o-footer__main">
                <button
                  class="o-footer__accordion-button"
                  @click="${ev => this._handleAccordionClick(1, ev)}"
                >
                  <slot name="column-1-title" class="o-footer__title"></slot>
                  <span class="${classMap(accordionCaretState(1))}">
                    ${showCaret}
                  </span>
                </button>
                <ul class="${classMap(shortAccordionContent)}">
                  ${repeat(
                    new Array(
                      this.querySelectorAll('[slot^="column-1-item-"]').length
                    ),
                    (item, index) => _renderFooterLinks(1, index)
                  )}
                </ul>
              </div>
            </div>
            <div class="o-footer__social-media">
              <slot
                name="social-title"
                class="o-footer__social-media-title"
              ></slot>
              <ul class="o-footer__social-media-list">
                ${repeat(
                  new Array(
                    this.querySelectorAll('[slot^="social-item-"]').length
                  ),
                  (item, index) => html`
                    <li class="o-footer__social-media-item">
                      <slot name="social-item-${index}"></slot>
                    </li>
                  `
                )}
              </ul>
            </div>
          </div>
        </axa-container>
      </footer>
    `;
  }

  _handleAccordionClick = (index, ev) => {
    // Toggle opening of correct accordion
    this._accordionActiveIndex =
      index === this._accordionActiveIndex ? -1 : index;
    this.requestUpdate();

    const panels = ev.currentTarget.parentNode.parentNode.parentNode.querySelectorAll(
      '.js-footer__main-content-panel'
    );

    [].forEach.call(panels, panel => {
      _setMaxHeightToZero(panel);
    });

    const panel = ev.currentTarget.parentNode.querySelector(
      '.js-footer__main-content-panel'
    );
    if (this._accordionActiveIndex > -1) {
      const {
        parentNode: { offsetHeight },
        children,
      } = panel;
      // Set maxHeight to exactly the height of all elements combined
      panel.style.maxHeight = `${Math.ceil(offsetHeight * children.length)}px`;
    } else {
      _setMaxHeightToZero(panel);
    }
  };

  _handleLinkClick = ev => {
    if (this.clickevents) {
      ev.preventDefault();

      const { currentTarget } = ev;

      if (currentTarget) {
        this.onItemClick(currentTarget);
        this.dispatchEvent(
          new CustomEvent('axa-footer-click', {
            detail: currentTarget,
            bubbles: true,
            cancelable: true,
          })
        );
      }
    }
  };
}

defineOnce(AXAFooter.tagName, AXAFooter);

export default AXAFooter;
