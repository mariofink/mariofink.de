---
title: "GRUNT – Zeit sparen mit JavaScript"
date: "2014-02-16"
---

Keine Lust ständig die gleichen langweiligen Dinge zu erledigen?

Sollte es sich um Aufgaben aus dem Bereich der Webentwicklung handeln, dann könnte [Grunt](http://gruntjs.com/) Abhilfe schaffen. Damit lässt sich folgendes automatisieren:

- CSS und JavaScript Dateien zusammenkleben und minifizieren
- Kompilierung von LESS, SASS, CoffeeScript etc.
- Unit Testing
- [eine Menge mehr](http://gruntjs.com/plugins)

## Installation und erste Schritte

Voraussetzung: [Installation von Node.js](http://nodejs.org)

Grunt in der Kommandozeile installieren

    npm install -g grunt-cli

Dadurch wird das Grunt Kommandozeileninterface global installiert – möglicherweise sind hierfür Admin-Rechte erforderlich (_sudo_ bzw. unter Windows die Eingabeauffordung als Administrator ausführen)

Für dieses Beispiel richte ich ein Demoprojekt ein. Dafür einen Ordner anlegen und darin ein neues Node-Projekt initialisieren:

    mkdir grunt-demo
    mkdir grunt-demo/js
    mkdir grunt-demo/css
    cd grunt-demo
    npm init

Die Abfragen nach **npm-init** alle mit _Enter_ bestätigen. Dadurch wird eine initiale **package.json** Datei erstellt. Der nächste Befehl fügt dieser Datei eine Abhängigkeit hinzu und installiert sie automatisch:

    npm install grunt --save-dev

Die grundlegende Installation vom Grunt JavaScript Task Runner ist damit abgeschlossen. Damit nun tatsächlich Aufgaben erledigt werden können benötigt man [Plugins](http://gruntjs.com/plugins).

### Plugins installieren

Eine typische Aufgabe, die sich leicht mit Grunt erledigen lässt, ist das zusammenkleben von JavaScript und CSS Dateien. Dafür muss das **grunt-contrib-concat** Plugin installiert werden:

    npm install grunt-contrib-concat --save-dev

Fast fertig. Nun muss man Grunt nur noch mitteilen, was erledigt werden soll. Dies wird im **Gruntfile.js** definiert. Im Projektordner also folgende Datei erstellen:

### Gruntfile.js

<pre class="wide"><code>module.exports = function(grunt) {
  // Grunt Konfiguration:
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Konfigurieren des concat Tasks
    concat: {
      js: {
        src: [
          // Alle JavaScript Dateien in diesem Ordner
          'js/*.js',
        ],
        // werden in dieser Datei zusammengeführt
        dest: 'scripts.js',
      },
      css: {
        src: [
          // Alle CSS Dateien in diesem Ordner
          'css/*.css',
        ],
        // werden in dieser Datei zusammengeführt
        dest: 'styles.css',
      }
    }

  });
  // Diese Plugins sollen geladen werden:
  grunt.loadNpmTasks('grunt-contrib-concat');
  // Was beim Aufruf von "grunt" passieren soll:
  grunt.registerTask('default', ['concat']);
};
</code></pre>

### Grunt ausführen

Die Vorarbeit ist erledigt.
Um Grunt nun die oben beschriebenen Aufgaben erledigen zu lassen, ist nur noch folgender Befehl auf der Kommandozeile im Projektordner auszuführen:

    grunt

Viel einfacher geht’s kaum.
Nun sollte sich der Inhalt sämtlicher JavaScript bzw. CSS Dateien in den Dateien scripts.js und styles.css wiederfinden.

(github: https://github.com/mariofink/grunt-erste-schritte text: Code für dieses Beispiel auf github.com)

## Und nun?

- [Grunt Plugins durchstöbern](http://gruntjs.com/plugins)
- [Grunt for People Who Think Things Like Grunt are Weird and Hard](http://24ways.org/2013/grunt-is-not-weird-and-hard/) von Chris Coyier
- [Supercharging your Gruntfile](http://www.html5rocks.com/en/tutorials/tooling/supercharging-your-gruntfile/) von Paul Bakaus
- [A build tool for front-end projects](http://frederic-hemberger.de/artikel/grunt-buildtool-for-frontend-projects/) von Frederic Hemberger
