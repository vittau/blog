---
layout: post
title: "Tutorial: Vaporwave VHS effect using GIMP"
date: 2020-09-12 21:25:00
categories: software
location: Rio de Janeiro, Brazil
tags: gimp, photography, postprocessing, vaporwave, retrowave, vhs
---

After a while searching for a good <a href="https://en.wikipedia.org/wiki/Vaporwave" target="_blank">vaporwave</a> effect, I ended up deciding to do it myself using <a href="https://en.wikipedia.org/wiki/GIMP" target="_blank">GIMP</a>.

<div class="post-image">
    <a href="{{ site.baseurl }}/img/posts/vaporwave-header.jpg" target="_blank"><img src="{{ site.baseurl }}/img/posts/vaporwave-header.jpg"/></a>
    <p class="post-image-caption">Ready for some ａｅｓｔｈｅｔｉｃ?</p>
</div>

<!--more-->

Before we start, I suggest you get in the mood:

<div class="post-image">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/bAgmGZ9iQ2Y" frameborder="0" allowfullscreen></iframe>
    <p class="post-image-caption">Some classic vaporwave</p>
</div>

Here's our starting image (photography by yours truly):

<div class="post-image">
    <a href="{{ site.baseurl }}/img/posts/vaporwave-original.jpg" target="_blank"><img src="{{ site.baseurl }}/img/posts/vaporwave-original.jpg"/></a>
    <p class="post-image-caption">A lovely vintage alarm clock</p>
</div>

Our first step will be to decompose the image into the <a href="https://en.wikipedia.org/wiki/YCbCr" target="_blank">YCbCr</a> color space, which is how video is actually stored (analogically) on an actual VHS tape. We will need to process each channel separately to achieve an authentic effect.

<b>Colors > Components > Decompose...</b>

<div class="post-image">
    <a href="{{ site.baseurl }}/img/posts/vaporwave-step1.png" target="_blank"><img src="{{ site.baseurl }}/img/posts/vaporwave-step1.png"/></a>
    <p class="post-image-caption">Decompose the image into YCbCr ITU R470</p>
</div>

Next, we add a bit of <a href="https://en.wikipedia.org/wiki/Gaussian_noise" target="_blank">noise</a> to the luma channel only. It will be smoothed out later.

<b>Filters > Noise > RGB Noise...</b>

<div class="post-image">
    <a href="{{ site.baseurl }}/img/posts/vaporwave-step2.png" target="_blank"><img src="{{ site.baseurl }}/img/posts/vaporwave-step2.png"/></a>
    <p class="post-image-caption">Add a bit of gaussian noise to the luma channel</p>
</div>

After that, it's time for good ol' <a href="https://en.wikipedia.org/wiki/Gaussian_blur" target="_blank">gaussian blur</a> on the luma channel. Take note of the values, they will be different later on for the chroma channels due to mimic the effect of <a href="en.wikipedia.org/wiki/Chroma_subsampling" target="_blank">chroma subsampling</a>.

<b>Filters > Blur > Gaussian Blur...</b>

<div class="post-image">
    <a href="{{ site.baseurl }}/img/posts/vaporwave-step3.png" target="_blank"><img src="{{ site.baseurl }}/img/posts/vaporwave-step3.png"/></a>
    <p class="post-image-caption">Some gaussian blur to the luma channel</p>
</div>

It's time for the <a href="https://en.wikipedia.org/wiki/Unsharp_masking" target="_blank">unsharp mask</a> (a.k.a. sharpening). Turns out <a href="https://en.wikipedia.org/wiki/Videocassette_recorder" target="_blank">VCRs</a> add some rudimentary sharpening to the luma channel to attempt to alleviate some of the blurriness. It introduces the halo effects we are used to seeing in VHS footage.

<b>Filters > Enhance > Sharpen (Unsharp Mask)...</b>

<div class="post-image">
    <a href="{{ site.baseurl }}/img/posts/vaporwave-step4.png" target="_blank"><img src="{{ site.baseurl }}/img/posts/vaporwave-step4.png"/></a>
    <p class="post-image-caption">Unsharp mask for some nice halos</p>
</div>

This might be a good opportunity for a bit of a curve adjustment on the luma channel. VHS doesn't have that great dynamic range, let's replicate some of that.

<b>Colors > Curves...</b>

<div class="post-image">
    <a href="{{ site.baseurl }}/img/posts/vaporwave-step5.png" target="_blank"><img src="{{ site.baseurl }}/img/posts/vaporwave-step5.png"/></a>
    <p class="post-image-caption">Adjust the curves of the luma channel</p>
</div>

Now it's time to add gaussian blur to both of the color channels. Repeat this process for both the redness and blueness channels.

<b>Filters > Blur > Gaussian Blur...</b>

<div class="post-image">
    <a href="{{ site.baseurl }}/img/posts/vaporwave-step6.png" target="_blank"><img src="{{ site.baseurl }}/img/posts/vaporwave-step6.png"/></a>
    <p class="post-image-caption">Some gaussian blur to the color channels</p>
</div>

We will shift the blueness channel a bit to the left to reproduce some of the fringing distortion that usually appears during the reconstruction of the signal. It's similar to <a href="https://en.wikipedia.org/wiki/Purple_fringing" target="_blank">purple fringing</a> in photography, albeit with a different cause.

<div class="post-image">
    <a href="{{ site.baseurl }}/img/posts/vaporwave-step7.png" target="_blank"><img src="{{ site.baseurl }}/img/posts/vaporwave-step7.png"/></a>
    <p class="post-image-caption">Moved the blueness channel a bit to the left</p>
</div>

<div class="post-image">
    <a href="{{ site.baseurl }}/img/posts/vaporwave-step8.png" target="_blank"><img src="{{ site.baseurl }}/img/posts/vaporwave-step8.png"/></a>
    <p class="post-image-caption">Set 'Layer to image size' to flatten the layer shift</p>
</div>

We are ready to recompose the image onto RGB again.

<b>Colors > Components > Compose...</b>

<div class="post-image">
    <a href="{{ site.baseurl }}/img/posts/vaporwave-step9.png" target="_blank"><img src="{{ site.baseurl }}/img/posts/vaporwave-step9.png"/></a>
    <p class="post-image-caption">Recompose the image from YCbCr ITU R470 back to RGB</p>
</div>

Now comes the overkill programmer part. I have made a <a href="https://en.wikipedia.org/wiki/Node.js" target="_blank">Node</a> (or <a href="https://en.wikipedia.org/wiki/Deno_(software)" target="_blank">Deno</a>) script, which is available <a href="https://gist.github.com/vittau/4adda9c2d51de49a15d4011456e50fd8" target="_blank">here</a>, to generate a Curve Bend tool <i>.points</i> file. This tool is used to add line distortions to the image, which we will use to mimic VHS tearing caused by tape degradation.

You can run it like this:

<pre><code class="bash">node vhs.js >> vhs.points</code></pre>

<b>Filters > Distorts > Curve Bend...</b>

<div class="post-image">
    <a href="{{ site.baseurl }}/img/posts/vaporwave-step10.png" target="_blank"><img src="{{ site.baseurl }}/img/posts/vaporwave-step10.png"/></a>
    <p class="post-image-caption">Example output of the script (there are 256 values in total)</p>
</div>

<div class="post-image">
    <a href="{{ site.baseurl }}/img/posts/vaporwave-step11.png" target="_blank"><img src="{{ site.baseurl }}/img/posts/vaporwave-step11.png"/></a>
    <p class="post-image-caption">Curve bend tool</p>
</div>

To increase the vaporwave factor we can add a bit of color balance effects and reduce saturation.

<b>Colors > Color Balance...</b>
<br />
<b>Colors > Saturation...</b>

<div class="post-image">
    <a href="{{ site.baseurl }}/img/posts/vaporwave-step12.png" target="_blank"><img src="{{ site.baseurl }}/img/posts/vaporwave-step12.png"/></a>
    <p class="post-image-caption">Color balance: shift highlights to magenta</p>
</div>

<div class="post-image">
    <a href="{{ site.baseurl }}/img/posts/vaporwave-step13.png" target="_blank"><img src="{{ site.baseurl }}/img/posts/vaporwave-step13.png"/></a>
    <p class="post-image-caption">Color balance: shift midtones to cyan</p>
</div>

<div class="post-image">
    <a href="{{ site.baseurl }}/img/posts/vaporwave-step14.png" target="_blank"><img src="{{ site.baseurl }}/img/posts/vaporwave-step14.png"/></a>
    <p class="post-image-caption">Reduce saturation a bit</p>
</div>

And that's it! Here's our final result:

<div class="post-image">
    <a href="{{ site.baseurl }}/img/posts/vaporwave-final.jpg" target="_blank"><img src="{{ site.baseurl }}/img/posts/vaporwave-final.jpg"/></a>
    <p class="post-image-caption">Our vaporwave'd up photo</p>
</div>

For great vaporwave.
