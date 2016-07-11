# PostCSS Omit Import Tilde
[![Build Status][ci-img]][ci]
[![npm version][npm-img]][npm]

[PostCSS] plugin to omit tilde in sass import function argument.

## Use Case
This plugin may be useful in case of large frontend ecosystem with different
bundlers (webpack and gulp in my case).

For example, you have some sass file, which is built by webpack and depends
from some external library. This library is imported by `@import "~awesome-lib"`
(`~` for root). Also you have another dependency from some internal file,
which is built by gulp and has dependency `@import "awesome-lib"` (no tilde).
This build is going to be broken, because webpack cannot import such dependency,
and on the other hand, gulp cannot build `@import "~awesome-lib"` if we just
change it.

So you can use this plugin in chain to build styles in gulp with dependency like
`@import "~awesome-lib"`;


[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/vansosnin/postcss-omit-import-tilde.svg
[ci]:      https://travis-ci.org/vansosnin/postcss-omit-import-tilde
[npm-img]: https://badge.fury.io/js/postcss-omit-import-tilde.svg
[npm]: https://badge.fury.io/js/postcss-omit-import-tilde

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
