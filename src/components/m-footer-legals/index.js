import classnames from 'classnames';
import getAttribute from '../../js/get-attribute';
import BaseComponentGlobal from '../../js/abstract/base-component-global';
import styles from './index.scss';
import wcdomready from '../../js/wcdomready';

class AXAFooterLegals extends BaseComponentGlobal {
  static tagName = 'axa-footer-legals'

  static get observedAttributes() { return ['bottom']; }

  constructor() {
    super({ styles });
  }

  connectedCallback() {
    super.connectedCallback();

    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const bottom = getAttribute(this, 'bottom');

    this.className = classnames(this.initialClassName, 'm-footer-legals', {
      'm-footer-legals--bottom': bottom,
    });
  }
}

wcdomready(() => {
  window.customElements.define(AXAFooterLegals.tagName, AXAFooterLegals);
});

export default AXAFooterLegals;
