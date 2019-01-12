---
layout: post
title: "Linting JavaScript and TypeScript"
date: 2019-01-12 15:00:00
categories: software
location: Rio de Janeiro, Brazil
tags: javascript, typescript, prettier, lint, eslint, tslint, vscode
---

<a href="https://en.wikipedia.org/wiki/Lint_(software)" target="_blank">Linting</a> is the use of tools to analyze source-code, find and report errors, bugs, or bad coding style. This post is a guide to install and use the <a href="https://eslint.org/" target="_blank">ESLint</a> and <a href="https://palantir.github.io/tslint/" target="_blank">TSLint</a> with <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a>, while also using the extension <a href="https://github.com/prettier/prettier" target="_blank">Prettier</a> to provide the stylistic opinions. We will also extend the <a href="https://github.com/airbnb/javascript" target="_blank">Airbnb style guide</a> in the ESLint setup. I will not lie to you, dear reader, the main objective of this post is to serve as future reference for myself when setting up this environment again.

<!--more-->

The <i>.eslintrc.json</i> file goes into the user's home folder (Windows: <i>%UserProfile%</i>, Linux: <i>~</i>) and is as follows:

<pre><code class="javascript">
{
  "extends": ["airbnb", "prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": ["error"],
    "linebreak-style": 0
  }
}
</code></pre>
