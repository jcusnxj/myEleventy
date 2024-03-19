---
layout: base
title: Home
permalink: "/{{ lang }}/index.html"
translationKey: "homePage"
eleventyNavigation:
    key: Home
    order: 1
---
# My Eleventy project
<br>
{{ collections["note_" + lang ] | eleventyNavigation | eleventyNavigationToHtml | safe }}
