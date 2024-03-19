---
title: Horizontal Navigation
translationKey: "horizontalNavigation"
templateEngineOverride: md
eleventyNavigation:
  key: Horizontal Navigation
  parent: Eleventy
  order: 3
---
## 1. Basic layout
I modified the basic layout `base.njk`:

```html
<!DOCTYPE html>
<html lang="{{ lang }}">
  <head>
    ...
  </head>
<body>
   {% include "partials/_navigation.njk" %}
    <main>
      {{ content|safe }}
    </main>
</body>
</html>
```

## 2. Partials
In the `partials` directory, I created a file named `_navigation.njk`:
```html
<header>
    {% set pages = collections.page %}
    {%- for item in pages -%}
        <a href="{{ item.url }}">{{ item.data.title }}</a>
    {%- endfor -%}
</header>
```

## 3. Localization
If we have a multilingual website, it's necessary to work with localized collections (see step 6, [Eleventy i18n plugin](/en/note/eleventy/eleventy-i18n-plugin)). Then, the `_navigation.njk` partials would look like this:"
```html
<header>
    {% set pages = collections["page_" + lang ] %}     <!-- localised collection -->
    {%- for item in pages -%}
        <a href="{{ item.url }}">{{ item.data.title }}</a>
    {%- endfor -%}
</header>
```

Localized collections can also be used in conjunction with the [Eleventy Navigation](/en/note/eleventy/eleventy-navigation-plugin/) plugin, which can control the order in which the content of the collection is returned (the order attribute - step 2, [Eleventy Navigation](/en/note/eleventy/eleventy-navigation-plugin/)). Then, the `_navigation.njk` file would look like this:
```html
<header>
    {% set navPages = collections["page_" + lang ] | eleventyNavigation %}
    {%- for item in navPages -%}
        <a href="{{ item.url }}">{{ item.title }}</a>
    {%- endfor -%}
</header>
```

## 4. Sources
- [Multilingual sites with Eleventy](https://www.webstoemp.com/blog/multilingual-sites-eleventy/)