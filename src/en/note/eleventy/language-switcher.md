---
title: Language switcher
translationKey: "languageSwitcher"
templateEngineOverride: md
eleventyNavigation:
  key: Language switcher
  parent: Eleventy
  order: 4
---
## 1. Assumptions
The existence of a `json` file that defines the `lang` parameter (see [Eleventy i18n](/en/note/eleventy/eleventy-i18n), step 4).

## 2. Global data
Creation of file `/src/_data/site.js`:
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

## 4. Language Switcher
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