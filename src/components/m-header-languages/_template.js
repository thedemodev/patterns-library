import html from 'nanohtml';
import raw from 'nanohtml/raw';

export default ({ items }) => [html`
  <button type="button" class="m-header-languages__drop-down-toggle js-dropdown__toggle">
    ${Array.isArray(items) && items[0].name}
    <axa-icon icon="angle-bracket-down" classes="m-header-languages__drop-down-icon"></axa-icon>
  </button>
`, html`
  <ul class="m-header-languages__list">
    ${Array.isArray(items) && items.map(({ url, name }, index) => html`
      <li class="m-header-languages__list-item">
        <a class="m-header-languages__list-link${index === 0 ? ' is-header-languages-active' : ''}" href="${url}">
          ${raw(name)}
        </a>
      </li>
    `)}
  </ul>
`];
