---
layout: base
title: Blog
permalink: "/{{ lang }}/index.html"
translationKey: "homePage"
eleventyNavigation:
    key: Blog
    order: 1
---
<div class="blog-list">

{% for item in collections["post_" + lang ] | reverse %}
<br>
<h6><a href="{{ item.url }}">{{ item.data.title }}</a></h6>
{{ item.data.date | postDate }} -
{{ item.data.excerpt }}
<br>
{% endfor %}
<div>