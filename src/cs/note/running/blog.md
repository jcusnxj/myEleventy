---
title: Log
translationKey: "runningLog"
eleventyNavigation:
  key: Log
  parent: Běh
  order: 7
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