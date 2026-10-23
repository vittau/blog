---
layout: post
title: "DoomDeckLauncher: less setup, more DOOM"
description: "A controller-first launcher for playing community DOOM maps on a Steam Deck, without turning the evening into a configuration exercise."
image: "/img/posts/ddl-discover.png"
date: 2026-10-23 12:00:00
categories: software
location: Curitiba, Brazil
tags: games, doom, steam-deck, rust, slint, linux
---

Apparently, getting old games comfortable on a Steam Deck is becoming a recurring theme here. After <a href="{{ '/2026/09/17/modernizing-dangerous-dave' | relative_url }}">Dangerous Dave</a>, the next thing I wanted was a pleasant way to play community DOOM maps. Pick something interesting, download it, press Play. Preferably without putting the Deck down to find a keyboard.

That became <a href="https://doomdecklauncher.com/" target="_blank">DoomDeckLauncher</a>, or DDL. The name is fairly self-explanatory. I spent more time on the launcher than on naming it.

<div class="post-image">
    <a href="{{ '/img/posts/ddl-discover.png' | relative_url }}" target="_blank"><img src="{{ '/img/posts/ddl-discover.png' | relative_url }}" alt="DoomDeckLauncher Discover screen with categories and illustrated community mapset cards"/></a>
    <p class="post-image-caption">Discover, where choosing what to play is supposed to be the difficult part</p>
</div>

<!--more-->

##### The game is easy to run. The maps need some explaining

If you haven't wandered into this particular rabbit hole: DOOM has a community that keeps making new levels, usually distributed as WAD files. A mapset can be a short episode, a whole campaign, or something that barely resembles the corridors you remember. There is a lot to play beyond the original games.

The catch is that a download is not always the whole story. Which base game does it need? Which engine? Does the archive contain another WAD that has to load first? Is there a patch? What does the author mean by Boom or MBF21? And why did the music disappear?

None of this is especially frightening at a desk. Read the text file, arrange the files, launch with the right options. On a handheld, though, every little step becomes a reason to switch to Desktop Mode and start poking at tiny windows. By the time everything is ready, you have spent a surprising amount of your gaming time preparing to game.

Projects like <a href="https://github.com/karkusviktor/UZDeck" target="_blank">UZDeck</a> and <a href="https://github.com/flegald/GZDeck" target="_blank">GZDeck</a> were the inspiration here. DDL is an independent implementation, built around the particular experience I wanted: browse community maps, install one, and play it from Gaming Mode, using the controller throughout the normal flow.

##### What it does now

###### A catalog with the setup already figured out

Discover is a curated catalog, with categories for things like Cacowards, megawads, community projects and the Doomer Boards releases. At the time of writing, it has 118 recipes. There are screenshots, author credits, base-game requirements and favorites, so you can find something that looks interesting and remember it for later.

The important part is behind the cards. Each entry has a recipe describing the files it needs, where to get them, their order, and the compatibility setting to use. DDL handles downloading and preparing those files instead of asking you to reconstruct a launch command from a forum post.

<div class="post-image">
    <a href="{{ '/img/posts/ddl-mapset-detail.png' | relative_url }}" target="_blank"><img src="{{ '/img/posts/ddl-mapset-detail.png' | relative_url }}" alt="Mapset detail screen showing artwork, description and mapset information" loading="lazy"/></a>
    <p class="post-image-caption">A mapset gets its own page, rather than just being a ZIP file you vaguely remember downloading</p>
</div>

The catalog updates separately from the application. DDL checks for updates when it opens and keeps an offline fallback, so adding another mapset doesn't mean shipping another launcher binary. It also means the catalog count in this paragraph will probably age faster than the rest of the post.

###### Your games, your setups

You supply the original game data, the IWADs. DDL can look for supported Steam and GOG installations, or you can point it at a folder containing your own files. It doesn't distribute the commercial games.

The base games can be played directly from Library, too. You don't have to install a community mapset just to play Doom II.

For mapsets, profiles keep different setups and their saves apart. Difficulty and supported play options live in Play setup, along with the components and load order. Once you have it how you want it, Play uses that profile again without making you visit the settings every time.

<div class="post-image">
    <a href="{{ '/img/posts/ddl-play-setup.png' | relative_url }}" target="_blank"><img src="{{ '/img/posts/ddl-play-setup.png' | relative_url }}" alt="Play setup screen with difficulty, profile and component settings" loading="lazy"/></a>
    <p class="post-image-caption">The details are still there when you want them</p>
</div>

There is also a manual path for files outside the catalog. Create a custom setup, choose the base game, add your WADs and patches, and put them in the author's order. You can add extra files to a catalog profile as well. That does put compatibility back in your hands, but sometimes you already know exactly what you want to run.

###### Built for the controls already in your hands

DDL is written in Rust with <a href="https://slint.dev/" target="_blank">Slint</a> for the interface. The screens are designed around the Deck's 1280x800 display, with visible focus, controller hints, shoulder-button tab switching and a file picker you can navigate without a mouse. Discover and Library also have a compact list view if the illustrated cards are taking up too much room.

The visual direction is called Ember Cathedral, which explains the stained glass, warm metal and slightly excessive amount of framing. A DOOM launcher seemed like a reasonable place to allow some of that.

<div class="post-image">
    <a href="{{ '/img/posts/ddl-home.png' | relative_url }}" target="_blank"><img src="{{ '/img/posts/ddl-home.png' | relative_url }}" alt="DoomDeckLauncher Home screen with recently played mapsets" loading="lazy"/></a>
    <p class="post-image-caption">Home, for getting back to whatever was killing you last time</p>
</div>

The images show the interface with sample data. Map imagery belongs to the respective map creators; the <a href="https://github.com/vittau/Doom-Deck-Launcher/blob/main/packaging/flatpak/site/credits.html" target="_blank">credits page in the repository</a> lists the sources.

##### The parts that were actually interesting

###### Picking one engine on purpose

DDL uses <a href="https://github.com/dsda-org/dsda-doom/tree/v0.30.1" target="_blank">DSDA-Doom</a>, downloaded as the official, unmodified AppImage. The focus is classic-style community maps and their compatibility requirements, rather than trying to support every DOOM mod and every source port at once.

That gives the recipes something specific to target. Compatibility settings, often called complevels, tell DSDA which behavior a mapset expects. DDL records the intended choice alongside the files and their load order. You can inspect those details, but the normal install path already has them filled in.

It also gives the project a useful boundary: if a mod needs another engine, adding its files to DDL won't make it work. There is enough to get right with one engine already.

###### Sensible defaults, with room to make it yours

DDL provides a starting setup for the Deck, including video settings and controller bindings. You can change them to suit yourself, and launcher updates preserve those changes while bringing improvements to settings you left at their defaults. Getting a better starting point shouldn't mean having to redo your own setup.

Steam Input and gyro configuration stay manual, with instructions in the guide. DDL configures its own DSDA setup; Steam's controller settings are still yours to arrange.

##### On the robots, again

As with the Dave project, AI coding agents have done a lot of the implementation, under my direction and review. I decide the scope and priorities, try the builds, and point out where the result doesn't match what I wanted. The repository is explicit about that arrangement.

The map authors and DSDA-Doom maintainers are doing the work that makes all of this worth opening in the first place. DDL's contribution is making it easier to get from “that looks interesting” to playing it.

##### Getting it

The recommended route is the signed Flatpak from <a href="https://doomdecklauncher.com/" target="_blank">doomdecklauncher.com</a>. In Desktop Mode, open the installation link with Discover, install DDL, and add it to Steam as a non-Steam game. Launcher updates then come through Discover. There is also a portable Linux tarball on <a href="https://github.com/vittau/Doom-Deck-Launcher/releases" target="_blank">GitHub Releases</a>.

On first use, install DSDA-Doom through DDL and let it find your own base-game files, or add their folder. The <a href="https://github.com/vittau/Doom-Deck-Launcher/blob/main/docs/steam-deck-guide.md" target="_blank">Steam Deck guide</a> covers the installation details, controls and troubleshooting. Steam Deck and Linux x86-64 are the current target; there aren't Windows or macOS releases to go with the Dave ones this time.

The project is <a href="https://github.com/vittau/Doom-Deck-Launcher" target="_blank">open source under GPL-3.0-or-later</a>, and catalog contributions are welcome. If you try it on your Deck, let me know what works and what gets in the way. Preferably before I find another old game that needs a launcher.
