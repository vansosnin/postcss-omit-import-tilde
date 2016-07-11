# PostCSS Omit Import Tilde [![Build Status][ci-img]][ci]

## WORK IN PROGRESS

[PostCSS] plugin to add or remove tilde in sass import function argument.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/vansosnin/postcss-omit-import-tilde.svg
[ci]:      https://travis-ci.org/vansosnin/postcss-omit-import-tilde

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-omit-import-tilde') ])
```

See [PostCSS] docs for examples for your environment.
