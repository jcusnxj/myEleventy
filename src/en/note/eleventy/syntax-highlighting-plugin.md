---
title: Syntax Highlighting Plugin
translationKey: "syntaxHighlightingPlugin"
templateEngineOverride: md
eleventyNavigation:
  key: Syntax Highlighting Plugin
  parent: Eleventy
  order: 7
---
## 1. Installation & configuration
Installation
```html
npm install @11ty/eleventy-plugin-syntaxhighlight --save-dev
```
Configuration (`.eleventy.js`)
```js
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
};
```

## 2. CSS stylesheet 
We store the CSS file with styles (you can choose, for example, [here](https://github.com/PrismJS/prism-themes)) into the Eleventy project and link it in the basic layout `base.njk`:
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

## 3. Usage

See official documentation.

## 4. templateoverride

If we don't want the sample Nunjucks code to execute, one option is to set `templateoverride` to `md` in the Front Matter Data of a specific file (by default, it is set to `njk` - see [Initial Setup](/en/note/eleventy/initial-set-up), step 4):
```yaml
---
templateoverride: md
---
```

## 5. Sources
- [Official documentation](https://www.11ty.dev/docs/plugins/syntaxhighlight/)

