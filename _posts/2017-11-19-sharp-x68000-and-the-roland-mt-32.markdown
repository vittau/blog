---
layout: post
title: "Sharp X68000 and the Roland MT-32"
date: 2017-11-19 11:27:00
categories: software
location: Rio de Janeiro, Brazil
tags: emulator, sharp, roland, games, sound
---

Back then in the eighties there was this new exciting tech called <a href="https://en.wikipedia.org/wiki/MIDI" target="_blank">MIDI</a>. It was the first attempt at a standard for electronic instrument synthesizers. Computers of the time, such as the <a href="https://en.wikipedia.org/wiki/X68000" target="_blank">Sharp X68000</a> usually came with some <a href="https://en.wikipedia.org/wiki/Frequency_modulation_synthesis" target="_blank">FM synthesizer</a> such as the <a href="https://en.wikipedia.org/wiki/Yamaha_YM2151" target="_blank">Yamaha YM2151</a>, which modulates instrument sounds out of simple waveforms such as a <a href="https://en.wikipedia.org/wiki/Square_wave" target="_blank">square wave</a> and changes its timbre by altering the frequency.

Other more expensive devices however, had what's called a <a href="https://en.wikipedia.org/wiki/Wavetable_synthesis" target="_blank">wavetable</a>. Wavetables are recordings of the actual instruments, of which many samples were taken and music was modulated by chosing the nearest ones and <a href="https://en.wikipedia.org/wiki/Interpolation" target="_blank">interpolating</a> between them. One such device is the <a href="https://en.wikipedia.org/wiki/Roland_MT-32" target="_blank">Roland MT-32</a>, which cost almost US$700 back then in 1987 when it was released.

Are you ready to embark on an exciting adventure into emulation?!

<div class="post-image">
    <a href="{{ site.baseurl }}/img/posts/roland-mt-32.jpg" target="_blank"><img src="{{ site.baseurl }}/img/posts/roland-mt-32.jpg"/></a>
    <p class="post-image-caption">The mighty Roland MT-32</p>
</div>

<!--more-->

Great! First a little bit of motivation (well, at least my motivation). There was this <a href="https://en.wikipedia.org/wiki/Shoot_%27em_up" target="_blank">shmup</a> I used to play in the <a href="https://en.wikipedia.org/wiki/Sega_Genesis" target="_blank">Sega Genesis</a> called <a href="https://en.wikipedia.org/wiki/Sol-Feace" target="_blank">Sol-Feace</a> (which was actually known as "Sol-Deace" in the Genesis. Or as <a href="https://youtu.be/g2eH3vYbdGo?t=9m14s">"Sol-Feaces" by the AVGN</a>, but I digress). While reading about the Roland MIDI devices, I found out that one of my favorite games by Wolf Team, now <a href="https://en.wikipedia.org/wiki/Namco_Tales_Studio" target="_blank">Namco Tales Studio</a>, supported the Roland MT-32 hardware in its Sharp X68000 computer version. I, of course, had to play that.

<div class="post-image">
    <a href="{{ site.baseurl }}/img/posts/sol-feace-cover.jpg" target="_blank"><img src="{{ site.baseurl }}/img/posts/sol-feace-cover.jpg"/></a>
    <p class="post-image-caption">Front cover of the japanese Sol-Feace for the Sharp X68000</p>
</div>

Now, we first actually need a Sharp X68000 emulator, which is not of the top priorities in the emulator world, therefore there aren't many quality options to be honest. Our best bet at this is the <a href="http://www.geocities.jp/kugimoto0715/xm6g/" target="_blank">XM6 TypeG</a> emulator (don't worry, the actual emulator GUI is in English). The installation is pretty straightforward, just extract the .zip you downloaded, and run the appropriate executable for your processor architecture, which are found in distinct directories inside the .zip file.

Trouble, however, comes when you first try to figure out how you're supposed to work with the 3 disks Sol-Feace is composed of. Yes, games spawned multiple disks back then.

<div class="post-image">
    <a href="{{ site.baseurl }}/img/posts/ys-sharp-x68000-disk.jpg" target="_blank"><img src="{{ site.baseurl }}/img/posts/ys-sharp-x68000-disk.jpg"/></a>
    <p class="post-image-caption">The X68000 used 5.25" floppy disks, such as this glorious <a href="https://en.wikipedia.org/wiki/Ys_III:_Wanderers_from_Ys" target="_blank">Wanderers from Ys</a> one</p>
</div>

The fact that most of the game is in japanese doesn't help matters too much. After fiddling with it for a bit, I figured out that you need disk 3 inserted into FDD0, and disk 2 inserted into FDD1 to get to the main menu. Disk 1 contains the intro, which you can skip entirely (if you wanna watch it, just put disk 1 in the FDD0 slot).

At this point, you'll be greeted with FM synth music being modulated by the internal Sharp X68000's Yamaha YM2151 chip.

<div class="post-image">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/uUSEkM6zFUw" frameborder="0" allowfullscreen></iframe>
    <p class="post-image-caption">The Yamaha YM2151 trying its best at "Cosmic Illusion", the first level music</p>
</div>

Work in progress...