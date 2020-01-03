---
title: "SVG in PNG umwandeln auf der Kommandozeile"
date: "2014-12-04"
---

Mit Hilfe von (link: https://inkscape.org/de/ text: Inkscape) und folgendem Befehl werden sämtliche SVG Dateien im aktuellen Ordner in PNG Dateien umgewandelt (MacOS):

<pre class="wide"><code class="bash">for i in *; do /Applications/Inkscape.app/Contents/Resources/bin/inkscape $i --export-png=`echo $i | sed -e 's/svg$/png/'`; done
</code></pre>

(link: https://gastarbeiten.wordpress.com/2012/08/03/batch-convert-svg-to-png-with-inkscape-command-line/ text: Quelle)
