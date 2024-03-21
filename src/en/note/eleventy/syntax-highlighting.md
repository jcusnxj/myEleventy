---
title: Syntax Highlighting
translationKey: "syntaxHighlightingPlugin"
templateEngineOverride: md
eleventyNavigation:
  key: Syntax Highlighting
  parent: Eleventy
  order: 7
---
## 1. Installation 
```html
npm install @11ty/eleventy-plugin-syntaxhighlight --save-dev
```
## 2. Configuration
```js
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
};
```

## 3. CSS stylesheet 
Reference the CSS file (you can choose one, for example, [here](https://github.com/PrismJS/prism-themes)) in basic layout `/src/_layouts/base.njk`:
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

## 4. Usage

See official documentation.

## 5. templateoverride
```yaml
---
templateoverride: md
---
```

## 6. Sources
- [Official documentation](https://www.11ty.dev/docs/plugins/syntaxhighlight/)

