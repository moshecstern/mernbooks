// const mongoose = require("mongoose");
// const db = require("../models");

// mongoose.connect(
//     process.env.MONGODB_URI ||
//     "mongodb://localhost/comicbookdb"
//   );


// const comicvinevolumesSeed = 

// [
//     {
//       "title": "Superman: They Saved Luthor's Brain!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2060524-luthor_brain.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman: Through The Ages",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1784067-supermanthroughtheages.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman: Time and Time Again",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/58127/2806856-dc_comics_superman_time_and_time_again_tpb_1.jpg",
//       "year": "1994",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman: Transformed!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70215/3385955-6197736146-33311.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman: Trials of the Super Son",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5786805-02.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman: True Brit",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6653270-5664412645-copyO.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman: Unconventional Warfare",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2060511-superman_rucka.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman: Under a Yellow Sun",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1148008-p00001.jpg",
//       "year": "1994",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman: Under Fire",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4370340-05.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman: Up In the Sky",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6991028-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Superman: Up, Up and Away!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5075294-01.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman: War of the Supermen",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56616/1217733-wos_cv1_ds_copy.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Superman: War of The Supermen",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5075295-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman: War of the Supermen Double Feature",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1270555-war_of_the_supermen_double_feature_1.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Superman: War of the Worlds",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6481621-7275914325-copyO.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman: Wedding & Beyond",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2060535-superman_wedding.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman: What Price Tomorrow?",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2705364-__kgrhqjhjcofb38frq_pbqphqe_wzq__60_57.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman: Whatever Happened to the Man of Tomorrow?",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1525653-swhttmof.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman: Whatever Happened to the Man of Tomorrow? Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64684/2414289-whttmot.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman: Where Is Thy Sting?",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1061108-star_trek_alien_spotlight_cardassians__2009____page_1.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman: World of New Krypton",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/726798-00.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Superman: World Without A Superman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/83050/1603097-world_without.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman: Y2K",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3755116-01.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman: Year One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7133553-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman: Zero Hour",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6477329-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman's Christmas Adventure",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/2383725-superman_s_christmas_adventure__1940__pagecover.jpg",
//       "year": "1940",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman's Christmas Adventure",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/2383727-superman_s_christmas_adventure__1944__pagecover.jpg",
//       "year": "1944",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman's Christmas Play Book",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/6162408-sup1.jpg",
//       "year": "1945",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman's Girl Friend, Lois Lane",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/209077-19245-115474-1-supermans-girl-frien.jpg",
//       "year": "1958",
//       "publisher": "DC Comics",
//       "Field7": "137 Issues"
//     },
//     {
//       "title": "Superman's Girlfriend, Lois Lane Archives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/114183/5143808-superman%27s_girlfriend_lois_lane_archives_vol_1_1.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman's Metropolis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2670872-01.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman's Nemesis Lex Luthor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/927509-nemesis_1.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Superman's Pal Jimmy Olsen",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7008021-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Superman's Pal, Jimmy Olsen",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3664/196412-19172-114757-1-superman-s-pal-jimmy.jpg",
//       "year": "1954",
//       "publisher": "DC Comics",
//       "Field7": "163 Issues"
//     },
//     {
//       "title": "Superman's Pal, Jimmy Olsen by Jack Kirby",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6883293-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman's Pal, Jimmy Olsen Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/587507-001.jpeg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Superman/Batman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3796933-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Superman/Batman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/60957-10938-93952-1-superman--batman.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "87 Issues"
//     },
//     {
//       "title": "Superman/Batman Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/170747-19020-113372-1-superman-batman-annu.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Superman/Batman Secret Files 2003",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/941028-32469_20061219151502_large.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman/Batman: Absolute Power",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/83050/1603217-sb_ap.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman/Batman: Alternate Histories",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/148518/4182986-51z1scf90nl.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman/Batman: Batman v Superman: Dawn of Justice Special Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5113097-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman/Batman: Big Noise",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1878994-sbbignoise.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman/Batman: Finest Worlds",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1643204-sbfinestworlds.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman/Batman: Michael Turner Gallery Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4786471-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman/Batman: Night and Day",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/1519527-15003_400x600.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman/Batman: Public Enemies",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4414507-01.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman/Batman: Sorcerer Kings",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/115351/2799635-superman_batman_sorcerer_kings_r.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman/Batman: Supergirl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/393797-21622-130547-1-superman-batman-sup.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman/Batman: The Enemies Among Us",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/83050/1603328-sb_eau.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman/Batman: The Greatest Stories Ever Told",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100559/2141227-superman_batmangreatest1.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman/Batman: The Search for Kryptonite",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1018642-search_for_kryptonite.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman/Batman: Torment",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64460/1339263-supermanbatman_torment.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman/Batman: Vengeance",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/83050/1603294-sb_v.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman/Batman: Worship",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1920361-sbworship.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman/Doomsday: Hunter/Prey",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4404782-01.jpg",
//       "year": "1994",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Superman/Fantastic Four",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1060480-batman___unseen__5__of_5___2010____page_1.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman/Shazam: First Thunder",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/7015/163537-18975-112556-1-superman-shazam-fir.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Superman/Shazam!: First Thunder",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515554-01.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman/Shazam!: First Thunder: The Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6722005-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman/Supergirl: Maelstrom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26476/603690-supermansupergirl001.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Superman/Tarzan: Sons of the Jungle",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/982444-11733_20060428205404_large.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Superman/Top Cat Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6668492-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman/Toyman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1147983-p00001.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman/Wonder Woman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3358873-superman%20wonder%20woman%2001.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "29 Issues"
//     },
//     {
//       "title": "Superman/Wonder Woman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6568177-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman/Wonder Woman Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4007254-%24_57.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Superman/Wonder Woman: A Savage End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5601644-05.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman/Wonder Woman: Casualties of War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4912443-03.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman/Wonder Woman: Dark Truth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5252075-04.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman/Wonder Woman: Futures End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4101541-superman%20wonder.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman/Wonder Woman: Power Couple",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4103464-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman/Wonder Woman: War and Peace",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4452857-02.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superman/Wonder Woman: Whom Gods Destroy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/39524-5977-44473-1-superman--wonder-wo.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Supermen of America",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1372347-1999_p00001.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Supermen of America",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1372350-p00001.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Supernatural",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/73936/2031547-supernatural_v4_001__of_006___2011__pagecover.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Supernatural Thrillers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/28071/537431-supernatural_thrillers_1.jpg",
//       "year": "1972",
//       "publisher": "Marvel",
//       "Field7": "15 Issues"
//     },
//     {
//       "title": "Supernatural: The Dogs of Edinburgh",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3292886-04.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superpro Special Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1281571-superpro_special_edition_v1_001.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superwoman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5379303-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "Superwoman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27783/1117530-superwoman_1.jpg",
//       "year": "1942",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superwoman: Rediscovery",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6164877-02.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superwoman: The Midnight Hour",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6437979-03.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Superwoman: Who Killed Superwoman?",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5830936-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Supreme Power",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/2148283-1special.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Supreme Power: Contact",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1235403-sp.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Supreme Power: Gods and Soldiers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2131911-sp__g_s.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Supreme Power: High Command",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1235430-sp.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Supreme Power: Hyperion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1235446-sp.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Supreme Power: Nighthawk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1235475-sp.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Supreme Power: Powers and Principalities",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1235414-sp.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Survive",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3718062-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Swamp Thing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2115399-2001923_swamp_thing__2011__01_super.jpeg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "42 Issues"
//     },
//     {
//       "title": "Swamp Thing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4984316-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Swamp Thing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1993137-01.jpg",
//       "year": "1972",
//       "publisher": "DC Comics",
//       "Field7": "24 Issues"
//     },
//     {
//       "title": "Swamp Thing Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2674477-stann_cv1_ds.jpeg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Swamp Thing by Scott Snyder",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4802059-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Swamp Thing Giant",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7116648-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Swamp Thing Halloween Horror",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6636529-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Swamp Thing Winter Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11124/111243660/6263996-swamp%20thing%20winter%20special%20%282018-04%29%20v1%20%231.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Swamp Thing: Family Tree",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3368500-02.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Swamp Thing: Futures End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4069918-swamp%20thing.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Swamp Thing: Protector of the Green (DC Essential Edition)",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6937071-8164947922-77942.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Swamp Thing: Raise Them Bones",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2550844-_t2ec16v____e9s2fb_vhbqn_c_3ljw__60_57.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Swamp Thing: Roots of Terror: The Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6999174-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Swamp Thing: Rotworld - The Green Kingdom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3439031-03.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Swamp Thing: Season's End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5019278-07.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Swamp Thing: Seeder",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3866911-04.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Swamp Thing: Tales From the Bayou",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7240267-01.jpg",
//       "year": "2020",
//       "publisher": "DC Comics",
//       "Field7": "0 Issues"
//     },
//     {
//       "title": "Swamp Thing: The Bronze Age",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6631634-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Swamp Thing: The Bronze Age Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6080324-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Swamp Thing: The Dead Don't Sleep",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5467853-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Swamp Thing: The Killing Field",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4277165-05.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Swamp Thing: The Sureen",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4598398-06.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Sweatshop",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/194298-19146-114541-1-sweatshop.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Sweet XVI",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1281584-sweet_xvi_v1_001.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Sweet XVI Back to School Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1301250-sweet_vxi___back_to_school_special_v1__1___page_1.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Swing With Scooter",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/7839-2278-8654-1-swing-with-scooter.jpg",
//       "year": "1966",
//       "publisher": "DC Comics",
//       "Field7": "36 Issues"
//     },
//     {
//       "title": "Sword Master",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7016211-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Sword Master: War of the Ancients",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7236770-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tales of the Batman: Gene Colan",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4011179-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Tales of the Batman: Gerry Conway",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5949099-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Tales of the Batman: J.H. Williams III",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3962848-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tales of the Batman: Len Wein",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4289908-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tales of The Batman: Tim Sale",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1561596-8182_400x600.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tales of the Green Lantern Corps",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4260008-01.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Tales of the Green Lantern Corps",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/18996-3077-21224-1-tales-of-the-green-l.jpg",
//       "year": "1981",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Tales of the Green Lantern Corps Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/13181/368927-21324-128645-1-tales-of-the-green-l.jpg",
//       "year": "1985",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Tales of the Legion of Super-Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3664/322728-20776-124561-1-tales-of-the-legion.jpg",
//       "year": "1984",
//       "publisher": "DC Comics",
//       "Field7": "41 Issues"
//     },
//     {
//       "title": "Tales of the Legion of Super-Heroes Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3753978-01.jpg",
//       "year": "1986",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Tales of the Marvel Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4312/148914-18847-111410-1-tales-of-the-marvel.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tales of the Marvels: Blockbuster",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/98094/1765138-blockbuster_00fca.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tales of the Marvels: Inner Demons",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/47524/1343766-totm_inner_demons.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tales of the Marvels: Wonder Years",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/37015/792959-wonder_man3.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Tales of the Multiverse: Batman-Vampire",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2612349-01.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tales of the New Gods",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2668618-8550_400x600.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tales of the New Teen Titans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/19908-3125-22213-1-tales-of-the-new-tee.jpg",
//       "year": "1982",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Tales of the Sinestro Corps: Cyborg-Superman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/203692-19220-115168-1-tales-of-the-sinestr.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tales of the Sinestro Corps: Ion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/255167-20095-119967-1-tales-of-the-sinestr.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tales of the Sinestro Corps: Parallax",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/196186-19171-114722-1-tales-of-the-sinestr.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tales of the Sinestro Corps: Superman-Prime",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/217109-19311-115864-1-tales-of-the-sinestr.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tales of the Teen Titans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/21668-3324-24172-1-tales-of-the-teen-ti.jpg",
//       "year": "1984",
//       "publisher": "DC Comics",
//       "Field7": "51 Issues"
//     },
//     {
//       "title": "Tales of the Teen Titans Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/21985-3325-24532-1-tales-of-the-teen-ti.jpg",
//       "year": "1984",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Tales of the Thing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/399706-21698-130888-1-tales-of-the-thing.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Tales of the Unexpected",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/20224/889998-tales_of_the_unexpected_v_2_1.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Tales of the Unexpected",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/2116-1772-2299-1-tales-of-the-unexpec.jpg",
//       "year": "1956",
//       "publisher": "DC Comics",
//       "Field7": "104 Issues"
//     },
//     {
//       "title": "Tales to Astonish",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6203719-4302587157-61706.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tales to Astonish",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1250439-tales_to_astonish_v2_001.jpg",
//       "year": "1979",
//       "publisher": "Marvel",
//       "Field7": "14 Issues"
//     },
//     {
//       "title": "Tales to Astonish",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2615591-talestoastonish001.jpg",
//       "year": "1959",
//       "publisher": "Marvel",
//       "Field7": "101 Issues"
//     },
//     {
//       "title": "Talon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2663080-talon1.jpeg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "Talon: Scourge of the Owls",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3321382-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Talon: The Fall of the Owls",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3945852-02.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Talos of the Wilderness Sea",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/617315-talos1.jpg",
//       "year": "1987",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tangent: Superman's Reign",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11131/111318833/5806306-tangentvol1.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Target Avengers: Earth's Mightiest Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51565/2074242-avengers_001.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Target Marvel Mangaverse: New Dawn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2850143-__addme___target_marvel_mangaverse___new_dawn_v9999__200400___page_1.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Target Presents: Reading to the Rescue!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2850144-__addme___target_presents_reading_to_the_rescue__v9999__1___page_1.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Target X-Men Classic: Teamwork",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2820490-01.jpg",
//       "year": "",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Target/Iron Man 2",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2850145-__addme___target___iron_man_2_v9999__1___page_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tarot",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7197042-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Tarzan",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4030114-tarzan1nm92m051.jpg",
//       "year": "1977",
//       "publisher": "Marvel",
//       "Field7": "29 Issues"
//     },
//     {
//       "title": "Tarzan",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27783/728844-tarzandell_1.jpg",
//       "year": "1948",
//       "publisher": "DC Comics",
//       "Field7": "258 Issues"
//     },
//     {
//       "title": "Tarzan Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/15259-2917-17011-1-tarzan-annual.jpg",
//       "year": "1977",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Tarzan Digest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/59059/1285941-dc_digest_tarzan_1_000fc.jpg",
//       "year": "1972",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tarzan Family",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/14127-2743-15806-1-tarzan-family-the.jpg",
//       "year": "1975",
//       "publisher": "DC Comics",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Tarzan of the Apes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/21973-3368-24515-1-tarzan-of-the-apes.jpg",
//       "year": "1984",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Taskmaster",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3184448-01.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Taskmaster",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2203003-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Taskmaster: Unthinkable",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6531490-9575247128-69776.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Taz's 40th Birthday Blowout",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/114926/5050186-taz%27s%2040th%20birthday%20blowout%20v1994%20%231%20%28of%201%29%20%281994%29%20-%20page%201.jpg",
//       "year": "1994",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "TeachersCount/Office Max Custom Comic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/335886-21006-125785-1-teachers-count--off.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Team 7",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2637550-team71005121.jpeg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "Team 7: Fight Fire With Fire",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498184-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Team America",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47894-3152-57310-1-team-america.jpg",
//       "year": "1982",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Team Superman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1148009-p00001.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Team Superman Secret Files",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1148018-p00001.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Team Titans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124153/3880845-team_titans_v1992_cover.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "24 Issues"
//     },
//     {
//       "title": "Team Titans Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/74310-9321-74631-1-team-titans-annual.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Team X 2000",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26954/511094-teamx2000.jpg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Team X/Team 7",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124153/3883933-team%20x_team%207_cover.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Team-Ups of the Brave and the Bold",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3919880-01.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Beam",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62392/2407539-teenbeam.jpg",
//       "year": "1967",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Beat",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67581/1286611-7955_teen_beat__1___page_1.jpg",
//       "year": "1967",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5501850-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "38 Issues"
//     },
//     {
//       "title": "Teen Titans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/251008-19986-119435-1-teen-titans.gif",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "24 Issues"
//     },
//     {
//       "title": "Teen Titans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/1639041-teen_titans__2003__3rd_series__1b.jpeg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "101 Issues"
//     },
//     {
//       "title": "Teen Titans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3960055-teen%20titans%2001.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "24 Issues"
//     },
//     {
//       "title": "Teen Titans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/7520-2279-8295-1-teen-titans.jpg",
//       "year": "1966",
//       "publisher": "DC Comics",
//       "Field7": "53 Issues"
//     },
//     {
//       "title": "Teen Titans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/2054907-teen_titans__2011_4th_series__01a.jpeg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "33 Issues"
//     },
//     {
//       "title": "Teen Titans and Outsiders Secret Files and Origins 2005",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/443119-teen_titans_outsiders_secret_files___origins_2005_1_00.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3548383-01.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Teen Titans Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62392/2407808-teentitansannual67.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6796130-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/964176-122292_20080316155509_large.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4479001-teen%20titans.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Teen Titans Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3853/753957-teentitansa.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/248953-18404-107891-2-teen-titans-annual.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans by Geoff Johns",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5773006-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Teen Titans By Geoff Johns Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2884512-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans Giant",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11134/111349471/6495071-teen%20titans%20giant%201.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Teen Titans Go Figure!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6518404-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans Go!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3510427-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "71 Issues"
//     },
//     {
//       "title": "Teen Titans Go!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3510465-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "36 Issues"
//     },
//     {
//       "title": "Teen Titans Go!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/65859-11258-98856-1-teen-titans-go.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "55 Issues"
//     },
//     {
//       "title": "Teen Titans Go! Action Figure Comic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62392/2419930-teentitanactionfigure.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Teen Titans Go! FCBD Special Edition/Scooby-Doo Team-Up FCBD Special Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4580820-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans Go! Giant",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7133566-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans Go! Mumbo Jumble",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5652369-03.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans Go! Party, Party!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4426822-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans Go! Special Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6518405-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans Go! Titans Together!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4129721-01.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans Go! Weirder Things",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7142262-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans Go! Welcome To the Pizza Dome",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5316396-02.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans Go!: Bring It On",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5489522-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans Go!: Falling Stars",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6684849-05.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans Go!: Heroes On Patrol",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5225596-02.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans Go!: Ready For Action",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5842063-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans Go!: Smells Like Teen Titans Spirit",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6173018-04.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans GO!: Their Greatest Hijinks",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6467857-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans Go!: Truth, Justice, Pizza!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4945098-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans Lost Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/273951-20292-121105-1-teen-titans-lost-ann.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6488955-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans Spotlight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/24352-3621-27108-1-teen-titans-spotligh.jpg",
//       "year": "1986",
//       "publisher": "DC Comics",
//       "Field7": "21 Issues"
//     },
//     {
//       "title": "Teen Titans: A Celebration of 50 Years",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11111/111111984/4214083-1395867477-tt-50.jpg",
//       "year": "",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: A Celebration of 50 Years",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4226458-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: A Kid's Game",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50391/1180815-kidsgame.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: Beast Boys And Girls",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1953884-beast_boys_and_girls.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: Blinded By the Light",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4725138-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: Changing of the Guard",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/926619-teentitans.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: Child's Play",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/1977665-ttcp1a.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: Cold Case",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1574975-erq.jpeg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: Damian Knows Best",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5897102-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: Death of the Family",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3507898-03.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: Deathtrap",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50391/1185240-deathtrap.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: Earth One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4226459-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Teen Titans: Family Lost",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50391/1180878-family_lost.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: Full Throttle",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6875020-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: Futures End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4101164-teen%20titans.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: Hunt For Raven",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1953931-hunt_for_raven.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: It's Our Right to Fight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3368501-01.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: Jam Packed Action",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62392/2419920-teentitansjpa.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: Life and Death",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/443113-teen_titans_v3_life_and_death_1_00a.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: Light and Dark",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3962849-04.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: On the Clock",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50391/1179786-teen_titans_on_the_clock.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: Ravager - Fresh Hell",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64684/1579492-ttravagerfreshhell.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: Raven",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6981427-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: Rebirth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5457725-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: Rogue Targets",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5087370-02.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: Sparktop",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62392/2419922-teentitans_sparktop.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: The Bronze Age Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5897101-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: The Culling",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3368502-02.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: The Future is Now",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50391/1179607-the_future_is_now.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: The Lazarus Contract Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5879903-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: The Return of Kid Flash",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6631635-03.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: The Rise of Aqualad",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6302410-02.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: The Silver Age",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6195225-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Teen Titans: The Silver Age Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5511374-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: The Sum of Its Parts",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5396240-03.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: The Trial of Kid Flash",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4370341-05.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: Titans Around the World",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/443115-teen_titans_v3_titans_around_the_world_1_00.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: Titans East",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/443117-teen_titans_v3_titans_east_1_00.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: Titans Of Tomorrow",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1953819-titans_of_tomorrow.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: Turn It Up",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7115848-02.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: When Titans Fall",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5677339-04.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans: Year One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/268748-20247-120865-1-teen-titans-year-one.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Teen Titans: Year One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2642775-01.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans/Deathstroke: The Terminus Agenda",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7167926-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans/Legion Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/382203-21506-129765-1-teen-titans-legion-s.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans/Outsiders Secret Files 2003",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/673233-teen_titans___outsiders_secret_files_2003_pg00.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans/Outsiders: Insiders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/32599/1337181-4732_400x600.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen Titans/Outsiders: The Death and Return of Donna Troy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/32599/1337223-4848_400x600.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Teen-Age Romance",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/795971-77.jpg",
//       "year": "1960",
//       "publisher": "Marvel",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "Teeny Titans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5241206-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tell Me, Dark",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/696829-tellmedark.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Telos",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4840484-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Telos",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5408305-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tempest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/42381-6753-48287-1-tempest.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Tempus Fugitive",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/617341-temp1.jpg",
//       "year": "1990",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Terminator 2: Judgment Day",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47924-4601-57350-1-terminator-2-judgme.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Terra",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26476/603691-terra001.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Terra",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/43372/1354094-51qrpyefkml__ss500_.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Terror Inc.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/32143-4814-35841-1-terror-inc-.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "Terror Titans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64684/1642648-terrortitanstpb.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Terror Titans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/565505-0001.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Tex Dawson, Gun-Slinger",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52212/994944-tex_dawson_gunslinger1_1_73.jpg",
//       "year": "1973",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thanos",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5533015-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "Thanos",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6903196-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Thanos",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/13340/321896-20764-124492-1-thanos.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Thanos - Marvel Legacy Primer Pages",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6130208-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thanos Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6396946-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thanos Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3850039-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thanos by Donny Cates",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7012695-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thanos Imperative",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1704425-the_thanos_imperative_hc.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thanos Legacy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6595029-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thanos Rising",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031811-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thanos Rising",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2958896-01a.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Thanos Rising Marvel Select Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7059435-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thanos Sourcebook",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6649336-4950491935-72328.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thanos vs. Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4593497-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thanos vs. Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4252947-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Thanos Wins by Donny Cates",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6486552-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thanos: A God Up There Listening",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4258096-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thanos: A God Up There Listening",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4143665-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Thanos: A God Up There Listening",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3930606-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Thanos: Cosmic Powers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4909270-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thanos: Epiphany",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/3286383-epiphany.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thanos: Infinity Abyss",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3626774-01.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thanos: Redemption",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3426359-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thanos: Samaritan",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/3286384-samaritan.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thanos: Thanos Returns",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5923515-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thanos: The Final Threat",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/2615804-thanos_final_threat__1.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thanos: The God Quarry",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6203597-02.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thanos: The Infinity Conflict",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6684852-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thanos: The Infinity Ending",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7092709-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thanos: The Infinity Finale",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5151823-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thanos: The Infinity Relativity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4608748-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thanos: The Infinity Revelation",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4009372-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thanos: The Infinity Siblings",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6364081-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thanos: Zero Sanctuary",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7161572-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The 'Nam",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6271379-01.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "The 'Nam",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/243758-19757-118617-1-the-nam.jpg",
//       "year": "1986",
//       "publisher": "Marvel",
//       "Field7": "84 Issues"
//     },
//     {
//       "title": "The 'Nam",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23749/442030-30015_20060525174224_large.jpg",
//       "year": "1987",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "The 'Nam Magazine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23749/438428-mag_201.jpg",
//       "year": "1988",
//       "publisher": "Marvel",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "The 100 Greatest Marvels of All Time",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/386454-21546-130133-1-100-greatest-marvels.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "The A-Team",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/21594-3330-24084-1-a-team-the.jpg",
//       "year": "1984",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "The A-Z of Marvel Monsters",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5960878-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Accountant",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/5359913-the%20accountant%20%231.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Accused",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5368796-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Adventures of Cyclops and Phoenix",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/35023-5272-39115-1-adventures-of-cyclop.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Adventures Of Ford Fairlane",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1828131-01.jpg",
//       "year": "1990",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Adventures of Kool-Aid Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/3614237-%24t2ec16nhjhyffkzzhr1kbsjrsrgnww~~60_57.jpg",
//       "year": "1983",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "The Adventures of Pussycat",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27783/1009223-pussycat.jpg",
//       "year": "1968",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Adventures of Quik bunny",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1168145-300px_adventures_of_quik_bunny_vol_1_1.jpg",
//       "year": "1984",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Adventures of Rex the Wonder Dog",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23749/742360-61899_20060908105922_large.jpg",
//       "year": "1952",
//       "publisher": "DC Comics",
//       "Field7": "46 Issues"
//     },
//     {
//       "title": "The Adventures of Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/7995/195558-19159-114623-1-the-adventures-of-sp.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "The Adventures of Spider-Man: Radioactive",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7161567-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Adventures of Spider-Man: Sinister Intentions",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6958030-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Adventures of Spider-Man: Spectacular Foes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7084649-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Adventures of Superboy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/30871-4537-34362-1-adventures-of-superb.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "The Adventures of Superboy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1438244-theadvofs1.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Adventures of Supergirl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5019032-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "The Adventures of Supergirl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5205224-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Adventures of the Thing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2203067-01.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Adventures of the X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/63932-11067-96928-1-adventures-of-the-x.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "The Age of The Sentry",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/549004-2s1kbrm.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The All New Atom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1880738-atom_issue1.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "25 Issues"
//     },
//     {
//       "title": "The All New Atom: Future/Past",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1869533-past.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The All New Atom: My Life In Miniature",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6623445-3507073540-72001.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The All New Atom: Small Wonder",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1885826-small_wonder.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The All New Atom: The Hunt For Ray Palmer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1880749-the_hunt_for_ray_palmer.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The All-New Batman: The Brave and the Bold",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/108980/2322555-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "16 Issues"
//     },
//     {
//       "title": "The All-New Batman: The Brave and the Bold",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3591166-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The All-New Batman: The Brave and the Bold: Help Wanted",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3514458-02.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The All-New Batman: The Brave and the Bold: Small Miracles",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4315181-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The All-New Iron Manual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6238280-4193764892-62422.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Scarlet Spider",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/74926-9539-78466-1-amazing-scarlet-spid.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Girl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2203089-01.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "31 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Ham Special 25th Anniversary Issue",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6063/1281613-spiderham.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1296146-amazing_spider_man___all_detergent_giveaway___page_1.jpg",
//       "year": "1979",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6506202-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "42 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2676366-amazingspiderman001.jpg",
//       "year": "1963",
//       "publisher": "Marvel",
//       "Field7": "651 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4838200-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "51 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6060/171180-2127-113432-1-amazing-spider-man.jpg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "58 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6998014-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4026382-sm1.jpg",
//       "year": "1982",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3790762-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "28 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man - Marvel Legacy Primer Pages",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6064955-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man '96",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/80884/5226891-9097759436-latest",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man '97",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5586/623645-97.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man 1999",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5586/623647-99.jpg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man 2000",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5586/623648-2000.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man 2001",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5586/623649-2001.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man 30th Anniversary Poster Magazine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15302/822243-spiderman_1992.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/6261-2189-6837-1-amazing-spider-man-a.jpg",
//       "year": "1964",
//       "publisher": "Marvel",
//       "Field7": "33 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man Ashcan Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2843661-sp_ac_fc.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man Battles Ignorance",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/653099-amazing1.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man by J. Michael Straczynski",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6922182-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man by JMS Ultimate Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6832319-2020278684-74877.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man Epic Collection: Ghosts of the Past",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6997329-0167156703-78604.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man Epic Collection: Great Power",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6895564-8175299804-76110.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man Epic Collection: Maximum Carnage",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7212742-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man Epic Collection: Return of the Sinister Six",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5045260-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man MGC",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1254932-amazing_spider_man_mgc.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man NACME Series: Riot at Robotworld",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2843638-the_amazing_spider_man__nacme_series_v1990__2___riot_at_robotworld__1991____page_1.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man Presents: Jackpot",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11113/111139104/3598558-3598557-jackpot.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4440310-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man Special Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3794946-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man vs. the Prodigy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62392/1909980-cover.jpg",
//       "year": "1976",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man, The Death of Jean DeWolff",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/3401467-tpb%20the%20amazing%20spider-man%2C%20the%20death%20of%20jean%20dewolff%20v1990%20%281990%29%20-%20page%201.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man:  EXTRA!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15455/473287-extra.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: Behind the Scenes & Beyond the Web",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3666290-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: Brand New Day: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6960911-8547142850-77701.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: Chaos in Calgary",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2876433-1358660_amazing_spider_man___chaos_in_calgary_v1_004_super.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: Danger Zone",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031802-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: Deadball",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2876152-promo_the_amazing_spider_man_v1991__5___deadball__1994____page_1.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: Dying Wish",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3327828-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: Graveyard Shift",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4774968-04.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: Happy Birthday",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5351506-06.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: Hit and Run!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1317469-amazing_spider_man___hit___run_v1__3___page_1.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: Identity Crisis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6210004-5294943312-61916.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: Life and Death of Spiders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6687293-1456337496-39772.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: Life in the Mad Dog Ward",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3396768-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: Lizard - No Turning Back",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/119711/2728696-51jpydpd2fl._sl500_.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: Managing Materials",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2843617-__addme___amazing_spider_man___managing_materials_v9999__1___page_1.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: Meets Sally's Superheroes of Beauty !",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/114926/5312175-amazing%20spider-man%20meets%20sally%27s%20superheroes%20of%20beauty%21%20featuring%20the%20wizard%21%20v1992%20%231%20%28of%201%29%20-%20page%201.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: New Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5928425-10.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: Renew Your Vows: Warzones!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4955607-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: Revelations",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4046583-02.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: Sins Past",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5351510-08.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: Skating on Thin Ice",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1358653-amazing_spider_man___skating_on_thin_ice_v1_001.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: Skating on Thin Ice: Double Trouble",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2876494-1317468_amazing_spider_man___skating_on_thin_ice___double_trouble_v1__2___page_1_super.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: Skin Deep",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5351513-09.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: Soul of the Hunter",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/47318/1013855-img2.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: Spider-Verse",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4681581-03.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: Spider-Verse Prelude",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4318735-02.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: Spiral",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4814465-05.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: The Book of Ezekiel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5351508-07.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: The Complete Alien Costume Saga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6997346-7352464240-78603.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: The Complete Ben Reilly Epic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5315495-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: The Complete Clone Saga Epic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031824-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: The Extremist",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6531491-7073273531-69776.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: The Movie Adaptation",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3604216-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: The Origin of the Hobgoblin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5859566-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: The Parker Luck",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4162325-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: The Wedding",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/13/135331/2646937-the_amazing_spider_man__the_wedding.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: Through the Decades",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6307296-0518551488-64512.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: Unintended Consequences",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5351503-05.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man: Until the Stars Turn Cold",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4136282-03.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing Spider-Man/The Incredible Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/999822-devil_may_cry__3__2004____page_1.jpg",
//       "year": "1979",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Amazing World of DC Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/2854447-amazing_world_of_dc_comics_special_edition_v1976__1___super_dc_con_76__1976_2_27____page_1.jpg",
//       "year": "1976",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Art of DC Comics Bombshells",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5544285-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Art of Iron Man 3",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3017578-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Art of Marvel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2104144-cover.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Art of Marvel's Doctor Strange",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5514770-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Art of Walter Simonson",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2843922-__addme___art_of_walter_simonson_v9999___page_1.jpg",
//       "year": "1989",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Art of War of the Realms",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6913165-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Astonishing Ant-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4864614-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "The Astonishing Ant-Man: Everybody Loves Team-Ups",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5173533-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Astonishing Ant-Man: Small-Time Criminal",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5445037-02.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Astonishing Ant-Man: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6885694-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Astonishing Ant-Man: The Trial of Ant-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5772970-03.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Atlantis Chronicles",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2363796-01.jpg",
//       "year": "1990",
//       "publisher": "DC Comics",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "The Atlas of the DC Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/2349116-atlas.jpg",
//       "year": "1990",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Atom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/5401-2051-5900-1-atom.jpg",
//       "year": "1962",
//       "publisher": "DC Comics",
//       "Field7": "38 Issues"
//     },
//     {
//       "title": "The Authority",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3507820-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Authority by Ed Brubaker & Dustin Nguyen",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6850847-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Authority Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7023010-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Authority/Lobo: Jingle Hell",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/249723-19925-119256-1-the-authority-vs-lob.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Authority/Lobo: Spring Break Massacre",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/249724-19926-119257-1-the-authority-lobo.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2464633-avengers001.jpg",
//       "year": "1963",
//       "publisher": "Marvel",
//       "Field7": "402 Issues"
//     },
//     {
//       "title": "The Avengers American Armed Forces Exclusive",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/82159/2567653-scan0001.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Avengers Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2481750-avengersan01.jpg",
//       "year": "1967",
//       "publisher": "Marvel",
//       "Field7": "23 Issues"
//     },
//     {
//       "title": "The Avengers Collector's Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/654859-avenger1.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Avengers Epic Collection: Judgment Day",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6997333-6245959840-78604.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Avengers Featuring Ready Girl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5262715-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Avengers Prelude: Black Widow Strikes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2323617-black_widow_zone__000.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "The Avengers: Emperor Doom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/3395303-marvel%20graphic%20novel%20%2327%20-%20page%201.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Avengers: When Ultron Attacks!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/996125-164705_20090314164928_large.jpg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Batman Adventures",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/32479-4716-36229-1-batman-adventures-t.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "36 Issues"
//     },
//     {
//       "title": "The Batman Adventures",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4212070-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Batman Adventures Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/34339-5232-38348-1-batman-adventures-an.jpg",
//       "year": "1994",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Batman Adventures Holiday Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/137784-18734-110734-1-batman-adventures-ho.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Batman Adventures: The Lost Years",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/39567-6145-44535-1-batman-adventures-t.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "The Batman and Cal Ripken, Jr.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11114/111147817/3646124-p00001.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Batman and Robin Adventures",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/37061-5492-41476-1-batman-and-robin-adv.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "25 Issues"
//     },
//     {
//       "title": "The Batman and Robin Adventures Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11114/111147817/3652846-p00001.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Batman and Robin Adventures: Sub-Zero",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1247710-51914_20060717045443_large.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Batman Chronicles",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1382845-2711_400x600.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "11 Issues"
//     },
//     {
//       "title": "The Batman Chronicles",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/44627-6598-51673-1-batman-chronicles-t.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "23 Issues"
//     },
//     {
//       "title": "The Batman Chronicles Gallery",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/115502/2210556-5aaf7095_f100_4af3_93d5_22e7bbbc0c48.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Batman Exhibit",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4133711-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Batman Family",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/13959-2727-15632-1-batman-family.jpg",
//       "year": "1975",
//       "publisher": "DC Comics",
//       "Field7": "20 Issues"
//     },
//     {
//       "title": "The Batman of Arkham",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/238096-19709-118199-1-the-batman-of-arkham.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Batman Strikes!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100555/3364137-3006_400x600.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Batman Strikes!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/64912-11179-97909-1-batman-strikes-the.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "50 Issues"
//     },
//     {
//       "title": "The Batman Strikes!: In Darkest Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/148518/4128006-248321_20120511000151_large.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Batman Who Laughs",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7052759-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Batman Who Laughs",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6722361-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "The Batman Who Laughs: The Grim Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6840323-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Batman: Jam-Packed Action!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11114/111147817/3646012-p00001.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Batman's Grave",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7100347-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Beast",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/13180/477011-10249_20051224071850_large.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "The Beast Evolution of an Icon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849921-__addme___beast___evolution_of_an_icon_v9999__200600___page_1.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Best of DC",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/17662-2989-19747-1-best-of-dc-the.jpg",
//       "year": "1979",
//       "publisher": "DC Comics",
//       "Field7": "71 Issues"
//     },
//     {
//       "title": "The Best Of Marvel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3175036-bestofmarvel1994.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Best of Marvel Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2594154-best_of_marvel_comics_v1987__1___volume_one__1987____page_1.jpg",
//       "year": "1987",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Best of Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1644934-bospm1.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "The Best of Spidey Super Stories",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/114926/5312209-graphic%20novel%20best%20of%20spidey%20super%20stories%20v1978%20%231%20%28of%201%29%20-%20page%201.jpg",
//       "year": "1978",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Bible",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2334304-20118_900x1350.jpeg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Big-All American Comic Book",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/37015/833661-big1.jpg",
//       "year": "1944",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Birds Eye Kids",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27783/876673-birdeyekids_1.jpg",
//       "year": "1957",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Black Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1032279-black_knight_1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Black Order: The Warmasters of Thanos",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6903155-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Black Racer and Shilo Norman Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6030768-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Blackhawk Archives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2064775-blackhawk.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Blender",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/3640648-the%20blender%20starring%20cam%20newton%20%231%20%282013%29%20-%20page%201.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Book of Fate",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/64349-11088-97346-1-book-of-fate-the.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "The Books of Magic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2083740-01.jpg",
//       "year": "1990",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Books of Magic: 30th Anniversary Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7152275-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Brave and the Bold",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/93365-18207-106632-1-the-brave-and-the-bo.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "35 Issues"
//     },
//     {
//       "title": "The Brave and the Bold",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/3896047-viking1.jpg",
//       "year": "1955",
//       "publisher": "DC Comics",
//       "Field7": "200 Issues"
//     },
//     {
//       "title": "The Brave and the Bold",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/31397-4546-34956-1-brave-and-the-bold-.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Brave and the Bold Team-Up Archives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2064756-team_up.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Brave and the Bold: Batman and Wonder Woman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6292153-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Brave and the Bold: Batman and Wonder Woman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6694316-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Brave and the Bold: Demons and Dragons",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2380772-14077_900x1350.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Brave and The Bold: Milestone",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64684/1520136-bnbmilestone.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Brave and the Bold: The Book of Destiny",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/925196-vol2.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Brave and the Bold: The Lords of Luck",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2380760-brave_and_the_bold__collections__vol_3_1.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Brave and the Bold: Without Sin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2380777-11907_900x1350.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Brotherhood",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11785/327072-9169-124999-1-brotherhood-the.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "The Buzz",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/41111-6457-46391-1-buzz-the.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "The Call",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/698517-1.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Call of Duty: The Precinct",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/74712-9456-77742-1-call-of-duty-the-t.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "The Cat",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/11392-2565-12644-1-cat-the.jpg",
//       "year": "1972",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Cavalry: S.H.I.E.L.D. 50th Anniversary",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4826076-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Champions",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4018334-tn1.jpg",
//       "year": "1975",
//       "publisher": "Marvel",
//       "Field7": "17 Issues"
//     },
//     {
//       "title": "The Champions Classic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/582464-cc1.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Champions: No Time For Losers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6688104-6641352030-44121.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Chaos Effect",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3233093-the%20chaos%20effect%20v2005%20001%20%282005%29%20pagecover.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Clone Conspiracy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5479402-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "The Clone Conspiracy Omega",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5722973-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Colonel of Two Worlds",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4838008-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Coming of the Avengers!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/2434133-the_coming_of_the_avengers_001__2012__pagecover.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Creature Commandos!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3572893-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Creeper",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/39498-5945-44440-1-creeper-the.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "The Crew",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/71318-11946-104316-1-crew.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "The Culling: Rise of the Ravagers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498160-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Curse of Brimstone",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6364974-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "The Curse of Brimstone Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6770997-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Curse of Brimstone: Ashes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7046322-02.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Curse of Brimstone: Inferno",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6721952-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Dark Crystal",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61503-3221-94498-1-dark-crystal.jpg",
//       "year": "1983",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Dark Knight Returns: The Last Crusade",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5264003-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Dark Knight Strikes Again",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62070/1796336-dk2.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "The Dark Mansion of Forbidden Love",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/148518/2938698-dark_mansion_cover.jpg",
//       "year": "1971",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Dark Tower: The Drawing of the Three - Bitter Medicine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5479407-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Dark Tower: The Drawing of the Three - House of Cards",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4801313-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Dark Tower: The Drawing of the Three - House of Cards",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4466379-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "The Dark Tower: The Drawing of the Three - The Prisoner",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4071711-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "The Dark Tower: The Drawing of the Three Sampler",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4013027-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Dark Tower: The Gunslinger - Evil Ground",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2961688-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Dark Tower: The Gunslinger - Last Shots",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3335276-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Dark Tower: The Gunslinger - The Little Sisters of Eluria",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2205796-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "The Dark Tower: The Gunslinger - The Little Sisters of Eluria",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5328452-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Dark Tower: The Gunslinger - The Man In Black",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5328455-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Dark Tower: The Gunslinger - The Way Station",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5328459-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Dark Tower: The Gunslinger Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4077142-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Dark Tower: Treachery",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/538319-0003.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The DC Universe by Brian K. Vaughan",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6374037-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The DC Universe by Len Wein",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6807720-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The DC Universe by Mike Mignola",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5893343-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The DC Universe by Neil Gaiman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6289325-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The DC Universe By Neil Gaiman Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5479409-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Deadly Hands of Kung Fu Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5523033-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Death of Captain America Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7110577-6366872365-80588.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Death of Captain Marvel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2820244-7bfa4dfa272e4f005bfa672937666bfe.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Death of Hawkman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5909058-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Death of Superman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/872127-death_of_superman.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Death of Superman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6538873-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "The Death of Superman: The Wake",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7152277-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Deep",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23749/430220-95697_20080429144820_large.jpg",
//       "year": "1977",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Defenders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2618111-defenders001.jpg",
//       "year": "1972",
//       "publisher": "Marvel",
//       "Field7": "152 Issues"
//     },
//     {
//       "title": "The Defenders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5897070-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "The Defenders - Marvel Legacy Primer Pages",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6064957-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Defenders: Diamonds Are Forever",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6184485-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Defenders: Kingpins of New York",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6467848-02.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Demon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/29685-4358-32996-1-demon-the.jpg",
//       "year": "1990",
//       "publisher": "DC Comics",
//       "Field7": "59 Issues"
//     },
//     {
//       "title": "The Demon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/24841-3784-27630-1-demon-the.jpg",
//       "year": "1987",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Demon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/11178-2548-12384-1-demon-the.jpg",
//       "year": "1972",
//       "publisher": "DC Comics",
//       "Field7": "16 Issues"
//     },
//     {
//       "title": "The Demon by Jack Kirby",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6091850-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Demon: From The Darkness",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3577699-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Demon: Hell Is Earth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6152992-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Demon: Hell Is Earth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6666547-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Demon: Hell's Hitman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/4965067-7041703270-31772.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Demon: The Longest Day",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5340658-02.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Despicable Deadpool",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6903162-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Despicable Deadpool - Marvel Legacy Primer Pages",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6064958-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Dollhouse Family",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7142266-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "The Doom Patrol: The Bronze Age Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7152278-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Draft",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/32578/789752-the_draft_cover.jpg",
//       "year": "1988",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Dreaming",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6595979-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "The Dreamwalker",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1264300-marvel_graphic_novel____the_dreamwalker__43___page_1.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Emerald City of Oz",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3519403-01a.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "The Essential Showcase 1956-1959",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11113/111133305/3653400-essential%20showcase%201956-1959%20tpb%20dc%201992%20%28clasher%29%20000fc.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Essential Spirit Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3921248-001.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "25 Issues"
//     },
//     {
//       "title": "The Essential Wonder Woman Encyclopedia",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6535/1211318-essentialwwencyclopedia.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Eternals",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/3542334-eternals1nm92m112.jpg",
//       "year": "1976",
//       "publisher": "Marvel",
//       "Field7": "19 Issues"
//     },
//     {
//       "title": "The Eternals Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4026759-e1.jpg",
//       "year": "1977",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Eternals: Secrets From The Marvel Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7184461-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Falcon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/21188-3223-23624-1-falcon.jpg",
//       "year": "1983",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Fall and Rise of Captain Atom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5629803-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Fallen",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5383751-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Family Dynamic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/934/519349-famdyn_cvr.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "The Final Night",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4094079-01.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Final Night",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/38228-5747-42930-1-final-night-the.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "The First X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/2503076-prv13095_cov.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "The First X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515613-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/2054889-flash__2011_4th_series__01a_.jpeg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "56 Issues"
//     },
//     {
//       "title": "The Flash",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1187443-flsv2_cv1_ds_copy.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "The Flash",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5280134-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "87 Issues"
//     },
//     {
//       "title": "The Flash",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/3807-1995-4198-1-flash-the.jpg",
//       "year": "1959",
//       "publisher": "DC Comics",
//       "Field7": "246 Issues"
//     },
//     {
//       "title": "The Flash",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/25338-3790-28171-1-flash.jpg",
//       "year": "1987",
//       "publisher": "DC Comics",
//       "Field7": "250 Issues"
//     },
//     {
//       "title": "The Flash 100-Page Giant",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7049757-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash 100-Page Giant",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7091390-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Flash Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2556501-flsann_cv1.jpeg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Flash Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/5813653-flash%20annual%20%231%20final.jpg",
//       "year": "1987",
//       "publisher": "DC Comics",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "The Flash Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6254360-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Flash Archives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62697/1308292-flash_archives_1.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Flash By Francis Manapul and Brian Buccellato Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5532990-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash by Francis Manapul Unwrapped",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5960900-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash By Geoff Johns",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4923774-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Flash by Grant Morrison and Mark Millar",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5160017-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash Chronicles",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1612097-180257_20090924080631_large.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Flash Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4116408-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash Omnibus by Geoff Johns",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1876199-flash_omnibus.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "The Flash Special Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4129713-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash TV Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1104387-cover.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash vs The Rogues",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/128795/2548362-flash_vs_rogues.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: 80 Years of the Fastest Man Alive",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7133549-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: A Celebration of 75 Years",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4479784-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: An Adult Coloring Book",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5478455-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Blitz",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2056893-blitz.png",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Blood Will Run",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1876191-flash_blood_will_run.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Born to Run",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6559631-5504489365-Cover.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Cold Day In Hell",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6467849-06.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Crossfire",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2056914-crossfire.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Dead Heat",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2057359-dead_heat.png",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Flash War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6721959-08.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Force Quest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7074783-10.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Full Stop",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5532991-09.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Futures End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4118443-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: History Lessons",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4354845-05.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Ignition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2056900-ignition.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Lightning Strikes Twice",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5652321-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Mercury Falling",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5444664-01.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Move Forward",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2693666-__kgrhqzhjcofby9rswqzbqnhrgbbpq__60_57.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Negative",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6339690-05.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Our Worlds at War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1075319-cover.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Out of Time",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4627305-06.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Perfect Storm",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6623616-07.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Race Against Time",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/103530/6433155-9569995798-33907.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Rebirth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3368503-01.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Rebirth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5252047-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Rebirth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/756652-001.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Flash: Reckoning of the Forces",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6863617-09.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Reverse",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4024153-04.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Rogue War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6559633-5028392960-Cover.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Rogues",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2056892-rogues.png",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Rogues Reloaded",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5973388-03.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Rogues Revolution",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3321388-02.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Running Scared",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6143984-04.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Savage World",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4995858-07.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Season Zero",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4084382-dig027248_6.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "24 Issues"
//     },
//     {
//       "title": "The Flash: Season Zero",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4802015-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Season Zero",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4129712-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "The Flash: Secret Files and Origins 2010",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1177682-flssfo_cv1_ds_copy.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Speed of Darkness",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5852959-02.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Starting Line: DC Essential Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6657918-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Terminal Velocity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2114845-velo.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: The Dastardly Death of the Rogues",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515499-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: The Fastest Man Alive",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4079395-01.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "The Flash: The Fastest Man Alive: Full Throttle",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1298923-flash_fast.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: The Fastest Man Alive: Lightning in a Bottle",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2497127-21_215772_0_theflashthefastestmanaliveligh.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: The Greatest Trick of All",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7233447-11.jpg",
//       "year": "2020",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: The Human Race",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4872496-01.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: The Road to Flashpoint",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515478-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: The Silver Age",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5264009-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Flash: The Silver Age Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6518830-9795935624-56408.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Flash: The Wild Wests",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2055690-the_flash.png",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Time Flies",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1104337-cover.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Wonderland",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6559635-2505032785-Cover.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Year One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7142259-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flash: Zoom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5355917-08.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flintstones",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5772894-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Flintstones",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/57315-2900-90310-1-flintstones.jpg",
//       "year": "1977",
//       "publisher": "Marvel",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "The Flintstones",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5305528-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "The Flintstones and The Jetsons",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5830874-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Flintstones and the Jetsons",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/70752-11857-103750-1-flintstones-and-the.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "21 Issues"
//     },
//     {
//       "title": "The Flintstones Christmas Party",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1249833-the_flintstones_christmas_party_v1_001.jpg",
//       "year": "1977",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Forever People",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4436362-01.jpg",
//       "year": "1971",
//       "publisher": "DC Comics",
//       "Field7": "11 Issues"
//     },
//     {
//       "title": "The Frankenstein Monster",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4028706-2981082-frankenstein1nm9m125.jpg",
//       "year": "1973",
//       "publisher": "Marvel",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "The Further Adventures of Cyclops and Phoenix",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/44076-7190-51320-1-further-adventures-o.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Further Adventures of Indiana Jones",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/20429-3224-22790-1-further-adventures-o.jpg",
//       "year": "1983",
//       "publisher": "Marvel",
//       "Field7": "34 Issues"
//     },
//     {
//       "title": "The Fury of Firestorm",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/19894-3115-22199-1-fury-of-firestorm-t.jpg",
//       "year": "1982",
//       "publisher": "DC Comics",
//       "Field7": "64 Issues"
//     },
//     {
//       "title": "The Fury of Firestorm: Nuclear Men: God Particle",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3485600-01.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Fury of Firestorm: The Nuclear Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2085130-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "21 Issues"
//     },
//     {
//       "title": "The Fury of Firestorm: The Nuclear Man - Takeover",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3507896-03.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Fury of Firestorm: The Nuclear Men - The Firestorm Protocols",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498185-02.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The G.I. Joe Order of Battle",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2184012-01.jpg",
//       "year": "1986",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The G.I. Joe Order Of Battle",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/69256/1279381-g.i.joeoobv1btrimpe.jpg",
//       "year": "1987",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Golden Age",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3541621-01.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Golden Age Doctor Fate Archives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2059309-ga_dr_fate.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Golden Age Flash Archives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1681393-flasharchive1.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Golden Age of Marvel Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/278489-20328-121426-1-the-golden-age-of-ma.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Golden Age Spectre Archives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/73761/1552759-the_golden_age_spectre_archives_v1.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Golden Age Starman Archives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2058496-ga_starman.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Great Superman Comic Book Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/5648256-gre1.jpg",
//       "year": "1981",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Great Ten",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51438/1017186-the_great_ten__001_2010_.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "The Greatest 1950's Stories Ever Told",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2064785-greatest_1950_s_stories_ever_told.jpg",
//       "year": "1990",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Greatest Batman Stories Ever Told",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/26153-4001-29048-1-greatest-batman-stor.jpg",
//       "year": "1988",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Greatest Flash Stories Ever Told",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/69237/1288158-the_greatest_flash_stories_ever_told___page_1.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Greatest Golden Age Stories Ever Told",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/3583358-ccf01142014_0003.jpg",
//       "year": "1990",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Greatest Joker Stories Ever Told",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/251063-19987-119436-1-the-greatest-joker-s.jpg",
//       "year": "1988",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Greatest Superman Stories Ever Told",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3567766-4708076263-35668.jpg",
//       "year": "1987",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Greatest Team-Up Stories Ever Told",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/3583527-ccf01142014_0004.jpg",
//       "year": "1990",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Greatest Villains of the Fantastic Four",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68452/1291377-greatest_villains_of_the_fantastic_four_tpb.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Green Arrow by Jack Kirby",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1058946-batman___unseen__5__of_5___2010____page_1.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Green Lantern",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6677367-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "The Green Lantern Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7024404-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Green Lantern Corps",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/24567-3600-27335-1-green-lantern-corps.jpg",
//       "year": "1986",
//       "publisher": "DC Comics",
//       "Field7": "19 Issues"
//     },
//     {
//       "title": "The Green Lantern Corps: Beware Their Power",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6266889-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Green Lantern Season Two",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7240309-01.jpg",
//       "year": "2020",
//       "publisher": "DC Comics",
//       "Field7": "0 Issues"
//     },
//     {
//       "title": "The Green Lantern: Intergalactic Lawman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6999163-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Green Lantern: The Day The Stars Fell",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7182288-02.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Green Team: Teen Trillionaires",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3057658-green%20team.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "The Green Team: Teen Trillionaires: Money & Power",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3780136-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Griffin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/30224-4553-33621-1-griffin-the.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Gunhawks",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6066332-4071317687-57252.jpg",
//       "year": "1972",
//       "publisher": "Marvel",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "The Hacker Files",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/65799-11250-98796-1-hacker-files-the.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "The Handbook of the Conan Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/497734-conan_universe.jpg",
//       "year": "1985",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Haunted Mansion: Halloween ComicFest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5521665-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Hawk and The Dove",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2516789-01.jpg",
//       "year": "1968",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Hawk and the Dove: The Silver Age",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6351124-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Hawkman Archives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2060761-hawkmana.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Heckler",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/1910342-cover.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Hedge Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3490631-01.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Hedge Knight II: Sworn Sword",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3490632-02.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Hellblazer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5398345-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "24 Issues"
//     },
//     {
//       "title": "The Hellblazer: Rebirth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5332343-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Hellblazer: The Good Old Days",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730689-04.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Hellblazer: The Inspiration Game",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6312658-03.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Hellblazer: The Poison Truth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5772990-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Hellblazer: The Smokeless Fire",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6113397-02.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Helmet of Fate",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1900606-helmetoffate.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Helmet of Fate: Sargon the Sorcerer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1654837-racerx_hofsts01_p01.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Heroic Age",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1506542-the_ha.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Heroic Age: Super Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/49117/1398246-heroic_age_heroes__1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Heroic Age: Villains",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/1517493-heroic_age_villains_vol_1_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Hidden Killer (Superman and Wonder Woman)",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/128795/2690005-the_hidden_killer_1.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The History of Marvels Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/98410/1785414-history_of_marvels_comics_01_cover.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The History of the DC Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2083212-history_of_dc.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Hitchhiker's Guide to the Galaxy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5607/154173-18887-111646-1-the-hitchhiker-s-gui.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "The Hood: Blood From Stones",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1928773-blood_from_stones.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The House of Mystery: The Bronze Age Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6744796-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The House of Secrets: The Bronze Age Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6266891-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Hulk 100 Project",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/676967-h100.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Human Fly",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/15958-2903-17779-1-human-fly-the.jpg",
//       "year": "1977",
//       "publisher": "Marvel",
//       "Field7": "19 Issues"
//     },
//     {
//       "title": "The Human Race",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/101735/1861475-the_human_race_1_cover.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "The Human Torch",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4275232-ht1vf8m121.jpg",
//       "year": "1974",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "The Human Torch and the Thing: Strange Tales: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6559451-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Huntress",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/978/98090-4196-106874-1-huntress-the.jpg",
//       "year": "1989",
//       "publisher": "DC Comics",
//       "Field7": "19 Issues"
//     },
//     {
//       "title": "The Huntress: Origins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7218276-01.jpg",
//       "year": "2020",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Immortal Dr. Fate",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/22517-3447-25125-1-immortal-dr-fate-t.jpg",
//       "year": "1985",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "The Immortal Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6458016-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "30 Issues"
//     },
//     {
//       "title": "The Immortal Hulk: Breaker of Worlds",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7153354-05.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Immortal Hulk: Great Power",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7234744-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Immortal Hulk: The Green Door",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6797700-02.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Immortal Iron Fist",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/141471-18206-106625-2-immortal-iron-fist.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "27 Issues"
//     },
//     {
//       "title": "The Immortal Iron Fist Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/199618-19198-114984-1-the-immortal-iron-fi.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Immortal Iron Fist Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100647/3707795-2e_214973_0_theimmortalironfistbyfractionb.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Immortal Iron Fist: Escape From the Eighth City",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/111068/2254016-sep090543.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Immortal Iron Fist: Orson Randall and the Death Queen of California",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1808/556914-ironfist.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Immortal Iron Fist: Orson Randall and the Green Mist of Death",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/311885-20589-123401-1-the-immortal-iron-fi.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Immortal Iron Fist: The Book of the Iron Fist",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/2121302-book_of_the_iron_fist.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Immortal Iron Fist: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7034135-1360053539-79025.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Immortal Iron Fist: The Last Iron Fist Story",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/887586-daniel.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Immortal Iron Fist: The Mortal Iron Fist",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/889080-pissweak_danny.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Immortal Iron Fist: The Seven Capital Cities of Heaven",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/888953-danny.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Immortal Iron Fists",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6242723-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Immortal Iron Fists",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5970462-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Immortal Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6375356-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Immortal Men: The End of Forever",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6703936-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Impossible Man Summer Vacation Spectacular",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/29795-4400-33119-1-impossible-man-summe.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Incal: The Epic Conspiracy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/893694-incal1.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Incredible Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2464602-hulk001.jpg",
//       "year": "1962",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Incredible Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2483071-hulk102.jpg",
//       "year": "1968",
//       "publisher": "Marvel",
//       "Field7": "374 Issues"
//     },
//     {
//       "title": "The Incredible Hulk '97",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5586/537309-h97.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Incredible Hulk & The Human Torch: From the Marvel Vault",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1885592-hulktorch_001.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Incredible Hulk #1: Facsimile Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7116852-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Incredible Hulk #180: Facsimile Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7212613-180.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Incredible Hulk and Wolverine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4142272-ihaw1nm9m093.jpg",
//       "year": "1986",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Incredible Hulk Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2618116-hulkan01.jpg",
//       "year": "1968",
//       "publisher": "Marvel",
//       "Field7": "20 Issues"
//     },
//     {
//       "title": "The Incredible Hulk Ashcan Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3107380-the%20incredible%20hulk%20ash%20v1994%20001%20pagecover.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Incredible Hulk By Jason Aaron",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/141991/3819102-the%20incredible%20hulk%20vol.%201.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Incredible Hulk Epic Collection: Future Imperfect",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5628438-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Incredible Hulk Evolution of an Icon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849826-__addme___marvel_legends_evolution_of_an_icon___incredible_hulk_v9999___page_1.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Incredible Hulk Saga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1300286-hulk_saga_1.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Incredible Hulk versus Quasimodo",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4050936-hvq.jpg",
//       "year": "1983",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Incredible Hulk: Future Imperfect",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/108841/2130157-2130156-9780785100294.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Incredible Hulk: Ground Zero",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/2789875-ihgz1a.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Indomitable Iron Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/1116801-im_cover.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Infected: Deathbringer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7167918-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Infected: King Shazam",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7133564-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Infected: Scarab",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7152335-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Infected: The Commissioner",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7184387-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Inferior Five",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/8370-2338-9241-1-inferior-five-the.jpg",
//       "year": "1967",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "The Infernal Man-Thing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6148316-9526675246-60350.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Infernal Man-Thing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/2444475-prv12850_cov.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "The Infinity Crusade",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/109280-5019-108552-1-infinity-crusade.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Infinity Entity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5324220-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Infinity Entity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5087345-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Infinity Gauntlet",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4584114-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "The Infinity Gauntlet",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6375308-8894791148-STL078742",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Infinity Gauntlet: Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6789758-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Infinity Gauntlet: Warzones!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4945073-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Infinity War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1918219-01.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Infinity War Aftermath",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4863038-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Infinity War Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6874998-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Infinity Watch",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5141431-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Inhumans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/3542293-inhumans1nm9m103.jpg",
//       "year": "1975",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "The Inhumans A Marvel Graphic Novel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1582034-490897_the_inhumans_super.jpg",
//       "year": "1988",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Inhumans: The Origin of the Inhumans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5964613-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Invaders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/33344-5020-37228-1-invaders-the.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Invaders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2697107-invaders01.jpg",
//       "year": "1975",
//       "publisher": "Marvel",
//       "Field7": "41 Issues"
//     },
//     {
//       "title": "The Invaders Classic: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4261018-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Invincible Iron Man Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/59264/1173163-517sdmibxdl._ss500_.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Invincible Iron Man Saga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1300290-invincible_iron_man_saga_1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Invincible Iron Man: Execute Program",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1172666-im.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Invincible Iron Man: The Future",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3118393-11.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Iron Age",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4092869-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Iron Age: Alpha",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1850353-iron_age_alpha.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Iron Age: Omega",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/102550/1980647-iron_age_omega_vol_1_1.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Iron Manual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4312/329554-20904-125243-1-the-iron-manual.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Irredeemable Ant-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/101073/2065887-19246982_1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Irredeemable Ant-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/155155-18227-111733-1-the-irredeemable-ant.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "The Island of Dr. Moreau",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1249821-island_of_dr._moreau_v1_001.jpg",
//       "year": "1977",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Jack Kirby Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2124428-ga_kirby.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Jetsons",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6130792-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Jetsons",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6497383-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Joker",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7091420-01.jpg",
//       "year": "1975",
//       "publisher": "DC Comics",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "The Joker: A Celebration of 75 Years",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3962841-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Joker: Death of the Family",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3377602-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Joker: Devil's Advocate",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38826/809739-jd.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Joker: Devil's Advocate",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/2888441-joker___devil_s_advocate_vol_1_1.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Joker: Endgame",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4814494-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Joker: His Greatest Jokes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7059409-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Joker: The Bronze Age Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7039258-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Joker: The Clown Prince of Crime",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3468784-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Joker: The Greatest Stories Ever Told",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/99041/2201819-836023.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Joker: Year of the Villain",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7100355-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Joker/Daffy Duck",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6584073-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The JSA All Stars Archives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/114183/5143460-jsaallstarsarchives1.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Judas Coin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2593323-__kgrhqj__mifbejd5vbpbqu0pl1o0___60_57.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Justice League Goes Inside the NBA All Star Edition 2014",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4341364-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Justice Society Returns!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2062004-jsa_returns.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Kamandi Challenge",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5665097-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "The Kamandi Challenge",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6385001-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Kamandi Challenge Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5653324-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Kents",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/972637-42685_20060605032028_large.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "The Kents",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2083202-the_kents.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Kingdom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100559/2485070-the_kingdom_tpb.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Kingdom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1808/171165-19022-113423-1-the-kingdom.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Kingdom: Kid Flash",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1553319-10066.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Kingdom: Nightstar",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1553322-10067.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Kingdom: Offspring",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/234638-19676-118041-1-the-kingdom-offspri.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Kingdom: Planet Krypton",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1553324-10069.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Kingdom: Son of the Bat",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1553335-10070.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Kree-Skrull War Starring the Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/21036-3227-23458-1-kree-skrull-war-star.jpg",
//       "year": "1983",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The L.A.W. (Living Assault Weapons)",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/44333-7223-51450-1-l-a-w--living-assau.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Last Avengers Story",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/3499048-the%20last%20avengers%20story%20%231%20-%20page%201.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Last Avengers Story",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117252/2208740-the_last_avengers_story_00.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Last Days of Animal Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/817756-1.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Last Days of Animal Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2079808-the_last_days_of_animal_man.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Last Defenders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5141218-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Last Defenders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3664/328829-20902-125189-1-the-last-defenders.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Last Fantastic Four Story",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6154207-3388859164-60343.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Last God",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7125239-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Last Starfighter",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/22246-3349-24820-1-last-starfighter-th.jpg",
//       "year": "1984",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "The Legend of Wonder Woman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/24014-3606-26754-1-legend-of-wonder-wom.jpg",
//       "year": "1986",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Legend of Wonder Woman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4997953-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "The Legend of Wonder Woman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4903574-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "27 Issues"
//     },
//     {
//       "title": "The Legend of Wonder Woman: Origins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5571257-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Legends of Daniel Boone",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/1902-1686-2054-1-legends-of-daniel-bo.jpg",
//       "year": "1955",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "The Legion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/44361-7226-51464-1-legion-the.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "38 Issues"
//     },
//     {
//       "title": "The Legion by Dan Abnett and Andy Lanning",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6060395-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Legion of Night",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61394-4597-94389-1-legion-of-night-the.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Legion of Super-Heroes Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/30196-4371-33583-1-legion-of-super-hero.jpg",
//       "year": "1990",
//       "publisher": "DC Comics",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "The Legion of Super-Heroes Archives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/582148-legarch1.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "The Legion of Super-Heroes: An Eye for an Eye",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2080774-legion_of_super_heroes_an_eye_for_an_eye.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Legion: Foundations",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2060824-legion.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Life and Death of Captain Marvel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1092075-cm.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Life of Captain Marvel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6760834-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Life Of Captain Marvel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/23144-3488-25808-1-life-of-captain-marv.jpg",
//       "year": "1985",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "The Life of Captain Marvel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6518423-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "The Life of Christ",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/494354-2.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Life of Christ: The Easter Story",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/326853-20861-124971-1-the-easter-story.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Life of Groo",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1358707-the_life_of_groo.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Life of Pope John Paul II",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/616301-life1.jpg",
//       "year": "1982",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Life Story of The Flash",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1271329-p00001.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Loners",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/107021-18461-108359-1-the-loners.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Loners: The Secret Lives of Super Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5847541-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Losers Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/4157082-losers%20special%20%231.jpg",
//       "year": "1985",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Low, Low Woods",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7188217-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Magnificent Ms. Marvel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6838548-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "The Magnificent Ms. Marvel Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6990907-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Man Called A-X",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1355993-01.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "The Man Called Nova",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2971989-22.jpg",
//       "year": "1978",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Man of Steel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3440/106593-3611-27236-2-man-of-steel-the.jpg",
//       "year": "1986",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Man of Steel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6451280-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Man of Steel by Brian Michael Bendis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6666583-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Marvel Art of Joe Quesada",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7059413-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Marvel Art of Marko Djurdjevic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3405865-01.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Marvel Art of Skottie Young",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6958076-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Marvel Art of Star Wars",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7092703-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Marvel Cinematic Universe: The Marvel Comics Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6631605-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Marvel Fumetti Book",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1251955-marvel_fumetti_book_v1_001.jpg",
//       "year": "1984",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Marvel Guide to Collecting Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3110952-the%20marvel%20guide%20to%20collecting%20comics%20v1982%20001%20%281982%29%20pagecover.jpg",
//       "year": "1982",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Marvel Legacy of Jack Kirby",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4838276-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Marvel Masterpieces 2 Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/62158-5311-95153-1-marvel-masterpieces.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "The Marvel Masterpieces Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/62154-5027-95149-1-marvel-masterpieces.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Marvel Poster Book",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849147-__addme___marvel_poster_book_v9999__1___page_1.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Marvel Saga The Official History of the Marvel Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/62164-3490-95159-1-marvel-saga-the.jpg",
//       "year": "1985",
//       "publisher": "Marvel",
//       "Field7": "25 Issues"
//     },
//     {
//       "title": "The Marvel Tarot",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22277/712468-marveltarot_1.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Marvel Universe According To Hembeck",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5479424-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Marvel Universe Roleplaying Game Guide To The Hulk & The Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/69256/1316038-themarveluniverserggtth_ta1.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Marvel X-Men Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1034599-marvel_x_men_collection_01___00___fc.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "The Marvelous Adventures of Gus Beezer with the X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1160066-marvelousadventuresofgusbeezerx_men1.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Marvelous Adventures of Gus Beezer: Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/98410/1785405-gus_breezer_hulk_p00.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Marvelous Land of Oz",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/1014538-marvlandoz001_dc11_cover.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "The Marvels Project",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/914650-marvels.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "The Marvels Project: Birth of the Super Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1335567-mpr_bosh.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Masterworks Series of Great Comic Book Artists",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/149950/3109170-dc%20masterworks%20series%20of%20great%20comic%20book%20artists%20%231%20%281983%29%20-%20page%201.jpg",
//       "year": "1983",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "The Metal Men Archives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2056919-metal_men.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Mighty",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/705618-m_01.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "The Mighty",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11131/111318833/6375355-mightyvol1.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Mighty Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/96826-18239-106821-1-mighty-avengers.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "36 Issues"
//     },
//     {
//       "title": "The Mighty Avengers: Earth's Mightiest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498176-01.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Mighty Captain Marvel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5601627-00.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "The Mighty Captain Marvel: Alien Nation",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6034447-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Mighty Captain Marvel: Band of Sisters",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6203588-02.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Mighty Captain Marvel: Dark Origins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6437970-03.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Mighty Crusaders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2515234-01a.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Mighty Crusaders Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2670182-01.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Mighty Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/494356-2.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Mighty Marvel Western",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1234060-mighty_marvel_western_v1_001.jpg",
//       "year": "1968",
//       "publisher": "Marvel",
//       "Field7": "46 Issues"
//     },
//     {
//       "title": "The Mighty Thor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/3063681-198909%20mighty%20thor%20v1%20%23407%20-%20page%201.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "84 Issues"
//     },
//     {
//       "title": "The Mighty Thor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1786394-the_mighty_thor_1.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "23 Issues"
//     },
//     {
//       "title": "The Mighty Thor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2099823-thr_by_f_c1.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Mighty Thor Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2385745-prev_img.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Mighty Thor Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/27648-2295-30677-1-thor-annual.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Mighty Thor By Matt Fraction",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2948684-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Mighty Thor By Walter Simonson",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3225255-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "The Mighty Thor Epic Collection: A Kingdom Lost",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7110594-4763403783-80589.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Mighty Thor Saga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2034480-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Mighty Thor: Alone Against The Celestials",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/28028/689822-alone.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Mighty Thor: Asgard/Shi'ar War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5960916-03.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Mighty Thor: The Death of the Mighty Thor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6467853-05.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Mighty Thor: The War Thor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6233341-04.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Mighty Thor/Journey Into Mystery: Everything Burns",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3826103-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Millionaire's Pregnant Wife",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4501802-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Monolith",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/65824-11254-98821-1-monolith-the.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "The Monster of Frankenstein",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4826112-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Movement",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3013993-movement.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "The Movement: Class Warfare",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3833214-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Movement: Fighting For the Future",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4252919-02.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Multiversity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4042495-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Multiversity #1 & #2 Director's Cut",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4974181-01-02.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Multiversity Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4864651-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Multiversity Guidebook",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4353413-multiversity%2001.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Multiversity: Mastermen",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4398291-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Multiversity: Pax Americana",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4234894-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Multiversity: Pax Americana Director's Cut",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4585652-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Multiversity: The Just",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4168780-multiversity%2001.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Multiversity: The Society of Super-Heroes: The Conquerors of the Counter-World",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4102761-%24_57.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Multiversity: Thunderworld Adventures",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4285249-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Multiversity: Ultra Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4464637-multiversity%2001.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Muppets Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3682913-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Muppets: The Four Seasons",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3504157-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Mutant Misadventures of Cloak and Dagger",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2032730-01.jpg",
//       "year": "1988",
//       "publisher": "Marvel",
//       "Field7": "19 Issues"
//     },
//     {
//       "title": "The Mystic Hands of Doctor Strange",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/49017/1152567-tmhds.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Nazz",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/28981-4373-32199-1-nazz-the.jpg",
//       "year": "1990",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The New 52 Zero Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/148518/2858959-zero_omnibus.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The New 52: Futures End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3804509-futures%20end%2001.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "49 Issues"
//     },
//     {
//       "title": "The New 52: Futures End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4252920-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "The New 52: Futures End - Five Years Later Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4284985-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The New Adventures of Charlie Chan",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/3450-1867-3807-1-new-adventures-of-ch.jpg",
//       "year": "1958",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The New Adventures of Superboy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/17943-3035-20077-1-new-adventures-of-su.jpg",
//       "year": "1980",
//       "publisher": "DC Comics",
//       "Field7": "54 Issues"
//     },
//     {
//       "title": "The New Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1871902-na1.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "The New Avengers 100 Project",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/58790/1935466-the_new_avengers_100_project.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The New Avengers: American Armed Forces Exclusive",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/33712/661572-newavengers_specialguests.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "The New Avengers: Illuminati",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/91564-18180-106482-1-the-new-avengers-il.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The New Avengers: Most Wanted Files",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/93929-18211-106679-1-new-avengers-most-wa.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The New DC Universe: DC YOU 2015 Sampler",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4598388-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The New Defenders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6283760-1118614946-63727.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The New Eternals - Apocalypse Now",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26750/493217-new_eternals___apocalypse_now.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The New Gods",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/10226-2505-11260-1-new-gods-the.jpg",
//       "year": "1971",
//       "publisher": "DC Comics",
//       "Field7": "11 Issues"
//     },
//     {
//       "title": "The New Gods Secret Files and Origins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1079541-cover.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The New Gods Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6003109-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The New Guardians",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3186577-01.jpg",
//       "year": "1988",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "The New Invaders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/66288-11309-99285-1-new-invaders-the.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "The New Invaders: To End All Wars",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1445381-ni__teaw.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The New Mutants",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/1937731-newmutants1.jpg",
//       "year": "1983",
//       "publisher": "Marvel",
//       "Field7": "100 Issues"
//     },
//     {
//       "title": "The New Mutants Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/21323-3356-23775-1-new-mutants-annual-.jpg",
//       "year": "1984",
//       "publisher": "Marvel",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "The New Mutants Classic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3307980-01.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "The New Mutants Saga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/33913/1569732-new_mutants_saga_vol_1_1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The New Mutants Special Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/33913/1599034-9288011_1.jpg",
//       "year": "1985",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The New Mutants: Demon Bear",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6351133-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The New Mutants/X-Force: Demon Bear",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4133413-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The New Official Marvel Try-Out Book",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2850056-__addme___new_official_marvel_try_out_book_v9999__2___page_1.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The New Teen Titans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/2031889-1937032_dc_comics_new_teen_titans_1.jpg",
//       "year": "1980",
//       "publisher": "DC Comics",
//       "Field7": "40 Issues"
//     },
//     {
//       "title": "The New Teen Titans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7220110-2997223990-42600.jpg",
//       "year": "1984",
//       "publisher": "DC Comics",
//       "Field7": "49 Issues"
//     },
//     {
//       "title": "The New Teen Titans (Drug Abuse Awareness)",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/1508970-54098_20060727173441_large.jpg",
//       "year": "1983",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "The New Teen Titans Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/1811321-new_teen_titans__1980__annual_1.jpeg",
//       "year": "1982",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The New Teen Titans Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/22457-3454-25054-1-new-teen-titans-annu.jpg",
//       "year": "1985",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The New Teen Titans Archives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64684/1856414-newteentitansarchivesvol1.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The New Teen Titans Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2056869-teen_titans_omnibus.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The New Teen Titans: Games",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2019071-ttgames001.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The New Teen Titans: Terra Incognito",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2066340-terra.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The New Teen Titans: The Judas Contract",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1561519-3772_400x600.jpg",
//       "year": "1988",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The New Teen Titans: The Judas Contract: The Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6263518-9361952065-STL064365",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The New Teen Titans: The Terror of Trigon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1934425-01.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The New Teen Titans: Who Is Donna Troy?",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2066342-donna.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The New Titans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/27470-4014-30473-1-new-titans-the.jpg",
//       "year": "1988",
//       "publisher": "DC Comics",
//       "Field7": "82 Issues"
//     },
//     {
//       "title": "The New Titans Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/27601-4204-30618-1-new-titans-annual-t.jpg",
//       "year": "1989",
//       "publisher": "DC Comics",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "The New Warriors",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4026964-tn1.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "75 Issues"
//     },
//     {
//       "title": "The New Warriors",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/42495-6787-48478-1-new-warriors.jpg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "11 Issues"
//     },
//     {
//       "title": "The New Warriors Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1918451-01.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The New Warriors Ashcan Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/2886487-new1.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The New Warriors Limited Edition Ash Can",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/2861295-new1.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The New Warriors: Beginnings",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1283861-nw__bg.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Newsboy Legion and the Boy Commandos Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5996339-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Newsboy Legion by Joe Simon & Jack Kirby",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6428825-7109796731-67655.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Next",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1222108-p00001.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Nikopol Trilogy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3119503-1.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Odyssey of the Amazons",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5665113-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Official Handbook of the Conan Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2496770-official_handbook_of_the_conan_universe___page_1.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Official Handbook of the Marvel Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/51382-4235-68375-1-official-handbook-of.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "The Official Handbook of the Marvel Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/102953-3237-107387-2-official-handbook-of.jpg",
//       "year": "1983",
//       "publisher": "Marvel",
//       "Field7": "15 Issues"
//     },
//     {
//       "title": "The Official Handbook of the Marvel Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/69256/1279324-ohotmudetp1ryanref.jpg",
//       "year": "1986",
//       "publisher": "Marvel",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "The Official Handbook of the Marvel Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/2305/131778-3497-110285-1-official-handbook-of.jpg",
//       "year": "1985",
//       "publisher": "Marvel",
//       "Field7": "20 Issues"
//     },
//     {
//       "title": "The Official Handbook of the Marvel Universe Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7135764-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Official Handbook of the Marvel Universe: Master Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6539/477885-ohotmu_master_01.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "36 Issues"
//     },
//     {
//       "title": "The Official Marvel Comics Try-Out Book",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2850052-__addme___official_marvel_comics_try_out_book_v9999__1___page_1.jpg",
//       "year": "1983",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Official Marvel Index to Marvel Team-Up",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/1205347-mtui1.jpg",
//       "year": "1985",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Official Marvel Index to the Amazing Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/449305-001.jpg",
//       "year": "1985",
//       "publisher": "Marvel",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "The Official Marvel Index to the Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/1166040-aiv1n1.jpg",
//       "year": "1987",
//       "publisher": "Marvel",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "The Official Marvel Index to the Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/1166061-av1.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Official Marvel Index to the Fantastic Four",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/1206181-ffi1.jpg",
//       "year": "1985",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "The Official Marvel Index to the X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/1166078-xm1.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "The Official Marvel Index to the X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/446499-13530_4_001.jpg",
//       "year": "1987",
//       "publisher": "Marvel",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "The OMAC Project",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1655162-omac_project.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The OMAC Project",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/1954067-omac_project_1_june_2005.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The OMAC Project: Infinite Crisis Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/35127/703911-omacproject.png",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Omega Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11134/111344039/6278231-the%20omega%20men_1.jpg",
//       "year": "1983",
//       "publisher": "DC Comics",
//       "Field7": "38 Issues"
//     },
//     {
//       "title": "The Omega Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4599830-stk672306.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "The Omega Men: The End Is Here",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5396236-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Order",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/74808-9496-78208-1-order-the.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Order",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2548766-01a.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "The Order: California Dreaming",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4877084-02.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Order: The Next Right Thing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1235521-ord.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Origin of Galactus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/326850-20859-124969-1-the-origin-of-galact.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Original Ghost Rider",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/347054-20073-126726-1-the-original-ghost-r.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "20 Issues"
//     },
//     {
//       "title": "The Original Ghost Rider Rides Again",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2587164-199107_original_ghost_rider_rides_again_v1__1___page_1.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "The Outlaw Kid",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/9955-2476-10959-1-outlaw-kid-the.jpg",
//       "year": "1970",
//       "publisher": "Marvel",
//       "Field7": "30 Issues"
//     },
//     {
//       "title": "The Outsiders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3186594-01.jpg",
//       "year": "1985",
//       "publisher": "DC Comics",
//       "Field7": "28 Issues"
//     },
//     {
//       "title": "The Outsiders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/720777-outsiders_015_pg_01.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "26 Issues"
//     },
//     {
//       "title": "The Outsiders Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3186646-01.jpg",
//       "year": "1986",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Outsiders by Judd Winick",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6938332-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Outsiders: The Deep",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/2110433-the_deep.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Phantom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/27916-4205-30971-1-phantom-the.jpg",
//       "year": "1989",
//       "publisher": "DC Comics",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "The Phantom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11111/111117470/6913660-phantom_dc1_1_f.jpg",
//       "year": "1988",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Phantom Stranger",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2637551-original.jpeg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "23 Issues"
//     },
//     {
//       "title": "The Phantom Stranger",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/9224-2437-10187-1-phantom-stranger-th.jpg",
//       "year": "1969",
//       "publisher": "DC Comics",
//       "Field7": "42 Issues"
//     },
//     {
//       "title": "The Phantom Stranger",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1962891-1.jpg",
//       "year": "1952",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Phantom Stranger",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/4776883-ccf%20ps%20%231%2008302015.jpg",
//       "year": "1987",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Phantom Stranger: A Stranger Among Us",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6423012-0295113472-67954.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Phantom Stranger: Breach of Faith",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3676867-02.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Phantom Zone",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/5809215-pz%20%231%20final.jpg",
//       "year": "1982",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Phantom: The Ghost Who Walks",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/36228-5549-40457-1-phantom-the-ghost-.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "The Phoenix Resurrection Genesis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/107725-18474-108455-1-the-phoenix-resurrec.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Phoenix Resurrection: Revelations",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/107741-18475-108456-1-the-phoenix-resurrec.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Plastic Man Archives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/46951/940505-plasticmanarchives001.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "The Power Company",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/73858-9247-73035-1-power-company-the.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "The Power Company: Bork",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/25579/515762-10013_4_001.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Power Company: Josiah Power",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/25579/515766-10014_4_001.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Power Company: Manhunter",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/43547/1206812-91817.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Power Company: Sapphire",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/25579/517009-10016_4_001.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Power Company: Skyrocket",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/25579/517014-10017_4_001.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Power Company: Striker Z",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1147954-p00001.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Power Company: Witchfire",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1487167-p00001.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Power of SHAZAM!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/36312-5515-40555-1-power-of-shazam--th.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "49 Issues"
//     },
//     {
//       "title": "The Power of Shazam!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/34588/1142606-power_of_shazam_cover.jpg",
//       "year": "1994",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Power of SHAZAM! Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/3600509-04_82005_0_powerofshazamvol2annual1truebe.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Powerpuff Girls",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1345629-01.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "70 Issues"
//     },
//     {
//       "title": "The Powerpuff Girls Double Whammy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1582478-01.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Powers of Shazam Preview",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11111/111117825/5742341-0278726635-e9246.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Prisoner",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/1578415-1458_400x600.jpg",
//       "year": "1990",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Prisoner",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/27550-4020-30557-1-prisoner-the.jpg",
//       "year": "1988",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Private Files of the Shadow",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3755056-01.jpg",
//       "year": "1989",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Project Pegasus Saga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849209-__addme___thing__project_pegasus_v2010__1___thing__project_pegasus__2010_1____page_1.jpg",
//       "year": "1988",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Prowler",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/50019-9084-65123-1-prowler-the.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Prox Transmissions",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6076513-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Psyba-Rats",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/34310/1291766-pr1.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "The Psycho",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/246474-19809-118833-1-the-psycho.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "The Pulse",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/66294-11310-99291-1-pulse-the.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "14 Issues"
//     },
//     {
//       "title": "The Pulse: Fear",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1373940-pls__fr.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Pulse: House of M Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26954/512710-2005.10_pls_hom_house_of_m__special.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Pulse: Secret War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1373930-pls__sw.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Pulse: Thin Air",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1373923-pls__ta.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Punisher",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5187370-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "28 Issues"
//     },
//     {
//       "title": "The Punisher",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/3618875-0%20pun2014001_dc11_lr.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "20 Issues"
//     },
//     {
//       "title": "The Punisher",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4017600-%24_57n.jpg",
//       "year": "1987",
//       "publisher": "Marvel",
//       "Field7": "104 Issues"
//     },
//     {
//       "title": "The Punisher",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/93295/1944898-punishv2001dc11lr_1_.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "16 Issues"
//     },
//     {
//       "title": "The Punisher",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4134033-punisherls1nm9m094.jpg",
//       "year": "1986",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "The Punisher",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6570610-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "16 Issues"
//     },
//     {
//       "title": "The Punisher 2099",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3182492-01.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "34 Issues"
//     },
//     {
//       "title": "The Punisher 2099",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7161563-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Punisher and Wolverine in African Saga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3119628-the%20punisher%20and%20wolverine%20in%20african%20saga%20v1988%20001%20%281989%29%20pagecove2r.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Punisher Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5500619-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Punisher Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7009254-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Punisher Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2679999-pun.jpg",
//       "year": "1988",
//       "publisher": "Marvel",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "The Punisher Armory",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3243497-01.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "The Punisher Ashcan Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11113/111133305/4102804-punisher%20ashcan%20edition%20-%20page%201.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Punisher by Garth Ennis Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6045552-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Punisher Epic Collection: Circle of Blood",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6721993-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Punisher Epic Collection: Jigsaw Puzzle",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7236768-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Punisher Magazine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/28523-4240-31661-1-punisher-magazine-t.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "16 Issues"
//     },
//     {
//       "title": "The Punisher Marvel Knights:Trade Paperback",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/98479/2011846-41m7g4mmphl__sl500_aa300_.jpg",
//       "year": "",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "The Punisher Movie Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1808/1072694-the_punisher_movie_special__1989____00___fc.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Punisher Saga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1300297-punisher_saga_marvel_digital_comics_exclusive___page_1.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Punisher Summer Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/32990/643332-summer.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Punisher War Journal",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6625612-01.jpg",
//       "year": "1988",
//       "publisher": "Marvel",
//       "Field7": "80 Issues"
//     },
//     {
//       "title": "The Punisher War Zone Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3415385-01.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Punisher: An Eye for an Eye",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11111/111117470/4884533-img_0199.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Punisher: Back to School Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/53928/1029635-1_.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "The Punisher: Back To the War Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6044986-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Punisher: Black and White",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4040907-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Punisher: Border Crossing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4318758-02.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Punisher: Business As Usual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/119711/2915971-punisher_business_as_usual.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Punisher: Countdown",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/35249/714218-187_20050911232122_large.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Punisher: Empty Quarter",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1918991-01.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Punisher: End of the Line",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5960923-02.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Punisher: Intruder",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1808/1072635-the_punisher___intruder___00___fc.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Punisher: King of the New York Streets",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6242740-03.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Punisher: Last Days",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4814507-03.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Punisher: Official Movie Adaptation",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/24227/424957-The%20Punisher%20-%20Official%20Movie%20Adaptation%2001%20-%2000%20-%20FC.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "The Punisher: On The Road",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5601633-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Punisher: P.O.V.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/125961/2408303-pov1.png",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Punisher: Street By Street, Block By Block",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7153357-03.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Punisher: Suicide Run",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6006877-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Punisher: War In Bagalia",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6947210-02.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Punisher: War Machine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6447358-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Punisher: War Zone",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3415344-01.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "41 Issues"
//     },
//     {
//       "title": "The Punisher: War Zone",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/357030-21205-127549-1-the-punisher-war-zo.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Punisher: World War Frank",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6807743-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Punisher: X-Mas Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5756/449848-pxs_001.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Question",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/24951-3805-27749-1-question-the.jpg",
//       "year": "1986",
//       "publisher": "DC Comics",
//       "Field7": "37 Issues"
//     },
//     {
//       "title": "The Question",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/2241961-cover.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Question Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/26117-4022-29011-1-question-annual-the.jpg",
//       "year": "1988",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Question Quarterly",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/29937-4374-33283-1-question-quarterly-.jpg",
//       "year": "1990",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "The Question Returns",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/46951/886471-thequestionreturns.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Question: The Deaths of Vic Sage",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7152336-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Raccoon Kids",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47238-1619-56605-1-raccoon-kids.jpg",
//       "year": "1954",
//       "publisher": "DC Comics",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "The Ravagers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2373126-1_61bbc5f85d.jpeg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "The Ravagers: Heavenly Destruction",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3619478-02.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Ravagers: The Kids From N.O.W.H.E.R.E.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6788463-0254698131-copyO.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Rawhide Kid",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3415389-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Rawhide Kid",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/4512-2023-4926-1-rawhide-kid.jpg",
//       "year": "1960",
//       "publisher": "Marvel",
//       "Field7": "135 Issues"
//     },
//     {
//       "title": "The Ray",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9541/311809-20587-123381-1-ray.jpg",
//       "year": "1994",
//       "publisher": "DC Comics",
//       "Field7": "29 Issues"
//     },
//     {
//       "title": "The Ray",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/31732-4750-35340-1-ray-the.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Ray",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2167083-01.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Ray Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1147955-the_ray_annual_1_00fc.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Ray: In A Blaze Of Power",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/347170-21109-126737-1-the-ray-in-a-blaze.jpg",
//       "year": "1994",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Red Circle: The Hangman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/904531-rchgm_cv1_ds_copy.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Red Circle: The Inferno",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/914440-inferno1.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Red Circle: The Shield",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/934248-shield1a.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Red Circle: The Web",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/1060094-webcover.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Ren & Stimpy Show",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/62588-4808-95584-1-ren-amp-stimpy-sho.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "44 Issues"
//     },
//     {
//       "title": "The Ren & Stimpy Show Eenteracteeve Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3051671-ren%20%26%20stimpy%20show%20special%20-%20eenteractive%20001%20%281995%29%20pagecover.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Ren & Stimpy Show Holiday Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3567957-3530329499-35670.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Ren & Stimpy Show Special: Powdered Toastman's Cereal Serial",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9245/882721-1.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Ren & Stimpy Show: Around the World in a Daze",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3051665-ren%20%26%20stimpy%20show%20special%20-%20round%20the%20world%20in%20a%20daze%20001%20%281996%29%20pagecover.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Ren and Stimpy Show Special: Four Swerks",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3567958-7914525911-35670.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Restaurant at the End of the Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1264281-the_restaurant_at_the_end_of_the_universe_v1994__1__of_3____book_1_of_3__1994____page_1.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "The Return of Superman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/49173/1134131-p00001.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Ring of the Nibelung",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/27627-4206-30650-1-ring-of-the-nibelung.jpg",
//       "year": "1989",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Ring of the Nibelung",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/148518/2932310-125516_20080420145836_large.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Rise of Apocalypse",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/104903-18414-107982-1-the-rise-of-apocalyp.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Rise Of Master M",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3119669-the%20rise%20of%20master%20m%20-%20m%26m%20minis%20v2005%20001%20%282005%29%20pagecover.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Road To Avengers: Age of Ultron - The Art of the Marvel Cinematic Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4551701-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Road to Civil War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1099209-cw.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Road to Doomsday Clock",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11122/111221346/6146322-the%20road%20to%20doomsday%20clock%20v2017%20%23ashcan%20%282017_10_6%29%20-%20page%201.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Road to Marvel's Avengers: Endgame: The Art of the Marvel Cinematic Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6903186-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Rogues (Villains)",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/677136-46419_20070103105829_large.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Romita Legacy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/43236/1643036-c110622.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Ruff & Reddy Show",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6114852-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Ruff and Reddy Show",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6467856-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Saga of Crystar, Crystal Warrior",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/62641-3239-95637-1-saga-of-crystar-cry.jpg",
//       "year": "1983",
//       "publisher": "Marvel",
//       "Field7": "11 Issues"
//     },
//     {
//       "title": "The Saga of Ra's Al Ghul",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52035/1319906-the_saga_of_ra_s_al_ghul_1.jpg",
//       "year": "1988",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Saga of Swamp Thing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2030390-01.jpg",
//       "year": "1982",
//       "publisher": "DC Comics",
//       "Field7": "45 Issues"
//     },
//     {
//       "title": "The Saga of Swamp Thing Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/2197704-01.jpg",
//       "year": "1982",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Sandman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4352185-sandman1vf8m013.jpg",
//       "year": "1974",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Sandman by Joe Simon and Jack Kirby",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2079514-the_sandman_by_joe_simon_and_jack_kirby.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Sandman Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26595/624634-orpheus.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Sandman Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6006878-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Sandman Universe Presents Hellblazer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7125241-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Savage Axe of Ares (B&W)",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/61157/1191681-savage_axe_of_ares.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Savage Hawkman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2089027-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "21 Issues"
//     },
//     {
//       "title": "The Savage Hawkman: Darkness Rising",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3485601-01.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Savage Hawkman: Wanted",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3482223-02.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Savage Return of Dracula",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1358700-savage_return_of_dracula_001.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Savage She-Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/18037-3053-20177-1-savage-she-hulk-the.jpg",
//       "year": "1980",
//       "publisher": "Marvel",
//       "Field7": "25 Issues"
//     },
//     {
//       "title": "The Savage Sword of Conan",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6797719-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "The Savage Sword of Conan",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/128795/2577510-the_savage_sword_of_conan_1_01_0001.jpg",
//       "year": "1974",
//       "publisher": "Marvel",
//       "Field7": "235 Issues"
//     },
//     {
//       "title": "The Savage Sword of Conan: The Original Marvel Years Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6850881-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Secret Society of Super Villains",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515520-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Secret Society of Super-Villains Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/69237/1269780-secret_society_of_super_villains_special___page_1.jpg",
//       "year": "1977",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Secret Spiral of Swamp Kid",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7083446-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Secret Spiral of Swamp Kid/Black Canary: Ignite (Halloween ComicFest Special Edition)",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7074761-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Sensational She-Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/3310722-954817.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Sensational She-Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/28137-4243-31221-1-sensational-she-hulk.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "60 Issues"
//     },
//     {
//       "title": "The Sensational She-Hulk By John Byrne: The Return",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5570999-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Sensational She-Hulk in Ceremony",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6477802-9058832822-68607.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Sensational Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1641/94906-18177-106729-1-the-sensational-spid.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "19 Issues"
//     },
//     {
//       "title": "The Sensational Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/72764-5788-77942-1-sensational-spider-m.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "37 Issues"
//     },
//     {
//       "title": "The Sensational Spider-Man - Nothing Can Stop the Juggernaut",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117252/2209040-cover.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Sensational Spider-Man Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/115354-18543-108966-1-the-sensational-spid.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Sensational Spider-Man: Self-Improvement",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7031471-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Sentry",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/1231166-sentry.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Seven Soldiers of Victory Archives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2079825-seven_soldiers_of_victory_archives.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "The Seventh Shrine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3121966-the%20seventh%20shrine%20%282007%29%20pagecover.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Shade",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3608520-01.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Shade",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2913138-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Shade",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2167087-01a.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "The Shadow",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/24021-3617-26761-1-shadow-the.jpg",
//       "year": "1986",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Shadow",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/12194-2621-13662-1-shadow-the.jpg",
//       "year": "1973",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "The Shadow",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1301231-the_shadow___page_1.jpg",
//       "year": "1988",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Shadow",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/25571-3809-28420-1-shadow-the.jpg",
//       "year": "1987",
//       "publisher": "DC Comics",
//       "Field7": "19 Issues"
//     },
//     {
//       "title": "The Shadow Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/309377-3808-27551-2-the-shadow-annual.jpg",
//       "year": "1987",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Shadow Strikes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/28486-4210-31624-1-shadow-strikes-the.jpg",
//       "year": "1989",
//       "publisher": "DC Comics",
//       "Field7": "31 Issues"
//     },
//     {
//       "title": "The Shadow Strikes Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74848/1774535-shadow_strikes_ann_p00.jpg",
//       "year": "1989",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Shadow War of Hawkman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/22818-3460-25456-1-shadow-war-of-hawkma.jpg",
//       "year": "1985",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Shazam! Archives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2055695-shazam_vol1.png",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Shield",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/952033-shield1a.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "The Shield: Kicking Down the Door",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2077887-the_shield.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Shroud",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/34656-5324-38712-1-shroud-the.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Silencer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6257929-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "The Silencer Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6584079-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Silencer: Code of Honor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6623639-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Silencer: Hell-iday Road",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6913011-02.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Silencer: Up In Smoke",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7100359-03.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Silver Age Teen Titans Archives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2065841-sa_tt.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Silver Surfer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2403460-ss1.png",
//       "year": "1968",
//       "publisher": "Marvel",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "The Silver Surfer: Homecoming",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/848839-homecoming.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Silver Surfer: Inner Demons",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/882699-silver_surfer_inner_demons.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Sinister House of Secret Love",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47411-2506-56794-1-sinister-house-of-se.jpg",
//       "year": "1971",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Son of Satan Classic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5489514-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Spectacular Scarlet Spider",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/607838-spscarlet1a.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Spectacular Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2432028-spectacularspider_man001.jpg",
//       "year": "1976",
//       "publisher": "Marvel",
//       "Field7": "265 Issues"
//     },
//     {
//       "title": "The Spectacular Spider-Man Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2430746-spectacularspider_manannual01.jpg",
//       "year": "1979",
//       "publisher": "Marvel",
//       "Field7": "14 Issues"
//     },
//     {
//       "title": "The Spectacular Spider-Man Magazine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/904112-spectacular_spider_man_magazine__1.jpg",
//       "year": "1968",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Spectacular Spider-Man: Lo, This Monster",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7169489-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Spectre",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/8816-2339-9733-1-spectre-the.jpg",
//       "year": "1967",
//       "publisher": "DC Comics",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "The Spectre",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/48521-4754-59120-1-spectre-the.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "63 Issues"
//     },
//     {
//       "title": "The Spectre",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/24925/476802-the_spectre_v4__1__2001_3____page_1.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "27 Issues"
//     },
//     {
//       "title": "The Spectre",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/4048169-spectre%201.jpg",
//       "year": "1987",
//       "publisher": "DC Comics",
//       "Field7": "31 Issues"
//     },
//     {
//       "title": "The Spectre Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1384811-thespectrev3annual1_01.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Spectre Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/4048149-spectre%20annual%201.jpg",
//       "year": "1988",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Spectre: Crimes and Judgements",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3817490-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Spectre: Crimes and Punishments",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1786393-crimepunishment.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Spectre: Wrath of God",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4277163-02.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Spirit",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1091072-vol1.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "The Spirit",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/2624360-cover.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "32 Issues"
//     },
//     {
//       "title": "The Spirit Archives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2059364-the_spirit.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "26 Issues"
//     },
//     {
//       "title": "The Spirit Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/616316-spiritspecial.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Spirit: Angel Smerti",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2078282-angel_smerti.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Stand Sketchbook",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/444169-thestandsketch.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Stand: American Nightmares",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/739498-164446_20090316213733_large.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "The Stand: American Nightmares",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/128795/2626025-the_stand_american_nightmares_hc.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Stand: Captain Trips",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/128795/2626782-the_stand_captain_trips_hc.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Stand: Captain Trips",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/537587-0003.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "The Stand: Hardcases",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1254904-the_stand_hardcases_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "The Stand: Hardcases",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/128795/2639603-the_stand_hardcases_hc.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Stand: No Man's Land",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1663212-the_stand_no_mans_land_001.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "The Stand: No Man's Land",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/128795/2639630-the_stand_no_man_s_land_hc.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Stand: Soul Survivors",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48717/1000860-thestand.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "The Stand: Soul Survivors",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/128795/2630494-the_stand_soul_survivors_hc.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Stand: The Night Has Come",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/73936/1959818-the_stand___the_night_has_come__1__of_6____page_1.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Stand: The Night Has Come",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/128795/2640118-the_stand_the_night_has_come_hc.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Star Brand",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2542583-sb11.jpg",
//       "year": "1988",
//       "publisher": "Marvel",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "The Summer of Spider-Man Sampler",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/82159/2404538-scan0002.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Super Hero Squad Show",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6586827-1562202260-70942.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Superior Foes of Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3145505-01a.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "17 Issues"
//     },
//     {
//       "title": "The Superior Foes of Spider-Man Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5033217-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Superior Foes of Spider-Man: Game Over",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4361247-03.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Superior Foes of Spider-Man: The Crime of the Century",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3998426-02.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Superior Spider-Man: Halloween ComicFest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6663979-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Superman / Madman Hullabaloo!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/53928/1040218-1_.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Superman Chronicles",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2060492-supermanch.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "The Superman Family",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/12621-2668-14164-1-superman-family-the.jpg",
//       "year": "1974",
//       "publisher": "DC Comics",
//       "Field7": "59 Issues"
//     },
//     {
//       "title": "The Superman Gallery",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1430378-supermangallery.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Superman Monster",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6442398-0970838720-copyO.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Supernaturals",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/316338-20582-123893-1-the-supernaturals.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Supernaturals Tour Book",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3038411-01.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Sword of Solomon Kane",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47665-3510-57053-1-solomon-kane.jpg",
//       "year": "1985",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Terrifics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6302413-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "24 Issues"
//     },
//     {
//       "title": "The Terrifics Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6666603-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Terrifics: Meet the Terrifics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6640650-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Terrifics: Tom Strong and the Terrifics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6965845-02.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Thanos Imperative",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1251093-thanos_imperative_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Thanos Imperative: Devastation",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1600574-thanos_imperative_devastation.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Thanos Imperative: Ignition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1242061-thanos_imperative_ignition.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Thanos Quest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2690284-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Thanos Quest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4133889-%24_57.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Thanos Wars: Infinity Origin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6863651-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Thing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2762810-the_thing_01_page_01.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "The Thing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/20897-3245-23305-1-thing-the.jpg",
//       "year": "1983",
//       "publisher": "Marvel",
//       "Field7": "36 Issues"
//     },
//     {
//       "title": "The Thing and the Human Torch by Dan Slott",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6559475-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Titans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/143551-9145-69282-2-titans.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "50 Issues"
//     },
//     {
//       "title": "The Titans Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1268201-annual_the_titans_annual_v2000__1___page_1.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Tomb of Dracula",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/17772-3015-19863-1-tomb-of-dracula.jpg",
//       "year": "1979",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Tomb of Dracula: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6080333-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "The Torch",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/45797/941439-the_torch___c2c_____34p__team_cps__1___page_1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "The Torch",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5451041-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Totally Awesome Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4934628-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "24 Issues"
//     },
//     {
//       "title": "The Totally Awesome Hulk: Big Apple Showdown",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5949102-03.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Totally Awesome Hulk: Cho Time",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5328330-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Totally Awesome Hulk: Civil War II",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5613484-02.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Totally Awesome Hulk: My Best Friends Are Monsters",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6195227-04.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Transformers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2203640-01.jpg",
//       "year": "1984",
//       "publisher": "Marvel",
//       "Field7": "80 Issues"
//     },
//     {
//       "title": "The Transformers: Headmasters",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2203935-01.jpg",
//       "year": "1987",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Trial of Superman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2206278-trial_of_suprman_tpb_large.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Trials of Shazam!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/102396-18200-107657-1-the-trials-of-shazam.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "The Trials Of Shazam!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515560-01.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Trials of Shazam! The Complete Series",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6999179-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Twelve",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2548798-01_cropped.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "14 Issues"
//     },
//     {
//       "title": "The Twelve",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2455866-tt_vl1.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Twelve",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3003191-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Twelve: Spearhead",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2548805-spearhead.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Twilight Experiment",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11113/111139104/3611644-3611642-img091.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Ultimate Spider-Man 100 Project",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/17880/391363-21599-130474-1-the-ultimate-spider.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Ultimates",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/857216-ultimate.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Ultimates",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2548810-01_cropped.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "The Ultimates 2",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/100591-18326-107329-1-ultimates-2.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "The Ultimates 2 Ultimate Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7068629-9131031202-79786.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Ultimates 3",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/249644-19861-119032-2-ultimates-3.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "The Ultimates MGC",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2805660-ult01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Ultimates Saga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/256264-20114-120034-1-ultimates-saga.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Ultimates Ultimate Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7068627-8628923761-79787.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Unbeatable Squirrel Girl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4876893-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "50 Issues"
//     },
//     {
//       "title": "The Unbeatable Squirrel Girl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4313695-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "The Unbeatable Squirrel Girl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6967798-4351150839-77943.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Unbeatable Squirrel Girl - Marvel Legacy Primer Pages",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6148433-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Unbeatable Squirrel Girl & the Great Lakes Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5337569-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Unbeatable Squirrel Girl Beats Up the Marvel Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5478481-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Unbeatable Squirrel Girl: Call Your Squirrelfriend",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7066223-11.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Unbeatable Squirrel Girl: Halloween ComicFest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5521667-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Unbeatable Squirrel Girl: I Kissed A Squirrel And I Liked It",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5547956-04.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Unbeatable Squirrel Girl: I've Been Waiting For A Squirrel Like You",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6302423-07.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Unbeatable Squirrel Girl: Life Is Too Short, Squirrel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6828943-10.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Unbeatable Squirrel Girl: Like I'm The Only Squirrel In The World",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5759798-05.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Unbeatable Squirrel Girl: My Best Friend's Squirrel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6477337-08.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Unbeatable Squirrel Girl: Powers of A Squirrel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7184474-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Unbeatable Squirrel Girl: Squirrel Power",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4763046-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Unbeatable Squirrel Girl: Squirrel You Know It's True",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4932909-02.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Unbeatable Squirrel Girl: Squirrel, You Really Got Me Now",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5225600-03.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Unbeatable Squirrel Girl: Squirrels Fall Like Dominoes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6684854-09.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Unbeatable Squirrel Girl: Who Run The World? Squirrels",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6069467-06.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Unbeatables",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6110202-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Unbelievable Gwenpool",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5147240-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "26 Issues"
//     },
//     {
//       "title": "The Unbelievable Gwenpool - Marvel Legacy Primer Pages",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6064962-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Unbelievable Gwenpool: Beyond the Fourth Wall",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6195230-04.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Unbelievable Gwenpool: Lost In The Plot",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6374077-05.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Unbelievable Gwenpool: Totally In Continuity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6006882-03.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Uncanny X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/18838-3092-21057-1-uncanny-x-men-the.jpg",
//       "year": "1981",
//       "publisher": "Marvel",
//       "Field7": "405 Issues"
//     },
//     {
//       "title": "The Uncanny X-Men 3D",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6779340-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Uncanny X-Men Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5586/543186-x3.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "The Uncanny X-Men at the State Fair of Texas",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/558110-1.jpg",
//       "year": "1983",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Uncanny X-Men: Fatal Attractions",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/83918/2305845-s.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Uncanny X-Men: From the Ashes...",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/126697/2492027-uncanny_x_men__from_the_ashes_v1999__1___from_the_ashes__1999_8____page_1.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Unexpected",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6458043-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "The Unexpected",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/8985-2397-9926-1-unexpected-the.jpg",
//       "year": "1968",
//       "publisher": "DC Comics",
//       "Field7": "118 Issues"
//     },
//     {
//       "title": "The Unexpected: Call of the Unknown",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6819173-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Unknown Soldier",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/27410-4033-30408-1-unknown-soldier-the.jpg",
//       "year": "1988",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "The Unstoppable Wasp",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5628459-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "The Unstoppable Wasp",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6651009-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "The Unstoppable Wasp: Agents of G.I.R.L.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6302425-02.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Unstoppable Wasp: G.I.R.L. Power",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6875023-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Unstoppable Wasp: Unlimited: Fix Everything",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6903204-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Unstoppable Wasp: Unlimited: G.I.R.L. vs. A.I.M.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7066226-02.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Unstoppable Wasp: Unstoppable!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6029088-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Untold Legend of the Batman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/4157021-untold%20legend%20of%20batman%20%231.jpg",
//       "year": "1980",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "The Unworthy Thor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5863246-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Unworthy Thor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5511379-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "The Vampire Diaries",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3556380-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "The Vampire Diaries",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4226460-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Vampire Diaries",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3416992-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "39 Issues"
//     },
//     {
//       "title": "The Very Best of Dennis the Menace",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/48198-3154-57660-1-very-best-of-dennis-.jpg",
//       "year": "1982",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "The Viking Prince by Joe Kubert",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/148518/2902053-joe_kubert_library.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Villainy of Doctor Doom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11111/111117470/4873008-the%20villainy%20of%20doctor%20doom.jpeg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Vision and the Scarlet Witch",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/23322-3517-26000-1-vision-and-the-scarl.jpg",
//       "year": "1985",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "The War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3415442-01.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Warlord: The Saga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/148518/3126580-194114_20100315104439_large.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Warlord: The Savage Empire",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/148518/2904156-savage_empte.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Web",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/972614-theweb1a.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "The Wedding of Deadpool",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3983610-05.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Wedding of Dracula",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1358712-wedding_of_dracula_001.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Weeknd Presents Starboy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6467861-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Weird",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/4519603-weird%20%231%20final.jpg",
//       "year": "1988",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The White Lama",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/71294-11927-104292-1-white-lama-the.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Wild Storm",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5700407-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "24 Issues"
//     },
//     {
//       "title": "The Wild Storm",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6103729-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The Wild Storm: Michael Cray",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6093494-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "The Wild Storm: Michael Cray",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6517786-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "The Witching Hour",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26595/628583-witch.jpg",
//       "year": "1969",
//       "publisher": "DC Comics",
//       "Field7": "85 Issues"
//     },
//     {
//       "title": "The Wonder Woman 100 Project",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5923523-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The Wonderful Wizard of Oz",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2756682-wonderful_wizard_of_oz__1_000a.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "The Wonderful Wizard of Oz Sketchbook",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52212/991222-the_wonderful_wizard_of_oz_sketchbook.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The World at War Sourcebook",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11133/111339059/6789522-dc%20sourcebook%201991.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The World of Krypton",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6335157-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "The World of Krypton",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/26012-3825-28896-1-world-of-krypton.jpg",
//       "year": "1987",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The World of Metropolis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/26959-4037-29919-1-world-of-metropolis.jpg",
//       "year": "1988",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The World of Smallville",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/5809260-wos%20%231%20final.jpg",
//       "year": "1988",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1355017-uxm_v1_001_01.jpg",
//       "year": "1963",
//       "publisher": "Marvel",
//       "Field7": "141 Issues"
//     },
//     {
//       "title": "The X-Men and The Micronauts",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/21434-3373-23895-1-x-men-and-the-micron.jpg",
//       "year": "1984",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The X-Men Collector's Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/906135-mce_x_men_1.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "The X-Men vs. The Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/25210-3867-28027-1-x-men-vs-the-avenge.jpg",
//       "year": "1987",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Thing & She-Hulk: The Long Night",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/973963-thingsh1.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thing Classic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1808133-thn_cls.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Thing: Freakshow",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/72756-9474-77982-1-thing-the-freaksho.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Thing: Freakshow",
//       "img": "https://comicvine1.cbsistatic.com/bundles/phoenixsite/images/core/loose/img_broken.png",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thing: Idol of Millions",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5451044-01.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thing: Liberty Legion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5543036-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thing: Project Pegasus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1147919-pp.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thing: Project Pegasus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6352597-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thing: The Serpent Crown Affair",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2413452-tng__sca.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2593422-thor1.png",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "85 Issues"
//     },
//     {
//       "title": "Thor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2203585-01a.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "35 Issues"
//     },
//     {
//       "title": "Thor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/4128214-thor2014001_dc11_lr-0.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Thor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1102654-thortp1.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Thor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7197043-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Thor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6467858-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "16 Issues"
//     },
//     {
//       "title": "Thor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2677628-thor126.jpg",
//       "year": "1966",
//       "publisher": "Marvel",
//       "Field7": "293 Issues"
//     },
//     {
//       "title": "Thor (Taco Bell)",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3135490-thor%20taco%20bell%20exclusive%20collector%20edition%20v2009%20001%20%282009%29%20pagecover.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor & Hercules: Encyclopædia Mythologica",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/908484-thor_and_hercules_encyclopaedia_mythologica_vol_1_1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor & Loki: Blood Brothers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7049816-0426394121-78180.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor 1999",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/108980/2192822-thor_annual_1999.jpg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor 2000",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/822609-thor_annual_2000.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor 2001",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/822610-thor_annual_2001.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor and the Mighty Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3345324-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor and the Warriors Four",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2026321-thr___w4.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor and the Warriors Four",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/108980/2192814-thor_and_the_warriors_four__01__2010_.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Thor Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4412560-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/45797/965754-annual_thor___rebirth__1__2007_9____page_1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2911493-thoran02.jpg",
//       "year": "1966",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Thor By Dan Jurgens & John Romita Jr.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1158362-thor_by_dan_jurgens_1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Thor by J. Michael Straczynski Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1714478-thr_omn_jms1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor by Jason Aaron & Russell Dauterman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7080054-4121848430-79788.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Thor by Jason Aaron: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6922220-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Thor by Kieron Gillen Ultimate Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2131915-thr_by_kg_uc.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor by Simonson Halloween Comic Fest 2017",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6127615-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor by Walter Simonson Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1820768-thr_by_wlsms_omn.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor Corps",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47928-5054-57357-1-thor-corps.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Thor Corps",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5092384-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor Epic Collection: In Mortal Flesh",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5984716-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor Epic Collection: Runequest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5374467-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor Epic Collection: The Black Galaxy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7054378-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor Epic Collection: The Fall of Asgard",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6623650-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor Epic Collection: The God Of Thunder",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4162412-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor Epic Collection: The Wrath of Odin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6069465-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor Epic Collection: To Wake The Mangog",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4419017-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor Epic Collection: War of the Pantheons",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7110595-9911254230-80589.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor Epic Collection: When Titans Clash",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5511375-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor Epic Collection: Worldengine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6467859-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor Giant-Size Finale",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1046123-p00001.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor Goes Hollywood",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/103530/3523730-5050749248-BzKUB.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor MGC",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1173018-p00001___thor_mgc__1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor of the Realms",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7016213-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor Poster Book",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2805598-www.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor Rough Cut",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2492000-thor_rough_cut__1___page_2.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor Spotlight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74848/2020325-thor01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor Visionaries: Mike Deodato Jr.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2028414-thr_vs__mdj.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor Visionaries: Walter Simonson",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1519531-thr_vsn__ws1.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Thor Vs Thanos",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6168388-4139722788-60607.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor vs. Hercules",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6635877-7048636374-72345.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor vs. Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6080329-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor vs. Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6044947-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor vs. Hulk: Champions of the Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6351142-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor vs. Hulk: Champions of the Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6039808-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Thor vs. Seth, The Serpent God",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6599801-7228673173-70945.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Across All Worlds",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4897034-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Ages of Thunder",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/373412-21355-129030-1-thor-ages-of-thunde.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Ages of Thunder",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1235905-thr.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Asgard’s Avenger",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/1891456-thor_asgard_s_avenger_vol_1_1.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Balder the Brave",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1236002-thr.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Blood and Thunder",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6491845-0194361514-68879.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Blood Oath",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1236011-thr.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Blood Oath",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/24967/451263-thor___blood_oath__1.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Thor: Crown of Fools",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3409443-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: First Thunder",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031803-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: First Thunder",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1400057-thor_first_thunder_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Thor: For Asgard",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5764519-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: God of Thunder",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3549099-01a.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "25 Issues"
//     },
//     {
//       "title": "Thor: God of Thunder",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7080059-2868030308-79789.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Thor: God of Thunder - Godbomb",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3888516-02.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: God of Thunder - Halloween ComicFest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3726627-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: God of Thunder - The God Butcher",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3073997-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: God of Thunder Reborn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730770-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: God of Thunder: The Accursed",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031838-03.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: God of Thunder: The Last Days of Midgard",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4232458-04.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: God-Size Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2759792-www.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Gods & Deviants",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6103719-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Gods and Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1992371-thr__g_m.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Gods on Earth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1892240-thr__goe.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Gods, Gladiators and the Guardians of the Galaxy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5991127-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Godstorm",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6619584-8818632844-71320.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Godstorm",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6614695-01.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Thor: Heaven & Earth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1928200-07_20_2011_01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Thor: Heaven and Earth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4886851-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Heroes Return Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6080327-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Thor: If Asgard Should Perish",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6482530-7150979671-68468.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Latverian Prometheus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1800637-latverian_prometheus.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Lord of Asgard",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1863961-thr__loa.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Man of War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/14859/623820-thormow_001.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Official Index to the Marvel Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/13/135797/2975477-thorindex.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Ragnarok",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6586830-4509838079-70942.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Ragnaroks",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6103720-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Rebirth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1075203-cover.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Reign of Blood",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/428992-15wm7ua.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Resurrection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1888289-thr__rsr.jpg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Road To War of the Realms",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6974989-02.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Road To War of the Realms: Halloween ComicFest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6663980-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Search For Odin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3135496-thor%20-%20search%20for%20odin%20v2008%20%282008%29%20pagecover.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Season One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3349954-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Siege Aftermath",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1516709-thr__sg_aft.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Son of Asgard",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/10390/396269-21670-130751-1-thor-son-of-asgard.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Thor: Son of Asgard",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5070003-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Son of Asgard: The Warriors Teen",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/3706258-1877272-thr_soa__twt.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Son of Asgard: Worthy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1877278-thr_soa__wrt.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Spiral",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1947511-thr__spr.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Sunlight and Shadows",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3443364-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Tales of Asgard",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6586833-6179005229-70943.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Tales Of Asgard By Stan Lee & Jack Kirby",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/817329-toa_01.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Thor: The Black Galaxy Saga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6412108-8134367035-67090.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: The Dark Gods",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/357413-21218-127572-1-thor-the-dark-gods.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: The Death of Odin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4909311-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: The Deviants Saga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110249/2067799-thor___the_deviants_saga__1_001.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Thor: The Deviants Saga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031810-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: The Eternals Saga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3446159-01.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Thor: The God Butcher Marvel Select",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7169490-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: The Goddess of Thunder",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4563146-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: The Legend",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6467570-9809444497-68601.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: The Lost Gods",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5315500-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: The Mighty Avenger",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/108980/2192828-thor___mighty_avenger__01__2010_.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Thor: The Mighty Avenger",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031807-02.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: The Mighty Avenger - Double Rainbow",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1417717-thor_the_mighty_avenger_double_rainbow_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: The Mighty Avenger Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7101393-1657877476-80464.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: The Mighty Avenger: The God Who Fell To Earth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1563184-thr__tma.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: The Quest for Odin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6482531-9011445611-68469.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: The Rage of Thor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/49017/1325428-thor_rage_of_cover.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: The Reigning",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5074002-01.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: The Trial of Thor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/45797/849461-p00001_3_.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: The Trial of Thor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6060415-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: The Warriors Three",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6471639-1963776874-68467.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: The Warriors Three - The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3443368-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: The Warriors Three Unleashed",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6491838-8819481834-68879.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: The World Eaters",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1866445-thr__twe.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: The Worthy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7169468-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Thunderstrike",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6500034-0370441488-69151.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Trials of Loki",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031804-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Truth of History",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15455/592345-tth.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: War's End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7125477-03.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Where Walk The Frost Giants",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6113432-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Who Holds the Hammer?",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4721766-02.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Whosoever Wields This Hammer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/98410/1798840-thor_wwth_01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Wolves of the North",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031806-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Wolves of the North",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1583006-p00001.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Worldengine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6482533-3873256770-68469.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor: Worthy Origins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6060416-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor/Iron Man: God Complex",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1856465-thr__im__gc.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thor/Road Force",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11127/111273888/5457753-harley%20davidson%20presents%20thor%20in%20the%20origin%20of%20road%20force%20%231%20%282013%29%20-%20page%201.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thors",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4627375-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Thors: Battleworld",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5092385-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thousand Faces",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62392/2966787-thousandfaces.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Three Mouseketeers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47641-2467-57027-1-three-mouseketeers.jpg",
//       "year": "1970",
//       "publisher": "DC Comics",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Three Mouseketeers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47615-1773-57001-1-three-mouseketeers.jpg",
//       "year": "1956",
//       "publisher": "DC Comics",
//       "Field7": "26 Issues"
//     },
//     {
//       "title": "Three-Dimension Adventures Superman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1292037-3dadvreprint.jpg",
//       "year": "1953",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Threshold",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2811288-1_e96d6c4746.jpeg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Threshold: The Hunted",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3664127-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thriller",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/21165-3207-23601-1-thriller.jpg",
//       "year": "1983",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Thrilling Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/940999-86617_20070303093717_large.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thrillkiller",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/38500-5987-43259-1-thrillkiller.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Thrillkiller '62",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/1770782-4881051_1.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thunderbolts",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5187378-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Thunderbolts",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4026957-tb1.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "83 Issues"
//     },
//     {
//       "title": "Thunderbolts",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/2733635-tbolts2012001_dc11_lr.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "32 Issues"
//     },
//     {
//       "title": "Thunderbolts",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/88957-18128-106243-1-thunderbolts.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "76 Issues"
//     },
//     {
//       "title": "Thunderbolts '97",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/99348-18276-107014-1-thunderbolts-annual.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thunderbolts 2000",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/99520-18276-107040-1-thunderbolts-annual.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thunderbolts Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3507924-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thunderbolts by Warren Ellis & Mike Deodato Ultimate Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2007276-tblt_by_we_md_uc.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thunderbolts By Warren Ellis: Caged Angels",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3327234-02.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thunderbolts By Warren Ellis: Faith In Monsters",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3327230-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thunderbolts Classic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1843361-tblt_cls1.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Thunderbolts Presents: Zemo: Born Better",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/91577-18182-106485-1-thunderbolts-present.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Thunderbolts Presents: Zemo: Born Better",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5478640-01.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thunderbolts: Breaking Point",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2769393-tb_bp_1_dcp_0000.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thunderbolts: Cage",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1469668-tbt__cge.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thunderbolts: Desperate Measures",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/155504-18910-111761-1-thunderbolts-desper.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thunderbolts: First Strikes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/3312010-81ztcauq2al._sl1005_.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thunderbolts: From the Marvel Vault",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1760681-thunderbolts_from_the_marvel_vault_001.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thunderbolts: Guardian Protocols",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/958178-tbolt_gp.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thunderbolts: How to Lose",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1568530-tbl__htl.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thunderbolts: Infinity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4261019-03.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thunderbolts: International Incident",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/317659-20692-124062-1-thunderbolts-intern.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thunderbolts: Justice Like Lightning",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1283967-tblt__jll.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thunderbolts: Life Sentences",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30638/729182-life_sentences1.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thunderbolts: Like Lightning",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/3110091-tb.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thunderbolts: Marvel's Most Wanted",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1566647-tbl__mmw.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thunderbolts: No Going Back",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5923516-02.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thunderbolts: No Mercy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3984440-04.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thunderbolts: No Quarter",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3416474-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thunderbolts: Prelude",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/3312008-309171.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thunderbolts: Punisher vs. The Thunderbolts",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4283517-05.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thunderbolts: Reason in Madness",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/381710-21498-129693-1-thunderbolts-reason.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thunderbolts: Red Scare",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3333127-02.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thunderbolts: Secret Invasion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70204/1527871-3_secret_invasion.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thunderbolts: The Great Escape",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6238321-3797630452-62841.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thunderbolts: There Is No High Road",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5613481-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thunderbolts: Violent Rejection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6329827-0825324257-65511.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thunderbolts: Widowmaker",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5478642-01.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Thunderstrike",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/63915/1527086-thunderstrike.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Thunderstrike",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/33502-5055-37411-1-thunderstrike.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "24 Issues"
//     },
//     {
//       "title": "Thunderstrike: Youth in Revolt",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1867299-ths__yir.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tigra: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7175963-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Timber Wolf",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4405126-01.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Time Bandits",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1250493-time_bandits_v1_001.jpg",
//       "year": "1982",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Time Masters",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/29158-4380-32401-1-time-masters.jpg",
//       "year": "1990",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Time Masters: Vanishing Point",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1308591-2l8ayo.jpeg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Time Masters: Vanishing Point",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4427952-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Time Warp",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/17736-2991-19827-1-time-warp.jpg",
//       "year": "1979",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Timely 70th Anniversary Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6747135-5341245598-74114.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Timely Comics: All-New Inhumans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5245449-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Timely Comics: All-New, All-Different Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5245450-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Timely Comics: Carnage",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5245451-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Timely Comics: Daredevil",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5259950-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Timely Comics: Doctor Strange",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5259951-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Timely Comics: Drax",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5259952-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Timely Comics: Invincible Iron Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5264036-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Timely Comics: Moon Girl and Devil Dinosaur",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5264037-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Timely Comics: New Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5264038-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Timely Comics: Scarlet Witch",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5283132-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Timely Comics: Squadron Supreme",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5283133-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Timely Comics: Totally Awesome Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5283134-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Timely Comics: Ultimates",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5294890-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Timely Comics: Uncanny Inhumans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5294891-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Timely Comics: Venom: Space Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5294892-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Timely Comics: Web Warriors",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5294893-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Timely Presents: All-Winners",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/2054552-timely_presents__all_winners_v1999__1999_12____page_1.jpg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Timely Presents: The Human Torch",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/2054568-timely_presents_the_human_torch___page_1.jpg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Timely's Greatest: The Golden Age Human Torch By Carl Burgos Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7161573-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Timely's Greatest: The Golden Age Sub-Mariner: The Pre-War Years By Bill Everett",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7059436-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Timely's Greatest: The Golden Age: Simon & Kirby Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7116004-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Timeslip Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/108816/2281219-p00001.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Timeslip: The Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/114243-18533-108916-1-tiimeslip-the-colle.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Timestorm 2009/2099",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3726666-01.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Timestorm 2009/2099",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/762413-timestorm.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Timestorm 2009/2099: Spider-Man One-Shot",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/828584-timestormspidy.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Timestorm 2009/2099: X-Men One-Shot",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/855893-tsxm1a.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tiny Titans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/305778-20512-122790-1-tiny-titans.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "50 Issues"
//     },
//     {
//       "title": "Tiny Titans: Adventures in Awesomeness",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3591150-02.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tiny Titans: Aw Yeah Titans!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3591156-08.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tiny Titans: Field Trippin'",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515557-05.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tiny Titans: Growing Up Tiny!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3591155-07.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tiny Titans: Return To the Treehouse",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3866912-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Tiny Titans: Return To the Treehouse",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4440306-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tiny Titans: Sidekickin' It",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3591151-03.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tiny Titans: The First Rule Of Pet Club",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3591153-04.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tiny Titans: The Treehouse And Beyond",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/33913/2195945-tttreehousebeyond.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tiny Titans: Welcome to the Treehouse",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3591149-01.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tiny Titans/Little Archie",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56299/1454624-tiny_titans_and_little_archie_issue_1.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Tiny Toon Adventures Magazine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62392/2777418-tinytoonmagazine.jpg",
//       "year": "1990",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Titans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5342744-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "36 Issues"
//     },
//     {
//       "title": "Titans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/535676-0003.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "38 Issues"
//     },
//     {
//       "title": "Titans Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5774302-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Titans Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1894161-00.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Titans Beat",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/617342-titans1.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Titans East Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/231178-19655-117893-1-titans-east-special.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Titans Hunt",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5432096-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Titans Hunt",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4867692-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Titans Secret Files",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68152/1444065-titans_sfo1.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Titans Sell-Out",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/316342-20662-123895-1-titans-sell-out.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Titans Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6468795-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Titans: A Judas Among Us",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6280044-03.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Titans: Burning Rage",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7040246-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Titans: Family Reunion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/2006649-1.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Titans: Fractured",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2356709-14547_900x1350.jpeg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Titans: Into the Bleed",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6974990-06.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Titans: Lockdown",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2059459-lockdown.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Titans: Made In Manhattan",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6070055-02.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Titans: Old Friends",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1087058-oldfriends.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Titans: Rebirth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5264040-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Titans: Scissors, Paper, Stone",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/7368/191189-19123-114306-1-titans-scissors-pa.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Titans: The Lazarus Contract",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6135179-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Titans: The Return of Wally West",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5734327-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Titans: The Spark",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6797724-05.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Titans: Titans Apart",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6614346-04.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Titans: Together Forever",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6623652-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Titans: Total Chaos",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6429670-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Titans: Villains for Hire",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2357182-240041_20120317132130_large.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Titans: Villains For Hire Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56213/1233364-titans_villains_for_hire_special__one_shot__brightest_day.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Titans/Legion of Super-Heroes: Universe Ablaze",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/40960-6447-46231-1-titans-legion-of-sup.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Titans/Young Justice: Graduation Day",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62392/2910682-graduationday.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Titans/Young Justice: Graduation Day",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/190049-19106-114206-1-titans-young-justice.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Toe Tags",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/10162/215075-19270-115655-1-toe-tags.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Toe Tags Featuring George Romero",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4103465-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tom and Jerry in War of the Whiskers Presents a Special Free Collector's Edition Comic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/585774-tajwotw.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tomahawk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/805687-th1.jpg",
//       "year": "1950",
//       "publisher": "DC Comics",
//       "Field7": "140 Issues"
//     },
//     {
//       "title": "Tomb of Darkness",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47932-2703-57365-1-tomb-of-darkness.jpg",
//       "year": "1974",
//       "publisher": "Marvel",
//       "Field7": "15 Issues"
//     },
//     {
//       "title": "Tomb of Dracula",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/10989-2582-12130-1-tomb-of-dracula.jpg",
//       "year": "1972",
//       "publisher": "Marvel",
//       "Field7": "70 Issues"
//     },
//     {
//       "title": "Tomb of Dracula",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/16235/314991-20629-123642-1-tomb-of-dracula.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Tomb of Dracula #10: Facsimile Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7144093-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tomb of Dracula Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/2214756-tod1.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Tomb of Dracula Presents Throne of Blood",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1787799-throne.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tomb of Dracula: Day of Blood, Night of Redemption",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7012696-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tomb Of Terror",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/28071/1451709-tot1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tony Stark: Iron Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6477334-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "19 Issues"
//     },
//     {
//       "title": "Tony Stark: Iron Man: Self-Made Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6744815-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tony Stark: Iron Man: Stark Realities",
//       "img": "https://comicvine1.cbsistatic.com/bundles/phoenixsite/images/core/loose/img_broken.png",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tony Stark: Iron Man: The Many Armors of Iron Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6479079-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tony Stark: Iron Man: War of the Realms",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7125478-03.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6765654-01.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Tor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/13602-2744-15248-1-tor.jpg",
//       "year": "1975",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Tor: A Prehistoric Odyssey",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2078487-tor.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Total Justice",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/617343-total1.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Total Recall",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1825105-01.jpg",
//       "year": "1990",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Totally Useless MAD",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2961862-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Tower of Shadows",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/9442-2448-10416-1-tower-of-shadows.jpg",
//       "year": "1969",
//       "publisher": "Marvel",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "Tower of Shadows Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1235938-tower_of_shadows_annual_01.jpg",
//       "year": "1971",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Toxic Avenger",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11863/1241522-89303713858.1_1_.gif",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "11 Issues"
//     },
//     {
//       "title": "Toxic Crusaders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/1372482-tc_01.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Toxin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1513/87077-18087-105930-1-toxin.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Toxin: The Devil You Know",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/991735-toxin.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Toy Story",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/2237841-toy_story__1.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Transformers Generation 2 Halloween Special Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1358708-transformers_generation_2_halloween_special_edition_v1_001.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Transformers Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/69256/1279403-transformersutp1ref.jpg",
//       "year": "1987",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Transformers Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2203995-01_cropped.jpg",
//       "year": "1986",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Transformers: Generation 2",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/19859/840762-63482_20060918011901_large.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "Transformers: The Movie",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2203965-01.jpg",
//       "year": "1986",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Trigger Twins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/617344-trigger1.jpg",
//       "year": "1973",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Trinity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/409743-21777-131320-1-trinity.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "52 Issues"
//     },
//     {
//       "title": "Trinity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5444374-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "22 Issues"
//     },
//     {
//       "title": "Trinity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1835030-1.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Trinity Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5879904-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Trinity of Sin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4155071-tos-cv1-ds-899f9.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Trinity of Sin: Pandora",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3144015-pandora11.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "14 Issues"
//     },
//     {
//       "title": "Trinity of Sin: Pandora - Choices",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4240268-02.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Trinity of Sin: Pandora: Futures End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4101659-pandora.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Trinity of Sin: Pandora: The Curse",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3703460-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Trinity of Sin: The Phantom Stranger - The Crack In Creation",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4332741-03.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Trinity of Sin: The Phantom Stranger: Futures End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4069917-phantom%20stranger.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Trinity of Sin: The Wages of Sin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4698760-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Trinity War Preview",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3148553-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Trinity: Better Together",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5884531-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Trinity: Dark Destiny",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6527902-03.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Trinity: Dead Space",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6184539-02.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Trinity: The Search For Steve Trevor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6712692-04.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Triple-A Baseball Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/616477-trip1.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Triumph",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/604122-00jsa.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Trojan War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/111746/5737448-6614473.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Trojan War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/791970-1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Tron: Betrayal",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/49117/1440417-tron_betrayal__1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Tron: Original Movie Adaptation",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1488966-p00001.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Trouble",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1856628-trouble.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Trouble Magnet",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/61252/1144359-troublemagnet01_01.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "True Believers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15455/473299-tb.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "True Believers: Absolute Carnage: Carnage",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7000502-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Absolute Carnage: Carnage U.S.A.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6990928-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Absolute Carnage: Mania",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7016217-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Absolute Carnage: Maximum Carnage",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7009257-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Absolute Carnage: Mind Bomb",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7025113-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Absolute Carnage: Planet of the Symbiotes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7025114-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Absolute Carnage: Savage Rebirth!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7009258-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Absolute Carnage: Separation Anxiety",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7016218-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Absolute Carnage: She-Venom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6990930-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Absolute Carnage: Venom vs. Carnage",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7000504-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Age of Ultron",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4532212-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: All-New Wolverine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5714318-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: All-New, All-Different Avengers: Cyclone",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5316401-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Amazing Fantasy Starring Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5936028-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Annihilation: Annihilus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7175852-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Annihilation: Man-Wolf",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7175853-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Annihilation: Mantis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7184437-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Annihilation: Moondragon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7184438-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Annihilation: Nova",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7175854-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Annihilation: Odinpower",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7184439-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Annihilation: Omega the Unknown",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7175855-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Annihilation: Quasar",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7175856-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Annihilation: Super-Skrull",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7184441-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Annihilation: The Super-Adaptoid",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7184440-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Ant-Man and Hawkeye: Avengers Assemble",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6489020-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Ant-Man and the Wasp: 'Til Death Do Us Part!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6468816-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Ant-Man and the Wasp: On the Trail of Spider-Man!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6468815-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Ant-Man Presents Iron Man: The Ghost and the Machine!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6489022-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Armor Wars",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4519405-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Astonishing X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5822818-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Avengers vs. Thanos",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6364908-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Avengers: Endgame",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6893210-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Avengers: Nebula",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6875021-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Avengers: Rocket Raccoon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6903198-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Avengers: Ronin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6883295-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Avengers: Stormbreaker",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6883296-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Avengers: Thanos & Gamora",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6883297-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Avengers: Thanos vs. the Marvel Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6875022-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Avengers: Thanos: The Final Battle",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6893213-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Avengers: The Gatherers Saga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6893212-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Black Panther",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5989967-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Black Widow",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4793354-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Cable & The New Mutants",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5801082-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Captain America Lives Again",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5989968-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Captain Mar-Vell",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6799268-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Captain Marvel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4780133-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Captain Marvel Betrayed!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6819239-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Captain Marvel vs. Ronan",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6799267-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Captain Marvel: Avenger",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6819238-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Captain Marvel: Binary",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6807831-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Captain Marvel: Earth's Mightiest Hero",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6807832-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Captain Marvel: Ms. Marvel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6789777-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Captain Marvel: Spider-Man and Ms. Marvel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6789778-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Captain Marvel: The Kree/Skrull War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6807833-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Captain Marvel: The New Ms. Marvel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6819240-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Carol Danvers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6396959-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Chewbacca",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5193984-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Civil War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4502591-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Conan Serpent War: The Valley of the Worm",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7169469-00.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Conan the Barbarian: Curse of the Golden Skull!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6762385-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Conan the Barbarian: Queen of the Black Coast!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6762386-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Conan the Barbarian: Resurrection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6780983-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Conan the Barbarian: Swords In the Night!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6754313-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Conan the Barbarian: The Devil-God of Bal-Sagoth!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6754312-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Conan the Barbarian: The Secret of Skull River",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6771036-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Daredevil: Practice To Deceive",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5316402-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Darth Vader",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5193986-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Deadpool",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4984319-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Deadpool Origins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4984320-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Deadpool the Musical!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5022961-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Deadpool the Variants",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5022962-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Deadpool: Deadpool Vs. Sabretooth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5328127-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Death of Phoenix",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6203598-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Detective Deadpool",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4995888-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Doctor Strange: The Last Days of Magic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5342801-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Droids",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5193987-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Enter the Phoenix",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6173020-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Evil Deadpool",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5022963-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Exiles",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6449148-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Extraordinary X-Men: The Burning Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5305079-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Fantastic Four By John Byrne",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6517774-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Fantastic Four By Walter Simonson",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6517776-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Fantastic Four vs. Doctor Doom!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6508784-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Fantastic Four: Blastaar",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730771-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Fantastic Four: Dragon Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6728486-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Fantastic Four: Frightful Four",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730773-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Fantastic Four: Galactus Hungers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6508779-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Fantastic Four: Hulk vs. Thing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6508780-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Fantastic Four: Klaw",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730776-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Fantastic Four: Marvel Two-In-One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6508783-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Fantastic Four: Prisoners of the Puppet-Master!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6712694-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Fantastic Four: Ronan and the Kree",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730777-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Fantastic Four: Skrulls From Outer Space!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6712695-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Fantastic Four: Super-Skrull",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6728487-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Fantastic Four: The Birth of Valeria",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6529681-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Fantastic Four: The Coming of Galactus!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6498655-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Fantastic Four: The Coming of H.E.R.B.I.E.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6517777-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Fantastic Four: The Mad Thinker and His Awesome Android!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6712693-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Fantastic Four: The Molecule Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6728488-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Fantastic Four: The Wedding of Sue and Reed!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6498656-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Fantastic Four: What If?",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6529682-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Generation X",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5822819-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Giant-Size X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5790275-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Groot!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6003341-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Guardians of the Galaxy: Galaxy's Most Wanted",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5328128-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: House of M",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4506521-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Hulk Returns!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7075989-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Hulk: Devil Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7084664-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Hulk: Head of Banner",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7059440-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Hulk: Intelligent Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7059441-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Hulk: Joe Fixit",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7075990-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Hulk: Professor Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7075991-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Hulk: Red Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7084666-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Hulk: The Other Hulks",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7084665-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Infinity Gauntlet",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6375288-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Infinity Incoming!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6396960-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Invincible Iron Man: The War Machines",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5305080-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Iron Man 2020: Pepper Potts",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7234733-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Jack Kirby 100th Anniversary: Ant-Man and the Wasp",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6033663-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Jack Kirby 100th Anniversary: Captain America",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6011369-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Jack Kirby 100th Anniversary: Devil Dinosaur",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6022552-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Jack Kirby 100th Anniversary: Eternals",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6011370-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Jack Kirby 100th Anniversary: Iron Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6033664-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Jack Kirby 100th Anniversary: Nick Fury, Agent of S.H.I.E.L.D.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6022556-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Jack Kirby 100th Anniversary: The Inhumans!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6022554-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Journey to Star Wars: The Force Awakens: Shattered Empire",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5193988-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Kanan The Last Padawan",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5193989-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: King Conan",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6771038-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Lando",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5193990-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Marvel Knights 20th Anniversary: Daredevil by Kevin Smith, Joe Quesada & Jimmy Palmiotti",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6596008-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Marvel Knights 20th Anniversary: Daredevil by Stan Lee & Bill Everett",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6596009-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Marvel Knights: Daredevil and the Defenders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6606820-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Marvel Knights: Hellcat",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6624966-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Marvel Knights: Iron Fist",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6616006-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Marvel Knights: Jessica Jones: Alias",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6606822-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Marvel Knights: Luke Cage and Fantastic Four",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6623653-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Marvel Knights: Luke Cage, Hero For Hire",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6606823-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Marvel Knights: Power Man & Iron Fist",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6616007-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Marvel Knights: The Punisher",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6624967-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Marvel Knights: The Punisher by Grant & Zeck",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6616008-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Marvel Knights: The Punisher War Journal",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6624968-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Marvel Knights: The Punisher: The First Appearance",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6616009-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Marvel Tails Starring Peter Porker, The Spectacular Spider-Ham",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6984446-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Marvel Zombies",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4479806-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Marvel's Greatest Creators: Avengers: The Origin of Mantis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6913177-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Marvel's Greatest Creators: Iron Fist: Colleen Wing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6922223-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Marvel's Greatest Creators: Iron Fist: Misty Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6938343-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Marvel's Greatest Creators: Luke Cage, Power Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6930234-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Marvel's Greatest Creators: Power Pack",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6938344-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Marvel's Greatest Creators: Silver Surfer: Rude Awakening",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6947226-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Marvel's Greatest Creators: The Incredible Hulk: The Wedding of Rick Jones",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6913178-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Marvel's Greatest Creators: The Invaders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6922222-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Marvel's Greatest Creators: What If... Starring Spider-Girl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6938345-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Miles Morales: Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5923519-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Miles Morales: Ultimate Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4532215-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Ms. Marvel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4793355-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: New Fantastic Four",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6529683-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: New Mutants",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5801083-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Old Man Logan",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5714319-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Old Man Logan",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4506522-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Peter Parker, The Spectacular Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5923520-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Phoenix Bizarre Adventures",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6184540-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Phoenix Classic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6184541-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Phoenix Origins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6203599-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Phoenix Presents Cyclops and Marvel Girl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6173021-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Phoenix Presents: Jean Grey vs. Sabretooth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6195228-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Phoenix Presents: The Wedding of Scott Summers & Jean Grey",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6195229-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Phoenix Returns!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6184542-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Planet Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4493010-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Princess Leia",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4823368-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Rebirth of Thanos",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6396962-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Scott Lang, The Astonishing Ant-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6479081-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: She-Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4808750-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Silk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4814515-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Spider-Armor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6958107-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Spider-Gwen",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4780191-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5936030-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Spider-Man vs Mysterio",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6984447-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Spider-Man vs. Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6965854-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Spider-Man: Morbius",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6965851-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Spider-Woman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4829215-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Star Wars",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5193991-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Star Wars Classic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5193992-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Star Wars Covers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5187379-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Star Wars: According To the Droids",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7169470-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Star Wars: Darth Maul",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6913179-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Star Wars: Darth Vader",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6903200-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Star Wars: Death Probe!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7169471-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Star Wars: Ewoks",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6913180-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Star Wars: Hutt Run",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7169472-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Star Wars: Original Marvel Years",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6903201-107.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Star Wars: Rebel Jail",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6913181-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Star Wars: Skywalker Strikes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6903203-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Star Wars: The Ashes of Jedha",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6903199-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Star Wars: The Hunter!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7169473-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Star Wars: Thrawn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6913182-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Star Wars: Vader vs. Leia!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7169474-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Thanos Rising",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6375289-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: Thanos the First",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6364909-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: The Amazing Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6958095-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: The Amazing Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5923518-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: The Amazing Spider-Man: Brand New Day",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5936029-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: The Amazing Spider-Man: Spidey Fights In London!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6974993-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: The Amazing Spider-Man: The Dark Kingdom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5342798-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: The Amazing Spider-Man: The Wedding of Aunt May & Doc Ock",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6974992-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: The Astonishing Ant-Man: Incredible Shrinking Doom!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6479080-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: The Criminally Insane: Absorbing Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7225386-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: The Criminally Insane: Bullseye",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7197027-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: The Criminally Insane: Bushman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7204787-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: The Criminally Insane: Dracula",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7219900-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: The Criminally Insane: Green Goblin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7197028-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: The Criminally Insane: Gypsy Moth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7212616-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: The Criminally Insane: Klaw",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7225387-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: The Criminally Insane: Mandarin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7212617-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: The Criminally Insane: Masters of Evil",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7204788-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: The Criminally Insane: Purple Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7219901-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: The Groovy Deadpool",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5008175-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: The Incredible Hulk: Gray Hulk Returns",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7068247-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: The Incredible Hulk: Mindless Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7068248-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: The Infinity Gauntlet",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4519406-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: The Infinity War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6396961-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: The Meaty Deadpool",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5008177-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: The Mighty Thor: The Strongest Viking There Is",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5342803-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: The Mighty Thor!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6003342-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: The New Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6958102-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: The Sinister Secret of Spider-Man's New Costume!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6965849-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: The Unbeatable Squirrel Girl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4829216-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: The Uncanny X-Men: Bishop",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7092710-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: The Uncanny X-Men: Kitty Pryde & Emma Frost",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7092711-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: The Uncanny X-Men: Pyro",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7101025-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "True Believers: The Wedding of Deadpool",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5008178-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     }
//   ]

// db.comicvinevolumes.collection
// .insertMany(comicvinevolumesSeed)
//   .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });