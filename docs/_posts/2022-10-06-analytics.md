---
title:  "github-pagesを使ったブログの作り方 part2"
date:   2022-09-05 10:00:00 +0900
categories: 
 - others
tags:
 - jekyll 
 - update
description: >-
 github-pagesを使って趣味用のブログを作成する方法について何回かに分けて紹介します．今回は2回目です．minimal mistakesというテーマをインストールしてブログの記事を書くところまでやります．
---

# このブログの作り方(工事中)

github pagesを使ってブログを作成する過程を記録として残しておくことにする．私の腕前としてはgithubは普段から使っているがhtmlなどの知識はほぼゼロという状態からのスタートで，この記事もgithubについてはある程度使える，macも基本的なコマンドについては使えるという前提で書いていく予定．似たような方の参考になればと思う．

そもそもgithub pagesとはgithubのレポジトリをウェブサイトの形で公開できるサービスで，サーバー代がかからないのが大きな利点だ．記事はmarkdown形式で書けば自動的にhtmlに変換して公開してくれるので普段からmarkdownに慣れている人間には記事を書く負担が減るのも良い．

github pagesではサイトの静的ジェネレーターを活用して見た目や構造を整えることができる．例えば新しくブログ記事を書いたらトップページに新着情報として載せてほしいといったブログとして基本的な機能を利用するにはなんらかのジェネレータを活用するのが手っ取り早い．デフォルトでは`jekyll`というジェネレータを使うことができるのでとりあえずはこれを使う方法で進める．

github pagesとして外部に公開するページを作るだけなら簡単なのだが，jekyllを入れてサイトの体裁を整えるところに苦労した．基本的な手順は[githubの公式doc](https://docs.github.com/ja/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)に従っている．

記事が長くなりそうなのでいくつかのステップに分けておく．今日は2回目で，具体的に新しいページを作ったり表示をいじってみたりということをやる．

- jekyllのセットアップ
- ブログの中身の変更(今ココ!)


## google analyticsの設置方法

google analyticsやgoogle search console，その他SEO対策はminimal mistakesに機能として盛り込まれており，基本的には`_config.yaml`に設定を書き込むだけで良い．
