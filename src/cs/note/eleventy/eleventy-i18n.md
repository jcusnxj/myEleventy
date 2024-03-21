---
title: Eleventy i18n
translationKey: "i18nPlugin"
templateEngineOverride: md
eleventyNavigation:
  key: Eleventy i18n
  parent: Eleventy
  order: 3
---
## 1. Instalace
Plugin je od v2.0.0. součástí Eleventy a neinstaluje se. 

## 2. Konfigurace
```js
const { EleventyI18nPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    // any valid BCP 47-compatible language tag is supported
    defaultLanguage: "cs", // Required
  });
};
```
## 3. Adresářová struktura
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
## 4. Front Matter Data 
Vytvoření souboru `/src/en/en.json`: 
```json
{
  "lang": "en"
  }
```

Vytvoření souboru `/src/cs/cs.json`:
```json
 {
  "lang": "cs"
  }
```
## 5. Základní layout
Úprava základního layoutu `/src/_layouts/base.njk`:

```html
<!DOCTYPE html>
<html lang="{{ lang }}">
  <head>
    ...
```
## 6. Přesměrování na Netlify
Vytvoření souboru `/netlify.toml`: 

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

## 7. Lokalizované kolekce
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

## 8. Slovník
Vytvoření souboru `/src/_data/languages.js`:
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

## 9. Zdroje
- [Oficiální dokumentace](https://www.11ty.dev/docs/plugins/i18n/)
- [Multilingual sites with Eleventy](https://www.webstoemp.com/blog/multilingual-sites-eleventy/)
- [Internationalization with Eleventy 2.0 and Netlify](https://www.lenesaile.com/en/blog/internationalization-with-eleventy-20-and-netlify/)

