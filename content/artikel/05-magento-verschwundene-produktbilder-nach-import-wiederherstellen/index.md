---
title: "Magento: Verschwundene Produktbilder nach Import wiederherstellen"
date: "2011-03-05"
---

<p class="abstract">Ich bin gerade damit beschäftigt einen <a href="http://www.magentocommerce.com/">Magento</a>-basierten, Onlineshop auf einen leistungsstärkeren Server umzuziehen. Nicht gerade unproblematisch, wie sich heraus stellen sollte – vor allem, wenn damit auch gleichzeitig ein Versions-Upgrade von Magento 1.3 auf Magento 1.5 einher geht. So leistungsfähig und flexibel wie Magento auch sein mag: dabei tut sich so mancher Abgrund auf! Hier ein kleines Beispiel.</p>
<h2>Problem:</h2>

Nachdem ich die Daten per CSV Import/Export in den neuen Shop eingespielt hatte, sah alles sehr zufriedenstellend aus: die Produkte tauchten auf der Shopseite inkl. Bilder auf. Änderte man allerdings die Kategorie eines dieser Produkte, verschwand die Produktabbildung! Ein kurzer Blick in den Produktkatalog im Backend zeigte: <strong>die »Bilder«-Reiter sämtlicher importierten Produkte enthielten keine Daten mehr.</strong> Allem Anschein nach wurde beim Kategoriewechsel dann auch noch die letzte Referenz zur ursprünglich zugewiesenen Bilddatei gelöscht.

<h2>Lösung:</h2>

Sicherheitskopie der Datenbank machen – sicher ist sicher!

Nach einem CSV Produktimport muss folgendes SQL-Skript auf der Magento-Datenbank ausgeführt werden (bspw. per phpMyAdmin):

```SQL
INSERT INTO catalog_product_entity_media_gallery (attribute_id, entity_id, `value`)
SELECT ga.attribute_id, v.entity_id, v.value
FROM catalog_product_entity_varchar v
INNER JOIN eav_entity_type et ON et.entity_type_code='catalog_product'
INNER JOIN eav_attribute va ON va.entity_type_id=et.entity_type_id AND va.frontend_input='media_image' AND va.attribute_id=v.attribute_id
INNER JOIN eav_attribute ga ON va.entity_type_id=et.entity_type_id AND ga.attribute_code='media_gallery'
LEFT JOIN catalog_product_entity_media_gallery g ON g.entity_id=v.entity_id AND g.value=v.value
WHERE v.value&lt;&gt;'no_selection' AND v.value&lt;&gt;'' AND g.value IS NULL;
```

Dadurch werden die korrekten Einträge im »Bilder«-Reiter für die betroffenen Produkte wieder hergestellt.

Vielen Dank an Unirgy, der diese <a href="http://www.magentocommerce.com/wiki/groups/153/importing_product_images_with_csv">Lösung im offiziellen Magento-Wiki</a> bereitgestellt hat.
