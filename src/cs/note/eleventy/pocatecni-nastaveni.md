---
title: Počáteční nastavení
translationKey: "initialSetUp"
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
V bodě 3 výše vznikl soubor `.gitignore`. Ještě jsem do něho přidal soubor `.DS_Store`:

```html
_site 
node_modules 
.DS_Store
```

## 4. .eleventy.js 
V adresáři `root` jsem založil konfigurační soubor `.eleventy.js`:  

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
V `root` adresáři projektu Eleventy jsem založil následující adresářovou strukturu:

```html
└── src                     // default override  (needs to be defined as "dir" in .eleventy.js)
     ├── _data              // default
     ├── _includes          // default
     │      └── partials    // custom folder for partials       
     ├── _layouts           // default override  (needs to be defined as "dir" in .eleventy.js)
     ├── assets             // custom folder for assests
     │     ├── css          // custom folder (addPassthroughCopy method needed in .eleventy.js)
     │     ├── img          // custom folder (addPassthroughCopy method needed in .eleventy.js)
     │     └── js           // custom folder (addPassthroughCopy method needed in .eleventy.js)
     ├── page               // custom folder for content
     │     └── page.json    // default Front Matter Data for markdown files
     ├── note               // custom folder for content
     │     └── note.json    // default Front Matter Data for markdown files
     ├── post               // custom folder for content
     │     └── post.json    // default Front Matter Data for markdown files
     └── index.md           // landing page
```
V root adresáři by měly zůstat pouze tyto soubory (vše ostatní je v adresáři `src`):
- `.eleventy.js`
- `.gitignore`
- `package.json`
- `package-lock.json`

## 6. Front Matter Data
V každém adresáři s obsahem (v mém případě adresáře `page`, `note` a `post`) jsem vytvořil `json` soubor s defaultními Front Matter Data. Například v adresáři `post` jsem založil soubor `post.json`:

```json
{
    "layout": "base",
    "tags": "post"
  }
```

## 7. addPassthroughCopy
Pro některé adresáře (možné definovat i pro konrétní soubory) je nutné definovat metodu `addPassthroughCopy`:

```js
module.exports = function(eleventyConfig){
  // addPassThroughCopy method creates a file/folder copy in the output directory
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/img");
  eleventyConfig.addPassthroughCopy("src/assets/js");
};
```

## 8. Základní layout 
V adresáři `_layouts` jsem vytvořil soubor `base.njk`:

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

## 9. Index
Upravil jsem Front Matter Data v `index.md`, aby se odkazoval na základní layout `base.njk`:
```yaml
---
layout: base
title: Home
---
# Welcome to my website!
```

## 10. CSS stylesheet
V adresáři `assets/css` jsem vytvořil soubor `style.css` a přidal odkaz na něj do základní šablony `base.njk`:

```html
  <head>
    <link href="/assets/css/style.css" rel="stylesheet"> 
  </head>
```

## 11. Scripty
V souboru `package.json` v root adresáři jsem upravil následující:

```json
"scripts": {
    "start": "eleventy --serve",
    "build": "eleventy"
  },
```

## 12. Zdroje
- [Oficiální dokumentace](https://www.11ty.dev/docs/get-started/)
- [11ty recipes](https://11ty.recipes)
- [Learn Eleventy From Scratch](https://learneleventyfromscratch.com)
- [11ty tips I wish I knew from the start](https://davidea.st/articles/11ty-tips-i-wish-i-knew-from-the-start/)
