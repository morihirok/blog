---
title: Gatsby Starter Blogで作成したブログのフォーマットをいじってみました
date: '2018-08-19'
category: 'General'
---

# Typography.js をいじる

[Gatsby Starter Blog](https://github.com/gatsbyjs/gatsby-starter-blog)はデザインを[Typography.js](https://kyleamathews.github.io/typography.js/)にて管理しています。

`gatsby new` したタイミングで `src/utils/typography.js` が生成され、それを読み込む設定になっているので、ここをいじってお望みのブログデザインを手に入れて行きます。

## インラインコードを見やすくする

Typography.js にはプラグイン機能があり、インラインコードのバックグラウンドカラーを変えてくれるプラグインがすでに存在しています。

今回は Gatsby Starter Blog のデフォルトテーマである`typography-theme-wordpress-2016`にプラグインを追加します。

まずは `npm install --save typography-plugin-code` して該当のプラグインを落とします。

あとは以下のコード例のようにプラグインを追加します。

```JavaScript
import Typography from 'typography'
import CodePlugin from 'typography-plugin-code'
import Wordpress2016 from 'typography-theme-wordpress-2016'

// (中略)

// プラグイン追加
Wordpress2016.plugins = [new CodePlugin()]
```

これで上記のようにインラインコードが見やすくなりました。

## フォントを変更する

Typography.js は JavaScript のオブジェクト形式でコンフィグを指定することができます。
`typography-theme-wordpress-2016`もコンフィグ済みの JavaScript オブジェクトということになります。

今回は日本語フォントに若干の違和感を感じたので以下のように修正しました。

```JavaScript
import Wordpress2016 from 'typography-theme-wordpress-2016'

// (中略)

// ヘッダのフォントファミリー
Wordpress2016.headerFontFamily = [
  'Merriweather',
  'Georgia',
  'YuGothic',
  'sans-serif',
]

// 本文のフォントファミリー
Wordpress2016.bodyFontFamily = [
  'YuGothic',
  'sans-serif'
]
```

`typography-theme-wordpress-2016`以外にもたくさんのテーマが用意されているので、いろいろ試して気に入ったテーマの微修正を JavaScript オブジェクトからいじっていけば、CSS の辛さから逃れつつ美味しいとこだけ調整することができそうです。
