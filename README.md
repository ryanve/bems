# [bems](https://www.npmjs.com/package/bems)

```
npm install bems --save
```

- [<b>JavaScript</b>](#javascript)
  - [parsing](#parsing)
  - [matching](#matching)
- [<b>SCSS</b>](#scss)
  - [mixins](#mixins)

## JavaScript

```js
var bems = require('bems')
```

### parsing

```js
bems.B('field__status--success') // "field"
bems.E('field__status--success') // "status"
bems.M('field__status--success') // "success"
```

```js
bems.E('field--success') // ""
bems.M('field__status') // ""
```

### matching

```js
bems.e('btn') // '.btn,[class^="btn__"],[class*=" btn__"],[class^="btn--"],[class*=" btn--"]'
bems.e('status') // '[class*="__status--"],[class*="__status "],[class$="__status"]'
bems.m('danger') // '[class*="--danger "],[class$="--danger"]'
```

```js
$(bems.m("danger"))
```

## SCSS

```scss
@import './node_modules/bems/bems';
```

### mixins

#### bems-b

```scss
@include bems-b(block) {
  color: blue;
}
```

```css
.block,
[class^="block__"],
[class*=" block__"],
[class^="block--"],
[class*=" block--"] {
  color: blue; }
```

#### bems-e

```scss
@include bems-e(element) {
  color: teal;
}
```

```css
[class*="__element--"],
[class*="__element "],
[class$="__element"] {
  color: teal; }
```

#### bems-m

```scss
@include bems-m(modifier) {
  color: gold;
}
```

```css
[class*="--modifier "],
[class$="--modifier"] {
  color: gold; }
```
