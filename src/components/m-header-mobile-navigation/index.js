import classnames from 'classnames';
import styles from './index.scss';
import template from './_template';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import HeaderMobileNavigation from './js/header-mobile-navigation';
import wcdomready from '../../js/wcdomready';

class AXAHeaderMobileNavigation extends BaseComponentGlobal {
  static tagName = 'axa-header-mobile-navigation'

  static get observedAttributes() { return ['items', 'relative']; }

  constructor() {
    super(styles, template);

    this.consumeContext('axa-header');
  }

  contextCallback(contextNode) {
    if (this.interaction) {
      this.interaction.contextNode = contextNode;
    }
  }

  willRenderCallback() {
    const { gpu, relative } = this;

    this.className = classnames(this.initialClassName, 'm-header-mobile-navigation', {
      'm-header-mobile-navigation--gpu': gpu,
      'm-header-mobile-navigation--relative': relative,
    });
  }

  didRenderCallback() {
    const { contextNode } = this;

    if (this.interaction) {
      this.interaction.destroy();
    }

    this.interaction = new HeaderMobileNavigation(this);

    if (contextNode) {
      this.contextCallback(contextNode);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this.interaction.destroy();
    delete this.interaction;
  }
}

wcdomready(() => {
  window.customElements.define(AXAHeaderMobileNavigation.tagName, AXAHeaderMobileNavigation);
});

export default AXAHeaderMobileNavigation;
