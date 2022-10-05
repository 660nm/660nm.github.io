---
title:  "github-pagesを使ったブログの作り方"
date:   2022-09-04 10:03:40 +0900
categories: 
 - others
tags:
 - jekyll 
 - update
header:
   teaser: "https://lh3.googleusercontent.com/a6RP6zpXPb2LtWuuJlbULj_gI4FTbKQfGV4dNfFMWDJovLy_VDSQyHb3ZXQel_VvE644jZDR4EIQt8dXP4il6DMgz1f8zAPew0cPgKaf6RLy6benKIVVw_Awq6mmV5m0iaLwsCKl=s0"
description: >-
  github-pagesを使って趣味用のブログを作成する方法について何回かに分けて紹介します．今回は1回目です．
---

# このブログの作り方(工事中)

github pagesを使ってブログを作成する過程を記録として残しておくことにする．私の腕前としてはgithubは普段から使っているがhtmlなどの知識はほぼゼロという状態からのスタートで，この記事もgithubについてはある程度使える，macも基本的なコマンドについては使えるという前提で書いていく予定．似たような方の参考になればと思う．

そもそもgithub pagesとはgithubのレポジトリをウェブサイトの形で公開できるサービスで，サーバー代がかからないのが大きな利点だ．記事はmarkdown形式で書けば自動的にhtmlに変換して公開してくれるので普段からmarkdownに慣れている人間には記事を書く負担が減るのも良い．

github pagesでは静的ジェネレーターを活用して見た目や構造を整えることができる．例えば新しくブログ記事を書いたらトップページに新着情報として載せてほしいといったブログとして基本的な機能を利用するにはなんらかのジェネレータを活用するのが手っ取り早い．デフォルトでは`jekyll`というジェネレータを使うことができるのでとりあえずはこれを使う方法で進める．

github pagesとして外部に公開するページを作るだけなら簡単なのだが，jekyllを入れてサイトの体裁を整えるところに苦労した．基本的な手順は[githubの公式doc](https://docs.github.com/ja/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll)に従っている．

記事が長くなりそうなのでいくつかのステップに分けておく．今日は1回目.

- jekyllのセットアップ(イマココ!)
- ブログの中身の変更


## 環境
M1mac
Homebrew
zsh


## 1. M1macへのrbenvを利用したRubyのinstall
jekyllはrubyで書かれているので，まずはrubyを入れるところから始める．macにはデフォルトで`/usr/bin/ruby`に入っているのだが，一応一からやってみることにする．rubyを入れるためにrubyのバージョン管理システムである`rbenv`をHomebrew経由で導入する．追加で環境設定用のコマンドを.zshrcに追記する．

```bash
# homebrew経由でinstall
brew install rbenv

# rbenv用の環境設定を.zshrcに追記
echo 'export PATH=$HOME/.rbenv/bin:$PATH' >> ~/.zshrc
echo 'eval "$(rbenv init - zsh)"'         >> ~/.zshrc

# .zshrcをリロード
source ~/.zshrc
```

ここまでできたらちゃんと`rbenv`がインストールできているか以下のコマンドで確認しておく．

```bash
rbenv install -l
```

結果として3.0.0などいくつかの数字がズラズラ表示されればインストールは成功なのでRubyをインストールする．表示された数字の中から適当に一つ選んで以下のコマンドを実行する．私は2.7.2を選んだが特に理由はない．

```bash
rbenv install 2.7.3
```

ここで問題発生．インストールが途中で止まってしまう．．．調べてみると[こういう](https://kenzoblog.vercel.app/posts/m1-chip)記事を見つけたので同じように実行し直してみるとうまくインストールできた．ネットで調べてみるとぼちぼちインストールに失敗したという記事が出てくるので大変なステップかもしれない．インストールできたら`rbenv versions`コマンドで確認する．ここに自分の指定した番号がちゃんと表示されていれば成功．


```bash
# install ruby 
RUBY_CFLAGS="-w" rbenv install 2.7.3

# check if installed
rbenv versions
```

最後にインストールされたバージョンを実際に`rbenv global`コマンドで適用する．適用できていれば実際にrubyを実行した時のバージョン表示が自分の指定したものに変わっているはずだ．`which`でみると`rbenv`の仮想環境内に自分の入れたrubyが入っていることがわかる．

```
# 
rbenv global 2.7.3

# installされたrubyが実際に適用されたか否か
ruby -v
which ruby


```

これでめでたくrubyの環境設定は終了で，続いて本題のjekyllのinstallに移る．


## 2. bundlerとjekyllのinstall

rubyではパッケージ管理システムとして`gem`というコマンドが使われている．まずはgemがちゃんと入っているかを確認する．

```bash
which gem 
```

これでちゃんと仮想環境内のgemを指し示していたら先にすすむ．bundler(後で必要になる)とjekyllをgemからインストールする．

```bash
sudo gem install bundler jekyll 
```


## 3. サイトのセットアップ

まずはブログにしたいローカルブランチに行って，`jekyll new`コマンドで新しくサイトを生成する．

```bash
# Creates a Jekyll site in the current directory
jekyll new --skip-bundle .
```

するといくつかの新しいページが作られるが，その中で`Gemfile`を開く．ファイルでも言及されているが，github pagesで使うように2つ修正する．

```bash
#1. gem "jekyll"で始まる行をコメントアウト
#2. gem "github-pages"で始まる行のコメントを外す
```

コマンドラインから以下を実行する．

```bash
sudo /path/to/bundle install
```

これで初期セットアップは完成．もしローカル環境でブログの出来栄えをみたければ

```bash
jekyll s
```

コマンドでローカルサーバーを立ち上げてどういう表示になっているかを確認できる．



You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

Jekyll requires blog post files to be named according to the following format:

`YEAR-MONTH-DAY-title.MARKUP`

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers, and `MARKUP` is the file extension representing the format used in the file. After that, include the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
