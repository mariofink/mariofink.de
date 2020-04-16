---
title: "chmod – Lesezugriff für alle Dateien und Unterordner"
date: "2014-11-08"
---

Das Ändern von Berechtigungen auf <abbr title="MacOS X, Linux, Unix, etc.">\*nix</abbr> Systemen ist für mich nicht immer selbsterklärend. Des öfteren stand ich schon vor dem Problem, dass ich gerne Lesezugriff auf den kompletten Inhalt eines Ordners inklusive Unterordner geben wollte. Zwar kann man das mit <code>chmod -R 755</code> erledigen – dadurch wird allerdings jede einzelne Datei auch als ausführbar gekennzeichnet. **Unschön!**

Bei stackoverflow bin ich nun allerdings auf eine [komfortable Lösung für dieses Problem](http://stackoverflow.com/questions/3740152/how-to-set-chmod-for-a-folder-and-all-of-its-subfolders-and-files-in-linux-ubunt/11512211#11512211) gestoßen:

Mit diesem Befehl kann man den Zugriff auf sämtliche Unterverzeichnisse erlauben:

```shell
find /opt/lampp/htdocs -type d -exec chmod 755 {} \;
```

Und hiermit werden Leseberechtigungen für alle »normalen« Dateien erteilt:

```shell
find /opt/lampp/htdocs -type f -exec chmod 644 {} \;
```

Nützlich!
