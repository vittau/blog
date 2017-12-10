---
layout: post
title: "Emulating the Sharp X68000 and the Roland MT-32"
date: 2017-11-19 12:05:00
categories: software
location: Rio de Janeiro, Brazil
tags: emulator, sharp, roland, games, midi, sound
---

Back then in the eighties there was this new technology called <a href="https://en.wikipedia.org/wiki/MIDI" target="_blank">MIDI</a>. It was the first attempt at a standard for electronic instrument synthesizers. Computers of the time, such as the Japanese <a href="https://en.wikipedia.org/wiki/X68000" target="_blank">Sharp X68000</a> usually came with some <a href="https://en.wikipedia.org/wiki/Frequency_modulation_synthesis" target="_blank">FM synthesizer</a> such as the <a href="https://en.wikipedia.org/wiki/Yamaha_YM2151" target="_blank">Yamaha YM2151</a>, which modulates instrument sounds out of simple waveforms such as a <a href="https://en.wikipedia.org/wiki/Square_wave" target="_blank">square wave</a> and changes its timbre by altering the frequency.

<div class="post-image">
    <a href="{{ site.baseurl }}/img/posts/sharp-x68000.jpg" target="_blank"><img src="{{ site.baseurl }}/img/posts/sharp-x68000.jpg"/></a>
    <p class="post-image-caption">The Sharp X68000. Ain't that a beautiful piece of hardware?</p>
</div>

Other more expensive devices however, had what's called a <a href="https://en.wikipedia.org/wiki/Wavetable_synthesis" target="_blank">wavetable</a>. Wavetables are recordings of the actual instruments, of which many samples were taken and music was modulated by chosing the nearest ones and <a href="https://en.wikipedia.org/wiki/Interpolation" target="_blank">interpolating</a> between them. One such device is the <a href="https://en.wikipedia.org/wiki/Roland_MT-32" target="_blank">Roland MT-32</a> MIDI synthesizer, which cost almost US$700 back then in 1987 when it was released.

Are you ready to embark on an exciting adventure into emulation?!

<!--more-->

<div class="post-image">
    <a href="{{ site.baseurl }}/img/posts/roland-mt-32.jpg" target="_blank"><img src="{{ site.baseurl }}/img/posts/roland-mt-32.jpg"/></a>
    <p class="post-image-caption">The mighty Roland MT-32 MIDI synthesizer</p>
</div>

Great! But before that, first a little bit of motivation (well, at least my motivation). There was this <a href="https://en.wikipedia.org/wiki/Shoot_%27em_up" target="_blank">shmup</a> I used to play in the <a href="https://en.wikipedia.org/wiki/Sega_Genesis" target="_blank">Sega Genesis</a> called <a href="https://en.wikipedia.org/wiki/Sol-Feace" target="_blank">Sol-Feace</a> (which was actually known as "Sol-Deace" in the Genesis. Or as <a href="https://youtu.be/g2eH3vYbdGo?t=9m14s" target="_blank">"Sol-Feaces" by the AVGN</a>, but I digress). While reading about the Roland MIDI devices, I found out that one of my favorite games by Wolf Team, now <a href="https://en.wikipedia.org/wiki/Namco_Tales_Studio" target="_blank">Namco Tales Studio</a>, supported the Roland MT-32 hardware in its Sharp X68000 computer version. I, of course, had to play that.

<div class="post-image">
    <a href="{{ site.baseurl }}/img/posts/sol-feace-cover.jpg" target="_blank"><img src="{{ site.baseurl }}/img/posts/sol-feace-cover.jpg"/></a>
    <p class="post-image-caption">Front cover of the Japanese exclusive Sol-Feace release for the Sharp X68000</p>
</div>

Now, we first actually need a Sharp X68000 emulator, which is not one of the top priorities in the emulation world, therefore there aren't many quality options to be honest. Our best bet at this is the <a href="http://www.geocities.jp/kugimoto0715/xm6g/" target="_blank">XM6 TypeG</a> emulator (don't worry, the actual emulator GUI is in English). The installation is pretty straightforward, just extract the .zip you downloaded, and run the appropriate executable for your processor architecture, which are found in distinct directories inside the .zip file. You will also need the actual X68000 BIOS ROM files, which are public domain by now. Just google it, and put the files in the same directory as the emulator executable.

<i>Note: People report that older versions of the emulator were region-locked to Japanese Windows for some reason. Given that I had no problems whatsoever, it appears this restriction has since been removed by the author.</i>

Trouble, however, comes when you first try to figure out how you're supposed to work with the 3 disks Sol-Feace is composed of. Yes, games spawned multiple disks back then.

<div class="post-image">
    <a href="{{ site.baseurl }}/img/posts/ys-sharp-x68000-disk.jpg" target="_blank"><img src="{{ site.baseurl }}/img/posts/ys-sharp-x68000-disk.jpg"/></a>
    <p class="post-image-caption">The X68000 used 5.25" floppy disks, such as this glorious <a href="https://en.wikipedia.org/wiki/Ys_III:_Wanderers_from_Ys" target="_blank">Wanderers from Ys</a> one</p>
</div>

The fact that most of the game is in Japanese doesn't help matters too much. After fiddling with it for a bit, I figured out that you need disk 3 inserted into FDD0, and disk 2 inserted into FDD1 to get to the main menu. Disk 1 contains the intro, which you can skip entirely (if you wanna watch it, just put disk 1 in the FDD0 slot). At this point, you'll be greeted with FM synth music being modulated by the internal Sharp X68000's Yamaha YM2151 chip (emulated chip, of course).

<div class="post-image">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/uUSEkM6zFUw" frameborder="0" allowfullscreen></iframe>
    <p class="post-image-caption">The Yamaha YM2151 trying its best at "Cosmic Illusion", the first level music</p>
</div>

You are, obviously, not satisfied. You need Roland MT-32 goodness in your life, right? At this point, you have two options: shell out around 170 bucks for a used Roland MT-32, and a USB-to-MIDI cable, both of which you can find on eBay. Some people <a href="https://www.youtube.com/watch?v=eiMP-PlL6VM" target="_blank">go to great lengths</a> to pursuit this kind of approach. Or you can use an emulator called <a href="https://github.com/munt/munt" target="_blank">Munt</a>, which closely resembles the sound of the actual device, with some minor inconsistencies. You'll also need the original Roland MT-32 BIOS ROM files, which are also public domain just like the Sharp X68000 ROM. Installation is also straightforward, and in the options you point Munt to the directory where the ROM files are located.

<div class="post-image">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/j_5RWxHHVvE" frameborder="0" allowfullscreen></iframe>
    <p class="post-image-caption"><a href="https://www.philscomputerlab.com/" target="_blank">PhilsComputerLab</a> posted this comprehensive guide for the installation of the Munt emulator. In our case, finishing step 2 will suffice</p>
</div>

Now, while running Munt, open the XM6 emulator and go to the settings. There, you'll find a tab for MIDI which you'll have to set up like the screenshot below.

<div class="post-image">
    <a href="{{ site.baseurl }}/img/posts/xm6-settings.png" target="_blank"><img src="{{ site.baseurl }}/img/posts/xm6-settings.png"/></a>
    <p class="post-image-caption">XM6 TypeG settings to pass-through the MIDI signal onto the Munt emulator device</p>
</div>

To actually boot up the game in MIDI mode, you have to hold the 登録 key (the one next to the HELP key in the X68000 keyboard, and key number 53 in the emulator keyboard settings) right after you insert the disk onto the FDD0 port in the emulator. Hold it until the game's splash screen appears, and you should see the emulated MT-32 LED display come to life in the Munt window. Success!!!

<div class="post-image">
    <a href="{{ site.baseurl }}/img/posts/munt-xm6.png" target="_blank"><img src="{{ site.baseurl }}/img/posts/munt-xm6.png"/></a>
    <p class="post-image-caption">Munt emulator's screen showing the emulated LED display and the instruments' states</p>
</div>

Now you can listen to some proper game music!

<div class="post-image">
    <audio src="{{ site.baseurl }}/music/cosmic-illusion-mt-32.mp3" controls="" preload="auto" autobuffer=""></audio>
    <p class="post-image-caption">"Cosmic Illusion" in its full Roland MT-32 glory</p>
</div>

And thus, we have reached the end of our emulation journey, hope you've enjoyed the nostalgia trip, back to this era where stuff we take for granted today, was new and exciting!

<div class="post-image">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/gV9HclMPBRI" frameborder="0" allowfullscreen></iframe>
    <p class="post-image-caption">As a bonus, here's further motivation with the <a href="https://en.wikipedia.org/wiki/The_Secret_of_Monkey_Island" target="_blank">Secret of Monkey Island</a> theme!</p>
</div>