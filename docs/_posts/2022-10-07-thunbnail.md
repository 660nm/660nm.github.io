---
title:  "github-pagesを使ったブログの作り方 part3"
date:   2022-10-07 21:00:00 +0900
categories: 
 - others
tags:
 - jekyll 
 - update
description: >-
 github-pagesを使って趣味用のブログを作成する方法について何回かに分けて紹介します．今回は3回目です．テーマをカスタマイズして最新記事にサムネイルを表示します．
---

# このブログの作り方(工事中)

github pagesを使ってブログを作成する過程を記録として残しておくことにする．私の腕前としてはgithubは普段から使っているがhtmlなどの知識はほぼゼロという状態からのスタートで，この記事もgithubについてはある程度使える，macも基本的なコマンドについては使えるという前提で書いていく予定．似たような方の参考になればと思う．

そもそもgithub pagesとはgithubのレポジトリをウェブサイトの形で公開できるサービスで，サーバー代がかからないのが大きな利点だ．記事はmarkdown形式で書けば自動的にhtmlに変換して公開してくれるので普段からmarkdownに慣れている人間には記事を書く負担が減るのも良い．

github pagesではサイトの静的ジェネレーターを活用して見た目や構造を整えることができる．例えば新しくブログ記事を書いたらトップページに新着情報として載せてほしいといったブログとして基本的な機能を利用するにはなんらかのジェネレータを活用するのが手っ取り早い．デフォルトでは`jekyll`というジェネレータを使うことができるのでとりあえずはこれを使う方法で進める．

github pagesとして外部に公開するページを作るだけなら簡単なのだが，jekyllを入れてサイトの体裁を整えるところに苦労した．基本的な手順は[githubの公式doc](https://docs.github.com/ja/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)に従っている．

記事が長くなりそうなのでいくつかのステップに分けておく．今日は2回目で，具体的に新しいページを作ったり表示をいじってみたりということをやる．

- jekyllのセットアップ
- ブログの中身の変更
- minimal mistakesテーマを使う


## テーマの変更

jekyllでは既に用意された色々なテンプレートを使ってブログを作れる．前回の記事ではデフォルトテーマの`minima`を使っていたが，このテーマはデフォルトでサイドバーが入っていないという問題点があってちょっと使いにくいということで，サイドバーがあるテーマとして[`minimal mistakes`](https://github.com/mmistakes/minimal-mistakes)というのをみつけたのでこれを使ってみる．

インストールは簡単で，Gemfileと_config.ymlを以下のように編集する．

```ruby:Gemdile
source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins
gem "jekyll-include-cache", group: :jekyll_plugins
```

```yaml:_config.yml
# 注意: 他にremote_themeまたはthemeの行がある場合はその行は削除する．
remote_theme: "mmistakes/minimal-mistakes@4.24.0"
```

Minimal mistakesにかぎらず，他のテーマを使う場合でも`Gemfile`と`_config.yaml`の変更のみですむ場合が多いと思う．`Gemfile`を更新したら`bundle`で実際にローカルにインストールする．これでサイトの見た目が変わったことがわかると思う．

<!-- https://k11i.biz/blog/2016/08/11/starting-jekyll-with-minimal-mistakes/ -->

## `_config.yml`の設定

Minimaからテーマを変更しても，基本的なディレクトリ構造は同じなので前回作ったブログポストはそのまま使える．ただし，`_config.yml`の細かい設定は異なるのでこちらはちゃんと設定する．設定の花形としては[githubレポジトリ](https://github.com/mmistakes/minimal-mistakes/blob/master/_config.yml)が参考になると思う．細かい解説は[公式ドキュメント](https://mmistakes.github.io/minimal-mistakes/docs/configuration/)を参照．

```yaml
# google analyticsの設定
analytics:
  provider: "google-gtag"
  google:
    tracking_id: "G12345678"
    anonymize_ip: false # default
	
# google search console
google_site_verification: "yourVerificationCode"
```

<!-- https://zetton86.github.io/blog/20200114/ -->

## Minimal mistakesのいじり方

テーマのカスタマイズ方法について述べる．細かい部分は違っても多くのテーマで似たような操作が必要なはずだ．Minimal mistakesのgithubレポジトリを見てみると，`_layouts`にいくつかのスタイルのhtml(Liquid)ファイルがある．この`_layout`の中に`home`や`post`といったスタイルのファイルがおいてある．これらのファイルは`_includes`においてあるヘッダーやフッターなどの共通部品のhtmlファイルを参照している．

一方でcssファイルは`_sass`以下に入っており，最終的に`assets/css/main.scss`で読み込んでいる．cssをカスタマイズする場合は`_sass`内のファイルを直接修正するのではなく，`main.scss`を修正する方がメンテナンスの面で良い．

```bash
dir
 |
 |- index.md
 |
 |- _config.yml
 |
 |- _posts/
 |
 |- _site/
 |
 |- _include/
 |
 |- _sass/
 |
 |- assets/css/main.scss
```

## トップの最新記事にサムネイルを表示したい

ブログを書くに当たって，できるだけ今までのブログと似たような機能を盛り込みたいということで，重視していたことの一つが最新記事にサムネイルを表示すること．githubで運用するような技術系のブログならサムネはどうでも良いが，今回のような趣味のブログだとサムネがあった方が何をやった記事かわかりやすい．そこで今回の記事では最新記事のカスタマイズについて述べる．

まず，minimal-mistakesでの最新記事の表示は`archive-single.html`というファイルで実行される．そこでこのファイルをコピーして`archive-single-blog.html`という名前をつける．サムネイル表示する場合にはhtmlのfloat:left機能を使うことにした．そのためにサムネイル，description，そしてそれら全体のために`div`を用意する．if文などでコードが複雑になっているが，やっていることは3つの要素を`div`で囲んでいるだけ．

```html:archive-single-blog.html
{% if post.header.teaser %}
  {% capture teaser %}{{ post.header.teaser }}{% endcapture %}
{% else %}
  {% assign teaser = site.teaser %}
{% endif %}

{% if post.id %}
  {% assign title = post.title | markdownify | remove: "<p>" | remove: "</p>" %}
{% else %}
  {% assign title = post.title %}
{% endif %}

<div class="{{ include.type | default: 'list' }}__item">
  <article class="archive__item" itemscope itemtype="https://schema.org/CreativeWork">
    <h2 class="archive__item-title no_toc" itemprop="headline">
      {% if post.link %}
        <a href="{{ post.link }}">{{ title }}</a> <a href="{{ post.url | relative_url }}" rel="permalink"><i class="fas fa-link" aria-hidden="true" title="permalink"></i><span class="sr-only">Permalink</span></a>
      {% else %}
        <a href="{{ post.url | relative_url }}" rel="permalink">{{ title }}</a>
      {% endif %}
    </h2>
    {% include page__meta.html type=include.type %}
	
<!-- 最新記事のためのdiv.この中にサムネイルと記事のdescriptionを入れる -->	
    <div class="archive__item-subbox">
    {% if include.type == "grid" or teaser %}
<!-- サムネイルのためのdiv. -->	
	  <div class="archive__item-teaser-blog">
        <img src="{{ teaser | relative_url }}" alt="" >
      </div>
    {% endif %}
<!-- descriptionのためのdiv. -->	
　　　{% if post.description %}
       <div class="archive__item-excerpt-content">
	 <p class="archive__item-excerpt" itemprop="description">{{ post.description | truncate: 200 }}</p>
       </div>
      {% endif %}
    </div>
  </article>
</div>
```

対応するcssは`assets/css/main.scss`に以下のように追記する．

```css
// メインページのRecent postにサムネイルを表示する
.archive__item-subbox {
  position: relative;
  overflow: hidden;
}

// サムネ用
.archive__item-teaser-blog {
  position: relative;
  border-radius: $border-radius;
  overflow: hidden;
  float: left; //左右に分割するため
  width: 40%;  //画像の幅を40%に
  margin: 2.5%;
  margin-top: 0;
  img {
      width: 100%;
  }
}

// 記事のdescription用
.archive__item-excerpt-content {
  width: 55%; //幅を55%に
  overflow: hidden;
  float: left; //こっちにもfloat leftが必要だった
}
```

ここまでやった後で，`home.html`で`archive-single.html`となっているところを`archive-single-blog.html`に変更する．これで設定は完了した．
