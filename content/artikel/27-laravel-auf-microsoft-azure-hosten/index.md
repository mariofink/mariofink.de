---
title: "Laravel auf Microsoft Azure hosten"
date: "2017-04-25"
---

Um das erstklassige (link: https://laravel.com/ text: PHP Framework Laravel) in der Microsoft Azure Cloud zum Laufen zu bekommen sind einige Einstellungen notwendig. Hier die wichtigsten Punkte:

## Application Settings

Unter **App Settings** folgende Einträge hinzufügen

- <code>SCM_REPOSITORY_PATH</code> mit dem Wert <code>..\repository</code>
- <code>SCM_TARGET_PATH</code> mit dem Wert <code>..</code>

Unter **Virtual applications and directories** den Wert für das Root Verzeichnis / von <code>site\wwwroot</code> auf <code>site\public</code> ändern.

## Webserver Konfiguration

Im **public** Verzeichnis des Laravel-Projekts eine Datei namens **web.config** anlegen – mit folgendem Inhalt:

<script src="https://gist.github.com/mariofink/23ee0cdac508092e07fb28f2614b69ca.js"></script>

Nach einem weiteren Deployment und neustarten des App Services funktioniert Laravel nun einwandfrei.

Eine ausführlichere Erklärung: (link: http://blog.qbotx.com/basic-laravel-5-on-microsoft-azure-part-1/ text: Laravel 5 on Azure - part 1)
