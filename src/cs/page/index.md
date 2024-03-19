---
layout: base
title: Domů
permalink: "/{{ lang }}/index.html"
translationKey: "homePage"
eleventyNavigation:
    key: Domů
    order: 1
---
# Můj Eleventy projekt
<br>
{{ collections["note_" + lang ] | eleventyNavigation | eleventyNavigationToHtml | safe }}