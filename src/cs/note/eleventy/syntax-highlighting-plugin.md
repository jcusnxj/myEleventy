---
title: Syntax Highlighting Plugin
translationKey: "syntaxHighlightingPlugin"
templateEngineOverride: md
eleventyNavigation:
  key: Syntax Highlighting Plugin
  parent: Eleventy
  order: 7
---
## 1. Instalace & konfigurace
Instalace
```html
npm install @11ty/eleventy-plugin-syntaxhighlight --save-dev
```
Konfigurace (`.eleventy.js`)
```js
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
};
```

## 2. CSS stylesheet 
CSS soubor se styly (lze si vybrat například [zde](https://github.com/PrismJS/prism-themes)) uložíme do Eleventy projektu a okážeme ho v základním layoutu `base.njk`:

```html
<!DOCTYPE html>
<html lang="{{ lang }}">
  <head>
    ...  
    <link href="/assets/css/code.css" rel="stylesheet">
    ...
  </head>
  <body>
   ...
  </body>
</html>
```

## 3. Použití

Viz oficiální dokumentace.

## 4. templateoverride

Pokud nechceme, aby se ukázkový nunjuck kód vykonal, jedna z možností je nastavit v Front Matter Data konkrétního souboru `templateoverride` na `md` (defaultně je nastavený na `njk` - viz [Počáteční nastavení](/cs/note/eleventy/pocatecni-nastaveni/), bod 4):

```yaml
---
templateoverride: md
---
```

## 5. Zdroje
- [Oficiální dokumentace](https://www.11ty.dev/docs/plugins/syntaxhighlight/)



