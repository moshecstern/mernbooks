// const mongoose = require("mongoose");
// const db = require("../models");

// mongoose.connect(
//     process.env.MONGODB_URI ||
//     "mongodb://localhost/comicbookdb"
//   );


// const comicvinevolumesSeed = 

// [
//     {
//       "title": "Hawkeye",
//       "img": "https://comicvine1.cbsistatic.com/bundles/phoenixsite/images/core/loose/img_broken.png",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Hawkeye",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5551/590998-0430505b_7bc6_4ee7_94ce_7fc53b8ea02c.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Hawkeye",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/2696408-cover.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "22 Issues"
//     },
//     {
//       "title": "Hawkeye & Mockingbird",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2185195-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Hawkeye & The Thunderbolts",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5160021-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Hawkeye and Mockingbird: Ghosts",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1654776-h_m__ghs.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hawkeye and Mockingbird/Black Widow: Widowmaker",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4296421-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hawkeye Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3200311-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hawkeye by Matt Fraction And David Aja Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7118293-1924735792-80590.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hawkeye vs. Deadpool",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4433820-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hawkeye vs. Deadpool",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4071723-00.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Hawkeye: All-New Hawkeye",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4897069-05.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hawkeye: Avenging Archer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4471811-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hawkeye: Blind Spot",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2185197-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Hawkeye: Blind Spot",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4296423-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hawkeye: Earth's Mightiest Marksman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11352/1095923-a.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hawkeye: Freefall",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7197040-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Hawkeye: Hawkeyes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5268250-06.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hawkeye: Kate Bishop: Anchor Points",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5874737-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hawkeye: Kate Bishop: Family Reunion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6418907-03.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hawkeye: Kate Bishop: Masks",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6195200-02.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hawkeye: L.A. Woman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4149743-03.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hawkeye: Little Hits",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3165444-02.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hawkeye: My Life as a Weapon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2924824-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hawkeye: Private Eye",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7047343-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hawkeye: Rio Bravo",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4721004-04.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hawkgirl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/164349-18988-112720-1-hawkgirl.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "17 Issues"
//     },
//     {
//       "title": "Hawkgirl: Hath-Set",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1843351-hawkgirl_hath_set.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hawkgirl: Hawkman Returns",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1868622-hawkman_returns.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hawkgirl: The Maw",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1843204-hawkgirl_the_maw.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hawkman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100038/2704793-hawkman_tpb__16888___page_1.jpg",
//       "year": "1989",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hawkman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/24288-3601-27043-1-hawkman.jpg",
//       "year": "1986",
//       "publisher": "DC Comics",
//       "Field7": "17 Issues"
//     },
//     {
//       "title": "Hawkman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/33803-4962-37745-1-hawkman.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "34 Issues"
//     },
//     {
//       "title": "Hawkman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/6449-2178-7047-1-hawkman.jpg",
//       "year": "1964",
//       "publisher": "DC Comics",
//       "Field7": "27 Issues"
//     },
//     {
//       "title": "Hawkman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/164232-9402-112705-1-hawkman.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "49 Issues"
//     },
//     {
//       "title": "Hawkman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6468784-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "20 Issues"
//     },
//     {
//       "title": "Hawkman Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/1078724-hma1.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Hawkman by Geoff Johns",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5897075-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Hawkman Found",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6203584-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hawkman Omnibus By Geoff Johns",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2273340-sep110186.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hawkman Secret Files and Origins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2273396-13768_20051128220840_large.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hawkman Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/25579/520939-3151_4_1.jpg",
//       "year": "1986",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hawkman Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15455/486612-hms.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hawkman: Allies And Enemies",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1878672-allies_and_enemies.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hawkman: Awakening",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6965809-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hawkman: Deathbringer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7167920-02.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hawkman: Endless Flight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1767619-endless_flight.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hawkman: Rise of the Golden Eagle",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/345290-21083-126491-1-hawkman-rise-of-the.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hawkman: Wings Of Fury",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1878680-wings_of_fury.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hawkworld",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2788592-01.jpg",
//       "year": "1990",
//       "publisher": "DC Comics",
//       "Field7": "32 Issues"
//     },
//     {
//       "title": "Hawkworld",
//       "img": "https://comicvine1.cbsistatic.com/bundles/phoenixsite/images/core/loose/img_broken.png",
//       "year": "1989",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Hawkworld",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3676863-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hawkworld Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/28937-4366-32137-1-hawkworld-annual.jpg",
//       "year": "1990",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Haywire",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/27160-4007-30133-1-haywire.jpg",
//       "year": "1988",
//       "publisher": "DC Comics",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "He-Man and the Masters of the Multiverse",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7152334-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "He-Man and the Masters of the Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2985076-he%200.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "19 Issues"
//     },
//     {
//       "title": "He-Man and the Masters of the Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515504-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "He-Man and the Masters of the Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2444476-screen_shot_2012_07_02_at_11.44.14_pm.png",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "He-Man and the Masters of the Universe Magazine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/298789-20441-122387-1-he-man-and-the-maste.jpg",
//       "year": "1985",
//       "publisher": "Marvel",
//       "Field7": "16 Issues"
//     },
//     {
//       "title": "He-Man and the Masters of the Universe Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6805471-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "He-Man and the Masters of the Universe: The Blood of Grayskull",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4627322-05.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "He-Man And The Masters Of The Universe: What Lies Within",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4436315-04.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "He-Man: The Eternity War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4838235-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "He-Man: The Eternity War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4291640-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "15 Issues"
//     },
//     {
//       "title": "He-Man/Thundercats",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5470263-01a.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "He-Man/Thundercats",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5935999-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Healthy Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/616253-healthy1.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Heart Throbs",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/56136-1821-78254-1-heart-throbs.jpg",
//       "year": "1949",
//       "publisher": "DC Comics",
//       "Field7": "146 Issues"
//     },
//     {
//       "title": "Heavy Hitters Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1364091-heavy_hitters_annual_v1_001.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hellblazer Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/694586-annual1.jpg",
//       "year": "1989",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hellcat",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5551/590997-c8e4a7a5_2948_4e1b_a6a7_20c1297914a2.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Hellstorm by Warren Ellis Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6631588-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hellstorm: Prince of Lies",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4744/137836-9100-110810-1-hellstorm-prince-of.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "21 Issues"
//     },
//     {
//       "title": "Helmet of Fate: Black Alice",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/199624-19199-114989-1-helmet-of-fate-blac.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Helmet of Fate: Detective Chimp",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/199786-19200-115014-1-helmet-of-fate-dete.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Helmet of Fate: Ibis the Invincible",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/28079/1118875-ibis_cover.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Helmet of Fate: Zauriel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/199789-19201-115016-1-helmet-of-fate-zaur.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Her-oes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1200393-her_oes_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Heralds",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4637733-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Heralds",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2788645-01a.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Herc",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51031/1759922-herc1cover.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "11 Issues"
//     },
//     {
//       "title": "Herc: The Complete Series by Grek Pak and Fred Van Lente",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2485860-hrc_cs_by_p_vl.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hercules",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4887895-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Hercules",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/21606-3344-24096-1-hercules.jpg",
//       "year": "1984",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Hercules",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/20115-3139-22444-1-hercules.jpg",
//       "year": "1982",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Hercules",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3848/189737-19104-114175-1-hercules.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Hercules Unbound",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/13965-2732-15638-1-hercules-unbound.jpg",
//       "year": "1975",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Hercules: Fall of an Avenger",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1157934-p00001___hercules_fall_of_an_avenger__1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Hercules: Full Circle",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2028288-hcl__fc.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hercules: Heart of Chaos",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30638/727306-hercules1.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Hercules: Prince of Power",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6451406-1525071936-68052.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hercules: Still Going Strong",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5254528-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hercules: The New Labors of Hercules",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2028262-hcl__tnloh.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hercules: Twilight of a God",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1253675-hercules_twilight_of_a_god_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Hercules: Twilight of a God",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6609738-3730716970-71315.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Here's Howie Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70196/2941115-01.jpg",
//       "year": "1952",
//       "publisher": "DC Comics",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "Hero",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1273734-hero_v1_001.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Hero Factory",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68096/1327907-herofactory1cover.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "Hero for Hire",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6606937-4179961455-STL093571",
//       "year": "1972",
//       "publisher": "Marvel",
//       "Field7": "16 Issues"
//     },
//     {
//       "title": "Hero Hotline",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/27995-4195-31064-1-hero-hotline.jpg",
//       "year": "1989",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Hero Initiative: Fantastic Four",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55582/3110775-265525_20130127131149_large.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hero Initiative: Mike Wieringo Book:  What if THIS Was the Fantastic Four?",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/427782-WhatIfFF.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/2397307-heroes_marvel__tribute___page_1.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Heroes Against Hunger",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/1516466-53r01x.jpg",
//       "year": "1986",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Heroes for Hire",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62778/1540315-heroes_for_hire.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Heroes for Hire",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2953612-199707%20heroes%20for%20hire%20v1%20%231%20-%20page%201.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "19 Issues"
//     },
//     {
//       "title": "Heroes for Hire",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/111531-18102-108695-1-heroes-for-hire.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "15 Issues"
//     },
//     {
//       "title": "Heroes for Hire / Quicksilver '98",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/245882-19807-118824-1-heroes-for-hire--qu.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Heroes for Hire by Abnett & Lanning: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7235126-9862461266-83278.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Heroes For Hire: Ahead of the Curve",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/444012-heroes_for_hire_ahead_of_the_curve_1_00.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Heroes for Hire: Control",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1928004-hfh__ctl.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Heroes for Hire: World War Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1172756-hfh.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Heroes for Hope Starring the X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/106162-18450-108266-1-heroes-for-hope-star.jpg",
//       "year": "1985",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Heroes In Crisis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7083700-7572789040-80817.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Heroes In Crisis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6624933-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "Heroes In Crisis: The Price and Other Tales",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7100352-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Heroes of Power: The Women of Marvel - All-New Marvel Treasury Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5613459-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Heroes Reborn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/406739-21749-131190-1-heroes-reborn.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Heroes Reborn Mini Comic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2492228-heroes_reborn_mini_comic__1___page_1.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Heroes Reborn Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6981391-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Heroes Reborn: Ashema",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/14661/437775-heroesrebornashema1.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Heroes Reborn: Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/965400-heroes_reborn_avengers_tpb.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Heroes Reborn: Captain America",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/965426-heroes_reborn_captain_america_tpb.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Heroes Reborn: Doom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/494926-heroes_reborn___doom.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Heroes Reborn: Doomsday",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/14661/437772-heroesreborndoomsday1.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Heroes Reborn: Fantastic Four",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/10069/545425-scan0001.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Heroes Reborn: Iron Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/965440-heroes_reborn_iron_man_tpb.jpeg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Heroes Reborn: Masters of Evil",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/14661/437774-heroesrebornmastersofevil1.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Heroes Reborn: Rebel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/14661/437773-heroesrebornrebel1.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Heroes Reborn: Remnants",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/14661/437771-heroesrebornremnants1.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Heroes Reborn: The Return",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/39454-6004-44392-1-heroes-reborn-the-r.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Heroes Reborn: The Return",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7146755-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Heroes Reborn: Young Allies",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/14661/437714-heroesrebornyoungallies1.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Heroes Vs. Plaque",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/154624-18904-111704-1-heroes-vs-plaque.JPG",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Heroic Age Magazine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65073/1319245-heroic_age_magazine__1___page_3.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Heroic Age Previews",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1225616-heroic_age_previews.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Heroic Age: One Month To Live",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1373931-heroic_age_1_month_2_live.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Heroic Age: Prince of Power",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1225742-heroic.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Heroic Age: X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/1591648-heroic_age_x_men_vol_1_1.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Heroscape",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/617044-hero1.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Hex",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/2597846-cover.jpg",
//       "year": "1985",
//       "publisher": "DC Comics",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "Hi Hi Puffy Amiyumi",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1639970-01.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "High Hurdles",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/4519340-jackie%20joyner-kersee%20fc%20final.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hill House Comics 2019 Sampler",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7086533-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "History of the DC Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/4768671-ccf%20hdcu%20%231%20front%2008262015.jpg",
//       "year": "1986",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "History of the DC Universe Portfolio",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/148518/2913473-historydcuniverse_portfolio.jpg",
//       "year": "1988",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "History of the Marvel Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2801843-his01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hit-Monkey",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1292372-1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Hit-Monkey (MDCU)",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1124602-1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hit-Monkey by Daniel Way: Bullets & Bananas",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7109884-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hit-Monkey: Year of the Monkey",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6599783-0438670213-70943.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hitman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/1116940-hm_cover.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "61 Issues"
//     },
//     {
//       "title": "Hitman Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1264276-annual_hitman_annual_v1997__1___a_coffin_full_of_dollars__1997____page_1.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hitman:  A Rage in Arkham",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3954005-01.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hitman: Ace of Killers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3968766-04.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hitman: Closing Time",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2506989-hmct_cvr_a.jpeg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hitman: For Tomorrow",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2508506-__kgrhqjhjcye9ss__ofzbph1rtew____60_57.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hitman: Local Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3954006-03.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hitman: Ten Thousand Bullets",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3919884-02.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hitman: Tommy's Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2655820-__kgrhqj__lie69eni_btbo7neei7p___60_57.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hitman: Who Dares Wins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2075531-who_dares_wins.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hitman's Greatest Hits",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7039255-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hitman/Lobo: That Stupid Bastich",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3601242-01.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hollywood Funny Folks",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/46921-1324-56253-1-hollywood-funny-folk.jpg",
//       "year": "1950",
//       "publisher": "DC Comics",
//       "Field7": "34 Issues"
//     },
//     {
//       "title": "Holy Cow! A Free Cartoon Network Comic!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/121941-18591-109668-1-holy-cow.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Home Depot Safety Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/616256-home1.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Homer, The Happy Ghost",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/59996-2443-92991-1-homer-the-happy-gho.jpg",
//       "year": "1969",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Hook",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61708-4792-94703-1-hook.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Hook",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1281530-hook_01.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hopalong Cassidy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/876-1616-937-1-hopalong-cassidy.jpg",
//       "year": "1954",
//       "publisher": "DC Comics",
//       "Field7": "50 Issues"
//     },
//     {
//       "title": "Hot Shots: Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1171063-hot_shots_avengers.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hot Shots: Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1171062-hot_shots_spider_man.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hot Shots: X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1160071-x_men_hotshots.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hot Wheels",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/9699-2465-10693-1-hot-wheels.jpg",
//       "year": "1970",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Hourman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/40616-6329-45793-1-hourman.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "25 Issues"
//     },
//     {
//       "title": "House II The Second Story",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1252848-house_ii_the_second_story_v1_001.jpg",
//       "year": "1987",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "House of Hem",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4598380-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "House of M",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/71863-12049-104861-1-house-of-m.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "House of M",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1058151-hom.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "House of M",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1166379-hom.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "House of M",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4751382-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "House of M Director's Cut",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1417632-cover_image.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "House of M MGC",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/149950/2888732-house_of_m__1__of_8___2011____page_1.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "House of M Prelude: Excalibur",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5901196-01.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "House of M Sketchbook",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1061029-star_trek_alien_spotlight_cardassians__2009____page_1.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "House of M: Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4261033-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "House of M: Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2029274-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "House of M: Civil War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/537731-0004.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "House of M: Fantastic Four/Iron Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4261752-01.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "House of M: Incredible Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1320114-hom__ih.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "House of M: Masters of Evil",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/908159-masters.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "House Of M: Masters Of Evil",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4336630-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "House of M: Mutopia X",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4346333-01.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "House of M: No More Mutants",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1261193-202516_20100606092306_large.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "House of M: Uncanny X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1287437-hom__uxm.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "House of M: Warzones!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4998051-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "House Of M: Wolverine, Iron Man & Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1141199-192015_20100215190048_large.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "House of M: World of M Featuring Wolverine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1416527-hom__wom.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "House of Mystery",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/221481-19439-116429-1-house-of-mystery.jpg",
//       "year": "1951",
//       "publisher": "DC Comics",
//       "Field7": "321 Issues"
//     },
//     {
//       "title": "House of Secrets",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/9364-2435-10336-1-house-of-secrets.jpg",
//       "year": "1969",
//       "publisher": "DC Comics",
//       "Field7": "74 Issues"
//     },
//     {
//       "title": "House of Secrets",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/2534-1768-2747-1-house-of-secrets.jpg",
//       "year": "1956",
//       "publisher": "DC Comics",
//       "Field7": "80 Issues"
//     },
//     {
//       "title": "House of Secrets #92: Facsimile Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7052766-92.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "House of Whispers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6606778-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "17 Issues"
//     },
//     {
//       "title": "House of X",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7016192-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "House of X/Powers of X",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7175958-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "House of X/Powers of X Free Previews",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7009218-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "How to Draw DC Comics Super Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/114183/5727634-61f9kf0n8zl.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "How to Draw Iron Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/114926/7028998-how%20to%20draw%20iron%20man%20v1997%20%231%20%28of%201%29%20-%20page%201.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "How To Draw X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3907851-how%20to%20draw%20x-men%20001%20%282003%29%20pagecover.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "How To Paint Characters the Marvel Studios Way",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7109885-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Howard the Duck",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4887896-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "11 Issues"
//     },
//     {
//       "title": "Howard the Duck",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4312/203233-19214-115136-2-howard-the-duck.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Howard the Duck",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/14327-2859-16023-1-howard-the-duck.jpg",
//       "year": "1975",
//       "publisher": "Marvel",
//       "Field7": "33 Issues"
//     },
//     {
//       "title": "Howard the Duck",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/17780-3005-19871-1-howard-the-duck.jpg",
//       "year": "1979",
//       "publisher": "Marvel",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "Howard the Duck",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4440316-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Howard the Duck #1: Facsimile Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6974971-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Howard the Duck Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/29571/606250-1977_08_htd14a_annual.jpg",
//       "year": "1977",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Howard the Duck Holiday Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/29571/606119-scan0009.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Howard the Duck Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1524049-hw_t_dck_omn.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Howard The Duck: Duck Hunt",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5211096-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Howard The Duck: Good Night, and Good Duck",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5535655-02.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Howard the Duck: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4655895-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Howard the Duck: The Movie",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/24734-3637-27510-1-howard-the-duck-the.jpg",
//       "year": "1986",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Howard the Duck: What the Duck",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4814492-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Howard the Human",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4751386-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Howling Commandos of S.H.I.E.L.D.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4876850-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Howling Commandos of S.H.I.E.L.D.: Monster Squad",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5225572-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2634336-hulk______noads___team_dcp__1___page_1.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "58 Issues"
//     },
//     {
//       "title": "Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/42443-6779-48380-1-hulk.jpg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3762608-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "16 Issues"
//     },
//     {
//       "title": "Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5613460-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "11 Issues"
//     },
//     {
//       "title": "Hulk (Upper Deck Collector's Edition)",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/2607787-the_incredible_hulk_v1962_001__1962__pagecover.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk (Wal-Mart Edition)",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/2607791-the_incredible_hulk_v1962_001__1962__pagecover.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk / Sub-Mariner '98",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5586/537313-h98.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk & Thing: Hard Knocks",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2074845-hlk_thn__hk.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk 1999",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/149950/2911688-tr.jpg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk 2000",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5586/537319-h2000.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk 2099",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/470098-1.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "Hulk and Power Pack",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2031099-01.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Hulk and Power Pack: Pack Smash!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1417660-hpp.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4103484-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk by Jeph Loeb",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7172293-4049173213-81725.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Hulk by John Byrne and Ron Garney",
//       "img": "https://comicvine1.cbsistatic.com/bundles/phoenixsite/images/core/loose/img_broken.png",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk by Loeb & McGuinness Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6965810-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk by Mark Waid & Gerry Duggan: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6857781-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk Chronicles: WWH",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/17892/532255-bigtalk_hulkchronicleswwh_01_2008_marvel.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Hulk Family: Green Genes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2760635-hulk_family__1_000.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk Legends",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1875884-01.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk MGC",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1193793-hulk_mgc.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk Monster-Size Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/585435-kf5vz4.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk of Arabia Ashcan",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2097925-hulk_of_arabia_ashcan__1___page_1.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk Poster Book",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/2382473-hulk_poster_book__2008__pagecover.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk Smash Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2595137-prev_img.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Hulk Smash Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031882-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk Team-Up",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/45797/964181-hulk_team_up__1___page_1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk Visionaries: John Byrne",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4724345-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk Visionaries: Peter David",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4909305-01.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Hulk VS Fin Fang Foom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2776930-hvsfff_dcp_0000.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk Vs Hercules: When Titans Collide",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/2503/369207-21326-128653-1-hulk-vs-hercules--w.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk vs Thing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1417913-01.jpg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk vs. X-Force",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1481232-hlk_vs_xfc.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk Wal-Mart Custom Comic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11127/111273888/6431175-00.jpg",
//       "year": "",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk-Sized Mini-Hulks",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1915524-p00001.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: Abominable",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6159394-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: Banner D.O.A.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4174329-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: Beauty and The Behemoth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11113/111133305/4111630-bb1%5B1%5D.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: Boiling Point",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6178725-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: Broken Worlds",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/28028/727126-broken_worlds.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Hulk: Broken Worlds",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1067672-hbw.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: Destruction",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/197911-19185-114859-1-hulk-destruction.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Hulk: Dogs of War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6797699-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: Fall of the Hulks",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031820-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: Future Imperfect",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4524998-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: Future Imperfect",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4320625-hulkfi1nm96m124.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Hulk: Gamma Games",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/73922/1374318-hulk_gamma_games_01_p01.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Hulk: Gray",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100647/4266753-109606_l.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: Green Hulk/Red Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7146756-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: Heart of the Atom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1065148-hlk.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: Heart of the Atom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6217715-3756027509-62829.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: Hulk No More",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1152239-b9f2ccf990ad64210ecf3d649b295845_l_1_.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: Hulk of Arabia",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4288097-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: Incredible Origins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7101018-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: Let The Battle Begin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1153273-hulk_let_the_battle_begin_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: Nightmerica",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/197899-19184-114858-1-hulk-nightmerica.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Hulk: Omega Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4471814-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Hulk: Planet Hulk Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6044974-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: Planet Skaar",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1183876-hlk.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: Raging Thunder",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/449735-hulk_raging_thunder_1_00.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: Red & Green",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1481209-hlk__r_g.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: Red Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1481201-hlk__rd.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: Return of the Monster",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6271372-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: Return To Planet Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6429649-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: Season One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3601258-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: Smash",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11113/111133305/4111650-hulk%20-%20smash%20-%20page%201.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: Son of Hulk - Dark Son Rising",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1187223-hlk.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: The End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/59000/1166852-p00001___hulk_the_end.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: The Movie Adaptation",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/98410/1779135-hma.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: Transformations",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11131/111318833/6075938-incrediblehulktransformations.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: Unchained",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/73922/1374357-00.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Hulk: Winter Guard",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/2830022-07_228655_0_hulkwinterguard1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Hulk: World War Hulk II",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6623626-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: World War Hulk Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6080292-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: World War Hulks",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2148763-hlk__wwh.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: World War Hulks",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1477063-hlk__wwh.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: WWH - Damage Control",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4319490-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: WWH - Front Line",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4621116-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: WWH - Gamma Corps",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4319491-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: WWH - Incredible Herc",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4609155-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: WWH - Warbound",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4346334-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: WWH - World War Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1052462-hulk.gif",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk: WWH - X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4361980-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk/Pitt",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/272662-20267-121006-1-hulk--pitt.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulk/Wolverine: 6 Hours",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/66762-11379-99759-1-hulk--wolverine-6.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Hulked-Out Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1189544-hulked_out_heroes_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Hulked-Out Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5259993-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulkverines!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6965811-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hulkverines!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6807734-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Human Bomb",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2734640-2726904_hbomb_cv1.jpeg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Human Defense Corps",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1147935-p00001.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Human Target",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1123995-1.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Human Target",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1654710-human_target_tpb.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Human Target Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/325790-20845-124927-1-human-target-special.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Human Torch",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5551/593327-ac5d1ae0_0dd7_4acd_881b_58a176e7e79a.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Human Torch Comics 70th Anniversary Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/794104-1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Human Torch: Burn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1600932-hmn_trc__brn.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Human Torch: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4863081-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hunger",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3192675-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Hunt For Wolverine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6395730-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hunt For Wolverine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6657921-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hunt For Wolverine: Adamantium Agenda",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6712659-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hunt For Wolverine: Adamantium Agenda",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6418911-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Hunt For Wolverine: Claws of A Killer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6712661-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hunt For Wolverine: Claws Of A Killer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6429650-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Hunt For Wolverine: Dead Ends",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6582687-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hunt For Wolverine: Mystery In Madripoor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6712662-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hunt For Wolverine: Mystery In Madripoor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6437966-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Hunt For Wolverine: Weapon Lost",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6712663-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hunt For Wolverine: Weapon Lost",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6406884-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Huntress",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2085924-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Huntress",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/35072-5246-39175-1-huntress.jpg",
//       "year": "1994",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Huntress: Crossbow At the Crossroads",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2668122-_t2ec16n___8e9s4l6bt_bqini57kdg__60_57.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Huntress: Darknight Daughter",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/251083-19989-119438-1-huntress-darknight.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Huntress: Year One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1093/395067-21645-130670-1-huntress-year-one.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Huntress: Year One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2064796-huntress_year_one.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hyperion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5109012-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Hyperion: Daddy Issues",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5500609-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Hyperkind Unleashed!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1353652-hyperkind_unleashed_v1__1___page_1.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "I (heart) Marvel: Marvel Ai",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/228855-19602-117586-1-i---marvel.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "I (heart) Marvel: Masked Intentions",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2489672-iheartmmi.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "I (heart) Marvel: My Mutant Heart",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2489680-iheartmmmh.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "I (heart) Marvel: Outlaw Love",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2489671-iheartmoll.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "I (heart) Marvel: Web of Romance",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2489670-i____love__marvel_v2006__1___web_of_romance__2006_4____page_1.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "I am An Avenger",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1369903-prv6197_cov.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "I Am Captain America",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2801824-cap01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "I Am Groot",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6153005-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "I Am Groot",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5863213-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "I Am Legion: The Dancing Faun",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/393597-21617-130532-1-i-am-legion-the-dan.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "I Can't Believe It's Not the Justice League",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/34877/1864411-4428_400x600.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "I, Vampire",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/2031716-cover.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "20 Issues"
//     },
//     {
//       "title": "I, Vampire: Rise of the Vampires",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498171-02.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "I, Vampire: Tainted Love",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3485603-01.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "I, Vampire: Wave of Mutilation",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3382358-03.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "I... Vampire!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4062337-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "iCandy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68435/1588584-i_candy_01.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Iceman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6606800-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Iceman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/72690-9465-77818-1-iceman.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Iceman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/22427-3345-25018-1-iceman.jpg",
//       "year": "1984",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Iceman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5884501-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "11 Issues"
//     },
//     {
//       "title": "Iceman - Marvel Legacy Primer Pages",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6059537-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iceman and Angel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/87073/1722345-icemanandangel01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iceman: Absolute Zero",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6395731-02.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iceman: Amazing Friends",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6883257-03.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iceman: Thawing Out",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6203585-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Icon: A Hero's Welcome",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/58245/1100655-icon___a_heros_welcome_newprint.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Icon: Mothership Connection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/58245/1249949-i_mothershipconnection.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Identity Crisis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1988182-1.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Identity Crisis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3368484-01.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Identity Crisis #1 Special Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1182820-062009.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Identity Crisis: 10th Anniversary Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4283488-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Identity Disc",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/66118-11293-99115-1-identity-disc.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Identity Disc",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1170955-identity_disc_tpb.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ides of Blood",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1344577-1.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Illuminati",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4900405-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Illuminati: Life of Crime",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5324215-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Illuminator",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/36288/784262-61qnjqahxnl__ss500_.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Immortal Doctor Fate",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62697/1235222-300px_immortal_doctor_fate_vol_1_1.jpg",
//       "year": "1985",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Immortal Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7092700-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Immortal Hulk Director's Cut",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7039256-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Immortal Hulk: Abomination",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7059406-04.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Immortal Hulk: Hulk In Hell",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6929682-03.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Immortal Hulk: Or Is He Both?",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6694336-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Immortal Hulk: The Best Defense",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6712664-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Immortal Iron Fist Director's Cut",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2489721-iifdc.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Immortal Iron Fist: The Origin of Danny Rand",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/508281-2lj6ts7.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Immortal Weapons",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4346335-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Immortal Weapons",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/887108-1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Imperial Guard",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/90687-18172-106404-1-imperial-guard.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Impossible Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6500033-9363261598-69150.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Impulse",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/36423-5509-40684-1-impulse.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "90 Issues"
//     },
//     {
//       "title": "Impulse Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1256079-impulse_annual__1___page_1.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Impulse Plus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/993002-38135_20081107055406_large.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Impulse: Bart Saves the Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6678605-1701714191-copyO.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Impulse: Reckless Youth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2056917-impulse.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Impulse/Atom Double Shot",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1489210-p00001.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "In His Steps",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3093067-in%20his%20steps%20v1994%20001%20%281994%29%20pagecover.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "In the Days of the Mob",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3224940-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incognito Must Have",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1173479-p00001___incognito_must_have__1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incoming!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7188309-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hercules",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2032930-113.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "29 Issues"
//     },
//     {
//       "title": "Incredible Hercules: Against the World",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1192328-hrc.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hercules: Assault on New Olympus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4886844-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hercules: Dark Reign",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4775046-01.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hercules: Love And War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4637735-01.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hercules: Mighty Thorcules",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4872488-01.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hercules: Sacred Invasion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1170971-incredible_hercules_sacred_invasion_hc.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hercules: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7023028-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hercules: The New Prince of Power",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1553959-hrc__npop.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6103672-709.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "Incredible Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/889973-600.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Incredible Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/41453-6558-46831-1-incredible-hulk.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "101 Issues"
//     },
//     {
//       "title": "Incredible Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/2056155-hulk2011001_cv.png",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "16 Issues"
//     },
//     {
//       "title": "Incredible Hulk - Marvel Legacy Primer Pages",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6084526-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk #181: Facsimile Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6863622-181.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk 2001",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1794323-537321_h2001_super.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk by Jason Aaron: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6976726-8378544172-78247.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk By Peter David Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7212746-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk Epic Collection: Fall of the Pantheon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6223159-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk Epic Collection: Ghosts of the Future",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6760832-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk Epic Collection: Ghosts of the Past",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4802034-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk Epic Collection: In the Hands of Hydra",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7084653-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk Epic Collection: Man or Monster?",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5254529-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk Epic Collection: The Hulk Must Die",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6113401-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk Epic Collection: The Leader Lives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6666567-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1292047-hlk_omn.jpeg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk vs Superman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/157443-18929-111966-1-incredible-hulk-vs.jpg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk vs. Venom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/138583-18771-110894-1-incredible-hulk-vs.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk: Abominable",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1401374-ih__abm.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk: Big Things",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1401430-ih__bt.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk: Boiling Point",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1388341-ih__bp.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk: Crossroads",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6044627-3533597003-56171.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk: Dead Like Me",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1401403-ih__dlm.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk: Dogs of War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1388311-ih_dow.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk: Fall of the Hulks",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5070998-3394007012-50699.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk: From the Marvel UK Vaults",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6034067-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk: Hercules Unleashed",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30638/727471-hercules4.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk: Hide in Plain Sight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1401390-ih__hips.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk: Hulk vs the Marvel Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1090238-hulk.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk: Last Call",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6958070-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk: Pardoned",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6238320-4566547705-62839.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk: Past Perfect",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6273974-0252780880-63127.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk: Planet Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1098299-hulk.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk: Prelude to Planet Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1053634-hulk.gif",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk: Regression",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6168373-8712354849-60602.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk: Return of the Monster",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1388331-ih__rotm.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk: Son of Banner",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1192544-hlk.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk: Split Decisions",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1401398-ih__sd.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk: Tempest Fugit",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1401458-ih__tf.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk: The End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4035882-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk: Transfer of Power",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1388378-ih__top.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulk: World War Hulks",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1492384-ih__wwh.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulks",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1372341-incredible_hulks_612.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "24 Issues"
//     },
//     {
//       "title": "Incredible Hulks Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1920212-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulks: Dark Son",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6400301-8758611983-66812.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulks: Enigma Force",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1398351-incredible_hulks_enigma_force_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Incredible Hulks: Enigma Force: Dark Son",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1751782-icr_hlk__enfr__ds.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulks: Fall of the Hulks",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2185545-ih__foth.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulks: Heart of the Monster",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6301634-1755920608-64507.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulks: Planet Savage",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6412102-3261647796-67089.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Incredible Hulks: World War Hulks",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2259754-ih__wwh.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Independence Day",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/82974/1786360-90bcda51_c963_4552_afb2_57f2154191bf.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Independence Day",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64684/1921067-indepencedaytpb.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Indestructible Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/2709994-hulk2012001_cv.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "20 Issues"
//     },
//     {
//       "title": "Indestructible Hulk Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3482250-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Indestructible Hulk by Mark Waid: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6997341-0624952622-78603.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Indestructible Hulk Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3377638-01a.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Indestructible Hulk: Agent of S.H.I.E.L.D.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3799314-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Indestructible Hulk: Gods and Monster",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3303509-02.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Indestructible Hulk: Humanity Bomb",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3874319-04.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Indestructible Hulk: S.M.A.S.H. Time",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3595732-03.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Indiana Jones and the Last Crusade",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6404/1213525-indy_lastcursade1.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Indiana Jones and the Last Crusade: The Official Comics Adaptation",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/59022/5487341-indiana%20jones.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Indiana Jones and the Temple of Doom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/22133-3346-24695-1-indiana-jones-and-th.jpg",
//       "year": "1984",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "InFamous",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2513478-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Infamous Iron Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5489492-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Infamous Iron Man: Infamous",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5874742-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infamous Iron Man: The Absolution of Doom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6153008-02.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Inferior Five",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7074784-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Inferno",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4584112-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Inferno",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/39266-5955-44168-1-inferno.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Inferno: Warzones!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4955637-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinite Crisis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/169494-17983-105305-3-infinite-crisis.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Infinite Crisis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1166842-5804_400x600.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinite Crisis Aftermath: The Battle for Blüdhaven",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2080967-infinite_crisis_aftermath_the_battle_for_bl_dhaven.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinite Crisis Aftermath: The Battle for Blüdhaven",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/455708-002.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Infinite Crisis Aftermath: The Spectre",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/927456-aftermath_1.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Infinite Crisis Companion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23749/738613-5887_400x600.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinite Crisis Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2656443-feb120253.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinite Crisis Secret Files",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/410090-21773-131296-2-infinite-crisis-secr.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinite Crisis: Fight For the Multiverse",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3831259-81p8b0gbn0l._sl1500_.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "36 Issues"
//     },
//     {
//       "title": "Infinite Crisis: Fight For the Multiverse",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3962840-01a.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Infinite Crisis: Fight For the Multiverse",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4725119-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Infinity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3237209-01a.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Infinity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3626513-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinity Abyss",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/56193-9504-78316-1-infinity-abyss.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Infinity by Starlin & Hickman Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6874997-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinity Companion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3752376-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinity Countdown",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6312660-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Infinity Countdown",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6606802-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinity Countdown Companion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6606803-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinity Countdown Prime",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6289339-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinity Countdown: Adam Warlock",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6266894-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinity Countdown: Black Widow",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6477304-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinity Countdown: Captain Marvel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6447351-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinity Countdown: Champions",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6477305-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Infinity Countdown: Daredevil",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6429651-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinity Countdown: Darkhawk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6614313-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinity Countdown: Darkhawk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6437967-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Infinity Crusade",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1058733-ic.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Infinity Gauntlet",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1057503-ig.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinity Gauntlet Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3937917-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinity Gauntlet: Aftermath",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3288920-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinity Inc.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/190572-19120-114246-1-infinity-inc.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Infinity Inc.: Luthor's Monsters",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2567584-9167_400x600.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinity Inc.: The Bogeyman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2567586-10568_900x1350.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinity Man and the Forever People",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3880395-infinity.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "Infinity Man and the Forever People: Futures End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4086834-inmfpfe_cv1_2d_ds.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinity War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1058033-infinitywar_tpb.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinity War #1, A Marvel Comics Preview",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2104168-preview_infinity_war___a_marvel_comics__434___page_1.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinity Warps: Two-In-One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6797703-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinity Wars",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6797704-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinity Wars",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6538882-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Infinity Wars by Gerry Duggan: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7075984-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinity Wars Prime",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6529918-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinity Wars: Arachknight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6657923-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Infinity Wars: Fallen Guardian",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730725-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinity Wars: Ghost Panther",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6696049-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Infinity Wars: Infinity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6744797-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinity Wars: Infinity Warps",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6684822-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Infinity Wars: Iron Hammer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6623628-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Infinity Wars: Sleepwalker",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6819196-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinity Wars: Sleepwalker",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6632891-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Infinity Wars: Soldier Supreme",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6614315-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Infinity Wars: Weapon Hex",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6650940-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Infinity, Inc.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/21564-3308-24054-1-infinity-inc-.jpg",
//       "year": "1984",
//       "publisher": "DC Comics",
//       "Field7": "53 Issues"
//     },
//     {
//       "title": "Infinity, Inc. Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/4157093-infinity%20annual%20%231.jpg",
//       "year": "1985",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Infinity, Inc. Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3186637-01.jpg",
//       "year": "1987",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinity, Inc.: The Generations Saga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6086904-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinity: Against the Tide",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3240894-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Infinity: Heist",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3331108-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Infinity: Heist/The Hunt",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3756098-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinity: Incoming!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3443651-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Infinity: The Hunt",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3301845-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Inhuman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3732882-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "14 Issues"
//     },
//     {
//       "title": "Inhuman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5075149-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Inhuman Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4545241-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Inhuman Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4519404-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Inhuman: AXIS",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4471815-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Inhuman: Genesis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4245125-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Inhuman: Lineage",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4721005-03.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Inhumanity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3482251-01a.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Inhumanity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3953572-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Inhumanity: Superior Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3572916-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Inhumanity: The Awakening",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3493718-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Inhumans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2513481-01.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Inhumans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/127799-18639-109941-1-inhumans.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Inhumans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/968406-inhm.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Inhumans By Paul Jenkins & Jae Lee",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3529454-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Inhumans Prime",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5772994-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Inhumans Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/193586-19142-114500-1-inhumans-special.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Inhumans Vs. X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5936001-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Inhumans: Attilan Rising",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4584116-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Inhumans: Attilan Rising",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5022620-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Inhumans: Beware the Inhumans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6212052-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Inhumans: By Right of Birth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5964628-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Inhumans: Judgment Day",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6242725-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Inhumans: Once And Future Kings",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6002744-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Inhumans: Once And Future Kings",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6266896-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Inhumans: The Great Refuge",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/17099/681752-inhumans_tgr_1995__001_01.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Injustice 2",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5797678-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "72 Issues"
//     },
//     {
//       "title": "Injustice 2",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6113402-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Injustice 2",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5836025-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "36 Issues"
//     },
//     {
//       "title": "Injustice 2 Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6164825-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Injustice 2 ELeague",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6084535-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Injustice vs. Masters of the Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6893189-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Injustice Vs. Masters of the Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6518400-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Injustice: Gods Among Us",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2840708-injustice11.jpeg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Injustice: Gods Among Us",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2811995-screen_shot_2013_01_15_at_10.04.41_am.png",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "36 Issues"
//     },
//     {
//       "title": "Injustice: Gods Among Us",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3439028-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Injustice: Gods Among Us Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3439937-%24_57-1.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Injustice: Gods Among Us Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7167921-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Injustice: Gods Among Us Year Five",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4986816-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "20 Issues"
//     },
//     {
//       "title": "Injustice: Gods Among Us Year Five",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4963355-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "40 Issues"
//     },
//     {
//       "title": "Injustice: Gods Among Us Year Four",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4560447-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Injustice: Gods Among Us Year Four",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4545154-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "24 Issues"
//     },
//     {
//       "title": "Injustice: Gods Among Us Year Four: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6753286-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Injustice: Gods Among Us Year Three",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4876851-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Injustice: Gods Among Us Year Three",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4128838-91y1fhh7oxl._sl1500_.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "24 Issues"
//     },
//     {
//       "title": "Injustice: Gods Among Us Year Three",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4145986-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Injustice: Gods Among Us Year Three Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4532194-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Injustice: Gods Among Us Year Three: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6223663-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Injustice: Gods Among Us Year Two",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3554657-81uixv%2Brzfl._sl1500_.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "24 Issues"
//     },
//     {
//       "title": "Injustice: Gods Among Us Year Two",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3572777-injustice-gau-y2-cover-1.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Injustice: Gods Among Us Year Two Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4128099-injustice%20annual.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Injustice: Gods Among Us: Year Five",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5571253-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Injustice: Gods Among Us: Year Five Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5570996-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Injustice: Gods Among Us: Year Five: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7203392-01.jpg",
//       "year": "2020",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Injustice: Gods Among Us: Year Four",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5173558-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Injustice: Gods Among Us: Year Four Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4975916-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Injustice: Gods Among Us: Year One - The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5075150-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Injustice: Gods Among Us: Year One: The Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6614316-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Injustice: Gods Among Us: Year Two",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4131856-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Injustice: Gods Among Us: Year Two - The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5640131-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Injustice: Gods Among Us: Year Two: The Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7083453-02.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Injustice: Ground Zero",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5575548-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Injustice: Ground Zero",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5467650-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "24 Issues"
//     },
//     {
//       "title": "Injustice: Ground Zero",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5936002-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Inside MAD",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3441076-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Insurgent",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2811297-prev_img_1.jpeg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Insurgent: Collected Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3425378-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Intensely Dumb Mad",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3382370-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "International Iron Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5099117-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "International Iron Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5500611-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Invaders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6760833-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Invaders Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/3542280-invadersan1nm96m052.jpg",
//       "year": "1977",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Invaders Classic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/927615-1invad.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Invaders Now!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9338/1386785-prv6294_cov.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Invaders Now!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6189161-9353252328-60874.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Invaders: Eve of Destruction",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6653360-7172754127-72695.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Invaders: War Ghosts",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7023029-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Invasion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1669327-invasiontpb.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Invasion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3190510-01.jpg",
//       "year": "1989",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Invasion! Secret No More!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5147207-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Invasion! Special: Daily Planet",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1147943-p00001.jpg",
//       "year": "1988",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Invincible Iron Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5523046-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "19 Issues"
//     },
//     {
//       "title": "Invincible Iron Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4838263-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "14 Issues"
//     },
//     {
//       "title": "Invincible Iron Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2185976-01a.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "62 Issues"
//     },
//     {
//       "title": "Invincible Iron Man - Marvel Legacy Primer Pages",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6084536-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Invincible Iron Man Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2206015-01a.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Invincible Iron Man by Brian Michael Bendis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6960910-4471070916-77700.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Invincible Iron Man MGC",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1147295-invincible_iron_man_mgc.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Invincible Iron Man Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/926914-iron_man.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Invincible Iron Man: Civil War II",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5688795-03.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Invincible Iron Man: Demon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2455836-iim___dmn.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Invincible Iron Man: Ironheart: Choices",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6195203-02.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Invincible Iron Man: Ironheart: Riri Williams",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5909083-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Invincible Iron Man: Long Way Down",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2941429-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Invincible Iron Man: My Monsters",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1867260-iim__mm.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Invincible Iron Man: Reboot",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5139991-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Invincible Iron Man: Stark Disassembled",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1301265-iim__sd.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Invincible Iron Man: Stark Resilient, Book One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1995229-stark_resilient.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Invincible Iron Man: Stark Resilient, Book Two",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1727924-iim__sr2.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Invincible Iron Man: The Five Nightmares",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1020036-iron_man.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Invincible Iron Man: The Search For Tony Stark",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6517717-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Invincible Iron Man: The War Machines",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5408287-02.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Invincible Iron Man: Unfixable",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2017645-iim__ufx.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Invincible Iron Man: World's Most Wanted, Part One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1088509-invincibleironmanvol2.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Invincible Iron Man: World's Most Wanted, Part Two",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1088517-_bi_okm__mk___kgrhqih_cqesth58i_oblroed6k4____3.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Invisible People",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/111746/7091528-untitled%203.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Invisible Woman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7000476-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Invisible Woman: Partners In Crime",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7220167-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ion: Guardian of the Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3905157-01.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Ion: Guardian of the Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/3901379-%24t2ec16f%2C%21%290e9s37fcibbryufw7nz%21~~60_57.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Iron Age",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/98410/1883481-the_iron_age_1.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Iron Fist",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/678645-if1.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Iron Fist",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/18161/472861-if1.gif",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Iron Fist",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/18161/472837-if1.gif",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Iron Fist",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6632918-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Iron Fist",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/14106-2766-15784-1-iron-fist.jpg",
//       "year": "1975",
//       "publisher": "Marvel",
//       "Field7": "15 Issues"
//     },
//     {
//       "title": "Iron Fist",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5759780-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "15 Issues"
//     },
//     {
//       "title": "Iron Fist - Marvel Legacy Primer Pages",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6059542-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Fist Epic Collection: The Fury of Iron Fist",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4721758-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Fist: Phantom Limb",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6744798-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Fist: Sabretooth – Round Two",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6339697-02.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Fist: The Book of Changes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5759782-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Fist: The Deadly Hands of Kung Fu: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6819204-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Fist: The Living Weapon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3748025-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Iron Fist: The Living Weapon: Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7172298-3541876610-81726.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Fist: The Living Weapon: Rage",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4232441-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Fist: The Living Weapon: Redemption",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4774969-02.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Fist: The Return of K'un Lun",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4471816-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Fist: The Trial of the Seven Masters",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6044942-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Fist: Wolverine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/51100-9115-66942-1-iron-fist-wolverine.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Iron Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/114157-18220-108913-1-iron-man.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "35 Issues"
//     },
//     {
//       "title": "Iron Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2466955-ironman001.jpg",
//       "year": "1968",
//       "publisher": "Marvel",
//       "Field7": "336 Issues"
//     },
//     {
//       "title": "Iron Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/41288-6504-46598-1-iron-man.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "90 Issues"
//     },
//     {
//       "title": "Iron Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/142021-18800-111124-1-iron-man.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "Iron Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/2687667-prv13364_cov.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "29 Issues"
//     },
//     {
//       "title": "Iron Man / Captain America '98",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1059330-batman___unseen__5__of_5___2010____page_1.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man & Force Works Collectors' Preview",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3093114-iron%20man%20%26%20force%20works%20collectors%27%20preview%20v1967%20001%20%281994%29%20pagecover.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man & Sub-Mariner",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4197070-imasm1fn6m102.jpg",
//       "year": "1968",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man & The Armor Wars",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/45797/907341-iron_man___armor_wars__1___page_1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Iron Man & The Armor Wars",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5778674-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man 1999",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2186071-1999.jpg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man 2 Spotlight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1190982-iron_man_2_spotlight_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man 2: Agents of S.H.I.E.L.D.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1375925-iron_man_2_agents_of_shield_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man 2: Fist Of Iron",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1300725-iron_man_2___fist_of_iron_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man 2: Public Identity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4502519-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man 2: Public Identity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1215046-iron_man_2_public_identity_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Iron Man 2.0",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2034330-01a.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "Iron Man 2.0: Asymmetry",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2214345-im_2.0__as.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man 2.0: Palmer Addley is Dead",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2026267-im2.0__paid.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man 2000",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2186072-2000.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man 2001",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2186073-2001.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man 2020",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7212652-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man 2020",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6594431-6180919016-69441.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man 2020",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6594430-9668507778-71011.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man 3 Prelude",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2783659-01_digital.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Iron Man and Power Pack",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2031104-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Iron Man and the M&Ms in Armored and Irresistible",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3907858-iron%20man%20and%20the%20m%26ms%20in%20armored%20and%20irresistible%20001%20%282013%29%20pagecover.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2186050-01.jpg",
//       "year": "1970",
//       "publisher": "Marvel",
//       "Field7": "15 Issues"
//     },
//     {
//       "title": "Iron Man Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3650722-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man By Design",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6649330-9089856839-72317.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man by Fraction & Larroca: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6850867-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man By Joe Quesada",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6087024-7240195953-58229.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man By Kurt Busiek and Sean Chen Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3305776-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man By Michelinie, Layton & Romita Jr.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2870948-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man Epic Collection: By Force of Arms",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5673990-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man Epic Collection: Doom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6242726-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man Epic Collection: Duel of Iron",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5130336-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man Epic Collection: Return of the Ghost",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6838541-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man Epic Collection: Stark Wars",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4344315-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man Epic Collection: The Enemy Within",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5991103-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man Epic Collection: The Golden Avenger",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4188620-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man Epic Collection: The Man Who Killed Tony Stark",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6893191-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man Epic Collection: War Games",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3703484-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man Evolution of an Icon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849827-__addme___marvel_legends_evolution_of_an_icon___iron_man_v9999___page_1.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man Featuring Captain Mercaptan",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5275279-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man Featuring Globalita",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/13/135098/7135622-globalita-cover.jpg",
//       "year": "",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man Magazine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1190874-iron_man_magazine_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Iron Man Magazine Special Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2228071-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man Noir",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6063/1189343-cover_large.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Iron Man Noir",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031832-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man Poster Book",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1190873-iron_man_poster_book_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man Presented by DJI",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4651653-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3994004-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/9952-2474-10956-1-iron-man-special.jpg",
//       "year": "1970",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Iron Man vs. Whiplash",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1051071-iron_man_vs_whiplash_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Iron Man vs. Whiplash",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1198548-im.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man Wal-Mart Custom Comic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/2136821-iron_man_wal_mart_custom_comic_v2008__2008_10____page_1.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: A Cold Run",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11127/111273888/5457748-iron%20man%20-%20a%20cold%20run%20%282013%29%20-%20page%201.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Armor Wars",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/927029-1maw.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Armor Wars II",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3368738-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Armor Wars Prologue",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1170372-awp.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Armored Adventures",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/45797/896271-iron_man_armored_adventures__1___page_1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Armored Vengeance",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3363781-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Bad Blood",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2186078-01.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Iron Man: Believe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2961856-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Deadly Solutions",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1328493-im__ds.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Demon In A Bottle",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3368740-01.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Demon in a Bottle",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1071869-im.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Director of S.H.I.E.L.D.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4801545-04.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Director of S.H.I.E.L.D. - The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7221258-1463899282-82884.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Director of S.H.I.E.L.D. Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2206020-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Director of S.H.I.E.L.D.: With Iron Hands",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1030987-imn.gif",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Doomquest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1053176-im.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Doomquest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/356167-21199-127444-1-iron-man-doomquest.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Dragon Seed Saga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/887532-man_o__iron.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Early Warnings",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110802/4738475-001.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Enter the Mandarin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5764548-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Enter The Mandarin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2186084-01.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Iron Man: Extremis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1080584-im.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Extremis Director's Cut",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1253927-iron_man_extremis_directors_cut_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Iron Man: Extremis Marvel Select",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7135762-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Fatal Frontier",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031840-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Fatal Frontier",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3362457-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "Iron Man: Golden Avenger",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/532253-0003.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Haunted",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4909308-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Heroes Return: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6893193-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Hong Kong Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6339698-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: House of M",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/2844118-imhom1a.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Iron Man: Hypervelocity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/595408-imh1a.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Iron Man: Hypervelocity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5790883-01.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: I Am Iron Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6705522-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: I Am Iron Man!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1108712-i_am_iron_man_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Iron Man: Industrial Revolution",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5245486-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Invincible Origins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7184469-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Iron Metropolitan",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3822406-04.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Iron Monger",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1170388-im.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Iron Protocols",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5756/992130-iip_001_c01.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Kiss and Kill",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1286039-iron_man_kiss_and_kill.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Legacy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/1189190-irleg1a.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "11 Issues"
//     },
//     {
//       "title": "Iron Man: Legacy of Doom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2186097-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Iron Man: Legacy of Doom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4801546-01.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Many Armors of Iron Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6718512-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Official Index to the Marvel Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/13/135797/2974227-ironmanindex.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Rapture",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4897022-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Requiem",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1051081-iron_man_requiem.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Revenge of the Mandarin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6189163-8179464254-60875.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Rings of the Mandarin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4133402-05.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Road To Iron Man 2020",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7126561-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Season One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2961858-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Sound Effects",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/13/135098/7135593-sound-effects.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: Tales of the Golden Avenger",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6678606-5333673798-73021.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: The Armor Wars",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11131/111318833/6446263-ironmanarmorwarstpb.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: The Coming of the Melter",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3015674-01a.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: The End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1808/604916-iron_man_the_end_001.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: The End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6705502-7314062048-73059.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: The Inevitable",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4763352-01.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: The Inevitable",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1641/99524-18289-107042-1-iron-man-the-inevit.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Iron Man: The Iron Age",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6488143-5871883577-69096.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Iron Man: The Legend",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4312/329557-20905-125244-1-iron-man-special-tri.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: The Mask In the Iron Man Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7169488-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: The Secret Origin of Tony Stark",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3225245-02.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Iron Man: Titanium!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1459272-iron_man_titanium_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: War Machine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1053186-im.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man: War of the Iron Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1554569-im__wotim.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man/Captain America",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6687262-8918462467-73054.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man/Captain America: Casualties of War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/114369-18542-108957-1-iron-man-captain-ame.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man/Hulk Sampler",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/98410/1787329-ironman_hulk_sampler.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man/Hulk/Fury",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/632192-2wqaots.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man/Thor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1492306-iron_man_thor_1.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Iron Man/War Machine: Hands of the Mandarin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3699680-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Man/X-O Manowar",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/223341-19499-116622-1-iron-man-x-o-manowar.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Manual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6716158-2969713863-73586.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Manual 2020 Primer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7212651-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Manual Mark 3",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1200468-iron_manual_mark_3.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Iron Patriot",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3718051-01a.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Iron Patriot: Unbreakable",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4174330-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ironheart",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6703937-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Ironheart: Riri Williams",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7109886-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ironheart: Ten Rings",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7220168-02.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ironheart: Those With Courage",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7000479-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ironwolf",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/308796-20545-123054-1-ironwolf.jpg",
//       "year": "1986",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ironwolf: Fires of the Revolution",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/2007396-tpb_ironwolf__fires_of_the_revolution_v1993__1993____page_1.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Irredeemable Ant-Man: Low-Life",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1294803-irr_antm__ll.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Irredeemable Ant-Man: Small Minded",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1198555-ant.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Isis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4107569-isis1nm9m092.jpg",
//       "year": "1976",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "It's Gametime",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/1986443-it_s_gametime__1__1955____page_1.jpg",
//       "year": "1955",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "IvX",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5559772-00.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "J2",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/19859/521515-6035_4_1.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Jack Cross",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/84048-18042-105681-1-jack-cross.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Jack Kirby 100th Celebration Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6302388-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jack Kirby: The Fourth World Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6172994-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jack Kirby's Fourth World",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9338/447184-fourthworld.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "20 Issues"
//     },
//     {
//       "title": "Jack Kirby's Fourth World",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/3321131-jac1.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jack Kirby's Fourth World Gallery",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74848/1524448-jack_kirby_s_fourth_world_gallery.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jack Kirby's Fourth World Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100555/1971146-orion.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Jack Kirby's Mister Miracle",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2060763-jkmm.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jack Kirby's New Gods",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2060768-jkng.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jack Kirby's OMAC: One Man Army Corps",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2081132-omac.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jack Kirby's The Demon Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/2190033-jk1.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jack Kirby's The Forever People",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2062471-forever_people.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jack Kirby's The Losers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2079812-the_losers.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jack of Hearts",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/1980392-_b67rgrgcwk___kgrhqn__gsey14gek21bmywkdkli____3.jpg",
//       "year": "1984",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Jackie Gleason and the Honeymooners",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/46968-1769-56302-1-jackie-gleason-and-t.jpg",
//       "year": "1956",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "James Bond For Your Eyes Only",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/19344-3086-21597-1-james-bond-for-your-.jpg",
//       "year": "1981",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "James Bond Jr.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/31689-4796-35287-1-james-bond-jr-.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "January 2011 Sneak Peeks",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3186827-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jean Grey",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5830898-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "11 Issues"
//     },
//     {
//       "title": "Jean Grey - Marvel Legacy Primer Pages",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6084537-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jean Grey: Final Fight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6374054-02.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jean Grey: Nightmare Fuel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6103676-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jemm, Son of Saturn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/22099-3309-24661-1-jemm-son-of-saturn.jpg",
//       "year": "1984",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Jeph Loeb & Tim Sale: Yellow, Blue, Gray & White Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6712665-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jesse James Is A Dead Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3097929-jesse%20james%20is%20a%20dead%20man%20v2009%20001%20%282009%29%20pagecover.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jessica Jones",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5467826-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "Jessica Jones",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4841325-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jessica Jones",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6518422-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Jessica Jones - Marvel Legacy Primer Pages",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6059543-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jessica Jones: Avenger",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5408288-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jessica Jones: Blind Spot",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7212653-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Jessica Jones: Blind Spot",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6666568-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jessica Jones: Purple Daughter",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6762378-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Jessica Jones: Purple Daughter",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6903170-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jessica Jones: Return of the Purple Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6395745-03.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jessica Jones: The Pulse - The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4079257-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jessica Jones: The Secrets of Maria Hill",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6164827-02.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jessica Jones: Uncaged!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5844101-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jew Gangster",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3601275-01.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jimmy Olsen",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1747723-jov2_cv1_copy.jpeg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jimmy Olsen: Adventures by Jack Kirby",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2054628-olsen.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Jimmy Wakely",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/13923/854351-jimmywakely01.jpg",
//       "year": "1949",
//       "publisher": "DC Comics",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "Jinx",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6744799-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jinx",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6311993-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JinxWorld Sampler",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6595002-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/38539-5957-43302-1-jla.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "126 Issues"
//     },
//     {
//       "title": "JLA",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3882725-05.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "JLA / Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54045/1153427-jla_avengers.png",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA 80-Page Giant",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/522576-000.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "JLA 80-Page Giant 2011",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1758420-jla.png",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/38421-5958-43167-1-jla-annual.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "JLA Classified: Cold Steel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/975030-519578_vengeanceofbane_super.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "JLA Classified: New Maps of Hell",
//       "img": "https://comicvine1.cbsistatic.com/bundles/phoenixsite/images/core/loose/img_broken.png",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA Gallery",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9541/1158856-jlagallery1.gif",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA in Crisis Secret Files",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1068657-cover.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA Presents: Aztek the Ultimate Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4872494-01.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA Secret Files and Origins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/56226-6166-78349-1-jla-secret-files.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "JLA Showcase 80 Page Giant",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1256080-jla_showcase_80_page_giant__01.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA Superpower",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/887352-14840_2_001.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA Versus Predator",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9245/501562-jla_vs_predator.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA-Z",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9338/441460-jlaz1.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "JLA: A League of One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1068703-cover.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: A Midsummer's Nightmare: The Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6113407-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: Act of God",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61977-6485-94972-1-jla-act-of-god.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "JLA: Age of Wonder",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6733758-5430246035-copyO.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "JLA: American Dreams",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100555/2102709-43089_20080524220757_large.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: Black Baptism",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/74865-9508-78345-1-jla-black-baptism.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "JLA: Classified",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/64406-11105-97403-1-jla-classified.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "54 Issues"
//     },
//     {
//       "title": "JLA: Created Equal",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6635868-1040876129-copyO.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "JLA: Crisis of Conscience",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2102798-coc.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: Destiny",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6772673-7785552998-copyO.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "JLA: Divided We Fall",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2102760-divided.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: Earth-2",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1630263-jlaearth2sftcv.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: Earth-2: The Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3345288-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: Foreign Bodies",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/46951/942996-jlaforeignbodies.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: Gatekeeper",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/44301-7218-51434-1-jla-gatekeeper.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "JLA: Gods and Monsters",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1147944-p00001.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: Golden Perfect",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2102765-golden.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: Greatest Stories Ever Told",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2064802-jla.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: Heaven's Ladder",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/46951/942980-jlaheaven_sladder.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: Incarnations",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3601279-01.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "JLA: Justice for All",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2102752-justice_for.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: Kid Amazo",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2081134-kid_amazo.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: Liberty and Justice",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1147948-p00001.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: New World Order",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2102734-new_world.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: New World Order (DC Essential Edition)",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6828910-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: One Million",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1632967-jlaonem.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: Our Worlds at War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1075284-cover.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: Pain of the Gods",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2102794-pain.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: Paradise Lost",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/39576-6165-44544-1-jla-paradise-lost.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "JLA: Primeval",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/46951/948469-jlaprimeval.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: Riddle of the Beast",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1257055-jla___riddle_of_the_beast__2001____page_1.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: Rock of Ages",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2102741-rock.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: Rules of Engagement",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2102787-rules.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: Salvation Run",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64684/1678227-salvationrun.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: Scary Monsters",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/703597-jlasm1.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "JLA: Secret Origins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1248207-279157.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: Secret Society of Super-Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6740989-2770699242-copyO.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "JLA: Seven Caskets",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/240576-19735-118298-1-jla-seven-caskets.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: Shogun of Steel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1257058-jla_shogun_of_steel__2002____page_1.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: Strength in Numbers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2102751-strength.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: Syndicate Rules",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2102797-syndicate.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: Terror Incognita",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2102762-terror.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: That Was Now, This Is Then",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/63282/2009999-jla_001.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: The Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1587998-9546_400x600.jpeg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "JLA: The Hypothetical Woman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2062487-the_hypothetical_woman.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: The Island of Doctor Moreau",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6635871-4263811236-copyO.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: The Obsidian Age",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2102773-obsidian1.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "JLA: The Tenth Circle",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3504125-01.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: Tomorrow Woman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5551/670554-abfbf466_0ddc_4bfe_b7f5_ab96a20fc8dd.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: Tower of Babel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2973985-208537_20110224173641_large.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: Trial by Fire",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2102786-trial.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: Ultramarine Corps",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2062483-ultramarine_corps.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: Welcome to the Working Week",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/46951/934387-jlaworkweek.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: World War III",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/2007348-tpb_jla__world_war_iii_v2000__2000_12____page_1.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: World Without a Justice League",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2102800-without.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: World Without Grown-Ups",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1152832-p00000.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "JLA: World Without Grown-Ups",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67896/1242824-517c4pcytel._ss500_.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: Year One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/39620-6171-44591-1-jla-year-one.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "JLA: Year One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2540913-187550_20091209153218_large.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA: Year One: The Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5870302-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA/Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/60982-10941-93977-1-jla--avengers.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "JLA/Avengers: The Collectors' Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2494564-jla_avengers___the_collector_s_edition_hc_v1___page_1.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA/Cyber Force",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/272688-20265-121000-1-cyberforce--jla.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA/Doom Patrol Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6254367-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA/Haven: Anathema",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/46951/948426-jlahavenanathema.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA/Haven: Arrival",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/46951/946665-jlahavenarrival.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA/Hitman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/196979-19178-114791-1-jla--hitman.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "JLA/JSA Secret Files & Origins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/46951/984551-jlajsasfno001.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA/JSA: Virtue and Vice",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3601286-01.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA/Spectre: Soul War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6728744-01.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "JLA/Titans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9338/569780-5978_4_01.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "JLA/WildC.A.T.s",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3186828-01.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JLA/Witchblade",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9245/277154-20317-121325-1-jla--witchblade.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Joe Kubert Presents",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3504091-01.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Joe Kubert Presents",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3443348-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "John Carter of Mars: A Princess of Mars",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/73936/2014877-john_carter_a_princess_of_mars_001__of_005___2011__pagecover.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "John Carter Warlord of Mars",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/15712-2907-17507-1-john-carter-warlord-.jpg",
//       "year": "1977",
//       "publisher": "Marvel",
//       "Field7": "28 Issues"
//     },
//     {
//       "title": "John Carter Warlord of Mars Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/15257-2908-17009-1-john-carter-warlord-.jpg",
//       "year": "1977",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "John Carter Warlord of Mars Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3097783-john%20carter%20warlord%20of%20mars%20omnibus%20hc%20%282012%29%20pagecover.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "John Carter: A Princess of Mars",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/2438894-john_carter___a_princess_of_mars__2011__pagecover.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "John Carter: The Gods of Mars",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2251743-www.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "John Carter: The World of Mars",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2161773-01_digital.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "John Carter: The World of Mars",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/2440580-john_carter___world_of_mars__2012__pagecover.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "John Constantine: Hellblazer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7160264-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "John Romita Jr. 30th Anniversary Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3097781-john%20romita%20jr.%2030th%20anniversary%20special%20v2007%20001%20%282007%29%20pagecover.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Johnny Thunder",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/11586-2615-12891-1-johnny-thunder.jpg",
//       "year": "1973",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Joker",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38826/809831-joker.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Joker: Killer Smile",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7125238-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Joker: Last Laugh",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/251116-19991-119440-1-joker-last-laugh.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Joker: Last Laugh Secret Files",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1331877-39930_20060909225609_large.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Joker's Asylum II: Clayface",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56299/1283575-clayface.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Joker's Asylum II: Harley Quinn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1267195-1.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Joker's Asylum II: Killer Croc",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1274060-jokers_asylum_2_killer_croc.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Joker's Asylum II: The Mad Hatter",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6063/1266334-jokers_asylum_mad_hatter_1.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Joker's Asylum II: The Riddler",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62263/1253928-joker_s_asylum_ii___the_riddler_001.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Joker's Asylum: Penguin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1812/461803-135401_20080710162853_large.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Joker's Asylum: Poison Ivy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/455762-poisonivy1.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Joker's Asylum: Scarecrow",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1268004-cover.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Joker's Asylum: The Joker",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1267987-cover.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Joker's Asylum: Two-Face",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15455/473138-ja2f.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Joker's Practical Jokes!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/2861651-jok1.jpg",
//       "year": "1966",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Joker/Harley: Criminal Sanity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7100353-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Jonah Hex",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/15463-2887-17238-1-jonah-hex.jpg",
//       "year": "1977",
//       "publisher": "DC Comics",
//       "Field7": "92 Issues"
//     },
//     {
//       "title": "Jonah Hex",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1085214-jonah_hex_01_page_01.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "70 Issues"
//     },
//     {
//       "title": "Jonah Hex #1 Special Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1217577-1.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jonah Hex and Other Western Tales",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/46980-2990-56314-1-jonah-hex-and-other-.jpg",
//       "year": "1979",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Jonah Hex Classic Tales: Welcome to Paradise",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4260803-01.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jonah Hex Spectacular",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1264278-jonah_hex_spectacular_v1977__1__1978____page_1.jpg",
//       "year": "1978",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jonah Hex: Bullets Don't Lie",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1967935-01.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jonah Hex: Bury Me In Hell",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4260322-11.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jonah Hex: Counting Corpses",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4260321-09.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jonah Hex: Face Full of Violence",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4260319-01.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jonah Hex: Guns of Vengeance",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4260323-02.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jonah Hex: Lead Poisoning",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1967883-01.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jonah Hex: Luck Runs Out",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1967904-01.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jonah Hex: No Way Back",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4260801-01.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jonah Hex: Only the Good Die Young",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1000448-vol4.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jonah Hex: Origins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4260324-03.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jonah Hex: Tall Tales",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4260325-10.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jonah Hex: The Six Gun War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1967933-01.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jonah Hex/Yosemite Sam Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5929719-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jonni Thunder",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/22599-3449-25216-1-jonni-thunder.jpg",
//       "year": "1985",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Journey into Mystery",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/110270-7168-108623-1-journey-into-mystery.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "20 Issues"
//     },
//     {
//       "title": "Journey into Mystery",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/11342-2573-12578-1-journey-into-mystery.jpg",
//       "year": "1972",
//       "publisher": "Marvel",
//       "Field7": "19 Issues"
//     },
//     {
//       "title": "Journey into Mystery",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1770210-journey_into_mystery.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "35 Issues"
//     },
//     {
//       "title": "Journey into Mystery",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/58993/2642135-jim1cgc4.5.jpg",
//       "year": "1952",
//       "publisher": "Marvel",
//       "Field7": "125 Issues"
//     },
//     {
//       "title": "Journey into Mystery Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4031805-178710-19069-113849-1-journey-into-mystery.jpg",
//       "year": "1965",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Journey Into Mystery By Kieron Gillen",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3655330-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Journey Into Mystery: Fear Itself Fallout",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2243617-jim___fif.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Journey Into Mystery: Seeds of Destruction",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4845304-02.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Journey Into Mystery: Stronger Than Monsters",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3059636-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Journey Into Mystery: The Birth of Krakoa",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6606807-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Journey Into Mystery: The Manchester Gods",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3905234-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Journey Into Mystery: The Terrorism Myth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3596198-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Journey Into Mystery/New Mutants: Exiled",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4035884-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Journey Into Unknown Worlds",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6779312-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Journey to Star Wars: The Force Awakens - Shattered Empire",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4790337-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Journey to Star Wars: The Last Jedi - Captain Phasma",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6039778-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Journey To Star Wars: The Rise of Skywalker - Allegiance",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7101019-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Journey To Star Wars: The Rise of Skywalker - Allegiance",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7153355-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JSA",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/826929-jsa1.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "87 Issues"
//     },
//     {
//       "title": "JSA 80-Page Giant 2010",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60392/1459182-cover_jsa_80page_2010.png",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JSA All-Stars",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/1047335-jsaas_cv1_ds_copy.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "JSA All-Stars: Constellations",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1645348-jsaasconstellations.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JSA All-Stars: Glory Days",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1829016-jsaasglorydaystpb.png",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JSA Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/17880/682538-jsa_v1_annual_001.cbr___page_1.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JSA by Geoff Johns",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6184502-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "JSA Classified",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/823335-jsa1.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "39 Issues"
//     },
//     {
//       "title": "JSA Classified: Honor Among Thieves",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2061914-honor.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JSA Kingdom Come Special: Magog",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1069796-cover.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JSA Kingdom Come Special: Superman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1069802-cover.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JSA Kingdom Come Special: The Kingdom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1069808-cover.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JSA Liberty Files: The Whistling Skull",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2758605-2752468_2752464_jsalfws_cv1_ds.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "JSA Liberty Files: The Whistling Skull",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3426148-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JSA Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3823210-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "JSA Presents: Green Lantern",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2061917-alan_scott.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JSA Presents: Stars and S.T.R.I.P.E.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84278/2211342-stars_and_stripe_1.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "JSA Secret Files",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/44329-7222-51448-1-jsa-secret-files.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "JSA vs. Kobra",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2670050-01.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "JSA vs. Kobra",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4064333-01.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JSA: All Stars",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62263/1184508-jsaas_000fc.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "JSA: Black Reign",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1778912-8.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JSA: Black Vengeance",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1778919-10.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JSA: Darkness Falls",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1778875-darknessfalls.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JSA: Fair Play",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1778907-4.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JSA: Ghost Stories",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1778935-12.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JSA: Justice Be Done",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1613432-339039.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JSA: Lost",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1778913-9.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JSA: Mixed Signals",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1778934-11.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JSA: Our Worlds at War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1075334-cover.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JSA: Princes of Darkness",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1778911-7.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JSA: Savage Times",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1778910-6.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JSA: Stealing Thunder",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1778909-5.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JSA: Strange Adventures",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2062008-jsa_strange_adventures.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JSA: Strange Adventures",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/599238-32467_20060317134234_large.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "JSA: The Golden Age",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3591327-01.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JSA: The Golden Age: Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5747742-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JSA: The Liberty File",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2188691-01.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "JSA: The Return of Hawkman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1778902-3.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "JSA: The Unholy Three",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1059323-batman___unseen__5__of_5___2010____page_1.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Jubilee",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4998/128663-18650-110036-1-jubilee.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Jubilee by Robert Kirkman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6307314-0843098083-64511.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Judge Dredd",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5469/175381-19045-113728-1-judge-dredd.jpg",
//       "year": "1994",
//       "publisher": "DC Comics",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "Judge Dredd Legends of the Law",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/1842935-judge_dredd__legends_of_the_law_v1994__1__1994_12____page_1.jpg",
//       "year": "1994",
//       "publisher": "DC Comics",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "Judge Dredd: The Official Movie Adaptation",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64684/1920135-judgedredd.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Juggernaut",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/98837-18263-106949-1-the-juggernaut.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Juggernaut: The Eighth Day",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5226/203496-19218-115161-1-juggernaut-the-eigh.jpg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Jungle Action",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/3668184-%24%28kgrhqf%2C%21pce9enm3fpbbpz7szmpmq~~60_3.jpg",
//       "year": "1972",
//       "publisher": "Marvel",
//       "Field7": "24 Issues"
//     },
//     {
//       "title": "Just Imagine Stan Lee . . . Secret Files and Origins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/987018-just_imagine...book____stan_lee_s_secret_files___origins__13___page_1.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Just Imagine Stan Lee Creating the DC Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2063187-stan_lee.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Just Imagine Stan Lee Creating the DC Universe Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3497937-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Just Imagine Stan Lee With Chris Bachalo Creating Catwoman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2790461-01.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Just Imagine Stan Lee With Dave Gibbons Creating Green Lantern",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2790466-01.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Just Imagine Stan Lee With Gary Frank Creating Shazam!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2790468-01.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Just Imagine Stan Lee With Jerry Ordway Creating JLA",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/987015-just_imagine_stan_lee_s_jla___page_1.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Just Imagine Stan Lee With Jim Lee Creating Wonder Woman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/1793597-just_imagine_wonder_woman__2001__1.jpeg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Just Imagine Stan Lee With Joe Kubert Creating Batman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2790464-01.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Just Imagine Stan Lee With John Buscema Creating Superman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2790463-01.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Just Imagine Stan Lee With John Byrne Creating Robin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/987027-just_imagine_stan_lee_with_john_byrne_creating_robin__1__2002_0____page_1.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Just Imagine Stan Lee With John Cassaday Creating Crisis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2790470-01.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Just Imagine Stan Lee With Kevin Maguire Creating The Flash",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2790465-01.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Just Imagine Stan Lee With Scott McDaniel Creating Aquaman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2790469-01.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Just Imagine Stan Lee With Walter Simonson Creating Sandman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2790467-01.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/1571465-5802_400x600.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Justice",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/24617-3640-27387-1-justice.jpg",
//       "year": "1986",
//       "publisher": "Marvel",
//       "Field7": "32 Issues"
//     },
//     {
//       "title": "Justice",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2410573-21770_900x1350.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/128051-18625-109974-1-justice.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Justice League",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6458020-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "40 Issues"
//     },
//     {
//       "title": "Justice League",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7178465-01.jpg",
//       "year": "1987",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Justice League",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5329502-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "43 Issues"
//     },
//     {
//       "title": "Justice League",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/2174072-justice_league__2011__001a.jpeg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "57 Issues"
//     },
//     {
//       "title": "Justice League #1 Justice League Day 2017 Special Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6152571-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League 201",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3201866-justice%20league%20201%20pagecover.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League 3000",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3492721-jla30001.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "15 Issues"
//     },
//     {
//       "title": "Justice League 3000: The Camelot War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4519369-02.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League 3000: Yesterday Lives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4156877-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League 3001",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4645318-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Justice League 3001: Déjà Vu All Over Again",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5099119-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League 3001: Things Fall Apart",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5456870-02.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League Adventures",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/218631-10065-116080-1-justice-league-adven.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "34 Issues"
//     },
//     {
//       "title": "Justice League Adventures",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2061953-justice_league_adventures.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League Adventures [Burger King Giveaway]",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/1842693-justice_league_adventures__burger_king_giveaway__v2003__1__of_8____the_flash__2003____page_1.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Justice League America",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/28095-4198-31179-1-justice-league-ameri.jpg",
//       "year": "1989",
//       "publisher": "DC Comics",
//       "Field7": "89 Issues"
//     },
//     {
//       "title": "Justice League America Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/5809166-jla%20annual%20%2305.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Justice League America vs. Amazo",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3096303-justice%20league%20of%20america%20-%20kellogg%27s%20cinnamon%20mini-buns%20giveaway%20v2006%20001%20%282006%29%20pagecover.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6780944-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/5809149-jl%20annual%20%2301.jpg",
//       "year": "1987",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Justice League Beyond",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2183668-photo_feb_01__2_02_31_pm.png",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "25 Issues"
//     },
//     {
//       "title": "Justice League Beyond 2.0",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3229348-justice-league-beyond-2-0-1-sfcover-b6f8d.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "24 Issues"
//     },
//     {
//       "title": "Justice League Beyond 2.0: Power Struggle",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4129719-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League Beyond: In Gods We Trust",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3703457-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League Beyond: Konstriction",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3044416-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League by Christopher Priest: The Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6882498-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League by Scott Snyder: The Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7167922-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League Dark",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6527889-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "19 Issues"
//     },
//     {
//       "title": "Justice League Dark",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2086207-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "43 Issues"
//     },
//     {
//       "title": "Justice League Dark and Wonder Woman: The Witching Hour",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6668491-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League Dark Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2674467-1_a4ca869f01.jpeg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Justice League Dark Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7024406-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League Dark: Futures End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4114531-jld.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League Dark: In the Dark",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2643261-__kgrhqr__pwfb_2_zf7sbqd4h9gh7___60_57.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League Dark: Lords of Order",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7108508-02.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League Dark: Lost In Forever",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4765140-06.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League Dark: Paradise Lost",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4436316-05.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League Dark: Rebirth of Evil",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4040795-04.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League Dark: The Books of Magic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3416482-02.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League Dark: The Death of Magic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3604213-03.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League Dark: The Last Age of Magic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6828913-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League Elite",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2383739-vol._1.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Justice League Elite",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/64722-11158-97719-1-justice-league-elite.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Justice League Europe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/27996-4199-31065-1-justice-league-europ.jpg",
//       "year": "1989",
//       "publisher": "DC Comics",
//       "Field7": "50 Issues"
//     },
//     {
//       "title": "Justice League Europe Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/5813737-jle%20annual%20%231%20final.jpg",
//       "year": "1990",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Justice League Giant",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11134/111349471/6495073-justice%20league%20giant%201.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Justice League Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/941035-32469_20061219151502_large.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League International",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1998620-1a.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Justice League International",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/33420-4966-37316-1-justice-league-inter.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "Justice League International",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3888740-01.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Justice League International",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/25950-3798-28828-1-justice-league-inter.jpg",
//       "year": "1987",
//       "publisher": "DC Comics",
//       "Field7": "19 Issues"
//     },
//     {
//       "title": "Justice League International Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5551/583723-446c0021_eb8c_46a8_9b11_c9e7e58eabdc.jpg",
//       "year": "1988",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Justice League International Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2556503-jlintann_cv1_0.jpeg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League International Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6091877-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League International Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5551/590628-cc329261_abf8_429d_803d_a9fbfc4c2f76.jpg",
//       "year": "1990",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Justice League International: Born Again",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7218277-01.jpg",
//       "year": "2020",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League International: Breakdown",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2781246-02.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League International: The Secret Gospel of Maxwell Lord",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/700643-1.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League International: The Signal Masters",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3485561-01.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League Odyssey",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6624935-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "Justice League of America: The Rise of Eclipso",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515512-01.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League of America: The Second Coming",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68486/1531886-jla_second_coming.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League of America: The Silver Age",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5041593-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Justice League Of America: The Tornado's Path",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3454842-01.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League of America: The Wedding of the Atom and Jean Loring",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7233452-01.jpg",
//       "year": "2020",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League of America: Vixen - Rebirth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5640137-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League of America: When Worlds Collide",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68486/1522119-jla_when_worlds_collide.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League of America: World's Most Dangerous",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3441054-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League of America: Zatanna's Search",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/251109-19990-119439-1-justice-league-of-am.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League of America's Vibe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2878843-vibe_cv1_ds.jpeg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "Justice League of America's Vibe: Breach",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3978722-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League of America/The 99",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1482673-jla_the_99_1.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Justice League Quarterly",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/73445-9634-86440-1-justice-league-quart.jpg",
//       "year": "1990",
//       "publisher": "DC Comics",
//       "Field7": "17 Issues"
//     },
//     {
//       "title": "Justice League Spectacular",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/5613713-cci_000020.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League Task Force",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/33421-4967-37317-1-justice-league-task-.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "38 Issues"
//     },
//     {
//       "title": "Justice League Task Force: Purification Plague",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6339702-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League United",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3817208-jlu%2001.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "17 Issues"
//     },
//     {
//       "title": "Justice League United Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4182552-jlu.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League United: Futures End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4086705-jlu.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League United: Justice League Canada",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4426818-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League United: The Infinitus Saga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4955640-02.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League Unlimited",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2188757-01.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "46 Issues"
//     },
//     {
//       "title": "Justice League Unlimited: Jam Packed Action",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2066336-jam_pack.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League Unlimited: The Ties That Bind",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2061957-unlimited.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League Unwrapped by Jim Lee",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5819620-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League vs. Suicide Squad",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5602610-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Justice League vs. Suicide Squad",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5909084-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: A League of One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4864643-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: A Midsummer's Nightmare",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/160997-18945-112156-1-justice-league-a-mi.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Justice League: A Midsummer's Nightmare",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/1842946-tpb_justice_league__a_midsummer_s_nightmare_v1996__1996____page_1.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: A New Beginning",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1061044-star_trek_alien_spotlight_cardassians__2009____page_1.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: An Adult Coloring Book",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6091875-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: Corporate Maneuvers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7240266-01.jpg",
//       "year": "2020",
//       "publisher": "DC Comics",
//       "Field7": "0 Issues"
//     },
//     {
//       "title": "Justice League: Cry for Justice",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2066335-cry_for_justice.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: Cry for Justice",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/1172468-1hz6mb.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Justice League: Darkseid War Part 1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5087346-07.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: Darkseid War Part 2",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5443219-08.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: Darkseid War Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5135438-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: Darkseid War: Batman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4878491-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: Darkseid War: Flash",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4889602-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: Darkseid War: Green Lantern",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4903539-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: Darkseid War: Lex Luthor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4945077-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: Darkseid War: Shazam",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4903540-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: Darkseid War: Superman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4895247-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: Director's Cut",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5500612-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: Endless",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6123827-04.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: Forever Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4087845-05.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: Futures End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4101234-justice%20league.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: Generation Lost",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1225254-jl_gl_1_000.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "24 Issues"
//     },
//     {
//       "title": "Justice League: Generation Lost",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1850056-jlglvol1.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Justice League: Gods & Monsters",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5030429-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: Gods and Monsters",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4677325-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "Justice League: Gods and Monsters",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4741211-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Justice League: Gods and Monsters - Batman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4701666-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: Gods and Monsters - Batman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4656133-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Justice League: Gods and Monsters - Superman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4666380-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Justice League: Gods and Monsters - Superman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4714883-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: Gods and Monsters - Wonder Woman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4669987-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Justice League: Gods and Monsters - Wonder Woman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4725121-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: Graveyard of Gods",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6922201-02.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: Hawkworld",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7008014-03.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: Injustice League",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4670589-06.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: Justice Lost",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6606780-07.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: Legacy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6302390-05.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: No Justice",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6614319-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: No Justice",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6418916-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Justice League: Origin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2323295-978_1_4012_3461_4.jpeg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: Outbreak",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5819619-02.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: Rebirth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5305538-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: Rise and Fall Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1150782-jl_rise_and_fall_1_0a.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: The Darkseid War - Power of the Gods",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5160025-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: The Darkseid War Saga Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6091876-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: The Darkseid War: DC Essential Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6631593-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: The Detroit Era Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6172996-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: The Extinction Machines",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5652330-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: The Grid",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3732868-04.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: The New Frontier Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/323655-20801-124673-1-justice-league-the.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: The People vs. The Justice League",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6477307-06.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: The Rebirth Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5949068-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Justice League: The Rise and Fall",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64684/1700401-justiceleague_riseandfall.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: The Rise of Arsenal",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56616/1163719-untitled3.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Justice League: The Sixth Dimension",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7142261-04.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: The Totality",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6694342-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: The Villain's Journey",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3331810-02.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: The World's Greatest Superheroes by Alex Ross & Paul Dini",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730692-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: Their Greatest Triumphs",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6080299-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: Throne of Atlantis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3331086-03.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: Timeless",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5949069-03.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: Trick...Or Trick",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9541/1160595-comic_cover.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: Trinity War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3690491-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League: Trinity War Director's Cut",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3255164-justtwdc-cv1-c897f.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League/Aquaman: Drowned Earth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6666575-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League/Aquaman: Drowned Earth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6883260-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice League/Power Rangers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5640135-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Justice League/Power Rangers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6172997-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice Leagues: JL?",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/19859/621084-38709_20060507130851_large.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice Leagues: JLA",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/676412-jla.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice Leagues: Justice League of Aliens",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/676416-jlaliens.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice Leagues: Justice League of Amazons",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/19859/621182-justice_leagues_2of6_00fc.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice Leagues: Justice League of Arkham",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/13536/297576-20437-122337-1-justice-leagues-jus.PNG",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice Leagues: Justice League of Atlantis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/676439-jlatlan.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice Riders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4043977-01.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice Society",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/251214-20000-119451-1-justice-society.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Justice Society of America",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/604698-jsa000.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "54 Issues"
//     },
//     {
//       "title": "Justice Society of America",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/32282-4747-35999-1-justice-society-of-a.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "Justice Society of America",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/30608-4556-34062-1-justice-society-of-a.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Justice Society of America 100-Page Super Spectacular",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74848/1517440-justice_society_of_america_100_page_super_spectacular.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice Society of America 101",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3200107-jsa%20101%20pagecover.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice Society of America 80-Page Giant",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1032368-jsa_80_page_giant.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice Society of America 80-Page Giant 2011",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1885330-p00001.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice Society of America Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6063/1398098-jsa.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice Society of America: A Celebration of 75 Years",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4698694-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice Society of America: Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/472622-2uzy0w.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Justice Society of America: Axis of Evil",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3919874-08.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice Society of America: Black Adam and Isis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3954017-01.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice Society of America: Monument Point",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3968769-11.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice Society of America: Supertown",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/2027046-1.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice Society of America: The Bad Seed",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3968768-01.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice Society of America: The Next Age",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3919861-01.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Justice Society of America: Thy Kingdom Come",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1645214-jsakcvol1.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Justice, Inc.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/30202-4367-33592-1-justice-inc-.jpg",
//       "year": "1989",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Justice, Inc.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27783/770695-justiceinc1.jpg",
//       "year": "1975",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Justice: Four Balance",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61730-5304-94725-1-justice-four-balanc.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Justice: The Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7031455-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Kà by Cirque Du Soleil",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3107456-k%C3%A0%20by%20cirque%20du%20soleil%20001%20%282012%29%20pagecover.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ka-Zar",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1862591-p00001.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Ka-Zar",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/38868-6006-43685-1-ka-zar.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "21 Issues"
//     },
//     {
//       "title": "Ka-Zar",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/12471-2692-13992-1-ka-zar.jpg",
//       "year": "1974",
//       "publisher": "Marvel",
//       "Field7": "20 Issues"
//     },
//     {
//       "title": "Ka-Zar",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/9953-2475-10957-1-ka-zar.jpg",
//       "year": "1970",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Ka-Zar '97",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/1048820-ka_zar_annual_1997.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ka-Zar by Mark Waid & Andy Kubert",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6178510-8380810324-60869.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Ka-Zar of the Savage Land",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/1048824-258338.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ka-Zar the Savage",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/18955-3087-21180-1-ka-zar-the-savage.jpg",
//       "year": "1981",
//       "publisher": "Marvel",
//       "Field7": "34 Issues"
//     },
//     {
//       "title": "Ka-Zar: Guns of the Savage Land",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/298801-20442-122388-1-ka-zar-guns-of-the.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ka-Zar: Savage Dawn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5658716-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ka-Zar: The Burning Season",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2140214-kzr__bs.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Kamandi Archives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/1063422-kama.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Kamandi by Jack Kirby Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6312665-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Kamandi, The Last Boy on Earth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/11305-2551-12541-1-kamandi-the-last-bo.jpg",
//       "year": "1972",
//       "publisher": "DC Comics",
//       "Field7": "59 Issues"
//     },
//     {
//       "title": "Kamandi, The Last Boy on Earth Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/2027031-1.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Kamandi: At Earth's End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1257005-kamandi_at_earths_end__1___page_1.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Kanan",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4479804-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Kane and Lynch",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1325045-kane___lynch_1.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Karate Kid",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/14434-2841-16140-1-karate-kid.jpg",
//       "year": "1976",
//       "publisher": "DC Comics",
//       "Field7": "15 Issues"
//     },
//     {
//       "title": "Karnak",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4864645-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Karnak: The Flaw In All Things",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5722986-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Katana",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2867006-1_b3e9db53d3.jpeg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "Katana: Soultaker",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4040797-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Kathy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/57971-2006-90966-1-kathy.jpg",
//       "year": "1959",
//       "publisher": "Marvel",
//       "Field7": "27 Issues"
//     },
//     {
//       "title": "Kemco Presents Batman: Dark Tomorrow",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2851484-__addme___kemco_presents_batman___dark_tomorrow_v9999__1___page_1.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "KFC: Across the Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5962883-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "KFC: Crisis of Infinite Colonels",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5299009-02.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Kickers, Inc.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/24618-3641-27388-1-kickers-inc-.jpg",
//       "year": "1986",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Kid 'n Play",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1296869-kid__n_play_v1__1___page_1.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "Kid Colt One-Shot",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/45797/924426-kid_colt___page_1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Kid Colt Outlaw",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/65553-1199-98550-1-kid-colt-outlaw.jpg",
//       "year": "1949",
//       "publisher": "Marvel",
//       "Field7": "225 Issues"
//     },
//     {
//       "title": "Kid Eternity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1979824-01.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Kids' WB! Jam Packed Action!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2066339-kids_wb.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Kidz Water Hydrators",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/2037081-kidz_water_hydrators__1__of_4____page_1.jpg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Killmonger",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6712666-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Killraven",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/243303-19754-118532-1-killraven.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "King Arthur And The Knights Of Justice",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61877-5022-94872-1-king-arthur-and-the.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "King Conan",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/18093-3051-20244-1-king-conan.jpg",
//       "year": "1980",
//       "publisher": "Marvel",
//       "Field7": "19 Issues"
//     },
//     {
//       "title": "King James",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/617046-king1.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "King Thor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7066196-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "King-Size Cable Spectacular",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/537730-0005.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "King-Size Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15530/403186-21721-131018-1-king-size-hulk.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "King-Size Kirby",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7185590-2282033180-81730.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "King-Size Spider-Man Summer Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/486969-spideykingsize.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Kingdom Come",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/719645-kingdom_come.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Kingdom Come",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3446484-01.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Kingdom Come (DC Black Label Edition)",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6902777-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Kingdom Come: The 20th Anniversary Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5199910-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Kingpin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5688801-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Kingpin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/62791-10989-95787-1-kingpin.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Kingpin: Born Against",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6050277-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Kirby Is... Fantastic!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6947201-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Kirby Is... Mighty! King-Size",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6990903-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Kirby Returns!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7031457-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Kissnation",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38826/1103381-0kissnation.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Kissyfur",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3108461-kissyfur%20v1989%20001%20%281989%29%20pagecover.jpg",
//       "year": "1989",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Kitty Pryde and Wolverine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/22311-3348-24893-1-kitty-pryde-and-wolv.jpg",
//       "year": "1984",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Kitty Pryde, Agent of S.H.I.E.L.D.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/39496-6009-44438-1-kitty-pryde-agent-o.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Klarion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4145964-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Klaws of the Panther",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6063/1439670-klaws.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Klaws of the Panther",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4504037-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Knight and Squire",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1451379-knsq_cv1_ds_copy.jpeg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Kobra",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/14349-2842-16051-1-kobra.jpg",
//       "year": "1976",
//       "publisher": "DC Comics",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Kobra Resurrection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1967821-01.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Kong the Untamed",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/13590-2735-15236-1-kong-the-untamed.jpg",
//       "year": "1975",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Korvac Saga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4641195-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Korvac Saga: Wazones!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4912403-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Krazy Krow",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61900-1059-94895-1-krazy-krow.jpg",
//       "year": "1945",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Krull",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/21197-3228-23633-1-krull.jpg",
//       "year": "1983",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Krypto the Superdog",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/128079-18142-109981-1-krypto-the-superdog.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Krypton Chronicles",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/19247-3072-21491-1-krypton-chronicles.jpg",
//       "year": "1981",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Kull the Conqueror",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/66042-3140-99039-1-kull-the-conqueror.jpg",
//       "year": "1982",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Kull the Conqueror",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/20730-3229-23123-1-kull-the-conqueror.jpg",
//       "year": "1983",
//       "publisher": "Marvel",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "Kull the Conqueror",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4317472-kull1nm92m124.jpg",
//       "year": "1971",
//       "publisher": "Marvel",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "Kull the Destroyer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/12318-2638-13799-1-kull-the-destroyer.jpg",
//       "year": "1973",
//       "publisher": "Marvel",
//       "Field7": "19 Issues"
//     },
//     {
//       "title": "Kull: The Vale of Shadow",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1264293-marvel_graphic_novel____kull___the_vale_of_shadow__47___page_1.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Kyle XY: Breakthrough",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/13820/1342991-wit06ikb.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "L.E.G.I.O.N.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1812/155266-18909-111742-1-l-e-g-i-o-n-89.jpg",
//       "year": "1989",
//       "publisher": "DC Comics",
//       "Field7": "70 Issues"
//     },
//     {
//       "title": "L.E.G.I.O.N. Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/25579/541889-3994_4_1.jpg",
//       "year": "1990",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Lab Rats",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/45079-7330-52139-1-lab-rats.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Labyrinth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61903-3642-94898-1-labyrinth.jpg",
//       "year": "1986",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Lady Deadpool",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65073/1309223-lady_deadpool__2010____page_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Laff-A-Lympics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61906-2955-94901-1-laff-a-lympics.jpg",
//       "year": "1978",
//       "publisher": "Marvel",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "Lando",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4670593-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Larfleeze",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3132590-larf-cv1-ds-d697b.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Larfleeze: Revolt of the Orange Lanterns",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3898419-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Larfleeze: The Face of Greed",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4289905-02.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Larry Harmon's Laurel and Hardy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/2753394-larr1.jpg",
//       "year": "1972",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Last Days of the Justice Society of America",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5842038-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Last Days of the Justice Society Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/4072641-jsa%20special%20fc.jpg",
//       "year": "1986",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Last Hero Standing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/976344-lhs.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Last Hero Standing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4312/148396-18846-111385-1-last-hero-standing.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Last Planet Standing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/234327-19675-118031-2-last-planet-standing.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Lazarus Five",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/44345-7224-51456-1-lazarus-five.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Leader's High",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/3585910-lea1.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legends: The Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/1245735-ltc_01.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6242729-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Legion 101",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2845246-digital_legion_of_super_heroes_101_v9999__101___page_1.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion Lost",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1888689-legionlosthc.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion Lost",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/2009537-1.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "17 Issues"
//     },
//     {
//       "title": "Legion Lost",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4366126-01.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Legion Lost: Run From Tomorrow",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3485567-01.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion Lost: The Culling",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3321395-02.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion of Monsters",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/105039/2047290-prv10025_cov.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Legion of Monsters",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/449751-legion_of_monsters_1_00.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion of Monsters",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6249161-8323715206-63122.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion of Monsters: Man-Thing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/2868/108509-18481-108516-1-legion-of-monsters.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion of Monsters: Morbius the Living Vampire",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/161832-18947-112255-1-legion-of-monsters.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion of Monsters: Satana",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/449749-legion_of_monsters_satana_1_00.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion of Monsters: Werewolf By Night",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/201779-19209-115100-1-legion-of-monsters.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion of Substitute Heroes Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3754988-01.jpg",
//       "year": "1985",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion of Super Heroes: The Dominators",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498174-02.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion of Super Heroes: The Silver Age Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5984685-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Legion of Super-Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7133565-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Legion of Super-Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/63797-11059-96793-1-legion-of-super-hero.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "30 Issues"
//     },
//     {
//       "title": "Legion of Super-Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/11590-2616-12895-1-legion-of-super-hero.jpg",
//       "year": "1973",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Legion of Super-Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/1949621-cover.jpg",
//       "year": "1989",
//       "publisher": "DC Comics",
//       "Field7": "127 Issues"
//     },
//     {
//       "title": "Legion of Super-Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2034371-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "24 Issues"
//     },
//     {
//       "title": "Legion of Super-Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1233613-lsh_v6_01__001.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "16 Issues"
//     },
//     {
//       "title": "Legion of Super-Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/17941-3033-20075-1-legion-of-super-hero.jpg",
//       "year": "1980",
//       "publisher": "DC Comics",
//       "Field7": "55 Issues"
//     },
//     {
//       "title": "Legion of Super-Heroes",
//       "img": "https://comicvine1.cbsistatic.com/bundles/phoenixsite/images/core/loose/img_broken.png",
//       "year": "1984",
//       "publisher": "DC Comics",
//       "Field7": "63 Issues"
//     },
//     {
//       "title": "Legion of Super-Heroes Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3664/342637-3116-21777-2-the-legion-of-super.jpg",
//       "year": "1982",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Legion of Super-Heroes Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1648298-legion.jpeg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion of Super-Heroes Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3753968-01.jpg",
//       "year": "1985",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Legion of Super-Heroes in the 31st Century",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/141804-18766-111136-1-legion-of-super-hero.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "20 Issues"
//     },
//     {
//       "title": "Legion of Super-Heroes Secret Files And Origins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3664/329657-20906-125252-1-legion-of-super-hero.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Legion of Super-Heroes: 1050 Years of the Future",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2060823-1050_future.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion of Super-Heroes: Beginning of Tomorrow",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5936051-01.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion of Super-Heroes: Consequences",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4011199-02.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion of Super-Heroes: Death of A Dream",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5936049-02.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion Of Super-Heroes: Enemy Manifest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4043978-01.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion Of Super-Heroes: Enemy Rising",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4043979-01.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion of Super-Heroes: Hostile World",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3485596-01.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion of Super-Heroes: Millennium",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7059741-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Legion of Super-Heroes: Teenage Revolution",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5936054-01.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion of Super-Heroes: The Choice",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4011185-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion of Super-Heroes: The Curse - The Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4087847-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion of Super-Heroes: The Fatal Five",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3635322-03.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion of Super-Heroes: The Great Darkness Saga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/3401479-legion%20of%20super-heroes_%20the%20great%20darkness%20saga%20%281989%29%20-%20page%201.jpg",
//       "year": "1989",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion of Super-Heroes: The Great Darkness Saga - The Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1529392-tgdsdeluxe.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion of Super-Heroes: The More Things Change",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4048617-01.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion of Super-Heroes: The Silver Age",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6570599-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion of Super-Heroes: When Evil Calls",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4079373-03.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion of Super-Heroes/Bugs Bunny Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5897080-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion of Super-Villains",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/87073/1711375-legion_of_supervillains01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion Secret Files 3003",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3664/328233-20897-125130-1-legion-secret-files.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion Worlds",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/249807-7228-119270-1-legion-worlds.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Legion: Science Police",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/1211113-10361.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Legion: Secret Origin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2086270-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Legion: Secret Origin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2668154-_t2ec16zhjgke9no8ilsdbqinkywobg__60_57.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion: Son of X: Prodigal",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7231727-0309958123-82885.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legion: Trauma",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6517722-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Legionnaires",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5797770-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Legionnaires",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/1811312-legionnaires__1993__1.jpeg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "83 Issues"
//     },
//     {
//       "title": "Legionnaires 3",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/23740-3608-26461-1-legionnaires-3.jpg",
//       "year": "1986",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Legionnaires Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/932432-ann_1.jpg",
//       "year": "1994",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Lego Batman: Secret Files and Origins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1079519-cover.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lethal Foes of Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61948-5024-94943-1-lethal-foes-of-spide.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Lex Luthor: A Celebration of 75 Years",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4934582-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lex Luthor: Man of Steel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/1570007-4567_400x600.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lex Luthor: Man of Steel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/34588/1086837-lex_luthor_man_of_steel___cover.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Lex Luthor: The Unauthorized Biography",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1147953-p00001.jpg",
//       "year": "1989",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lex Luthor: Year of the Villain",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7074785-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lex Luthor/Porky Pig",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6584074-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Li'l Kids",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1235705-li_l_kids_v1_001.jpg",
//       "year": "1970",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Li'l Pals",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52212/994925-lilpals1_9_72_the_monkey_and_the_bear.jpg",
//       "year": "1972",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Life on Another Planet",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/75349/2742295-will_eisner_s_life_on_another_planet_sc__26559___page_1.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Life With Millie",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/813740-8.jpg",
//       "year": "1960",
//       "publisher": "Marvel",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "Life, the Universe and Everything",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1266213-life__the_universe_and_everything_v1996__1___book_1_of_3__1996____page_1.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Light Brigade",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/707652-lb1.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Like a Volt from the Blue!!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/3077569-like1.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Limited Collectors' Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27783/1036260-rudolph_14_72.jpg",
//       "year": "1972",
//       "publisher": "DC Comics",
//       "Field7": "32 Issues"
//     },
//     {
//       "title": "Linda Carter, Student Nurse",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1056603-4871_1_.jpg",
//       "year": "1961",
//       "publisher": "Marvel",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "Line of Defense",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3362460-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Line of Defense",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/115366/2399606-line_of_defense_3000ad_0_00.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lionel Play World",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/78179/2160994-48408496059.1.gif",
//       "year": "1981",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "List",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1088110-_bi7pliwcgk___kgrhquh_dkes_2qnrypblrve_mzj____3.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Little Aspirin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61981-1269-94976-1-little-aspirin.jpg",
//       "year": "1949",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Little Lenny",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1064670-1814_o_1_.jpg",
//       "year": "1949",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Little Lizzie",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1064696-1822_o_1_.jpg",
//       "year": "1953",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Little Shop Of Horrors",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/617047-little1.jpg",
//       "year": "1987",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Livewires",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/620842-lw01.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Loaded",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/14542/2555477-loaded.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lobezno: Involution",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124278/2367462-numeros_f141_368_209_377.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lobo",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1812/205558-19236-115327-1-lobo.jpg",
//       "year": "1990",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Lobo",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4128089-lobo%2001.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "Lobo",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1812/102262-18356-107632-1-lobo.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "66 Issues"
//     },
//     {
//       "title": "Lobo Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4713203-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lobo Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/28355/635716-41787_20060520042736_large.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Lobo Bounty Hunting for Fun and Profit",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/250138-19941-119309-1-lobo-bounty-hunting.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lobo by Keith Giffen & Alan Grant",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6242731-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Lobo Convention Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/58701/1154644-237416.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lobo Demon: Hellowe'en",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/59059/1121275-lobo___demon___helloween.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lobo Gallery",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/250135-19940-119308-1-the-lobo-gallery.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lobo Goes to Hollywood",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/73350/1491572-lobo_goes_to_hollywood___page_1.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lobo Mask",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1812/102265-18359-107640-1-lobo-mask.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Lobo Paramilitary Christmas Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/179584-19071-113855-1-lobo-paramilitary-ch.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lobo Unbound",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/34588/1096152-lobo_unbound_1.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Lobo: A Contract on Gawd",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1812/205552-19235-115326-1-lobo-a-contract-on.jpg",
//       "year": "1994",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Lobo: Beware His Might",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5173562-02.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lobo: Blazing Chain of Love",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/59059/1121269-lobo___blazing_chain_of_love.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lobo: Chained",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65073/1359831-lobo_chained___page_1.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lobo: Death and Taxes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/59059/1127032-lobo_death_and_taxes_1.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Lobo: Fragtastic Voyage",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/59059/1127010-lobo___fragtastic_voyage.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lobo: Highway To Hell",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1610804-lhth.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lobo: Highway to Hell",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/1016234-prv3743_cov.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Lobo: I Quit",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/59059/1121254-lobo___i_quit.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lobo: In the Chair",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/59059/1121267-lobo___in_the_chair.jpg",
//       "year": "1994",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lobo: Infanticide",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1812/102264-18358-107639-1-lobo-infanticide.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Lobo: Portrait of a Bastich",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2059810-lobo_boab.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lobo: Portrait of a Victim",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/59059/1127052-lobo_portrait_victim_00.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lobo: Targets",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4738263-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lobo: The Last Czarnian",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/250129-19939-119307-1-lobo-the-last-czarni.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lobo: Unamerican Gladiators",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/59059/1127011-lobo_unamerican_gladiators_01_00_fc_.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Lobo: Unbound",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2174489-unbound.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lobo's Back",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1812/102263-18357-107638-1-lobo-s-back.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Lobo's Back's Back!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2059852-lobo_s_bb.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lobo's Big Babe Spring Break Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/316219-20653-123880-1-lobo-s-big-babe-spri.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lobo's Greatest Hits",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/250142-19942-119318-1-lobo-s-greatest-hits.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lobo/Authority: Holiday Hell",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6684539-9162354885-73271.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lobo/Deadman: The Brave And The Bald",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74848/1490110-lobo_and_deadman_brave_and_the_bald_00.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lobo/Judge Dredd - \"Psycho Bikers vs. The Mutants From Hell\"",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65073/1361343-lobo___judge_dredd_psycho_bikers_vs_mutants_from_hell___page_1.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lobo/Road Runner Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5914433-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lobocop",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/59059/1121259-lobocop.jpg",
//       "year": "1994",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lockjaw",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6302394-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Lockjaw and the Pet Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/798683-1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Lockjaw and the Pet Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1328530-latpa.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lockjaw and the Pet Avengers Unleashed",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5658829-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lockjaw and the Pet Avengers Unleashed",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2790658-01a.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Lockjaw: Dog Days",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5984687-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lockjaw: Who's A Good Boy?",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6570601-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Logan: Path of the Warlord",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/100263-18311-107222-1-logan-path-of-the-w.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Logan: Shadow Society",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/37015/990969-logan1.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Logan's Run",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1812/101568-18344-107525-1-logan-s-run.jpg",
//       "year": "1977",
//       "publisher": "Marvel",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Lois and Clark The New Adventures of Superman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2080784-lois_and_clark.jpg",
//       "year": "1994",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lois Lane",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1970772-01.jpg",
//       "year": "1986",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Lois Lane",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6991025-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Lois Lane Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/5447-2112-5952-1-lois-lane-annual.jpg",
//       "year": "1962",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Lois Lane: A Celebration of 75 Years",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3468785-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Loki",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/63197-11023-96193-1-loki.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Loki",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7009253-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Loki",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1470618-loki_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Loki",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1618/1433001-loki.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Loki: Agent of Asgard",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3619053-01a.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "17 Issues"
//     },
//     {
//       "title": "Loki: Agent of Asgard - Trust Me",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4040874-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Loki: Agent of Asgard: I Cannot Tell A Lie",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4525001-02.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Loki: Agent of Asgard: Last Days",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4814496-03.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Loki: Agent of Asgard: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7184470-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Loki: Journey Into Mystery by Kieron Gillen Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6003147-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Loki: The God Who Fell To Earth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7205229-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Longshot",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2206045-01_cropped.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Longshot",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/2608220-longshot_001__1985__pagecover.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Longshot",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4197520-longshot1nm92m101.jpg",
//       "year": "1985",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Longshot Saves the Marvel Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3423931-01a.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Longshot Saves the Marvel Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3953574-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Looney Tunes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66710/3734109-looneytunesburgerkingedition-2004%20000.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Looney Tunes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/173424-18839-113646-1-looney-tunes.jpg",
//       "year": "1994",
//       "publisher": "DC Comics",
//       "Field7": "253 Issues"
//     },
//     {
//       "title": "Looney Tunes : a Special Allergy Issue",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/354257-21181-127308-1-looney-tunes--a-spe.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Looney Tunes : Back in Action : Movie Adaptation",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/354922-21188-127327-1-looney-toons--back.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Looney Tunes Greatest Hits: Beep Beep!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6018487-03.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Looney Tunes Presented by Burger King",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/354264-21182-127309-1-looney-tunes-present.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Looney Tunes: Greatest Hits: What's Up, Doc?",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5383761-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Looney Tunes: Greatest Hits: You're Despicable!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5759784-02.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Loose Cannon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/65819-11252-98816-1-loose-cannon.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Loose Cannons",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/2981855-loose%20cannons%20v1994%20001%20%281994%29%20pagecover.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Lords of Avalon: Knight of Darkness",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2810264-lordsofav_1_001.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Lords Of Avalon: Sword Of Darkness",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/10390/343848-21070-126246-1-lords-of-avalon-swo.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Lords of the Ultra-Realm",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/24104-3610-26849-1-lords-of-the-ultra-r.jpg",
//       "year": "1986",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Lords of the Ultra-Realm Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/101735/1877252-lords_of_the_ultra_realm_special__1___page_1.jpg",
//       "year": "1987",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lot 13",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2674627-lot13_cv1.jpeg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Love Romances",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6807740-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Love Romances",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/65581-1276-98578-1-love-romances.jpg",
//       "year": "1949",
//       "publisher": "Marvel",
//       "Field7": "101 Issues"
//     },
//     {
//       "title": "Love Stories",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47065-2553-56424-1-love-stories.jpg",
//       "year": "1972",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Lucifer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6650823-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "16 Issues"
//     },
//     {
//       "title": "Luke Cage",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5852967-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "Luke Cage",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11131/111316849/5784358-3462155731-36301.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Luke Cage - Marvel Legacy Primer Pages",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6073804-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Luke Cage Noir",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/906551-1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Luke Cage Noir",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4763290-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Luke Cage, Iron Fist & The Heroes For Hire",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5570997-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Luke Cage: Avenger",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5337566-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Luke Cage: Caged!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6385002-02.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Luke Cage: Everyman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6684824-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Luke Cage: Marvel Digital Original",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6561157-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Luke Cage: Second Chances",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4801321-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Luke Cage: Sins of the Father",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6143992-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Lunatik",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4366199-01.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Luthor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4638791-01.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "M.O.D.O.K. Assassin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4584120-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "M.O.D.O.K. Assassin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4955651-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "M.O.D.O.K. Reign Delay",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/959518-sc0039d6fe.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "M.O.D.O.K.: Head Trips",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7161570-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "M&M's",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7098715-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Machine Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/22223-3350-24795-1-machine-man.jpg",
//       "year": "1984",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Machine Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/16532-2956-18419-1-machine-man.jpg",
//       "year": "1978",
//       "publisher": "Marvel",
//       "Field7": "19 Issues"
//     },
//     {
//       "title": "Machine Man / Bastion '98",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/37015/742248-bastion1.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Machine Man 2020",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/73413-5309-86121-1-machine-man-2020.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Machine Man by Kirby & Ditko: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5351445-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Machine Teen",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1494/86486-18076-105866-1-machine-teen.gif",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Machine Teen: History 101001",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6168533-01.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "MAD",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4366203-01.jpg",
//       "year": "1952",
//       "publisher": "DC Comics",
//       "Field7": "550 Issues"
//     },
//     {
//       "title": "Mad About Millie",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/62074-2444-95069-1-mad-about-millie.jpg",
//       "year": "1969",
//       "publisher": "Marvel",
//       "Field7": "16 Issues"
//     },
//     {
//       "title": "Mad About Millie Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1235931-mad_about_millie_annual_01.jpg",
//       "year": "1971",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mad About Super Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4285207-01.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "MAD About the Trump Era",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6913004-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mad Archives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/1158274-mararc1.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Mad Classics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/953293-madcl1.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "25 Issues"
//     },
//     {
//       "title": "Mad Hatter's Hat Crimes!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/2117971-madh.jpg",
//       "year": "1966",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "MAD Magazine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6374056-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "11 Issues"
//     },
//     {
//       "title": "Mad Presents Batman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2932500-01.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mad Presents Spy vs. Spy: Fighting to the Finish!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3453860-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "MAD Presents Superman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3101346-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "MAD Presents Superman and the Miserable, Rotten, No Fun, Really Bad Day",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6091895-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "MAD Presents: Spy Vs. Spy - The Top Secret Files",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4285215-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mad-Dog",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/50607-9096-66412-1-mad-dog.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "MAD's Original Idiots: Jack Davis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4826108-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "MAD's Original Idiots: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4826107-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "MAD's Original Idiots: Wally Wood",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4826109-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "MAD's Original Idiots: Will Elder",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4826110-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Madame Xanadu",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/942937-1.jpg",
//       "year": "1981",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Madness in Murderworld",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1030547-x_men_madness_in_murderworld__giveaway__p00.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Madrox: Multiple Choice",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1025702-xmn.gif",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Magician Master: The Great One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/143827/2994904-mm01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Magician: Apprentice Collected Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/5803118-mag1a.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Magik (Storm and Illyana Limited Series)",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/21289-3230-23731-1-magik.jpg",
//       "year": "1983",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Magneto",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/98969-7196-106972-1-magneto.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Magneto",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/1811313-magneto__1993_1997__0.jpeg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Magneto",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3676091-01a.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "21 Issues"
//     },
//     {
//       "title": "Magneto",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6063/1637104-prv7570_cov.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Magneto Ascendant",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1160068-magneto_ascendent.jpg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Magneto Dark Seduction",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3499/316151-20099-123857-1-magneto-dark-seducti.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Magneto Rex",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/1839101-magneto_rex__1999__1.jpeg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Magneto: Infamous",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4133406-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Magneto: Last Days",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4863039-04.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Magneto: Not A Hero",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/109203/2075983-magneto1.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Magneto: Not A Hero",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2413417-mgn__nah.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Magneto: Reversals",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4344321-02.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Magneto: Rogue Nation",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1059388-xmn.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Magneto: Shadow Games",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4721006-03.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Magog",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/45797/964125-magog__1___page_2.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Majestic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/308/224200-19518-116720-1-majestic.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Majestic: Strange New Visitor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/148518/2904406-2715_400x600.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Major Bummer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/1089959-mb1.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "15 Issues"
//     },
//     {
//       "title": "Major X",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6875003-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Major X",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7092701-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Man and Superman 100-Page Super Spectacular",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6790017-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Man and Superman Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7167923-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Man from Atlantis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/16380-2958-18254-1-man-from-atlantis.jpg",
//       "year": "1978",
//       "publisher": "Marvel",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Man of Steel Prequel: Special Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/3052587-mosprequelcover.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Man Of Steel: All-Star Superman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/142611/3099986-01.png",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Man Without Fear",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6744804-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Man Without Fear: The Death of Daredevil",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6913170-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Man-Bat",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50823/951665-01_man_bat__2006___1_pg00.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Man-Bat",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/3537811-tn.jpg",
//       "year": "1975",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Man-Bat",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/41577-6577-47006-1-man-bat.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Man-Bat vs. Batman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1592789-76873_20061224031118_large.jpg",
//       "year": "1984",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Man-Thing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/2747/114560-18540-108955-1-man-thing.JPG",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Man-Thing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5734662-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Man-Thing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/12473-2693-13994-1-man-thing.jpg",
//       "year": "1974",
//       "publisher": "Marvel",
//       "Field7": "22 Issues"
//     },
//     {
//       "title": "Man-Thing by R.L. Stine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6044943-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Man-Thing by Steve Gerber: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4863040-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Man-Thing Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3327188-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Man-Wolf: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7092702-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mandrake the Magician",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/2454889-mandrake_the_magician__marvel__001__1995__pagecover.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Manhunter",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/12370/257427-11797-103502-2-manhunter.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "38 Issues"
//     },
//     {
//       "title": "Manhunter",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/26830-4009-29780-1-manhunter.jpg",
//       "year": "1988",
//       "publisher": "DC Comics",
//       "Field7": "24 Issues"
//     },
//     {
//       "title": "Manhunter",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27470/537483-1_1mhunt2.jpg",
//       "year": "1994",
//       "publisher": "DC Comics",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "Manhunter Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/43547/1201421-10458.jpg",
//       "year": "1984",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Manhunter Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6034353-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Manhunter: Forgotten",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/988089-5.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Manhunter: Origins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/988082-3.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Manhunter: Street Justice",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/988070-1.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Manhunter: The Special Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1691134-manhunterspecial.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Manhunter: Trial by Fire",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/988077-2.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Manhunter: Unleashed",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/988085-4.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mann and Superman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/617257-mann1.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Many Loves of Dobie Gillis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47071-2015-56430-1-many-loves-of-dobie-.jpg",
//       "year": "1960",
//       "publisher": "DC Comics",
//       "Field7": "26 Issues"
//     },
//     {
//       "title": "Many Loves Of The Amazing Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/1217408-lovesasm1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marauders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7116853-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Marc Spector: Moon Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/28230-4230-31327-1-marc-spector-moon-k.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "60 Issues"
//     },
//     {
//       "title": "March On Ultimatum Saga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15455/566098-mou.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marines At War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/62149-1849-95144-1-marines-at-war.jpg",
//       "year": "1957",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Mark Hazzard: Merc",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/24619-3644-27389-1-mark-hazzard-merc.jpg",
//       "year": "1986",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Mark Hazzard: Merc Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52212/1017061-6297_20060209181602_large_1_.jpg",
//       "year": "1987",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marshal Law The Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3416488-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Martian Manhunter",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2792429-01.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "38 Issues"
//     },
//     {
//       "title": "Martian Manhunter",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6713276-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Martian Manhunter",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/26613-4010-29542-1-martian-manhunter.jpg",
//       "year": "1988",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Martian Manhunter",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/201780-18626-115101-1-martian-manhunter.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Martian Manhunter",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4628887-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Martian Manhunter Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2792479-01.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Martian Manhunter Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1221297-p00001.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Martian Manhunter: American Secrets",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/32780-4749-36582-1-martian-manhunter-a.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Martian Manhunter: Rings of Saturn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4071699-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Martian Manhunter: Son of Mars",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3650704-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Martian Manhunter: The Epiphany",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5062785-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Martian Manhunter: The Others Among Us",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1691440-martianmanhunter.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Martian Manhunter: The Red Rising",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5586833-02.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Martian Manhunter/Marvin the Martian Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5897082-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel 100th Anniversary",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4174336-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel 1602",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1152953-m162.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel 1602 MGC",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1233126-1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel 1602: Fantastick Four",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27994/2550847-10262561_1.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel 1602: Fantastick Four",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2944999-1602_f4_01_001.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Marvel 1602: New World",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4897183-01.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel 1602: New World",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/58436/1393616-1602___new_world__01_01.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Marvel 1602: New World/Fantastick Four",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/35695/1877619-1602_001.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel 1602: Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1244401-1602.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel 1872: Warzones!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4932899-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel 2000-2001 Year in Review: Fanboys and Badgirls, Bill and Joe's Marvelous Adventure",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2847367-hc_marvel___year_in_review___fanboys_and_badgirls_v9999__2000___page_1.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel 2020 Calendar",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7188310-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel 65th Anniversary Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2847328-__addme___marvel_65th_anniversary_special_v9999__1___page_1.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel 70th Anniversary Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/872495-yhst_23599503122488_2062_447790452.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel 70th Anniversary Frame Art",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6350825-3795193455-66072.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel 70th Anniversary Poster Book",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2847334-__addme___marvel_70th_anniversary_poster_book_v9999___page_1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel 75th Anniversary Celebration",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4184421-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel 75th Anniversary Magazine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111129651/4703209-marvel%2075th%20anniversary%20magazin%20-%20unknown%20-%20page%201.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel 75th Anniversary Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4204907-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel 80 For 80",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7101021-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel 80th Anniversary Postcard Book",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7084654-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel 80th Anniversary Poster Book",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7039263-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Action Hour Preview",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3110847-marvel%20action%20hour%20v1994%20001%20%281994%29%20pagecover.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Action Hour: Fantastic Four",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/19859/819393-marvel_action_hour__featuring_the_ff_01___how_it_all_began...___00___fc.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Marvel Action Hour: Iron Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4312/235624-19681-118051-2-marvel-action-hour.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Marvel Action Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51078/944322-imagehandler.ashx.jpeg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventure",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/819881-2255_4_1.jpg",
//       "year": "1975",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Marvel Adventures",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/57473/1110013-desktop_background.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "Marvel Adventures Avengers: Bizarre Adventures",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6816220-4904863617-74866.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Avengers: Heroes Assembled",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6801589-8107995753-74799.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Avengers: Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6500029-3461187166-69150.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Avengers: Invasion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6824664-5645267236-74869.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Avengers: Iron Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6649589-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Avengers: Mighty Marvels",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6816225-8876649766-74868.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Avengers: Mischief",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6801590-4921985790-74799.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Avengers: Some Assembling Required",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6816224-0793956266-74867.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Avengers: The Dream Team",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6816222-7604769552-74867.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Avengers: The New Recruits",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6824661-4951021465-74870.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Avengers: The Times They Are A-Changing'",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6824662-5556374955-74870.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Avengers: Thor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6586820-5342931570-70941.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Avengers: Thor/Captain America",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2021295-maa__ca_thr.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Avengers: Weirder & Wilder",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6816228-8574221848-74868.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Fantastic Four: All 4 One, 4 For All",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1175694-madv.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Fantastic Four: Cosmic Threats",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1175687-madv.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Fantastic Four: Doomed If You Don't",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1175742-madv.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Fantastic Four: Family of Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1175664-madv.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Fantastic Four: Fantastic Voyages",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1175673-madv.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Fantastic Four: Monsters and Mysteries",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1175708-madv.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Fantastic Four: Monsters, Moles, Cowboys, and Coupons",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1175718-madv.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Fantastic Four: New York's Finest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1175722-madv.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Fantastic Four: Spaced Crusaders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1175734-madv.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Fantastic Four: The Silver Surfer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1175710-madv.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2191235-01.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "16 Issues"
//     },
//     {
//       "title": "Marvel Adventures Hulk: Defenders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1967700-02.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Hulk: Misunderstood Monster",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1967694-01.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Hulk: Strongest One There Is",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1175814-madv.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Hulk: Tales to Astonish",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1967707-04.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Iron Man: Armored Avenger",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1957484-04.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Iron Man: Heart of Steel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1967676-01.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Iron Man: Hero By Design",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1967682-03.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Iron Man: Iron Armory",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1967680-02.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Jack in the Box Exclusive",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3110855-marvel%20adventures%20v1997%20001%20%282001%29%20pagecover.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11113/111139104/3622317-masm_smvenom.gif",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1215067-marvel_adventures_spider_man_vol_2_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "24 Issues"
//     },
//     {
//       "title": "Marvel Adventures Spider-Man, Hulk & Iron Man: Triple Threat",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1175247-madv.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Spider-Man: Amazing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6643239-7340381577-72347.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Spider-Man: Animal Attack!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6764353-1439056241-74119.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Spider-Man: Animal Instinct",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6764350-4775688197-74118.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Spider-Man: Concrete Jungle",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6733771-9673796874-74035.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Spider-Man: Doom With A View",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6733767-03.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Spider-Man: Fiercest Foes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6755370-6313390253-74117.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Spider-Man: Forces of Nature",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6747133-3542191604-74114.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Spider-Man: Friendly Neighborhood",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2007307-ma_spm__fn.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Spider-Man: Identity Crisis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6755371-7202511251-74117.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Spider-Man: Jumping to Conclusions",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6764351-4044292240-74119.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Spider-Man: Monsters On the Prowl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6741004-8923374554-copyO.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Spider-Man: Peter Parker Vs. The X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6697148-4521388278-copyO.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Spider-Man: Power Struggle",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6724630-1633857975-73820.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Spider-Man: Secret Identity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6747132-3578102363-74113.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Spider-Man: Sensational",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6544271-7643643427-70289.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Spider-Man: Spectacular",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6599789-2590051529-70944.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Spider-Man: Tangled Web",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2214350-ma_spm__tw.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Spider-Man: The Black Costume",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6741011-4332099492-74037.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Spider-Man: The Sinister  Six",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6724629-4188887235-73819.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Spider-Man: Thwip!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6764354-4968356031-74120.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures Super Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2191326-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "21 Issues"
//     },
//     {
//       "title": "Marvel Adventures Super Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1193370-marvel_adventures_super_heroes_vol_2_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "24 Issues"
//     },
//     {
//       "title": "Marvel Adventures Thor: Bringers of the Storm",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1758860-ma_thr__bots.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures: Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2191193-01.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "39 Issues"
//     },
//     {
//       "title": "Marvel Adventures: Black Widow and The Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6678614-1311781794-73021.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures: Captain America",
//       "img": "https://comicvine1.cbsistatic.com/bundles/phoenixsite/images/core/loose/img_broken.png",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures: Fantastic Four",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2191119-01.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "49 Issues"
//     },
//     {
//       "title": "Marvel Adventures: Iron Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/152426-18737-111554-1-marvel-adventures-i.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "Marvel Adventures: Iron Man and Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/98094/1781764-ma_01_fcbd_champ__001.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures: Iron Man and Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6705503-4370371300-73060.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures: Iron Man Special Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/98094/1781626-ma_iron_man_se_001.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures: Iron Man, Hulk, and Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/98094/1781625-ma_fcbd_08_01_dcp_001.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures: Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2191251-01.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "61 Issues"
//     },
//     {
//       "title": "Marvel Adventures: Spider-man and Fantastic Four",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/98094/1790933-mafcbd_01.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures: Spider-Man and the Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6733773-3136256085-74034.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures: Thor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1173506-madv.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures: Thor and the Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7132813-6295262281-80901.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Adventures: Thor/Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6523696-4344374952-69773.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Age",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68452/1287652-marvel_age_01.jpg",
//       "year": "1983",
//       "publisher": "Marvel",
//       "Field7": "140 Issues"
//     },
//     {
//       "title": "Marvel Age Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/196626-19177-114771-1-marvel-age-annual.jpg",
//       "year": "1985",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel Age Fantastic Four",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/60339-10865-93334-1-marvel-age-fantasti.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Marvel Age Fantastic Four Tales",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/399562-21692-130872-1-marvel-age-fantastic.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Age Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65983/1215113-marvel_age___hulk__1___page_1.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel Age Preview",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1273748-marvel_age_preview_v1_001.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel Age Spider-Man Team-Up",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2191348-01.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Marvel Age: Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15530/376188-21401-129215-1-marvel-age--spiderm.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "20 Issues"
//     },
//     {
//       "title": "Marvel and DC Present featuring The Uncanny X-Men and The New Teen Titans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/2422178-marvel_and_dc_present_the_x_men_and_the_teen_titans__1982__1.jpeg",
//       "year": "1982",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Annual Report",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66029/1806754-1991_annual.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "Marvel Apes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/528787-0004.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Marvel Apes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1212767-mva.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Apes: Amazing Spider-Monkey Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/772509-ma_01.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Apes: Grunt Line",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/830337-gruntlline.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Apes: Speedball Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/754538-mass_01.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Apes: The Evolution Starts Here",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7132815-6494429912-80901.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Art of Conan the Barbarian",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7031461-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Assistant-Sized Spectacular",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/754119-754017_assistant_super.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel Atlas",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/603435-marvel_atlas_01.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel Authentix: Astonishing X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117127/3274821-marvel%20authentix%20-%20astonishing%20x-men%20%231%20-%20page%201.jpg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Authentix: Daredevil",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11113/111133305/4113069-marvel%20authentix%20-%20daredevil%20%231%20-%20page%201.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Authentix: Gambit",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849966-__addme___marvel_authentix___gambit_v9999__1___page_1.jpg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Authentix: Magneto Rex",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117127/3274803-marvel%20authentix%20-%20magneto%20rex%20v1%20%231%20-%20page%201.jpg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Authentix: Spider-Woman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2850037-__addme___spider_woman_v9999__1___spider_spider__1999_7____page_1.jpg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Backlist Reading Chronology",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2850018-magsmarvelbrc.gif",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Boy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1201660-mvb.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Boy: The Uranian",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1086074-marvel_boy_the_uranian_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Marvel Chillers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/14017-2770-15690-1-marvel-chillers.jpg",
//       "year": "1975",
//       "publisher": "Marvel",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Marvel Chillers Blood Storm",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9541/3687428-2.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Chillers: The Thing in The Glass Case",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3110860-marvel%20chillers%20-%20the%20thing%20in%20the%20glass%20case%20v1997%20001%20%281997%29%20pagecover.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Chronicle: A Year by Year History",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/69256/1275035-marvelchronicleayearbyh1.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Cinematic Universe Guidebook: It's All Connected",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6212055-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Cinematic Universe Guidebook: The Avengers Initiative",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5786782-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Cinematic Universe Guidebook: The Good, The Bad, The Guardians",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7214142-8148935243-82881.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Civil War II Previews",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5241204-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Classics Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/43088-6938-49246-1-marvel-classics-comi.jpg",
//       "year": "1976",
//       "publisher": "Marvel",
//       "Field7": "36 Issues"
//     },
//     {
//       "title": "Marvel Collectible Classics: X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/33913/1646120-marvel_collectible_classics_1.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Marvel Collector's Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1034589-untitled_scanned_01.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Collector's Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1300887-marvel_collector_s_edition_v1__1___page_1.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Collectors' Item Classics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/16281/316512-20664-123906-1-marvel-collectors-i.jpg",
//       "year": "1965",
//       "publisher": "Marvel",
//       "Field7": "22 Issues"
//     },
//     {
//       "title": "Marvel Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7054373-1000.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel Comics #1: 70th Anniversary Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111121457/5253374-marvel%20comics%20%231_%2070th%20anniversary%20edition%20v2009%20%231%20-%2070th%20anniversary%20edition%20%282009_10%29%20-%20page%201.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Comics #1: 80th Anniversary Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7031462-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Comics #1: Halloween ComicFest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4184723-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Comics 70th Anniversary Celebration Magazine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1300903-marvel_comics___70th_anniversary_celebration_magazine___page_1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Comics Group Special Edition Calendar",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3910004-marvel%20comics%20group%20special%20edition%20%20calendar%202013%20%282012%29%20pagecover.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Comics Pocket Series",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23221/1644216-captain_america_pocket_v1__2010____page_1.jpg",
//       "year": "1979",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Comics Presents",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6760836-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "Marvel Comics Presents",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/27091-4058-30058-1-marvel-comics-presen.jpg",
//       "year": "1988",
//       "publisher": "Marvel",
//       "Field7": "175 Issues"
//     },
//     {
//       "title": "Marvel Comics Presents",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/195766-19164-114655-1-marvel-comics-presen.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Marvel Comics Presents Captain America",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23221/1644208-captain_america_marvel_comics_presents__2010____page_1.jpg",
//       "year": "1987",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Comics Presents Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849683-__addme___marvel_comics_presents_spider_man_v9999__1987___page_1.jpg",
//       "year": "1987",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Comics Presents Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849707-__addme___marvel_comics_presents_spider_man_v9999__1988___page_1.jpg",
//       "year": "1988",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Comics Presents The X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849740-__addme___marvel_comics_presents_the_x_men_v9999__1988___page_1.jpg",
//       "year": "1988",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Comics Presents: Wolverine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/46736/978446-wolv1.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel Comics Super Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/15258-2909-17010-1-marvel-comics-super-.jpg",
//       "year": "1977",
//       "publisher": "Marvel",
//       "Field7": "41 Issues"
//     },
//     {
//       "title": "Marvel Comics: 2001",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849098-__addme___marvel_comics_2001_v9999__1___page_1.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Comics: 2002",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849109-__addme___marvel_comics_2002_v9999__1___page_1.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Comics: The World Outside Your Window",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6981397-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Comics: Timeless Tales",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6947204-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Covers: Artist's Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4116453-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Creators' Choice X-men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6530283-01.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel Divas",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3755014-01.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel Divas",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6741013-6405721229-74037.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Double Feature",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/12394-2639-13889-1-marvel-double-featur.jpg",
//       "year": "1973",
//       "publisher": "Marvel",
//       "Field7": "21 Issues"
//     },
//     {
//       "title": "Marvel Double Feature... Thunderstrike/Code: Blue",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2847476-__addme___marvel_double_feature..._thunderstrike_code__blue_v1994__13___the_crack_of_doom___1994_10____page_1.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel Double Feature...The Avengers/Giant-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2496600-__addme___the_avengers_df_v1963__379___when_a_hero_falls...__1994_10____page_1.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel Double Shot",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2207686-01.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel Encyclopedia",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/149433-18366-111424-1-marvel-encyclopedia.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Marvel Fairy Tales",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2938864-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Fanfare",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5551/698770-672cd5f8_b92d_4825_b8a7_ab0028f492f3.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Marvel Fanfare",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/19728-3143-22013-1-marvel-fanfare.jpg",
//       "year": "1982",
//       "publisher": "Marvel",
//       "Field7": "60 Issues"
//     },
//     {
//       "title": "Marvel Fanfare: Strange Tales",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1202609-mvf.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Feature",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2845968-marvelfeature01.jpg",
//       "year": "1971",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Marvel Feature",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/14111-2771-15789-1-marvel-feature.jpg",
//       "year": "1975",
//       "publisher": "Marvel",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Marvel Firsts: The 1960's",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6108881-8416139055-58381.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Firsts: The 1970's",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6066376-7980468599-57470.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Marvel Firsts: The 1980's",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3426356-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Marvel Firsts: The 1990s",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5160031-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel Firsts: The 1990s Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4751396-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Firsts: WWII Super Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6099390-1322435013-58232.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Free Previews Monsters Unleashed",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5575669-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Frontier Comics: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5008149-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Future Fight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11131/111316849/6043912-p001.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Future Fight: An Eye on the Future",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/14487/6870986-mff%20ef.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Ghost Stories",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2021467-mvl_gs.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Girl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/80654/1732901-marvel_girl_000.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Graphic Novel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2716684-marvelgraphicnovel01.jpg",
//       "year": "1982",
//       "publisher": "Marvel",
//       "Field7": "38 Issues"
//     },
//     {
//       "title": "Marvel Graphic Novel: A Sailor's Story Book II",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1264282-marvel_graphic_novel____a_sailor_s_story___book_ii__48___page_1.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Graphic Novel: Ax",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1264285-marvel_graphic_novel____ax__44___page_1.jpg",
//       "year": "1988",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Graphic Novel: Cloak and Dagger and Power Pack: Shelter from the Storm",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1264291-marvel_graphic_novel____cloak_and_dagger___power_pack___shelter_from_the_storm__56___page_1.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Graphic Novel: Conan of the Isles",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1582032-1246428_marvel_graphic_novel_vol_1_42_1__super.jpg",
//       "year": "1988",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Graphic Novel: Rick Mason, The Agent",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1264297-marvel_graphic_novel____rick_mason__57___page_1.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Graphic Novel: Roger Rabbit in The Resurrection of Doom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1264298-marvel_graphic_novel____roger_rabbit___the_resurrection_of_doom__54___page_1.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Graphic Novel: The Pitt",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5406559-01.jpg",
//       "year": "1987",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Graphic Novel: The Punisher, Assassins' Guild",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1808/1072258-the_punisher___assassin_s_guild___00___fc.jpg",
//       "year": "1988",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Graphic Novel: The Shadow",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62070/1627844-shadow1941.jpg",
//       "year": "1988",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Graphic Novel: Who Framed Roger Rabbit?",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1271151-marvel_graphic_novel____who_framed_roger_rabbit__41___page_1.jpg",
//       "year": "1988",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Halloween Ashcan",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/2454897-marvel_halloween_ashcan_2004__2004__pagecover.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel Heartbreakers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/1114902-prv4332_cov.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Her-Oes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6626964-6535407238-71803.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/35492/701304-marvelrev1p1101lu7.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "11 Issues"
//     },
//     {
//       "title": "Marvel Heroes and Legends",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/3712362-%24t2ec16rhjiqe9quhsjkibqcicz%21e0g~~60_57.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel Holiday Magazine 2010",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849801-__addme___marvel_holiday_magazine_v9999___page_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel Holiday Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/244270-18442-118717-1-marvel-holiday-speci.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "Marvel Holiday Spectacular",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1010390-marvel_holiday_spectacular_1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Horror Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7059414-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Horror: The Magazine Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6091897-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Illustrated Books: Fantastic Four",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/585183-1.jpg",
//       "year": "1982",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Illustrated Books: Star Wars",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/85763/2696680-misw1.jpg",
//       "year": "1981",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel Illustrated Books: The Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/585185-1.jpg",
//       "year": "1982",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Illustrated Books: X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/585196-1.jpg",
//       "year": "1982",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Illustrated: Kidnapped!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2810245-mikid001_000.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Marvel Illustrated: Kidnapped!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/111746/5737421-k%202.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Illustrated: Last of the Mohicans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2979532-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Illustrated: Last Of The Mohicans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/1070714-527223.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Marvel Illustrated: Moby Dick",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/111746/5737360-81vrj502udl.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Illustrated: Moby Dick",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/16235/317243-20678-124018-1-moby-dick.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Marvel Illustrated: Star Wars: Return of the Jedi",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/585184-1.jpg",
//       "year": "1983",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Illustrated: Swimsuit Issue",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1034605-marvel_illustrated_01_00fc.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Illustrated: The Iliad",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2775357-iliad01001.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Marvel Illustrated: The Iliad",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/111746/5737382-i%202.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Illustrated: The Jungle Book",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/123275/2702425-p00001.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Illustrated: The Man In The Iron Mask",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/111746/5737452-im%201.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Illustrated: The Man In The Iron Mask",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/1070678-0001.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Marvel Illustrated: The Odyssey",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/111746/3034259-l9780785119081.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Illustrated: The Odyssey",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/539133-0004.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Marvel Illustrated: The Picture of Dorian Gray",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2612289-01.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Illustrated: The Picture Of Dorian Gray",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2770238-midg01_001.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Marvel Illustrated: The Three Musketeers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15455/461796-3m.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Marvel Illustrated: The Three Musketeers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/114183/5737264-71eijenmoal.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Illustrated: Treasure Island",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/111746/5737463-t%201.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Illustrated: Treasure Island",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27783/1069051-miti_1.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Marvel Illustrator's Sketchbook",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7084655-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Knights 2099",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1641267-mk2099.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Knights 4: Divine Time",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1627771-mk4__dt.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Knights 4: Impossible Things Happen Every Day",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1627776-mk4__ithed.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Knights 4: Resurrection of Nicholas Scratch",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100555/2903939-598737.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Knights 4: The Stuff of Nightmares",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1627769-mk4__tson.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Knights 4: Wolf at the Door",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1627758-mk4__watd.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Knights Black Panther by Priest & Texeira: The Client",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6595005-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Knights Black Widow by Grayson & Rucka: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6640624-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Knights by Dixon & Barreto: Defenders of the Streets",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6650956-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Knights by Joe Quesada Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6676174-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Knights Daredevil by Bendis & Maleev: Underboss",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6650955-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Knights Daredevil by Bendis, Jenkins, Gale & Mack: Unusual Suspects",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730735-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Knights Daredevil by Mack & Quesada: Parts of A Whole",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730737-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Knights Daredevil by Smith & Quesada: Guardian Devil",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6606809-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Knights Fantastic Four By Aguirre-Sacasa, Mcniven & Muniz: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6863625-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Knights Fantastic Four by Morrison & Lee: 1234",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6614320-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Knights Hulk: Transformé",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3968803-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Knights Marvel Boy by Morrison & Jones",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6703940-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Knights Punisher by Garth Ennis: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6721977-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Marvel Knights Punisher by Golden, Sniegoski & Wrightson: Purgatory",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6779319-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Knights Punisher by Peyer & Gutierrez: Taxi Wars",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6819206-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Knights Sketchbook",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/347028-21100-126722-1-marvel-knights-sketc.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Knights Wave 2 Sketchbook",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/347029-21101-126723-1-marvel-knights-wave.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Knights: 20th",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6676173-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Marvel Knights: 20th",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6903178-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Knights: 4",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/1831887-4__2004_four__formerly_marvel_knights_four__1.jpeg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "30 Issues"
//     },
//     {
//       "title": "Marvel Knights: Spider-Man: Fight Night",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3970729-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Knights: X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3439070-01a.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Marvel Knights: X-Men - Haunted",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3953575-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Legacy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6289344-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Legacy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6069446-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Legacy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6684528-7672872779-73033.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel Legacy Companion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6364053-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Legacy: The 1960s-1990s Handbook",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/13/135797/2973772-marvellegacy.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Live",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849202-__addme___marvel_live___san_diego_comic_convention_v9999__0___page_1.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel Mangaverse",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/2174437-mangaverse_01.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Marvel Mangaverse",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1619478-mmv__vl1.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel Mangaverse: Avengers Assemble",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/254896-20092-119960-1-marvel-mangaverse-a.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Mangaverse: Eternity Twilight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/440685-eternaltwilight.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Mangaverse: Fantastic Four",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9338/440663-marvelmangaverseff.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Mangaverse: Ghost Riders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/28097/820176-mangaverseghostriders1.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Mangaverse: New Dawn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/681473-nd1a.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Mangaverse: Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/28097/820157-mangaversespiderman1.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Mangaverse: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6203587-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Mangaverse: The Punisher",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/19859/561978-mm_punisher_00fc.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Mangaverse: X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/250836-19974-119415-1-marvel-mangaverse-x.gif",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Mart",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3110955-marvel%20mart%20v1994%20001%20%281994%29%20pagecover.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Masters of Suspense: Stan Lee & Steve Ditko",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7040962-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Masters: The Art of John Byrne",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3110956-marvel%20masters%20the%20art%20of%20john%20byrne%20v2008%20001%20%282008%29%20pagecover.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Masterworks",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/24776-3851-27558-1-marvel-masterworks.jpg",
//       "year": "1987",
//       "publisher": "Marvel",
//       "Field7": "27 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Ant-Man/Giant-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/119711/2934182-ihrgorehgrw.png",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Atlas Era Battlefield",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6619560-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Atlas Era Black Knight/Yellow Claw",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1085156-marvel_masterworks_atlas_era_black_knight.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Atlas Era Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/47524/1357296-mm_heroes01_3b.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Atlas Era Journey into Mystery",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65567/2421035-marvel_masterworks_atlas_era_journey_into_mystery_volume_1_420x600.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Atlas Era Jungle Adventures",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/119711/2940485-06.png",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Atlas Era Menace",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/119711/2934597-09.png",
//       "year": "",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Atlas Era Strange Tales",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6350566-0172697238-65746.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Atlas Era Tales of Suspense",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/119711/2934661-09.png",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Atlas Era Tales To Astonish",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/586687-aeta1.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Atlas Era: Venus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2754295-venus.png",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/47524/1363397-mm_avg01_3b.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "19 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Black Panther",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/119711/2934198-fbdbtbtbyty.png",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Captain America",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/47524/1385712-cap1.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "11 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Captain Marvel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/49017/1329062-captain_marvel_cover_2.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Daredevil",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/49017/1327844-dd_masterwork.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "14 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Deathlok",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/49017/1362609-deathlock.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Defenders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/49017/1354457-defenders.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Doctor Strange",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/49017/1327910-doctor_strange_masterworks_volume_1.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Ghost Rider",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7101022-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Golden Age All-Winners",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6024596-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Golden Age Captain America",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/47524/1404004-900883_mm_gacap01_3b_super.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Golden Age Daring Mystery",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6772667-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Golden Age Human Torch",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/47524/1394747-mm_ga_human_torch1.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Golden Age Marvel Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/47524/1404003-811368_mm_gamc01_3b_super.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Golden Age Mystic Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6610220-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Golden Age Sub-Mariner",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/47524/1360398-041a.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Golden Age U.S.A. Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6300817-01.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Golden Age Young Allies",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6291179-01.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Inhumans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/49017/1332006-inhumans_masterworks_cover_1_volume_1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Iron Fist",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/119711/2934341-09.png",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
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