---
title: Miscellaneous
translationKey: "miscellaneous"
templateEngineOverride: md
eleventyNavigation:
  key: Miscellaneous
  parent: Eleventy
  order: 5
---
## 1. Reference to partials in layouts
```html
{% include "partials/_partials-example.njk" %}
```

## 2. Next/Previous
Next/previous object in collection:
```html
{% set previousPost = collections.post | getPreviousCollectionItem(page) %}
{% set nextPost = collections.post | getNextCollectionItem(page) %}

{% if previousPost %}<a href="{{ previousPost.url }}">Previous post</a>{% endif %}<br>
{% if nextPost %}<a href="{{ nextPost.url }}">Next post</a>{% endif %}
```
Next/previous object in localized collection (see [Eleventy i18n](/en/note/eleventy/eleventy-i18n), step 7) + usage of localized text (see [Eleventy i18n](/en/note/eleventy/eleventy-i18n), step 8):
```html
{% set previousPost = collections["post_" + lang ] | getPreviousCollectionItem(page) %}  <!-- localised collection -->
{% set nextPost = collections["post_" + lang ] | getNextCollectionItem(page) %}          <!-- localised collection -->

{% if previousPost %}<a href="{{ previousPost.url }}">< {{ languages[page.lang].previousPostText }}</a>{% endif %} <!-- language dictionary -->
{% if nextPost %}<a href="{{ nextPost.url }}">{{ languages[page.lang].nextPostText }} ></a>{% endif %}             <!-- language dictionary -->
```

## 3. Blog list
```html
<ul class="blog-list">
    {% for item in collections["post_" + lang ] | reverse %}        <!-- returns posts from localized collection -->
        <li><a href="{{ item.url }}">{{ item.data.title }}</a></li>
    {% endfor %}
</ul>
```

## 4. Sources
- [Let's Learn 11ty Part 4: Data in Eleventy](https://dev.to/psypher1/lets-learn-11ty-part-4-data-in-eleventy-6mo) - Next/Previous function
- [Internationalization with Eleventy 2.0 and Netlify](https://www.lenesaile.com/en/blog/) - localized partials
- [Multilingual sites with Eleventy](https://www.webstoemp.com/blog/multilingual-sites-eleventy/) - localized collections