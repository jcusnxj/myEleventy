---
title: Eleventy i18n plugin
translationKey: "i18nPlugin"
templateEngineOverride: md
eleventyNavigation:
  key: Eleventy i18n plugin
  parent: Eleventy
  order: 2
---
## 1. Installation & configuration
Plugin is bundled with Eleventy and does not require separate installation. 

Configuration (`.eleventy.js`)
```js
const { EleventyI18nPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPlugin(EleventyI18nPlugin, {
    // any valid BCP 47-compatible language tag is supported
    defaultLanguage: "cs", // Required
  });
};
```
## 2. Folder structure
For each language used, there must be a separate directory in the `input` directory, named after the code of that language (code according to IETF BCP 47). 
```html
├──src                        
    ├── _data                 
    ├── _includes             
    │    ├── partials       
    │    └── components      
    ├── _layouts              
    ├── assets                
    │    c css             
    │    ├── img             
    │    └── js              
    ├── en                 // directory for EN content
    │    ├── page          // custom folder for EN content
    │    ├── note          // custom folder for EN content
    │    ├── post          // custom folder for EN content
    │    ├── index.md      // index file for EN content
    │    └── en.json       // default Front Matter Data for EN markdown files
    └── cs                 // new directory for your CS content
         ├── page          // custom folder for CS content
         ├── note          // custom folder for CS content
         ├── post          // custom folder for CS content 
         ├── index.md      // index file for CS content
         └── cs.json       // default Front Matter Data for CS markdown files
```
## 3. Front Matter Data
For each language used, I created the following `json` (data in it will be automatically inherited by other files in the directory): 

For English: `/en/en.json`: 
```json
{
  "lang": "en"
  }
```

For Czech: `/cs/cs.json`:
```json
 {
  "lang": "cs"
  }
```
## 4. Basic layout
In the basic layout `base.njk`, I added a reference to `lang`:

```html
<!DOCTYPE html>
<html lang="{{ lang }}">
  <head>
    ...
```
## 5. Netlify redirection
I created a `netlify.toml` file in the root directory: 

```html
# Redirect for end-user’s browser preference override
[[redirects]]
  from = "/*"
  to = "/en/:splat"
  status = 302
  conditions = {Language = ["en"]}

# Default
[[redirects]]
  from = "/*"
  to = "/cs/:splat"
  status = 302
```
If the user's preferred language (or their browser's) is English, it will be used. Otherwise, Czech (default) will be used.

## 6. Localized collections
I created localized collections for each type of my content (`page`, `note`, `post`) by making modifications in the configuration (.eleventy.js). Here is an example for `page`:
```js
// collection of pages in english
module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("page_en", function (collection) {
    return collection.getFilteredByGlob("src/en/page/*.md");
  });
};

// collection of pages in czech
module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("page_cs", function (collection) {
    return collection.getFilteredByGlob("src/cs/page/*.md");
  });
};
```
I then used the localized collections, for example, in step 3, [Horizontal navigation](/en/note/eleventy/horizontal-navigation) or in step 5, [Blog Post Layout](/en/note/eleventy/blog-post-layout).

## 7. Dictionary
For localizing partials, I created a `languages.js` file in the `_data` directory:
```js
module.exports = {
  en: {
    nextPostText: 'Next',
    previousPostText: 'Previous'
  },
  
  cs: {
    nextPostText: 'Následující',
    previousPostText: 'Předchozí'
  }
};
```
The file contains text translations for each language. An example of localizing partials is in step 5, [Blog Post Layout](/en/note/eleventy/blog-post-layout). 

## 8. Sources
- [Official documentation](https://www.11ty.dev/docs/plugins/i18n/)
- [Multilingual sites with Eleventy](https://www.webstoemp.com/blog/multilingual-sites-eleventy/)
- [Internationalization with Eleventy 2.0 and Netlify](https://www.lenesaile.com/en/blog/internationalization-with-eleventy-20-and-netlify/)

