---
title: Markdown-it Plugin
templateEngineOverride: md
translationKey: "markdownIt"
eleventyNavigation:
  key: Markdown-it Plugin
  parent: Eleventy
  order: 6
---
## 1. Installation & Configuration
Installation 
```hmtl
npm install markdown-it
```

Configuration
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

## 2. Usage
See official documentation.

## 3. Sources
- [Markdown-it documentation](https://github.com/markdown-it/markdown-it)