// Unique seed bucket 2/8 for Star Launcher.
// Control Phi's movie source farm expands this channel toward 96 distinct,
// profile-matched full movies. The seed IDs are never shared with another
// movie-channel seed catalog.
(function(){
  "use strict";

  const rows = [
    ["Pretty Outrageous",4542,"wbzh-m3cCmc","Family Central"],
    ["A Cat's Life",4902,"oVIsHiuiNj4","Family Central"],
    ["Christmas Town",4945,"daB9TDs3zmE","Family Central"],
    ["Bilal: A New Breed of Hero",6584,"krRTgW3tEr8","Family Central"],
    ["Finding Normal",5349,"_I4IF_89eE0","Pinnacle Peak"],
    ["My Private Line to God",4955,"eMuQb0_j7GY","EncourageTV"],
    ["Miracle Mile",4954,"LUyJNh3_tv0","EncourageTV"],
    ["Parents for Christmas",4600,"p7-MaSWDWn0","EncourageTV"],
    ["A Doggone Adventure",5073,"KFTBJ1P6wzM","Movie Central"],
    ["Nessie and Me",5376,"NE98-Gsxa8s","Movie Central"],
    ["Cinderella and the Secret Prince",5234,"LTsSLTL9U7k","Shout! Studios"],
    ["The Book of Esther",5366,"YCdCul9v9IA","Pinnacle Peak"]
  ];

  window.HERMIT_CATALOG=rows.map(function(row,index){return{id:"STAR-LAUNCHER-SEED-"+String(index+1).padStart(3,"0"),title:row[0],year:null,collection:"Retro Action / Sci-Fi Seed",runtimeSeconds:row[1],videoId:row[2],source:row[3],networkChannel:"Star Launcher",contentClass:"Seed Feature",rating:"Unrated",cleared:true,posterUrl:""};});
  window.INFINITY_CHANNEL={id:"STAR-LAUNCHER",sourcePolicy:"Unique static seed bucket 2/8. Runtime catalog expansion comes from Star Launcher's own Control Phi source profile.",schedulePolicy:"Seven-day no-repeat scheduler. Missing inventory stays empty until unique sources are harvested; it never wraps the seed list."};
  window.HERMIT_COMMERCIALS=[{id:"AD-001",title:"Star Launcher intermission",durationSeconds:60,videoId:"",cleared:true}];
})();
