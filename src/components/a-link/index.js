import styles from './index.scss';
import template from './_template';
import { BaseComponentGlobal } from '../_abstract/component-types';

class Link extends BaseComponentGlobal {
  constructor() {
    super(styles, template);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.customElements.define('axa-link', Link);

  BaseComponentGlobal.appendGlobalStyles(styles);
}, false);
