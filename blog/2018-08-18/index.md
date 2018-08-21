---
title: Gatsby.jsでブログを作成しました
date: '2018-08-17'
category: 'General'
---

# TL;DR

- かなりお手軽に静的サイトを作れる
- Github Pages とか Netlify とかにホスティングすればサーバレンタル代はかからない
- 書き慣れた Markdown でブログが書ける
- Google Analitics と簡単に連携できるのでアクセス解析も可能
- サイトの細かい修正も React を知ってれば割とすんなりできる(できそう)

# やったこと

基本的には[公式ドキュメント](https://www.gatsbyjs.org/)に書いてあることしかやってないのですが、「これくらいの手順でできる」という参考になるように書いておきます。

実際に使うときは[公式ドキュメント](https://www.gatsbyjs.org/)を参照することをおすすめします。(手順変わってもこのページを保守するつもりはないです。)

## インストール & セットアップ

まずは CLI ツールをインストールします。

```Bash
npm install -g gatsby-cli
```

`gatsby new` でプロジェクトを作成します。

このとき、公式でたくさんのスターターが用意されているので好きなのを選びます。

(今回は`gatsby-starter-blog`を選びました。デザインがそのまんまなのが見て取れると思います。)

```Bash
gatsby new morihirok.github.io gatsby-starter-blog
```

あとは`cd morihirok.github.io`したのち、`npm run develop`すると`localhost:8080`で作成したサイトが確認できます。お手軽！

## Github Pages にデプロイする

これも[gh-pages](https://github.com/tschaub/gh-pages)というライブラリに乗っかれば簡単にできるようになります。

私は `git remote` でデプロイ先のリポジトリを指定して、package.json の scripts に

```JSON
"deploy": "gatsby build && gh-pages -d public -b master"
```

と書いています。これで`npm run deploy`とすればデプロイ完了です。お手軽！

## Google Analytics を導入する

[gatsby-plugin-google-analytics](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-google-analytics)というプラグインがあるので一瞬で導入できます。

プロジェクトのルートディレクトリに`gatsby-config.js`というファイルがあり、以下のようなコンフィグがあります。

```JSON
`gatsby-plugin-sharp`,
{
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: `xxx`,
    },
},
```

御察しのとおり、`trackingId`のところに Google Analytics から取得した trackingId を書いてあげれば設定完了です。お手軽！

# 今後試したいこと

実際にコードの中身をさわって、インラインコードを見やすくしたり、日本語フォントを気に入ったものにしたりといろいろ遊んでみようと思います。

書き慣れたエディタで Markdown で文章書いて、コマンド一発でアップロードできるのはとても体験がよいです！
