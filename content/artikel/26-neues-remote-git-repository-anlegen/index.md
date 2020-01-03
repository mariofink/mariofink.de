---
title: "Neues Remote Git Repository anlegen"
date: "2016-01-17"
---

Dazu erst Mal ein leeres (sog. bare) Repository auf dem Remote Server anlegen:

<pre><code class="bash">ssh user@host
cd pfad/oberhalb/repository
git init --bare mein-projekt.git
</code></pre>

Danach kann man mit git clone eine lokale Kopie des Repositories erstellen:

<pre class="wide"><code class="bash">git clone ssh://user@host/pfad/oberhalb/repository/mein-projekt.git
</code></pre>

Nun kann man lokal Dateien erstellen und dann ins Remote Repository schieben:

<pre><code class="bash">cd mein-projekt
echo "Lies mich" >> README.md
git add .
git commit -m "Init"
git push
</code></pre>
