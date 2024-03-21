---
title: Syntax Highlighting
translationKey: "syntaxHighlightingPlugin"
templateEngineOverride: md
eleventyNavigation:
  key: Syntax Highlighting
  parent: Eleventy
  order: 7
---
## 1. Instalace
```html
npm install @11ty/eleventy-plugin-syntaxhighlight --save-dev
```
## 2. Konfigurace 
```js
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
};
```

## 3. CSS stylesheet 
Odkázání CSS souboru se styly (lze si vybrat například [zde](https://github.com/PrismJS/prism-themes)) v základním layoutu `/src/_layouts/base.njk`:

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

## 4. Použití

Viz oficiální dokumentace.

## 5. templateoverride
```yaml
---
templateoverride: md
---
```

## 6. Zdroje
- [Oficiální dokumentace](https://www.11ty.dev/docs/plugins/syntaxhighlight/)



