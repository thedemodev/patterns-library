"use strict"; // eslint-disable-line

const dir = require('node-dir');
const fs = require('fs');
const constants = require('../constants');
const nsh = require('node-syntaxhighlighter');
const sass = require('node-sass');

// const jsLang = nsh.getLanguage('js');
const htmlLang = nsh.getLanguage('html');
const cssLang = nsh.getLanguage('css');
const highlightStyles = nsh.getStyles();

const ENV = process.argv[2]; // second element is the first argument.
const CWD = process.cwd();

const reGetExamples = /\/components\/[^/]+\/_example\.html$/;
const reGetPreviews = /\/components\/[^/]+\/_preview\.html$/;

const adaptSlashes = (file) => { // eslint-disable-line no-param-reassign
  const isExtendedLengthPath = /^\\\\\?\\/.test(file);
  const hasNonAscii = /[^\u0000-\u0080]+/.test(file);
  return (isExtendedLengthPath || hasNonAscii) ? file : file.replace(/\\/g, '/');
};

// @TODO: import order seems to be crucial for chrome, whats going on here??
/* eslint-disable */
const sortDown = (a, b) => (a > b) ? -1 : (a < b) ? 1 : 0;
const sortUp = (a, b) => (a > b) ? 1 : (a < b) ? -1 : 0;
/* eslint-enable */

dir.files(`${CWD}/src/components`, (err, allFiles) => {
  let previewHtmls = [];
  let exampleHtmls = [];
  if (err) throw err;

  allFiles = allFiles.map(adaptSlashes); // eslint-disable-line no-param-reassign

  previewHtmls = allFiles.filter(_file => _file.match(reGetPreviews));
  exampleHtmls = allFiles.filter(_file => _file.match(reGetExamples));

  if (exampleHtmls.length !== previewHtmls.length || !previewHtmls.length || !exampleHtmls.length) {
    throw new Error('Every component must contain a _preview and a _example html');
  }

  let html = '';
  let imports = '';
  let componentsAtoms = `
    <axa-button tag="a" url="#atoms" data-atomic-category="atom" motion size="sm">Alle</axa-button>
    <axa-button tag="a" url="#molecules" data-atomic-category="molecule" motion size="sm">Alle</axa-button>
    <axa-button tag="a" url="#organisms" data-atomic-category="organism" motion size="sm">Alle</axa-button>
  `;
  let componentsMolecules = '';
  let componentsOrganisms = '';

  const indexHtml = fs.readFileSync('./src/index.html', 'utf8');
  const stylesPath = highlightStyles.filter(style => style.name === 'eclipse')[0].sourcePath;
  const styles = fs.readFileSync(stylesPath, 'utf8');

  previewHtmls = previewHtmls.sort(sortUp);
  exampleHtmls = exampleHtmls.sort(sortUp);

  previewHtmls.forEach((filePath, index) => {
    const partial = filePath.replace(adaptSlashes(`${CWD}/src/`), '').replace('_preview.html', 'index.html');
    imports += `<link rel="import" href="${partial}" > \n`;

    const name = filePath.split('/').slice(-2).join('/');

    const example = fs.readFileSync(exampleHtmls[index], 'utf8');
    const preview = fs.readFileSync(filePath, 'utf8');

    let previewName = name.replace('/_preview.html', '');

    const orginalName = previewName;

    const attrAxaButton = `size="sm" ghost tag="a" url="#${previewName}" motion`;

    let atomicName = '';
    switch (previewName.substring(0, 2)) {
      case 'a-':
        componentsAtoms += `<axa-button ${attrAxaButton} data-atomic-category="atom">${previewName.substring(2, previewName.length)}</axa-button>`;
        atomicName = 'Atom';
        break;
      case 'm-':
        componentsAtoms += `<axa-button ${attrAxaButton} data-atomic-category="molecule">${previewName.substring(2, previewName.length)}</axa-button>`;
        atomicName = 'Molecule';
        break;
      case 'o-':
        componentsAtoms += `<axa-button ${attrAxaButton} data-atomic-category="organism">${previewName.substring(2, previewName.length)}</axa-button>`;
        atomicName = 'Organism';
        break;
      default:
        componentsAtoms += `<axa-button ${attrAxaButton} data-atomic-category="organism">${previewName.substring(2, previewName.length)}</axa-button>`;
        atomicName = 'Organism';
    }

    previewName = previewName.substring(2, previewName.length);

    const resultCss = sass.renderSync({
      file: filePath.replace('_preview.html', 'index.scss'),
      outputStyle: 'expanded',
    });

    const atomicCategory = atomicName.toLowerCase();

    html +=
    `
      <style>
        ${styles}
      </style>
      <article data-atomic-category=${atomicCategory} class="js--section o-sg-section${atomicCategory === 'organism' ? ' o-sg-section--visible' : ''}" id="${orginalName}">
        <section class="o-sg-section__section o-sg-section__section--title">
          <h1 class="o-sg-section__title">
            <strong class="o-sg-section__title--strong">${atomicName}</strong>
            <span class="o-sg-section__title--normal">${previewName}</span>
          </h1>
          <button class="js--toggle o-sg-section__button o-sg-section__button--selected" data-toggle="source">Show PREVIEW</button>
          <button class="js--toggle o-sg-section__button" data-toggle="wc-html">Show Webcomponent HTML</button>
          <button class="js--toggle o-sg-section__button" data-toggle="html">Show Traditional HTML</button>
          <button class="js--toggle o-sg-section__button" data-toggle="css">Show CSS</button>
        </section>
        <article class="js--section-source o-sg-section__section o-sg-section__section--source o-sg-section__section--visible">
          ${preview}
        </article>
        <pre class="js--section-wc-html o-sg-section__section o-sg-section__section--src">${nsh.highlight(preview, htmlLang)}</pre>
        <pre class="js--section-html o-sg-section__section o-sg-section__section--src">${nsh.highlight(example, htmlLang)}</pre>
        <pre class="js--section-css o-sg-section__section o-sg-section__section--src">${nsh.highlight(resultCss.css.toString(), cssLang)}</pre>
      </article>
    `;
  });

  const result = indexHtml
    .replace(/<!-- {CUT AND INJECT IMPORTS HERE} -->/g, imports)
    .replace(/<!-- {CUT AND INJECT BUTTONS HERE} -->/g, componentsAtoms)
    .replace(/<!-- {CUT AND INJECT PREVIEWS HERE} -->/g, html);

  fs.writeFile(`${CWD}/${ENV === constants.ENV.PROD ? 'dist' : '.tmp'}/index.html`, result, (_err) => {
    if (_err) {
      console.log(_err); // eslint-disable-line
    } else {
      console.log(`\nMain Index.html written with ${previewHtmls.length} examples\n`); // eslint-disable-line
    }
  });
});
