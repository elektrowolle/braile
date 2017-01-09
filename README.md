# braile
A little converter to convert from and to braille

Use as cdn
----------

```html
<script type="text/javascript" src="https://cdn.rawgit.com/elektrowolle/braille/master/Braille.js"></script>
```

Or pull the git
---------------
```sh
git clone https://github.com/elektrowolle/braille.git
```
Then use it

```js
var str = Braille.convertToBraile('hello world');
console.log(str);

// o-o-o-o-o----oo-o-o-oo
// oo-oo-o--o--oo-oooo--o
// ----o-o-o----oo-o-o---

console.log(Braille.convertFromBraile(str));
//hello world
```
