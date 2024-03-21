---
title: Různé
translationKey: "miscellaneous"
templateEngineOverride: md
eleventyNavigation:
  key: Různé
  parent: Eleventy
  order: 3
---
## 1. Odkaz na partials v layoutu
```html
{% include "partials/_partials-example.njk" %}
```

## 2. Následující/Předchozí
Následující/předchozí objekt v kolekci:
```html
{% set previousPost = collections.post | getPreviousCollectionItem(page) %}
{% set nextPost = collections.post | getNextCollectionItem(page) %}

{% if previousPost %}<a href="{{ previousPost.url }}">Previous post</a>{% endif %}<br>
{% if nextPost %}<a href="{{ nextPost.url }}">Next post</a>{% endif %}
```
Následující/předchozí objekt v lokalizované kolekci (viz [Eleventy i18n](/cs/note/eleventy/eleventy-i18n), bod 6) + použití lokalizovaného textu (viz [Eleventy i18n](/cs/note/eleventy/eleventy-i18n), bod 7):
```html
{% set previousPost = collections["post_" + lang ] | getPreviousCollectionItem(page) %}  <!-- localised collection -->
{% set nextPost = collections["post_" + lang ] | getNextCollectionItem(page) %}          <!-- localised collection -->

{% if previousPost %}<a href="{{ previousPost.url }}">< {{ languages[page.lang].previousPostText }}</a>{% endif %} <!-- language dictionary -->
{% if nextPost %}<a href="{{ nextPost.url }}">{{ languages[page.lang].nextPostText }} ></a>{% endif %}             <!-- language dictionary -->
```

## 3. Zdroje
- [Let's Learn 11ty Part 4: Data in Eleventy](https://dev.to/psypher1/lets-learn-11ty-part-4-data-in-eleventy-6mo) - "Následující/předchozí" funkce
- [Internationalization with Eleventy 2.0 and Netlify](https://www.lenesaile.com/en/blog/) - lokalizace partials
- [Multilingual sites with Eleventy](https://www.webstoemp.com/blog/multilingual-sites-eleventy/) - lokalizované kolekce