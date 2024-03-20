---
layout: base
title: Home
permalink: "/{{ lang }}/index.html"
translationKey: "homePage"
eleventyNavigation:
    key: Home
    order: 1
---
{{ collections["note_" + lang ] | eleventyNavigation | eleventyNavigationToHtml | safe }}
