---
title: Eleventy
translationKey: "initialSetUp"
eleventyNavigation:
  key: Initial Setup
  parent: Eleventy
  order: 1
---
## 1. Installation
I followed the steps on [11ty Recipes](https://11ty.recipes/recipes/start-an-eleventy-site-from-scratch/) website.

## 2. Github repository 
I followed the steps on [11ty Recipes](https://11ty.recipes/recipes/create-a-github-repository-for-your-eleventy-site/) website again. 

## 3. .gitignore
In step 3 above, a `.gitignore` file was created. I also added the `.DS_Store` file to it:

```html
_site 
node_modules 
.DS_Store
```

## 4. .eleventy.js 
In the `root` directory, I created a configuration file named `.eleventy.js`:  

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

## 5. Folder structure
In the `root` directory of the Eleventy project, I created the following folder structure:

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
In the `root` directory, only these files should remain (everything else is to be in the `src` directory):
- `.eleventy.js`
- `.gitignore`
- `package.json`
- `package-lock.json`

## 6. Front Matter Data
In each directory with content (in my case, the `page`, `note`, and `post` directories), I created a `json` file with default Front Matter Data. For example, in the `post` directory, I created a file named `post.json`:

```json
{
    "layout": "base",
    "tags": "post"
  }
```

## 7. addPassthroughCopy
For some directories (it's also possible to define for specific files), it is necessary to define the `addPassthroughCopy` method:

```js
module.exports = function(eleventyConfig){
  // addPassThroughCopy method creates a file/folder copy in the output directory
  eleventyConfig.addPassthroughCopy("src/assets/css");
  eleventyConfig.addPassthroughCopy("src/assets/img");
  eleventyConfig.addPassthroughCopy("src/assets/js");
};
```

## 8. Basic layout 
In the `_layouts` directory, I created a file named `base.njk`:

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
I modified the Front Matter Data in `index.md` to refer to the basic layout `base.njk`:
```yaml
---
layout: base
title: Home
---
# Welcome to my website!
```

## 10. CSS stylesheet
In the `assets/css` directory, I created a file named `style.css` and added a reference to it in the basic template `base.njk`:

```html
  <head>
    <link href="/assets/css/style.css" rel="stylesheet"> 
  </head>
```

## 11. Scripts
In the `package.json` file in the `root` directory, I made the following modifications:

```json
"scripts": {
    "start": "eleventy --serve",
    "build": "eleventy"
  },
```

## 12. Sources
- [Official documentation](https://www.11ty.dev/docs/get-started/)
- [11ty recipes](https://11ty.recipes)
- [Learn Eleventy From Scratch](https://learneleventyfromscratch.com)
- [11ty tips I wish I knew from the start](https://davidea.st/articles/11ty-tips-i-wish-i-knew-from-the-start/)
