const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/comicbookdb"
  );


const comicvinevolumesSeed = 

[
    {
      "title": "True Believers: The X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5790276-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: Thor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4808751-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: Thor vs. Hulk!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6003343-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: Uncanny Avengers: The Bagalia Job",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5316403-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: Uncanny Deadpool",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4995889-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: Vader Down",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5193993-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: Venom Symbiosis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6315483-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: Venom vs. Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6315484-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: Venom: Agent Venom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6352599-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: Venom: Carnage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6335153-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: Venom: Dark Origin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6339720-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: Venom: Flashpoint",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6339721-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: Venom: Homecoming",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6352600-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: Venom: Lethal Protector",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6335154-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: Venom: Shiver",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6335155-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: Venom: Toxin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6352601-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: What If Conan the Barbarian Walked Earth Today?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6780984-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: What If Dr. Doom Had Become A Hero?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6641773-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: What If Jane Foster Had Found the Hammer of Thor?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6632925-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: What If Phoenix Had Not Died?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6203601-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: What If Spider-Man Had Rescued Gwen Stacy?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6641774-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: What If The Avengers Had Fought Evil During the 1950's?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6632926-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: What If The Fantastic Four Had Not Gained Their Powers?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6651007-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: What If... Kraven the Hunter Had Killed Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6657947-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: What If... The Alien Costume Had Possessed Spider-Man?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6651006-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: What If... The Silver Surfer Possessed the Infinity Gauntlet",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6657948-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5679359-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: Wolverine - Origin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5692530-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: Wolverine - Save the Tiger",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5692531-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: Wolverine - Weapon X",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5692532-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: Wolverine and the X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5714320-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: Wolverine vs Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5679361-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: Wolverine vs Sabretooth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6418937-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: Wolverine vs. Venom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6438997-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: Wolverine: Blood Hungry",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6418935-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: Wolverine: Dying Game",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6429671-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: Wolverine: Enemy of the State",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5703500-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: Wolverine: Evolution",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6449149-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: Wolverine: Fatal Attractions",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6429672-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: Wolverine: The Brothers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6438996-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: Wolverine: X-23",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5703501-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: X-Factor: Mutant Genesis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5812172-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: X-Force",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5801085-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: X-Men Gold",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5822820-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: X-Men The Age of Apocalypse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4479805-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: X-Men: Apocalypse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7116855-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: X-Men: Betsy Braddock",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7101026-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: X-Men: Blue",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5812173-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: X-Men: Jubilee",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7109893-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: X-Men: Karima Shapandar, Omega Sentinel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7125479-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: X-Men: Kwannon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7116856-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: X-Men: Moira MacTaggert",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7125480-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "True Believers: X-Men: Rictor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7109894-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Truth: Red, White and Black",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4312/138591-18775-110902-1-truth-red-white-an.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "7 Issues"
    },
    {
      "title": "TSR Worlds",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/617346-tsr1.jpg",
      "year": "1990",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Tutenstein",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/616478-tut1.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "TV Screen Cartoons",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61239-1997-94234-1-tv-screen-cartoons.jpg",
      "year": "1959",
      "publisher": "DC Comics",
      "Field7": "10 Issues"
    },
    {
      "title": "TV Stars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/48131-2962-57592-1-tv-stars.jpg",
      "year": "1978",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Twilight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/30204-4382-33594-1-twilight.jpg",
      "year": "1990",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Twilight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/4291701-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Twisted Metal 2",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/103617/2318947-tm2_comic_cover.png",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Two-Face: A Celebration of 75 Years",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6123846-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Two-Face: Year One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6988820-5378029222-78579.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Two-Gun Kid",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1068605-two_gun_kid_1.jpg",
      "year": "1948",
      "publisher": "Marvel",
      "Field7": "136 Issues"
    },
    {
      "title": "Two-Gun Kid: The Sunset Riders",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/1276062-tgksr1a.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Typhoid",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/13180/474730-17326_20061220230202_large.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Typhoid Fever",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6819243-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Typhoid Fever: Iron Fist",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6722012-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Typhoid Fever: Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6631662-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Typhoid Fever: X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6676205-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "U.S. 1",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/48135-3246-57596-1-u-s-1.jpg",
      "year": "1983",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "U.S.Agent",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2030466-01.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "U.S.Agent",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2703767-usagent.png",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "U.S.Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5628457-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "U.S.Avengers: American Intelligence Mechanics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5960934-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "U.S.Avengers: Cannonball Run",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6254379-02.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Adventures",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/1501786-ua1a.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Ultimate Annuals: Volume One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1287553-ult_ann1.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Annuals: Volume Two",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1287591-ult_ann2.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2548869-01a_cropped.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "18 Issues"
    },
    {
      "title": "Ultimate Avengers vs. New Ultimates",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6063/1662377-aaa.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Ultimate Avengers vs. New Ultimates: Death of Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3337504-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Captain America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/1601194-ultcap1.jpeg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Ultimate Captain America Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/599921-ultimate_captain_america_annual_01__zone_megan__pg01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Civil War: Spider-Ham",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/89481-18141-106287-1-ultimate-civil-war.png",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Comics Armor Wars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/40136/960145-uaw__001_000a.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Ultimate Comics Avengers by Mark Millar Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2352147-uc_avg_by_mm_omn.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Comics Avengers: Blade vs. the Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3445935-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Comics Avengers: Crime and Punishment",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1481003-ua_c_p.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Comics Avengers: Next Generation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031817-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Comics Captain America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031792-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Comics Doomsday",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031808-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Comics Hawkeye",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2034521-01a.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Ultimate Comics Hawkeye by Hickman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2168671-uc_hwk.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Comics Iron Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2650468-prev_img.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Ultimate Comics Iron Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515609-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Comics Iron Man: Armor Wars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1180428-ult.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Comics New Ultimates: Thor Reborn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1765333-uc_ult__thr_rbn.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Comics Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/105566/2006928-ultimate_spider_man_v2011__1__2011_11____page_1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "31 Issues"
    },
    {
      "title": "Ultimate Comics Spider-Man by Brian Michael Bendis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2205032-uc_spm_by_bnd1.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Ultimate Comics Spider-Man: Chameleons",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1550686-ucsm__chm.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Comics Spider-Man: Death of Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2050079-uc_spm__dosm.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Comics Spider-Man: Death of Spider-Man Fallout",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4150204-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Comics Spider-Man: Death of Spider-Man Prelude",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1904631-uc_spm__dosmp.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Comics Spider-Man: The New World According to Peter Parker",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1180446-ult.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Comics Thor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031791-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Comics Ultimates",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1992923-01a.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "31 Issues"
    },
    {
      "title": "Ultimate Comics Ultimates by Jonathan Hickman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2240887-uc_ult_by_jh.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Ultimate Comics Ultimates by Sam Humphries",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3135058-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Comics Ultimates: Disassembled",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3413421-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Comics Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2922895-01a.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Ultimate Comics Wolverine: Legacies",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3135059-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Comics X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6063/2012440-31630l.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "34 Issues"
    },
    {
      "title": "Ultimate Comics X-Men By Brian Wood",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3074000-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Ultimate Comics X-Men by Nick Spencer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2259826-uc_xmn_by_ns_1.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Ultimate Comics X: Origins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031818-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Comics: Divided We Fall, United We Stand",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3527410-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Daredevil and Elektra",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1627728-ul_dd_elk.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Daredevil/Elektra",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/108980/2294479-ultimate_daredevilelektra_01__2003_.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Ultimate Doom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56494/1580421-ultimatedoom01_001.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Ultimate Elektra",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/333780-20985-125640-1-ultimate-elektra.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Ultimate Elektra: Devil's Due",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1627742-ul_elk__dd.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5028067-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4572738-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Ultimate Enemy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1108948-ultimate_comics_enemy_1a.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Ultimate Extinction",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/85476-18067-105765-1-ultimate-extinction.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Ultimate Fallout",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/1906416-fallout.jpeg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Ultimate Fantastic Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/155010-10379-111709-1-ultimate-fantastic-f.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "60 Issues"
    },
    {
      "title": "Ultimate Fantastic Four Annual",
      "img": "https://comicvine1.cbsistatic.com/bundles/phoenixsite/images/core/loose/img_broken.png",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Ultimate Fantastic Four Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7132820-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Ultimate Fantastic Four Oversized Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/119711/2972276-1083-1.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Ultimate Fantastic Four: Crossover",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/449879-ultimate_fantastic_four_crossover_1_00.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Fantastic Four: Devils",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4656047-08.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Fantastic Four: Doom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68486/1822634-uf4_2_d.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Fantastic Four: Frightful",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3232165-06.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Fantastic Four: Ghosts",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4711903-10.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Fantastic Four: God War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3480321-07.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Fantastic Four: Inhuman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/449900-ultimate_fantastic_four_inhuman_1_00.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Fantastic Four: N-Zone",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68486/1822663-uf4_3_nz.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Fantastic Four: Salem's Seven",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4721203-11.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Fantastic Four: Silver Surfer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4666355-09.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Fantastic Four: The Fantastic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68486/1822626-uf4_1_tf.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Fantastic Four/Ultimate X-Men Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/557303-ultxff.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate FF",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3762613-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Ultimate FF: Strangest Ever",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4149769-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Galactus Trilogy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1564729-ult_glc_trl.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Galactus: Ultimate Extinction",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1619542-ugl_uex.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Galactus: Ultimate Nightmare",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1619531-ugl_unm.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Hulk Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/674316-uha_01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Hulk vs. Iron Man: Ultimate Human",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/119711/2926950-rvhhuhnegnngr_gnpwnp.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Human",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2548872-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Ultimate Iron Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1296148-ult_irm_1.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Iron Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/231160-19644-117841-1-ultimate-iron-man.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Ultimate Iron Man II",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1296150-ult_irm_2.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Iron Man II",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2771661-0000.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Ultimate Iron Man Ultimate Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1296131-ult_irm_uc.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Marvel Flip Magazine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/155010-10379-111709-1-ultimate-fantastic-f.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Marvel Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/103431/4752980-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Marvel Sampler",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/293764-20414-122119-1-ultimate-marvel.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Marvel Team-Up",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117127/3395669-ultimate%20spider-man%20and%20wolverine%20v1%20%231%20-%20page%201.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "16 Issues"
    },
    {
      "title": "Ultimate Marvel Team-Up: Ultimate Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1641231-umtu__uc.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Mystery",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1317147-ultimate_comics_mystery_1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Ultimate New Ultimates",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1145208-ultult001_dc21_lr_page1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Ultimate Nightmare",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/84262-18045-105693-1-ultimate-nightmare.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Ultimate Origins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/409791-21778-131323-1-ultimate-origins.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Ultimate Origins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1149088-ult.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Power",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2945155-ultimate_power__2006__01_page_00.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "9 Issues"
    },
    {
      "title": "Ultimate Power",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1564770-ult_pwr.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Power 1 Director's Cut",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2099791-director_s_cut_ultimate_power_v2007__1___part_1_of_9__2006_12____page_1.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Secret",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/84243-18046-105689-1-ultimate-secret.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Ultimate Secret: Ultimate Galactus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/440785-ultimate_secret_ultimate_galactus_1_00.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Secrets",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/449910-ultimate_secrets_1_00.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Six",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/7995/219712-19405-116253-1-ultimate-six.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "7 Issues"
    },
    {
      "title": "Ultimate Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/44573-7257-51619-1-ultimate-spider-man.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "134 Issues"
    },
    {
      "title": "Ultimate Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2311813-prev_img.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "31 Issues"
    },
    {
      "title": "Ultimate Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/34720/913777-ultsmv2001_cvrwrap_1.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "26 Issues"
    },
    {
      "title": "Ultimate Spider-Man Adventures: Halloween ComicFest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3726628-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Spider-Man Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/8692/193029-18223-110330-2-ultimate-spider-man.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Ultimate Spider-Man Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7206544-08.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Ultimate Spider-Man Hardcover",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/756810-usm1.jpeg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "11 Issues"
    },
    {
      "title": "Ultimate Spider-Man Infinite Comic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5254536-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "10 Issues"
    },
    {
      "title": "Ultimate Spider-Man Infinite Comic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117127/3551639-6146474912-DIG00.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Spider-Man Infinite Comic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4688500-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "24 Issues"
    },
    {
      "title": "Ultimate Spider-Man MGC",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2805510-ult01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Spider-Man Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2418928-uspm_omn1.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Spider-Man Premiere Comic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/2299953-ultimate_spider_man_premiere_comic_v2012__1__2012_5____page_1.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Spider-Man Super Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/193047-19138-114448-1-ultimate-spider-man.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Spider-Man: And His Amazing Friends",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3888687-20.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Spider-Man: Carnage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62870/1445856-11_carnage.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Spider-Man: Cats and Kings",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62870/1437160-8_cats_and_kings.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Spider-Man: Clone Saga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62870/1446065-17_clone_saga.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Spider-Man: Deadpool",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62870/1446059-16_deadpool.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Spider-Man: Death of A Goblin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3295860-19.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Spider-Man: Double Trouble",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62870/1435624-3_double_trouble.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Spider-Man: Hobgoblin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62870/1446017-13_hobgoblin.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Spider-Man: Hollywood",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62870/1445694-10_hollywood.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Spider-Man: Irresponsible",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62870/1437074-7_irresponsible.jpeg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Spider-Man: Learning Curve",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62870/1435607-2_learning_curve.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Spider-Man: Legacy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62870/1435633-4_legacy.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Spider-Man: Power & Responsibility Marvel Select",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7101027-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Spider-Man: Power and Responsibility",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62870/1435601-1_power.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Spider-Man: Public Scrutiny",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62870/1437017-5_public_scrutiny.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Spider-Man: Silver Sable",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62870/1446057-15_silver_sable.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Spider-Man: Superstars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62870/1445871-12_superstars.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Spider-Man: Ultimate Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6906056-7270735644-76112.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "7 Issues"
    },
    {
      "title": "Ultimate Spider-Man: Ultimate Knights",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62870/1446079-18_ultimate_knights.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Spider-Man: Ultimate Six",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62870/1445444-9_ultimate_six.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Spider-Man: Ultimatum",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4000522-22.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Spider-Man: Venom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62870/1437050-6_venom.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Spider-Man: War of the Symbiotes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3984711-21.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Spider-Man: Warriors",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62870/1446053-14_warriors.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Thor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1443654-prv6546_cov.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Ultimate Vision",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1564846-ult_vsn.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Vision",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/696624-issue_1.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Ultimate War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/253707-20075-119760-1-ultimate-war.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Ultimate Wolverine vs. Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1564816-ult_wlv_vs_hlk.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate Wolverine vs. Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/2963/104082-18408-107906-1-ultimate-wolverine-v.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Ultimate Wolverine vs. Hulk: Director's Cut",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/983021-61593_20060904125738_large.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate X",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/1114942-prv4338_cov.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Ultimate X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31599/2692821-ultimatex_men_1.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "101 Issues"
    },
    {
      "title": "Ultimate X-Men Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/154205-18892-111664-1-ultimate-x-men-annua.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Ultimate X-Men Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7186336-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "9 Issues"
    },
    {
      "title": "Ultimate X-Men: Absolute Power",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4296426-19.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate X-Men: Apocalypse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4288111-18.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate X-Men: Blockbuster",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62870/1412722-7_block_buster.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate X-Men: Cable",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4150205-16.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate X-Men: Cry Wolf",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62870/1413182-10_cry_wolf.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate X-Men: Hard Lessons",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62870/1415262-12_hard_lessons.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate X-Men: Hellfire and Brimstone",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62870/1411671-4_hellfire_and_brimstone.jpeg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate X-Men: Magical",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3888688-15.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate X-Men: Magnetic North",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3337506-13.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate X-Men: New Mutants",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62870/1412738-8_new_mutants.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate X-Men: Phoenix?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3416479-14.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate X-Men: Return of the King",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62870/1412648-6_return_of_the_king.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate X-Men: Return to Weapon X",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62870/1411592-2_return_to_weapon_x.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate X-Men: Sentinels",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4177286-17.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate X-Men: The Most Dangerous Game",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62870/1413242-11_the_most_dangerous_game.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate X-Men: The Tempest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62870/1413139-9_the_tempest.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate X-Men: The Tomorrow People",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62870/1411451-1_tomorrow_people.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate X-Men: Ultimate Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/935547-uxm.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Ultimate X-Men: Ultimate War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2342268-detail.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate X-Men: World Tour",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1412101-540863_scan0001_super.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate X-Men/Fantastic Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/111068/2270039-ultimate_x_men_fantastic_four.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate X-Men/Ultimate Fantastic Four Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/536919-ultannual.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimate X4",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/154493-18893-111698-1-ultimate-fantastic-f.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Ultimates",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4900436-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Ultimates 2",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/857243-ultramates2.jpeg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Ultimates 2",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5544331-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "10 Issues"
    },
    {
      "title": "Ultimates 2 (Variant Sketch Edition)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2099737-sketch_the_ultimates_2_v2005__1___gods___monsters__2005_2____page_1.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimates 2: Eternity War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6153023-02.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimates 2: Troubleshooters",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5909127-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimates 3: Who Killed the Scarlet Witch?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1296112-ult3__wktsw.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimates Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2670905-01.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Ultimates Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1045558-ult.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimates: Omniversal: Civil War II",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5601648-02.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimates: Omniversal: Start With the Impossible",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5302055-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimatum",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1034839-ult.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimatum",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/603995-ultimatum__001_000a.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Ultimatum Companion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1893999-ult_cmp.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimatum: Fantastic Four Requiem",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/905770-four.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimatum: March On Ultimatum",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6755374-4731317908-74118.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimatum: Requiem",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4909315-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimatum: Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1090031-ultimatum_spider_man_premiere_hc.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimatum: Spider-Man - Requiem",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/34720/841238-prv2822_cov.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Ultimatum: X-Men Requiem",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/906106-xmen.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultimatum: X-Men/Fantastic Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4897036-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ultragirl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4405168-01.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Ultron",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2971138-01au.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4851266-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "30 Issues"
    },
    {
      "title": "Uncanny Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4354873-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Uncanny Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2638126-prev_img.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "26 Issues"
    },
    {
      "title": "Uncanny Avengers Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4912447-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny Avengers Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3790773-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny Avengers Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4372528-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny Avengers: Avenge The Earth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4092326-04.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny Avengers: AXIS Prelude",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4318769-05.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny Avengers: Civil War II",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5759799-03.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny Avengers: Counter-Evolutionary",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4774974-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny Avengers: Ragnarok Now",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031839-03.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny Avengers: The Apocalypse Twins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3396774-02.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny Avengers: The Red Shadow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3003192-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny Avengers: Ultron Forever",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4584133-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny Avengers: Unity - Lost Future",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5151824-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny Avengers: Unity: Red Skull",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5973448-04.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny Avengers: Unity: Stars and Garters",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6302424-05.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny Avengers: Unity: The Man Who Fell To Earth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5442652-02.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny Inhumans",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4864668-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "22 Issues"
    },
    {
      "title": "Uncanny Inhumans",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7231724-9656916608-82887.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Uncanny Inhumans Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5396241-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny Inhumans: Civil War II",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5590743-03.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny Inhumans: IvX",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5863245-04.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny Inhumans: The Quiet Room",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5368020-02.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny Inhumans: Time Crush",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5130337-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny Origins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/44110-7197-51337-1-uncanny-origins.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "14 Issues"
    },
    {
      "title": "Uncanny Origins: Mutants & Monsters",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7075992-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny Origins: Myth & Magic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7184475-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny Tales",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/48147-2646-57608-1-uncanny-tales.jpg",
      "year": "1973",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Uncanny X-Force",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2825935-prv14916_cov.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "17 Issues"
    },
    {
      "title": "Uncanny X-Force",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6754/1439233-uncannyxforce1a.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "37 Issues"
    },
    {
      "title": "Uncanny X-Force by Rick Remender",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7086520-2266431697-79791.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Uncanny X-Force by Rick Remender Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3682915-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Force: Deathlok Nation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1941818-uxf__dn.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Force: Final Execution",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2683842-__kgrhqfhje4fb4bqjn__bqk0y6v5k___60_57.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Uncanny X-Force: Let It Bleed",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3210081-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Force: Otherworld",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2413663-uxfc__otw.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Force: The Apocalypse Solution",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1840771-uxf__tas.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Force: The Apocalypse Solution",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2611942-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Force: The Dark Angel Saga, Book One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2099876-uxf__das1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Force: The Dark Angel Saga, Book Two",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2240890-uxf__das2.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Force: The Great Corruption",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3970725-03.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Force: Torn and Frayed",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3455889-02.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/2065801-uncx2011001_dc11_lr.png",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "20 Issues"
    },
    {
      "title": "Uncanny X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5033219-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Uncanny X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6684855-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "22 Issues"
    },
    {
      "title": "Uncanny X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3504551-01a.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "36 Issues"
    },
    {
      "title": "Uncanny X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4984322-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "19 Issues"
    },
    {
      "title": "Uncanny X-Men '95",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117127/3010222-the_x-men_annual_1995.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men '96",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6849102-1767978285-75854.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men '97",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117127/3010272-b7_94448_0_uncannyxmenannualvol11997rifts.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men / Fantastic Four '98",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117127/3010169-1061033-star_trek_alien_spotlight_cardassians__2009____page_1.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men #266: Facsimile Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7161566-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men 1999",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117127/3010672-uncanny%20x-men%20%23199900%20%281999%29%20-%20page%201.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men 2000",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117127/3010255-a6_94451_0_theuncannyxmenannual0nn.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men 2001",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26954/508023-2001_unc_a.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5533020-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4265341-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6771039-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/104032-18405-107902-1-uncanny-x-men-annual.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Uncanny X-Men by Kieron Gillen",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2255260-uxm_by_kg1.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Uncanny X-Men by Kieron Gillen: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6807835-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men First Class: Hated and Feared",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5082189-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men First Class: Knights of Hykon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6697154-9205203165-73057.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men in Days of Future Past",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/14542/1343496-1.jpg",
      "year": "1989",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men Masterworks",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11114/111146046/4033906-scn_0001.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1293351-xmn_omn.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Uncanny X-Men Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3882784-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men: Breaking Point",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3888690-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men: Bright New Mourning",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4136285-06.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men: Broken",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3426360-02.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men: Cyclops and Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6974995-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Uncanny X-Men: Divided We Stand",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/960641-xmn.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men: Dominant Species",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4079260-02.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men: Extremists",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/986633-uxm.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men: First Class",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/872838-uxm___fc_01_page_001.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "8 Issues"
    },
    {
      "title": "Uncanny X-Men: First Class Giant-Size Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/32578/832827-001.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men: Holy War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4098404-01.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men: Hope",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4062269-01.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men: Lovelorn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/992513-uxm.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men: Manifest Destiny",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4845312-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men: Official Index to the Marvel Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/13/135797/2974246-xmenindex.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men: Poptopia",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70204/1484228-poptopia.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men: Quarantine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3428938-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men: Revolution",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3148295-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men: Rise and Fall of the Shi'ar Empire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2934634-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men: She Lies With Angels",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4121336-05.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men: Sisterhood",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3920591-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men: Storyville",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4934630-06.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men: Superior - Waking From The Dream",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5673994-03.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men: Superior: Apocalypse Wars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5542877-02.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men: Superior: IvX",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5973449-04.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men: Superior: Survival of the Fittest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5302056-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men: The Birth of Generation Hope",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031825-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men: The Coming of Bishop",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1372795-bish.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men: The Complete Collection By Matt Fraction",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7093824-9172058560-80412.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Uncanny X-Men: The Draco",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4115835-04.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men: The Good, The Bad, The Inhuman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3809651-03.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men: The Heroic Age",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1298651-heroic_age.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men: The New Age",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3642070-01.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Uncanny X-Men: The Omega Mutant",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4471838-05.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men: Vs. S.H.I.E.L.D.",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4107879-04.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men: Winter's End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6838569-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men: X-Men Disassembled",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6850886-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncanny X-Men/Iron Man/Nova: No End In Sight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4188640-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncharted",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3608389-01.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncharted",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2106942-__kgrhqj__loe64ncncfkbo1rs7iiv___60_3.jpeg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Uncle Sam and the Freedom Fighters",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2078423-uncle_sam.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Uncle Sam and the Freedom Fighters",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/497906-000.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "8 Issues"
    },
    {
      "title": "Uncle Sam and the Freedom Fighters",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3664/199229-19194-114959-1-uncle-sam-and-the-fr.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "8 Issues"
    },
    {
      "title": "Uncle Sam and the Freedom Fighters: Brave New World",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/32599/2588524-1.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Under the Moon: A Catwoman Tale",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6913013-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Under the Moon: A Catwoman Tale FCBD 2019 Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6919267-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Underworld",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/685513-u1.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Underworld",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/26007-3820-28891-1-underworld.jpg",
      "year": "1987",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Underworld Unleashed",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2078441-underworld_unleashed.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Underworld Unleashed",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/37189-5526-41625-1-underworld-unleashed.jpg",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Underworld Unleashed: Abyss - Hell's Sentinel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/13536/505340-comics_upl1.png",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Underworld Unleashed: Apokolips",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/13536/505338-comics_upl1.png",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Underworld Unleashed: Batman - Devil's Asylum",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/13536/504930-comics_upl1.png",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Underworld Unleashed: Patterns of Fear",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/13536/505341-comics_upl1.png",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Union Jack",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/3107829-detail.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Union Jack",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/64665-11139-97662-1-union-jack.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Union Jack",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2945169-union_jack__001_000.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Union Jack: London Falling",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4462847-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "United States vs. Murder, Inc.",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6595990-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "United States vs. Murder, Inc.",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6965857-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Universal Studios Islands of Adventure Under Siege",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/999805-devil_may_cry__3__2004____page_1.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Universe X",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/51944-9149-69360-1-universe-x.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "14 Issues"
    },
    {
      "title": "Universe X Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/327730-20892-125067-1-universe-x-omnibus.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Universe X Sketchbook",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/2180074-9326291_1.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Universe X Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3038547-01.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Universe X Special: 4",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/634169-4.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Universe X Special: Beasts",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/636118-beasts.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Universe X Special: Cap",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/634253-cap.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Universe X Special: Iron Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/636855-iron_men.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Universe X Special: Spidey",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/634211-spi.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Universe X, Volume One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1252644-unvx1.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Universe X, Volume Two",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1254160-unvx2.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Unknown Soldier",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/15546-2895-17327-1-unknown-soldier.jpg",
      "year": "1977",
      "publisher": "DC Comics",
      "Field7": "64 Issues"
    },
    {
      "title": "Unlimited Access",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/39472-6041-44410-1-unlimited-access.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Untold Legend of Captain Marvel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/65055-11191-98052-1-untold-legend-of-cap.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Untold Tales of Blackest Night",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1453291-scanned_image_6.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Untold Tales of Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/36997-5562-41388-1-untold-tales-of-spid.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "26 Issues"
    },
    {
      "title": "Untold Tales of Spider-Man '96",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/47697/2114083-_96.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Untold Tales of Spider-Man '97",
      "img": "https://comicvine1.cbsistatic.com/bundles/phoenixsite/images/core/loose/img_broken.png",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Untold Tales of Spider-Man Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2305679-utospm_omn.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Untold Tales of Spider-Man: Strange Encounters",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5914357-01.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Untold Tales Of The New Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/357776-21229-127618-1-untol-tales-of-the-n.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Untold Tales of the New Universe: D.P.7",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3415620-01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Untold Tales of the New Universe: Justice",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/450821-untold_tales_of_the_new_universe___justice.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Untold Tales of the New Universe: Nightmask",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3415619-01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Untold Tales of the New Universe: Psi-Force",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3415618-01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Untold Tales of the New Universe: Star Brand",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3415617-01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "USA Comics 70th Anniversary Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3755871-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "V",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/22613-3468-25230-1-v.jpg",
      "year": "1985",
      "publisher": "DC Comics",
      "Field7": "18 Issues"
    },
    {
      "title": "V for Vendetta",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/27061-4034-30027-1-v-for-vendetta.jpg",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "10 Issues"
    },
    {
      "title": "Valkyrie",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/1430359-valkyrie_vol_2_1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Valkyrie",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30638/718114-valkyrie1.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Valkyrie: Jane Foster",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7016219-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "7 Issues"
    },
    {
      "title": "Valkyrie: Jane Foster: The Sacred and the Profane",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7220171-01.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Valor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/32610-4759-36377-1-valor.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "23 Issues"
    },
    {
      "title": "Vampire Tales",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6345848-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Vampires: The Marvel Undead",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/111946/2094728-mv_cover.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Vault of Evil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/48159-2648-57621-1-vault-of-evil.jpg",
      "year": "1973",
      "publisher": "Marvel",
      "Field7": "23 Issues"
    },
    {
      "title": "Vault of Spiders",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6666606-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Vengeance",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3415723-01a.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Vengeance",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/1894142-vengeance1.jpeg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Vengeance of Moon Knight: Killed, Not Dead",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5245487-02.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Vengeance of Moon Knight: Shock and Awe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1300711-vomk__sao.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Vengeance of the Moon Knight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/955457-prv3381_cov.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "10 Issues"
    },
    {
      "title": "Venom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/63944-11068-96940-1-venom.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "18 Issues"
    },
    {
      "title": "Venom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5544334-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "22 Issues"
    },
    {
      "title": "Venom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/87073/1710738-venom01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "47 Issues"
    },
    {
      "title": "Venom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6418939-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "22 Issues"
    },
    {
      "title": "Venom - Marvel Legacy Primer Pages",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6059550-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom & X-Men: Poison-X",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6437982-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom 2099",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7169475-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom Adventures",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6606825-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7023052-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6651010-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom by Cullen Bunn: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6848090-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom by Daniel Way Ultimate Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6843040-7778206020-75962.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom by Donny Cates",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7135765-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom by Donny Cates: Absolute Carnage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7236771-03.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom by Donny Cates: Rex",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6694367-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom by Donny Cates: The Abyss",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6904590-02.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom by Rick Remender",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2022545-vnm_by_rr1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom By Rick Remender: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4608749-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Venom Evolution of an Icon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849834-__addme___marvel_legends_evolution_of_an_icon___venom_v9999___page_1.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom Super Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15317/493162-venomss1.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom Unleashed",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7059444-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom vs. Carnage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/1346318-69822_20061107212853_large.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom vs. Carnage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1513/86901-18079-105908-1-venom-vs-carnage.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Venom: Along Came A Spider",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3415746-01.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Venom: Along Came A Spider...",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6570622-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom: Carnage Unleashed",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/56288-9522-78411-1-venom-carnage-unlea.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Venom: Carnage Unleashed",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6144004-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom: Circle of Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2413671-vnm__cof.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom: Dark Origin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/984640-venom.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom: Dark Origin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/486578-venomdarkorigin1.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Venom: Deathtrap: The Vault",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1126765-cover.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom: Devil's Pack",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2987978-06.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom: First Host",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730783-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom: First Host",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6582733-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Venom: Flashpoint",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/97009/1957554-venomflashpoint.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom: Funeral Pyre",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3415730-01.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Venom: Homecoming",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5897103-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom: Lethal Protector",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4897039-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom: Lethal Protector",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/2165556-venom_lethal_protector__1993__1a.jpeg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Venom: Lethal Protector: Blood In The Water",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6254380-03.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom: License to Kill",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3415751-01.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Venom: Nights of Vengeance",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3415754-01.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Venom: On Trial",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3415740-01.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Venom: Planet of the Symbiotes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6606827-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom: Run",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1179959-vnm.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom: Seed of Darkness",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11863/522518-92691449094.1_1_.gif",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom: Separation Anxiety",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3415758-01.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Venom: Separation Anxiety",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5601651-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom: Shiver",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1179949-vnm.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom: Sign of the Boss",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3415761-01.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Venom: Sinner Takes All",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3415768-01.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Venom: Space Knight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4923822-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "13 Issues"
    },
    {
      "title": "Venom: Space Knight - Enemies And Allies",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5571001-02.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom: Space Knight: Agent of the Cosmos",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5324294-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom: The End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7212657-01.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom: The Enemy Within",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6033993-7132658136-56163.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom: The Enemy Within",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3415775-01.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Venom: The Finale",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3415778-01.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Venom: The Hunger",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/74904-9525-78424-1-venom-the-hunger.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Venom: The Hunted",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15659/3279621-venom-the_hunted%231-cover.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Venom: The Land Before Crime",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6113436-02.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom: The Land Where Killers Dwell",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4909317-06.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom: The Mace",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3415784-01.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Venom: The Madness",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3415743-01.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Venom: The Nativity",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6614347-04.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom: The Savage Six",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3445934-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom: Tooth and Claw",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3415787-01.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Venom: Tooth and Claw",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6606828-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom: Toxin With A Vengeance!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3580569-05.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom: Twist",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5260001-01.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom: War of the Realms",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7066227-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venom/Deadpool: What If?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1686694-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venomized",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6364090-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Venomized",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6527903-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venomnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/6568221-ven1a.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Venomverse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6203603-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Venomverse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6039809-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Venomverse: War Stories",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6045017-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Vertigo Sampler",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1528339-539883.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Very Best of Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/908991-very_best_sm.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Vext",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/548287-vext1.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Victorian Undead",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3415796-01.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Victorian Undead II",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11113/111139104/4478698-1163943.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Vigilante",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/13657/460719-vigilante.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Vigilante",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/657838-vigilante.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Vigilante",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/21166-3208-23602-1-vigilante-the.jpg",
      "year": "1983",
      "publisher": "DC Comics",
      "Field7": "50 Issues"
    },
    {
      "title": "Vigilante Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/22460-3469-25057-1-vigilante-annual.jpg",
      "year": "1985",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Vigilante by Marv Wolfman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5797781-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Vigilante: City Lights, Prairie Justice",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2078444-vigilante.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Vigilante: City Lights, Prairie Justice",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4405208-01.jpg",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Vigilante: Southland",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5501871-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Vigilante: Southland",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6254381-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Viking Glory: The Viking Prince",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52074/1665398-vikingglory001.jpg",
      "year": "1991",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Villains for Hire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/101073/2116029-prv10658_cov.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Villains for Hire: Knight Takes King",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2414742-vfh__ktk.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Villains United",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1658124-villains_united.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Villains United",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/2532/194494-18403-114548-1-villains-united.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Villains United: Infinite Crisis Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/316760-20668-123921-1-villains-united-inf.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Viper",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/41802/1459382-viper_1_cover.jpg",
      "year": "1994",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Virtua Fighter",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11126/111269625/6040952-0130335563-latest",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Vision",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6223171-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Vision",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4887932-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Vision and the Scarlet Witch",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/20271-3155-22612-1-vision-and-the-scarl.jpg",
      "year": "1982",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Vision Director's Cut",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5897104-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Vision: Little Better Than A Beast",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5571002-02.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Vision: Little Worse Than A Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5302057-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Vision: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7144097-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Vision: Yesterday and Tomorrow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4471495-01.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Vixen: Return of the Lion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1062666-vixen.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Vixen: Return of the Lion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/565588-0007.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Voodoo",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2089253-01.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "13 Issues"
    },
    {
      "title": "Voodoo: Killer in Me",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498189-02.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Voodoo: What Lies Beneath",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3485606-01.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Vote Loki",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5264041-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Vote Loki",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5478483-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wacky Raceland",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5738074-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wacky Raceland",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5253700-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Wakanda Forever",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6657951-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wakanda Forever Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6570624-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wakanda Forever: X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6527906-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Walt Disney's Snow White and the Seven Dwarfs",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/37015/2939071-snow_white1.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wanderers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3664/346078-21090-126628-1-the-wanderers.jpg",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "13 Issues"
    },
    {
      "title": "Wanted, The World's Most Dangerous Villains",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70196/1282965-wanted_01_01.jpg",
      "year": "1972",
      "publisher": "DC Comics",
      "Field7": "9 Issues"
    },
    {
      "title": "War is Hell",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/11560-2649-12851-1-war-is-hell.jpg",
      "year": "1973",
      "publisher": "Marvel",
      "Field7": "15 Issues"
    },
    {
      "title": "War Is Hell",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6771042-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "War Machine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/666696-war_machine__000.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "13 Issues"
    },
    {
      "title": "War Machine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/48226-5336-57689-1-war-machine.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "26 Issues"
    },
    {
      "title": "War Machine Classic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1469745-wmc_cls.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "War Machine: Ashcan Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11113/111133305/4476790-war%20machine%20ashcan%20edition%20-%20page%201.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "War Machine: Dark Reign",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1157245-war_machine_volume_2_dark_reign_tpb.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "War Machine: Iron Heart",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1278624-wm.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "War of Kings",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1237343-wok.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "War of Kings",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/740850-wok_01_page_001.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "War of Kings Aftermath: Realm of Kings Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5679362-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "War of Kings Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5514809-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "War of Kings Prelude: Road To War of Kings Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5790277-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "War of Kings Saga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/670062-4871_20080221081833_large.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "War of Kings: Ascension",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/765039-001.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "War of Kings: Darkhawk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/704610-war_of_kings_darkhawk_01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "War of Kings: The Savage World of Skaar",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3199937-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "War of Kings: Warriors",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4621115-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "War of Kings: Warriors",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/871012-war_of_kings___warriors_01_pg_01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "War of Kings: Who Will Rule?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/952412-wokwwr_001.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "War of the Gods",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/31110-4572-34624-1-war-of-the-gods.jpg",
      "year": "1991",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "War of the Green Lanterns: Aftermath",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1949085-01a.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "War of the Green Lanterns: Aftermath",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100559/2557935-warofthegreenlanternsaftermath.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "War of the Realms",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7039281-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "War of the Realms",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6875025-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "War of the Realms Magazine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6863654-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "War of the Realms Omega",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7000514-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "War of the Realms Prelude",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6838571-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "War of the Realms Strikeforce",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7047366-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "War of the Realms Strikeforce: The Dark Elf Realm",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6913183-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "War of the Realms Strikeforce: The Land of Giants",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6938347-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "War of the Realms Strikeforce: The War Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6931811-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "War of the Realms: Giant-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7031478-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "War of the Realms: Journey Into Mystery",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6883300-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "War of the Realms: Journey Into Mystery",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7054380-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "War of the Realms: New Agents of Atlas",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7059449-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "War of the Realms: New Agents of Atlas",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6922224-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "War of the Realms: Punisher",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6893215-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "War of the Realms: Spider-Man & the League of Realms",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6931809-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "War of the Realms: Spider-Man/Daredevil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7068249-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "War of the Realms: The Punisher",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7101029-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "War of the Realms: Uncanny X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6903206-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "War of the Realms: Uncanny X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7125481-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "War of the Realms: War Scrolls",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6893217-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "War that Time Forgot",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/386795-21549-130161-1-the-war-that-time-fo.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Warlock",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2618088-power_of_warlock01.jpg",
      "year": "1972",
      "publisher": "Marvel",
      "Field7": "15 Issues"
    },
    {
      "title": "Warlock",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11119/111198274/4443689-199811%20warlock%20v2%20%231%20-%20page%201.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Warlock",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5551/698704-6b16db20_aa28_409b_b7dc_0c3672c42721.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Warlock",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/20349-3156-22697-1-warlock.jpg",
      "year": "1982",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Warlock",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/48262-4817-57728-1-warlock.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Warlock",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/62859-11006-95855-1-warlock.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "9 Issues"
    },
    {
      "title": "Warlock and the Infinity Watch",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/31772-4818-35385-1-warlock-and-the-infi.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "42 Issues"
    },
    {
      "title": "Warlock By Jim Starlin: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5841723-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Warlock Chronicles",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2621902-warlock_chronicles__1___page_1.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "8 Issues"
    },
    {
      "title": "Warlock: Second Coming",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6570625-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Warlord",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/14285-2850-15981-1-warlord.jpg",
      "year": "1976",
      "publisher": "DC Comics",
      "Field7": "133 Issues"
    },
    {
      "title": "Warlord",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/760751-1.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "16 Issues"
    },
    {
      "title": "Warlord",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/31649-4760-35243-1-warlord.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Warlord",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1283191-warlord_v2006__1__2006_4____page_1.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "10 Issues"
    },
    {
      "title": "Warlord Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/19508-3126-21779-1-warlord-annual.jpg",
      "year": "1982",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Warriors Three",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1491896-warriors_three_1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Warriors Three: Dog Day Afternoon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1840798-wrs_3__dda.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wasteland",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/41983-3821-47652-1-wasteland.jpg",
      "year": "1987",
      "publisher": "DC Comics",
      "Field7": "18 Issues"
    },
    {
      "title": "Watchmen",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/80654/2184494-watchmen__1_pg_00.jpg",
      "year": "1986",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Watchmen",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/53928/1027294-watchmen1.jpg",
      "year": "1987",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Watchmen (DC Modern Classics Edition)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6862205-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Watchmen Annotated",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6173023-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Watchmen Companion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7182289-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Watchmen Noir",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5544336-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Watchmen: The Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6164529-1006175967-60391.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "WCW S.L.A.M. Force",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111129651/3444754-slam%20force%20%231%20-%20page%201.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "WCW: World Championship Wrestling",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/19327/360552-21251-127914-1-wcw-world-champions.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "We Are Robin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4644301-warb-cv1-ds-4b33f.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "We Are Robin: Jokers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5479442-02.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "We Are Robin: The Vigilante Business",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5120539-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Weapon H",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6339724-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Weapon H: AWOL",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6666608-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Weapon H: War For Weirdworld",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6863655-02.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Weapon Omega",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1967786-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Weapon Plus: World War IV",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7226419-01.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Weapon X",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5797782-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "27 Issues"
    },
    {
      "title": "Weapon X",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/28071/1426571-weapon_x.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Weapon X",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/36353-5564-40598-1-weapon-x.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Weapon X",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/103448-18390-107835-1-weapon-x.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "29 Issues"
    },
    {
      "title": "Weapon X - Marvel Legacy Primer Pages",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6148435-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Weapon X Noir",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1248666-p00001.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Weapon X: Days of Future Now",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5245488-01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Weapon X: Days of Future Now",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1036797-weapon_x_days_of_future_now_01_image001.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Weapon X: First Class",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2809971-weapon_x__001.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Weapon X: Modern Warfare",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6477338-03.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Weapon X: Russian Revolution",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6666609-04.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Weapon X: The Draft",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1595776-wpn_x_td.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Weapon X: The Draft - Agent Zero",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3417072-01.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Weapon X: The Draft - Kane",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3417073-01.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Weapon X: The Draft - Marrow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3417074-01.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Weapon X: The Draft - Sauron",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3417075-01.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Weapon X: The Draft - Wild Child",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3417076-01.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Weapon X: The Hunt For Weapon H",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6302430-02.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Weapon X: The Return Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6406911-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Weapon X: The Underground",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1595820-wpn_x__tu.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Weapon X: Weapon X-Force",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6779341-05.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Weapon X: Weapons of Mutant Destruction Prelude",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6034454-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Weapons of Mutant Destruction",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6113438-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Weapons of Mutant Destruction: Alpha",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5909134-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Web of Black Widow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7059450-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Web of Scarlet Spider",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2451938-webss1.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Web of Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51438/991644-web_of_spider_man__1_cover.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Web of Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4087937-wosm1nm92m084.jpg",
      "year": "1985",
      "publisher": "Marvel",
      "Field7": "131 Issues"
    },
    {
      "title": "Web of Spider-Man Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/72778-3520-77992-1-web-of-spider-man-an.jpg",
      "year": "1985",
      "publisher": "Marvel",
      "Field7": "10 Issues"
    },
    {
      "title": "Web of Spider-Man Super Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/19859/560628-web_of_spider_man_super_special_1_front.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Web of Venom: Carnage Born",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6695400-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Web of Venom: Cult of Carnage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6883302-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Web of Venom: Funeral Pyre",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7016220-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Web of Venom: The Good Son",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7219910-01.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Web of Venom: Ve'Nam",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6582736-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Web of Venom: Venom Unleashed",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6753311-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Web Warriors",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4900440-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "11 Issues"
    },
    {
      "title": "Web Warriors of The Spider-Verse: Electroverse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5199931-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Web Warriors of the Spider-Verse: Spiders Vs.",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5590745-02.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Webspinners: Tales of Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/54590-9375-75623-1-webspinners-tales-o.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "18 Issues"
    },
    {
      "title": "Wednesday Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2030483-01.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Wednesday Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1964056-01.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Weird Mystery Tales",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/2263958-wei1.jpg",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Weird Mystery Tales",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/11126-2559-12317-1-weird-mystery-tales.jpg",
      "year": "1972",
      "publisher": "DC Comics",
      "Field7": "24 Issues"
    },
    {
      "title": "Weird Secret Origins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1652760-wso.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Weird War Tales",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1391785-weird_war_tales_1.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Weird War Tales",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/10579-2507-11651-1-weird-war-tales.jpg",
      "year": "1971",
      "publisher": "DC Comics",
      "Field7": "124 Issues"
    },
    {
      "title": "Weird Western Tales",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/11079-2560-12254-1-weird-western-tales.jpg",
      "year": "1972",
      "publisher": "DC Comics",
      "Field7": "60 Issues"
    },
    {
      "title": "Weird Wonder Tales",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/12402-2650-13897-1-weird-wonder-tales.jpg",
      "year": "1973",
      "publisher": "Marvel",
      "Field7": "22 Issues"
    },
    {
      "title": "Weird Worlds",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/11284-2561-12506-1-weird-worlds.jpg",
      "year": "1972",
      "publisher": "DC Comics",
      "Field7": "10 Issues"
    },
    {
      "title": "Weird Worlds",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1602170-weird_worlds__001.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Weirdworld",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4483996-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Weirdworld",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4613231-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Weirdworld",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4955677-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Weirdworld: The Dragonmaster of Klarn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7000515-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Weirdworld: Warzones!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4955678-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Weirdworld: Where Lost Things Go",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5351448-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Welcome Back, Kotter",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/15111-2851-16853-1-welcome-back-kotter.jpg",
      "year": "1976",
      "publisher": "DC Comics",
      "Field7": "10 Issues"
    },
    {
      "title": "Welcome to Tranquility",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124034/2747110-welcome_to_tranquility_v2007_001__2007__pagecover.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Werewolf by Night",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/11278-2584-12500-1-werewolf-by-night.jpg",
      "year": "1972",
      "publisher": "Marvel",
      "Field7": "43 Issues"
    },
    {
      "title": "Werewolf by Night",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/2747/114561-18541-108956-1-werewolf-by-night.JPG",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Werewolf By Night Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4838329-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Werewolf By Night: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6080343-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "West Coast Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/22146-3372-24709-1-west-coast-avengers.jpg",
      "year": "1984",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "West Coast Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6570626-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "10 Issues"
    },
    {
      "title": "West Coast Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/23324-3521-26002-1-west-coast-avengers.jpg",
      "year": "1985",
      "publisher": "Marvel",
      "Field7": "46 Issues"
    },
    {
      "title": "West Coast Avengers Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2595358-6c_100014_0_westcoastavengersvol2annual1on.jpg",
      "year": "1986",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "West Coast Avengers: Best Coast",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6807836-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "West Coast Avengers: City of Evils",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6981435-02.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Western Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27783/1261850-westerndc_1.jpg",
      "year": "1948",
      "publisher": "DC Comics",
      "Field7": "85 Issues"
    },
    {
      "title": "Western Gunfighters",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/9960-2479-10964-1-western-gunfighters.jpg",
      "year": "1970",
      "publisher": "Marvel",
      "Field7": "33 Issues"
    },
    {
      "title": "Western Kid",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/10763-2523-11854-1-western-kid.jpg",
      "year": "1971",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Western Team-Up",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52212/998735-westernteam_up1_11_73_ride_the_lawless_land_.jpg",
      "year": "1973",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wha...Huh?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9338/318994-20712-124231-1-wha--huh.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If Aunt May Had Died Instead of Uncle Ben?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23221/1414174-1413521_what_if_3f_vol_3_4_1__super_1_.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If Dr Doom Had Become the Thing?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/14661/299435-20455-122437-1-what-if-dr-doom-had.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If General Ross Had Become The Hulk?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/36359/1058155-21347_20051227230751_large.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If Jessica Jones Had Joined the Avengers?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/440810-what_if_jessica_jones_joined_shield_1_00.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If Karen Page Had Lived?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2769215-www.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If Magneto Had Formed The X-Men With Professor X?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48343/888200-wi.gif",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If: Thor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/58908/1102023-what_if_thor__1__2006____page_1.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/15442-2918-17208-1-what-if-.jpg",
      "year": "1977",
      "publisher": "Marvel",
      "Field7": "47 Issues"
    },
    {
      "title": "What If? Age of Ultron",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3732899-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "What If? Age of Ultron",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4527088-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Annihilation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2769352-what_if_annihilation_01__2007___minutemen_darthscanner__001.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Astonishing X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1071329-prv4111_cov.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? AVX",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3145511-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "What If? AvX",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3826107-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Captain America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66501/1231470-p00001.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Civil War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6544276-9545664932-70290.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Civil War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2770947-what_if_civil_war__2007___minutemen_darthscanner__001.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Classic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/984885-what_if.gif",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "7 Issues"
    },
    {
      "title": "What If? Classic: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6760851-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "What If? Daredevil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66501/1231495-p00001__2_.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Daredevil vs. Elektra",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/1061828-prv4046_cov.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Dark Reign",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71941/1578637-cov.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Fallen Son",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/673944-wi_fs_01_001.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Fantastic Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2812043-acvr.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Featuring Avengers Disassembled",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2777330-acvr.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Ghost Rider",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6651012-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? House Of M",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/642107-page00a.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Infinity",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5022627-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Infinity - Dark Reign",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4876898-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Infinity - Guardians of the Galaxy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4864669-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Infinity - Inhumans",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4838332-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Infinity - Thanos",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4838333-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Infinity - X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4851272-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What if? Iron Man: Demon In An Armor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1585650-what_if_iron_man_0001_copy.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Magik",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6666611-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Newer Fantastic Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2759611-wi_nff_01_001.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Planet Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/108980/2198487-what_if___planet_hulk__1__2007_.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Secret Invasion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031826-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Secret Invasion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48343/1048939-num_risation0002.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Secret Wars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1002385-whif.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Secret Wars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2759605-what_if___secret_wars_001.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1058920-batman___unseen__5__of_5___2010____page_1.jpg",
      "year": "1988",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71941/1564246-000cover.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6631664-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Spider-Man House of M",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1071333-prv4112_cov.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Spider-Man Vs. Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/293102-20410-122073-1-what-if-spider-man.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Spider-Man: Back in Black",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/657144-what_if___back_in_black_001.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Spider-Man: The Other",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/619002-spider_other.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Sub-Mariner",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/59000/1175350-p00001___what_if_sub_mariner__1.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? The Punisher",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6640656-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Thor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6657952-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? With Great Power",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6863656-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2812039-acvr.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What if? Wolverine: Enemy of the State",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2777325-what_if___wolverine_enemy_of_the_state_01___page_01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? Wolverine: Father",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/1552450-prev_img.jpeg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? World War Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1055971-what_if_world_war_hulk.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6631666-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? X-Men - Rise and Fall of the Shi'Ar Empire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2770938-what_if_dcp_0000.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? X-Men: Age Of Apocalypse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/653946-what_if.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If? X-Men: Deadly Genesis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/653999-deadly.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If?: Dark Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6523700-2220716060-69774.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If?: Event Horizon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3874310-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If?: Mirror Mirror",
      "img": "https://comicvine1.cbsistatic.com/bundles/phoenixsite/images/core/loose/img_broken.png",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What If...?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/28344-4249-31454-1-what-if-.jpg",
      "year": "1989",
      "publisher": "Marvel",
      "Field7": "116 Issues"
    },
    {
      "title": "What If...?: Why Not?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5847542-01.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "What The--?!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/42738-4079-48866-1-what-the--.jpg",
      "year": "1988",
      "publisher": "Marvel",
      "Field7": "26 Issues"
    },
    {
      "title": "Wheely Nutz",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/5072149-whe4.jpg",
      "year": "1978",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Where Creatures Roam",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/9911-2480-10911-1-where-creatures-roam.jpg",
      "year": "1970",
      "publisher": "Marvel",
      "Field7": "8 Issues"
    },
    {
      "title": "Where in the World Is Carmen Sandiego?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/47703/2468339-where_in_the_world_is_carmen_sandiego_vol_1_1.jpg",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Where Monsters Dwell",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4584135-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Where Monsters Dwell",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/9642-2481-10634-1-where-monsters-dwell.jpg",
      "year": "1970",
      "publisher": "Marvel",
      "Field7": "38 Issues"
    },
    {
      "title": "Where Monsters Dwell: The Phantom Eagle Flies the Savage Skies",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4963481-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "White Tiger",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/346830-18155-126693-1-white-tiger.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "White Tiger: A Hero's Compulsion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1059133-107814_20080320133357_large.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Who's Who in Star Trek",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/308916-20556-123079-1-who-s-who-in-star-tr.jpg",
      "year": "1987",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Who's Who in the DC Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/353061-19954-127227-1-who-s-who-in-the-dc.jpg",
      "year": "1990",
      "publisher": "DC Comics",
      "Field7": "16 Issues"
    },
    {
      "title": "Who's Who in the DC Universe Update 1993",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/25579/774256-4424_4_1.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Who's Who in the Legion of Super-Heroes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/25579/491214-ww1.jpg",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "7 Issues"
    },
    {
      "title": "Who's Who: The Definitive Directory of the DC Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/92740-18197-106579-1-whos-who-the-defin.jpg",
      "year": "1985",
      "publisher": "DC Comics",
      "Field7": "26 Issues"
    },
    {
      "title": "Who's Who: The Definitive Directory of the DC Universe Update '87",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/123372-18595-109742-1-who-s-who-the-defin.jpg",
      "year": "1987",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Who's Who: The Definitive Directory of the DC Universe Update '88",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/123498-18596-109743-1-who-s-who-the-defin.jpg",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Widowmaker",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/1552390-widowmaker.jpeg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Wild Dog",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/25678-3823-28536-1-wild-dog.jpg",
      "year": "1987",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Wild Dog Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/1006553-wild_dog_special_00_cover.jpg",
      "year": "1989",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wild Thing",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/40828-6360-46069-1-wild-thing.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "WildC.A.T.S/X-Men: The Dark Age",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/170207-19017-113366-1-wildc-a-t-s--x-men.gif",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wildcats: Divine Intervention",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/1613838-divine_intervention_wildcats__1999__1.jpeg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wildstorm: A Celebration of 25 Years",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6113440-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Will Eisner Companion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2079860-the_will_eisner.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Will Eisner's The Spirit: A Celebration of 75 Years",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4670634-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Williams-Sonoma Spider-Man & The Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/2034812-williams_sonoma_spider_man___the_avengers_v2011__1__2011_7____page_1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Willow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/48324-4080-57792-1-willow.jpg",
      "year": "1988",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Windy and Willy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/9253-2438-10216-1-windy-and-willy.jpg",
      "year": "1969",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Winter Soldier",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6712697-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Winter Soldier",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/2180994-ws1cover.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "19 Issues"
    },
    {
      "title": "Winter Soldier By Brubaker: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7068630-3270420524-79787.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Winter Soldier:  Winter Kills",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/88602-18125-106186-2-winter-soldier--win.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Winter Soldier: Black Widow Hunt",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031809-03.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Winter Soldier: Broken Arrow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3337512-02.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Winter Soldier: Second Chances",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6974998-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Winter Soldier: The Bitter March",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3635373-01a.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Winter Soldier: The Bitter March",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4040917-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Winter Soldier: The Electric Ghost",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3580570-04.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Winter Soldier: The Longest Winter",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2941477-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wisdom of Lobo",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/103192/2224865-wisdom_of_lobo__2011____page_1.jpg",
      "year": "1990",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wisdom: Rudiments of Wisdom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1078678-wd.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Witchblade/Elektra",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/103514-18392-107845-1-witchblade--elektra.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Witches",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/19859/467625-witches_1.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Witches: The Gathering",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1600900-wtc__tg.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wizard Presents Cerebro’s Guide to the X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3848/243911-19758-118641-1-cerebro-s-guide-to-t.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wizard X-Men Pre-Press Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1154392-wizardx_menprepressedition.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolfpack",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/48327-4081-57795-1-wolfpack.jpg",
      "year": "1988",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Wolfpack: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6548922-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/3618361-0%20wolv2014001_dc11_lr.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/10069/544633-scan0002.jpg",
      "year": "1990",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/59142-10809-92137-1-wolverine.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "75 Issues"
    },
    {
      "title": "Wolverine",
      "img": "https://comicvine1.cbsistatic.com/bundles/phoenixsite/images/core/loose/img_broken.png",
      "year": "1982",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31599/2692869-wolverine.jpg",
      "year": "1988",
      "publisher": "Marvel",
      "Field7": "192 Issues"
    },
    {
      "title": "Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6063/1368589-prv6207_cov.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "40 Issues"
    },
    {
      "title": "Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2923553-01a.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "13 Issues"
    },
    {
      "title": "Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/53928/1030562-2009_wo__issues__1_4_uncanny_x_men__172_173_.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine '95",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/46736/886906-wolverine_95.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine '96",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2548985-96_cropped.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine '97",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2548989-97_cropped.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine & Black Cat: Claws",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6274025-0129482709-63724.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine & Captain America: Weapon Plus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7000516-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine & Doop",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2668556-9841_20051119021900_large.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Wolverine & The Black Cat: Claws 2",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/79529/1893598-prv9122_cov.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Wolverine & the X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/2056887-wolvxmen2011001_c.png",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "43 Issues"
    },
    {
      "title": "Wolverine & the X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/3676151-1%20wolvxmen2014001_dc11_lr.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Wolverine & the X-Men Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3468821-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine 1999",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2548983-1999.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine 2000",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2548984-2000.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine 2001",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2548986-2001.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine and Black Cat: Claws II",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6283772-5494757652-63729.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine and Ghost Rider in Acts of Vengeance",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23749/614012-106223_20070926011401_large.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine and Jubilee",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/18863/1626726-prv7501_cov.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Wolverine and Jubilee: Curse of the Mutants",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1862833-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine and Nick Fury: Scorpio",
      "img": "https://comicvine1.cbsistatic.com/bundles/phoenixsite/images/core/loose/img_broken.png",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine and Power Pack",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1919432-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Wolverine And Power Pack: The Wild Pack",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1084423-a7c4a6b1_6c34_48ac_ac92_cfa5659f167f.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine and the Punisher: Damaging Evidence",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/44058-7183-51311-1-wolverine-and-the-pu.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Wolverine and the X-Men by Jason Aaron",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2352291-w_txmn_by_ja1.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "8 Issues"
    },
    {
      "title": "Wolverine and the X-Men by Jason Aaron Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3874322-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine and the X-Men Magazine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52212/991225-wolverine_and_the_x_men_magazine.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Wolverine and the X-Men: Alpha & Omega",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/96747/2147990-wolverinealpha1c.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Wolverine and the X-Men: Alpha and Omega",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2485670-wlv___txmn.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine and the X-Men: Death of Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4361251-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine and the X-Men: Tomorrow Never Learns",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4188643-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/204601-19222-115222-1-wolverine-annual.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Wolverine Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2544265-prev_img.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7084667-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4040918-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine Art Appreciation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3755938-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine Battles The Incredible Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11113/111133305/3757385-p00001.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine Bloody Choices",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6249146-01.jpg",
      "year": "1991",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine By Claremont & Miller",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3336956-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine by Daniel Way: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6868545-4952012291-76102.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Wolverine by Greg Rucka Ultimate Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2136410-wlv_by_gr_uc.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine by Jason Aaron Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2043048-wlv_by_ja_omn.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine by Jason Aaron: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3485354-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Wolverine by Larry Hama and Marc Silvestri",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6033999-3508644784-56165.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Wolverine By Mark Millar Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3148297-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine Classic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/10069/544955-scan0001.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Wolverine Comic Reader",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3102236-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Wolverine Custom Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117127/3551752-4478301903-DIG01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine Encyclopedia",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/614945-3226.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Wolverine Epic Collection: Back To Basics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6828946-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine Epic Collection: Blood Debt",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6351152-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine Epic Collection: Madripoor Nights",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4270236-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine Epic Collection: Shadow of Apocalypse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5677342-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine Epic Collection: The Dying Game",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4934633-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine Evolution of an Icon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849840-__addme___marvel_legends_evolution_of_an_icon___wolverine_v9999___page_1.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine Files",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2670906-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine Legends",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1875826-01.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Wolverine Magazine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1082967-wolvmag001.gif",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Wolverine MAX: Vegas",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6044629-8650164658-56181.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine MGC",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1190848-wolverine_mgc_66_feb100487.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine Noir",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1296155-wlv_nr.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine Noir",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/28266/768583-wolverine_noir__001_000a.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Wolverine Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1293347-wlv_omn.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine Origin: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7042771-3749736713-79143.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine Origins Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/157384-18924-111917-1-wolverine-origins-an.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine Origins: Born in Blood",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/935569-snikt.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine Origins: Dark Reign",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031836-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine Origins: Deadpool",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/936990-snekt.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine Origins: Our War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/936951-snukt.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine Origins: Romulus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031837-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine Origins: Savior",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/935723-snakt.jpeg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine Origins: Seven the Hard Way",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1211084-wlv.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine Origins: Swift and Terrible",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/935818-snokt.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine Poster Book",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/827185-wpb_01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine Saga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/48337-4251-57805-1-wolverine-saga-the.jpg",
      "year": "1989",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Wolverine Saga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/914022-wolverine_saga_000.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine Typhoid's Kiss",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1160230-typhoid_s_kiss.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine vs. Blade",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7000518-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine vs. Deadpool",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5711935-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine vs. Sabretooth 3D",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7225389-01.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine vs. Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1160629-wolverine_spiderman.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine vs. The Marvel Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5747758-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine vs. The Punisher",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5759802-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine Weapon X",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/780178-wwx_01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "16 Issues"
    },
    {
      "title": "Wolverine Weapon X: Insane in the Brain",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031827-02.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine Weapon X: The Adamantium Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1075867-_be1vbh__2k___kgrhqyh_eyergrf8uykbk_36zu0yw___3.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine Weapon X: Tomorrow Dies Today",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031828-03.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine, Punisher & Ghost Rider: Official Index to the Marvel Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/13/135797/2907908-wpgindex1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "8 Issues"
    },
    {
      "title": "Wolverine: Agent of S.H.I.E.L.D.",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1051870-wol_age2.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: An Origin Story",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/122433/2933203-wolverine___an_origin_story_hc________lusiphur_dcp__2013____page_1.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Back in Japan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031790-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Black Rio",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/614943-111548.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Blood & Sorrow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5302166-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Blood Debt",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/10069/544626-scan0001.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Blood Hungry",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4724383-01.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Blood Wedding",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3347221-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Bloodlust",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6034066-01.jpg",
      "year": "1990",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Carni-Brawl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1301273-wolverine_carni_brawl__1___page_1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Chop Shop",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2809966-wolverine__001.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Civil War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2932265-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Covenant",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2974381-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Coyote Crossing",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1445337-wlv__cc.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Dangerous Games",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/410619-21779-131329-2-wolverine-dangerous.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Dangerous Games",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5695290-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Dark Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1163057-wolverine_dark_wolverine_the_prince_hc.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Wolverine: Days of Future Past",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/39481-6022-44420-1-wolverine-days-of-f.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Wolverine: Debt of Death",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/1996964-wdebt.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Doombringer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/46736/888112-doombringer.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Enemy Of The State",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1051875-wolv_enenystate_orig.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Enemy Of The State - The Complete Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/357867-21230-127621-1-wolverine-enemy-of.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Evilution",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/46736/1023692-wolverine_evilution.gif",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Evolution",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/440021-wolverine_evolution_hc_1_00.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Exit Wounds",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6981436-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Firebreak",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2770925-w_fb_1_dcp_0000.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: First Class",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/339875-21049-126013-1-wolverine-first-cla.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "21 Issues"
    },
    {
      "title": "Wolverine: First Class: Class Actions",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6741029-5980475800-74038.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: First Class: Ninjas, Gods and Divas",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7146610-8138212666-80907.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: First Class: The Rookie",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70204/1487562-1_the_rookie.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: First Class: To Russia, With Love",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70204/1493050-2_to_russia__with_love.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: First Class: Wolverine-By-Night",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70204/1494456-3_wolverine_by_night.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: First Cuts",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5406698-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Flies to a Spider",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/14859/638238-wolvie_ftas_frankblack_dcp_001.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Flies to a Spider",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5695294-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Free Comic Book Day",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/33110/766990-copy_of_wolverine_freecomic.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Get Mystique",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1009613-wolv.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Global Jeopardy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1160303-wolverine_global_jeopardy_vol_1_1.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Goodbye, Chinatown",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031834-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Hunting Season",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3240086-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: In the Flesh",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3207864-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Infinity Watch",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7054381-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Infinity Watch",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6807837-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Wolverine: Inner Fury",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/10069/544472-scan0006.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Japan's Most Wanted",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5716450-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Japan's Most Wanted",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117127/3551731-3030316115-DIG00.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "13 Issues"
    },
    {
      "title": "Wolverine: Killable",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3841179-02.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Killing",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/10069/544451-scan0005.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Killing Made Simple",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/488045-003.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Knight of Terra",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55780/1059911-wolverine___knight_of_terra.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Logan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2934626-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Manifest Destiny",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/592887-00cover2.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Wolverine: Mr X",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1153508-wolverine_mr_x_1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Netsuke",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6631201-1449705644-71952.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Wolverine: Not Dead Yet",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5706507-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Official Index to the Marvel Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3044417-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Old Man Logan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1141226-51s0t90bifl._ss500_.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Old Man Logan - The Last Ronin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5658721-03.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Old Man Logan Giant-Size",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/965111-wolvgsoml001_dc11_page1.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Old Man Logan: Berzerker",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5328331-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Old Man Logan: Bordertown",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5479444-02.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Old Man Logan: Days of Anger",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6242748-06.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Old Man Logan: Days of Anger Black and White Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6242749-06.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Old Man Logan: End of the World",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6753314-10.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Old Man Logan: Old Monsters",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5874803-04.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Old Man Logan: Past Lives",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6069468-05.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Old Man Logan: Scarlet Samurai",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6506268-07.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Old Man Logan: The Hunter and the Hunted",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6712699-09.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Old Man Logan: To Kill For",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6595037-08.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Old Man Logan: Warzones!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4932922-00.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Origin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2934623-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Origin II",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3983606-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Origins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/21094/724771-wolverine_origins_00__001.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "50 Issues"
    },
    {
      "title": "Wolverine: Origins & Endings",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/1274392-origins_endings.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Origins #1 (Director's Cut)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2850093-__addme___wolverine__origins_v9999__1___born_in_blood__part_1___page_1.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Prehistory",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5700408-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Prodigal Son",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1160630-wolverine_prodigal_son.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Rahne of Terra",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/33913/1044031-rahne_of_terra001.jpg",
      "year": "1991",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Return of the Native",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1445359-wlv__rotn.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Revolver",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/827588-revolver.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Rot",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2924822-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Sabretooth Reborn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2830150-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Saudade",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/538579-wolverine1.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Savage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1114476-wolverine_savage.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Savage Origins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6477339-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Save the Tiger",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/229783-19619-117700-1-wolverine-save-the.JPG",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Season One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3089997-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Snikt!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/308/78610-17989-105333-1-wolverine-snikt.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Wolverine: Snikt!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6741090-01.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Son of Canada",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1160304-wolverien_son_of_canada_doritosdoritos.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Soultaker",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5704855-01.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Soultaker",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/462/122899-18593-109689-1-wolverine-soultaker.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Wolverine: Switchback",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15455/670745-ws.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Tales of Weapon X",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6772734-9097550465-74538.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: The Amazing Immortal Man & Other Bloody Tales",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/388212-21576-130339-1-wolverine-the-amazin.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: The Amazing Immortal Man and Other Bloody Tales",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6447379-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: The Anniversary",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/780170-wa_01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: The Best There Is",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1595868-wlv_tbti.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: The Best There Is",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1538507-wolverine_1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Wolverine: The Best There Is - The Complete Series",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7093826-8245852494-80412.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: The Best There Is: Broken Quarantine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5802649-02.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: The Best There Is: Contagion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5790904-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: The Brotherhood",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1804308-wolverine_brotherhood.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: The Death of Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5680943-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: The End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/59162-10811-92157-1-wolverine-the-end.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Wolverine: The End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1646160-wlv__te.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: The Jungle Adventure",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/2422186-wolverine_the_jungle_adventure__1989__1.jpeg",
      "year": "1990",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: The Long Night",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7012697-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: The Long Night Adaptation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6744816-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Wolverine: The Origin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/108980/2699366-origin__1__2001_.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Wolverine: The Reckoning",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1456491-wlv__tr.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: The Return of Weapon X",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5953883-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: The Road to Hell",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65073/1371223-wolverine___the_road_to_hell__1__2010____page_1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Three Months To Die",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3983607-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Wolverine: Under the Boardwalk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1055520-p00001.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Weapon X",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1071342-yhst_23599503122488_2086_166821614.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Weapon X 100 Project",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/1522108-wwx_a.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Weapon X Files",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/13/135797/2974109-weaponxfiles.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Weapon X Files",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/782577-sc0024df49.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Weapon X Unbound",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5640156-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Wendigo!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3755941-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Wizard Masterpiece Editon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/313505-20619-123562-1-wolverine-wizard-ma.jpeg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Wolverine Goes to Hell",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/87073/1699098-wolverinewolverinegoestohell_hc.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Wolverine Goes to Hell",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2179136-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Wolverine vs. the X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1961020-wlv__wvtxm.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Wolverine's Revenge",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2064925-wlv__wr.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: World of M featuring Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1074322-wom.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine: Xisle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/66145-11294-99142-1-wolverine-xisle.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Wolverine/Cable",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/258336-20135-120181-1-wolverine--cable-g.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine/Captain America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/59167-10812-92162-1-wolverine--captain.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Wolverine/Captain America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6217728-2015757848-62831.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine/Deadpool: The Decoy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/58790/1935469-wolverine_deadpool___the_decoy__1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine/Deadpool: Weapon X",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1595837-wlv__dp__wpn_x.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine/Gambit: Victims",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1013/91798-7182-106516-1-wolverine--gambit.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Wolverine/Hercules: Myths, Monsters & Mutants",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/87073/1697044-wolverineherculesmythsmonstersandmutants_01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Wolverine/Hercules: Myths, Monsters, and Mutants",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6945013-4684141596-32437.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine/Punisher Revelation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/24227/424960-Wolverine--Punisher%20-%20Revelation%2001%20-%2000%20-%20FC.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Wolverine/Shi: Dark Night of Judgment",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/282836-20353-121686-1-wolverine-shi-dark.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverine/Shi: Dark Night of Judgment Ashcan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111129651/3444480-wolverine%20shi%20-%20dark%20night%20of%20j%20-%20unknown%20-%20page%201.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverines",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4313696-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "20 Issues"
    },
    {
      "title": "Wolverines: Claw, Blade and Fang",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4593500-02.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverines: Dancing With The Devil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4525025-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverines: Destiny",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4772957-04.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wolverines: The Living and the Dead",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4694659-03.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Women of Marvel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5739707-01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Women of Marvel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1491885-women_of_marvel_1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Women of Marvel Posterbook",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/1043790-wompb.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Women of Marvel: Celebrating Seven Decades",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/1796342-womcsd.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Women of Marvel: Celebrating Seven Decades",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6660703-2928988531-72858.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Women of Marvel: Celebrating Seven Decades Handbook",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1358469-wom_handbook_take2.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Women of Marvel: Celebrating Seven Decades Magazine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/1234799-wm70th_001a.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Women of Marvel: Celebrating Seven Decades Poster Book",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1991339-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Girl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1612929-ww1.jpeg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Girl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/192932-19135-114437-1-wonder-girl.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Wonder Girl: Adventures of A Teen Titan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6029091-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/253/82133-18020-105474-1-wonder-man.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Wonder Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117127/4723922-wonder%20man%20v1986%20%231%20-%20wonder%20man%20%281986_3%29%20-%20page%201.jpg",
      "year": "1986",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/31147-4603-34664-1-wonder-man.jpg",
      "year": "1991",
      "publisher": "Marvel",
      "Field7": "29 Issues"
    },
    {
      "title": "Wonder Man Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2207584-01.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Wonder Man: My Fair Super Hero",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/992545-wm.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Twins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6797728-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "11 Issues"
    },
    {
      "title": "Wonder Twins: Activate!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7142263-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/1816478-wonder_woman__2006_3rd_series__01a.jpeg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "59 Issues"
    },
    {
      "title": "Wonder Woman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1093/112074-18525-108764-1-wonder-woman.jpg",
      "year": "1942",
      "publisher": "DC Comics",
      "Field7": "329 Issues"
    },
    {
      "title": "Wonder Woman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5280258-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "84 Issues"
    },
    {
      "title": "Wonder Woman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2034575-01.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "55 Issues"
    },
    {
      "title": "Wonder Woman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1093/102895-3824-27759-2-wonder-woman.gif",
      "year": "1987",
      "publisher": "DC Comics",
      "Field7": "228 Issues"
    },
    {
      "title": "Wonder Woman - Spirit of Truth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1246725-wonder_woman___spirit_of_truth___page_1.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman '77",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5238293-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Wonder Woman '77",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4545172-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Wonder Woman '77",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4317860-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "27 Issues"
    },
    {
      "title": "Wonder Woman 75th Anniversary Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5500637-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman 80-Page Giant",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/61948/1526537-00fc.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman and Justice League Dark: The Witching Hour",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6913014-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman and Justice League Dark: The Witching Hour",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6632889-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman and the Justice League America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5773013-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Wonder Woman and the Star Riders",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6535/1160236-wonderwomanstarriders.jpg",
      "year": "1993",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/27572-4216-30585-1-wonder-woman-annual.jpg",
      "year": "1989",
      "publisher": "DC Comics",
      "Field7": "8 Issues"
    },
    {
      "title": "Wonder Woman Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5879905-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Wonder Woman Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4599832-stk666665.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/442615-wonder_woman_v3_annual_1_00.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman Archives",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6535/1164878-wwarchives1.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "7 Issues"
    },
    {
      "title": "Wonder Woman Blank",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6631668-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman by Brian Azzarello & Cliff Chiang Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6929710-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman By George Pérez",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5383779-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Wonder Woman by George Perez Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4761800-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Wonder Woman By Greg Rucka",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5316408-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Wonder Woman by John Byrne",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5873121-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Wonder Woman by Mike Deodato",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5199933-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman by Phil Jimenez Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6797729-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman by Walt Simonson and Jerry Ordway",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6779345-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman Chronicles",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6535/1427871-wwchronicles.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Wonder Woman Day Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5893335-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman Gallery",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/251249-20012-119477-1-wonder-woman-gallery.jpg",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman Giant",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7108514-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Wonder Woman Gods of Gotham",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/245695-19803-118819-1-wonder-woman-gods-of.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman Plus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5551/670548-80948bf6_58f1_44a9_a8dc_8103620e7595.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5551/698710-3b791c76_4ff7_4bc2_a41d_7bddd1a0c6ce.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman Special Edition: Free Comic Book Day",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5837405-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman Spectacular",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1612762-cover.jpg",
      "year": "1978",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: A Celebration of 75 Years",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5456005-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: A Twist of Fate",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5211115-08.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Amazonia",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4043980-01.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Amazons Attack",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/43372/1576834-8204_400x600.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Amazons Attacked",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730704-07.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Beauty and the Beasts",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/6135653-wonder%20woman%20beauty%20and%20the%20beasts.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Bitter Rivals",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6631196-7257104245-Cover.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Blood",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2373128-978_1_4012_3563_5.jpeg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Bones",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4479788-06.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Challenge of the Gods",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/43372/1391870-wonder_20woman_challenge_20of_20the_20gods.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Children of the Gods",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6606792-06.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Come Back To Me",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7008024-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Wonder Woman: Contagion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5922977-01.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Dark Gods",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6893220-08.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Dead Earth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7182372-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Destiny Calling",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70539/1289490-wonder_woman_destiny.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Diana Prince: The 50th Anniversary Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730703-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Donna Troy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5551/670546-9de51eba_ca74_4232_b270_857c7aeb893d.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Down To Earth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/449940-wonder_woman_down_to_earth_1_00.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Earth One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5133405-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Wonder Woman: Ends of the Earth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5922979-01.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Eyes of the Gorgon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6631197-8675574632-Cover.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Featuring Over Five Decades of Great Covers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100559/2392029-wonderwomancovers1.jpg",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Flesh",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4129724-05.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Forgotten Legends",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6339725-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Futures End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4108615-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Gods and Mortals",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4660022-01.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Godwatch",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6144005-04.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Guts",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2806576-__kgrhqzhjeefdn6t2sszbq8jd_gt3q__60_57.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Her Greatest Battles",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5688862-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Iron",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3321372-03.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Land of the Dead",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6631200-3228587203-Cover.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Lifelines",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1822651-lifelines.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Love and Murder",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50391/1215841-8006_400x600.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Mission's End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1822666-missions_end.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Odyssey",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498192-02.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Wonder Woman: Our Worlds at War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5551/670534-df46cdee_2db4_4771_a56a_166c00cbc083.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Paradise Found",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5884608-01.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Paradise Lost",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5884609-01.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Rebirth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5253707-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Rebirth Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6080345-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Wonder Woman: Resurrection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5432103-09.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Rise of the Olympian",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5922982-01.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Second Genesis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1822554-second_genesis.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Secret Files & Origins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/604215-wwsf1a.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Wonder Woman: Steve Trevor Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5886618-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: The Amazon Princess Archives",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2941444-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: The Angle Menace",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6535/1578970-anglemenace.jpg",
      "year": "1980",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: The Blue Amazon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/58701/1217146-wwba_00cover.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: The Challenge of Artemis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70539/1289487-wwc2.jpg",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: The Cheetah's Jewel Caper",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/998472-164705_20090314164928_large.jpg",
      "year": "1976",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: The Circle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6087011-3367987290-57939.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: The Contest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70539/1289488-wwc.jpg",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: The Enemy of Both Sides",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7008025-09.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: The Golden Age",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6153027-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Wonder Woman: The Golden Age Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5479445-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Wonder Woman: The Greatest Stories Ever Told",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6535/1136527-greateststoriesevertold.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: The Heart of the Amazon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6418942-05.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: The Hiketeia",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6640165-01.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: The Just War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7115849-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: The Lies",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5711936-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: The Once and Future Story",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1271325-p00001.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: The True Amazon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5456006-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: The Truth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6017217-03.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: The Twelve Labors",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6631195-9484099001-Cover.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3690501-04.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: War of the Gods",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5109029-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: War-Torn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4778036-07.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Warbringer: The Graphic Novel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7195745-01.jpg",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Warkiller",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5922983-01.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Who is Wonder Woman?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/442625-wonder_woman_v3_who_is_wonder_woman_1_00hc.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Year One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5830944-02.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman: Year One: The Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7046323-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman/Conan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6060417-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Wonder Woman/Conan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6467862-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonder Woman/Tasmanian Devil Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5914454-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Wonderful Wizard of Oz MGC",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1157576-p00001___wonderful_wizard_of_oz_mgc__1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "WordGirl: Mystery Meat",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/109949/2068605-wordgirl001.gif",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "World of Krypton",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/5809231-wok1%20%231%20final.jpg",
      "year": "1979",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "World of Warcraft",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3514431-01-hc.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "World Of Warcraft: Bloodsworn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3836136-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "World of Warcraft: Curse of the Worgen",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3514404-01.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "World of Warcraft: Curse of the Worgen",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1521335-world_of_warcraft_curse_of_the_worgen_1.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "World of Warcraft: Dark Riders",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3823931-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "World of Warcraft: Pearl of Pandaria",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2630666-__kgrhqj__p_fbd9r9sjkbq_m1_jr6q__60_3.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "World War Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/135179-18686-110435-1-world-war-hulk.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "World War Hulk Aftersmash: Damage Control",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/291163-20402-122005-1-wwh-aftersmash-dama.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "World War Hulk Aftersmash: Warbound",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2770885-wwh_as_wb_1_dcp_0000.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "World War Hulk Prologue: World Breaker",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/114477-18537-108929-1-world-war-hulk-prolo.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "World War Hulk: Aftersmash",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2032927-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "World War Hulk: Front Line",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/141054-18793-111078-1-world-war-hulk-fron.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "World War Hulk: Gamma Corps",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/108980/2198580-world_war_hulk__gamma_corps__1__2007_.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "World War Hulk: Gamma Files",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/176557-19050-113742-1-world-war-hulk-gamm.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "World War Hulk: X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/140924-18786-111036-1-world-war-hulk-x-me.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "World War Hulks",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2670981-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "World War Hulks: Captain America vs. Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/108980/2198567-world_war_hulks__captain_america_vs._wolverine__1__2010_.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "World War Hulks: Spider-Man vs. Thor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1299966-1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "World War III",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/109420-18485-108562-1-world-war-iii.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "World Without End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1077956-1.jpg",
      "year": "1990",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "World's Best Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/197662-19182-114850-1-world-s-best-comics.jpg",
      "year": "1941",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "World's Best Comics: Golden Age DC Archives Sampler",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/148518/2979537-55837_20060803170339_large.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "World's Best Comics: Silver Age DC Archives Sampler",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/148518/2979547-55859_20060803184726_large.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "World's Finest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/4819488-ccf%20world%27s%20finest%20%231%20front%2009242015.jpg",
      "year": "1990",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "World's Finest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1316616-worlds_finest_f.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "World's Finest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/123275/2498238-p00001.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "World's Finest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1008010-164705_20090314164928_large.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "World's Finest Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/58127/3665944-1937270259-30199.jpg",
      "year": "1941",
      "publisher": "DC Comics",
      "Field7": "322 Issues"
    },
    {
      "title": "World's Finest Comics Archives",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2104052-finest.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "World's Finest: Our Worlds at War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/33599/819647-world_s_finest_owaw_requiem_no1.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "World's Funnest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5120540-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "World's Greatest Super-Heroes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/1259519-3002_400x600.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "World's Greatest Super-Heroes! Holiday Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6714824-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Worlds Unknown",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/11840-2652-13200-1-worlds-unknown.jpg",
      "year": "1973",
      "publisher": "Marvel",
      "Field7": "8 Issues"
    },
    {
      "title": "Worlds' Finest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3549639-01a.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "33 Issues"
    },
    {
      "title": "Worlds' Finest Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3606054-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Worlds' Finest: Control Issues",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3882733-03.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Worlds' Finest: First Contact",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4265303-04.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Worlds' Finest: Futures End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4086403-worlds%20finest.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Worlds' Finest: Homeward Bound",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4598404-05.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Worlds' Finest: Hunt and Be Hunted",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3453864-02.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Worlds' Finest: The Lost Daughters of Earth 2",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3485607-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Factor:  Together Again For The First Time",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4098405-16.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Factor: Breaking Points",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4121339-18.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Factor: Happenings in Vegas",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3905238-11.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Factor: Hard Labor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4015212-13.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Factor: Heart of Ice",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1018774-x_factor.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Factor: Hell On Earth War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4721779-20.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Factor: Invisible Woman Has Vanished",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3404742-09.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Factor: Layla Miller",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/508251-2lj6ts7.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Factor: Life and Death Matters",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1018737-x_factor.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Factor: Many Lives of Madrox",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1018748-x_factor.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Factor: Overtime",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3307984-08.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Factor: Scar Tissue",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3984717-12.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Factor: Second Coming",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1351887-xfc_sc.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Factor: Secret Invasion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1018840-x_factor.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Factor: Short Stories",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4136286-19.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Factor: Super Unnatural",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4046590-14.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Factor: The End of X-Factor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4694739-21.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Factor: The Longest Night",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1804327-longest_night.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Factor: The Only Game in Town",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1804333-only_game_in_town.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Factor: The Quick and the Dead",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/381784-21499-129705-1-x-factor-the-quick.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Factor: The Road To Redemption",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4115838-17.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Factor: They Keep Killing Madrox",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4062270-15.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Factor: Time and a Half",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1804250-time_and_a_half.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Files/30 Days of Night",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1894944-00.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/1634034-x_force__2004_2nd_series__1a.jpeg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "X-Force",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/691575-x_force_v3_001_page_00.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "28 Issues"
    },
    {
      "title": "X-Force",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7135757-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "X-Force",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3635376-01a.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "15 Issues"
    },
    {
      "title": "X-Force",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6735991-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "10 Issues"
    },
    {
      "title": "X-Force",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3754666-01.jpg",
      "year": "1991",
      "publisher": "Marvel",
      "Field7": "130 Issues"
    },
    {
      "title": "X-Force : Under the Gun",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4079261-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force / Cable '95",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/258346-20136-120182-1-x-force-and-cable-9.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force / Cable '96",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/258410-20138-120187-1-x-force-and-cable-9.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force / Cable '97",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/258411-20139-120196-1-x-force-and-cable-9.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force / Champions '98",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117127/3010652-x-force%20champions%20%27%20%2398%20-%20page%201.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force & Cable: The Legend Returns",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5914722-01.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force 1999",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/508156-2.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force and Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/407523-21762-131213-1-x-force-and-spider-m.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/31529-4822-35112-1-x-force-annual.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "X-Force Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1048020-prv3958_cov.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force by Craig Kyle & Chris Yost",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3666300-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "X-Force Epic Collection: Under The Gun",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5759803-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force Epic Collection: X-Cutioner's Song",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7175964-02.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force Megazine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/407538-21763-131214-1-x-force-megazine.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2866993-01_dm.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force Oversized Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1260780-xfr.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "X-Force Special: Ain't No Dog",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/2503/420433-XForceAintNoDog.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force: A Forced To Be Reckoned With",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2909021-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force: Angels and Demons",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1176276-xmn.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force: Assault on Graymalkin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2070906-xfc__aog.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force: Cable and the New Mutants",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1615553-xfr__c_tnm.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force: Child's Play",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2542172-x_force_childs_play.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force: Dirty/Tricks",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4061844-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force: Ends/Means",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4536871-03.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force: Famous, Mutant & Mortal",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/1439427-51ppx8wmr6l._ss500_.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force: Final Chapter",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5901212-02.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force: Hide/Fear",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4344341-02.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force: Legacy of Vengeance",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74140/1605015-x_force___legacy_of_vengeance___cover.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force: Necrosha",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2205094-xfc__nc.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force: New Beginning",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5901207-01.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force: Not Forgotten",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1078379-xforcenotforgotten3.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force: Old Ghosts",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1176298-xmn.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force: Phalanx Covenant",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3240089-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force: Rough Cut",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2850081-__addme___x_force___rough_cut_v9999__102___page_1.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force: Sex & Violence",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1298639-x_force_sex___violence_01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "X-Force: Sex and Violence",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/2001857-sex_and_violence.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force: Shatterstar",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5941521-01.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force: Shatterstar",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/258455-20142-120202-1-x-force-shatterstar.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "X-Force: Sins of the Past",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6947228-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force: The Counterfeit King",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7059451-02.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force: Toy Soldiers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2354267-xfr__ts.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force/Cable: Messiah War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2934637-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force/Cable: Messiah War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/14859/748373-mw01_002.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Force/Youngblood",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/221314-19422-116379-1-x-force--youngblood.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Infernus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2205138-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "X-Infernus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1051961-xinfernus.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Infernus Saga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1300300-x_infernus_saga_1.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/36356-5567-40601-1-x-man.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "76 Issues"
    },
    {
      "title": "X-Man '96",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2638312-xman.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Man '97",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5774/1909413-xmanannual1997.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Man / Hulk '98",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5774/1909410-xmanannual1998.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Man: Age of Apocalypse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64188/1206777-x_man_tpb_3.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Man: All Saint's Day",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1160305-x_man_all_saints_day.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Man: Dance With the Devil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5847544-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Man: The Man Who Fell to Earth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5260002-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1290345-x_men_1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "42 Issues"
    },
    {
      "title": "X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3072092-01a.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "26 Issues"
    },
    {
      "title": "X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2767534-x_men__157__2004___angrybadger_dcp____001.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "51 Issues"
    },
    {
      "title": "X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7109895-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "X-Men '92",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4641233-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "X-Men '92",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5120541-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "10 Issues"
    },
    {
      "title": "X-Men '92 Infinite Comic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4587640-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "8 Issues"
    },
    {
      "title": "X-Men '92: Lilapalooza",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5808971-02.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men '92: The World Is A Vampire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5500639-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men '92: Warzones!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5091083-00.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men '95",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117127/3010056-xmenann95.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men '96",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117127/3010052-33_224183_0_xmen960.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men '97",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6849104-7236031877-75858.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men / Dr. Doom '98",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/49173/1001642-p00001.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men & Ghost Rider: Brood Trouble In The Big Easy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/272692-20270-121012-1-x-men--ghost-rider.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men #1: 20th Anniversary Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2168165-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men #1: Facsimile Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7000520-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men #137: Facsimile Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7016222-137.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men 1999",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117127/3010062-845479.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men 2 Prequel: Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1164404-x2_wolverine_p00.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men 2: Nightcrawler - Official Movie Prequel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55780/1064608-xm2_ncr.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men 2: The Movie",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55780/1095511-56393_20061006112012_large.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men 2000",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9053/905052-x_men_annual_2000___00___fc.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men 2099",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3417219-01.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "35 Issues"
    },
    {
      "title": "X-Men 2099",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3970726-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men 2099 A.D. Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/235133-19684-118061-1-x-men-2099-a-d-spec.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men 2099 Oasis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/235132-19683-118060-1-x-men-2099-oasis.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Adventures",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3417263-01.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "13 Issues"
    },
    {
      "title": "X-Men Adventures",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6559480-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Adventures",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3417250-01.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "15 Issues"
    },
    {
      "title": "X-Men Adventures",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3417281-01.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "13 Issues"
    },
    {
      "title": "X-Men Alpha",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/983689-387px_xmen_alpha_1.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Alterniverse Visions",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/508219-2.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men and Power Pack",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/154350-18897-111691-1-x-men-and-power-pack.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "X-Men and Power Pack: The Power of X",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5657598-01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Anniversary Magazine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/680882-x.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/28071/539692-x_menspecial1970_01_00fc.jpg",
      "year": "1970",
      "publisher": "Marvel",
      "Field7": "15 Issues"
    },
    {
      "title": "X-Men Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/90476-18169-106389-1-x-men-annual.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7173709-4610871183-82037.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "X-Men Archives",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/59022/1693976-xma1.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "X-Men Archives Featuring Captain Britain",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/36782-5568-41121-1-x-men-archives-featu.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "7 Issues"
    },
    {
      "title": "X-Men Archives Sketchbook",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/508189-2.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Ashcan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1160628-ashcan.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Ashcan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/508179-2.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Black",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6828949-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Blue Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6242751-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Blue: Cry Havok",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6527905-04.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men by Chris Claremont & Jim Lee Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2031994-xmn_by_c_l_omn_1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "X-Men by Peter Milligan: Dangerous Liaisons",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6893224-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men by Roy Thomas & Neal Adams Gallery Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7066229-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Chronicles",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/33913/959902-x_men_chronicles_1.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "X-Men Classic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2773343-x_men_classic_046_00.jpg",
      "year": "1990",
      "publisher": "Marvel",
      "Field7": "65 Issues"
    },
    {
      "title": "X-Men Classic Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6173027-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Classic: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6703961-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "X-Men Classics Starring the X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/21303-3247-23745-1-x-men-classics-starr.jpg",
      "year": "1983",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "X-Men Endangered Species",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/375203-18726-110657-2-x-men-endangered-spe.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Epic Collection: Children of the Atom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7118306-5021619964-80591.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Epic Collection: Dissolution & Rebirth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7039285-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Epic Collection: It's Always Darkest Before the Dawn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7012698-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Epic Collection: Lonely Are The Hunted",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5574694-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Epic Collection: Mutant Genesis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6164884-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Epic Collection: Second Genesis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5773015-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Epic Collection: The Gift",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5015588-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Epic Collection: The Sentinels Live",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6684860-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Evolution",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2205152-01.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "9 Issues"
    },
    {
      "title": "X-Men Evolutions",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/111946/2121582-x_men_evolutions.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Fairy Tales",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3549684-01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "X-Men First Class Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/121741-18585-109606-1-x-men-first-class-sp.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men First Class: The High Hand",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2089387-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Firsts",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3150958-x-men%20firsts%20v1996%20001%20%281996%29%20pagecover.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Forever",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/33110/832957-xmenforever01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "24 Issues"
    },
    {
      "title": "X-Men Forever",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/72688-9197-70453-1-x-men-forever.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "X-Men Forever 2",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5551/1259869-03b99507_743c_4386_abe3_295a03a45775.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "16 Issues"
    },
    {
      "title": "X-Men Forever 2: Back in Action",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6544279-3461006411-70290.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Forever 2: Perfect World",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6563534-6289918088-70734.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Forever 2: Scream A Little Scream",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6553366-9535873939-70293.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Forever Alpha",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/18921/806488-x_men.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Forever Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/108980/2198649-x_men_forever_annual__1__2010_.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Forever Giant Size",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1254867-x_men_forever_giant_size_1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Forever: Come to Mother... Russia!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1531912-xmn_frv__ctmr.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Forever: Devil in a White Dress",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1532051-xmn_frv__diawd.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Forever: Once More... Into the Breach",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1481143-xmnf__omitb.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Forever: Picking Up Where We Left Off",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1059116-xmn2.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Forever: The Secret History of the Sentinels",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1531486-xmn_frv__shots.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Free Comic Book Day 2008",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/18265/375219-21381-129119-1-free-comic-book-day.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Giant-Size",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1813864-xg1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Gold",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3439078-01a.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Gold: 'Til Death Do Us Part",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6548923-06.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Gold: Cruel and Unusual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6447380-05.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Halloween Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1165297-xmen_hall_spec_p01.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Iconnect Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1167600-xiconnect_00_cover.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Legacy: Aftermath",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5680878-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Legacy: Back to School",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5680881-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Legacy: Collision",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3373084-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Legacy: Divided He Stands",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1043932-dividedhestands.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Legacy: For We Are Many",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5680899-04.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Legacy: Invasive Exotics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3273532-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Legacy: Legion Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5790278-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Legacy: Legion: Revenants",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6395775-03.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Legacy: Lost Legions",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5680886-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Legacy: Necrosha",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2240921-xmn_lgc__ncs.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Legacy: Original Sin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/911368-0.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Legacy: Revenants",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5680897-03.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Legacy: Salvage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1531453-xmnlg__slv.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Legacy: Sins of the Father",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1043906-sinsofthefather.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Legends II: Rise of Apocalypse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/73434/2522774-81156_20081210181732_large.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Legends Poster Book",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3150962-x-men%20legends%20poster%20book%20v2003%20%282003%29%20pagecover.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-men Legends Vol. 2: The Dark Phoenix Saga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2112151-x_men__the_dark_phoenix_saga_v1991__1___the_dark_phoenix_saga__2006____page_1.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Milestones: Dark Phoenix Saga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6981438-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Milestones: Fall of the Mutants",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7012699-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Milestones: Fatal Attractions",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7144100-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Milestones: Inferno",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7054383-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Milestones: Mutant Massacre",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7023057-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Milestones: Onslaught",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7220172-01.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Milestones: Phalanx Covenant",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7184477-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Milestones: X-Cutioner's Song",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7116006-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Milestones: X-Tinction Agenda",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7084668-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Movie Prequel: Magneto",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1164451-magneto.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Movie Prequel: Rogue",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1164455-rogue.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Movie Prequel: Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1164447-wolverine.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Mutant Search R.U.1",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1160065-mcdonalds_premium_xmen_p01.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Noir",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1296162-xmn_nr.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Noir",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2756544-x_men_noir__001.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "X-Men Noir: Mark of Cain",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4886855-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Noir: Mark of Cain",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/1055246-xnoir1.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "X-Men Omega",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1012/87346-18093-105975-1-x-men-omega.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/925621-x_men.jpeg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "X-Men Origins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5406699-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Origins II",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5406701-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Origins: Beast",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/528199-0002.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Origins: Colossus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2207605-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Origins: Cyclops",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/53409/1092457-xmo___cyclops__001_000.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Origins: Deadpool",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1299740-dpog_001.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Origins: Emma Frost",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1243705-emma_frost__kingpin__pg01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Origins: Firestar",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5822064-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Origins: Gambit",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2207606-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Origins: Gambit",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5442654-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Origins: Iceman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1015739-iceman.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Origins: Jean Grey",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2207608-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Origins: Nightcrawler",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1164863-x_men_origins_nightcrawler_1_.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Origins: Sabretooth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/40136/805097-000.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Origins: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6871346-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Origins: Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/28266/786058-xmow_01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Pixies and Demons",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1160267-pixies_and_demons.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Poster Magazines",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55780/1053575-822243_spiderman_1992_super.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "X-Men Prelude to Perdition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1167506-x_men_prelude_to_perdition_pg00_anthony.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Premium Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1160064-the_x_men_premium_edition.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Prime",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5773016-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Rarities",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/100257-18312-107223-1-x-men-rarities.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Red: Waging Peace",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6828950-02.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Revolution: Genesis Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111129651/3444496-x-men%20revolution%20-%20genesis%20edit%20-%20unknown%20-%20page%201.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Spotlight on... Starjammers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7124262-5516693454-80796.jpg",
      "year": "1990",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "X-Men Survival Guide To The Mansion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7173710-4431332358-82037.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men The Coming of Triplikill",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1167580-x_men_01.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men The Movie Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48343/959003-num_risation0014.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men The Unlikely Saga of Xavier, Magneto and Stan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1167626-xmen_3_dvd__01_page0001_fc.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Ultra 3 Preview",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1165275-x_men_ultra_03_0001.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/524671-2.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "15 Issues"
    },
    {
      "title": "X-Men Universe: Past, Present and Future",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/524838-1.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Unlimited",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/33480-5066-37382-1-x-men-unlimited.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "50 Issues"
    },
    {
      "title": "X-Men Unlimited",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/57582-10745-90577-1-x-men-unlimited.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "14 Issues"
    },
    {
      "title": "X-Men Visionaries",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1888293-xmn_vsn__a_ak.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Visionaries 2: The Neal Adams Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74380/1690379-x_men_visionaries_neal_adams_tpb_v2___page_1.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Visionaries: Chris Claremont",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1888300-xmn_vsn__cc.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Visionaries: Jim Lee",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1888327-xmn_vsn__jl.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Visionaries: Joe Madureira",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1888359-xmn_vsn__jm.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Vs Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3809656-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men vs. Agents of Atlas",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/982624-x_men_vs_agents_of_atlas.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "X-Men vs. Apocalypse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3856176-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "X-Men Vs. Apocalypse: The Twelve",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6523701-8663911521-69896.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men Vs. Apocalypse: The Twelve Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7236772-01.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men vs. Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1087464-xmn.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men vs. Avengers/Fantastic Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6575589-5200028546-70736.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men vs. Dracula",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51596/1088759-xmen_vs_dracula_742202.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men vs. Fantastic Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1087494-xmn.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men vs. Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/698300-xmenvshulk.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men vs. The Brood",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/100260-18316-107262-1-x-men-vs-the-brood.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "X-Men XXL by Jim Lee",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7101032-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: A Skinning of Souls",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4471497-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Age of Apocalypse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/68452-11501-101450-1-x-men-age-of-apocal.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "X-Men: Age of Apocalypse Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2215808-xmn__aoa_omn.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Age of Apocalypse One Shot",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/40136/1421527-b4c5e7e8e749.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Age of Apocalypse: Dawn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5045265-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Age of Apocalypse: Omega",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5017297-03.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Age of Apocalypse: Reign",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4863042-02.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Age of Apocalypse: Termination",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6164883-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Age of Apocalypse: The Complete Epic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1087239-aoa.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "X-Men: Age of Apocalypse: Twilight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5173579-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Age of X",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/96747/3219199-240772_20120114080120_large.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Age of X",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/96747/1873423-1011875.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Alpha Flight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2010293-xmn__af.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Animation Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1032222-x_menanimatedgn_01.jpg",
      "year": "1990",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Apocalypse vs. Dracula",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6635881-9863597863-72346.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Apocalypse Wars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5478738-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Apocalypse/Dracula",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/308/99777-18303-107115-1-apocalypse-vs-dracul.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "X-Men: Asgardian Wars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4121350-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Battle of the Atom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3563253-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Battle of the Atom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3286196-01a.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "X-Men: Beauty and the Beast",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2460097-xmn___b_tb.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Bishop's Crossing",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3905242-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Bizarre Love Triangle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4306466-01.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Black - Emma Frost",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6666615-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Black - Juggernaut",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6657955-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Black - Magneto",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6631670-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Black - Mojo",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6640657-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Black - Mystique",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6651014-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Black Sun",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3016/129232-18655-110125-1-x-men--black-sun.JPG",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "X-Men: Blank Generation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031829-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Blind Science",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60598/1242144-prv5274_cov.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Blinded By the Light",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2338968-990784_xmn_super.gif",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Bloodline",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4149773-03.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Blue",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5797785-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "36 Issues"
    },
    {
      "title": "X-Men: Blue - Marvel Legacy Primer Pages",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6064964-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Blue: Cross Time Capers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6339729-03.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Blue: Reunion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6339728-00.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Blue: Strangest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6034456-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Blue: Surviving The Experience",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6666616-05.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Blue: Toil and Trouble",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6153028-02.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Books of Askani",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/89786-18153-106330-1-x-men-books-of-aska.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Children of the Atom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/14955/497652-xmencota1.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "X-Men: ClanDestine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/243513-5797-42889-3-x-men-clan-destine.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "X-Men: Colossus - Bloodline",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4637737-01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Colossus Bloodline",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3016/136015-18699-110540-1-x-men--colossus-blo.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "X-Men: Colossus: God's Country",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5022628-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Crossroads",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/28071/1358408-xmc.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Curse of Mutants",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/96747/2014876-1c09823b7e77c42bfe7cef3f42e49c5b.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Curse of the Mutants",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/87073/1694966-x_mencurseofthemutantshc.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Curse of the Mutants - Blade",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1355829-bl.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Curse of the Mutants - Mutants vs. Vampires",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1733849-x_men_curse_of_the_mutants_mutants_vs_vampires_hc.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Curse of the Mutants - Smoke and Blood",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51745/1371637-prv6209_cov.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Curse of the Mutants - Storm & Gambit",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5551/1355619-615201f5_ce95_4f9f_b82d_6c48bdac3cee.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Curse of the Mutants - X-Men Vs. Vampires",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60598/1428887-prv6492_cov.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "X-Men: Curse of the Mutants - X-Men vs. Vampires",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/96747/2014866-f991492803c171c5818d9f44db678074.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Curse Of The Mutants Saga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2670982-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Curse of the Mutants Spotlight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2207602-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Cyclops & Phoenix - Past & Future",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6640658-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Dark Phoenix Saga Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6924402-6285460198-77305.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Dawn of the Age of Apocalypse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1372809-bish.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Day of the Atom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4306469-01.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Days of Future Past",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3682916-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Days of Future Past",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1343490-daysoffuturepast.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Days of Future Present",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74848/2066039-x_men___days_of_future_present.jpg",
      "year": "1991",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Deadly Genesis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2762559-x_men_deadly_genesis_01_00.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "X-Men: Deadly Genesis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/993212-xmn.gif",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Declassified",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3755968-01.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Die by the Sword",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3664/206289-19237-115387-1-x-men-die-by-the-sw.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "X-Men: Die by the Sword",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1542605-xmn__dbts.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Divided We Stand",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1044009-dividedwestand.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Divided We Stand",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/10390/356631-21203-127499-1-x-men-divided-we-st.JPG",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "X-Men: Domino",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6395773-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Dream's End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1059122-xmn.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Earth's Mutant Heroes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3755969-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Earthfall",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1167438-earthfall.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Emperor Vulcan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/192400-19130-114391-1-x-men-emperor-vulca.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "X-Men: Emperor Vulcan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4436371-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Endangered Species",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1074279-es.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Eve of Destruction",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6981437-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Eve of Destruction",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6981498-01.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Exogenous",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4403077-04.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Fall of the Mutants",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3504601-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Fall of the Mutants",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3984718-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "X-Men: Fallen Angels",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2010275-xmn__fa.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Fatal Attractions",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1148546-xmn.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: FF",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3337514-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Firestar",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/908984-firestar.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: First Class",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/287408-18941-121890-1-x-men-first-class.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "16 Issues"
    },
    {
      "title": "X-Men: First Class",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2945204-x_men_first_class__001_000.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "8 Issues"
    },
    {
      "title": "X-Men: First Class - Mutant Mayhem",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/794164-1.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: First Class Finals",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7146611-7307454588-80907.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: First Class Finals",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2810549-xmfcf_1_oroboros_dcp_001.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "X-Men: First Class Giant-Sized Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2205169-giant_sized_special.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: First Class Magazine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/13/135797/2975498-firstclassmag.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: First Class: Band of Brothers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/991736-xmn.gif",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: First Class: Class Portraits",
      "img": "https://comicvine1.cbsistatic.com/bundles/phoenixsite/images/core/loose/img_broken.png",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: First Class: The Wonder Years",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/986689-xmn.gif",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: First Class: Tomorrow's Brightest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/986662-uxm.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: First to Last",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031830-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Future History –– Messiah War Sourcebook",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/985213-61593_20060904125738_large.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Gambit & Rogue",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5479446-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Gambit: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5055950-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "X-Men: Ghosts",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3088879-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: God Loves, Man Kills",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1042097-xmn.gif",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: God Loves, Man Kills",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/106978/2011948-god_loves_man_kills_reprint.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Gold",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5786808-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "36 Issues"
    },
    {
      "title": "X-Men: Gold - Marvel Legacy Primer Pages",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6059553-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Gold Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6223174-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "X-Men: Gold: Back To The Basics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6034457-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Gold: Evil Empires",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6144007-02.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Gold: Godwar",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6703962-07.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Gold: Homecoming",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6351154-00.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Gold: Mojo Worldwide",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6242752-03.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Gold: The Negative Zone War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6351155-04.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Golgotha",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4306472-01.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Grand Design",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6194933-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "X-Men: Grand Design",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6383915-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Grand Design - Second Genesis",
      "img": "https://comicvine1.cbsistatic.com/bundles/phoenixsite/images/core/loose/img_broken.png",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Grand Design - Second Genesis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/6528671-7607098879-STL087167",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "X-Men: Grand Design – X-Tinction",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/6946087-4475544663-STL116661",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "X-Men: Grand Design – X-Tinction",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7049827-0025333802-78185.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Hellbound",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1216802-hellbound.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "X-Men: Hope",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1145195-prv4566_cov.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Iceman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6209999-7549625102-61919.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Inferno",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3504610-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Inferno",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/881963-inferno.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Inferno",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5008184-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "X-Men: Inferno Crossovers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5590749-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Inferno Crossovers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3504604-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Inferno Prologue",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7086522-8655661540-79792.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Kingbreaker",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/647205-x_men___kingbreaker_001_000.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "X-Men: Kitty Pryde - Shadow & Flame",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/10135/258057-20131-120170-1-x-men-kitty-pryde.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "X-Men: Kitty Pryde and Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1024630-xmn.gif",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Kitty Pryde: Shadow and Flame",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5764523-01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Legacy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/2700080-prv14184_cov.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "25 Issues"
    },
    {
      "title": "X-Men: Legacy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/317651-20691-124060-1-x-men-legacy.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "69 Issues"
    },
    {
      "title": "X-Men: Legacy - Five Miles South Of The Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4863084-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Legacy - Prodigal",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2987979-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Legacy Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2207604-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Legacy: Emplate",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1131708-x_men_legacy_emplate_hc.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Legion Quest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6364910-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Legion: Shadow King Rising",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6233354-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Legionquest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1372799-bish.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Liberators",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/1811853-x_men_liberators__1998__1.jpeg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "X-Men: Life Lessons",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1165310-boi_102_001.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Lifedeath",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1949568-xmn__ld.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Longshot",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1056825-longshot.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Lost Tales",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/38795-6023-43600-1-x-men-lost-tales.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "X-Men: Magik",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/70142-11667-103140-1-magik.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "X-Men: Magik - Storm & Illyana",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5978793-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Magik: Storm and Illyana",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55780/1136788-untitled_1.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Magneto Testament",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3669083-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Magneto War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/2165596-x_men_the_magneto_war__1999__1.jpeg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Manifest Destiny",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/527746-0000.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "X-Men: Manifest Destiny",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5085873-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Manifest Destiny: Nightcrawler",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/33110/733578-manifestdestinynightcrawler.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Marauders",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6703963-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Messiah CompleX",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1862089-tpb.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Messiah Complex",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2799869-x_men_messiah_complex__mrshepherd_megan__pg001a.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Messiah Complex – Mutant Files",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2770837-x_men___messiah_complex___mutant_files_000.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Millennial Visions",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3755972-01.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Millennial Visions",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/106745-18456-108329-1-x-men-millenial-vis.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Muertas",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3968805-02.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Mutant Genesis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/10069/545339-scan0001.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Mutant Genesis 2.0",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5199934-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Mutant Massacre",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3755976-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Mutant Massacre",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1087942-73437_20061202120908_large.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Mutant Massacre Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6676214-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Nation X",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4306462-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: No More Humans",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3805334-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Odd Men Out",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/475155-xmenoddmenout.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Old Soldiers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1597304-xmn__os.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Onslaught Aftermath",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6850890-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Operation Zero Tolerance",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4062275-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Original Sin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/574687-0003.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Phalanx Covenant",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3622133-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Phoenix",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4405248-01.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "X-Men: Phoenix - Endsong",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1051952-endsong.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Phoenix - Endsong",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/108980/2516997-x_men__phoenix___endsong__1__2005_a.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "X-Men: Phoenix - Warsong",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3232175-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Phoenix Endsong/Warsong Ultimate Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2414871-xmn_pnx_esg_wsg_uc.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Phoenix Force Handbook",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5551/1311371-8efe8192_890c_4c47_a334_39a00b4089f5.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Phoenix In Darkness by Grant Morrison",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6631671-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Phoenix Rising",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1002506-xmn.gif",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Phoenix Warsong",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2945208-x_menphoenixwarsong1_001.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "X-Men: Pixie Strikes Back",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5778696-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Pixie Strikes Back",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1122328-pixie.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "X-Men: Powerless!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1351923-xmn_pwl.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Prelude to Age of Apocalypse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3856177-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Prelude to Onslaught",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6705505-4055723511-73060.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Prelude to Schism",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1796911-xp.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "X-Men: Prelude to Schism",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4098409-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Prime",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/89777-18154-106333-1-x-men-prime.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Primer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3826108-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Proteus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1221272-xmn.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Psylocke",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4656010-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Reckless Abandonment",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4845311-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Red",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6266928-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "11 Issues"
    },
    {
      "title": "X-Men: Red Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6447381-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Red: The Hate Machine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6595040-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Regenesis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2089396-01a.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Reload By Chris Claremont: House of M",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7175965-02.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Reload by Chris Claremont: The End of History",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730788-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Return of Magik",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/528159-2mevg4z.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Revolution by Chris Claremont Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6538905-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Road To Onslaught",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4261020-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "X-Men: Ronin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1074355-xr.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Ronin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3848/555856-1_1.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "X-Men: S.W.O.R.D. - No Time To Breathe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/49017/1326964-sword_cover.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Schism",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2140235-xmn__sch.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Schism",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1905996-xmschism_1_oroboros_cps_001.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "X-Men: Season One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/104675/2242985-xmenso.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Second Coming",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1169574-prv4749_cov.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "X-Men: Second Coming",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/121886/2940652-c8_254376_0_xmensecondcoming0hcsecondcomin.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Second Coming Revelations",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6500035-2563909897-69151.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Shattershot",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7175966-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Spotlight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3755980-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Starjammers by Dave Cockrum",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7125482-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Storm",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3363786-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Summers and Winter",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7184478-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Supernovas",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/253963-20081-119767-2-x-men-supernovas.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Sword of the Braddocks",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/746736-1.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: The 198",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/88716-18129-106206-1-x-men-the-198.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "X-Men: The 198 Files",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/88926-18136-106250-1-x-men-the-198-files.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: The Adamantium Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3809654-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: The Adventures of Cyclops and Phoenix",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4107886-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: The Age of Apocalypse Alpha",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4763047-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: The Age of Apocalypse Omnibus Companion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3738239-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: The Asgardian Wars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3504619-01.jpg",
      "year": "1989",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: The Blood of Apocalypse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4306468-01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: The Burning World",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4694660-05.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: The Complete Onslaught Epic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4161688-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "X-Men: The Curse Is Broken",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4306011-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: The Dark Phoenix Saga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1043983-dps.jpg",
      "year": "1991",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: The Dark Phoenix Saga Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6538904-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: The Early Years",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/35002-5338-39093-1-x-men-the-early-yea.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "17 Issues"
    },
    {
      "title": "X-Men: The End Trilogy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1075111-et.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: The End: Book 1: Dreamers & Demons",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1075098-e1.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: The End: Book 1: Dreamers & Demons",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3664/147549-18843-111363-1-x-men-the-end.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "X-Men: The End: Book 2: Heroes & Martyrs",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1075102-e2.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: The End: Book 2: Heroes & Martyrs",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/176486-19047-113732-2-x-men-the-end.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "X-Men: The End: Book 3: Men & X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1075106-e3.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: The End: Book 3: Men & X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3664/176887-19053-113784-1-x-men-the-end.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "X-Men: The Exterminated",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6712700-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: The Hellfire Club",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4405242-01.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "X-Men: The Hidden Years",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6131876-0090620407-59613.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "X-Men: The Hidden Years",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/16281/320698-9202-124309-1-x-men-the-hidden-ye.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "22 Issues"
    },
    {
      "title": "X-Men: The Hunt For Professor X",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4635242-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: The Magneto War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6640659-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: The Manga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1168039-manga_1.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "26 Issues"
    },
    {
      "title": "X-Men: The Movie",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55780/1095489-x_men.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: The New Age of Apocalypse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4285871-01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: The Rise of Apocalypse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5211116-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: The Road To Onslaught",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/99400-18281-107022-1-x-men-road-to-onsla.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: The Search For Cyclops",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/172639-7198-51339-3-x-men-search-for-cy.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "X-Men: The Shattering",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3984721-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: The Times & Life of Lucas Bishop",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/28266/701825-x_men_bishop__001.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "X-Men: The Trial of Gambit",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5337572-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: The Ultra Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/73721-9204-70491-1-x-men-the-ultra-col.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "X-Men: The Wedding Album",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/108980/2198677-x_men_the_wedding_album__1_1994_.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: The Wedding of Cyclops & Phoenix",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6595041-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: The Wedding of Cyclops and Phoenix",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2639706-3b336e2d5d61b37b10ccfc38e77c5ddc.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: The Wedding Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6429674-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Time Gliders",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/18161/832345-0002.scan_ed_edit_by_aquila.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "X-Men: To Serve and Protect",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6754/1487699-xmenserve1c.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "X-Men: To Serve and Protect",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/96747/1837853-1132106_ful_copia.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Trial of the Juggernaut",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7125483-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: True Friends",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/40794-6361-46025-1-x-men-true-friends.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "X-Men: Uncanny Origins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6640660-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Unstoppable",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6779348-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Vignettes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3368794-01.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "X-Men: War Machines",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031835-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: We Are the X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6653377-8705777874-72696.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: With Great Power",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1879462-xgp.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: With Great Power",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2765882-x_men01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Wolverine/Gambit",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2898555-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Worlds Apart",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1051972-apart.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Worlds Apart",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2205180-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "X-Men: Worst X-Man Ever",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5070069-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "X-Men: Worst X-Man Ever",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5398611-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Wrath of Apocalypse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/109227/2359305-9367791_1.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: X-Club",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2459735-xmn__xcb.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: X-Corps",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3714583-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: X-Cutioner's Song",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/61948/2010337-000a.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: X-Cutioner's Song",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031880-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: X-Termination",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515608-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: X-Tinction Agenda",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1918746-xmn__xta.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: X-Tinction Agenda",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3390529-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Year of the Mutants Collectors' Preview",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1167606-xmen_coll_pre_000f.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Yearbook 1999",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/14955/497653-xmenyearbook1999.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Years of Future Past: Warzones!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4932927-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men: Zero Tolerance",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1059528-xmn.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men/Alpha Flight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/48381-3522-57851-1-x-men--alpha-flight.jpg",
      "year": "1985",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "X-Men/Alpha Flight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/24967/447924-x_men_alpha_flight_vol_2__1.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "X-Men/Alpha Flight: The Gift",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1168150-alpha.jpg",
      "year": "1988",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men/Avengers: Onslaught Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/103431/4752987-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men/Black Panther: Wild Kingdom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4261003-01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men/Captain Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/28028/681463-x_cu_cover.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men/Fantastic Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4405237-01.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "X-Men/Fantastic Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5442814-01.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men/Fantastic Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7234747-01.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men/Runaways",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1124/85142-18056-105745-1-x-men-runaways.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men/Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/603826-15mfip5.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "X-Men/Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5478643-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men/Spider-Man: Savage Land",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/69237/1269796-x_men___spider_man_savage_land___page_1.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men/Steve Rogers: Escape from the Negative Zone",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1961030-xmn_sr__eftnz.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Nation 2099",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/106798-18458-108332-2-x-nation-2099.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "X-Necrosha",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/96747/3219077-216958_20110110190609_large.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Statix",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3417306-01.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "26 Issues"
    },
    {
      "title": "X-Statix",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5901215-01.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "X-Statix Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2656437-9780785158448.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Statix Presents: Dead Girl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5941534-01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Statix: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7219478-4753662757-81570.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Termination",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2938122-01a.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "X-Terminators",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2662757-x_terminators__1__of_4____page_1.jpg",
      "year": "1988",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "X-Tinction Agenda",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4598406-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "X-Tinction Agenda: Warzones!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5055952-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Treme X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/2488003-prv13049_cov.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "14 Issues"
    },
    {
      "title": "X-Treme X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/55102-9411-76558-1-x-treme-x-men.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "46 Issues"
    },
    {
      "title": "X-Treme X-Men 2001",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/46406/873322-x_treme_x_men_annual___queen_of_shadows_v2001__2001__2001_0____page_1.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Treme X-Men: Destiny",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5082191-01.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Treme X-Men: God Loves, Man Kills",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1287017-xtr__glmk.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Treme X-Men: Intifada",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1287018-xtr__int.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Treme X-Men: Invasion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1286997-xtr__inv.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Treme X-Men: Mekanix",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5442819-01.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Treme X-Men: Prisoner Of Fire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/2379151-xtxm_pof.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Treme X-Men: Savage Land",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6754/163108-18959-112491-1-x-treme-x-men-savag.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "X-Treme X-Men: Savage Land",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5802653-01.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Treme X-Men: Schism",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5271881-01.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Treme X-Men: Storm - The Arena",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1287024-xtr__sta.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Treme X-Men: Xavier Must Die!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2898556-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Treme X-Men: You Can't Go Home Again",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5028074-02.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Treme X-Pose",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/682595-x_treme_x_men_x_pose_1.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "X-Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/36573-5572-40864-1-x-universe.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "X-Women",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2843180-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Women",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1291263-1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Xavier Institute Alumni Yearbook",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4285923-01.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Xenobrood",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/35747-5270-39914-1-xenobrood.jpg",
      "year": "1994",
      "publisher": "DC Comics",
      "Field7": "7 Issues"
    },
    {
      "title": "Xero",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/38826-5993-43641-1-xero.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "XIII",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1688819-xiiivol1.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Xombi",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/2189331-xombi.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Xombi",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1721172-xombi.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "XSE",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/102181-18353-107618-1-xse.JPG",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Yars' Revenge",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/72648/2378740-yarsrevenge.jpg",
      "year": "1982",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Year in Review: Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1117823-cover.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Year of the Villain: Hell Arisen",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7184395-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Year One: Batman Scarecrow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/584055-1.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Year One: Batman/Ra's Al Ghul",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1812507-yaer_one_ra_s_al_ghul.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Year One: Batman/Ra's al Ghul",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/21374/399492-21686-130863-1-batman-year-one--ra.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Years of Future Past",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4598407-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Yellow, Blue and Gray",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4029568-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Yogi Bear",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/48372-2919-57842-1-yogi-bear.jpg",
      "year": "1977",
      "publisher": "Marvel",
      "Field7": "9 Issues"
    },
    {
      "title": "Yogi Bear's Easter Parade",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1249835-yogi_bear_s_easter_parade_v1_002.jpg",
      "year": "1978",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Yondu",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7135759-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Yossel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1802412-17623_400x600.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "You Are Deadpool",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6406912-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "You Are Deadpool",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6623661-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "You Don't Say",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1231454-you_don_t_say_.jpg",
      "year": "1963",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Young All-Stars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4405250-01.jpg",
      "year": "1987",
      "publisher": "DC Comics",
      "Field7": "31 Issues"
    },
    {
      "title": "Young All-Stars Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/4485727-yas%20annual%20%231.jpg",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Allies",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/1519043-young_allies_vol_2_1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Young Allies",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5706508-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Allies Comics: 70th Anniversary Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/45797/849556-p00001_5_.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2825932-prv14919_cov.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "15 Issues"
    },
    {
      "title": "Young Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/70872-11870-103870-1-young-avengers.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Young Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1141351-avg.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/717372-ya1.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Young Avengers 1 Directors Cut",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/895582-yadc_01.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Avengers By Allan Heinberg & Jim Cheung Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7086523-7233666782-79792.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Avengers by Allan Heinberg & Jim Cheung: The Children's Crusade",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5879909-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Avengers By Gillen And McKelvie Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4258116-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Avengers Presents",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1148571-ya.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Avengers Presents",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/287321-20380-121886-1-young-avengers-prese.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Young Avengers Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51438/1020530-young_avengers_special__1_cover.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Avengers Ultimate Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1328549-ya_uc.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Avengers: Alternative Culture",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3781830-02.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Avengers: Mic-Drop At the Edge of Time and Space",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3841180-03.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Avengers: Style > Substance",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3499748-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Gotham Sampler",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4600527-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Guns Sketchbook",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3067508-01.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Guns Sketchbook 2009",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2810506-yg09sb_001.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Guns Sketchbook 2019",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7000521-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Guns: Reloaded Sketchbook",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2777271-young_guns____reloaded_sketchbook_000.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Heroes In Love",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4405260-01.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "18 Issues"
    },
    {
      "title": "Young Inhumans",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3699862-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Justice",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/1675792-cover_image.jpeg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "26 Issues"
    },
    {
      "title": "Young Justice",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5819644-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Young Justice",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6754311-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "13 Issues"
    },
    {
      "title": "Young Justice",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/74546-9420-76637-1-young-justice.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "56 Issues"
    },
    {
      "title": "Young Justice",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3575658-01.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Justice 80-Page Giant",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1148011-p00001.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Justice Secret Files",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1148017-p00001.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Justice: A League of Their Own",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2059452-a_league_of_their_own.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Justice: Creature Features",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3495389-03.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Justice: Gemworld",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7074786-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Justice: Invasion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3493695-04.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Justice: No Man's Land Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/1158368-yjnml1a.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Justice: Our Worlds at War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/190629-19122-114252-1-young-justice-our-w.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Justice: Outsiders",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6746973-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Young Justice: Sins of Youth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2059448-sins_of_youth.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Justice: Sins of Youth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62392/1461727-sinsofyouth1_00.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Young Justice: The Early Missions",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7091392-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Justice: The Secret",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5551/670595-83f90d0b_5934_46ad_9c1f_28f53c0ccc6b.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Justice: Training Day",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3575659-02.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Love",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/6109-2114-6675-1-young-love.jpg",
      "year": "1963",
      "publisher": "DC Comics",
      "Field7": "90 Issues"
    },
    {
      "title": "Young Marvel: Little X-Men/Little Avengers Big Trouble",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4553239-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Marvelman Classic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2010306-ymm_cls.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Young Monsters in Love",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6277711-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Romance",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27783/758133-y_romance_1.jpg",
      "year": "1947",
      "publisher": "DC Comics",
      "Field7": "208 Issues"
    },
    {
      "title": "Young Romance: The New 52 Valentine's Day Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2853326-yrom_cv1.jpeg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Young X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/721586-young_x_men_000.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Young X-Men: Book of Revelations",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5028077-02.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Young X-Men: Final Genesis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1855630-young_x_men_final_genesis.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Yuppies From Hell",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/1165272-26157.jpg",
      "year": "1989",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Zatanna",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/108980/2198758-zatanna__1a__2010_.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "16 Issues"
    },
    {
      "title": "Zatanna and the House of Secrets",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7240307-1290859059-83996.jpg",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "0 Issues"
    },
    {
      "title": "Zatanna by Paul Dini",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5723010-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Zatanna Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/108980/2198769-zatanna_special__1987_.jpg",
      "year": "1987",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Zatanna: Come Together",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/302619-20480-122629-1-zatanna-come-togeth.jpg",
      "year": "1993",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Zatanna: Shades of the Past",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/104675/2101479-sotp.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Zatanna: The Mistress of Magic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1712133-screen_capture.png",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Zero",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/82159/1883556-zerobeginningoftomorrow.jpg",
      "year": "1994",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Zero Hour Ashcan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/2386881-zh_ash__0001.jpg",
      "year": "1994",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Zero Hour Sampler 1994",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/82159/1883583-zeromonthsampler.jpg",
      "year": "1994",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Zero Hour: Crisis in Time",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4655999-01-new-edition.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Zero Hour: Crisis in Time",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/5815491-zero%20hour%20%234%20final.jpg",
      "year": "1994",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Zero Hour: Crisis In Time",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6406913-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Zero Hour: Crisis In Time 25th Anniversary Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7115850-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Ziggy Pig: Silly Seal Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6828951-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Zip",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/5247680-zip196403.jpg",
      "year": "1964?",
      "publisher": "Marvel",
      "Field7": "36 Issues"
    },
    {
      "title": "Zombies Assemble",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5842067-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Zombies Assemble 2",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5996357-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Zombies Assemble: Manga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6135225-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Zombies Christmas Carol",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/80654/1883347-christmas_carol_1_0001_copy.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Zombies Christmas Carol",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4288112-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Zoned Comics: Bullies in a Strange Land",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5558027-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Zorro",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/48389-4429-57861-1-zorro.jpg",
      "year": "1990",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Batman '66 Meets Steed and Mrs Peel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5305631-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Batman 80-Page Giant",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/65382-11213-98379-1-batman-80-page-giant.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Batman: Gotham After Midnight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15455/462574-bgam.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Blackhawk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/2622-1819-2848-1-blackhawk.jpg",
      "year": "1944",
      "publisher": "DC Comics",
      "Field7": "265 Issues"
    },
    {
      "title": "Captain Marvel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6113370-125.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Captain Marvel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/248897-18270-106997-2-captain-marvel.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Captain Marvel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5302/217701-19319-115963-1-captain-marvel.jpg",
      "year": "1989",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Marvel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5008132-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "10 Issues"
    },
    {
      "title": "Captain Marvel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2770643-cm_1_dcp_0000.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Daredevil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3703480-01a.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "21 Issues"
    },
    {
      "title": "DC Super Hero Girls: Spaced Out",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6152573-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "13 Issues"
    },
    {
      "title": "Exiles",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/14859/761377-exiles_v4_001_0001a.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Green Lantern",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/2008261-1.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "57 Issues"
    },
    {
      "title": "History of the Marvel Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2801843-his01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Man-Thing",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5734662-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Marvel Universe Guardians of the Galaxy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4398329-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Nightwing Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3406968-ntwann-cv1-0f33f.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Red Wolf",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/11039-2579-12199-1-red-wolf.jpg",
      "year": "1972",
      "publisher": "Marvel",
      "Field7": "9 Issues"
    },
    {
      "title": "Spider-Woman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/72982-9573-82310-1-spider-woman.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "18 Issues"
    },
    {
      "title": "Spider-Woman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4912432-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "17 Issues"
    },
    {
      "title": "Superboy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/2009415-1.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "35 Issues"
    },
    {
      "title": "Superboy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/217237-19154-115916-1-superboy.jpg",
      "year": "1949",
      "publisher": "DC Comics",
      "Field7": "230 Issues"
    },
    {
      "title": "The Death of Superman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/872127-death_of_superman.jpg",
      "year": "1993",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "The Spirit",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1091072-vol1.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Vision",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6223171-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2767534-x_men__157__2004___angrybadger_dcp____001.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "51 Issues"
    },
    {
      "title": "X-Men: First Class",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/287408-18941-121890-1-x-men-first-class.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "16 Issues"
    },
    {
      "title": "Young Justice: Invasion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3493695-04.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Justice: No Man's Land Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/1158368-yjnml1a.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Justice: Our Worlds at War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/190629-19122-114252-1-young-justice-our-w.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Justice: Outsiders",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6746973-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Young Justice: Sins of Youth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2059448-sins_of_youth.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Justice: Sins of Youth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62392/1461727-sinsofyouth1_00.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Young Justice: The Early Missions",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7091392-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Justice: The Secret",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5551/670595-83f90d0b_5934_46ad_9c1f_28f53c0ccc6b.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Justice: Training Day",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3575659-02.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Love",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/6109-2114-6675-1-young-love.jpg",
      "year": "1963",
      "publisher": "DC Comics",
      "Field7": "90 Issues"
    },
    {
      "title": "Young Marvel: Little X-Men/Little Avengers Big Trouble",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4553239-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Marvelman Classic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2010306-ymm_cls.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Young Monsters in Love",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6277711-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Young Romance",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27783/758133-y_romance_1.jpg",
      "year": "1947",
      "publisher": "DC Comics",
      "Field7": "208 Issues"
    },
    {
      "title": "Young Romance: The New 52 Valentine's Day Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2853326-yrom_cv1.jpeg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Young X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/721586-young_x_men_000.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Young X-Men: Book of Revelations",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5028077-02.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Young X-Men: Final Genesis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1855630-young_x_men_final_genesis.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Yuppies From Hell",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/1165272-26157.jpg",
      "year": "1989",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Zatanna",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/108980/2198758-zatanna__1a__2010_.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "16 Issues"
    },
    {
      "title": "Zatanna and the House of Secrets",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7240307-1290859059-83996.jpg",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "0 Issues"
    },
    {
      "title": "Zatanna by Paul Dini",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5723010-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Zatanna Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/108980/2198769-zatanna_special__1987_.jpg",
      "year": "1987",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Zatanna: Come Together",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/302619-20480-122629-1-zatanna-come-togeth.jpg",
      "year": "1993",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Zatanna: Shades of the Past",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/104675/2101479-sotp.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Zatanna: The Mistress of Magic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1712133-screen_capture.png",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Zero",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/82159/1883556-zerobeginningoftomorrow.jpg",
      "year": "1994",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Zero Hour Ashcan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/2386881-zh_ash__0001.jpg",
      "year": "1994",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Zero Hour Sampler 1994",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/82159/1883583-zeromonthsampler.jpg",
      "year": "1994",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Zero Hour: Crisis in Time",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4655999-01-new-edition.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    }
  ]

db.comicvinevolumes.collection
.insertMany(comicvinevolumesSeed)
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });