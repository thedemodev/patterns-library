# Textarea

The &lt;axa-textarea&gt; component is a wrapper for the HTML &lt;textarea&gt; element with custom styling and additional functionality, e.g. a character counter.

## Usage

**Important:** If this component needs to run in Internet Explorer 11, [you need to use our polyfill](https://github.com/axa-ch/patterns-library/tree/develop/src/components/05-utils/polyfill).

```bash
npm install @axa-ch/textarea
```

```js
import '@axa-ch/textarea';
...
<axa-textarea></axa-textarea>
```

### React

Create a React-ified &lt;axa-textarea&gt; with the `createElement` function from your React version and then use it like this:

```js
import { createElement } from 'react';
import createAXATextareaReact from '@axa-ch/textarea/lib/index.react';

const AXATextareaReact = createAXATextareaReact(createElement);

export default AXATextareaReact;
```

```js
<AXATextareaReact onChange={handleChange} />
```

### Pure HTML pages

Import the textarea-defining script and use an &lt;axa-textarea&gt; like this:

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
    <axa-textarea></axa-textarea>
    <script src="node_modules/@axa-ch/textarea/dist/index.js"></script>
  </body>
</html>
```

## Properties

#### label

The string-valued `label` provides label text for the element as HTML.

### refId

The string-valued `refId` sets the `id` attribute for the underlying native HTML &lt;textarea&gt;. (default: a random `id` value).

### name

The string-valued `name` of the element can be set with this attribute.

Its intended use is for purposes of form submission.

### required

The Boolean attribute `required` visualizes an element that must obligatorily be filled by the user. When true, it displays `*` after the label text.

### placeholder

String-valued `placeholder`specifies the placeholder text shown when the element is empty.

### invalid

The Boolean attribute `invalid` serves to indicate the validity of the element (default: `false`). If set to `true`, it puts the element into a visual error state.

### checkMark

The Boolean attribute `checkMark` shows an animated check mark to the right of the textarea (default: `false`).

Showing the check mark is _suppressed_ when a character limit has been reached (cf. `maxLength` below).

### value

The string-valued `value` sets the value of the underlying native HTML &lt;textarea&gt;.

### disabled

The Boolean attribute `disabled` disables the underlying native HTML &lt;textarea&gt; text.

### error

The string-valued `error` provides error text as HTML, to be shown when `invalid` is true.

### maxLength

The number-valued `maxlength` provides a maximum number of characters that the textarea allows to be entered.

To reflect this visually, a character counter is added to the element UI.

### counter

The string-valued `counter` takes a string template which will be used when formatting the aforementioned character counter.

A `##counter##` placeholder anywhere in the string template is instantiated with the concrete character count. A missing placeholder is treated as if it were placed last in the `counter` string.

### counterMax

The string-valued `countermax` provides information text as HTML.

The information text is displayed instead of the character counter if the character limit defined in `maxlength` has been reached.

### defaultValue

The string-valued `defaultValue` sets an _initial_ (default) text in the underlying native HTML &lt;textarea&gt;, applied on first render of the element.

It can only be used for React.

_Note: In native applications you may achieve a similar effect by making your default text a child of the element, like so: `<axa-textarea>default value</axa-textarea>`._

## Callbacks

### onChange

The function-valued property `onChange` can be used as a callback prop for React and other frameworks.

The callback is invoked whenever the underlying native HTML &lt;textarea&gt;'s `input` event fires. Its only argument is the original `input` event.

### onFocus

The function-valued property `onFocus` can be used as a callback prop for React and other frameworks.

The callback is invoked whenever the underlying native HTML &lt;textarea&gt;'s `focus` event fires. Its only argument is the original `focus` event.

### onBlur

The function-valued property `onBlur` can be used as a callback prop for React and other frameworks.

The callback is invoked whenever the underlying native HTML &lt;textarea&gt;'s `blur` event fires. Its only argument is the original `blur` event.

## Methods

### focus()

The `focus()` method focusses the underlying native HTML &lt;textarea&gt;.

Its UI consequences are the same as a keyboard/mouse-initiated focus.

### blur()

The `blur()` method unfocusses the underlying native HTML &lt;textarea&gt;.

Its UI consequences are the same as a keyboard/mouse-initiated blur.
