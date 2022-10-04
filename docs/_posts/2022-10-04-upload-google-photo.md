---
title:  "google photoの画像を埋め込む"
date:   2022-10-4 3:00:00 +0900
categories: google photo
tags:
 - google
 - photo
---

## github pageをブログに使う場合の画像の取り扱い

githubのレポジトリはあまりサイズを大きくできない（公式の推奨で1GB）ので，このブログのメインコンテンツである画像はレポジトリに含めることができない．そこでテストとして画像はgoogle photoに入れて，その画像を埋め込む方法を試す．


## 実際に埋め込んでみる

まずgoogle photoにブログで使いたい画像をアップロード．「共有」メニューからURLを取得する．


google photoからの画像埋め込みのテストです．

<a href="https://lh3.googleusercontent.com/8LiGzc4UxbL9dI30V1z8ZBSAioVoCZlXXLX9vyN5zhz-eUTtTC5wswUpn1Bg3wMSJwJVxtMNeAKcOdGcPGgjwZ_gzWNiCiNlzs0c9GDnsgMyv0TH_NgVC3_tNZRb-37DXlYmCjEG=w2400" target="_blank"> <img src="https://lh3.googleusercontent.com/8LiGzc4UxbL9dI30V1z8ZBSAioVoCZlXXLX9vyN5zhz-eUTtTC5wswUpn1Bg3wMSJwJVxtMNeAKcOdGcPGgjwZ_gzWNiCiNlzs0c9GDnsgMyv0TH_NgVC3_tNZRb-37DXlYmCjEG=w800" /> </a>
(Nikkor Z 24-120+Z6)

## 

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
