---
title: Eleventy i18n plugin
translationKey: "i18nPlugin"
templateEngineOverride: md
eleventyNavigation:
  key: Eleventy i18n plugin
  parent: Eleventy
  order: 4
---
## 1. Instalace & konfigurace
Plugin je od v2.0.0. součástí Eleventy a neinstaluje se. 

Konfigurace (`.eleventy.js`)
```js
const { EleventyI18nPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    // any valid BCP 47-compatible language tag is supported
    defaultLanguage: "cs", // Required
  });
};
```
## 2. Adresářová struktura
Pro každý použitý jazyk musí v `root` adresáři existovat samostatný adresář pojménovaný podle kódu daného jazyka (kód dle IETF BCP 47). 
```html
├──src                        
    ├── _data                 
    ├── _includes             
    │    ├── partials       
    │    └── components      
    ├── _layouts              
    ├── assets                
    │    ├── css             
    │    ├── img             
    │    └── js              
    ├── en                 // directory for EN content
    │    ├── page          // custom folder for EN content
    │    ├── note          // custom folder for EN content
    │    ├── post          // custom folder for EN content
    │    ├── index.md      // index file for EN content
    │    └── en.json       // default Front Matter Data for EN markdown files
    └── cs                 // new directory for your CS content
         ├── page          // custom folder for CS content
         ├── note          // custom folder for CS content
         ├── post          // custom folder for CS content 
         ├── index.md      // index file for CS content
         └── cs.json       // default Front Matter Data for CS markdown files
```
## 3. Front Matter Data
Pro každý použitý jazyk jsem založil následující `json` (data v něm budou automaticky zděděna ostatními soubory v adresáři): 

Pro angličtinu: `/en/en.json`: 
```json
{
  "lang": "en"
  }
```

Pro češtinu: `/cs/cs.json`:
```json
 {
  "lang": "cs"
  }
```
## 4. Základní layout
V základním layout `base.njk` jsem přidal okaz na `lang`:

```html
<!DOCTYPE html>
<html lang="{{ lang }}">
  <head>
    ...
```
## 5. Přesměrování na Netlify
V `root` adresáři jsem vytvořil soubor `netlify.toml`: 

```html
# Redirect for end-user’s browser preference override
[[redirects]]
  from = "/*"
  to = "/en/:splat"
  status = 302
  conditions = {Language = ["en"]}

# Default
[[redirects]]
  from = "/*"
  to = "/cs/:splat"
  status = 302
```
Pokud je to preferovaný jazyk uživatele (resp. jeho prohlížeče) angličtina, použije se. Jinak se použije čeština (default).

## 6. Lokalizované kolekce
Vytvořil jsem lokalizované kolekce pro jednotlivé typy mého obsahu (`page`, `note`, `post`) úpravou v konfiguraci (`.eleventy.js`). Zde je příklad pro `page`:

```js
// collection of pages in english
module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("page_en", function (collection) {
    return collection.getFilteredByGlob("src/en/page/*.md");
  });
};

// collection of pages in czech
module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("page_cs", function (collection) {
    return collection.getFilteredByGlob("src/cs/page/*.md");
  });
};
```
Lokalizované kolekce jsem použil například v [Horizontální navigaci](/cs/note/eleventy/horizontalni-navigace) (bod 3) nebo v [Blog příspěvek - layout](/cs/note/eleventy/blog-prispevek-layout) (bod 5).

## 7. Slovník
Pro lokalizaci partials jsem vytvořil soubor `languages.js` v adresáři `_data`:
```js
module.exports = {
  en: {
    nextPostText: 'Next',
    previousPostText: 'Previous'
  },
  
  cs: {
    nextPostText: 'Následující',
    previousPostText: 'Předchozí'
  }
};
```
Soubor obsahuje překlad textu pro každý jazyk. Příklad lokalizace partials je v [Blog příspěvek - layout](/cs/note/eleventy/blog-prispevek-layout) (bod 5). 

## 8. Zdroje
- [Oficiální dokumentace](https://www.11ty.dev/docs/plugins/i18n/)
- [Multilingual sites with Eleventy](https://www.webstoemp.com/blog/multilingual-sites-eleventy/)
- [Internationalization with Eleventy 2.0 and Netlify](https://www.lenesaile.com/en/blog/internationalization-with-eleventy-20-and-netlify/)

