---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
---

github pages環境へ移植中です．旧ブログは[こちら](https://diracconstant6582evs.blog.fc2.com/)



[test](_pages/google.md)




{% case site.tag_archive.type %}
  {% when "liquid" %}
    {% assign path_type = "#" %}
  {% when "jekyll-archives" %}
    {% assign path_type = nil %}
{% endcase %}

{% if site.tag_archive.path %}
  {% assign tags_sorted = page.tags | sort_natural %}

  <p class="page__taxonomy">
    <strong><i class="fas fa-fw fa-tags" aria-hidden="true"></i> {{ site.data.ui-text[site.locale].tags_label | default: "Tags:" }} </strong>
    <span itemprop="keywords">
    {% for tag_word in tags_sorted %}
      <a href="{{ tag_word | slugify | prepend: path_type | prepend: site.tag_archive.path | relative_url }}" class="page__taxonomy-item p-category" rel="tag">{{ tag_word }}</a>{% unless forloop.last %}<span class="sep">, </span>{% endunless %}
    {% endfor %}
    </span>
  </p>
{% endif %}
