---
title: Blog Post Layout
translationKey: "layoutBlogPost"
templateEngineOverride: md
eleventyNavigation:
  key: Blog Post Layout
  parent: Eleventy
  order: 6
---
## 1. Blog layout
In the `_layouts` directory, I created a file named `blog.njk`:
```html
{% extends "src/_layouts/base.njk" %} 
{% block content %}
<h1>{{ title }}</h1>
<hr>
{{content| safe}}
{% endblock %}
```

## 2. Basic layout
I modified the layout `base.njk`:
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
I modified `post.json` (see step 7, [Initial Set-up](/en/note/eleventy/initial-set-up)): 
```json
{
    "layout": "blog",
    "tags": "post"  
}
```
For all files in the `post` directory, `blog.njk` will be used as the default layout.

## 4. "Next/previous post" function 
In the `_includes/partials` directory, I created a file named `_pagination.njk`:
```html
{% set previousPost = collections.post | getPreviousCollectionItem(page) %}
{% set nextPost = collections.post | getNextCollectionItem(page) %}

{% if previousPost %}<a href="{{ previousPost.url }}">Previous post</a>{% endif %}<br>
{% if nextPost %}<a href="{{ nextPost.url }}">Next post</a>{% endif %}
```
We add a reference to the partials `_pagination.njk` in the layout `blog.njk`:
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

## 5. Partials Localization
If we have a multilingual website, it's necessary to work with localized collections (see step 6, [Eleventy i18n plugin](/en/note/eleventy/eleventy-i18n-plugin) ) and with a dictionary (see step 7, [Eleventy i18n plugin](/en/note/eleventy/eleventy-i18n-plugin)). Then, the partials `_pagination.njk` would look like this:
```html
{% set previousPost = collections["post_" + lang ] | getPreviousCollectionItem(page) %}  <!-- localised collection -->
{% set nextPost = collections["post_" + lang ] | getNextCollectionItem(page) %}          <!-- localised collection -->

{% if previousPost %}<a href="{{ previousPost.url }}">< {{ languages[page.lang].previousPostText }}</a>{% endif %} <!-- language dictionary -->
{% if nextPost %}<a href="{{ nextPost.url }}">{{ languages[page.lang].nextPostText }} ></a>{% endif %}             <!-- language dictionary -->
```

## 6. Sources
- [Let's Learn 11ty Part 4: Data in Eleventy](https://dev.to/psypher1/lets-learn-11ty-part-4-data-in-eleventy-6mo) - "next/previous post" function
- [Internationalization with Eleventy 2.0 and Netlify](https://www.lenesaile.com/en/blog/internationalization-with-eleventy-20-and-netlify/#global-data) - partials localization
