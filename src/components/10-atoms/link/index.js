// TODO fix that stuff
/* eslint-disable import/no-extraneous-dependencies */
import '@axa-ch/icon';
import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import linkCSS from './index.scss';
import defineOnce from '../../../utils/define-once';
import { applyDefaults } from '../../../utils/with-react';

class AXALink extends LitElement {
  static tagName = 'axa-link';
  static styles = css`
    ${unsafeCSS(linkCSS)}
  `;

  // N.B. onClick deliberately not declared here, since
  // its use inside render() is guarded appropriately
  static get properties() {
    return {
      href: { type: String },
      variant: { type: String },
      icon: { type: String },
      external: { type: Boolean },
    };
  }

  constructor() {
    super();
    applyDefaults(this);
  }

  render() {
    const { variant } = this;

    const isSimple =
      variant &&
      variant !== 'hyperlink-white' &&
      variant !== 'hyperlink-white-underline';

    const isIcon =
      variant.includes('arrowleft') ||
      variant.includes('arrowright') ||
      variant.includes('icon');

    const isRed = variant.includes('red') && !variant.includes('white');

    const islinkWhite = variant === 'hyperlink-white';

    const islinkWhiteUnderline = variant === 'hyperlink-white-underline';

    const isWhite =
      variant.includes('white') &&
      !variant.includes('red') &&
      !variant.includes('hyperlink');

    const isMotion =
      variant.includes('arrowleft-animated') ||
      variant.includes('arrowright-animated');

    const classes = {
      'a-link--simple': isSimple,
      'a-link--icon': isIcon,
      'a-link--red': isRed,
      'a-link--hyperlink-white': islinkWhite,
      'a-link--hyperlink-white-underline': islinkWhiteUnderline,
      'a-link--white': isWhite,
      'a-link--motion': isMotion,
    };

    // Prettier sets the closing template string literal on a new line, which causes a whitespace after the link.
    // This whole HTML structure should not be changed easily! Depending on how you format it, icons will no longer
    // be displayed and other weird stuff.
    // prettier-ignore
    return html`
      <a
        class="a-link ${classMap(classes)}"
        href="${this.href}"
        @click="${ev => {
          ev.preventDefault();
          if (typeof this.onClick === 'function') {
            this.onClick();
          } else {
            window.location.href = this.href;
          }
        }}"
        target="${this.external ? '_blank' : '_top'}"
        rel="${this.external ? 'noreferrer noopener' : ''}"
      >
        ${this.variant.includes('arrowleft')
          ? html`
            <span class="a-link__icon-wrapper">
              <axa-icon
                icon="arrow-right"
                class="a-link__icon a-link__icon--left"
              ></axa-icon>
            </span>`
          : ''}
        ${this.icon &&
        this.variant.includes('icon') &&
        !this.variant.includes('arrow')
          ? html`
            <span class="a-link__icon-wrapper">
              <axa-icon
                icon="${this.icon}"
                class="a-link__icon a-link__icon--left"
              ></axa-icon>
            </span>`
          : ''}
          <slot></slot>${this.variant.includes('arrowright')
          ? html`
            <span class="a-link__icon-wrapper">
              <axa-icon icon="arrow-right" class="a-link__icon"></axa-icon>
            </span>`
          : ''}</a
      >`;
  }
}

defineOnce(AXALink.tagName, AXALink);

export default AXALink;
