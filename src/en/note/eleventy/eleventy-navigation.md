---
title: Eleventy Navigation
translationKey: "eleventyNavigationPlugin"
templateEngineOverride: md
eleventyNavigation:
  key: Eleventy Navigation
  parent: Eleventy
  order: 2
---
## 1. Installation 
```html
npm install @11ty/eleventy-navigation --save-dev
```
## 2. Configuration
```js
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
};
```

## 3. Front Matter Data
```yaml
---
eleventyNavigation:
  key: Mars                 # unique key of navigation object
  parent: Solar system      # parent navigation object
  order: 2                  # defines the order in which objects are returned
  excerpt: Solar system bodies.       # description of navigation object
  title: Solar System Bodies          # title displayed (otherwise key is used)
  url: https://www.google.com/        # used to link to external URL
permalink: false                      # to prevent a file creation in Eleventy output site in case external link is used for navigation object
---
```

## 4. Usage
Display of navigation for collection (only within "Solar system"):
```html
{{ collections.all | eleventyNavigation("Solar system") | eleventyNavigationToHtml | safe }}
```

Display of navigation for localized collection (see [Eleventy i18n](/en/note/eleventy/eleventy-navigace), step 4 and 7):
```html
{{ collections["note_" + lang ] | eleventyNavigation | eleventyNavigationToHtml | safe }}
```

## 5. Sources
- [Official documentation](https://www.11ty.dev/docs/plugins/navigation/)