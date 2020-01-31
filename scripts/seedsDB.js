// const mongoose = require("mongoose");
// const db = require("../models");

// mongoose.connect(
//     process.env.MONGODB_URI ||
//     "mongodb://localhost/comicbookdb"
//   );
// // https://www.amazon.com/gp/product/B07JJJGYQ4/?ie=UTF8&%2AVersion%2A=1&%2Aentries%2A=0
// //amazon banner link https://affiliate-program.amazon.com/home/ads/adcode/search?ac-ms-src=quicklinks&search_term=BATMAN+KINDLE
// // reading lists  https://www.comicbookherald.com/reading-dc-comics/
// // batman reading list https://www.comicbookherald.com/reading-dc-comics/batman-reading-order/
// // good reads 
// // GCD indexing??  https://docs.comics.org/wiki/Developer%27s_Guide_to_the_Code
// //https://docs.comics.org/wiki/Indexing
// // dc comics listing of seriesmanual q
// // https://www.dccomics.com/comics?seriesid=232253#browse
// //scrape this website, doing more research
// // https://www.comics.org/series/76455/details/
// // list of batman comics- go to collections/ collected
// // https://en.wikipedia.org/wiki/List_of_Batman_comics


// const characterSeed = [
//   {
//     name: "Batman",
//     publisher: "DC",
//     link: "https://dc.fandom.com/wiki/Batman",
//     img:  "https://vignette.wikia.nocookie.net/marvel_dc/images/7/7b/Batman_Vol_2_9_Textless_Variant.jpg/revision/latest/scale-to-width-down/150?cb=20120510175322",
//     info: "the super-hero protector of Gotham City, a man dressed like a bat who fights against evil and strikes terror into the hearts of criminals everywhere.",
//     series: ["new52", "rebirth", "All-Star Batman"]
//   },
//   {
//     name: "Superman",
//     publisher: "DC",
//     link: "https://dc.fandom.com/wiki/Superman",
//     img:  "https://vignette.wikia.nocookie.net/marvel_dc/images/9/9d/Superman_0008.jpg/revision/latest/scale-to-width-down/150?cb=20120825192746",
//     info: "also known as the Man of Steel, is one of the most powerful superheroes in the DC Universe.",
//     series: ["new52", "rebirth"]
//   },
//   {
//     name: "Wonder Woman",
//     publisher: "DC",
//     link: "https://dc.fandom.com/wiki/Wonder_Woman",
//         img:  "https://vignette.wikia.nocookie.net/marvel_dc/images/e/ec/Wonder_Woman_0007.jpg/revision/latest/scale-to-width-down/150?cb=20130928221412",
//         info: " is an Amazon warrior princess and one of the most powerful superheroes in the DC Universe.",
//         series: ["new52", "rebirth"]
//       },
//       {
//           name: "Aquaman",
//           publisher: "DC",
//           link: "https://dc.fandom.com/wiki/Aquaman",
//           img:  "https://vignette.wikia.nocookie.net/marvel_dc/images/5/51/Aquaman_0024.jpg/revision/latest?cb=20130516170558",
//           info: "also known as Arthur Curry and Orin, is a superhero and the ruler of the seas.",
//           series: ["rebirth"]
//         },
//         {
//           name: "Flash",
//           publisher: "DC",
//           link: "https://dc.fandom.com/wiki/Flash",
//           img:  "https://vignette.wikia.nocookie.net/marvel_dc/images/6/6e/Flash_0012.jpg/revision/latest/scale-to-width-down/150?cb=20130708162057",
//           info: "the fastest man alive. He is the protector of Central City and Keystone City, fighting against evil using his super-speed and a dedicated sense of heroism",
//           series: ["new52", "rebirth"]
//         },
//         {
//           name: "Green Lantern",
//           publisher: "DC",
//           link: "https://dc.fandom.com/wiki/Green_Lantern",
//           img:  "https://vignette.wikia.nocookie.net/marvel_dc/images/8/83/Hal_Jordan_and_the_Green_Lantern_Corps_Vol_1_45_Textless_Variant.jpg/revision/latest/scale-to-width-down/329?cb=20180523193425",
//           info: "a name that has been used by many characters in the DC Universe, and two distinct franchises.",
//           series: ["new52", "rebirth"]
//         },
//         {
//           name: "Booster Gold",
//           publisher: "DC",
//           link: "https://dc.fandom.com/wiki/Booster_Gold",
//           img:   "https://vignette.wikia.nocookie.net/marvel_dc/images/1/13/Booster_Gold_Futures_End_Vol_1_1_Present_Textless.jpg/revision/latest/scale-to-width-down/329?cb=20140926203505",
//           info: "a time-traveling super-hero from the 25th Century who uses high-tech equipment to fight crime, alongside his robotic side-kick Skeets.",
//           series: ["new52", "rebirth"]
//         },
//         {
//           name: "Shazam",
//           publisher: "DC",
//           link: "https://dc.fandom.com/wiki/Shazam",
//           img:  "https://vignette.wikia.nocookie.net/marvel_dc/images/6/61/Shazam%21_Vol_3_1_Textless_Variant.jpg/revision/latest/scale-to-width-down/329?cb=20181205234924",
//           info: "The name originally belonged to an ancient wizard, who lived in the Rock of Eternity and guarded the Seven Deadly Sins.",
//           series: ["new52", "rebirth"]
//         },
//         {
//           name: "Green Arrow",
//           publisher: "DC",
//           link: "https://dc.fandom.com/wiki/Green_Arrow",
//           img:   "https://vignette.wikia.nocookie.net/marvel_dc/images/2/29/Green_Arrow_Vol_6_1_Textless_Variant.jpg/revision/latest/scale-to-width-down/333?cb=20160617025432",
//           info: "Green Arrow is a vigilante superhero who fights crime using archery, technology, and martial arts.",
//           series: ["new52", "rebirth"]
//         },
//         {
//           name: "Swamp Thing",
//           publisher: "DC",
//           link: "https://dc.fandom.com/wiki/Swamp_Thing",
//           img:   "https://vignette.wikia.nocookie.net/marvel_dc/images/0/0b/Swamp_Thing_Vol_5_25_Textless.jpg/revision/latest/scale-to-width-down/330?cb=20131106222450",
//           info: "Swamp Thing is an elemental creature who shares a connection to all plant life on the planet Earth through a network called the Green.",
//           series: ["new52", "rebirth"]
//         },
//         {
//           name: "Red Tornado",
//           publisher: "DC",
//           link: "https://dc.fandom.com/wiki/Red_Tornado",
//           img:   "https://vignette.wikia.nocookie.net/marvel_dc/images/4/42/Red_Tornado_003.jpg/revision/latest/scale-to-width-down/329?cb=20180306225132",
//           info: "Red Tornado is an android super-hero with wind-manipulation powers in addition to incredible strength and speed.",
//           series: ["new52", "rebirth"]
//         },
//         {
//           name: "Scooby-Doo",
//           publisher: "DC",
//           link: "https://dc.fandom.com/wiki/Scooby_Doo",
//           img:  "https://vignette.wikia.nocookie.net/marvel_dc/images/1/1e/Scooby-Doo_Vol_1_159.jpg/revision/latest/scale-to-width-down/328?cb=20111222180514",
//           info: "Mystery Inc Solving Mysteries",
//           series: ["new52", "rebirth"]
//         },
//         // marvel superheroes 8
//         {
//           name: "Deadpool",
//           publisher: "Marvel",
//           link: "https://marvel.fandom.com/wiki/Wade_Wilson_(Earth-616)",
//           img:  "https://vignette.wikia.nocookie.net/marveldatabase/images/e/e3/Despicable_Deadpool_Vol_1_300_Liefeld_Variant_Textless.jpg/revision/latest/scale-to-width-down/250?cb=20180603160322",
//           info: "As 'The Merc with a Mouth' he set out as Deadpool to kill and have a good time doing it. Deadpool was created by Fabian Nicieza and Rob Liefeld, first appearing in New Mutants #98 (1991).",
//           series: ["Secret Wars"]
//         },
//         {
//           name: "Spider-Man",
//           publisher: "Marvel",
//           link: "https://marvel.fandom.com/wiki/Spider-Man",
//           img:  "https://vignette.wikia.nocookie.net/marveldatabase/images/c/c8/Amazing_Spider-Man_Vol_3_1_Ross_Variant_Textless.jpg/revision/latest/scale-to-width-down/250?cb=20140124154956",
//           info: "As a result of a radioactive spider bite, high schooler Peter Parker developed powers and abilities similar to that of a spider.",
//           series: ["Secret Wars"]
//         },
//         {
//           name: "Iron Man",
//           publisher: "Marvel",
//           link: "https://marvel.fandom.com/wiki/Iron_Man",
//           img:  "https://vignette.wikia.nocookie.net/marveldatabase/images/a/a8/Superior_Iron_Man_Vol_1_1_Marvel_Comics_75th_Anniversary_Variant_Textless.jpg/revision/latest/scale-to-width-down/250?cb=20140819193357",
//           info: "Stark built an armored suit to escape captivity, which doubled as a device to keep his heart beating keeping him alive. Once he returned to the United States, Stark reinvented himself as the armor-clad superhero Iron Man.",
//           series: ["Secret Wars"]
//         },
//         {
//           name: "Thor",
//           publisher: "Marvel",
//           link: "https://marvel.fandom.com/wiki/Thor",
//           img:  "https://vignette.wikia.nocookie.net/marveldatabase/images/a/ae/Thor_Vol_4_1_Ross_Variant_Textless.jpg/revision/latest/scale-to-width-down/250?cb=20140909103520",
//           info: "Leaping from the legends of Norse mythology, the Asgardian God of Thunder, Thor Odinson, is the son of Odin the All-Father and Jord, Elder Goddess and spirit of the Earth.",
//           series: ["Secret Wars"]
//         },
//         {
//           name: "Hulk",
//           publisher: "Marvel",
//           link: "https://marvel.fandom.com/wiki/Hulk",
//           img:  "https://vignette.wikia.nocookie.net/marveldatabase/images/c/ce/Savage_Hulk_Vol_2_1_Marvel_Comics_75th_Anniversary_Variant_Textless.jpg/revision/latest/scale-to-width-down/250?cb=20140825205702",
//           info: "Bruce Banner was a scientist who was working on a gamma bomb when he noticed teenager Rick Jones out on the test range.",
//           series: ["Secret Wars"]
//         },
//         {
//           name: "Black Widow",
//           publisher: "Marvel",
//           link: "https://marvel.fandom.com/wiki/Black_Widow",
//           img:  "https://vignette.wikia.nocookie.net/marveldatabase/images/5/54/Black_Widow_Vol_5_13_Textless.jpg/revision/latest/scale-to-width-down/250?cb=20140916201519",
//           info: "A former KGB agent, Natalia Romanova otherwise known as Black Widow defected to the United States from the Soviet Union (later known as Russia) to join S.H.I.E.L.D..",
//           series: ["Secret Wars"]
//         },
//         {
//           name: "Avengers",
//           publisher: "Marvel",
//           link: "https://marvel.fandom.com/wiki/Avengers",
//           img:  "https://vignette.wikia.nocookie.net/marveldatabase/images/1/12/Avengers_Vol_8_10_Ross_Variant_Textless.jpg/revision/latest/scale-to-width-down/250?cb=20180823183630",
//           info: "The Avengers are Earth's foremost major organization of costumed superhuman crimefighters, adventurers and heroes dedicated to safeguarding the world from any threat beyond the power of conventional peacekeeping forces or any which any of them can't handle alone.",
//           series: ["Secret Wars"]
//         },
//         {
//           name: "Fantastic Four",
//           publisher: "Marvel",
//           link: "https://marvel.fandom.com/wiki/Fantastic_Four",
//           img:  "https://vignette.wikia.nocookie.net/marveldatabase/images/7/72/Fantastic_Four_Vol_6_1_Virgin_Variant.jpg/revision/latest/scale-to-width-down/400?cb=20180523101754",
//           info: "The Fantastic Four are a team of adventurers and super-heroes. During an accident on an experimental rocket, they were all given fantastic powers through exposure to cosmic rays.",
//           series: ["Secret Wars"]
//         },
//         {
//           name: "Wolverine",
//           publisher: "Marvel",
//           link: "https://marvel.fandom.com/wiki/Wolverine",
//           img:  "https://vignette.wikia.nocookie.net/marveldatabase/images/1/1d/Death_of_Wolverine_Vol_1_4_Land_Variant_Textless.jpg/revision/latest/scale-to-width-down/250?cb=20141003044738",
//           info: "Wolverine was created by Len Wein, John Romita and Herb Trimpe, first cameo appearence in Incredible Hulk #180 (Oct 1974) and first full appearence in Incredible Hulk #181 (Nov 1974).",
//           series: ["Secret Wars"]
//         },
//         {
//           name: "Captain America",
//           publisher: "Marvel",
//           link: "https://marvel.fandom.com/wiki/Captain_America",
//           img:  "https://vignette.wikia.nocookie.net/marveldatabase/images/9/90/Captain_America_Vol_7_22_Marvel_Comics_75th_Anniversary_Variant_Textless.jpg/revision/latest/scale-to-width-down/250?cb=20140423170823",
//           info: "As a symbol of freedom and patriotism, a number of men have taken the mantle of Captain America in Rogers' various absences. Of note are William Nasland and Jeffrey Mace, Bucky Barnes, and Sam Wilson.",
//           series: ["Secret Wars"]
//         },
//         {
//           name: "Storm",
//           publisher: "Marvel",
//           link: "https://marvel.fandom.com/wiki/storm",
//           img:  "https://vignette.wikia.nocookie.net/marveldatabase/images/b/b1/Fearless_Vol_1_2_Textless.jpg/revision/latest/scale-to-width-down/250?cb=20190524181911",
//           info: "After her parents were murdered in the rubble of a plane crash, Ororo Munroe began life as a thief with a severe case of claustrophobia, until she was worshiped as a goddess in a tribe in Africa. ",
//           series: ["Secret Wars"]
//         },
//         {
//           name: "Captain Marvel",
//           publisher: "Marvel",
//           link: "https://marvel.fandom.com/wiki/Captain_Marvel",
//           img:  "https://vignette.wikia.nocookie.net/marveldatabase/images/f/f2/Captain_Marvel_Vol_9_3_McKelvie_Variant_Textless.jpg/revision/latest/scale-to-width-down/250?cb=20160310183503",
//           info: "cool cat",
//           series: ["Secret Wars"]
//         },
//         //       Captain Marvel
//       ];
      
// const seriesSeed = [
//   {
//     series: "new52",
//     character: "Batman",
//     name: "Batman",
//     synopsis: "batman fights joker...",
//     volumes: ["Vol 1: Court of Owls", "Vol 2: City of Owls", "Vol 3: Death of the Family", "Vol 4: Zero Year - Secret City", "Vol 5: Zero Year - Dark City", "Vol 6: Graveyard Shift", "Vol 7: Endgame", "Vol 8: Superheavy", "Vol 9: Bloom", "Vol 10: Epilogue","DC Comics: Zero Year", "The Joker: Endgame", "Batman vs. Superman: The Greatest Battles", "Absolute Batman: The Court of Owls"],
//     extras: ["DC Comics: Zero Year", "The Joker: Endgame", "Batman vs. Superman: The Greatest Battles", "Absolute Batman: The Court of Owls"]
//   }, 
//   {
//     series: "new52",
//     character: "Batman",
//     name: "Batman: Detective Comics",
//     synopsis: "batman fights joker...",
//     volumes: ["Vol 1: Faces of Death", "Vol 2: Scare Tactics", "Vol 3: Emperor Penguin", "Vol 4: The Wrath", "Vol 5: Gothtopia", "Vol 6: Icarus", "Vol 7: Anarky", "Vol 8: Blood of Heroes", "Vol 9: Gordon at War", "Vol 10: Epilogue"],
//   }, 
//   {
//     series: "new52",
//     character: "Batman",
//     name: "Batman and Robin",
//     synopsis: "batman fights joker...",
//     volumes: ["Vol 1: Born to Kill", "Vol 2: Pearl", "Vol 3: Death of the Family", "Vol 4: Requiem for Damian", "Vol 5: The Big Burn", "Vol 6: The Hunt for Robin", "Vol 7: Robin Rises", "Bad Blood"],
// }, 
//   {
//     series: "rebirth",
//     character: "Batman",
//     name: "Batman",
//     synopsis: "batman fights joker hahaha...",
//     volumes: ["Vol 1: I am Gotham", "Vol 2: I Am Suicide", "Vol 3: I Am Bane", "Vol 4: The War of Jokes and Riddles", "Vol 5: Rules of Engagement", "Vol 6: Bride or Burglar", "Vol 7: The Wedding", "Vol 8: Cold Days", "Vol 9: The Tyrant Wing", "Vol 10: Knightmares", "Vol 11: The Fall and the Fallen"],
//   }, 
//   {
//     series: "rebirth",
//     character: "Batman",
//     name: "All-Star Batman",
//     synopsis: "batman fights joker hahaha... mwaahahha ",
//     volumes: ["Vol 1: My Own Worst Enemy", "Vol 2: Ends of the Earth", "Vol 3: The First Ally"],
//   },
//   {
//     series: "1996",
//     character: "Batman",
//     name: "The Long Halloween",
//     synopsis: "batman fights joker hahaha... mwaahahha ",
//     volumes: ["Batman: The Long Halloween", "Batman: Haunted Knight","Absolute Batman: The Long Halloween", "Batman Noir: The Long Halloween", "Batman By Jeph Loeb and Tim Sale Omnibus", "Batman: The Long Halloween (DC Modern Classics Edition)"],
//   }, 
//   {
//     series: "Detective Comics",
//     character: "Batman",
//     name: "Batman: Hush",
//     synopsis: "batman fights joker hahaha... mwaahahha ",
//     volumes: ["Batman: Hush", "Heart of Hush"],
//   }, 
//   {
//     series: "2017",
//     character: "Batman",
//     name: "Batman: The Dark Prince Charming",
//     synopsis: "batman fights joker hahaha... mwaahahha ",
//     volumes: ["Book One", "Book Two"],
//   }, 
  
//   // Wonder Woman
//   {
//     series: "new52",
//     character: "Wonder Woman",
//     name: "Wonder Woman",
//     synopsis: "yadada",
//     volumes: ["Vol 1: Blood","Vol 2: Guts", "Vol 3: Iron", "Vol 4: War", "Vol 5: Flesh", "Vol 6: Bones", "Vol 7: War-Torn", "Vol 8: A Twist of Fate", "Vol 9: Resurrection"]
//   },
//   {
//     series: "rebirth",
//     character: "Wonder Woman",
//     name: "Wonder Woman",
//     synopsis: "yadada",
//     volumes: ["Vol 1: The Lies","Vol 2: Year One", "Vol 3: The Truth", "Vol 4: Godwatch", "Vol 5: The Heart of the Amazon", "Vol 6: Children of the Gods", "Vol 7: Amazons Attacked", "Vol 8: The Dark Gods", "Vol 9: The Enemy of Both Sides"]
//   },
//   // aquaman
//   {
//     series: "rebirth",
//     character: "Aquaman",
//     name: "Aquaman",
//     synopsis: "yadadawabababa",
//     volumes: ["Vol 1: the drowning", "Vol 2: Black Manta Rising", "Vol 3: Crown of Atlantis", "Vol 4: Underworld", "Vol 5: The Crown Comes Down", "Vol 6: Kingslayer","Aquaman/Suicide Squad: Sink Atlantis"],
//     extras: ["Aquaman/Suicide Squad: Sink Atlantis"]
//   },
//   // green lanterns
//   {
//   series: "rebirth",
//   character: "Green Lantern",
//   name: "Green Lantern",
//   synopsis: "Green lanter nbladibladaaba ",
//   volumes: ["Vol 1: Rage Planet", "Vol 2: The Phantom Lantern", "Vol 3: POLARITY", "Vol 4: THE FIRST RING", "Vol 5: OUT OF TIME", "Vol 6: A WORLD OF OUR", "Vol 7: SUPERHUMAN", "Vol 8: GHOSTS OF THE PAST", "Vol 9: EVIL’S MIGHT"],
// }, 
// {
//   series: "new52",
//   character: "Green Lantern",
//   name: "Green Lantern",
//   synopsis: "Green lanter nbladibladaaba ",
//   volumes: ["Vol 1: Sinestro", "Vol 2: The Revenge of Black Hand", "Vol 3: The End", "Vol 4: Dark Days", "Vol 5: Test of Wills", "Vol 6: The Life Equation", "Vol 7: Renegade", "Vol 8: Reflections"],
// },
// // superman

//   {
//   series: "new52",
//   character: "Superman",
//   name: "Superman: Action Comics",
//   // name: "All-Star Superman",
//   synopsis: "superman hahahah ",
//   volumes: ["Vol 1: SUPERMAN AND THE MEN OF STEEL", "Vol 2: BULLETPROOF", "Vol 3: AT THE END OF DAYS", "Vol 4: HYBRID", "Vol 5: WHAT LIES BENEATH", "Vol 6: SUPERDOOM", "Vol 7: UNDER THE SUN", "Vol 8: TRUTH", "Vol 9: LAST RITES","WORLD AGAINST SUPERMAN"],
//   extras: ["WORLD AGAINST SUPERMAN"]
// },
// {
//   series: "new52",
//   character: "Superman",
//   name: "Superman",
//   synopsis: "superman hahahah ",
//   volumes: ["Vol 1: What Price Tomorrow?", "Vol 2: Secrets and Lies", "Vol 3: Fury At World's End", "Vol 4: Psi-War", "Vol 5: Under Fire", "Doomed", "The Men of Tomorrow", "Vol 1: Before Truth", "Vol 2: Return to Glory", "Savage Dawn", "The Final Days Of Superman", "Savage Dawn"],  
// },
// {
//   series: "rebirth",
//   character: "Superman",
//   name: "Superman",
//   synopsis: "superman hahahah ",
//   volumes: ["Vol 1: Son of Superman", "Vol 2: Trials of the Super Sons", "Vol 3: Multiplicity", "Vol 4: Black Dawn", "Vol 5: Hopes and Fears", "Vol 6: Imperius Lex", "Vol 7: Bizarroverse"],  
// },
// {
//   series: "rebirth",
//   character: "Superman",
//   name: "Superman: Action Comics",
//   synopsis: "superman hahahah ",
//   volumes: ["Vol 1: Path of Doom", "Vol 2: Welcome to the Planet", "Vol 3: Men of Steel", "Vol 4: The New World", "Vol 5: Booster Shot", "Superman Reborn", "Vol 1: Invisible Mafia"],
// },
// {
//   series: "rebirth",
//   character: "Superman",
//   name: "New Super-man",
//   synopsis: "superman hahahah ",
//   volumes: ["Kryptonite"],
// },
// {
//   series: "2006",
//   character: "Superman",
//   name: "Superman",
//   synopsis: "superman hahahah ",
//   volumes: ["Vol 1: Made In China", "Vol 2: Coming To America", "Vol 3: Equilibrium", "New Super-Man and The Justice League of China"],
// },
// // Flash
// {
// series: "new52",
// character: "Flash",
// name: "The Flash",
// synopsis: "superman hahahah ",
// volumes: ["Vol 1: Move Forward", "Vol 2: Rogues Revolution", "Vol 3: Gorilla Warfare", "Vol 4: Reverse", "Vol 5: History Lessons", "Vol 6: Out of Time", "Vol 7: Savage World", "Vol 8: Zoom", "Vol 9: Full Stop"],
// },
// {
//   series: "new52",
//   character: "Flash",
//   name: "The Flash By Geoff Johns Omnibus",
//   synopsis: "superman hahahah ",
//   volumes: ["Vol 1", "Vol 2", "Vol 3"],
// },
// {
//   series: "rebirth",
//   character: "Flash",
//   name: "The Flash",
//   synopsis: "superman hahahah ",
//   volumes: ["Vol 1: Lightning Strikes Twice", "Vol 2: Speed of Darkness", "Vol 3: Rogues Reloaded", "Vol 4: Running Scared", "Vol 5: Negative", "Vol 6: A Cold Day In Hell", "Vol 7: Perfect Storm", "Vol 8: Flash War", "Vol 9: Reckoning Of The Forces"],
// },
// {
//   series: "rebirth",
//   character: "Flash",
//   name: "The Flash By Mark Waid",
//   synopsis: "superman hahahah ",
//   volumes: ["Book 1", "Book 2", "Book 3", "Book 4", "Book 5", "Book 6"],
// },
// {
//   series: "2009",
//   character: "Flash",
//   name: "The Flash",
//   synopsis: "superman hahahah ",
//   volumes: ["Rebirth"],
// },

// {
//   series: "2010",
//   character: "Flash",
//   name: "The Flash",
//   synopsis: "superman hahahah ",
//   volumes: ["The Dasterdly Death Of The Rogues", "The Road to Flashpoint"],
// },
// {
//   series: "2006",
//   character: "Flash",
//   name: "The Flash The Fastest Man Alive",
//   synopsis: "superman hahahah ",
//   volumes: ["Lightning In a Bottle", "Full Throttle"],
// },
// // Scooby Doo
// {
// series: "2013",
// character: "Scooby-Doo",
// name: "Scooby-Doo Team Up",
// synopsis: "Teaming up with dc heroes to solve crimes.",
// volumes: ["Scooby-Doo Team Up", "Vol. 2", "Vol. 3", "Vol. 4", "Vol. 5", "Vol. 6"],
// },
// {
//   series: "2010",
//   character: "Scooby-Doo",
//   name: "Scooby-Doo, Where Are You?",
//   synopsis: "Teaming up with dc heroes to solve crimes.",
//   volumes: ["Scooby-Doo, Where Are You?"],
//   },
// ]
// // copy modal                    "H'el on Earth", is vol 3
// // {
// //   series: "rebirth",
// //   character: "batman",
// //   name: "Batman All-Star",
// //   synopsis: "batman fights joker hahaha... mwaahahha ",
// //   volumes: ["Vol 1: ", "Vol 2: ", "Vol 3: ", "Vol 4: ", "Vol 5: ", "Vol 6: ", "Vol 7: ", "Vol 8: ", "Vol 9: ", "Vol 10: ", "Vol 11: "],
// // }, 


// // const seriesSeed = [
//   //   {
//     //       series: "new52",
//     //       character: "batman",
//     //       name: "batman",
//     //       synopsis: "batman fights joker...",
//     //       volumes: {"vol": "1: Court of Owls", "vol": "2: City of Owls", "vol": "3: Death of the Family", "vol": "4: Zero Year - Secret City", "vol": "5: Zero Year - Dark City", "vol": "6: Graveyard Shift", "vol": "7: Endgame", "vol": "8: Superheavy", "vol": "9: Bloom", "vol": "10: Epilogue"},
//     //       extras: ["DC Comics: Zero Year", "The Joker: Endgame", "Batman vs. Superman: The Greatest Battles", "Absolute Batman: The Court of Owls"]
//     //   }, 
//     //   {
//       //       series: "new52",
//       //       character: "batman",
// //       name: "Batman: Detective Comics",
// //       synopsis: "batman fights joker...",
// //       volumes: {"vol": "1: Faces of Death", "vol": "2: Scare Tactics", "vol": "3: Emperor Penguin", "vol": "4: The Wrath", "vol": "5: Gothtopia", "vol": "6: Icarus", "vol": "7: Anarky", "vol": "8: Blood of Heroes", "vol": "9: Gordon at War", "vol": "10: Epilogue"},
// //   }, 

// // ]

// const volumeSeed = [
//   {

//   }
// ]

// const notesSeed = [
//     {
//         name: "DC Comics: Zero Year",
//         message: "Read after vol 4: Zero Year- Secret City "
//     },
//     {
//         name: "The Joker: Endgame",
//         message: "Read after Vol 7: Endgame"
//     },
//     {
//         name: "Batman vs. Superman: The Greatest Battles",
//         message: "Read after entire series"
//     }
// ];
// // const userbooksSeed = [
// //     {
// //       userID:"randomstring",
// //       Title: "The Great Gatsby",
// //       img: "randomimgurl",
// //       link: "mylink",
// //       author: "F. Scott Fitzgerald",
// //       description: "The authentic edition from Fitzgerald's original publisher. This edition approved by the Holden-Crowther Literary Organisation. The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted \"gin was the national drink and sex the national obsession,\" it is an exquisitely crafted tale of America in the 1920s. The Great Gatsby is one of the great classics of twentieth-century literature.",
// //       published: "9-30-20"
// //     },
// //     {
// //       userID:"randomstring1233",
// //       Title: "The Great Gatsby123",
// //       img: "randomimgurl132",
// //       link: "mylink123",
// //       author: "F. Scott Fitzgerald123",
// //       description: "132The authentic edition from Fitzgerald's original publisher. This edition approved by the Holden-Crowther Literary Organisation. The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted \"gin was the national drink and sex the national obsession,\" it is an exquisitely crafted tale of America in the 1920s. The Great Gatsby is one of the great classics of twentieth-century literature.",
// //       published: "9-30-2019"
// //     }
// //   ];

// db.Character
//   .remove({})
//   .then(() => db.Character.collection.insertMany(characterSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

//   db.Series
//   .remove({})
//   .then(() => db.Series.collection.insertMany(seriesSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });

//   db.Notes
//   .remove({})
//   .then(() => db.Notes.collection.insertMany(notesSeed))
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });