---
title: Language switcher
translationKey: "languageSwitcher"
templateEngineOverride: md
eleventyNavigation:
  key: Language switcher
  parent: Eleventy
  order: 5
---
## 1. Assumptions
The existence of a `json` file that defines the `lang` parameter (see [Eleventy i18n plugin](/en/note/eleventy/eleventy-i18n-plugin), step 3).

## 2. Global data
In the `_data` directory, I created a file named `site.js`:
```js
module.exports = {
  title: "jcusnxj",                
  url: "https://jcusnxj.xyz",      
  baseUrl: "/",
  author: "Frank Müller",          
  buildTime: new Date(),
  languages: [
    {
      label: "EN",
      code: "en",
    },
    {
      label: "CZ",
      code: "cs",
    },
  ],
};
```

## 3. translationKey
In the Front Matter Data (of each content file), I created an attribute `translationKey`. The value of the attribute must be the same for all language versions of a specific content file:

English version of "About" page: (`/src/en/pages/about.md`): 
```yaml
---
translationKey: "aboutPage"
---
```

Czech version of "About" page: (`/src/cs/pages/about.md`):
```yaml
---
translationKey: "aboutPage"
---
```

## 4. Partials
The language switcher was supposed to be part of the horizontal navigation. Therefore, I added the following to the `_navigation.njk` file:

```html
{# loop though site.languages #}
{% for lgg in site.languages %}

    {# set translatedUrl to the homepage of that language by default #}
    {% set translatedUrl = "/" + lgg.code + "/" %}

    {# loop through all the content of the site #}
    {% for item in collections.all %}

        {# for each item in the loop, check if
        - its translationKey matches the current item translationKey
        - its lang matches the code of the language we are looping through #}
        {% if item.data.translationKey == translationKey and item.data.lang == lgg.code %}
        {% set translatedUrl = item.url %}
        {% endif %}
        
    {% endfor %}

<a href="{{ translatedUrl }}">{{ lgg.label }}</a>

{% endfor %}
```

## 5. Sources
- [Language switcher for multilingual JAMstack sites](https://www.webstoemp.com/blog/language-switcher-multilingual-jamstack-sites/)