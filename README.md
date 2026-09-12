# Star Launcher

Star Launcher is a synchronized, single-channel movie website connected conceptually to StarQuest. Every viewer in Live mode sees the same program or station break at the same Central Time broadcast moment. Viewers can start over or rewind into a personal time-shifted showing, then use Join live to return to the shared channel.

## Current foundation

- free full-length YouTube movie rotation focused on the 1980s, 1990s and 2000s
- deterministic 24-hour guide regenerated from the station date
- twelve two-hour movie slots per day
- three synchronized three-minute commercial breaks within each slot, with three one-minute spots per break
- synchronized movie return after every break
- Start over, Rewind 30 sec and Join live controls
- responsive theater interface for phones and desktops
- electric movie-specific color backgrounds with YouTube-thumbnail art
- YouTube IFrame Player API integration
- scheduler excludes every entry without a usable YouTube video ID
- automatic replacement when the YouTube player reports that a scheduled movie is unavailable

## Add approved sources

Edit `data/catalog.js`. A movie becomes playable only when it has both a YouTube `videoId` and `cleared: true`. The original commercial-release wish list was replaced because those full movies were not available as free authorized embeds.

```js
{
  title: "A free full movie",
  videoId: "AUTHORIZED_VIDEO_ID",
  cleared: true
}
```

Commercial sources are in `STAR_LAUNCHER_COMMERCIALS` in the same file. Blank commercial IDs intentionally display a synchronized Star Launcher station card instead of failing playback.

An approved movie background can be placed in `posterUrl`. If that field is blank and a YouTube video ID exists, Star Launcher uses the YouTube thumbnail.

## Broadcast clock

The engine uses `America/Chicago`. Each client derives the same active block and segment from the current absolute timestamp. Movie segments carry a source offset, so returning from a commercial resumes the movie at the correct point instead of advancing it during the break.

The daily order is deterministic: everyone receives the same lineup for a given date without a server. A later scheduled job can write editorially approved daily lineups without changing the player contract.

## Rights and embedding

Only connect uploads supplied by a rightsholder or established distributor and permitted for embedding. The player keeps YouTube controls visible and does not cover them with interface elements. Short Circuit, Maid to Order, Young Einstein, Mr. Nanny and Innerspace are priority targets, but are not placed in the live rotation until a legitimate full-length YouTube embed is available.
