---
title: Markdown-it
templateEngineOverride: md
translationKey: "markdownIt"
eleventyNavigation:
  key: Markdown-it
  parent: Eleventy
  order: 6
---
## 1. Instalace 
```hmtl
npm install markdown-it
```

## 2. Konfigurace
```js
const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
    // Markdown-it - override the default Markdown library used for `.md` files with markdown-it
    let markdownLibrary = markdownIt({
      html: true, // Enable HTML tags in source
      breaks: true, // Convert '\n' in paragraphs into <br>
      linkify: true // Autoconvert URL-like text to links
    // You can add more options here based on your needs
    });

    // Markdown-it - tell Eleventy to use this instance of markdown-it
    eleventyConfig.setLibrary("md", markdownLibrary);
```

## 3. Použití
Viz oficiální dokumentace.

## 4. Zdroje
- [Markdown-it dokumentace](https://github.com/markdown-it/markdown-it)