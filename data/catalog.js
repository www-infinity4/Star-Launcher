// Playback policy: R-rated and age-restricted movie entries are excluded from this channel rotation.
// Full-length features currently offered free by established YouTube movie channels.
// Availability changes, so the player automatically skips any source YouTube rejects.
window.STAR_LAUNCHER_CATALOG = [
  { id:"SL-001", title:"Super Fuzz", year:1980, collection:"80s Action Comedy", runtimeSeconds:6000, videoId:"V9Fh3jqMZTk", cleared:true },
  { id:"SL-004", title:"Black Fox", year:1995, collection:"Christopher Reeve Action", runtimeSeconds:5520, videoId:"GI2TFFWrBlc", cleared:true },
  { id:"SL-010", title:"Chairman of the Board", year:1998, collection:"Carrot Top Comedy", runtimeSeconds:5700, videoId:"RvdAMAZT1KQ", cleared:true },
  { id:"SL-014", title:"Bob the Butler", year:2005, collection:"Family Comedy", runtimeSeconds:5400, videoId:"vLRK63m0m7Y", cleared:true },
  { id:"SL-015", title:"Moving McAllister", year:2007, collection:"Road Comedy", runtimeSeconds:5340, videoId:"mVZOMXWsExs", cleared:true },
  { id:"SL-017", title:"Khumba", year:2013, collection:"Animated Feature", runtimeSeconds:5100, videoId:"tf7sVfOjWYU", cleared:true }
].map(movie => ({ ...movie, posterUrl:"" }));

// Blank video IDs intentionally display synchronized channel-break cards.
window.STAR_LAUNCHER_COMMERCIALS = [
  { id:"AD-001", title:"Star Launcher intermission", durationSeconds:60, videoId:"", cleared:true },
  { id:"AD-002", title:"Next launch window", durationSeconds:60, videoId:"", cleared:true },
  { id:"AD-003", title:"StarQuest station signal", durationSeconds:60, videoId:"", cleared:true }
];
