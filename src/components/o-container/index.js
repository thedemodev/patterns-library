import BaseComponentGlobal from '../../js/abstract/base-component-global';
// import the styles used for this component
import styles from './index.scss';
// import the template used for this component
import template from './_template';
import wcdomready from '../../js/wcdomready';

class AXAContainer extends BaseComponentGlobal {
  static tagName = 'axa-container'

  constructor() {
    super({ styles, template });
  }
}

wcdomready(() => {
  window.customElements.define(AXAContainer.tagName, AXAContainer);
});

export default AXAContainer;
