# Testimonials

Shows several information in a carousel or inline and sets title and subtitle over it.

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

### React

Create a React-ified testimonials with the createElement function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXATestimonialsReact from '@axa-ch/testimonials/lib/index.react';

const AXATestimonialsReact = createAXATestimonialsReact(createElement);

export default AXATestimonialsReact;
```

```js
<AXATestimonialsReact
  title="The main title"
  subtitle="This is the subtitle"
  keysenabled
>
  <span>first slide</span>
  <div>
    <span>second slide</span>
    <span className="o-testimonials__author">Andrew Jackson, Advocate</span>
  </div>
</AXATestimonialsReact>
```

### Pure HTML pages

Import the testimonials-defining script and use a testimonials like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Your awesome title</title>
  </head>
  <body>
    <axa-testimonials
      title="The main title"
      subtitle="This is the subtitle"
      keysenabled=""
    >
      <span>first slide</span>
      <div>
        <span>second slide</span>
        <span class="o-testimonials__author">Andrew Jackson, Advocate</span>
      </div>
    </axa-testimonials>
    <script src="node_modules/@axa-ch/testimonials/dist/index.js"></script>
  </body>
</html>
```

## Properties

### title

The main title at the top.

### subtitle

The subtitle.

### showallinline

This boolean attribute specifies the visibility of the carousel. Set this attribute if you want all the childs shown above each other.

**Dont forget** so set [this class](#classo-testimonials__vertical-margin-react-classnameo-testimonials__vertical-margin) to your top level child elements to have some margins between them.

### autorotatedisabled

This boolean attribute specifies if the slides will not automatically rotate.

### autorotatetime

This number specifies the milliseconds the slides will automatically rotate.

### keysenabled

This boolean attribute specifies if the keyboard navigation (left/right keys) should be enabled.

## Child Elements

### Maximum

Do not set more than ~100 child elements. Because of height calculation the performance will be slow down.

<!-- prettier-ignore -->
### class="o-testimonials__author" (React: className="o-testimonials__author")

The Text of the element where you set this class will be uppercase. It has a margin-top to have some space to the elements above.

<!-- prettier-ignore -->
### class="o-testimonials__vertical-margin" (React: className="o-testimonials__vertical-margin")

Set this class to your top level child elements. It sets a margin to your elements if you use `showallinline`.
