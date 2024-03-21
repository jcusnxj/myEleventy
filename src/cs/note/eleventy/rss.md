---
title: RSS
translationKey: "rssPlugin"
templateEngineOverride: md
eleventyNavigation:
  key: RSS
  parent: Eleventy
  order: 15
---
## 1. Instalace
```html
npm install @11ty/eleventy-plugin-rss --save-dev
```

## 2. Konfigurace 
```js
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
};
```

## 3. feed.njk
Založení souborů `/src/en/feed.njk` a `/src/cs/feed.njk`:

```yaml
---
layout: feed
permalink: /{{ lang }}/feed.xml
eleventyExcludeFromCollections: true
---
```

## 4. Globální data
Úprava souboru `/src/_data/site.js`: 
```js
module.exports = {
    title: "jcusnxj",
    url: process.env.URL || 'http://localhost:8080',
    baseUrl: "/",
    author: "Frank Müller",
    authorEmail: "example@example.com",
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
    en: {
      subtitle: `Personal blog`,
      feedUrl: 'https://jcusnxj.xyz/en/feed.xml',
    },
    cs: {
      subtitle: `Osobní blog`,
      feedUrl: 'https://jcusnxj.xyz/cs/feed.xml',
    }
  };
  ```

## 5. Layout pro feed.njk
Založení souboru `/src/_layouts/feed.njk`:

```html
<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xml:base="{{ site.url }}/{{ page.lang }}/">
  <title>{{ site.title }}</title>
  <subtitle>{{ site[page.lang].subtitle }}</subtitle>
  <link href="{{ site[page.lang].feedUrl }}" rel="self" />
  <link href="{{ site.url }}/{{ page.lang }}/" />
  {% set postslist = collections["post_" + page.lang] %}
  <updated>{{ postslist | getNewestCollectionItemDate | dateToRfc3339 }}</updated>
  <id>{{ site.url }}/{{ page.lang }}</id>
  <author>
    <name>{{ site.author }}</name>
    <email>{{ site.authorEmail }}</email>
  </author>
  {%- for post in postslist | reverse %} 
  {%- set absolutePostUrl = post.url | absoluteUrl(site.url) %}
  <entry>
    <title>{{ post.data.title }}</title>
    <link href="{{ absolutePostUrl }}" />
    <updated>{{ post.date | dateToRfc3339 }}</updated>
    <id>{{ absolutePostUrl }}</id>
    <content xml:lang="{{ page.lang }}" type="html">{{ post.templateContent | htmlToAbsoluteUrls(absolutePostUrl) }}</content>
  </entry>
  {%- endfor %}
</feed>
```

## 6. Zdroje
- [Oficiální dokumentace](https://www.11ty.dev/docs/plugins/rss/)

