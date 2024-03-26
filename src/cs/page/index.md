---
layout: base
title: jcusnxj
permalink: "/{{ lang }}/index.html"
translationKey: "homePage"
eleventyNavigation:
    key: Domů
    order: 1
---
<ul class="blog-list">
    {% for item in collections["post_" + lang ] | reverse %}
        <li><a href="{{ item.url }}">{{ item.data.title }}</a></li>
    {% endfor %}
</ul>