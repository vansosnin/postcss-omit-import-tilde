# PostCSS Omit Import Tilde [![Build Status][ci-img]][ci]

[PostCSS] plugin to add or remove tilde in sass import function argument.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/vansosnin/postcss-omit-import-tilde.svg
[ci]:      https://travis-ci.org/vansosnin/postcss-omit-import-tilde

#### Input

```css
@import "~awesome-lib/awesome-style.scss";
```

#### Output

```css
@import "awesome-lib/awesome-style.scss";
```

## Usage

```js
postcss([ require('postcss-omit-import-tilde') ])
```

See [PostCSS] docs for examples for your environment.
