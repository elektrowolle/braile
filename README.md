# braile
A little converter to convert from and to braille

Use as cdn
----------

```
<script type="text/javascript" src="https://cdn.rawgit.com/elektrowolle/braile/master/Braile.js"></script>
```

Or pull the git
---------------
```
git clone https://github.com/elektrowolle/braile.git
```
Then use it!

```
var str = Braile.convertToBraile('hello world');
console.log(str);

// o-o-o-o-o----oo-o-o-oo
// oo-oo-o--o--oo-oooo--o
// ----o-o-o----oo-o-o---

console.log(Braile.convertFromBraile(str));
//hello world
```

Look it up!
