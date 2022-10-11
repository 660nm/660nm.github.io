---
title:  "google photoの画像を埋め込む"
date:   2022-10-4 3:00:00 +0900
categories: 
 - others 
tags:
 - google
 - photo
header:
  teaser: "https://lh3.googleusercontent.com/8LiGzc4UxbL9dI30V1z8ZBSAioVoCZlXXLX9vyN5zhz-eUTtTC5wswUpn1Bg3wMSJwJVxtMNeAKcOdGcPGgjwZ_gzWNiCiNlzs0c9GDnsgMyv0TH_NgVC3_tNZRb-37DXlYmCjEG"
description: >-
  github pages形式のブログにgoogle photoから画像を埋め込む方法について．
---

## github pageをブログに使う場合の画像の取り扱い

githubのレポジトリはあまりサイズを大きくできない（公式の推奨で1GB）ので，このブログのメインコンテンツである画像はレポジトリに含めることができない．そこでテストとして画像はgoogle photoに入れて，その画像を埋め込む方法を試す．


## 実際に埋め込んでみる

まずgoogle photoにブログで使いたい画像をアップロードして，「共有」メニューからURLを取得する．このurlをそのままはるだけではダメで，どうも埋め込み用のURLに変換する必要があるらしい．今回は試しに[labnol.org](https://www.labnol.org/embed/google/photos/)というサイトを見つけたのでここで試してみる．取得したurlを貼り付けるだけで埋め込み用のurlに変換してくれる．ただし，urlの最後に`=w2400`とついていて，これはpt単位の横幅(width)の指定なので自分の好きな数字に変更するか無くしてしまってもよい．

あとは変換したurlを通常のmarkdownの画像埋め込みの要領で貼り付ければ完成．

```markdown
![キャプション](画像url)
```

以下が実際に埋め込んだ画像を表示したもの．

![(Nikkor Z 24-120+Z6)]("https://lh3.googleusercontent.com/8LiGzc4UxbL9dI30V1z8ZBSAioVoCZlXXLX9vyN5zhz-eUTtTC5wswUpn1Bg3wMSJwJVxtMNeAKcOdGcPGgjwZ_gzWNiCiNlzs0c9GDnsgMyv0TH_NgVC3_tNZRb-37DXlYmCjEG)

<a href="https://lh3.googleusercontent.com/8LiGzc4UxbL9dI30V1z8ZBSAioVoCZlXXLX9vyN5zhz-eUTtTC5wswUpn1Bg3wMSJwJVxtMNeAKcOdGcPGgjwZ_gzWNiCiNlzs0c9GDnsgMyv0TH_NgVC3_tNZRb-37DXlYmCjEG=w2400" target="_blank"> <img src="https://lh3.googleusercontent.com/8LiGzc4UxbL9dI30V1z8ZBSAioVoCZlXXLX9vyN5zhz-eUTtTC5wswUpn1Bg3wMSJwJVxtMNeAKcOdGcPGgjwZ_gzWNiCiNlzs0c9GDnsgMyv0TH_NgVC3_tNZRb-37DXlYmCjEG=w800" /> </a>

