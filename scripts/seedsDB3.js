const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/comicbookdb"
  );


const comicvinevolumesSeed = 
[
    {
      "title": "Deadpool",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2778493-deadpool__1___page_1.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "71 Issues"
    },
    {
      "title": "Deadpool",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1993051-01.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Deadpool",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1993082-01a.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "67 Issues"
    },
    {
      "title": "Deadpool",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3414947-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "45 Issues"
    },
    {
      "title": "Deadpool",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1993061-01.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Deadpool",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4887870-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "37 Issues"
    },
    {
      "title": "Deadpool / Death '98",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/378/124638-18606-109777-1-deadpool--death-ann.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool & Cable",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/1649648-prev_img.jpeg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool & Cable Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4188607-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool & Cable: Split Second",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5160012-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool & Cable: Split Second",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4974159-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Deadpool & Cable: Split Second Infinite Comic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4872346-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Deadpool & Co.",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6223671-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool & The Mercs For Money",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5328081-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "10 Issues"
    },
    {
      "title": "Deadpool & The Mercs For Money",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5030418-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Deadpool & The Mercs For Money: IvX",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5819608-02.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool & the Mercs For Money: Merc Madness",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5406501-00.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool & The Mercs For Money: Mo' Mercs, Mo' Monkeys",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5700380-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool & Widdle Wade Team-Up",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/378/124601-18602-109766-1-deadpool--widdle-wa.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool & X-Force Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6124888-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool 2099",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6006859-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool and Cable Ultimate Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1153825-dpcb.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Deadpool and the Secret Defenders",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5700381-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/98410/1797761-dpann_1_oroboros_cps_001.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3468799-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Deadpool Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5455941-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7047336-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool Beginnings Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5669294-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool Bi-Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4103479-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool by Daniel Way",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1899736-dp_os_hc.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool By Daniel Way: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6271362-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Deadpool By Daniel Way: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6924393-5190766970-77303.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Deadpool by Joe Kelly Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3540223-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool by Joe Kelly: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7135760-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool By Posehn & Duggan Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5575653-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool by Posehn & Duggan: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6856834-3771675918-76075.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Deadpool by Posehn And Duggan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7019210-2784271157-79000.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Deadpool by Skottie Young: Good Night",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7023020-02.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool by Skottie Young: Mercin' Hard For the Money",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6744789-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool by Skottie Young: Weasel Goes To Hell",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7125467-03.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool Classic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2736999-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "23 Issues"
    },
    {
      "title": "Deadpool Classic Companion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4511997-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Deadpool Classic Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4984279-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool Corps",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/1843257-deadpool_corps__2010__01a.jpeg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Deadpool Corps: Pool-Pocalypse Now",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4721200-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool Corps: Rank and Foul",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1164672-p00001___deadpool_corps_rank_and_foul__1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool Corps: You Say You Want A Revolution?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031813-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool Family",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/87073/1759145-deadpoolfamily.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool Firsts",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5045261-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool Flashbacks",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4998049-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool Kills Deadpool",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3799294-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool Kills Deadpool",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3145486-01a.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Deadpool Kills the Marvel Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3530866-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool Kills the Marvel Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3327826-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool Kills the Marvel Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/2502012-prv13106_cov.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Deadpool Kills The Marvel Universe Again",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6152991-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool Kills The Marvel Universe Again",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5935978-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Deadpool Killustrated",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2825940-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Deadpool Killustrated",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3443635-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool Max: Involuntary Armageddon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6086789-2684479607-57805.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool Max: Nutjob",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6066374-5007761553-57468.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool Max: Second Cut",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6087018-8397503067-58226.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool MGC",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1257561-deadpool.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool Minibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4077143-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Deadpool Pulp",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1765293-dp_plp.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool Pulp",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1369971-pulp1cov_0001.png",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Deadpool Team-Up",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/87073/1748426-deadpoolteam_up883.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "17 Issues"
    },
    {
      "title": "Deadpool Team-Up: BFFs",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4136283-03.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool Team-Up: Good Buddies",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031799-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool Team-Up: Special Relationship",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031815-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool the Duck",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5874684-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool the Duck",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5628426-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Deadpool v Gambit",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5278611-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Deadpool V Gambit: The \"V\" Is For \"Vs.\"",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5523034-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool vs. Carnage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3732881-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Deadpool vs. Carnage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4061815-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool vs. Old Man Logan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6110278-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Deadpool vs. Old Man Logan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6374039-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool vs. Thanos",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4932896-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool vs. Thanos",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4777991-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Deadpool Vs. The Marvel Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/1153412-dpvsmu.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool vs. The Punisher",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5797760-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Deadpool vs. The Punisher",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6029054-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool vs. X-Force",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3930268-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Deadpool vs. X-Force",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4204850-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: All Good Things",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4593491-08.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: All in the Family",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4721201-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: Assassin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6657914-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: Assassin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6467847-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Deadpool: AXIS",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4443586-07.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: Back In Black",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5467801-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Deadpool: Back In Black",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5711899-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: Bad Blood",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5852958-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: Dark Reign",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1075568-_b_omblgbwk___kgrhgookiyejllmfcshbksvpyb9pw___3.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: Dead",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3373078-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: Dead Head Redemption",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1904754-dp__dhr.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: Dead Presidents",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3073990-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: Deadpool vs. S.H.I.E.L.D.",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3968802-04.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: Dracula's Gauntlet",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3945879-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "7 Issues"
    },
    {
      "title": "Deadpool: Dracula's Gauntlet",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4162336-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: Evil Deadpool",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031800-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: Games of Death",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/739985-1.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: I Rule, You Suck",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1758779-dp__irys.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: Institutionalized",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2131984-dp__isl.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: Last Days of Magic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5211084-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: Masacre",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5187351-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: Merc With a Mouth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/37908/860524-dpmerc001_dc11_1_1_.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "13 Issues"
    },
    {
      "title": "Deadpool: Merc With a Mouth: Head Trip",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3626771-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: Monkey Business",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1284670-dp__mb.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: Operation Annihilation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2026190-dp__oa.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: Original Sin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4245111-06.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: Secret Agent Deadpool",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6596514-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Deadpool: Secret Agent Deadpool",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6807721-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: Secret Invasion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1172254-dp.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: Soul Hunter",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3257006-02.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: Space Oddity",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1904571-dp__so.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: Suicide Kings",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1172241-dp.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: Suicide Kings",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/760721-1.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Deadpool: The Adamantium Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5722976-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: The End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7226416-01.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: The Gauntlet",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3558726-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "13 Issues"
    },
    {
      "title": "Deadpool: The Gauntlet",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3572913-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: The Good, The Bad and the Ugly",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3513469-03.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: The Ones With Deadpool",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4361226-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: Too Soon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5489478-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Deadpool: Too Soon?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5759771-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: Too Soon? Infinite Comic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5306281-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "8 Issues"
    },
    {
      "title": "Deadpool: Wade Wilson's War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3609635-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: What Happened in Vegas",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1458309-dp__whiv.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: World's Greatest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6988810-0098710318-78249.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Deadpool: World's Greatest: 'Till Death Do Us...",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6034436-08.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: World's Greatest: Civil War II",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5606804-05.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: World's Greatest: Deadpool Does Shakespeare",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5863197-07.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: World's Greatest: Deadpool In Space",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6050253-09.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: World's Greatest: Deadpool Vs. Sabretooth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5405823-03.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: World's Greatest: End of An Error",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5254527-02.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: World's Greatest: Millionaire With A Mouth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5160013-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: World's Greatest: Patience: Zero",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5819609-06.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: World's Greatest: Secret Empire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6123809-10.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: World's Greatest: Temporary Insanitation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6706385-3419813841-44123.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool: X Marks The Spot",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1122179-deadpool_volume_3_x_marks_the_spot_hc.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool's Art of War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4158601-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Deadpool's Art of War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4460328-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool's Secret Secret Wars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5028063-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadpool's Secret Secret Wars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4572725-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Deadpool/GLI Summer Fun Spectacular",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/153296-18879-111589-1-deadpool-gli-summer.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadshot",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/27269-3992-30256-1-deadshot.jpg",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Deadshot",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3418/134221-18685-110391-1-deadshot.GIF",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Deadshot: Beginnings",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3426147-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadshot: Bulletproof",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4521658-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dear Justice League",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7023021-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dear Justice League FCBD 2019 Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6919226-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Death Metal Vs. Genetix",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61518-5005-94513-1-death-metal-vs-gene.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Death of Captain America Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1289556-cap_omn.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Death of Captain America: The Burden of Dreams",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1094814-cap.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Death of Captain America: The Death of the Dream",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1094792-cap.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Death of Captain America: The Man Who Bought America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1094820-cap.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Death of Dracula",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6544275-5083401424-70289.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Death of Dracula",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1281196-death_of_dracula.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Death of Groo the Wanderer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51078/997388-deathof1.jpeg",
      "year": "1987",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Death of Hawkman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5470242-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Death of the Inhumans",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6744790-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Death of the Inhumans",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6497376-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Death of the New Gods",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/213687-19262-115599-1-death-of-the-new-god.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "8 Issues"
    },
    {
      "title": "Death of the New Gods",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/907350-0.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Death of Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/4068584-deathofwolv2014001_dc11-page-001.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Death of Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4318740-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Death of Wolverine Companion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6838530-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Death of Wolverine: Deadpool & Captain America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4184412-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Death of Wolverine: Life After Logan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4199363-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Death of Wolverine: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6792547-5571541164-74797.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Death of Wolverine: The Logan Legacy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4157751-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "7 Issues"
    },
    {
      "title": "Death of Wolverine: The Logan Legacy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4418985-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Death of Wolverine: The Weapon X Program",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4199364-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Death of Wolverine: The Weapon X Program",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4433813-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Death of X",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5467802-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Death of X",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5722978-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Death's Head",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7023022-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Death's Head: Clone Drive",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7184467-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deathblow: The Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3724857-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Deathlok",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/223228-19493-116614-1-deathlok.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "11 Issues"
    },
    {
      "title": "Deathlok",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/42804-4391-48933-1-deathlok.jpg",
      "year": "1990",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Deathlok",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/55483-4589-77496-1-deathlok.jpg",
      "year": "1991",
      "publisher": "Marvel",
      "Field7": "34 Issues"
    },
    {
      "title": "Deathlok",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4184415-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "10 Issues"
    },
    {
      "title": "Deathlok Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/225706-19570-117055-1-deathlok-annual.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Deathlok Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/225719-4590-117058-1-deathlok-special.jpg",
      "year": "1991",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Deathlok The Demolisher: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4133392-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deathlok: Control. Alt. Delete.",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4593492-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deathlok: Man Versus Machine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4814477-02.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deathlok: Rage Against the Machine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4390391-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deathlok: The Demolisher",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1941337-deathlok.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deathlok: The Living Nightmare of Michael Collins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5045429-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deathlok: The Souls Of Cyber-Folk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4330872-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deathstroke",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2033370-01.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "21 Issues"
    },
    {
      "title": "Deathstroke",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4168777-deathstroke%2001.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "20 Issues"
    },
    {
      "title": "Deathstroke",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5398333-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "50 Issues"
    },
    {
      "title": "Deathstroke Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4713198-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Deathstroke Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6257926-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Deathstroke by Tony Daniel Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6657915-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Deathstroke the Terminator",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4203718-deathstroke1m103.jpg",
      "year": "1991",
      "publisher": "DC Comics",
      "Field7": "61 Issues"
    },
    {
      "title": "Deathstroke the Terminator Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/24823/666584-390px_deathstroke_the_terminator_annual_vol_1_1.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Deathstroke the Terminator: Assassins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4492988-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Deathstroke the Terminator: Full Cycle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64684/1520116-deathstrokefullcycle_tpb.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Deathstroke the Terminator: Nuclear Winter",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6091848-03.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Deathstroke the Terminator: Sympathy For the Devil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4963455-02.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Deathstroke, The Terminator: Crash Or Burn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6418903-04.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Deathstroke: Arkham",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7083681-9915378896-80818.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Deathstroke: Defiance",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6384997-04.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Deathstroke: Family Business",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5586799-04.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Deathstroke: God Killer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5062756-02.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Deathstroke: Gods of War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4627277-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Deathstroke: Legacy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3485582-01.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Deathstroke: Lobo Hunt",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3619467-02.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Deathstroke: Rebirth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5379269-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Deathstroke: Suicide Run",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5368813-03.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Deathstroke: The Fall of Slade",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6650818-05.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Deathstroke: The Gospel of Slade",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5935979-02.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Deathstroke: The Professional",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5738058-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Deathstroke: The Terminator: World Tour",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6760823-05.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Deathstroke: Twilight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6091849-03.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Deathstroke/Yogi Bear Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6668485-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Debbi's Dates",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67581/1262906-8481_debbi_s_dates__1___page_1.jpg",
      "year": "1969",
      "publisher": "DC Comics",
      "Field7": "11 Issues"
    },
    {
      "title": "Decades: Marvel In the '00s: Hitting the Headlines",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7000473-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Decades: Marvel In The '10s - Legends and Legacy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7039246-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Decades: Marvel In The '40s: The Human Torch vs. The Sub-Mariner",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6760825-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Decades: Marvel In The '50s: Captain America Strikes!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6797684-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Decades: Marvel In the '60s: Spider-Man Meets the Marvel Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6838532-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Decades: Marvel In The '70s - Legion of Monsters",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6883248-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Decades: Marvel In The '80s: Awesome Evolutions",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6922190-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Decades: Marvel In The '90s: The Mutant X-plosion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6974961-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "December 2010 Sneak Peeks",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1541483-december_2010_sneak_peeks_1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Decimation: Generation M",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5479061-01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Decimation: House of M - The Day After",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2764450-decimation___house_of_m___the_day_after_01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Decimation: Son of M",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3714565-01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Decimation: X-Men - The 198",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5451011-01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Decimation: X-Men - The Day After",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4306471-01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Defenders",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2115146-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Defenders",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/10390/395678-21661-130726-1-the-defenders.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Defenders",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/41787-6645-47448-1-defenders-the.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Defenders Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4017290-defendersan1vf7m074.jpg",
      "year": "1976",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Defenders Avengers X-Sanction Preview Book",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/2127757-defenders_avengers_x_sanction_preview_book_v2011__1__of_1___2011_10____page_1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Defenders by Matt Fraction",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2459791-dfn_by_mf1.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Defenders Epic Collection: Ashes, Ashes...",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6029055-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Defenders Epic Collection: The End of All Songs",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7184468-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Defenders Epic Collection: The New Defenders",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6559438-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Defenders Epic Collection: The Six-Fingered Hand Saga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5398597-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Defenders of Dynatron City",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61523-4785-94518-1-defenders-of-dynatro.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Defenders: From the Marvel Vault",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74848/1912149-defenders___from_the_marvel_vault.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Defenders: Indefensible",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5245484-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Defenders: Marvel Feature #1: Facsimile Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6922191-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Defenders: Strange Heroes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4545771-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Defenders: The Best Defense",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6838533-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Defenders: The Best Defense",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730716-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Defenders: The Coming of the Defenders",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2161211-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Defenders: Tournament of Heroes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/96686/2167311-defenders__tournament_of_heroes__1___page_1.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Demolition Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51078/1026404-dem1.jpeg",
      "year": "1993",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Demon Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/118497-18553-109257-1-demon-annual.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Demon Knights",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2033372-01.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "24 Issues"
    },
    {
      "title": "Demon Knights: Seven Against the Dark",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498162-01.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Demon Knights: The Avalon Trap",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6422993-7513327567-11862.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Demon Knights: The Gathering Storm",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3577700-03.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Demon: Driven Out",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/840673-1.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Dennis the Menace",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1250498-dennis_the_menace_001.jpg",
      "year": "1981",
      "publisher": "Marvel",
      "Field7": "13 Issues"
    },
    {
      "title": "Dennis the Menace Comics Digest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/2494035-denn1.jpg",
      "year": "1982",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Despicable Deadpool",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6093503-287.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "14 Issues"
    },
    {
      "title": "Despicable Deadpool: Bucket List",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6418904-02.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Despicable Deadpool: Deadpool Kills Cable",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6302382-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Despicable Deadpool: The Marvel Universe Kills Deadpool",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6506222-03.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Destroyer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61533-4222-94528-1-destroyer-the.jpg",
      "year": "1989",
      "publisher": "Marvel",
      "Field7": "9 Issues"
    },
    {
      "title": "Destroyer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1281526-destroyer_v2_001.jpg",
      "year": "1991",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Destroyer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61541-4591-94536-1-destroyer-the.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Destroyer by Robert Kirkman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6570586-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Detective Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1998236-1a.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "57 Issues"
    },
    {
      "title": "Detective Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38826/850144-0000.jpg",
      "year": "1937",
      "publisher": "DC Comics",
      "Field7": "883 Issues"
    },
    {
      "title": "Detective Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5253681-934.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "86 Issues"
    },
    {
      "title": "Detective Comics #1000: The Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6965801-1000.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Detective Comics #27 Special Edition (Batman 75 Day Comic 2014)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4000455-27.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Detective Comics #854 Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1266393-854.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Detective Comics 359 (Facsimile Edition)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7211103-359.jpg",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Detective Comics Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/5814010-dc%20annual%20%231%20final.jpg",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Detective Comics Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2556498-dtcann_cv1_ds.jpeg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Detective Comics Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6254355-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Detective Comics Classics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/148518/2953543-16967_900x1350.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Detective Comics: 80 Years of Batman: The Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6828900-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Detective Comics: Emperor Penguin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3453856-03.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Detective Comics: Endgame",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4438878-detective.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Detective Comics: Futures End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4069913-detective%20comics.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Detective Comics: Gothtopia",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4226453-05.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Detective Comics: Scare Tactics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3368517-02.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Detective Comics: The Wrath",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3913962-04.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Detention Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/617033-detention1.jpg",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Deus Ex",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1673959-01.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Devil Dinosaur",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/80884/3643883-2962542639-ac04..jpg",
      "year": "1978",
      "publisher": "Marvel",
      "Field7": "9 Issues"
    },
    {
      "title": "Devil Dinosaur by Jack Kirby Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/2175295-dd1.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Devil Dinosaur Spring Fling",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/24221/1149831-devil_dinosaur_spring_fling__01___00.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dexter",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4391376-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dexter",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3490440-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Dexter Down Under",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3650718-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Dexter's Laboratory",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/12075/532098-dexter.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "34 Issues"
    },
    {
      "title": "Diablo",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3415031-01.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Diablo: Sword Of Justice",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515493-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dial H",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/2422040-cover.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "16 Issues"
    },
    {
      "title": "Dial H for Hero",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6864456-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "11 Issues"
    },
    {
      "title": "Dial H for Hero: Enter the Heroverse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7188301-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dial H: Exchange",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3619469-02.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dial H: Into You",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3368524-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dial H: The Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4545149-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Diana Prince: Wonder Woman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2326021-01.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Diana: Princess of the Amazons",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7195744-01.jpg",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dimension of the Dark Shadows",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62392/2315855-dimensionofthedarkshadows.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dino Riders",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61545-4223-94540-1-dino-riders.jpg",
      "year": "1989",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Direct Currents",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1487618-09.jpg",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "92 Issues"
    },
    {
      "title": "Direct Currents",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11114/111147698/5562564-1480514938431.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Direct Currents Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1487688-01.jpg",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Disney Afternoon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/131456-18674-110282-1-disney-afternoon.JPG",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "10 Issues"
    },
    {
      "title": "Disney Comic Hits",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/591561-01.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "16 Issues"
    },
    {
      "title": "Disney Kingdoms: Figment 2",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4777997-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Disney Kingdoms: Seekers Of The Weird",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3983553-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Disney Kingdoms: Seekers of the Weird",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3572912-01a.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Disney Primer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51078/1000341-dis1.jpeg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Disney's Aladdin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4069661-01.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "11 Issues"
    },
    {
      "title": "Disney's Beauty and the Beast",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/1035988-us_beautyandthebeast_marvel1.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "13 Issues"
    },
    {
      "title": "Disney's Pocahontas",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/1215257-pocahontas1a.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Disney's The Hunchback of Notre Dame",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/37015/1106199-hunchback_of_notre_dame1.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Disney's The Lion King",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/608777-1.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Disney's The Little Mermaid",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4404892-01.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Disney's The Three Musketeers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1353141-disney_s_the_three_musketeers_v1__1___page_1.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Disney's Toy Story",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64684/1921101-toystory_1.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "District X",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/440583-district_x_1_00.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "14 Issues"
    },
    {
      "title": "District X: Mr. M",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5764477-01.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "District X: Underground",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5790880-02.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Disturbingly Awful Mad",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3223730-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Ditko Is... Amazing!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7169487-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Divergence FCBD Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4536287-divergence.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Divine Right: The Adventures of Max Faraday",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4265280-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Doc Samson",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/172754-19034-113602-1-doc-samson.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Doc Samson",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/66860-11390-99857-1-doc-samson.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Doc Savage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/11335-2570-12571-1-doc-savage.jpg",
      "year": "1972",
      "publisher": "Marvel",
      "Field7": "8 Issues"
    },
    {
      "title": "Doc Savage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1189435-doc_savage_1.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "18 Issues"
    },
    {
      "title": "Doc Savage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/27270-3994-30257-1-doc-savage.jpg",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "24 Issues"
    },
    {
      "title": "Doc Savage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1918048-01.jpg",
      "year": "1987",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Doc Savage Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74848/1774690-doc_savage_annual_89.jpg",
      "year": "1989",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Doc Savage: The Man of Bronze",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2063312-doc_savage.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Doc Savage: The Silver Pyramid",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1093611-doc_savage_the_silver_pyramid.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor 13: Architecture & Mortality",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27783/737117-dr_13.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Doom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7101014-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Doctor Doom's Revenge",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/223181-19482-116592-1-doctor-doom-s-reveng.jpg",
      "year": "1989",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Fate",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/27387-3995-30385-1-doctor-fate.jpg",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "41 Issues"
    },
    {
      "title": "Doctor Fate",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2757186-01.jpg",
      "year": "1987",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Doctor Fate",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4628883-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "18 Issues"
    },
    {
      "title": "Doctor Fate Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1256961-p00001.jpg",
      "year": "1989",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Fate: Fateful Threads",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5830865-03.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Fate: Prisoners of the Past",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5489481-02.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Fate: The Blood Price",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5109003-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Mid-Nite",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498164-01.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Mid-Nite",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6924400-1446358163-77475.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Doctor Octopus: Negative Exposure",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/7995/221823-19447-116457-1-spider-man-doctor-oc.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Doctor Spectrum: Full Spectrum",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1641262-ds__fs.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6458006-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "20 Issues"
    },
    {
      "title": "Doctor Strange",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/565073-1.jpg",
      "year": "1968",
      "publisher": "Marvel",
      "Field7": "15 Issues"
    },
    {
      "title": "Doctor Strange",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4838223-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "37 Issues"
    },
    {
      "title": "Doctor Strange",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/12773-2676-14334-1-doctor-strange.jpg",
      "year": "1974",
      "publisher": "Marvel",
      "Field7": "81 Issues"
    },
    {
      "title": "Doctor Strange",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7026165-2557018405-79023.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Doctor Strange - Marvel Legacy Primer Pages",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6119603-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange & Doctor Doom: Triumph & Torment",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5105941-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange & Doctor Doom: Triumph and Torment",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/566169-1.jpg",
      "year": "1989",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange & Ghost Rider Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/565065-1.jpg",
      "year": "1991",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange and the Secret Defenders",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5424754-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange and the Sorcerers Supreme",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5500594-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Doctor Strange and the Sorcerers Supreme: Out of Time",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5863202-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange and the Sorcerers Supreme: Time After Time",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6152994-02.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7125468-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5455949-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange by Donny Cates",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6893184-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange by Donny Cates: City of Sin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6631583-02.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange by Donny Cates: God of Magic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6477293-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange by Mark Waid: Across The Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6712645-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange by Mark Waid: Herald",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7075982-03.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange by Mark Waid: Remittance",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6913167-02.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange by Mark Waid: The Choice",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7205227-04.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange Classics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6539/426162-doctor_strange_classics_01.jpg",
      "year": "1984",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Doctor Strange Epic Collection: A Separate Reality",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6706444-5191225778-43735.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange Epic Collection: Afterlife",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6080284-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange Epic Collection: Master of the Mystic Arts",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6650939-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange Epic Collection: Triumph and Torment",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7115997-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5450896-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange Sorcerer Supreme Ashcan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23221/1644268-doctor_strange__ashcan_v3__2010____page_1.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/564778-1.jpg",
      "year": "1983",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange vs. Dracula: The Montesi Formula",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1641274-dsvsdrc__tmf.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange, Sorcerer Supreme",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/27319-4049-30307-1-doctor-strange-sorc.jpg",
      "year": "1988",
      "publisher": "Marvel",
      "Field7": "90 Issues"
    },
    {
      "title": "Doctor Strange, Sorcerer Supreme Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4026774-ds1.jpg",
      "year": "1976",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Doctor Strange, Sorcerer Supreme Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5935982-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Doctor Strange: A Separate Reality",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1641915-ds__asr.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange: Blood In The Aether",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5711901-03.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange: Damnation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6289328-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Doctor Strange: Damnation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6650938-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange: Damnation - The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6497379-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange: Don't Pay the Ferryman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4845164-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange: From the Marvel Vault",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/18863/1649837-strange.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange: Into the Dark Dimension",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1904598-ds__itdd.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange: Last Days of Magic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5173547-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange: Lords of Fear",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6203581-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange: Mr. Misery",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6060369-04.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange: Mystic Apprentice",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5500595-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange: Season One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2588841-comics_doctor_strange_season_one_cover.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange: Secret Empire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6223144-05.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange: Strange Origin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5408274-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange: Strange Tales",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5092534-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange: The Best Defense",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6721953-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange: The End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7226417-01.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange: The Flight of Bones",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6706447-3662798531-43736.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange: The Last Days of Magic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5478477-02.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange: The Oath",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1641291-ds__to.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange: The Oath",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2029266-01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Doctor Strange: The Oath: Halloween ComicFest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4884817-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange: The Way of the Weird",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5173548-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange: What is it That Disturbs You Stephen?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6706458-6190976482-43759.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange: What Is It That Disturbs You, Stephen?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6706456-4153069910-44124.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange/Punisher: Magic Bullets",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6029057-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Strange/Punisher: Magic Bullets",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5586803-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Doctor Strange/Punisher: Magic Bullets Infinite Comic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5513327-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "8 Issues"
    },
    {
      "title": "Doctor Voodoo: Avenger of the Supernatural",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5716486-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Voodoo: Avenger of the Supernatural",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/982622-voodoo.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Doctor Voodoo: The Origin of Jericho Drumm",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111121457/5243453-doctor%20voodoo_%20the%20origin%20of%20jericho%20drumm%20v2010%20%231%20-%20brother%20voodoo%21%20%282010_1%29%20-%20page%201.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doctor Who",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/22242-3339-24815-1-doctor-who.jpg",
      "year": "1984",
      "publisher": "Marvel",
      "Field7": "23 Issues"
    },
    {
      "title": "Dodo and The Frog",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67581/1286460-the_dodo_and_the_frog__80___page_1.jpg",
      "year": "1956",
      "publisher": "DC Comics",
      "Field7": "13 Issues"
    },
    {
      "title": "Dog Days of Summer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6947898-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dollar Comics: Batman #386",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7232870-01.jpg",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dollar Comics: Batman #497",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7108506-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dollar Comics: Batman #567",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7240245-01.jpg",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "0 Issues"
    },
    {
      "title": "Dollar Comics: Batman #608",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7067483-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dollar Comics: Batman #613",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7195715-01.jpg",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dollar Comics: Batman Adventures #12",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7211104-01.jpg",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dollar Comics: Batman Shadow of the Bat #1",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7232871-01.jpg",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dollar Comics: Batman/Huntress: Cry For Blood",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7218240-01.jpg",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dollar Comics: Birds of Prey #1",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7167917-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dollar Comics: Blackest Night #1",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7142265-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dollar Comics: Crisis On Infinite Earths",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7083441-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dollar Comics: Detective Comics #554",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7225211-01.jpg",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dollar Comics: Detective Comics #854",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7059399-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dollar Comics: Flash #164",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7182279-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dollar Comics: Flashpoint #1",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7133561-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dollar Comics: Green Lantern Rebirth #1",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7240246-01.jpg",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "0 Issues"
    },
    {
      "title": "Dollar Comics: Harley Quinn #1",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7074781-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dollar Comics: Infinite Crisis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7160263-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dollar Comics: Joker #1",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7091388-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dollar Comics: Luthor #1",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7152332-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dollar Comics: Superman #75",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7125237-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dollar Comics: Swamp Thing #1",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7116647-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dollar Comics: Tales of the Teen Titans Annual #3",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7174831-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dollar Comics: The Brave and the Bold #197",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7203357-01.jpg",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dollar Comics: Watchmen #1",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7100350-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Domination Factor: Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/66852-11388-99849-1-domination-factor-a.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Domination Factor: Fantastic Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/1637530-domination_factor_fantastic_four__1999__1.1.jpeg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Domino",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61159-10904-94154-1-domino.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Domino",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26954/507455-1997_domino_1.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Domino",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6374040-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "10 Issues"
    },
    {
      "title": "Domino Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6623608-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Domino: Hotshots",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7066188-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Domino: Hotshots",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6828904-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Domino: Killer Instinct",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6676159-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Domino: Soldier of Fortune",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6838535-02.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Don't Let the Penguin Drive the Batmobile!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6640607-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dong Xoai, Vietnam 1965",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1814205-u_000.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Doom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/2747/113912-18531-108892-1-doom.JPG",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Doom 2099",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/1811308-doom_2099__1993__1.jpeg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "44 Issues"
    },
    {
      "title": "Doom 2099",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7175954-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doom 2099: The Complete Collection By Warren Ellis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7101391-7506689366-80463.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doom Force Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/899276-1.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Doom Link",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/986568-doom_link__1__1995_0____page_1.jpg",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Doom Patrol",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/63711-11053-96707-1-doom-patrol.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "18 Issues"
    },
    {
      "title": "Doom Patrol",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/904967-1.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "22 Issues"
    },
    {
      "title": "Doom Patrol",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/6405-2177-7001-1-doom-patrol-the.jpg",
      "year": "1964",
      "publisher": "DC Comics",
      "Field7": "39 Issues"
    },
    {
      "title": "Doom Patrol",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23749/562713-32856_20060316173653_large.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "22 Issues"
    },
    {
      "title": "Doom Patrol",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5433922-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Doom Patrol 1 Director's Cut",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5778035-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Doom Patrol and Suicide Squad Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/4058136-dp%20%26%20ss%20fc.jpg",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Doom Patrol Archives",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/904940-v1.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Doom Patrol: Brick By Brick",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5873081-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Doom Patrol: Brotherhood",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/1882461-oct100265.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Doom Patrol: Nada",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730683-02.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Doom Patrol: The Silver Age",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6527880-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Doom Patrol: The Silver Age Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5914837-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Doom Patrol: We Who Are About to Die",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1257568-yhst_23599503122488_2110_251210795.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Doom Patrol: Weight of the Worlds",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6990897-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Doom Patrol/JLA Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6303571-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Doom: The Emperor Returns",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/2747/113913-18532-108893-1-doom-the-emperor-re.JPG",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Doomed",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4627664-doomed%2001.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Doomed",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5051557-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Doomsday Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3754924-01.jpg",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Doomsday Clock",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6152995-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Doomsday Clock",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7091389-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Doomwar",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48343/1131583-num_risation0001.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Doomwar",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3714569-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Doorway to Nightmare",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2182376-01.jpg",
      "year": "1978",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Dorothy & the Wizard in Oz",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/58790/2035989-dorothy___the_wizard_in_oz__1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "8 Issues"
    },
    {
      "title": "Double Action Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/58701/1484714-00174_double_action_comics_002__missing_.jpg",
      "year": "1940",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Double Dragon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/616246-doub1.jpg",
      "year": "1991",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Double Edge: Alpha",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/596103-de_alpha.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Double Edge: Omega",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/596101-de_omega.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dr. Doom And The Masters Of Evil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/688221-dr_doom__001.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Dr. Doom and the Masters of Evil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/966078-doom.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dr. Fate",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/68295-11483-101293-1-doctor-fate.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Dr. Fate: Countdown To Mystery",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1984533-countdown_to_mystery.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dr. Happy Tooth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/617039-drhappy1.jpg",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dr. Strange",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7188308-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Dr. Strange vs. Dracula",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/231205-19653-117863-1-dr-strange-vs-drac.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dracula",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1280025-dracula_01_0000.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Dracula",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6626960-1152672818-71803.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dracula: Lord of the Undead",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11352/1262422-26926121394_1.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Dragon Strike",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51078/1001491-drago1.jpeg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dragonlance",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/27389-3998-30387-1-dragonlance.jpg",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "34 Issues"
    },
    {
      "title": "Dragonslayer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68452/1287509-dragonslayer_001.jpg",
      "year": "1981",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Drax",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4887875-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "11 Issues"
    },
    {
      "title": "Drax the Destroyer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/99510-18291-107044-1-drax-the-destroyer.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Drax the Destroyer: Earthfall",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1882912-dtd__etfl.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Drax: Guardian of the Galaxy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5408277-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Drax: The Children's Crusade",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5547953-02.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Drax: The Galaxy's Best Detective",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5225565-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dreamer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/19151/679214-dreamer_cv_300.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Driver: Crossing The Line",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/73936/1985185-driver__1___page_1.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Druid",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/2575041-cover.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Dune",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61566-3478-94561-1-dune.jpg",
      "year": "1985",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Dynamic Classics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1691153-dynamicclassics.jpg",
      "year": "1978",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dynomutt",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/59293-2898-92288-1-dynomutt.jpg",
      "year": "1977",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "E Is For Extinction",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4641183-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "E Is For Extinction: Warzones!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5055943-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Earth 2",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2322853-__kgrhqfhjf_e919o_pw5bpokdewetg__60_57_1.jpeg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "35 Issues"
    },
    {
      "title": "Earth 2 Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3073933-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Earth 2: Battle Cry",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3748002-03.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Earth 2: Collision",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4923770-06.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Earth 2: Futures End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4069914-earth%202.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Earth 2: Society",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4613200-earth2soc-cv1-ds-21933.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "22 Issues"
    },
    {
      "title": "Earth 2: Society Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5419991-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Earth 2: Society: A Whole New World",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5786766-03.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Earth 2: Society: Indivisible",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5396219-02.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Earth 2: Society: Life After Death",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5996320-04.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Earth 2: Society: Planetfall",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5087339-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Earth 2: The Dark Age",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4143609-04.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Earth 2: The Gathering",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3368548-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Earth 2: The Kryptonian",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4521657-05.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Earth 2: The Tower of Fate",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3345280-02.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Earth 2: World's End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4558185-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Earth 2: World's End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4142439-e2%20worlds%2001.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "26 Issues"
    },
    {
      "title": "Earth X",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/40599-6354-45773-1-earth-x.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "15 Issues"
    },
    {
      "title": "Earth X",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1251690-erthx.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Earth X Sketchbook",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5774/1551950-earth_x.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Earth X Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62047/1312246-earth_x___wizard_special_edition__1___page_1.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Earth X Trilogy Companion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74140/2152007-earth_x_trilogy_companion__cover_.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Earth X Trilogy Omnibus: Alpha",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6594993-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Earth X Trilogy Omnibus: Omega",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6828905-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Earth's Mightiest Heroes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/2637191-earth1.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Earthworm Jim",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/73434/1486055-tn_earthwormjim01_00.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Eclipso",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/32592-4735-36359-1-eclipso.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "18 Issues"
    },
    {
      "title": "Eclipso Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/33231/904636-eclipso.jpg",
      "year": "1993",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Eclipso: Music of the Spheres",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1820279-eclipso_music_of_the_spheres.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Eclipso: The Darkness Within",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/32169-4736-35869-1-eclipso-the-darknes.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Ectokid Unleashed",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/19151/769462-cda202a4_f29e_439a_ab16_5ade4281780e.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ed Hannigan: Covered",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1093988-ed_hannigan_covered.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ed Wheelan's Joke Book",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3235165-ed%20wheelan%27s%20joke%20book%20v1%20001%20%281944%29%20pagecover.jpg",
      "year": "1944",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Eden's Trail",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/28028/692428-eden1.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Edge of Spider-Geddon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6559444-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Edge of Spider-Verse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4087870-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Edge of Venomverse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5923483-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Edge of Venomverse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6136464-1986540486-57182.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "El Diablo",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/28377-4181-31497-1-el-diablo.jpg",
      "year": "1989",
      "publisher": "DC Comics",
      "Field7": "16 Issues"
    },
    {
      "title": "El Diablo",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/528800-0004.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "El Diablo: The Haunted Horseman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/2061036-el_diablo_huanted.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Electric Ant",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1179000-electric_ant_1a.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Electric Warrior",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/24007-3599-26747-1-electric-warrior.jpg",
      "year": "1986",
      "publisher": "DC Comics",
      "Field7": "18 Issues"
    },
    {
      "title": "Electric Warriors",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6685977-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Elektra",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3775348-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "11 Issues"
    },
    {
      "title": "Elektra",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6527858-01.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Elektra",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/38275-5779-42981-1-elektra.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "20 Issues"
    },
    {
      "title": "Elektra",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4053/119615-9408-109358-1-elektra.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "35 Issues"
    },
    {
      "title": "Elektra",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5711904-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Elektra and Wolverine: The Redeemer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/19151/549429-elektrawolverinetheredeemer1.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Elektra by Frank Miller Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5082254-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Elektra by Greg Rucka Ultimate Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2243378-elk_by_gr_uc.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Elektra by Peter Milligan, Larry Hama, & Mike Deodato Jr.: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5711906-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Elektra Megazine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2584238-199611_elektra_megazine_v1__1___page_1.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Elektra Saga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/21502-3340-23975-1-elektra-saga-the.jpg",
      "year": "1984",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Elektra: Always Bet On Red",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6050256-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Elektra: Assassin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2256766-elk__ass.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Elektra: Bloodlines",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4204859-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Elektra: On the Rise",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/722879-1.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Elektra: Reverence",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4536835-02.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Elektra: The Hand",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1383637-elektra_the_hand.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Elektra: The Hand",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/71434-12002-104432-1-elektra-the-hand.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Elektra: The Official Movie Adaptation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/1230843-282180.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Elfquest 25th Anniversary Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3235166-elfquest%2025th%20anniversary%20special%20v2003%20001%20%282003%29%20pagecover.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "ElfQuest Archives",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/71344-11956-104342-1-elfquest-archives.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Elfquest: The Discovery",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/1223147-eq1a.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "ElfQuest: The Discovery",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/2888563-elfquest___the_discovery_001__2006__pagecover.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Elfquest: The Searcher and the Sword",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51168/1223105-2896_400x600.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "ElfQuest: Wolfrider",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/71253-11912-104251-1-elfquest-wolfrider.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Elongated Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/31629-4737-35223-1-elongated-man-the.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Elseworld's Finest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2114489-01.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Elseworld's Finest: Supergirl & Batgirl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4121480-01.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Elseworlds 80-page Giant",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/229840-19629-117722-1-elseworlds-80-page-g.JPG",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Elseworlds: Batman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5160016-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Elseworlds: Justice League",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5316368-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Elseworlds: Superman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6266886-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Elvira's House of Mystery",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3434599-01.jpg",
      "year": "1986",
      "publisher": "DC Comics",
      "Field7": "11 Issues"
    },
    {
      "title": "Elvira's House of Mystery Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/33224/693537-elvira_haliday_x.jpg",
      "year": "1987",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Eminem/Punisher",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1300669-eminem___the_punisher__marvel_digital_comics_exclusive__1___page_1.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Emma",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/87073/1700777-emma01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Emma",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/111746/5737391-392371e7e83777a683edd34385a0822b_xl.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Emma Frost",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/6774056-emma_frost_vol_1_1.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "18 Issues"
    },
    {
      "title": "Emma Frost: Bloom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/448147-emma_frost_bloom_1_00a.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Emma Frost: Higher Learning",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1597294-efr_hl.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Emma Frost: Mind Games",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/448172-emma_frost_mind_games_1_00.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Emma Frost: Ultimate Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6523689-0745171078-69773.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Empire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/64707-11156-97704-1-empire.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "7 Issues"
    },
    {
      "title": "Enchanted Tiki Room",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5797762-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Enchanted Tiki Room",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5467806-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Encyclopædia Deadpoolica",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6635/696824-16.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Encyclopedia of Comic Book Heroes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2079819-batmanenc.jpg",
      "year": "1976",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "End Of Nations",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/73936/2089612-end_of_nations_001__of_004___2012__pagecover.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Ender in Exile",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/128795/2862975-ender_in_exile_hc.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ender's Game",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3288910-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ender's Game: Battle School",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1808/575837-eg___bs__001_000a.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Ender's Game: Battle School",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/128795/2862136-enders_game___battle_school_hc.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ender's Game: Command School",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/45797/964232-ender_s_game___command_school__1___page_1.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Ender's Game: Command School",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/128795/2862313-enders_game___command_school_hc.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ender's Game: Mazer In Prison Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2755929-eg___mip__001_000.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ender's Game: Recruiting Valentine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/45797/861868-p00001.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ender's Game: The League War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1190992-enders_game_the_league_war.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ender's Game: War of Gifts",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3307978-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ender's Game: War Of Gifts Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1056070-enders_game_gifts.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ender's Shadow: Battle School",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/128795/2862193-enders_shadow___battle_school_hc.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ender's Shadow: Battle School",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2760737-es___bs__001_000a.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Ender's Shadow: Command School",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/965399-prv3428_cov.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Ender's Shadow: Command School",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/128795/2862386-enders_shadow___command_school_hc.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Enemy Ace Archives",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2065932-enemy_acea.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Enemy Ace Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51078/1125552-ene1.jpeg",
      "year": "1990",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Enemy Ace: War Idyll",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1918995-01.jpg",
      "year": "1990",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Enemy Ace: War In Heaven",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/42813-6846-48945-1-enemy-ace-war-in-he.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Enemy Ace: War in Heaven",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2063255-enemy_ace.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Energy & Safety Adventures",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/722623-1.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Energy and Safety with the Justice League",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11122/111220104/6208326-tn_01.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Enginehead",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/65795-11249-98792-1-enginehead.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Enslaved: Odyssey to the West Custom Comic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1480651-enslaved___odyssey_to_the_west_custom_comic__1___page_1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Enter The Heroic Age",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1233700-enter_the_heroic_age.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Epic Illustrated",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/18088-3049-20239-1-epic-illustrated.jpg",
      "year": "1980",
      "publisher": "Marvel",
      "Field7": "34 Issues"
    },
    {
      "title": "Eradicator",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/38022-5745-42671-1-eradicator.jpg",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "ESPN: The Body Issue: Super Heroes Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5557465-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Essential Amazing Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/101073/2020994-g2635.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "11 Issues"
    },
    {
      "title": "Essential Ant-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1194579-ant.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Essential Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1088264-avg.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "9 Issues"
    },
    {
      "title": "Essential Black Panther",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2412032-ess_bp1.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Essential Captain America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/101073/2020820-g5009.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "7 Issues"
    },
    {
      "title": "Essential Captain Marvel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/905141-essential_captain_marvel.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Essential Classic X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2140113-ess_cls_xmn1.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Essential Daredevil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2315668-b5b9fc7948cba253b21c044716236f50.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Essential Dazzler",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1183905-dzl.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Essential Defenders",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1374261-ess_dfn1.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "7 Issues"
    },
    {
      "title": "Essential Doctor Strange",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1568573-ess_ds_1.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Essential Fantastic Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2140161-ess_f4_1.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "9 Issues"
    },
    {
      "title": "Essential Ghost Rider",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1183880-gr.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Essential Godzilla King of the Monsters",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/1523394-essential_godzilla_1.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Essential Howard the Duck",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/2747/1694566-howard.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Essential Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2243615-ess_hlk1.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "7 Issues"
    },
    {
      "title": "Essential Human Torch",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1194600-hmtch.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Essential Iron Fist",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/764139-001.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Essential Iron Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/29015/682451-141037_20080917210029_large.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Essential Killraven",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7175948-01.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Essential Luke Cage, Power Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1310888-ess_lc_1.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Essential Man-Thing",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/81783/1859515-118essentialmanthing.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Essential Marvel Horror",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/465155-001.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Essential Marvel Saga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/834884-woot__many_points.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Essential Marvel Team-Up",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/610673-mtu1.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Essential Marvel Two-In-One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1291575-mvl_tio.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Essential Monster of Frankenstein",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2503059-essential_monster_of_frankenstein_tpb__2004____page_1.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Essential Moon Knight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/764163-mk.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Essential Ms. Marvel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/755835-marvel.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Essential Nova",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1223694-nova.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Essential Official Handbook of the Marvel Universe Master Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4270156-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Essential Official Handbook of the Marvel Universe Update '89",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4271150-01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Essential Power Man and Iron Fist",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/907043-powerfist.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Essential Punisher",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/786106-51zwpey7rjl._ss500_.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Essential Rampaging Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4271148-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Essential Rawhide Kid",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2133243-ess_rhk_1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Essential Savage She-Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/149442/2853915-she_hulk.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Essential Sgt. Fury and His Howling Commandos",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2077073-ess_sgtf.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Essential Silver Surfer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/806148-ss.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Essential Spectacular Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/786118-68e0225b9da0692e42b13110.l.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Essential Spider-Woman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/764187-sw.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Essential Sub-Mariner",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/47524/1729751-essential_sub_mariner_vol._1.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Essential Super-Villain Team Up",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/617922-villain1.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Essential Tales of the Zombie",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/3615968-ess1.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Essential The Tomb of Dracula",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2101801-essential_tomb_of_dracula_v__1___page_1.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Essential Thor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1676983-ess_thr1.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "7 Issues"
    },
    {
      "title": "Essential Warlock",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2542224-75a20d179e74d50ea4355023c1a99216.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Essential Web of Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2014169-ess_wospm1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Essential Werewolf by Night",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/53928/1033636-1_.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Essential Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/768016-logn.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "7 Issues"
    },
    {
      "title": "Essential X-Factor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2140146-ess_xfc1.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Essential X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2386712-essx.png",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "11 Issues"
    },
    {
      "title": "Eternals",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/2868/106903-18203-108351-1-eternals.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "7 Issues"
    },
    {
      "title": "Eternals",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/99019/1844177-eternals1.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Eternals",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/23239-3480-25914-1-eternals.jpg",
      "year": "1985",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Eternals",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/435679-eternals1.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "9 Issues"
    },
    {
      "title": "Eternals #1: Facsimile Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7184436-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Eternals Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3347/616036-eternals_annual__001_001.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Eternals by Jack Kirby",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5479064-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Eternals Sketchbook",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/356079-21197-127438-1-eternals-sketchbook.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Eternals: Manifest Destiny",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/911017-1.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Eternals: The Herod Factor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5551/1240048-f8c67571_3e31_42f1_9b8c_a106f2902bf6.jpg",
      "year": "1991",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Eternals: To Slay a God",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5478638-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Eternity Girl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6703931-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Eternity Girl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6326197-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Evel Knievel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1299289-evel_knievel_giveaway__1___page_1.jpg",
      "year": "1975",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Even More Secret Origins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/73571/1335116-00a_fc.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Event Leviathan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6966482-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Everquest: Ruins Of Kunark",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51078/1125601-eve1.jpeg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Everquest: Transformation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51078/1125602-ever1.jpeg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Everything Happens to Harvey",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/45939-1554-53300-1-everything-happens-t.jpg",
      "year": "1953",
      "publisher": "DC Comics",
      "Field7": "7 Issues"
    },
    {
      "title": "Evolutionary War Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2020194-ew_omnvar.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Excalibur",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/66101-11292-99098-1-excalibur.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "14 Issues"
    },
    {
      "title": "Excalibur",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6206/467177-01.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Excalibur",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7125469-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Excalibur",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/27201-4052-30178-1-excalibur.jpg",
      "year": "1988",
      "publisher": "Marvel",
      "Field7": "126 Issues"
    },
    {
      "title": "Excalibur Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/50752-9101-66561-1-excalibur-annual.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Excalibur Classic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/800240-1.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Excalibur Epic Collection: Girls' School From Heck",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6797689-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Excalibur Epic Collection: The Cross-Time Caper",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6289331-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Excalibur Epic Collection: The Sword Is Drawn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5747734-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Excalibur Mojo Mayhem",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15302/756555-396px_excalibur_mojo_mayhem_vol_1_1.jpg",
      "year": "1989",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Excalibur Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111121457/5263821-excalibur%20special%20edition%20v1987%20%231%20-%20the%20sword%20is%20drawn%20%281987_4%29%20-%20page%201.jpg",
      "year": "1987",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Excalibur Visionaries: Alan Davis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5914685-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Excalibur Visionaries: Warren Ellis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5867802-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Excalibur: Air Apparent",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1918137-01.jpg",
      "year": "1991",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Excalibur: Forging the Sword",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5867803-01.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Excalibur: Saturday Night Fever",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5878629-02.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Excalibur: The Possession",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2096263-excalibur_special_edition_v1988__2___the_possession__1991_7____page_1.jpg",
      "year": "1991",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Excalibur: Weird War III",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1160323-excalibur_weird_war_3.jpg",
      "year": "1990",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Excalibur: XX Crossing",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26954/499769-1992_exc_vs._then_x_men.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Exclusive Collectors' Edition: Spider-man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1300670-exclusive_collector_s_edition___spider_man___page_1.jpg",
      "year": "1980",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Exiled",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2323354-www.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Exiles",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/14859/761377-exiles_v4_001_0001a.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Exiles",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6374043-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Exiles Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/85584-18008-105422-2-exiles-annual.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Exiles Saga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1300279-exiles_saga_1.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Exiles Ultimate Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/975191-ex.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Exiles: A Blink in Time",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5451035-07.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Exiles: A World Apart",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4000515-02.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Exiles: Age of Apocalypse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70204/1458959-10_age_of_apocalypse.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Exiles: Bump in the Night",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5478639-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Exiles: Days Of Then And Now",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3664/268750-20248-120866-1-exiles-days-of-then.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Exiles: Down the Rabbit Hole",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62870/1447294-1_down_the_rabbit_hole.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Exiles: Earn Your Wings",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5479068-01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Exiles: Enemy of the Stars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5576730-15.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Exiles: Fantastic Voyage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5442813-06.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Exiles: Legacy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4121332-04.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Exiles: Out of Time",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62870/1454910-3_out_of_time.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Exiles: Point of No Return",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6772699-6864166175-74536.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Exiles: Starting Over",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5576738-16.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Exiles: Test of Time",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6623611-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Exiles: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7019217-1625773674-79002.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Exiles: The New Exiles",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5576729-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Exiles: The Trial of the Exiles",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6828906-02.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Exiles: Timebreakers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70204/1472602-11_timebreakers.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Exiles: Unnatural Instincts",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5442811-05.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Exiles: World Tour",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70204/1473318-12_world_tour_1.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Exit Stage LEFT: The Snagglepuss Chronicles",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6570587-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Exit Stage LEFT: The Snagglepuss Chronicles",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6212049-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Extermination",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6559445-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Extermination",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6771022-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Extraordinary X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4887880-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "20 Issues"
    },
    {
      "title": "Extraordinary X-Men Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5444890-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Extraordinary X-Men: Apocalypse Wars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5479414-02.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Extraordinary X-Men: IvX",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5973384-04.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Extraordinary X-Men: Kingdoms Fall",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5700384-03.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Extraordinary X-Men: X-Haven",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5173553-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Extreme Justice",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/3722445-%24%28kgrhqvhjeifhzvlyzf%28br%2Bwisq0c%21~~60_57.jpg",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "19 Issues"
    },
    {
      "title": "Extremely Moronic MAD",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4285214-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "F.3.A.R.",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27994/1973598-1644952_f3ar_custom_comic_super.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Faces of Evil: Deathstroke",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/684153-faces_of_evil___deathstroke___001.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Faces of Evil: Kobra",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/690738-foekobra_001.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Faces of Evil: Prometheus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/677111-image0001.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Faces of Evil: Solomon Grundy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/674273-foesolgrundy__001.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Factor X",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/36342-5543-40587-1-factor-x.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Falcon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6093522-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "8 Issues"
    },
    {
      "title": "Falcon - Marvel Legacy Primer Pages",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6064959-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Falcon: Take Flight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6517702-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fall of the Hulks Prelude",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6733760-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fall of the Hulks: Alpha",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/53409/1049592-fall_of_the_hulks___alpha_001.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fall of the Hulks: Gamma",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1070352-gamma.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fall of the Hulks: Red Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2669909-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Fall of the Hulks: Red Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6653275-6058104409-72696.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fall of the Hulks: The Savage She-Hulks",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6643229-1662790989-72346.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fall of the Hulks: The Savage She-Hulks",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/1145614-prv4565_cov.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Fallen Angel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/63696-11052-96692-1-fallen-angel.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "20 Issues"
    },
    {
      "title": "Fallen Angel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/99019/3557131-fallen%20angel%201.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Fallen Angels",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61592-3842-94587-1-fallen-angels.jpg",
      "year": "1987",
      "publisher": "Marvel",
      "Field7": "8 Issues"
    },
    {
      "title": "Fallen Angels",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7144086-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Fallen Son: The Death of Captain America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2717396-01_tpb.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fallen Son: The Death of Captain America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/104982-18420-108004-1-fallen-son-the-deat.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Fallen Son: The Death of Captain America Oversized Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2717501-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Falling In Love",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/1899-1684-2050-1-falling-in-love.jpg",
      "year": "1955",
      "publisher": "DC Comics",
      "Field7": "143 Issues"
    },
    {
      "title": "Famous First Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/44128-7202-51346-1-famous-first-edition.jpg",
      "year": "1974",
      "publisher": "DC Comics",
      "Field7": "9 Issues"
    },
    {
      "title": "Fanboy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/13/135098/7210432-fanboy.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Fanboy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/42816-6848-48948-1-fanboy.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Fantastic Firsts",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51078/1128064-fan1.jpeg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Five",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/153328-18877-111583-1-fantastic-five.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Fantastic Five",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/40833-6355-46075-1-fantastic-five.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Fantastic Five: The Final Doom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/971744-the_final_doom_cover.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Force",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2182953-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Fantastic Force",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/35808-5296-39980-1-fantastic-force.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "18 Issues"
    },
    {
      "title": "Fantastic Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3664132-01a.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "18 Issues"
    },
    {
      "title": "Fantastic Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6548900-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "18 Issues"
    },
    {
      "title": "Fantastic Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/39646-6211-44623-1-fantastic-four.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "173 Issues"
    },
    {
      "title": "Fantastic Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/4780585-ff%20model%20club.jpg",
      "year": "1981",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/2700078-prv14175_cov.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "17 Issues"
    },
    {
      "title": "Fantastic Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1300674-fantastic_four_giveaway_young_model_builders_club__1___page_1.jpg",
      "year": "1981",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/1639111-fantastic_four__1996_2nd_series__01a.jpeg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "13 Issues"
    },
    {
      "title": "Fantastic Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2677624-ff001.jpg",
      "year": "1961",
      "publisher": "Marvel",
      "Field7": "416 Issues"
    },
    {
      "title": "Fantastic Four [Taco Bell]",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3080633-fantastic%20four%20taco%20bell%20exclusive%20collector%20edition%20v2009%20001%20%282009%29%20pagecover.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four / Fantastic 4 '98",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2183077-1998.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four #1: Facsimile Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6584086-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four 1999",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/140088-2129-111017-1-fantastic-four-annua.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four 2000",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2183078-2000.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four 2001",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2183079-2001.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four 2099",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7153352-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four 2099",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/104323-18413-107931-1-fantastic-four-2099.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "8 Issues"
    },
    {
      "title": "Fantastic Four 2K Games Giveaway",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3080668-fantastic%20four%202k%20games%20v2007%20001%20%282007%29%20pagecover.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four 527 (Director's Cut)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2486067-fantastic_four_v1961__527___distant_music__2005_7____page_1.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four and Power Pack",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2031074-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Fantastic Four Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4106202-untitled.jpg",
      "year": "1963",
      "publisher": "Marvel",
      "Field7": "29 Issues"
    },
    {
      "title": "Fantastic Four Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4129733-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four Annual #6: Facsimile Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7225385-01.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four Ashcan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2507465-fantastic_four__199600___page_1.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four Ashcan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/2454868-fantastic_four_ashcan_001__1994__pagecover.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four by Aguirre-Sacasa & McNiven",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4694658-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four By Hickman Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3347215-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Fantastic Four by J. Michael Straczynski",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1648028-f4_by_jms.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four by John Byrne Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2080883-f4_by_jb.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Fantastic Four By Jonathan Hickman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1170926-fantastic_four_by_jonathan_hickman_volume_1_hc.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Fantastic Four by Jonathan Hickman: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6843035-9150347246-74880.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Fantastic Four by Mark Waid",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1664457-f4_by_mw1.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Fantastic Four By Matt Fraction Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4372525-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four by Waid & Wieringo Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6712648-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four by Waid and Wieringo Ultimate Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1927914-f4_by_ww_uc.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Fantastic Four Cosmic-Size Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2760676-cosmic_size_fantastic_four_01_001.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four Epic Collection: All In the Family",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7093808-3684947722-80409.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four Epic Collection: Into the Time Stream",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7093810-2457052848-80410.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four Epic Collection: Strange Days",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4580736-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four Epic Collection: The Coming of Galactus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6538879-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four Epic Collection: The Master Plan of Doctor Doom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5923486-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four Epic Collection: The More Things Change...",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6974964-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four Epic Collection: The Mystery of the Black Panther",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7047338-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four Epic Collection: The New Fantastic Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6486526-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four Epic Collection: The World's Greatest Comic Magazine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4092294-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four Giant-Size Adventures",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/45797/985505-giant_size_marvel_adventures__fantastic_four___the_apple_doesn_t_fall_far___1__2005_8____page_1.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four in...Ataque del M.O.D.O.K.!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1440127-fantastic_four_in...ataque_del_modok_1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1293541-f4_omn1.jpeg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Fantastic Four Poster Book",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4623696-01.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four Presents: Franklin Richards: Son Of A Genius",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1060831-prv3843_pg1.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four Roast",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7173699-01.jpg",
      "year": "1982",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48343/1017587-ffs.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66501/1227921-p00001.jpg",
      "year": "1984",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four The Lost Adventure",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5859553-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four Trapped in the Data Vortex",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1986604-cover.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four Unlimited",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/42822-5009-48954-1-fantastic-four-unlim.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Fantastic Four Unplugged",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/42834-6849-48966-1-fantastic-four-unplu.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Fantastic Four Visionaries: George Pérez",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6451381-6846349761-68051.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Fantastic Four Visionaries: John Byrne",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2183089-01.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "9 Issues"
    },
    {
      "title": "Fantastic Four Visionaries: Walter Simonson",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6471631-6893061993-68465.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Fantastic Four vs. X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/24993-3843-27791-1-fantastic-four-vs-x.jpg",
      "year": "1987",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Fantastic Four: 1234",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2030890-f4__1234.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: 4 Yancy Street",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7054347-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: A Death In The Family",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48343/1017618-ff.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: Atlantis Rising",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/44423-7232-51495-1-fantastic-four-atla.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Fantastic Four: Atlantis Rising Collectors' Preview",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3038423-01.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: Authoritative Action",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1648042-f4__aa.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: Back In Blue",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4512001-03.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: Behold... Galactus!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6582673-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: Behold... Galactus! Marvel Select",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7115998-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: Books of Doom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1877337-f4__bod.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: Crusaders & Titans",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3197473-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: Doomed",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3841177-03.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: Extended Family",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6481623-3969471905-68468.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: Fantastic Origins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7023025-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: Fireworks",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/48778-9065-60300-1-fantastic-four-fire.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Fantastic Four: First Family",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48343/964727-ffff001.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Fantastic Four: First Family",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3080622-fantastic%20four%20-%20first%20family%20v2005%20001%20%282005%29%20pagecover.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: First Family",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5847539-01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: Flesh and Stone",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1644266-f4__f_s.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: Foes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/64362-11090-97359-1-fantastic-four-foes.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Fantastic Four: Foes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5824108-01.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: Fourever",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6828907-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: Franklin’s Adventures",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3080597-fantastic%20four%20-%20franklin%E2%80%99s%20adventures%20v1998%20001%20%281998%29%20pagecover.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: Grand Design",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/7124095-8139937220-FFGD2.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Fantastic Four: Grand Design",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7227481-6920131575-81559.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: Hereafter",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1646387-f4__ha.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: Heroes Return: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6838538-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: House of M",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/71056-11892-104054-1-fantastic-four-hous.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Fantastic Four: Imaginauts",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3430/1659149-278195__1_.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: In Search Of Galactus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1148443-f4.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: Into The Breach",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51078/1128065-fant1.jpeg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: Isla De La Muerte",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2776999-ff_idlm_dcp_000_fc.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: Island of Death",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6087022-8913393994-58228.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: Lost Adventures",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6461183-0549810239-68055.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: Monsters Unleashed",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68452/1291757-ff_monsters_unleashed.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: Mr. And Mrs. Grimm",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6938325-02.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: Negative Zone",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7161562-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: New Departure, New Arrivals",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3390528-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: Nobody Gets Out Alive",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1647996-f4__ngoa.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: Original Sin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4462854-02.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: Resurrection of Galactus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5680921-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: Reunited They Stand",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6086791-1443056981-57807.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: Rising Storm",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3317628-01.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: Road Trip",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3255589-02.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: Season One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3188750-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: The Beginning of the End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5778671-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: The End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3699679-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: The End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/754/91333-18175-106460-1-fantastic-four-the.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Fantastic Four: The End Is Fourever",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4634876-04.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: The End Roughcut",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1058878-batman___unseen__5__of_5___2010____page_1.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: The Fall of the Fantastic Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4061820-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: The Fantastic 4th Voyage of Sinbad",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11134/111342750/6252460-fantastic%204th%20voyage%20of%20sinbad.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: The Herald of Doom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7075983-03.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: The Last Stand",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1876719-fantastic_four_the_last_stand.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: The Legend",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4560577-01.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: The Life Fantastic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5069921-01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: The Master of Doom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3459355-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: The Movie",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/98094/1790156-ff_movie_00.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: The New Fantastic Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4721202-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: The Overthrow of Doom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6491671-1131106617-68878.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: The Prodigal Sun",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7135761-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: The Prodigal Sun",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6990898-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: The Trial of Galactus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/19982/370809-21333-128898-1-trial-of-galactus-tp.jpg",
      "year": "1989",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: The Universal Guide",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2097178-fantastic_four__the_ultimate_guide_v2005__1___fantastic_four__the_ultimate_guide__2005_5____page_1.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: The Wedding Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2764368-00fantastic_four_wedding_special_cover.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: The World's Greatest Comics Magazine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1060195-prv3843_pg1.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Fantastic Four: The World's Greatest Comics Magazine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6570592-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: True Story",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15455/473239-ff.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Fantastic Four: True Story",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5841710-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: Unthinkable",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3430/1659137-278196__1_.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: Wedding Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6721957-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four: World's Greatest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1172258-f4.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four/Inhumans",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3714570-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four/Inhumans: Atlantis Rising",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5964615-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four/Iron Man: Big in Japan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6461186-3175944470-68053.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantastic Four/Iron Man: Big in Japan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111121457/4766875-fantastic%20four_iron%20man_%20big%20in%20japan%20v2005%20%231%20%28of%204%29%20-%20the%20fantastic%20four%20and%20iron%20man%20are%20big%20in%20japan%21%20%282005_12%29%20-%20page%201.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Fantastic Four/Spider-Man Classic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6451385-5445881693-68052.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fantasy Masterpieces",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/50784-3003-66593-1-fantasy-masterpieces.jpg",
      "year": "1979",
      "publisher": "Marvel",
      "Field7": "14 Issues"
    },
    {
      "title": "Fantasy Masterpieces",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/7588-2290-8368-1-fantasy-masterpieces.jpg",
      "year": "1966",
      "publisher": "Marvel",
      "Field7": "11 Issues"
    },
    {
      "title": "Far Sector",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7142267-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Fate",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/35725-5243-39892-1-fate.jpg",
      "year": "1994",
      "publisher": "DC Comics",
      "Field7": "23 Issues"
    },
    {
      "title": "FCBD 2011 Green Lantern Flashpoint Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1801219-fcbd11_glse_cvr_copy.jpeg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "FCBD 2011 Young Justice Batman BB Super Sampler",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/47029/1802072-fcbd11_yjbmbab_kids_copy_600x922.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "FCBD 2015: Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4603130-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "FCBD 2016: DC Superhero Girls Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5195668-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "FCBD 2016: Suicide Squad Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5195671-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "FDNY Custom Comic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3080497-fdny%20custom%20comic%20v2011%20001%20%282011%29%20pagecover.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fear Itself",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2148677-fi.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fear Itself",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2085030-01a.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "10 Issues"
    },
    {
      "title": "Fear Itself Sketchbook",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/61948/1753440-fearitselfsketchbook_0001.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fear Itself: Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2158088-fi__avg.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fear Itself: Avengers Academy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4261002-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fear Itself: Black Panther: The Man Without Fear",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5141399-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fear Itself: Book of the Skull",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2364134-01a.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fear Itself: Deadpool",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2085075-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Fear Itself: Deadpool/Fearsome Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4404384-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fear Itself: Dracula",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2256780-fi__drc.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fear Itself: Fearsome Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1856547-p00001.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Fear Itself: Fellowship of Fear",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6238278-3489764726-62417.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fear Itself: FF",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2364150-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fear Itself: Ghost Rider",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4609151-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fear Itself: Herc",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2239287-fi__hrc.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fear Itself: Heroes for Hire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4637732-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fear Itself: Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2197644-fi__hlk.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fear Itself: Hulk vs. Dracula",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2034186-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Fear Itself: Hulk/Dracula",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4261744-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fear Itself: Invincible Iron Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2241887-fi__iim.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fear Itself: Journey Into Mystery",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3232166-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fear Itself: Secret Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031819-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fear Itself: Sin's Past",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2085079-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fear Itself: Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1797326-fer_sp.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Fear Itself: Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4419760-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fear Itself: Spotlight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1935077-msfi_001.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fear Itself: The Black Widow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/1885186-fear_itself_black_widow_vol_1_1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fear Itself: The Deep",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2364195-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Fear Itself: The Fearless",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4261009-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fear Itself: The Fearless",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/111946/2119599-fear_itself___the_fearless_01__2011__default.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "13 Issues"
    },
    {
      "title": "Fear Itself: The Home Front",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4436366-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fear Itself: The Home Front",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50099/1758479-fearitselfhome.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "7 Issues"
    },
    {
      "title": "Fear Itself: The Monkey King",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/58790/2009561-fear_itself___monkey_king__1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fear Itself: The Worthy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1966688-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fear Itself: Thunderbolts",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6159322-2144264445-60375.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fear Itself: Uncanny X-Force",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2364165-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Fear Itself: Uncanny X-Force/The Deep",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4447624-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fear Itself: Uncanny X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4177289-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fear Itself: Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1893837-p00001.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Fear Itself: Wolverine/New Mutants",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4462844-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fear Itself: Youth in Revolt",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4471493-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fear Itself: Youth in Revolt",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2085024-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Fearless",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7016188-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Fearless",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7161569-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fearless Defenders",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2854233-01a.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "13 Issues"
    },
    {
      "title": "Fearless Defenders: Doom Maidens",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3240078-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fearless Defenders: The Most Fabulous Fighting Team of All",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3767715-02.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Feature Films",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/45943-1323-53307-1-feature-films.jpg",
      "year": "1950",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "February 2011 Sneak Peeks",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3186814-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Felicia Hardy: The Black Cat",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3133/158298-18930-111968-1-felicia-hardy-the-b.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Female Furies",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7182287-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Female Furies",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6790012-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "FF",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/2722131-ff2012001_dc11_lr.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "16 Issues"
    },
    {
      "title": "FF",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2757523-01a.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "23 Issues"
    },
    {
      "title": "FF by Jonathan Hickman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2014116-ff_by_jh.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "FF: 50 Fantastic Years",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4545772-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "FF: Family Freakout",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3799296-02.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "FF: Fantastic Faux",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3165436-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fifty Who Made DC Great",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/2781715-who_made_dc_great__50__1985____page_1.jpg",
      "year": "1985",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Fight Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1358667-fight_man_v1_001.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fighting American",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/34554-5244-38597-1-fighting-american.jpg",
      "year": "1994",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Fighting American",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3080463-fighting%20american%20v1990%20001%20%281989%29%20pagecover.jpg",
      "year": "1989",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Figment",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4545239-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Figment",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3880908-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Figment 2: Legacy of Imagination",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5130335-02.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fin Fang Four Return!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/808957-fff_01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Final Crisis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3767943-01.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Final Crisis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/402616-21712-130994-1-final-crisis.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "7 Issues"
    },
    {
      "title": "Final Crisis (DC Essential Edition)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6874994-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Final Crisis #1: Director's Cut",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/500574-fc_01.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Final Crisis 10th Anniversary Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6623615-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Final Crisis Aftermath: Dance",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/808643-1.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Final Crisis Aftermath: Dance",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2064818-dance.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Final Crisis Aftermath: Escape",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/802870-escape.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Final Crisis Aftermath: Escape",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2064823-escape.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Final Crisis Aftermath: Ink",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2064874-ink.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Final Crisis Aftermath: Ink",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/819421-001.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Final Crisis Aftermath: Run",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2064869-run.png",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Final Crisis Aftermath: Run!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/792722-001.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Final Crisis Companion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/127406/2446278-2446277-51lrveeoohl._sl500_aa300_.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Final Crisis Sketchbook",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/20224/893330-33p6bft.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Final Crisis: Legion of 3 Worlds",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3855022-01.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Final Crisis: Legion of Three Worlds",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/508289-000.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Final Crisis: Rage of the Red Lanterns",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/674600-00.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Final Crisis: Requiem",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/445899-finalcrisisreqb.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Final Crisis: Resist",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/603751-fcr1p02.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Final Crisis: Revelations",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/540480-0005.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Final Crisis: Revelations",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3855023-01.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Final Crisis: Rogues' Revenge",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/454648-001.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Final Crisis: Rogues' Revenge",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2563147-14995_900x1350.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Final Crisis: Secret Files",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/663906-fc_sf01_002.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Final Crisis: Submit",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/593069-fcs1p02.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Final Crisis: Superman Beyond 3D",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/517774-0000.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Fire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3809640-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6819156-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Firebrand",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70196/1296850-firebrand01p00.jpg",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "9 Issues"
    },
    {
      "title": "Firestar",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/23872-3631-26599-1-firestar.jpg",
      "year": "1986",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Firestar",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5551/1199924-8da3affc_1c42_4b6d_8f1e_5459808436fb.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Firestorm",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/64713-11157-97710-1-firestorm.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "35 Issues"
    },
    {
      "title": "Firestorm Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/217277-19313-115927-1-firestorm-annual.jpg",
      "year": "1987",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Firestorm The Nuclear Man: Reborn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1755694-firestorm.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Firestorm, the Nuclear Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/25872-3789-28747-1-firestorm-the-nuclea.jpg",
      "year": "1987",
      "publisher": "DC Comics",
      "Field7": "36 Issues"
    },
    {
      "title": "Firestorm, The Nuclear Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3229/103883-18409-107911-1-firestorm-the-nucle.jpg",
      "year": "1978",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Firestorm: The Nuclear Man: United We Fall",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5571247-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "First Wave",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/2189342-first_wave.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "First Wave",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/1146054-firstwave.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "First Wave Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1758424-prev_img_4.jpeg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Fish Police",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61600-4789-94595-1-fish-police.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Flash & Green Lantern: The Brave and the Bold",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/42566-6801-48644-1-flash-amp-green-la.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Flash & Green Lantern: The Brave and the Bold",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2104050-flash___green_lantern_the_brave_and_the_bold.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Flash & Green Lantern: The Brave and the Bold Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6874995-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Flash 80-Page Giant",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3415204-01.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Flash Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/972813-fann1h.jpg",
      "year": "1963",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Flash by Mark Waid",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5571248-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Flash Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1585108-1.jpg",
      "year": "1939",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Flash Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/221438-19438-116418-1-flash-comics.jpg",
      "year": "1940",
      "publisher": "DC Comics",
      "Field7": "104 Issues"
    },
    {
      "title": "Flash Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/996155-164705_20090314164928_large.jpg",
      "year": "1946",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Flash Forward",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7074782-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Flash Gordon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/26720-3999-29658-1-flash-gordon.jpg",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "9 Issues"
    },
    {
      "title": "Flash Gordon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/36662-5544-40974-1-flash-gordon.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Flash Plus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/993001-38135_20081107055406_large.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Flash Rogues: Captain Cold",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6570594-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Flash Rogues: Reverse-Flash",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6760830-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Flash Secret Files",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/581258-5739_4_1.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Flash Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/5813661-flash%20special%20%231%20final.jpg",
      "year": "1990",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Flash Spectacular",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70196/1289831-flash00fc.jpg",
      "year": "1978",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Flash vs. Dr. Polaris",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11113/111132479/4256090-kellogg%27s%20cinnamon%20mini-buns-flash%20-%20page%201.jpg",
      "year": "1993",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Flash: Emergency Stop",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4872495-01.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Flash: Gorilla Warfare",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3635313-03.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Flash: Iron Heights",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/24485/432524-flash_iron_heights_001.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Flash: The Rebirth Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5973387-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Flash: The Return of Barry Allen",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/251058-19985-119431-1-flash-tpb.jpg",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Flash: The Secret of Barry Allen",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6559632-7566788520-Cover.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Flash/Speed Buggy Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6447345-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Flashback: The Quest for Identity",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11118/111183571/4033616-flashback%231.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Flashpoint",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3368480-01.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Flashpoint",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1799012-4_07f2adda8d.jpeg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Flashpoint",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/40900-6324-46159-1-flashpoint.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Flashpoint Companion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11126/111264167/5069263-p00001.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Flashpoint Deluxe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849539-digital_flashpoint_deluxe_v9999__1___flashpoint__chapter_one_of_five___page_1.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Flashpoint Unwrapped",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6289332-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Flashpoint: Abin Sur - The Green Lantern",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1830722-flspasgl_cv1_copy.jpeg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Flashpoint: Batman Knight of Vengeance",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1830297-flspbkv_cv1_copy.jpeg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Flashpoint: Citizen Cold",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1848676-screen_capture_2.png",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Flashpoint: Deadman and the Flying Graysons",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1860601-flspdfg_cv1_copy.jpeg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Flashpoint: Deathstroke and the Curse of the Ravager",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1848678-screen_capture_3.png",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Flashpoint: Emperor Aquaman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1848679-screen_capture_4.png",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Flashpoint: Frankenstein and the Creatures of the Unknown",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1841422-screen_capture_1.png",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Flashpoint: Green Arrow Industries",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1875214-prev_img.jpeg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Flashpoint: Grodd of War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1860973-screen_capture.png",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Flashpoint: Hal Jordan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1875779-flsphj_cv1_copy.jpeg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Flashpoint: Kid Flash Lost",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1865465-kid_flash_cover.jpeg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Flashpoint: Legion of Doom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/2159192-fptlod_01_0000_copy.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Flashpoint: Lois Lane and the Resistance",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1865181-flspllr_cv1_copy.jpeg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Flashpoint: Project Superman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1882114-flashpointprojects1.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Flashpoint: Reverse Flash",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1865566-reverse_flash_cover.jpeg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Flashpoint: Secret Seven",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1830403-flspss_cv1_ds_copy.jpeg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Flashpoint: The Canterbury Cricket",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1875583-flspccr_cv1_copy.jpeg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Flashpoint: The Outsider",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1865284-prev_img.jpeg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Flashpoint: The World of Flashpoint",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1830514-flspwf_cv1_copy.jpeg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Flashpoint: The World of Flashpoint Featuring Batman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2559292-_24_kgrhqz__hqe8ki_e_ghbpyo82y_qq__60_57.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Flashpoint: The World of Flashpoint Featuring Green Lantern",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3889222-01.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Flashpoint: The World of Flashpoint Featuring Superman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2242597-flashpoint_the_world_of_flashpoint_featuring_superman_tp_658x1024.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Flashpoint: The World of Flashpoint Featuring The Flash",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2567724-__kgrhqn__oce9ebv_yqobpbty9ekmw__60_57.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Flashpoint: The World of Flashpoint Featuring Wonder Woman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2242600-flashpoint_the_world_of_flashpoint_featuring_wonder_woman_tp_664x1024.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Flashpoint: Wonder Woman and the Furies",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1860837-flspwwf_cv1_copy.jpeg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Flintstones Visits Laff-a-Lympics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1249839-flintstones_visits_laff_a_lympics_v1_003.jpg",
      "year": "1978",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Flippity & Flop",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27783/835982-flippityflop_1.jpg",
      "year": "1952",
      "publisher": "DC Comics",
      "Field7": "47 Issues"
    },
    {
      "title": "Focus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9541/1307837-776278_slam_bang_1_super.jpg",
      "year": "1987",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Foolkiller",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/29966-4395-33313-1-foolkiller.jpg",
      "year": "1990",
      "publisher": "Marvel",
      "Field7": "10 Issues"
    },
    {
      "title": "Foolkiller",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5511346-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Foolkiller: Psycho Therapy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5923488-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "FOOM",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52212/997713-foom1.jpg",
      "year": "1973",
      "publisher": "Marvel",
      "Field7": "22 Issues"
    },
    {
      "title": "FOOM Magazine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6127776-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Forbidden Tales of Dark Mansion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/57342-2549-90337-1-forbidden-tales-of-d.jpg",
      "year": "1972",
      "publisher": "DC Comics",
      "Field7": "11 Issues"
    },
    {
      "title": "Force Works",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2757589-01.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "22 Issues"
    },
    {
      "title": "Force Works Ashcan Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23221/1644279-force_works_ashcan__2010____page_1.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Forever Evil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4071696-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Forever Evil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3287041-01a.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "7 Issues"
    },
    {
      "title": "Forever Evil Aftermath: Batman vs. Bane",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3789214-arkham%20war.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Forever Evil Director's Cut",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3379027-%24t2ec16zhjimfhi-ft5etbs%28%2Cj-umoq~~60_57.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Forever Evil: A.R.G.U.S.",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4116410-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Forever Evil: A.R.G.U.S.",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3410071-fevil_argus_cv1_ds.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Forever Evil: Arkham War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3358875-arkham%20war.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Forever Evil: Arkham War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4103460-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Forever Evil: Blight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4116409-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Forever Evil: Rogues Rebellion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4116411-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Forever Evil: Rogues Rebellion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3375966-fe%20rog%2001.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Forever Maelstrom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51078/1156975-forev1.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Forever People",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/26300-4000-29207-1-forever-people.jpg",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Forged From Metal: The New Age of DC Heroes Ashcan Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5819526-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Forgotten Realms",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/28380-4184-31500-1-forgotten-realms.jpg",
      "year": "1989",
      "publisher": "DC Comics",
      "Field7": "25 Issues"
    },
    {
      "title": "Forgotten Realms Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/135660-18695-110517-1-forgotten-realms-ann.jpg",
      "year": "1990",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Formerly Known as the Justice League",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/58423-10767-91418-1-formerly-known-as-th.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Formerly Known as the Justice League",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2642780-01.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Formic Wars: Burning Earth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2183103-01a.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "7 Issues"
    },
    {
      "title": "Formic Wars: Burning Earth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/128795/2863091-formic_wars___burning_earth_1a.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Formic Wars: Silent Strike",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2161328-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Formic Wars: Silent Strike",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/128795/2863120-formic_wars___silent_strike_hc.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fortune and Glory",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6883255-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Four Star Battle Tales",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/45991-2613-53358-1-four-star-battle-tal.jpg",
      "year": "1973",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Four Star Spectacular",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/14426-2837-16132-1-four-star-spectacula.jpg",
      "year": "1976",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Fox and the Crow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/45304-1471-52534-1-fox-and-the-crow-th.jpg",
      "year": "1952",
      "publisher": "DC Comics",
      "Field7": "108 Issues"
    },
    {
      "title": "Fraction",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3419546-01.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Fraggle Rock",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/13/135098/6796851-frv20010001.jpg",
      "year": "1988",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Francis, Brother of the Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51965/2568727-francis_cover.jpg",
      "year": "1980",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Frank Miller's Ronin (DC Black Label Edition)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6921502-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Franken-Castle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1254421-frankencastle_17.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Frankenstein",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38826/1074363-0frank2.jpg",
      "year": "1983",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Frankenstein, Agent of S.H.A.D.E.",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2034228-01.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "17 Issues"
    },
    {
      "title": "Frankenstein, Agent of S.H.A.D.E.: Secrets of the Dead",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2987970-02.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Frankenstein, Agent of S.H.A.D.E.: War of the Monsters",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3485578-01.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Franklin Richards One Shot",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2183106-01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Franklin Richards Saga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1300280-franklin_richards_saga_1.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Franklin Richards: A Fantastic Year",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6614306-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Franklin Richards: April Fools",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/767410-fr_01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Franklin Richards: Collected Chaos",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5890510-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Franklin Richards: Dark Reigning Cats And Dogs",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2811898-franklin_richards___dark_reigning__001.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Franklin Richards: Fall Football Fiasco!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2183115-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Franklin Richards: Happy Franksgiving!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2183118-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Franklin Richards: Lab Brat",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1060935-prv3843_pg1.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Franklin Richards: March Madness",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2183120-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Franklin Richards: Monster Mash",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2183121-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Franklin Richards: Not-So-Secret Invasion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2183126-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Franklin Richards: Not-So-Secret Invasion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5890518-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Franklin Richards: School's Out!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/898518-frso.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Franklin Richards: Sons Of Geniuses",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52212/991229-franklin_richards_sons_of_geniuses.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Franklin Richards: Spring Break",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2183130-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Franklin Richards: Summer Smackdown!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/486983-franklin.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Franklin Richards: Super Summer Spectacular",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2183131-01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Franklin Richards: WORLD be WARned",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2183136-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fred Hembeck Destroys the Marvel Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/188857-19096-114140-1-fred-hembeck-destroy.jpg",
      "year": "1989",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fred Hembeck Sells the Marvel Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/188858-19097-114141-1-fred-hembeck-sells-t.jpg",
      "year": "1990",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Freddy Krueger's A Nightmare on Elm Street",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/33224/680192-freddykruegersanightmareonelmstreet1.jpg",
      "year": "1989",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Free Comic Book Day 2007 (Spider-Man)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/7995/274653-20300-121176-1-the-amazing-spider-m.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Free Comic Book Day 2009 Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/33110/767000-copy_of_avengers_freecomic.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Free Comic Book Day 2010 (Iron Man: Supernova)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66210/1218993-p00001__2_.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Free Comic Book Day 2010 (Iron Man/Thor)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/37809/1216018-ironmanthor_gold_large.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Free Comic Book Day 2011 (Spider-Man)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2765542-smfcbd_01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Free Comic Book Day 2011 (Thor the Mighty Avenger)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2765549-thorfcbd_01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Free Comic Book Day 2012 (Avengers: Age of Ultron Point One)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2345638-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Free Comic Book Day 2012 (Spider-Man: Season One)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/2339620-fcbd_2012_spider_man_season_one.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Free Comic Book Day 2013 (Avengers/Hulk)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3038795-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Free Comic Book Day 2013 (Infinity)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3021713-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Free Comic Book Day 2015 (Avengers)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4603110-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Free Comic Book Day 2015 (Secret Wars)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4603115-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Free Comic Book Day 2016 (Captain America)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5195672-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Free Comic Book Day 2016 (Civil War II)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5195673-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Free Comic Book Day 2017 (All-New Guardians of the Galaxy)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5850590-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Free Comic Book Day 2017 (Secret Empire)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5850595-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Free Comic Book Day 2018 (Amazing Spider-Man/Guardians of the Galaxy)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6422943-8145085523-67937.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Free Comic Book Day 2018 (Avengers/Captain America)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6422947-7197067545-67937.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Free Comic Book Day 2019 (Avengers/Savage Avengers)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6924405-6414010525-77428.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Free Comic Book Day 2019 (Spider-Man/Venom)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6919235-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Freedom Fighters",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/14427-2838-16133-1-freedom-fighters.jpg",
      "year": "1976",
      "publisher": "DC Comics",
      "Field7": "15 Issues"
    },
    {
      "title": "Freedom Fighters",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730684-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Freedom Fighters",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1369756-ff1var.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "9 Issues"
    },
    {
      "title": "Friendly Neighborhood Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/754/91320-17998-105375-2-friendly-neighborhoo.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "24 Issues"
    },
    {
      "title": "Friendly Neighborhood Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6753283-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "14 Issues"
    },
    {
      "title": "Friendly Neighborhood Spider-Man Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/126189-18619-109832-1-friendly-neighborhoo.png",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Friendly Neighborhood Spider-Man: Derailed",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/968027-spm.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Friendly Neighborhood Spider-Man: Hostile Takeovers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7226943-02.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Friendly Neighborhood Spider-Man: Mystery Date",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4336625-02.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Friendly Neighborhood Spider-Man: Secrets and Rumors",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7000474-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fringe: Beyond the Fringe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3514361-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Fringe: Tales From The Fringe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1703904-fringetalestpb.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "From Beyond the Unknown",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/9459-2434-10435-1-from-beyond-the-unkn.jpg",
      "year": "1969",
      "publisher": "DC Comics",
      "Field7": "25 Issues"
    },
    {
      "title": "Frontier Fighters",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27783/1149329-frontier_1.jpg",
      "year": "1955",
      "publisher": "DC Comics",
      "Field7": "8 Issues"
    },
    {
      "title": "Fun and Games Magazine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/50798-3004-66607-1-fun-and-games-magazi.jpg",
      "year": "1979",
      "publisher": "Marvel",
      "Field7": "13 Issues"
    },
    {
      "title": "Fun House",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/7239975-fun191.jpg",
      "year": "1977?",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Funko presents DC Legion of Collectors: Flash 123",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117127/5199228-img007.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Funko presents DC Legion of Collectors: Suicide Squad 1",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117127/5309023-img010.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Funny Folks",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/46618-7511-55261-1-funny-folks.jpg",
      "year": "1946",
      "publisher": "DC Comics",
      "Field7": "26 Issues"
    },
    {
      "title": "Funny Stuff",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/114254/2425057-7464111_1.jpg",
      "year": "1944",
      "publisher": "DC Comics",
      "Field7": "79 Issues"
    },
    {
      "title": "Funny Stuff Stocking Stuffer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/1041802-fsss1.jpg",
      "year": "1985",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Funtastic World of Hanna-Barbera",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/1280206-fwohb1.jpg",
      "year": "1977",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Fury",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/37015/739837-fury1.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fury of Firestorm Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/20373-3196-22729-1-fury-of-firestorm-an.jpg",
      "year": "1983",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Fury of S.H.I.E.L.D.",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3415220-01.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Fury: S.H.I.E.L.D. 50th Anniversary",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4814485-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Fury/Agent 13",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/51040-9109-66882-1-fury--agent-13.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Fury/Black Widow: Death Duty",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/1054539-33977786928.1.gif",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Future Fight Firsts: Crescent & Io",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7135753-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Future Fight Firsts: Luna Snow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7116851-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Future Fight Firsts: White Fox",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7101015-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Future Foundation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7031439-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Future Imperfect",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4598373-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Future Imperfect: Warzones!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4963458-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Future Quest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5700387-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Future Quest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5212636-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Future Quest Presents",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6006864-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Future Quest Presents",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6418141-5911860867-67229.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "G.I. Combat",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/850037-879_4_001.jpg",
      "year": "1952",
      "publisher": "DC Comics",
      "Field7": "288 Issues"
    },
    {
      "title": "G.I. Combat",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1417739-g.i._combat_1.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "G.I. Combat",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2321140-gicombat1.jpeg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "8 Issues"
    },
    {
      "title": "G.I. Combat: The War that Time Forgot",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11122/111222211/6373148-blank.png",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "G.I. Joe A Real American Hero Special Treasury Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2524879-__addme___gi_joe_a_real_american_hero_special_treasury_edition__1___page_1.jpg",
      "year": "1982",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "G.I. Joe and the Transformers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2183978-01.jpg",
      "year": "1986",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "G.I. Joe European Missions",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1918179-01.jpg",
      "year": "1987",
      "publisher": "Marvel",
      "Field7": "15 Issues"
    },
    {
      "title": "G.I. Joe Yearbook",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2232584-g.i._joe_yearbook_01___00___fc.jpg",
      "year": "1985",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "G.I. Joe: A Real American Hero",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2665109-g.i._joe___a_real_american_hero_001___00___fc.jpg",
      "year": "1982",
      "publisher": "Marvel",
      "Field7": "155 Issues"
    },
    {
      "title": "G.I. Joe: Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60444/1217213-g.i._joe_special_v1__1__1995_2____page_1.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "G.I. Joe: Special Missions",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1919066-01.jpg",
      "year": "1986",
      "publisher": "Marvel",
      "Field7": "28 Issues"
    },
    {
      "title": "G.I. War Tales",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/46963-2614-56297-1-g-i-war-tales.jpg",
      "year": "1973",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "G.I. Zombie: A Star Spangled War Story",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4765126-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "G.L.A.",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/70518-11799-103516-1-g-l-a.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "G.L.A.: Misassembled",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4436367-01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Galacta: Daughter of Galactus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1234374-galacta_daughter_of_galactus.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Galactic Guardians",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4079450-01.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Galactus the Devourer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4538645-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Galactus the Devourer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/51042-9110-66884-1-galactus-the-devoure.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Generation X",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31599/2692887-generationx.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "77 Issues"
    },
    {
      "title": "Generation X - Overstreet Fan Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1156665-generation_x___overstreet_fan_edition.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Generation X '95",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117127/3009713-generation-x-annual-1995.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Generation X '96",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117127/3009711-generation-x-annual-1996.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Generation X '97",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/14955/312322-18594-123437-2-generation-x-annual.JPG",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Generation X / Dracula '98",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117127/3009725-19577417.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Generation X 1999",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117127/3009750-442324-generation_x_annual_1999_00_super.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Generation X Ashcan Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3848/240964-19744-118365-1-generation-x-ashcan.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Generation X Classic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1571897-gnr_x_cls.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Generation X Collectors' Preview",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/253453-19743-118363-3-generation-x-collect.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Generation X Holiday Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3848/187898-19089-114006-2-generation-x-holiday.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Generation X Preview",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3848/127643-18634-109931-1-generation-x.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Generation X Underground",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3848/188284-19095-114105-1-generation-x-undergr.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Generation X: Natural Selection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6123820-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Generation X: Survival of the Fittest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6339691-02.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Generation X/Gen 13",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/253602-20060-119741-1-generation-x-gen-13.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Generation Zero",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/148518/4251551-51jyrwz-qrl._sl500_.jpg",
      "year": "1991",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Generations",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6153000-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Generations Free Previews Spotlight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5962882-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Generations: Banner Hulk & Totally Awesome Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5984670-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Generations: Captain Marvel & Captain Mar-vell",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6050258-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Generations: Hawkeye & Hawkeye",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6029059-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Generations: Iron Man & Ironheart",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6039769-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Generations: Miles Morales: Spider-Man & Peter Parker: Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6071391-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Generations: Ms. Marvel & Ms. Marvel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6060385-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Generations: Phoenix & Jean Grey",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5996324-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Generations: Sam Wilson: Captain America & Steve Rogers: Captain America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6069431-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Generations: The Unworthy Thor & The Mighty Thor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6017180-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Generations: Wolverine & All-New Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6006865-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Generic Comic Book",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15659/1774207-005ek3xq.jpg",
      "year": "1984",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Genesis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/70760-11858-103758-1-genesis.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Genesis Preview",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/114926/5046495-preview%20genesis%20v1997%20%230%20%28of%204%29%20%281997%29%20-%20page%201.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "GeNEXT",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/388618-21581-130364-1-genext.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "GeNext",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5824109-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "GeNext: United",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/33110/799749-copy_of_genextunited1.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "GeNext: United",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5841711-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "George R. R. Martin's The Hedge Knight II: Sworn Sword",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/462/138577-18770-110893-1-hedge-knight-ii-swo.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "George Romero's Empire of the Dead",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5455955-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "George Romero's Empire of the Dead: Act One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3588356-01a.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "George Romero's Empire of the Dead: Act One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3983563-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "George Romero's Empire of the Dead: Act Three",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4479800-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "George Romero's Empire of the Dead: Act Three",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4897076-03.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "George Romero's Empire of the Dead: Act Two",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4443593-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "George Romero's Empire of the Dead: Act Two",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4087873-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Ghost Racers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4613194-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Ghost Racers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5017268-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Rider",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4203682-gr1v2nm92m101.jpg",
      "year": "1990",
      "publisher": "Marvel",
      "Field7": "94 Issues"
    },
    {
      "title": "Ghost Rider",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/8290-2352-9155-1-ghost-rider.jpg",
      "year": "1967",
      "publisher": "Marvel",
      "Field7": "7 Issues"
    },
    {
      "title": "Ghost Rider",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/12128-2636-13577-1-ghost-rider.jpg",
      "year": "1973",
      "publisher": "Marvel",
      "Field7": "81 Issues"
    },
    {
      "title": "Ghost Rider",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6063/1905984-ghostrv3001_dc11_lr.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "10 Issues"
    },
    {
      "title": "Ghost Rider",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7092699-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Ghost Rider",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5559766-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Ghost Rider",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2032774-01a.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "35 Issues"
    },
    {
      "title": "Ghost Rider 2099",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7169462-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Rider 2099",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/104324-18412-107928-1-ghost-rider-2099.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "25 Issues"
    },
    {
      "title": "Ghost Rider and Cable: Servants of the Dead",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/258347-20137-120183-1-ghost-rider-and-cabl.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Rider and the Midnight Sons Magazine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52080/1075941-gratmsm1.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Rider Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/253633-20061-119743-1-ghost-rider-annual.jpg",
      "year": "1990",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Ghost Rider Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2770387-gr_ann_1_dcp_0000.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Ghost Rider by Daniel Way Ultimate Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2159411-gr_by_dw_uc.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Rider by Jason Aaron Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1627816-gr_b_ja_omn.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Rider Collector's Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2851660-__addme___ghost_rider_collector_s_edition_v9999__1___page_1.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Rider Finale",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2588825-200701_ghost_rider_finale__94___page_1.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Rider Poster Book",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2851663-__addme___ghost_rider_poster_book_v9999__200400___page_1.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Rider Poster Magazine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2851664-fc.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Rider Saga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1300282-ghost_rider_saga_1.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Rider Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/59022/2834107-ghost_rider_special_edition_v1_001_pagecover.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "10 Issues"
    },
    {
      "title": "Ghost Rider Team-Up",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/975353-gr.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Rider X-Mas Special Infinite Comic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5590736-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Rider, Wolverine, Punisher: Hearts of Darkness",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/128638-18646-110019-1-hearts-of-darkness.jpg",
      "year": "1991",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Rider, Wolverine, Punisher: The Dark Design",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5695272-01.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Rider: Apocalypse Soon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1172444-gr.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Rider: Complete Series by Rob Williams",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7101392-0430692940-80463.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Rider: Cycle of Vengeance",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/2371781-ghost_rider__cycle_of_vengeance_v2012__2__of_2___2012_3____page_1.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Rider: Danny Ketch",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/593956-danketch.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Ghost Rider: Danny Ketch Classic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1085556-gr.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Ghost Rider: Danny Ketch: Addict",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5824110-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Rider: Four On The Floor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5923489-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Rider: Hell Bent and Heaven Bound",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4150203-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Rider: Official Index to the Marvel Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/13/135797/2975464-grindex.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Rider: Revelations",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1172449-gr.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Rider: The Last Stand",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4161685-02.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Rider: The Life and Death of Johnny Blaze",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1172439-gr.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Rider: The Road to Damnation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11127/111273888/5453485-ghost_rider_-_road_to_damnation.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Rider: The War For Heaven",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6807729-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Rider: Trail of Tears",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2032921-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Ghost Rider: Trail of Tears",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1172399-gr.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Rider: Trials and Tribulations",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4177285-03.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Rider: Vicious Cycle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1172438-gr.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Rider/Ballistic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/103010-18377-107762-2-ghost-rider--ballis.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Rider/Blaze: Spirits of Vengeance",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/50711-4790-66520-1-ghost-rider--blaze-.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "23 Issues"
    },
    {
      "title": "Ghost Rider/Captain America: Fear",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1358668-ghost_rider_captain_america___fear_01.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Rider/Wolverine/Punisher: Hearts of Darkness",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5688788-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Riders: Crossroads",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/140083-18784-111030-1-ghost-rider--crossr.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Riders: Heaven's On Fire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4260994-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost Riders: Heaven's on Fire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/18921/904870-prv3128_cov.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Ghost-Spider",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7047340-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Ghost-Spider Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7059402-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghost-Spider: Dog Days Are Over",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7236766-01.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ghosts",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/37115/731907-ghosts1.jpg",
      "year": "1971",
      "publisher": "DC Comics",
      "Field7": "112 Issues"
    },
    {
      "title": "Giant Size Astonishing X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3978939-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Giant Size Creatures",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/2999030-tn.jpg",
      "year": "1974",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Giant Size Little Marvel: AvX",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4598375-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Giant Size Mini-Marvels: Starring Spidey",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2104107-giant_size_0799__mini_marvels__1___page_1.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Giant Size Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1986607-cover.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Giant-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6931792-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Giant-Size Astonishing X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/10390/401227-21710-130969-2-giant-size-astonishi.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Giant-Size Atom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56494/1701880-f4735c34e5e6af2c0ed19d1bcab3e770.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Giant-Size Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2031088-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Giant-Size Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2861979-giantsizeavengers01.jpg",
      "year": "1974",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Giant-Size Avengers/Invaders",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/73571/1335936-giant_size_avengers_invaders__1___page_1.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Giant-Size Captain America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4033862-gsca1nm9m054.jpg",
      "year": "1975",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Giant-Size Captain Marvel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1243214-giant_size_captain_marvel_v1_001.jpg",
      "year": "1975",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Giant-Size Chillers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/13425-2751-15058-1-giant-size-chillers.jpg",
      "year": "1975",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Giant-Size Chillers featuring Dracula",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/32931/671095-2164_4_1.jpg",
      "year": "1974",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Giant-Size Conan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3586694-01.jpg",
      "year": "1974",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Giant-Size Daredevil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/61948/1169358-p00001___giant_size_daredevil__1.jpg",
      "year": "1975",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Giant-Size Defenders",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/3701482-3106879422_fb9fd468a4_b.jpg",
      "year": "1974",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Giant-Size Defenders #3: Facsimile Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7175851-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Giant-Size Doc Savage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4264116-1243216-giant_size_doc_savage_v1_001.jpg",
      "year": "1975",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Giant-Size Dr. Strange",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/564783-1.jpg",
      "year": "1975",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Giant-Size Dracula",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/13006-2682-14581-1-giant-size-dracula.jpg",
      "year": "1974",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Giant-Size Fantastic Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4101122-%24t2ec16rhjfoe9nh6nwf5bp5eyjosr%21~~60_57.jpg",
      "year": "1974",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Giant-Size Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4197008-gshulk1nm9m102.jpg",
      "year": "1975",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Giant-Size Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124153/4752433-giant-size_hulk_v2006_cover.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Giant-Size Incredible Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/388286-21577-130346-1-giant-size-incredibl.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Giant-Size Invaders",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2699714-giantsizeinvaders01.jpg",
      "year": "1975",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Giant-Size Iron Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4018374-gz1.jpg",
      "year": "1975",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Giant-Size Kid Colt",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/13345-2758-14965-1-giant-size-kid-colt.jpg",
      "year": "1975",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Giant-Size Little Marvel: AvX",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5033210-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Giant-Size Man-Thing",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/12950-2684-14522-1-giant-size-man-thing.jpg",
      "year": "1974",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Giant-Size Marvel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1069972-gsm.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Giant-Size Marvel Adventures Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2191223-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Giant-Size Marvel Triple Action",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/13543-2759-15182-1-giant-size-marvel-tr.jpg",
      "year": "1975",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Giant-Size Master of Kung Fu",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/13007-2685-14582-1-giant-size-master-of.jpg",
      "year": "1974",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Giant-Size Ms. Marvel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/13180/487125-giant_size_ms_marvel_20060123005114927.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Giant-Size Power Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/965306-giant_size_power_man_vol_1_1.jpg",
      "year": "1975",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Giant-Size Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3850032-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Giant-Size Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/12855-2686-14421-1-giant-size-spider-ma.jpg",
      "year": "1974",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Giant-Size Spider-Woman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/964194-giantsize_spiderwoman_1.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Giant-Size Super-Heroes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4028898-gssm1.jpg",
      "year": "1974",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Giant-Size Super-Stars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4106199-gsss1nm92m085.jpg",
      "year": "1974",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Giant-Size Super-Villain Team-Up",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4427950-01.jpg",
      "year": "1975",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Giant-Size Thor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/823427-2248_4_1.jpg",
      "year": "1975",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Giant-Size Werewolf",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/13084-2689-14666-1-giant-size-werewolf.jpg",
      "year": "1974",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Giant-Size Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/2521535-gzw1a.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Giant-Size X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/13286-2763-14890-1-giant-size-x-men.jpg",
      "year": "1975",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Giant-Size X-Men #1: Facsimile Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7009251-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Giant-Size X-Men: 40th Anniversary",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4593081-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Giant-Size X-Statix",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7000475-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Giant-Sized Gambit",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/508067-2.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Giantkiller",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3415234-01.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Giantkiller",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/241302-19747-118381-1-giantkiller-tpb.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Giantkiller A to Z",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3415241-01.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Gilgamesh II",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/28912-4186-32106-1-gilgamesh-ii.jpg",
      "year": "1989",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Girl Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1147789-girl_comics_1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Girl Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6553328-7455162048-70291.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Girl Power: Amanda Conner Gallery Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5493385-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Girls' Love Stories",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1858948-1.jpg",
      "year": "1949",
      "publisher": "DC Comics",
      "Field7": "180 Issues"
    },
    {
      "title": "Girls' Romances",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27783/1271199-gr_1.jpg",
      "year": "1950",
      "publisher": "DC Comics",
      "Field7": "160 Issues"
    },
    {
      "title": "Gladiator/Supreme",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/248908-19885-119095-1-gladiator-supreme.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Global Frequency: The Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6364043-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "GLX-Mas Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/90749-18174-106417-1-glx-mas-special.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Godzilla",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/15869-2901-17681-1-godzilla.jpg",
      "year": "1977",
      "publisher": "Marvel",
      "Field7": "24 Issues"
    },
    {
      "title": "Gog (Villains)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/677133-21728_20051230004516_large.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Gold Bug",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/73748/1415722-gold_bug_v1___page_1.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Golden Age Captain America Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3655329-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Golden Age Green Lantern Archives",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1649438-goldenagegreen.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Golden Age Hawkman Archives",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2058504-hawkman.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Golden Age of Marvel Comics Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1291001-mrvl_omn.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Golden Age Sandman Archives",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2058517-sandmandc.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Golden Age Secret Files and Origins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1079459-cover.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Goldfish",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6712655-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Goodnight Batcave",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5500603-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Gorilla-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1300039-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Gorilla-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1553915-grlman.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Gotham Academy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4128088-gotham%20academy%2001.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "18 Issues"
    },
    {
      "title": "Gotham Academy Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5419994-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Gotham Academy: Calamity",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5099193-02.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Gotham Academy: Endgame",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4480974-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Gotham Academy: Second Semester",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5432065-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Gotham Academy: Second Semester: The Ballad of Olive Silverlock",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6164819-02.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Gotham Academy: Second Semester: Welcome Back",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5960903-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Gotham Academy: Welcome To Gotham Academy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4627316-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Gotham Academy: Yearbook",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5511348-03.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Gotham by Gaslight: An Alternative History of the Batman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11785/319529-20720-124252-1-gotham-by-gaslight.jpg",
      "year": "1989",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Gotham by Midnight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4239565-1-c2f729496b.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Gotham by Midnight Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4713201-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Gotham by Midnight: Rest In Peace",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5133352-02.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Gotham by Midnight: We Do Not Sleep",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4751373-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Gotham Central",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3807333-01.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Gotham Central",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2513170-01.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "40 Issues"
    },
    {
      "title": "Gotham Central Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5193937-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Gotham Central Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4108621-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Gotham Central: Dead Robin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1652837-deadrobin.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Gotham Central: Half a Life",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/722651-1.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Gotham Central: In The Line of Duty",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/58127/1238032-gcentral.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Gotham Central: The Quick and the Dead",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1652947-quickdead.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Gotham Central: Unresolved Targets",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1652886-unresolvedtrgts.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Gotham City Garage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6458009-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Gotham City Garage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6006867-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "24 Issues"
    },
    {
      "title": "Gotham City Garage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6091863-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Gotham City Monsters",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7067488-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Gotham City Sirens",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/45797/850938-gcs01_001.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "26 Issues"
    },
    {
      "title": "Gotham City Sirens",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4170688-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Gotham City Sirens: Division",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2238274-division.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Gotham City Sirens: Songs of the Sirens",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1642040-screen_capture.png",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Gotham City Sirens: Strange Fruit",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2064787-gotham_city_sirens_strange_fruit.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Gotham City Sirens: Union",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1200568-14081_400x600.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Gotham Gazette: Batman Alive?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/817895-001.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Gotham Gazette: Batman Dead?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/726753-gotham_gazette__1_001.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Gotham Girls",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/71645-12022-104643-1-gotham-girls.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Gotham Underground",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/217744-19323-116002-1-gotham-underground.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "9 Issues"
    },
    {
      "title": "Grandson of Origins of Marvel Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1538122-01.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Graphic Ink: The DC Comics Art of Darwyn Cooke",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4851223-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Graphic Ink: The DC Comics Art of Frank Quitely",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3898417-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Graphic Ink: The DC Comics Art of Ivan Reis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4934545-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Gravity",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/308/99780-18300-107112-1-gravity.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Gravity: Big-City Super Hero",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1293934-grv__bcsh.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Grayson",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3943243-grayson%2001.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "20 Issues"
    },
    {
      "title": "Grayson Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4288930-grayson.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Grayson: A Ghost In the Tomb",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5467811-04.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Grayson: Agents of Spyral",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4598376-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Grayson: Futures End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4069915-grayson.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Grayson: Nemesis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5199901-03.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Grayson: Spiral's End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5628433-05.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Grayson: The Superspy Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6103664-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Grayson: We All Die At Dawn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5008142-02.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Great Lakes Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5479416-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "7 Issues"
    },
    {
      "title": "Great Lakes Avengers: Same Old, Same Old",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5923490-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Greatest Battles of the Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/1095719-tgba_001_164.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1157304-1140008_ga_cv30_ds_copy_02_super.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Green Arrow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1998601-1a.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "54 Issues"
    },
    {
      "title": "Green Arrow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1274024-green_arrow_1.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "15 Issues"
    },
    {
      "title": "Green Arrow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/20750-3197-23143-1-green-arrow.jpg",
      "year": "1983",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Green Arrow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5264013-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "50 Issues"
    },
    {
      "title": "Green Arrow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/51076-9113-66918-1-green-arrow.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "75 Issues"
    },
    {
      "title": "Green Arrow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/50883-4003-66692-1-green-arrow.jpg",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "139 Issues"
    },
    {
      "title": "Green Arrow / Black Canary: For Better or Worse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/722455-1.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow 101",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2845244-digital_green_arrow_101_v9999__2012____page_1.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow and Black Canary Wedding Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/195742-19163-114650-1-green-arrow-and-blac.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6170189-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Green Arrow Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4840465-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/5813672-ga%20annual%20%231%20final.jpg",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "7 Issues"
    },
    {
      "title": "Green Arrow by Jeff Lemire: The Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4974165-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow Rebirth Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6650822-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow Year One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/153350-18880-111591-1-green-arrow-year-one.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Green Arrow Year One Special Sneak Preview",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/3592861-gre1.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: A Celebration of 75 Years",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5290752-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: An Adult Coloring Book",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5559768-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: Black Arrow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5187355-05.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: Blood of the Dragon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4974168-04.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: Broken",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4532193-06.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: Citizen's Arrest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7008012-07.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: City Walls",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/251069-19988-119437-1-green-arrow-tpb.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: Crawling Through the Wreckage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2143345-green_arrow_crawling_from_the_wreckage.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: Emerald Outlaw",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5984674-03.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: Futures End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4069916-green%20arrow.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: Hard-Traveling Hero",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6418162-5921489415-67230.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: Harrow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3308007-03.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: Heading into the Light",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2055757-hitl.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: Here There Be Dragons",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4143613-02.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: Homecoming",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5640124-07.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: Hunters Moon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3468783-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: Into the Woods",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1967873-01.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: Island of Scars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5786772-02.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: Kingdom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4900401-07.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: Last Action Hero",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5432066-06.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: Old Tricks",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6233334-09.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: Outbreak",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5489489-09.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: Quiver",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6719716-4244220529-DIG01.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: Rebirth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5239731-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: Road To Jericho",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2055711-jericho.png",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: Salvation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/148518/2869398-green_arrow_salvation.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: Secret Files & Origins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50633/932435-p00002.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: Straight Shooter",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4842197-01.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: The Archer's Quest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2055744-arher_s_quest.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: The Archer's Quest Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4738246-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: The Death & Life of Oliver Queen",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5628435-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: The End of the Road",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7233448-08.jpg",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: The Golden Age Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6203582-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: The Hunt For the Red Dragon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5852961-08.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: The Kill Machine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3703456-04.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: The Longbow Hunters",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2591808-__kgrhqr__jgf_thetgcubqu0g_tchg__60_57.jpg",
      "year": "1989",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: The Longbow Hunters",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/4519330-green%20arrow%20%231%20fc%20final.jpg",
      "year": "1987",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Green Arrow: The Midas Touch",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3485563-01.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: The Night Birds",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5302716-08.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: The Outsiders War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4143614-05.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: The Rise of Star City",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6172988-04.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: The Sounds of Violence",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3395569-01.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: The Trial of Oliver Queen",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4598377-03.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: The Wonder Year",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/32985-4961-36822-1-green-arrow-the-won.jpg",
      "year": "1993",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Green Arrow: Trial of Two Cities",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6703932-06.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: Triple Threat",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498165-02.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: War of the Clans (DC Essential Edition)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6735980-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: Year One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/148518/2941721-jockgreenarrowyearone.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow: Year One Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4143622-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow/Black Canary",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/206744-19240-115399-1-green-arrow-black-ca.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "29 Issues"
    },
    {
      "title": "Green Arrow/Black Canary: A League of Their Own",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2227134-gabcleagueoftheirown.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow/Black Canary: Big Game",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2227139-mar100248.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow/Black Canary: Enemies List",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1062673-enemieslist.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow/Black Canary: Family Business",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2227130-10737_400x600.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow/Black Canary: Five Stages",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2227141-aug100202.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow/Black Canary: Road to the Altar",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15455/466568-gabc.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Arrow/Black Canary: The Wedding Album",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1972696-wedding_album.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Goblin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/107701-18471-108450-1-green-goblin.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "13 Issues"
    },
    {
      "title": "Green Goblin: A Lighter Shade of Green",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6412097-4373366859-67088.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/2008261-1.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "57 Issues"
    },
    {
      "title": "Green Lantern",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/29509-4363-32799-1-green-lantern.jpg",
      "year": "1990",
      "publisher": "DC Comics",
      "Field7": "183 Issues"
    },
    {
      "title": "Green Lantern",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/4457-2013-4869-1-green-lantern.jpg",
      "year": "1960",
      "publisher": "DC Comics",
      "Field7": "205 Issues"
    },
    {
      "title": "Green Lantern",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/146286-18216-111265-1-green-lantern.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "67 Issues"
    },
    {
      "title": "Green Lantern - Wanted: Hal Jordan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498067-01.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern / Adam Strange",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/24967/462455-gl_as.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern / Atom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11111/111116979/3057069-greenlanterncircleoffiregreenl.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern / Firestorm",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/217283-19314-115928-1-green-lantern--fire.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern / Green Lantern",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/24967/452830-2000_green_lantern_and_green_lantern__1.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern / Power Girl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/24967/462438-gl_pg.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern / Sentinel: Heart of Darkness",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2184371-01.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Green Lantern #29 Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1209275-29.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern 1 (Facsimile Edition)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7232872-01.jpg",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern 101",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/114926/5046500-green%20lantern%20101%20v2011%20%231%20%28of%201%29%20-%20page%201.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern 3-D",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51078/1004321-green1.jpeg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern 80-Page Giant",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/24925/478116-giant_green_lantern_80_page_giant_v3__1__1998_12____page_1.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Green Lantern 85 (Facsimile Edition)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7152333-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124034/3108882-gl%20annual%2001.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/31522-4740-35105-1-green-lantern-annual.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "9 Issues"
    },
    {
      "title": "Green Lantern Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2556502-glann_cv1.jpeg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Green Lantern Archives",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62697/1233849-300px_green_lantern_archives_vol_1_1.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "7 Issues"
    },
    {
      "title": "Green Lantern by Geoff Johns",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6819159-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Green Lantern By Geoff Johns Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4361908-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Green Lantern Chronicles",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/78179/1609177-green_lantern_chronicles_1.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Green Lantern Corps",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/479690-green_lantern_corps_01_page_01.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "63 Issues"
    },
    {
      "title": "Green Lantern Corps",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/2018274-1.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "41 Issues"
    },
    {
      "title": "Green Lantern Corps Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2839147-glcorann_cv1.jpeg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Green Lantern Corps Quarterly",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/32173-4741-35873-1-green-lantern-corps-.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "8 Issues"
    },
    {
      "title": "Green Lantern Corps: Alpha War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498166-02.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern Corps: Edge of Oblivion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4997950-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Green Lantern Corps: Edge of Oblivion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5523044-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern Corps: Emerald Eclipse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/2149276-214860_20101119101551_large.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern Corps: Fearsome",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498167-01.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern Corps: Futures End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4086393-green%20lantern%20corps.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern Corps: Lost Army",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5133353-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern Corps: Rebuild",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3930253-04.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern Corps: Recharge",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/73761/1543984-glc_recharge.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern Corps: Recharge",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2513284-01.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Green Lantern Corps: Reckoning",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4685112-06.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern Corps: Revolt Of The Alpha Lanterns",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6423002-6731551904-67953.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern Corps: Ring Quest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1864892-ring_quest.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern Corps: Sins of the Star Sapphire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1323556-glc_sins_of_the_star_sapphire.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern Corps: The Dark Side of Green",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/73761/1516233-glc_dark_side_of_green.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern Corps: The Weaponer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6423008-3941223166-67953.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern Corps: Through the Ages",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1266146-1.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern Corps: To Be A Lantern",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3797495-01.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern Corps: Uprising",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4332737-05.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern Corps: Willpower",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3482221-03.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern Gallery",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/24925/478118-green_lantern_gallery__1__1996_12____page_1.jpg",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern Legacy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/24925/478119-green_lantern_legacy___the_last_will_and_testament_of_hal_jordan__0__2002____page_1.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern Movie Prequel Sinestro",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1988029-glsinestroprequel.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern Movie Prequel: Abin Sur",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/83283/1862140-gl_01.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern Movie Prequel: Hal Jordan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/83283/1884633-hal_01.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern Movie Prequel: Kilowog",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1852937-glk_01.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern Movie Prequel: Tomar Re",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1852938-glt_01.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/78179/1609209-green_lantern_omnibus_vol_1.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Green Lantern Plus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/402/620724-green_lantern_plus_1_dec_96.jpg",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern Secret Files",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/56310-7211-78433-1-green-lantern-secret.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Green Lantern Secret Files and Origins 2005",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/53072/1032507-greenlantern.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/26107-4005-29000-1-green-lantern-specia.jpg",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Green Lantern Super Spectacular",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2669971-01.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: 1001 Emerald Nights",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1058945-batman___unseen__5__of_5___2010____page_1.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: A Celebration of 75 Years",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4838833-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Agent Orange",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/45592/1204189-gl_agent_orange.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Baptism of Fire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2060702-gl_bof.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Blackstars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7133563-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Green Lantern: Brightest Day",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498057-01.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Brightest Day Blackest Night",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62697/1234440-300px_green_lantern_brightest_day_blackest_night_vol_1_1.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Brother's Keeper",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/2053918-glbk.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Circle of Fire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/74858-9505-78338-1-green-lantern-circl.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Green Lantern: Circle of Fire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2060706-circle_of_fire.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Dark Days",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3775338-04.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Dragon Lord",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2031361-01.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Green Lantern: Earth One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6326203-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Emerald Allies",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51078/1004323-greenl1.jpeg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Emerald Dawn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2513246-01.jpg",
      "year": "1989",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Green Lantern: Emerald Dawn II",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/45021-4552-52081-1-green-lantern-emera.jpg",
      "year": "1991",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Green Lantern: Emerald Knights",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2124298-emerald.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Emerald Twilight/New Dawn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2060716-new_dawn.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Emerald Warriors",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1333287-glew__001.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "13 Issues"
    },
    {
      "title": "Green Lantern: Emerald Warriors",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1965878-glew.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Evil's Might",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6350553-3057366692-copyO.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Green Lantern: Fear Itself",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1058931-batman___unseen__5__of_5___2010____page_1.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Futures End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4070732-green%20lantern.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Ganthet's Tale",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/13181/466529-glganthetstale.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Hal Jordan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5652323-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: In Brightest Day",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1771243-inbrightestday.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Kyle Rayner",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6080287-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Green Lantern: Larfleeze Christmas Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1576021-gllcs_cv1_ds_copy.jpeg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Legacy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7218058-8267996709-83509.jpg",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Lights Out",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3898418-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Mosaic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/32077-4742-35751-1-green-lantern-mosai.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "18 Issues"
    },
    {
      "title": "Green Lantern: New Guardians",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/2022875-green_lantern_new_guardians__2011__01a.jpeg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "41 Issues"
    },
    {
      "title": "Green Lantern: New Guardians - Beyond Hope",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498168-02.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: New Guardians - Gods and Monsters",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4057894-04.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: New Guardians - Love and Death",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3604212-03.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: New Guardians - Storming the Gates",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4751376-06.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: New Guardians - The Godkillers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4398318-05.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: New Guardians - The Ring Bearer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3485602-01.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: New Guardians Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2797513-glngann_cv1.jpeg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Green Lantern: New Guardians: Futures End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4101647-glnew%20gr.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: New Journey, Old Path",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/2053909-glnjop.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: No Fear",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3485637-01.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Our Worlds At War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1075324-cover.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Passing the Torch",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1771252-glpassingtorch.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Rage of the Red Lanterns",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3485642-01.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Rebirth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/384983-21531-129954-1-green-lantern-rebir.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Green Lantern: Rebirth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2364419-17776_20060520092128_large.jpeg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Rebirth #1 Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1182822-1.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Rebirth Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7174841-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Reflections",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5455960-08.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Renegade",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5160020-07.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Revenge of the Black Hand",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3368483-02.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Revenge of the Green Lanterns",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3485638-01.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Rise of the Third Army",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3321384-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Secret Origin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498066-01.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Secret Origin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/45592/1204644-gl_secret_origin.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Sector 2814",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4904955-01.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Green Lantern: Sinestro",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2347848-978_1_4012_3454_6.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Tales of the Sinestro Corps",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1666044-green_lantern_tales_of_the_sinestro_coprs.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Test of Wills",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4184396-05.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: The Animated Series",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3585735-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Green Lantern: The Animated Series",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/2290177-gltas1.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "15 Issues"
    },
    {
      "title": "Green Lantern: The End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3377600-03.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: The Greatest Stories Ever Told",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/78179/1609232-green_lantern_greatest_stories_ever_told.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: The Life Equation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4558182-06.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: The Lost Army",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4642284-1-7daeda406b.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Green Lantern: The Movie Prequels",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2161455-01.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: The New Corps",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/530525-0003.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Green Lantern: The Power of Ion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2060736-tpi.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: The Road Back",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2060744-the_road_back.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: The Silver Age",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5467812-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Green Lantern: The Silver Age Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5711908-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Green Lantern: The Sinestro Corps War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3485643-01.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Green Lantern: The Sinestro Corps War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/2005043-1.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: The Wrath of the First Lantern",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3650701-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: Traitor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2064878-traitor.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: War of the Green Lanterns",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498068-01.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern: WillWorld",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70196/1289768-gl_willworld000cov.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern/Flash: Faster Friends",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/38575-5952-43346-1-green-lantern--flas.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Green Lantern/Green Arrow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/148518/2950920-44997_20060710084647_large.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Green Lantern/Green Arrow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2536566-_t2ec16hhjf0e9nmftm_nbqk_ffgdwg__60_57.jpeg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern/Green Arrow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/21075-3198-23505-1-green-lantern--gree.jpg",
      "year": "1983",
      "publisher": "DC Comics",
      "Field7": "7 Issues"
    },
    {
      "title": "Green Lantern/Green Arrow Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/148518/2950883-green-lantern_green-arrow_hard-traveling-heroes.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern/Green Arrow: Hard-Traveling Heroes Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6458010-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern/Huckleberry Hound Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6668486-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern/New Gods: Godhead",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4128086-godhead%2001.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern/New Gods: Godhead",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4790312-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern/Plastic Man: Weapons of Mass Deception",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/47029/1565876-image__28_.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern/Silver Surfer: Unholy Alliances",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/376/83410-18035-105603-1-green-lantern-silver.JPG",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern/Sinestro Corps: Secret Files",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/264021-20231-120590-1-green-lantern-sinest.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern/Space Ghost Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5774280-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lantern/Superman: Legend of the Green Flame",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/959128-0.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lanterns",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5265993-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "57 Issues"
    },
    {
      "title": "Green Lanterns Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6447349-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lanterns: A World of Our Own",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6486528-06.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lanterns: Evil's Might",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6947196-09.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lanterns: Ghosts of the Past",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6779309-08.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lanterns: Out of Time",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6351123-05.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lanterns: Polarity",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6050261-03.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lanterns: Rage Planet",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5665085-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lanterns: Rebirth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5239733-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lanterns: Superhuman Trafficking",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6631586-07.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lanterns: The First Ring",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6195196-04.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Green Lanterns: The Phantom Lantern",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5819616-02.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Greenberg the Vampire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4826096-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Grifter",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2034298-01.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "17 Issues"
    },
    {
      "title": "Grifter: Most Wanted",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3485577-01.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Grifter: Newfound Power",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498169-02.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Groot",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5022617-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Groot",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4598378-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Groovy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/59832-2404-92827-1-groovy.jpg",
      "year": "1968",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Gross Point",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74848/1507249-gross_point_01.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "15 Issues"
    },
    {
      "title": "Guard Force",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11113/111132479/5144773-guard%20force%20%23200300%20-%20page%201.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1494/86940-18085-105917-1-guardians.gif",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Guardians 3000",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/4128629-guard30002014001_dc11_lr-0.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "8 Issues"
    },
    {
      "title": "Guardians 3000: Time After Time",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4593493-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of Infinity",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4934548-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "8 Issues"
    },
    {
      "title": "Guardians of Knowhere",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4685116-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Guardians of Knowhere: Warzones!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4912396-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of Metropolis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/35728-5245-39895-1-guardians-of-metropo.jpg",
      "year": "1994",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Guardians of the Galaxy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6123825-146.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Guardians of the Galaxy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7219907-01.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4851225-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "20 Issues"
    },
    {
      "title": "Guardians of the Galaxy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/29547-4398-32838-1-guardians-of-the-gal.jpg",
      "year": "1990",
      "publisher": "Marvel",
      "Field7": "62 Issues"
    },
    {
      "title": "Guardians of the Galaxy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/387000-21550-130199-1-guardians-of-the-gal.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "25 Issues"
    },
    {
      "title": "Guardians of the Galaxy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2894906-0.1a.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "28 Issues"
    },
    {
      "title": "Guardians of the Galaxy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6771024-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Guardians of the Galaxy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7235646-9503591661-83277.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Guardians of the Galaxy - Marvel Legacy Primer Pages",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6095382-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy & X-Men: The Black Vortex",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4655762-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy & X-Men: The Black Vortex Alpha",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4370323-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy & X-Men: The Black Vortex Omega",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4519401-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy Adaptation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5628442-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Guardians of the Galaxy Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4265327-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6958062-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/30273-4595-33677-1-guardians-of-the-gal.jpg",
      "year": "1991",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Guardians of the Galaxy by Abnett & Lanning Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5193944-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy By Abnett & Lanning: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3984439-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Guardians of the Galaxy By Brian Michael Bendis Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5575658-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy by Gerry Duggan Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6623622-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy By Jim Valentino",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3563251-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Guardians of the Galaxy by Jim Valentino Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5728414-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy Classic: In The Year 3000",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5351444-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Guardians of the Galaxy Infinite",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4001589-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy Infinite Comic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117127/3551794-7064486922-DIG00.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Guardians of the Galaxy Solo Classic Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4887890-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy, Ozone Heroes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7119442-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: All-New Marvel Treasury Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5772986-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: An Awesome Mix",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6103666-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: Angela",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3799313-02.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: Awesome Mix Infinite Comic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5561985-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "10 Issues"
    },
    {
      "title": "Guardians of the Galaxy: Best Story Ever",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4479802-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: Best Story Ever",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4763036-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: Cosmic Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3273520-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: Dream On",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5808935-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: Earth Shall Overcome",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6442417-5066201071-67713.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: EcoSport Adventure",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5867392-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: Free Comic Book Day",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3797207-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: Galaxy's Most Wanted",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3930271-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: Guardians Disassembled",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4232437-03.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: Guardians of Infinity",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5406634-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: Hi-Tech Heroes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5835375-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: Infinity Quest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6326177-03.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: Legacy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1220756-gog.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: Marvel Presents #3: Facsimile Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6753284-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: Mission Breakout",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5830876-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: Mother Entropy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5830879-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Guardians of the Galaxy: Mother Entropy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6034445-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: New Guard - Civil War II",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5700389-03.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: New Guard - Emperor Quill",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5151818-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: New Guard - Wanted",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5547954-02.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: New Guard: Grounded",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5909075-04.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: Original Sin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4460345-04.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: Quest for the Shield",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/753174-ggquest.gif",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: Realm of Kings",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031801-04.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: Road To Annihilation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5640126-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Guardians of the Galaxy: Rocket's Powerful Plan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5557466-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: Tales of the Cosmos",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5374451-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: Telltale Games",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6242721-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: The Final Gauntlet",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7039253-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: The Power of Starhawk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6442436-4521776537-67714.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: The Prodigal Sun",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7066194-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: The Telltale Series",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5973391-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Guardians of the Galaxy: Through the Looking Glass",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4826097-05.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: Tomorrow's Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3661028-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: Tomorrow's Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3264345-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Guardians of the Galaxy: Tomorrow's Heroes Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6744791-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: War of Kings, Book One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1220775-gog.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy: War of Kings, Book Two",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1220803-gog.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians of the Galaxy/All-New X-Men: The Trial of Jean Grey",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3854856-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians Team-Up",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4426841-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "10 Issues"
    },
    {
      "title": "Guardians Team-Up: Guardians Assemble",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4885182-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guardians Team-Up: Unlikely Story",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4998050-02.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guidebook To the Marvel Cinematic Universe - Incredible Hulk/Iron Man 2",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4923778-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guidebook to the Marvel Cinematic Universe - Marvel's Agent Carter Season One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5500605-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guidebook to the Marvel Cinematic Universe - Marvel's Agent Carter Season Two",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5617592-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guidebook To the Marvel Cinematic Universe - Marvel's Agents of S.H.I.E.L.D. Season One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5280772-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guidebook to the Marvel Cinematic Universe - Marvel's Agents of S.H.I.E.L.D. Season Three",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5617593-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guidebook to the Marvel Cinematic Universe - Marvel's Agents of S.H.I.E.L.D. Season Two",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5500606-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guidebook to the Marvel Cinematic Universe - Marvel's Ant-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5225570-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guidebook to the Marvel Cinematic Universe - Marvel's Captain America: The Winter Soldier",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5225571-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guidebook to the Marvel Cinematic Universe - Marvel's Captain America: The Winter Soldier/Marvel's Ant-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5225569-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guidebook To the Marvel Cinematic Universe - Marvel's Iron Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4885183-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guidebook to the Marvel Cinematic Universe - Marvel's Iron Man 3",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5193945-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guidebook To The Marvel Cinematic Universe - Marvel's Iron Man 3/Marvel's Thor: The Dark World",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5173556-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guidebook To the Marvel Cinematic Universe - Marvel's Thor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4963459-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guidebook to the Marvel Cinematic Universe - Marvel's Thor: The Dark World",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5193946-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guidebook to the Marvel Cinematic Universe - Marvel’s Agents of S.H.I.E.L.D. Season Two/Marvel’s Agent Carter Season One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5502274-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guidebook To the Marvel Cinematic Universe – Marvel's Agents of S.H.I.E.L.D. Season Three/Marvel's Agent Carter Season Two",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5613458-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guidebook To the Marvel Cinematic Universe – Marvel's Avengers: Age of Ultron",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5455963-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guidebook To the Marvel Cinematic Universe – Marvel's Captain America: Civil War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5665087-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guidebook To the Marvel Cinematic Universe – Marvel's Captain America: The First Avenger",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5022618-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guidebook To the Marvel Cinematic Universe – Marvel's The Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5069792-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guidebook To The Marvel Cinematic Universe — Marvel's Doctor Strange",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5772988-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guidebook To The Marvel Cinematic Universe — Marvel's Guardians Of The Galaxy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5342776-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guidebook to the Marvel Cinematic Universe: Marvel's Incredible Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4964583-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guidebook to the Marvel Cinematic Universe: Marvel's Iron Man 2",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4964584-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guiding Light",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1300696-guiding_light_marvel_comics_digital_exclusive___page_1.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Gun-Slinger",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52212/998690-gun_slinger2_4_73_cry_of_the_coyote_.jpg",
      "year": "1973",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Gunfire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26110/515597-200px_bldgunfire.jpg",
      "year": "1994",
      "publisher": "DC Comics",
      "Field7": "14 Issues"
    },
    {
      "title": "Gunhawks",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6789755-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Guns of the Dragon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3415286-01.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Gunslingers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/1404221-110387.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Gunsmoke Western",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/2026-1704-2189-1-gunsmoke-western.jpg",
      "year": "1955",
      "publisher": "Marvel",
      "Field7": "46 Issues"
    },
    {
      "title": "Guy Gardner",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/32489-4743-36239-1-guy-gardner.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "16 Issues"
    },
    {
      "title": "Guy Gardner Reborn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2184759-01.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Guy Gardner: Collateral Damage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2184762-01.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Guy Gardner: Warrior",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/71087-11894-104085-1-guy-gardner-warrior.jpg",
      "year": "1994",
      "publisher": "DC Comics",
      "Field7": "29 Issues"
    },
    {
      "title": "Guy Gardner: Warrior Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1060303-prv3843_pg1.jpg",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Gwenpool Holiday Special: Merry Mix-Up",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5586815-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Gwenpool Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4945070-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Gwenpool Strikes Back",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7039254-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Gwenpool, The Unbelievable: Believe It",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5523068-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Gwenpool, The Unbelievable: Head of M.O.D.O.K.",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5747736-02.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "H-E-R-O",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2513322-01.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "22 Issues"
    },
    {
      "title": "H-E-R-O Double Feature",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/3303639-h1.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "H-E-R-O: Powers and Abilities",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2060750-hero.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Habit Heroes and Iron Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66710/3913736-img_5624.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Hail Hydra",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4685301-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Hail Hydra: Warzones!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4974171-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Hal Jordan and the Green Lantern Corps",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5342696-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "50 Issues"
    },
    {
      "title": "Hal Jordan and the Green Lantern Corps: Bottled Light",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5873086-02.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Hal Jordan and the Green Lantern Corps: Darkstars Rising",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6744792-07.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Hal Jordan and the Green Lantern Corps: Fracture",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6212051-04.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Hal Jordan and the Green Lantern Corps: Quest For Hope",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6006869-03.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Hal Jordan and The Green Lantern Corps: Rebirth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5318616-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Hal Jordan and the Green Lantern Corps: Sinestro's Law",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5688791-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Hal Jordan and the Green Lantern Corps: Twilight of the Guardians",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6458011-05.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Hal Jordan and the Green Lantern Corps: Zod's Will",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6614309-06.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Half Dead",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/104228/2955033-half%20dead%20cover.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Halloween Comic Fest 2013 - Batman: Li'l Gotham Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3417896-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Halloween Comic Fest 2014 - Batman: Legends of the Dark Knight Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4133585-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Halloween Comic Fest 2014 - Scooby-Doo Team Up",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4133586-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Halloween Megazine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/567222-1.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Halo Graphic Novel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/37094/745066-halocomicbook.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Halo Oversized Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3347216-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Halo Wars Genesis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/19161/1320686-halo_wars_genesis.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Halo: Blood Line",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1089885-halo_blood_line__1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Halo: Blood Line",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1301993-untitled.png",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Halo: Fall of Reach - Boot Camp",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/122433/3198346-halo%20-%20fall%20of%20reach%20-%20boot%20camp%20%282010%29%20-%20page%201.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Halo: Fall of Reach - Boot Camp",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2513300-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Halo: Fall of Reach - Covenant",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/73936/1790543-halo_fall_of_reach_covenant__1___page_1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Halo: Fall of Reach - Invasion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/73936/2188294-halo_fall_of_reach_invasion______mda0331_001__2012__pagecover.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Halo: Fall of Reach: Invasion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/119711/2764683-51l_2k9li9l._sl500_.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Halo: Helljumper",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/45797/888188-halo___helljumper__1___page_1.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Halo: Helljumper",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1142825-halo_helljumper.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Halo: Uprising",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/122433/3200904-halo%20-%20uprising%20%282007%29%20-%20page%201.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Halo: Uprising",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2513308-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Hammerlocke",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/617041-ham1.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "9 Issues"
    },
    {
      "title": "Han Solo",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5264016-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Hank Johnson, Agent of Hydra",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4765131-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Hanna-Barbera Spotlight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4994936-0633993510-49947.jpg",
      "year": "1978",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Hard Time Season Two",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/34588/931614-22881_20060401052337_large.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "7 Issues"
    },
    {
      "title": "Hardcore Station",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/988375-61593_20060904125738_large.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Harlan Ellison's 7 Against Chaos",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3416617-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harleen",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7233449-01.jpg",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harleen",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7083442-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Harley & Ivy Meet Betty & Veronica",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6080289-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Harley and Ivy Meet Betty and Veronica",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6582676-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley and Ivy: Love on the Lam",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/36287/815979-e42931f9_3f31_4829_8c32_8cace7349853.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Loves Joker by Paul Dini",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6721963-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/74794-9494-78184-1-harley-quinn.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "38 Issues"
    },
    {
      "title": "Harley Quinn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5357530-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "70 Issues"
    },
    {
      "title": "Harley Quinn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5140997-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3506954-harley%20quinn%2001.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "31 Issues"
    },
    {
      "title": "Harley Quinn & Poison Ivy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7059737-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Harley Quinn & the Birds of Prey",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7240310-01.jpg",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "0 Issues"
    },
    {
      "title": "Harley Quinn & the Gotham City Sirens Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6384999-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn & the Suicide Squad April Fools' Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5135435-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn & the Suicide Squad Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5342705-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn #1 Halloween Fest Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4876846-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn 25th Anniversary Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6050265-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn and Batman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5984195-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Harley Quinn and Her Gang of Harleys",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5677323-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn And Her Gang of Harleys",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5148847-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Harley Quinn and Power Girl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5075148-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn and the Birds of Prey",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7174842-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn and the Gotham Girls",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7240265-01.jpg",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "0 Issues"
    },
    {
      "title": "Harley Quinn Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4182545-harley%20annual.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn Annual: DC²",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4204870-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn by Amanda Conner and Jimmy Palmiotti Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6039772-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Harley Quinn by Karl Kesel and Terry Dodson: The Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6045039-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Harley Quinn Director's Cut",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3913963-00.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn Holiday Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4265182-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn Invades Comic-Con International: San Diego",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3960049-harley%2001.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn Rebirth Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6050266-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Harley Quinn Road Trip Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4792854-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn Valentine's Day Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4384996-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn: A Call To Arms",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5278623-04.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn: A Celebration of 25 Years",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6060056-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn: A Rogue's Gallery: The Deluxe Cover Art Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6103668-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn: Angry Bird",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6559449-06.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn: Be Careful What You Wish For",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6223156-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn: Black, White and Red All Over",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5652324-06.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn: Breaking Glass",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7059810-0216925502-80247.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn: Die Laughing",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5755887-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn: Futures End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4114530-harley%20quinn.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn: Harley Destroys the Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6863620-02.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn: Harley Loves Joker",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6406881-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Harley Quinn: Harley Vs. Apokolips",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6712658-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn: Hot In the City",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4170689-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn: Joker Loves Harley",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5909077-02.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn: Kiss Kiss Bang Stab",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4945071-03.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn: Night And Day",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515502-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn: Our Worlds at War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50633/947739-p000011.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn: Power Outage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4492989-02.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn: Preludes and Knock-Knock Jokes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515503-01.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn: Red Meat",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6050267-03.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn: Surprise, Surprise",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6223662-04.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn: The Joker's Last Laugh",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5432069-05.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn: The Trials of Harley Quinn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7100351-03.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn: Vengeance Unlimited",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4116412-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn: Vote Harley",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6418169-2806237275-65104.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn: Welcome To Metropolis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3676862-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn's Greatest Hits",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5324203-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn's Villain of the Year",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7174835-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn/Gossamer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6584072-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley Quinn/Power Girl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4628885-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Harley-Davidson/Iron Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11127/111273888/5457757-harley%20davidson%20presents%20iron%20man%20-%20road%20force%20rides%20again%20%231%20%282013%29%20-%20page%201.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Harley's Little Black Book",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5984680-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Harley's Little Black Book",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4935208-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Harvey",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/59847-2473-92842-1-harvey.jpg",
      "year": "1970",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Hasbro/Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2864085-comic.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Hasbro/Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2856936-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Hasbro/Captain America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2856929-hasbrocaptainamerica.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Hasbro/Dark Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2852168-hasbrodarkavengers.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Hasbro/Defenders",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2885527-2358599_orig.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Hasbro/Thanos & Warlock",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/3027741-thanoswarlockcomic.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Hasbro/X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2885486-2748239.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Haunted Mansion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5445043-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Haunted Mansion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5087342-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Haven: The Broken City",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/617042-hav1.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "9 Issues"
    },
    {
      "title": "Havok & Wolverine: Meltdown",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7012691-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Hawk & Dove",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1998609-1a.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "8 Issues"
    },
    {
      "title": "Hawk and Dove",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/28262-4191-31364-1-hawk-and-dove.jpg",
      "year": "1989",
      "publisher": "DC Comics",
      "Field7": "28 Issues"
    },
    {
      "title": "Hawk and Dove",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/2177026-hawk_dove.jpg",
      "year": "1993",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Hawk and Dove",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/1782313-hawk_and_dove__1988_2nd_series__1.jpeg",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Hawk and Dove",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/13657/439250-hawk_and_dove1.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Hawk and Dove Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/28936-4364-32136-1-hawk-and-dove-annual.jpg",
      "year": "1990",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Hawk and Dove: First Strikes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3485559-01.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Hawk and Dove: Ghosts and Demons",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2243045-h_26dgd_cv.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Hawkeye",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3426355-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Hawkeye",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5586824-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "16 Issues"
    },
    {
      "title": "Hawkeye",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/21031-3225-23453-1-hawkeye.jpg",
      "year": "1983",
      "publisher": "Marvel",
      "Field7": "4 Issues"
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