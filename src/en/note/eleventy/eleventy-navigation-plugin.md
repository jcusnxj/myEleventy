---
title: Eleventy Navigation Plugin
translationKey: "eleventyNavigationPlugin"
templateEngineOverride: md
eleventyNavigation:
  key: Eleventy Navigation Plugin
  parent: Eleventy
  order: 2
---
## 1. Installation & configuration

Installation

```html
npm install @11ty/eleventy-navigation --save-dev
```

Configuration (`.eleventy.js`)

```js
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
};
```

## 2. Front Matter Data
Using the `key` and `parent` parameters, any hierarchical relationships can be created among the individual markdown files with content. The `order` parameter defines the sequence within a single level in the hierarchy. 

```yaml
---
eleventyNavigation:
  key: Planety
  parent: Mars
  order: 2
---
```

## 3. Usage
```html
{{ collections.all | eleventyNavigation | eleventyNavigationToHtml | safe }}
```

## 4. Sources
- [Official documentation](https://www.11ty.dev/docs/plugins/navigation/)