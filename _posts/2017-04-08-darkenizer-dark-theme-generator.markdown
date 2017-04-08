---
layout: post
title:  "Darkenizer - Dark theme generator"
date:   2017-04-08 13:45:00
categories: software
location: Rio de Janeiro, Brazil
tags: css, scss, dark-theme, utility
---

One of these days while I was preparing a dark version of a SCSS, I noticed this process could probably be automated with decent results. So I had to idea to make <a href="https://www.vitormachado.me/darkenizer" target="_blank">darkenizer</a>.

<div class="post-image">
    <img src="{{ site.baseurl }}/img/posts/darkenizer.png"/>
    <p class="post-image-caption">darkenizer screenshot</p>
</div>

It works by parsing the CSS/SCSS file searching for hex colors, and then transforms these colors into <a href="https://en.wikipedia.org/wiki/HSL_and_HSV" target="_blank">HSL color space</a>. After that, it's only a matter of inverting the "lightness" (L) channel to create a darker version of the color while preserving its original hue and saturation.

In the future I plan to add some configurations such as contrast, and an easy way to replace certain colors manually with a color picker.