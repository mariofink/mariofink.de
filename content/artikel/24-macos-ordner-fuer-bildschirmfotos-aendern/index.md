---
title: "MacOS – Speicherort für Bildschirmfotos ändern"
date: "2015-04-08"
---

Standardmäßig werden Screenshots, die mit der Bildschirmfoto App von OS X aufgenommen wurden, immer auf dem Desktop abgelegt. Für Fans eines aufgeräumten Arbeitsplatzes nicht immer ideal. Das lässt sich allerdings schnell ändern. Damit in Zukunft die Bildschirmfotos im Ordner _Bilder/screenshots_ gespeichert werden, folgende Kommandos im Terminal ausführen:

<pre class="wide"><code class="bash">mkdir ~/Pictures/screenshots
defaults write com.apple.screencapture location ~/Pictures/screenshots
killall SystemUIServer</code></pre>

**Fertig.**

Sollte man doch wieder zur Standardeinstellung zurückzukehren wollen:

<pre><code class="bash">defaults write com.apple.screencapture location ~/Desktop
killall SystemUIServer</code></pre>

via (link: http://osxdaily.com/2011/01/26/change-the-screenshot-save-file-location-in-mac-os-x/ text: OSXDaily)
