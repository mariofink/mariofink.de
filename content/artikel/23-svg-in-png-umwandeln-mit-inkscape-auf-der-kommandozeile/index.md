---
title: "SVG in PNG umwandeln auf der Kommandozeile"
date: "2014-12-04"
---

Mit Hilfe von [Inkscape](//inkscape.org/de/) und folgendem Befehl werden sämtliche SVG Dateien im aktuellen Ordner in PNG Dateien umgewandelt (MacOS):

```shell
for i in *; do /Applications/Inkscape.app/Contents/Resources/bin/inkscape $i --export-png=`echo $i | sed -e 's/svg$/png/'`; done
```

[Quelle](//gastarbeiten.wordpress.com/2012/08/03/batch-convert-svg-to-png-with-inkscape-command-line/)
