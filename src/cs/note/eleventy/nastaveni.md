---
title: Počáteční nastavení
translationKey: "initialSetUp"
templateEngineOverride: md
eleventyNavigation:
  key: Počáteční nastavení
  parent: Eleventy
  order: 1
---
## 1. Instalace
Viz postup na webu [11ty Recipes](https://11ty.recipes/recipes/start-an-eleventy-site-from-scratch/).

## 2. Github repository 
Viz postupu na webu [11ty Recipes](https://11ty.recipes/recipes/create-a-github-repository-for-your-eleventy-site/).

## 3. .gitignore
```html
_site 
node_modules 
.DS_Store
```

## 4. Konfigurační soubor
Vytvoření souboru `/.eleventy.js`:  

```js
module.exports = function(eleventyConfig){
    return {
    // markdown files, data files and html files will be processed by Nunjucks
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',  
    
    // overriding default directories
    dir: {
        input: "src",
        layouts: '_layouts'
      }
    };
  };
```

## 5. Adresářová struktura
Příklad adresářové struktury v adresáři `root`: 

```html
└── src                     // default override  (needs to be defined as "dir" in .eleventy.js)
│    ├── _data              // default
│    ├── _includes          // default
│    │      └── partials    // custom folder for partials       
│    ├── _layouts           // default override  (needs to be defined as "dir" in .eleventy.js)
│    ├── assets             // custom folder for assests
│    │     ├── css          // custom folder (addPassthroughCopy method needed in .eleventy.js)
│    │     ├── img          // custom folder (addPassthroughCopy method needed in .eleventy.js)
│    │     └── js           // custom folder (addPassthroughCopy method needed in .eleventy.js)
│    ├── page               // custom folder for content
│    │     └── page.json    // default Front Matter Data for markdown files
│    ├── note               // custom folder for content
│    │     └── note.json    // default Front Matter Data for markdown files
│    ├── post               // custom folder for content
│    │     └── post.json    // default Front Matter Data for markdown files
│    └── index.md           // landing page
├── .eleventy.js            // stays in root
├── .gitignore              // stays in root
├── package.json            // stays in root
└── package-lock.json       // stays in root
```

## 6. addPassthroughCopy
Definice metody `addPassthroughCopy`:

```js
module.exports = function(eleventyConfig){
  // addPassThroughCopy method creates a file/folder copy in the output directory
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/img");
  eleventyConfig.addPassthroughCopy("src/assets/js");
};
```

## 7. Základní layout
Vytvoření souboru `/src/_layouts/base.njk`:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{{ title }}</title> 
  </head>
  <body>
    <main>
      {{ content | safe }}    
    </main>
  </body>
</html>
```

## 8. Front Matter Data
Vytvoření souboru `/src/page/page.json`. Soubory v adresáři `page` budou automaticky používat základní layout `base.njk`:
```json
{
    "layout": "base",
  }
```

## 9. CSS stylesheet
Soubor se styly `/assets/css/style.css` odkázaný v `base.njk`:
```html
  <head>
    <link href="/assets/css/style.css" rel="stylesheet"> 
  </head>
```

## 10. Scripty
Definice scriptů v `/package.json`: 
```json
"scripts": {
    "start": "eleventy --serve",
    "build": "eleventy"
  },
```

## 11. Zdroje
- [Oficiální dokumentace](https://www.11ty.dev/docs/get-started/)
- [11ty recipes](https://11ty.recipes)
- [Learn Eleventy From Scratch](https://learneleventyfromscratch.com)
- [11ty tips I wish I knew from the start](https://davidea.st/articles/11ty-tips-i-wish-i-knew-from-the-start/)
