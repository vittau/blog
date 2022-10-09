---
layout: post
title: "IEM Equalization Extravaganza"
description: "A quick introduction into the IEM equalization world"
image: "/img/posts/iem-eq.jpg"
date: 2022-10-08 18:40:00
categories: audio
location: Rio de Janeiro, Brazil
tags: audiophile, audio, music, iem, headphone, equalizer
---

Audiophiles see <a href="https://en.wikipedia.org/wiki/In-ear_monitor" target="_blank">In-ear monitors (IEMs)</a> as an inexpensive way into audiophilia. Sure, with the recent rise of the "<a href="https://www.makeuseof.com/what-is-chi-fi/" target="_blank">chi-fi</a>" it has never been so cheap to have access to good sound quality.

TODO: Create iem-eq.jpg image

<div class="post-image">
    <a href="{{ site.baseurl }}/img/posts/iem-eq.jpg" target="_blank"><img src="{{ site.baseurl }}/img/posts/iem-eq.jpg"/></a>
    <p class="post-image-caption">IEM Equalizer Extravaganza</p>
</div>

<h5>Before we proceed</h5>

Before we dive into IEM equalization, there's a few topics I need to introduce to make sure we're all on the same page.

<h6>Tonality</h6>

<strong>Tonality</strong> is basically how a sound reproduction device outputs each part of the <a href="https://en.wikipedia.org/wiki/Audio_frequency" target="_blank">frequency spectrum</a>. That is to say, it will determine how much bass, mids and treble the sound will ultimately have.

As with every hobby, it can always get more complicated. Usually we divide tonality into sub-regions, such as "sub-bass", "upper-midrange" and "air region" (high treble). There are no precise definitions of where exactly in the frequency spectrum each area is located, and the terms only provide a general idea.

The famous IEM reviewer crinacle has his own <a href="https://crinacle.com/2020/04/08/graphs-101-how-to-read-headphone-measurements/" target="_blank">definitions</a>, which are as follows:
<ul>
  <li>20Hz to 80Hz: Sub-bass</li>
  <li>80Hz to 200Hz: Mid-bass</li>
  <li>200Hz to 800Hz: Lower midrange</li>
  <li>800Hz to 1,500Hz: Centre midrange</li>
  <li>1,500Hz to 5,000Hz: Upper midrange</li>
  <li>5,000Hz to 10,000Hz: Treble</li>
  <li>10,000Hz+: Upper treble/"air"</li>
</ul>

<h6>IEMs vs headphones vs speakers</h6>

At this point, it is important to understand that <strong>different types of devices should have different frequency response curves</strong>.

In a way, speakers have it easy. The sound they output travel along your room, and reach your body like any other "natural" sound would. That is, it will reflect on surfaces, shake your body, interact with the fine structure on your ear's <a href="https://en.wikipedia.org/wiki/Auricle_(anatomy)" target="_blank">pinna</a>, until it finally reaches your eardrums. Therefore, whatever influence these things have on the sound, the speakers' job is merely to reproduce audio like a natural source would, and both will go through the same interactions.

Now headphones, on the other hand, have a trickier job to perform. They do not interact with the environment, and also bypass most of the interaction with your body. Over-ear headphones do interact with your pinna, but they do so blasting sound at a direct angle onto your ear canals. This is quite different from what a natural sound goes through, and if a headphone does not account for that in its sound signature, it will not sound correct to our brains.

Finally, IEMs have it even worse, because they bypass the pinna completely and output sound directly down your ear canals (which are also sealed by the IEM).

All of that is to say: different types of devices will aim for different types of frequency response targets.

<h6>Frequency response targets</h6>

For the remainder of this post, I will focus on IEMs. One of the most famous <strong>target response curves</strong> in the IEM world is the <a href="https://headphonesaddict.com/harman-curve/" target="_blank">Harman IE target</a> (<a href="https://www.aes.org/e-lib/browse.cfm?elib=19436" target="_blank">official paper</a>).

TODO: Add Harman curve image here

The Harman curve is meant to capture the taste of what most people would consider "good". It has what audiophiles sometimes describe as a "V-shaped" tonality: lots of bass (mostly focused on the sub-bass area) and goes up again on the treble region. It also accounts for an increased output in the region around 2~5KHz, meant to emulate the effect the ear pinna has on the sound that reaches our ears (remember, an IEM bypasses the pinna completely). This is usually referred to as the "pinna gain".

Another important curve is the diffuse field target curve, created by Etymotic Research. This curve is meant to emulate the frequency response reaching the eardrums of a dummy head when sound is arriving at it coming from all directions uniformly. It is usually perceived as a "bright" signature, having more energy in the treble region that a Harman-tuned IEM would.

Other curves exist, such as Moondrop's own in-house <a href="https://crinacle.com/2019/02/02/moondrop-blessing/" target="_blank">Virtual Diffuse Sound Field (VDSF)</a>, or reviewer curves such as crinacle's <a href="https://crinacle.com/2020/10/05/in-ear-fidelitys-iem-neutral-target-gets-an-update-database-updates/" target="_blank">IEF Neutral</a>.

<h6>"Technicalities"?</h6>

Before we move on to more technical aspects, let us quickly go over what audiophiles usually refer to as "techinicalities".

TODO: Talk about soundstage, imaging and attack/release
TODO: Talk about minimum phase devices
TODO: Talk about frequency response and distortion

<h6>Measurements</h6>

What use would target curves be if there were no way to <strong>measure</strong> and analyze how an IEM responds?

Measurements are a very complicated subject, which I do not have a lot of property to talk about, so I will give you some general pointers of where to go.

To measure the frequency response of IEMs instruments known as <a href="https://www.grasacoustics.com/products/ear-simulator/product/786-ra0402" target="_blank">couplers</a> are used. The IEM is inserted on the opening, and usually a <a href="https://en.wikipedia.org/wiki/Sine_wave" target="_blank">sine wave</a> sweep is performed on the IEM, which is then used to graph the amplitude of the sound reaching the coupler.

Due to <a href="https://en.wikipedia.org/wiki/Acoustic_resonance#Resonance_of_a_tube_of_air" target="_blank">ressonances</a> inside the coupler, IEM frequency response graphs will always end up with some peaks in certain treble frequencies. For consistency, usually reviewers try to position the peak in the same place for every measured IEM, by varying insertion depth. For instance, <a href="https://www.youtube.com/c/SuperReview/" target="_blank">Super* Review</a> targets 8KHz for the ressonance peak.

As such, frequency response graphs should be used with care, and its limitations have to be considered. They are most useful when used as a comparison tool between measurements taken with a consistent methodology. Frequency response graphs can be used as an aid for equalization, but one has to be mindful of such limitations, and also differences from person to person (your ear is not a GRAS coupler!), unit variance, etc...

<div class="post-image">
    <iframe width="560" height="315" src="https://www.youtube.com/watch?v=Qc__cF6i2mw" frameborder="0" allowfullscreen></iframe>
    <p class="post-image-caption">Crinacle goes in-depth into IEM measuring equipments</p>
</div>

<h6>Equalizers</h6>

If you're here, I assume you're reasonably familiar with the concept of <a href="https://en.wikipedia.org/wiki/Equalization_(audio)" target="_blank"><strong>audio equalization</strong></a>. Still, I will expand a bit on the two most common types of equalizers: band and parametric.

Band equalizers have filters at specific, static frequencies. They usually provide the user with a simple interface containing multiple bands at certain set frequencies, and the user is able to increase or decrease the amplitude of the audio around each frequency. These are fine for some coarse corrections, but due to the fixed bands it's often not possible to execute corrections exactly as desired.

TODO: Add band equalizer example image

For more precise corrections, we use parametric equalizers. I will leave it to the folks at PreSonus to provide a more <a href="https://www.presonus.com/learn/technical-articles/What-Is-a-Parametric-Eq" target="_blank">in-depth explanation</a>, but I will very quickly go through the main concepts intuitively. A parametric equalizer filter is composed of three parameters: frequency, Q and gain. Q stands for "quality" but that is a very deceiving name.

<ul>
  <li>Frequency: the frequency at which the filter is centered at;</li>
  <li>Q: the "spread" of the filter. A small Q value means the filter is very wide, and a large Q results in a very narrow filter;</li>
  <li>Gain: The amplitude at the center of the filter.</li>
</ul>

TODO: Add image comparing different Q values

A very useful tool to build and analyze parametric equalizers is crinacle's <a href="https://crinacle.com/graphs/iems/graphtool/" target="_blank">graph comparison tool</a>. It is an open-source available on <a href="https://github.com/mlochbaum/CrinGraph" target="_blank">GitHub</a>, made by Marshall Lochbaum. However my favorite implementation of this tool is Super* Review's <a href="https://squig.link/" target="_blank">Squig.link</a>. I even have my own deployed <a href="https://www.vitormach.dev/CrinGraph/" target="_blank">here</a>!

TODO: Talk about Wavelet, AutoEQ and Equalizer APO

In fact, we are now ready to go into the most dense part of this whole thing, which is how I came with my own target curve to help me equalize my own IEMs.

<h5>My own target curve</h5>

I'm not a huge fan of the Harman curve. It has too much bass for me, and I'm also quite sensitive to the 8KHz region, which is very prominent in the Harman curve. The new <a href="https://www.youtube.com/watch?v=RWzBw3XBn8c" target="_blank">Super 22 target curve</a> made by Super* Review is much closer to my own personal tastes, and served as the basis for my own target curve.

TODO: Add Super22 target curve image

The only things I have decided to change in the Super 22 curve were:
<ul>
  <li>added slightly more sub-bass to increase the feeling of bass extension;</li>
  <li>removed the scoop between 6~8KHz, which seems arbitrary to me personally.</li>
</ul>

Hence I came up with the VitorMach target:

TODO: Add VitorMach target curve

But wait, how did I get here? Now, it's time to dive deep into the technical part.

<h6>Room EQ Wizard (REW)</h6>

We're going to use <a href="https://www.roomeqwizard.com/" target="_blank">Room EQ Wizard (REW)</a> to create the target curve.

Super* Review kindly provided <a href="https://docs.google.com/spreadsheets/d/165QHVUpf6eEBxxvGhIEDjkRsDVrYfZlWTu_hGEaXOmc/edit?usp=sharing" target="_blank">this spreadsheet</a> to help building the input file for REW. In the first tab ("Custom"), we will be filling in amplitude values (dB) for each relevant frequency we wish to key in. It is recommended that the 1000KHz value is kept at 100, and the other frequencies to be adjusted relative to it. You only need to fill in some of the frequencies, and when you export the target curve will be interpolate along them. Switch to the "Export" for more information on how to export the curve.

Here are the exported keypoints of my own target curve:

<style>
  .target-keypoints th {
    padding: 0 10px;
    font-size: 0.75rem;
  }
  .target-keypoints td {
    padding: 0;
    font-size: 0.75rem;
  }
</style>
<table class="target-keypoints">
<thead>
  <tr>
    <th>Frequency</th>
    <th>SPL (dB)</th>
  </tr>
</thead>
<tbody>
<tr>
    <td>10</td>
    <td>107.5</td>
  </tr>
  <tr>
    <td>20</td>
    <td>107.2</td>
  </tr>
  <tr>
    <td>30</td>
    <td>106.7</td>
  </tr>
  <tr>
    <td>40</td>
    <td>106.2</td>
  </tr>
  <tr>
    <td>50</td>
    <td>105.6</td>
  </tr>
  <tr>
    <td>80</td>
    <td>104.2</td>
  </tr>
  <tr>
    <td>100</td>
    <td>103.5</td>
  </tr>
  <tr>
    <td>150</td>
    <td>102.0</td>
  </tr>
  <tr>
    <td>300</td>
    <td>100.5</td>
  </tr>
  <tr>
    <td>500</td>
    <td>100.0</td>
  </tr>
  <tr>
    <td>600</td>
    <td>100.0</td>
  </tr>
  <tr>
    <td>1,000</td>
    <td>100.0</td>
  </tr>
  <tr>
    <td>1,500</td>
    <td>102.5</td>
  </tr>
  <tr>
    <td>2,500</td>
    <td>107.1</td>
  </tr>
  <tr>
    <td>3,000</td>
    <td>107.5</td>
  </tr>
  <tr>
    <td>3,500</td>
    <td>107.1</td>
  </tr>
  <tr>
    <td>5,000</td>
    <td>105.0</td>
  </tr>
  <tr>
    <td>10,000</td>
    <td>100.0</td>
  </tr>
  <tr>
    <td>20,000</td>
    <td>94.0</td>
  </tr>
  <tr>
    <td>22,000</td>
    <td>93.5</td>
  </tr>
</tbody>
</table>

Obs.: I have manually added in values for 10Hz and 22.000KHz to make the edges of the REW output smoother (the range we will export from REW will be 20Hz to 20.000KHz).

TODO: Add an input explanation and example
TODO: Add REW screenshots
TODO: Talk about the REW export procedure for usage in CrinGraph

<h6>Using the target curve</h6>

TODO: Explain how to import the curve on Squig.link and use AutoEQ

<h6>Custom CrinGraph</h6>

As I mentioned before, CrinGraph is open-source software available on GitHub. I have decided to host my own instance using <a href="https://pages.github.com/" target="_blank">GitHub Pages</a>, which is free. The repository contains <a href="https://github.com/mlochbaum/CrinGraph/blob/master/Configuring.md" target="_blank">documentation</a> on the basic configuration for deploying your own instance.