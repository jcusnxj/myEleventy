---
title: Horizontální navigace
translationKey: "horizontalNavigation"
templateEngineOverride: md
eleventyNavigation:
  key: Horizontální navigace
  parent: Eleventy
  order: 3
---
## 1. Základní layout
Upravil jsem základní layout `base.njk`:

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
V adresáři `partials` jsem založil soubor `_navigation.njk`:
```html
<header>
    {% set pages = collections.page %}
    {%- for item in pages -%}
        <a href="{{ item.url }}">{{ item.data.title }}</a>
    {%- endfor -%}
</header>
```

## 3. Lokalizace
Pokud máme vícejazyčný web, je nutné pracovat s lokalizovanými kolekcemi (viz bod 6, [Eleventy i18n plugin](/cs/note/eleventy/eleventy-i18n-plugin)). Partials `_navigation.njk` by pak vypadal takto:
```html
<header>
    {% set pages = collections["page_" + lang ] %}     <!-- localised collection -->
    {%- for item in pages -%}
        <a href="{{ item.url }}">{{ item.data.title }}</a>
    {%- endfor -%}
</header>
```

Lokalizované kolekce lze použít i dohromady s pluginem [Eleventy Navigation](/cs/note/eleventy/eleventy-navigation-plugin/) s jehož pomocí lze ovlinit pořadí ve kterém je obsah kolekce vrácen (atribut `order` - bod 2, [Eleventy Navigation](/cs/note/eleventy/eleventy-navigation-plugin/)). Soubor `_navigation.njk` pak bude vypadat takto:  

```html
<header>
    {% set navPages = collections["page_" + lang ] | eleventyNavigation %}
    {%- for item in navPages -%}
        <a href="{{ item.url }}">{{ item.title }}</a>
    {%- endfor -%}
</header>
```

## 4. Zdroje
- [Multilingual sites with Eleventy](https://www.webstoemp.com/blog/multilingual-sites-eleventy/)