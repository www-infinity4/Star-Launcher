// Full-length features currently offered free by established YouTube movie channels.
// Availability changes, so the player automatically skips any source YouTube rejects.
window.STAR_LAUNCHER_CATALOG = [
  { id:"SL-001", title:"Super Fuzz", year:1980, collection:"80s Action Comedy", runtimeSeconds:6000, videoId:"V9Fh3jqMZTk", cleared:true },
  { id:"SL-002", title:"Chopping Mall", year:1986, collection:"80s Cult Sci-Fi", runtimeSeconds:4620, videoId:"MglLwua-PLI", cleared:true },
  { id:"SL-003", title:"Far Out Man", year:1990, collection:"Tommy Chong Comedy", runtimeSeconds:4860, videoId:"rMl0rNThC6A", cleared:true },
  { id:"SL-004", title:"Black Fox", year:1995, collection:"Christopher Reeve Action", runtimeSeconds:5520, videoId:"GI2TFFWrBlc", cleared:true },
  { id:"SL-005", title:"No Contest", year:1995, collection:"90s Action", runtimeSeconds:5880, videoId:"KR2GQycoFFI", cleared:true },
  { id:"SL-006", title:"Fatal Combat", year:1995, collection:"90s Arcade Action", runtimeSeconds:5520, videoId:"0NOa-byFHaw", cleared:true },
  { id:"SL-007", title:"Hologram Man", year:1995, collection:"90s Sci-Fi Action", runtimeSeconds:5940, videoId:"FUO7e0E79Gk", cleared:true },
  { id:"SL-008", title:"The Misery Brothers", year:1995, collection:"90s Comedy", runtimeSeconds:5580, videoId:"Qy4rFtQti-M", cleared:true },
  { id:"SL-009", title:"Hotel Sorrento", year:1995, collection:"90s Drama", runtimeSeconds:6600, videoId:"IxGqHo8vqek", cleared:true },
  { id:"SL-010", title:"Chairman of the Board", year:1998, collection:"Carrot Top Comedy", runtimeSeconds:5700, videoId:"RvdAMAZT1KQ", cleared:true },
  { id:"SL-011", title:"Breakfast of Champions", year:1999, collection:"Bruce Willis Comedy", runtimeSeconds:6600, videoId:"uW9hO6pwjEs", cleared:true },
  { id:"SL-012", title:"Get Well Soon", year:2001, collection:"Courteney Cox Comedy", runtimeSeconds:5700, videoId:"caB-B9ae1jQ", cleared:true },
  { id:"SL-013", title:"Eulogy", year:2004, collection:"All-Star Comedy", runtimeSeconds:5460, videoId:"AY2jJ63ZB7k", cleared:true },
  { id:"SL-014", title:"Bob the Butler", year:2005, collection:"Family Comedy", runtimeSeconds:5400, videoId:"vLRK63m0m7Y", cleared:true },
  { id:"SL-015", title:"Moving McAllister", year:2007, collection:"Road Comedy", runtimeSeconds:5340, videoId:"mVZOMXWsExs", cleared:true },
  { id:"SL-016", title:"Paper Man", year:2009, collection:"Superhero Comedy", runtimeSeconds:6600, videoId:"BDdyKWZrdng", cleared:true },
  { id:"SL-017", title:"Khumba", year:2013, collection:"Animated Feature", runtimeSeconds:5100, videoId:"tf7sVfOjWYU", cleared:true }
].map(movie => ({ ...movie, posterUrl:"" }));

// Blank video IDs intentionally display synchronized channel-break cards.
window.STAR_LAUNCHER_COMMERCIALS = [
  { id:"AD-001", title:"Star Launcher intermission", durationSeconds:60, videoId:"", cleared:true },
  { id:"AD-002", title:"Next launch window", durationSeconds:60, videoId:"", cleared:true },
  { id:"AD-003", title:"StarQuest station signal", durationSeconds:60, videoId:"", cleared:true }
];
