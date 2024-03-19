---
title: Eleventy Navigation plugin
translationKey: "eleventyNavigationPlugin"
templateEngineOverride: md
eleventyNavigation:
  key: Eleventy Navigation plugin
  parent: Eleventy
  order: 5
---
## 1. Instalace & konfigurace

Instalace

```html
npm install @11ty/eleventy-navigation --save-dev
```

Konfigurace (`.eleventy.js`)

```js
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
};
```

## 2. Front Matter Data
Pomocí parametru `key` a `parent` lze vytvořit jakékoli hierarchické vazby mezi jednotlivými markdown soubory s obsahem. Parametr `order` definuje pořadí v rámci jedné úrovně v hierarchie. 

```yaml
---
eleventyNavigation:
  key: Planety
  parent: Mars
  order: 2
---
```

## 3. Použití
```html
{{ collections.all | eleventyNavigation | eleventyNavigationToHtml | safe }}
```

## 4. Zdroje
- [Oficiální dokumentace](https://www.11ty.dev/docs/plugins/navigation/)