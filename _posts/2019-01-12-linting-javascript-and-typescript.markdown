---
layout: post
title: "Linting JavaScript and TypeScript"
date: 2019-01-12 15:00:00
categories: software
location: Rio de Janeiro, Brazil
tags: javascript, typescript, prettier, lint, eslint, tslint, vscode
---

<a href="https://en.wikipedia.org/wiki/Lint_(software)" target="_blank">Linting</a> consists of the usage of tools to analyze source-code, find and report errors, bugs, and bad coding style. This post is a guide to install and use the <a href="https://eslint.org/" target="_blank">ESLint</a> and <a href="https://palantir.github.io/tslint/" target="_blank">TSLint</a> linters with <a href="https://code.visualstudio.com/" target="_blank">Visual Studio Code</a>, while also using the extension <a href="https://github.com/prettier/prettier" target="_blank">Prettier</a> to provide the stylistic opinions. We will also extend the <a href="https://github.com/airbnb/javascript" target="_blank">Airbnb style guide</a> in the ESLint setup. I will not lie to you, dear reader, the main objective of this post is to serve as future reference for myself when setting up this environment again.

<div class="post-image">
    <a href="{{ site.baseurl }}/img/posts/linting.png" target="_blank"><img src="{{ site.baseurl }}/img/posts/linting.png"/></a>
    <p class="post-image-caption">Code formatted by Prettier, with TSLint highlighting my bad usage of var.</p>
</div>

<!--more-->

This was tested with <a href="https://nodejs.org" target="_blank">Node.js</a> 11.4.0 and <a href="https://yarnpkg.com" target="_blank">Yarn</a> 1.13.0.

Let's begin by installing all the global dependencies we will need:

<pre><code class="bash">
yarn global add typescript eslint tslint prettier eslint-plugin-import eslint-plugin-prettier eslint-config-prettier eslint-config-airbnb-base tslint-config-prettier
</code></pre>

Notice that <i>eslint-plugin-import</i> is necessary because it is a <a href="https://nodejs.org/en/blog/npm/peer-dependencies/" target="_blank">peer dependency</a> of <i>eslint-config-airbnb-base</i>. If you need support for <a href="https://reactjs.org/" target="_blank">React</a>, consider using <i>eslint-config-airbnb</i> instead. It has additional peer dependencies, check the <a href="https://www.npmjs.com/package/eslint-config-airbnb" target="_blank">dependency page</a> for more information.

The <code class="inline">.eslintrc.json</code> file goes into the user's home folder (Windows: <code class="inline">%UserProfile%</code>, Linux: <code class="inline">~</code>), and is as follows:

<pre><code class="javascript">{
  "extends": ["airbnb-base", "prettier"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": ["error"],
    "linebreak-style": 0
  }
}</code></pre>

Notice that we are extending the Airbnb style guide, and then overriding it with the Prettier config. This is to make sure that ESLint and Prettier won't fight with each other for the correct style.

The <code class="inline">tslint.json</code> file also goes into the user's home folder, and is as follows:

<pre><code class="javascript">{
  "extends": ["tslint:recommended", "tslint-config-prettier"],
  "rules": {
    "typedef": [true, "call-signature"]
  }
}</code></pre>

Notice this file's name is not preceded by a dot (it's not a hidden file).

Like before, we have extended a configuration to tell TSLint not to fight against Prettier.

At this point, we are ready to install the Visual Studio Code extensions. The ones we use are <b>Prettier</b> (<i>esbenp.prettier-vscode</i>), <b>ESLint</b> (<i>dbaeumer.vscode-eslint</i>) and <b>TSLint</b> (<i>eg2.tslint</i>). After installing them, add the following lines to the Visual Studio Code's user settings:

<pre><code class="json">"eslint.packageManager": "yarn",
"tslint.packageManager": "yarn",
"javascript.format.enable": false,
"typescript.format.enable": false,
"editor.formatOnSave": true</code></pre>

The lines "<i>javascript.format.enable</i>" and "<i>typescript.format.enable</i>" are set to <i>false</i> to disable the built-in formatter, and allow us to use Prettier correctly.

And we are done! Reload Visual Studio Code if you haven't already, and the linting should work. Happy coding!
