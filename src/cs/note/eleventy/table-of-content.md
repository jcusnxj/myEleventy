---
title: Table of Content
translationKey: "tocPlugin"
templateEngineOverride: md
eleventyNavigation:
  key: Table of Content
  parent: Eleventy
  order: 9
---
## 1. Markdown-it & Markdown-it-anchor plugin
Markdown-it-anchor automaticky vytváří heading anchor links (tj. vloží IDs do nadpisů):

Instalace (markdown-it)
```hmtl
npm install markdown-it
```
Instalace (markdown-it-anchor)
```hmtl
npm install markdown-it-anchor
```

Konfigurace (markdown-it & markdown-it-anchor)
```js
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function(eleventyConfig) {
  let markdownLibrary = markdownIt({
    // markdown-it options here
        html: true,         // true allows HTML tags in Markdown files
        breaks: true,       // breaks: true converts line breaks in Markdown to <br> in HTML
        linkify: true       // linkify: true autoconverts text URLs into anchor tags
  }).use(markdownItAnchor, {
    // markdown-it-anchor options here
  });
  eleventyConfig.setLibrary("md", markdownLibrary);
};
```
## 2. ToC plugin
Instalace
```html
npm i --save eleventy-plugin-toc
```
Konfigurace (`.eleventy.js`)
```js
const pluginTOC = require('eleventy-plugin-toc')

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(pluginTOC, {
      tags: ['h2', 'h3', 'h4'], // which heading tags are selected headings must each have an ID attribute
      wrapper: 'nav',           // element to put around the root `ol`/`ul`
      wrapperClass: 'toc',      // class for the element around the root `ol`/`ul`
      ul: false,                // if to use `ul` instead of `ol`
      flat: false,              // if subheadings should appear as child of parent or as a sibling
    });
};
```
## 3. Použití
```html
 {{ content | toc | safe }}
```
## 4. Zdroje
- [ToC dokumentace](https://github.com/jdsteinbach/eleventy-plugin-toc)
- [Markdown-it dokumentace](https://github.com/markdown-it/markdown-it)
- [Markdown-it-anchor dokumentace](https://github.com/valeriangalliat/markdown-it-anchor)