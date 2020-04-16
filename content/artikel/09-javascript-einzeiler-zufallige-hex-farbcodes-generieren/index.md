---
title: "JavaScript-Einzeiler: Zufällige HEX-Farbcodes generieren"
date: "2012-07-25"
---

```javascript
"#" + Math.floor(Math.random() * 16777215).toString(16)
```

<a href="http://paulirish.com/2009/random-hex-color-code-snippets/">Paul Irish und ein paar seiner Kollegen</a> haben diese sehr elegante Lösung einen zufälligen Hex-Farbcode per JavaScript zu generieren ausgetüftelt.

Dabei wird einfach eine zufällige Zahl zwischen 0 (Hex: #000000) und 16.777.215 (Hex: #FFFFFF) per <a href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Number/toString">Number.toString</a> in eine Hexadezimalzahl umgewandelt.

Nützlich!
