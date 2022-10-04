---
layout: single
title:  "github-pagesを使ったブログの作り方 part2"
date:   2022-09-05 10:00:00 +0900
categories: jekyll update
---

# このブログの作り方(工事中)

github pagesを使ってブログを作成する過程を記録として残しておくことにする．私の腕前としてはgithubは普段から使っているがhtmlなどの知識はほぼゼロという状態からのスタートで，この記事もgithubについてはある程度使える，macも基本的なコマンドについては使えるという前提で書いていく予定．似たような方の参考になればと思う．

そもそもgithub pagesとはgithubのレポジトリをウェブサイトの形で公開できるサービスで，サーバー代がかからないのが大きな利点だ．記事はmarkdown形式で書けば自動的にhtmlに変換して公開してくれるので普段からmarkdownに慣れている人間には記事を書く負担が減るのも良い．

github pagesではサイトの静的ジェネレーターを活用して見た目や構造を整えることができる．例えば新しくブログ記事を書いたらトップページに新着情報として載せてほしいといったブログとして基本的な機能を利用するにはなんらかのジェネレータを活用するのが手っ取り早い．デフォルトでは`jekyll`というジェネレータを使うことができるのでとりあえずはこれを使う方法で進める．

github pagesとして外部に公開するページを作るだけなら簡単なのだが，jekyllを入れてサイトの体裁を整えるところに苦労した．基本的な手順は[githubの公式doc](https://docs.github.com/ja/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)に従っている．

記事が長くなりそうなのでいくつかのステップに分けておく．今日は2回目で，具体的に新しいページを作ったり表示をいじってみたりということをやる．

- jekyllのセットアップ
- ブログの中身の変更(今ココ!)


## [jekyllのディレクトリ構造](http://jekyllrb-ja.github.io/docs/structure/)

セットアップが完了したディレクトリ構造をみてると以下のようになっている．

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

```

このディレクトリ構成にはルールがあって，それを守らないとちゃんと表示されないのでまずはその規則を知る必要がある．`_config.yml`は基本的な設定ファイルで，テーマやタイトルなどの情報がここに格納される．`index.md`はトップページ．`_posts/`以下にはブログ用の記事を入れる．「ブログ用の記事」と言っているのには理由があって，jekyllでは日付で紐付けられた記事(このブログ用記事)とそれ以外の記事がある．ブログ用の記事は全てこのディレクトリ内になければならず，そのファイル名は`YYYY-MM-DD-title.md`という形でなければいけない．`_site/`以下はJekyllが変換したページが配置される（デフォルトの）場所で，gitで管理する必要はないため.gitignore ファイルに追加する方が良い．


## ブログタイトルを変更する

まずは手始めにブログタイトルを変更してみる．`_config.yml`を開くと以下の様になっている部分がある．

```yml
title: Your awesome title
email: your-email@example.com
description: >- # this means to ignore newlines until "baseurl:"
  Write an awesome description for your new site here. You can edit this
  line in _config.yml. It will appear in your document head meta (for
  Google search results) and in your feed.xml site description.
baseurl: "" # the subpath of your site, e.g. /blog
```

titleなどを変更してリモートにプッシュすると，サイト名が変わっているのが確認できる．


## 新しいブログ記事を書く

デフォルトの状態で`_post`以下に例の記事が入っているのでそれを参考にすると良い．記事はマークダウンで書かれており，ファイルの先頭には次の様な記述がある．

```markdown
 ---
 layout: post
 title:  "github-pagesを使ったブログの作り方 part2"
 date:   2022-09-05 21:00:00 +0900
 categories: jekyll update
 ---
```
この`---`で囲まれた部分をYAML frontmatterとよび，ここで記事のタイトルなどを設定する．とりあえずはタイトルと日付を好きに変更して，あとは適当に記事の中身を書いてリモートにプッシュすると，トップページのPOSTと書いてある下に新しいポストが追加されている！！ クリックして今書いた内容が表示されていれば成功だ．

基本的にはこの要領でブログ記事を次々に追加していくことができる．新しい記事を書けばトップページに自動でリンクが貼られるので，これで最低限ブログの体裁はできた．





