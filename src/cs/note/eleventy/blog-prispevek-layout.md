---
title: Blog příspěvek - layout
translationKey: "layoutBlogPost"
templateEngineOverride: md
eleventyNavigation:
  key: Blog příspěvek - layout
  parent: Eleventy
  order: 6
---
## 1. Blog layout
V adresáři `_layouts` jsem založil soubor `blog.njk`:
```html
{% extends "src/_layouts/base.njk" %} 
{% block content %}
<h1>{{ title }}</h1>
<hr>
{{content| safe}}
{% endblock %}
```

## 2. Základní layout
Upravil jsem layout `base.njk`:
```html
<!DOCTYPE html>
<html lang="{{ lang }}">
  <head>
    ...
  </head>
  <body>
   {% include "partials/_navigation.njk" %}
    <main>
      {% block content %}    <!-- block content that is defined in layouts extending base.njk -->
      {{ content | safe }}   <!-- default value for block content if not defined in extending layouts (can be empty) -->
      {% endblock %}    
    </main>
  </body>
</html>
```

## 3. Layout blog.njk
Upravil jsem `post.json` (viz bod 7, [Počáteční nastavení](/cs/note/eleventy/pocatecni-nastaveni/)): 
```json
{
    "layout": "blog",
    "tags": "post"  
}
```
Pro všechny soubory v adresáři `post` bude `blog.njk` použit jako defaultní layout.

## 4. Funkce "Další/předchozí příspěvek" 
V adresáři `_includes/partials` jsem založil soubor `_pagination.njk`:
```html
{% set previousPost = collections.post | getPreviousCollectionItem(page) %}
{% set nextPost = collections.post | getNextCollectionItem(page) %}

{% if previousPost %}<a href="{{ previousPost.url }}">Previous post</a>{% endif %}<br>
{% if nextPost %}<a href="{{ nextPost.url }}">Next post</a>{% endif %}
```
Referenci na partials `_pagination.njk` přidáme do layout `blog.njk`:
```html
{% extends "src/_layouts/base.njk" %} 
{% block content %}
<h1>{{ title }}</h1>
<hr>
{{content| safe}}
<br>
<hr>
{% include "partials/_pagination.njk" %}
<hr>
{% endblock %}
```

## 5. Lokalizace partials
Pokud máme vícejazyčný web, je nutné v partials pracovat s lokalizovanými kolekcemi (viz bod 6, [Eleventy i18n plugin](/cs/note/eleventy/eleventy-i18n-plugin) ) a se slovníkem (viz bod 7, [Eleventy i18n plugin](/cs/note/eleventy/eleventy-i18n-plugin)). Partials `_pagination.njk` by pak vypadal takto:
```html
{% set previousPost = collections["post_" + lang ] | getPreviousCollectionItem(page) %}  <!-- localised collection -->
{% set nextPost = collections["post_" + lang ] | getNextCollectionItem(page) %}          <!-- localised collection -->

{% if previousPost %}<a href="{{ previousPost.url }}">< {{ languages[page.lang].previousPostText }}</a>{% endif %} <!-- language dictionary -->
{% if nextPost %}<a href="{{ nextPost.url }}">{{ languages[page.lang].nextPostText }} ></a>{% endif %}             <!-- language dictionary -->
```

## 6. Zdroje
- [Let's Learn 11ty Part 4: Data in Eleventy](https://dev.to/psypher1/lets-learn-11ty-part-4-data-in-eleventy-6mo) - funkce "Další/předchozí příspěvek"
- [Internationalization with Eleventy 2.0 and Netlify](https://www.lenesaile.com/en/blog/internationalization-with-eleventy-20-and-netlify/#global-data) - lokalizace partials
