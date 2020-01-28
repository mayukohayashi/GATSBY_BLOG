---
title: "Gatsby.jsでマークダウン記法ブログを作ってｵﾚﾂｴｰしたい"
date: "2022-01-27"
---

### Gatsby.js でマークダウン記法ブログを作って気分転換

最近なんとなく、そうだ！プログラミングを勉強しよう！と軽率に考えたんですよ。
ポートフォリオ作るぞ！と思って、やれ MERN だ SPA だ SQL だ AWS だ CI だとか……疲れました。難しい。わかったような気がした次の瞬間から何もわからない。暗中模索。

気分転換に Gatsby でブログ作って気分転換します。
自分は屑で、説明下手です。許してください！！！先に謝罪をする文化！！！！
あと本当に無知なので、Gatsby についての説明などは一切できません。もちろん、React も、Node.js も、GraphQL も何もわからない。
素晴らしい記事や公式ドキュメントがあるので、是非！すごく！勉強になる！！

- [Gatsby.js 公式 ](https://www.gatsbyjs.com/) Gatsby は紫推し
- [公式チュートリアル](https://www.gatsbyjs.org/tutorial/)
- [スターターテンプレート集](https://www.gatsbyjs.org/starters/?v=2) かっこいいテンプレいっぱいあって楽しい！
- [React の最強フレームワーク Gatsby.js の良さを伝えたい！！](https://qiita.com/hppRC/items/00739eaf9ae7fc95c1ca) はちゃめちゃに伝わりました
- [React ベース静的サイトジェネレータ Gatsby の真の力をお見せします](https://qiita.com/uehaj/items/1b7f0a86596353587466) 完全に強い。どちゃくそ勉強になる！
- [2018 年 React と Redux のエコシステム総まとめ](https://qiita.com/kotarella1110/items/e76bf9cca665157f3d2e) Redux むずかしすぎ……すごい、勉強になる！

---

### こんなかんじのものを作ります

ここにイメージ <img>
なんの変哲もないブログ。何もない。ただ、それだけ。
チラ裏記事をマークダウン記法で書いていきたい。そういう気持ちだけの存在。

---

### とりあえずデフォルトおじさんをインストール

デフォルトおじさんをインストール。
npx でやっていきます。
詳しい話は[こちらの記事](https://dev.classmethod.jp/node-js/node-npm-npx-getting-started/)を読ませていただくことにします。すごく、わかる。
ターミナルにたたきこみます。

`npx gatsby new gatsby-blog`

移動します。
`cd gatsby-blog`

---

フォルダ内を見ると色々あるかと思います。
スターターパック的存在なので、中に色々詰めてくれています最初から！やったー！ありがとう！
大事なファイルは色々ありますが、ファイル多すぎてもうやべえ。自分は底辺層の人間なので、ファイルが多いと目がチカチカして働きたくない気持ちになります。

とりあえず、まじでめちゃくちゃ大事なやつを見てください。
`package.json`
こいつはいつだってめちゃくちゃ重要なので見ます。

```package.json

{
  "scripts": {
    "build": "gatsby build",
    "develop": "gatsby develop",
    "format": "prettier --write \"**/*.{js,jsx,json,md}\"",
    "start": "npm run develop",
    "serve": "gatsby serve",
    "clean": "gatsby clean",
    "test": "echo \"Write tests! -> https://gatsby.dev/unit-testing\" && exit 1"
  },
```

全部大事ですが、特に  重要なここです。よし develop しよう！と、なります。

`gatsby develop`もしくは`npm run develop`をターミナル！打ち込む！

```
success update schema - 0.066s
success extract queries from components - 0.415s
success write out requires - 0.043s
success write out redirect data - 0.003s
success Build manifest and related icons - 0.280s
success onPostBootstrap - 0.317s
⠀
info bootstrap finished - 10.849 s
⠀
success run queries - 0.051s - 7/7 138.06/s
⠀
You can now view gatsby-starter-default in the browser.
⠀
  http://localhost:8000/
⠀
View GraphiQL, an in-browser IDE, to explore your site's data and schema
⠀
  http://localhost:8000/___graphql
⠀
Note that the development build is not optimized.
To create a production build, use gatsby build
```

こんな感じでサクセスしまくれます。success が踊るターミナルほど素晴らしいものはないです。色も緑にしてあるので優しい気持ちになります。
とりあえず`http://localhost:8000/`を開きます。

<img>

おじさんはいますか？
宇宙で Gatsby を、満面の笑みで……怖い。怖いので早く自分だけのブログにしたいです。

### ページを作ってみる

```
gatsby-blog
├── LICENSE
├── README.md
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── gatsby-ssr.js
├── package-lock.json
├── package.json
│
┣─ .cache
┣─ .node_modules
┣─ .public
┗─ src
    ┣─ components
    ┣─ images
    ┗─ pages （ここ）
         ┣─ 404.js(存在しないURLいれるとここ。http://localhost:8000/muとか)
         ┣─ index.js(おじさん)
         ┣─ page-2.js（おじさんのページから飛べる）
         ┗─ page-3.js(これを作ってみる。ファイル名は何でもよい)
```

先ほど`http://localhost:8000/`で開いたデフォルトおじさんがいるページが`index.js`であることだけなんとなくわかる。
中には React 的な書き方で色々かいてあります。デフォルトおじさんページ(index)から、page-2 にいきます。`Go to page2`クリック。

<img>

↑ が`page-2.js`なので開いてください

```
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
```

React とかコンポーネントとかなんたらかんたらなので難しいことはわかりやすい記事や公式を見てください。

とにかく HTML 的な部分をみると、なんか、あーこれはここにかいてるのかーなるほどーということがわかります。ではこの page-2.js を全部まるっとコピペして、作成した`page-3.js`に貼り付けます。で、手を加えます。

```
import React from "react"

import Layout from "../components/layout"

const ThirdPage = () => (
  <Layout>
    <h1>第三のページ（適当になんか書いてください）</h1>
  </Layout>
)

export default ThirdPage
```

手を加えるというより、消しただけ。難しいものは削除していきす。
第三のページができました。
`http://localhost:8000/page-3/`にアクセス！！！
すると、`<h1>タグ`内に書いた言葉が！！！！！！すごい、もうページ作成できた。Gatsby すげえ！！！！！！！
静的ページ作成ジェネレーターの本気！

### マークダウン記法で記事かきたいんや

トランスフォーマーを入れます。名前が良い。
こいつは、マークダウン記法で書いたやつを HTML にトランスフォーム！してくれるすごいやつです。

ターミナルにこちらを。
`npm i --save gatsby-transformer-remark`
[公式](https://www.gatsbyjs.org/packages/gatsby-transformer-remark/)に詳しく書いてあるので読んでみてください。Gatsby 公式は紫推しなので目に優しいですね。
公式でも説明してくれていますが、GraphQL クエリとか色々がわかっていると捗るかと思います。
`http://localhost:8000/___graphql`を見ると、自分が今つくってるものの GraphQL 丸わかりなので開いてみるといいとおもいます。

GraphQL クエリに関しては[プレイグラウンド](https://github.com/prisma-labs/graphql-playground)で、色々しながらなんか分かるような気がする気がします。私は気がしているだけなので、ちょっとアレなのですみません。

トランスフォーマーがインストールされたら MD フォルダと config に追加をします。

```
gatsby-blog
├── LICENSE
├── README.md
├── gatsby-browser.js
├── gatsby-config.js
├── gatsby-node.js
├── gatsby-ssr.js
├── package-lock.json
├── package.json
│
┣─ .cache
┣─ .node_modules
┣─ .public
┗─ src
    ┣─ components
    ┣─ images
    ┣─ pages
    ┗─ markdown-pages (フォルダ作成)

```

```gatsby-config.js
module.exports = {
  siteMetadata: {
    title: `ここにブログ名`,
    description: `なんかブログの説明、適当に`,
    author: `@gatsbyjs`,
  },
  これより↓
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  これより↑ここをコピー。
  ↓ここに貼り付け
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdowns`, ⇠markdownにしてください。
        path: `${__dirname}/src/markdown-pages`, ⇠ここにさっき作ったフォルダの場所記載
      },
    },
  ↑ここまで貼り付けられてるはず。

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

```

これでマークダウンで記事がかけるので、適当に`how-to-be-mushoku.md`とか名前をつけた md ファイルを作って、`markdown-pages`へとぶちこんでいきます。
二記事くらい適当に書いてください。

ちなみに、`gatsby develop`しているターミナルは勝手に動いてくれているので感謝の気持ちは忘れずに、ありがとうと声をかけてあげてください。
ただ、今回トランスフォーマーをインストールしたので、一度 Ctrl+C してさよならしてください。
もう一度、`gatsby develop`すると、トランスフォーマーが入っている状態で develop してくれます。感謝。

`http://localhost:8000/___graphql`を開き、Explorer をクリックすると左側に`query MyQuery`があります。その下に`allMarkdownRemark`みたいなのがあると嬉しいです。

### ブログっぽくする準備
