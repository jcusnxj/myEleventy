---
layout: base
title: jcusnxj
permalink: "/{{ lang }}/index.html"
translationKey: "homePage"
eleventyNavigation:
    key: Domů
    order: 1
---
{{ collections["note_" + lang ] | eleventyNavigation | eleventyNavigationToHtml | safe }}