---
title: Blog
translationKey: "blogPage"
eleventyNavigation:
    key: Blog
    order: 2
---
<ul class="blog-list">
    {% for item in collections["post_" + lang ] | reverse %}
        <li><a href="{{ item.url }}">{{ item.data.title }}</a></li>
    {% endfor %}
</ul>