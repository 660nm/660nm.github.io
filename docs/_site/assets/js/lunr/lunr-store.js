var store = [{
        "title": "github-pagesを使ったブログの作り方",
        "excerpt":"このブログの作り方(工事中) github pagesを使ってブログを作成する過程を記録として残しておくことにする．私の腕前としてはgithubは普段から使っているがhtmlなどの知識はほぼゼロという状態からのスタートで，この記事もgithubについてはある程度使える，macも基本的なコマンドについては使えるという前提で書いていく予定．似たような方の参考になればと思う． そもそもgithub pagesとはgithubのレポジトリをウェブサイトの形で公開できるサービスで，サーバー代がかからないのが大きな利点だ．記事はmarkdown形式で書けば自動的にhtmlに変換して公開してくれるので普段からmarkdownに慣れている人間には記事を書く負担が減るのも良い． github pagesでは静的ジェネレーターを活用して見た目や構造を整えることができる．例えば新しくブログ記事を書いたらトップページに新着情報として載せてほしいといったブログとして基本的な機能を利用するにはなんらかのジェネレータを活用するのが手っ取り早い．デフォルトではjekyllというジェネレータを使うことができるのでとりあえずはこれを使う方法で進める． github pagesとして外部に公開するページを作るだけなら簡単なのだが，jekyllを入れてサイトの体裁を整えるところに苦労した．基本的な手順はgithubの公式docに従っている． 記事が長くなりそうなのでいくつかのステップに分けておく．今日は1回目. jekyllのセットアップ(イマココ!) ブログの中身の変更 環境 M1mac Homebrew zsh 1. M1macへのrbenvを利用したRubyのinstall jekyllはrubyで書かれているので，まずはrubyを入れるところから始める．macにはデフォルトで/usr/bin/rubyに入っているのだが，一応一からやってみることにする．rubyを入れるためにrubyのバージョン管理システムであるrbenvをHomebrew経由で導入する．追加で環境設定用のコマンドを.zshrcに追記する． # homebrew経由でinstall brew install rbenv # rbenv用の環境設定を.zshrcに追記 echo 'export PATH=$HOME/.rbenv/bin:$PATH' &gt;&gt; ~/.zshrc echo 'eval \"$(rbenv init - zsh)\"' &gt;&gt; ~/.zshrc # .zshrcをリロード source ~/.zshrc ここまでできたらちゃんとrbenvがインストールできているか以下のコマンドで確認しておく． rbenv install -l 結果として3.0.0などいくつかの数字がズラズラ表示されればインストールは成功なのでRubyをインストールする．表示された数字の中から適当に一つ選んで以下のコマンドを実行する．私は2.7.2を選んだが特に理由はない． rbenv install...","categories": ["others"],
        "tags": ["jekyll","update"],
        "url": "/others/2022/09/04/make-this-blog.html",
        "teaser": "/assets/images/teaser.jpg"
      },{
        "title": "github-pagesを使ったブログの作り方 part2",
        "excerpt":"このブログの作り方(工事中) github pagesを使ってブログを作成する過程を記録として残しておくことにする．私の腕前としてはgithubは普段から使っているがhtmlなどの知識はほぼゼロという状態からのスタートで，この記事もgithubについてはある程度使える，macも基本的なコマンドについては使えるという前提で書いていく予定．似たような方の参考になればと思う． そもそもgithub pagesとはgithubのレポジトリをウェブサイトの形で公開できるサービスで，サーバー代がかからないのが大きな利点だ．記事はmarkdown形式で書けば自動的にhtmlに変換して公開してくれるので普段からmarkdownに慣れている人間には記事を書く負担が減るのも良い． github pagesではサイトの静的ジェネレーターを活用して見た目や構造を整えることができる．例えば新しくブログ記事を書いたらトップページに新着情報として載せてほしいといったブログとして基本的な機能を利用するにはなんらかのジェネレータを活用するのが手っ取り早い．デフォルトではjekyllというジェネレータを使うことができるのでとりあえずはこれを使う方法で進める． github pagesとして外部に公開するページを作るだけなら簡単なのだが，jekyllを入れてサイトの体裁を整えるところに苦労した．基本的な手順はgithubの公式docに従っている． 記事が長くなりそうなのでいくつかのステップに分けておく．今日は2回目で，具体的に新しいページを作ったり表示をいじってみたりということをやる． jekyllのセットアップ ブログの中身の変更(今ココ!) jekyllのディレクトリ構造 セットアップが完了したディレクトリ構造をみてると以下のようになっている． dir | |- index.md | |- _config.yml | |- _posts/ | |- _site/ このディレクトリ構成にはルールがあって，それを守らないとちゃんと表示されないのでまずはその規則を知る必要がある．_config.ymlは基本的な設定ファイルで，テーマやタイトルなどの情報がここに格納される．index.mdはトップページ．_posts/以下にはブログ用の記事を入れる．「ブログ用の記事」と言っているのには理由があって，jekyllでは日付で紐付けられた記事(このブログ用記事)とそれ以外の記事がある．ブログ用の記事は全てこのディレクトリ内になければならず，そのファイル名はYYYY-MM-DD-title.mdという形でなければいけない．_site/以下はJekyllが変換したページが配置される（デフォルトの）場所で，gitで管理する必要はないため.gitignore ファイルに追加する方が良い． ブログタイトルを変更する まずは手始めにブログタイトルを変更してみる．_config.ymlを開くと以下の様になっている部分がある． title: Your awesome title email: your-email@example.com description: &gt;- # this means to ignore newlines until \"baseurl:\" Write an awesome...","categories": ["others"],
        "tags": ["jekyll","update"],
        "url": "/others/2022/09/05/change-this-blog.html",
        "teaser": "https://lh3.googleusercontent.com/a6RP6zpXPb2LtWuuJlbULj_gI4FTbKQfGV4dNfFMWDJovLy_VDSQyHb3ZXQel_VvE644jZDR4EIQt8dXP4il6DMgz1f8zAPew0cPgKaf6RLy6benKIVVw_Awq6mmV5m0iaLwsCKl=s0"
      },{
        "title": "google photoの画像を埋め込む",
        "excerpt":"github pageをブログに使う場合の画像の取り扱い   githubのレポジトリはあまりサイズを大きくできない（公式の推奨で1GB）ので，このブログのメインコンテンツである画像はレポジトリに含めることができない．そこでテストとして画像はgoogle photoに入れて，その画像を埋め込む方法を試す．   実際に埋め込んでみる   まずgoogle photoにブログで使いたい画像をアップロード．「共有」メニューからURLを取得する．   google photoからの画像埋め込みのテストです．      (Nikkor Z 24-120+Z6)   tag test1  https://peterroelants.github.io/posts/adding-tags-to-github-pages/   google  photo   tag test2         Tags:                  google,             photo                ","categories": ["others"],
        "tags": ["google","photo"],
        "url": "/others/2022/10/04/upload-google-photo.html",
        "teaser": "https://lh3.googleusercontent.com/8LiGzc4UxbL9dI30V1z8ZBSAioVoCZlXXLX9vyN5zhz-eUTtTC5wswUpn1Bg3wMSJwJVxtMNeAKcOdGcPGgjwZ_gzWNiCiNlzs0c9GDnsgMyv0TH_NgVC3_tNZRb-37DXlYmCjEG"
      },{
        "title": "アヌビアス キリンミニ 購入1年後くらい経過",
        "excerpt":" ","categories": ["水草"],
        "tags": ["アヌビアス","aミニキリン"],
        "url": "/%E6%B0%B4%E8%8D%89/2022/10/04/anubius-mini-1-year.html",
        "teaser": "https://lh3.googleusercontent.com/a6RP6zpXPb2LtWuuJlbULj_gI4FTbKQfGV4dNfFMWDJovLy_VDSQyHb3ZXQel_VvE644jZDR4EIQt8dXP4il6DMgz1f8zAPew0cPgKaf6RLy6benKIVVw_Awq6mmV5m0iaLwsCKl=s0"
      },{
        "title": "SDカードケースを購入",
        "excerpt":"SDカードケース   SDカードケースを購入．   HAKUBA portable media case   購入したのはHAKUBAのSDカードが8枚収納できるケース．SDカードは8枚も使いませんが，スマホで使っているmicroSDもアダプターをつければしまえるかなということでこのサイズにしました．本当はCFexpressも収納できるケースがあると良かったのですがそれは見つけられず．   ![](https://lh3.googleusercontent.com/a6RP6zpXPb2LtWuuJlbULj_gI4FTbKQfGV4dNfFMWDJovLy_VDSQyHb3ZXQel_VvE644jZDR4EIQt8dXP4il6DMgz1f8zAPew0cPgKaf6RLy6benKIVVw_Awq6mmV5m0iaLwsCKl=s0 “”)   ","categories": ["others"],
        "tags": ["google","photo"],
        "url": "/others/2022/10/05/sdcard-case.html",
        "teaser": "https://lh3.googleusercontent.com/a6RP6zpXPb2LtWuuJlbULj_gI4FTbKQfGV4dNfFMWDJovLy_VDSQyHb3ZXQel_VvE644jZDR4EIQt8dXP4il6DMgz1f8zAPew0cPgKaf6RLy6benKIVVw_Awq6mmV5m0iaLwsCKl=s0"
      }]
