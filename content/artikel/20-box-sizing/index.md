---
title: "Layouts ohne Kopfschmerzen – box-sizing: border-box"
description: "Warum die CSS3-Eigenschaft *box-sizing: border-box* benutzt werden sollte."
date: "2014-03-18"
---

Ich weiß nicht genau woran es lag, dass ich die CSS3-Eigenschaft `box-sizing` so lange ignoriert hatte. Vermutlich daran, dass sie der Internet Explorer 7 nicht unterstützt und keine akzeptablen Polyfills existieren.
Wie dem auch sei, der IE7 ist nun endlich Geschichte — höchste Zeit, sich diese CSS-Eigenschaft etwas näher anzuschauen.

**Kurz gesagt:**
Mit `box-sizing: border-box` ist endlich ein leicht verständliches CSS-Box-Model verfügbar, bei dem nicht permanent auf unsemantische Hilfscontainer zurückgegriffen werden muss.

**Klassisches Beispiel:**
Ein Layout mit einem Hauptbereich und einer Seitenleiste. Man benutzt zwei Divs – das eine bekommt eine Breite von 75%, das andere 25%.

Soweit so gut.

Nun klebt aber der Inhalt direkt am Rand der beiden Bereiche. Also fügt man jeweils einen Innenabstand hinzu – sagen wir `padding: 1em`. Und da sich im klassischen CSS-Box-Model die Breite eines Elements errechnet aus

**Breite des Inhalts + Innen- und Außenabstand + Rand**

zerfällt das eigentlich klar definierte Layout in seine Einzelteile.

### Beispiel ohne box-sizing

<p data-height="266" data-theme-id="5148" data-slug-hash="btLso" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/mariofink/pen/btLso/'>Box-sizing demo (without box-sizing)</a> by Mario Fink (<a href='http://codepen.io/mariofink'>@mariofink</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

Um dieses Problem im klassischen Box-Model zu beheben, muss der Inhalt jedes Bereiches in einen Hilfscontainer gepackt werden (auch als Gutter bekannt). Wer sein HTML gerne halbwegs semantisch liebt, wird hier die Nase rümpfen.

## _box-sizing: border-box_ zur Hilfe!

Um das eigentlich erwartete Ergebnis zu erlangen, genügt es im obigen Beispiel für die beiden Inhaltscontainer _box-sizing_ auf _border-box_ zu setzen. Nun beziehen sich sowohl Breiten- als auch Höhenangaben auf das komplette Element – nicht nur auf den Inhaltsbereich.

Gerade bei komplexeren Layouts erspart das den ein oder anderen Knoten im Gehirn.

### Beispiel mit box-sizing: border-box

<p data-height="268" data-theme-id="5148" data-slug-hash="pEGAc" data-default-tab="result" class='codepen'>See the Pen <a href='http://codepen.io/mariofink/pen/pEGAc/'>Box-sizing demo (border-box)</a> by Mario Fink (<a href='http://codepen.io/mariofink'>@mariofink</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

## border-box all the things!

Für zukünftige Projekt sollte man sich an die [Empfehlung von Paul Irish](http://www.paulirish.com/2012/box-sizing-border-box-ftw/) halten und sämtlichen HTML Elementen border-box verpassen:

    *, *:before, *:after {
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }

Hilft besser als jede Kopfschmerztablette – versprochen!

## Links

[\* { Box-sizing: Border-box } FTW](http://www.paulirish.com/2012/box-sizing-border-box-ftw/) von Paul Irish
[Can I use: CSS3 box-sizing Kompatibilitätstabelle](http://caniuse.com/#feat=css3-boxsizing)
