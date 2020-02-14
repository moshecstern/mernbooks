const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/comicbookdb"
  );


const comicvinevolumesSeed = 

[
    {
      "title": "Batman: Whatever Happened to the Caped Crusader?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1232936-whatever.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman: White Knight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6080271-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "8 Issues"
    },
    {
      "title": "Batman: White Knight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6631573-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman: White Knight Presents Von Freeze",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7152331-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman: White Knight: Batman Day 2018",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6594979-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman: Year 100",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/7070/163157-18962-112507-1-batman-year-100.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Batman: Year 100",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/1255203-bmy100.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman: Year One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64684/2356058-bmyo_dlx_dj.jpg",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman: Year One: The Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6039756-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman: Year Two",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2548396-01_cropped.jpg",
      "year": "1990",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman: Year Zero - Dark City",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4156868-05.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman: Zero Hour",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5884485-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman: Zero Year - Secret City",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3805307-04.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/ Hellboy/ Starman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/99318-6384-45604-2-batman--hellboy--s.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Batman/Aliens",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5674155-01.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Batman/Aliens Two",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5674120-01.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Batman/Captain America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/238063-19708-118198-1-batman--captain-ame.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Catwoman: Follow the Money",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1489221-bcftm1.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Catwoman: The Wedding Album: The Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6594971-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Catwoman: Trail Of The Gun",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/599221-42955_20060529152640_large.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Batman/Daredevil: King of New York",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/158537-18933-111988-1-batman-daredevil-ki.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Deadman: Death and Glory",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/908543-deathglory.jpg",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Deathblow: After the Fire Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2905791-__kgrhqv__h8febbmjvsdbrlnsulw_w__60_57.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Demon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74848/1456982-batman_demon.jpg",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Doc Savage Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/1023713-bmdsav_cv1_copy.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Elmer Fudd Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5923473-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Flash: The Button Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6140435-4981867387-B075X.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Green Arrow: The Poison Tomorrow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/974112-fann1h.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Grendel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2658021-01.jpg",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Batman/Grendel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2658024-01.jpg",
      "year": "1993",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Batman/Houdini: The Devil's Workshop",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/237368-19703-118188-1-batman--houdini-th.jpg",
      "year": "1993",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Huntress: Cry for Blood",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70539/1289495-batman_huntress_cry_for_blood.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Huntress: Cry for Blood",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/41631-6599-47209-1-batman--huntress-c.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Batman/Joker: Switch",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/349841-21145-126986-1-batman-joker-switch.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Judge Dredd \"Die Laughing\"",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9245/465676-batman___judge_dredd___die_laughing_1.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Batman/Judge Dredd Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2716717-_t2ec16dhjiqe9quhuf_wbqrz_n8s_g__60_57.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Judge Dredd Files",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2077698-2426_400x600.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Judge Dredd: Judgment on Gotham",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/229789-19621-117703-1-batman-judge-dredd.JPG",
      "year": "1991",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Judge Dredd: The Ultimate Riddle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/13536/274407-20298-121161-1-batman-judge-dredd.PNG",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Judge Dredd: Vendetta in Gotham",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/229794-19623-117705-1-batman-judge-dredd.JPG",
      "year": "1993",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Lobo",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/249730-19929-119260-1-batman-lobo.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Lobo: Deadly Serious",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/178201-19064-113833-1-batman--lobo-deadl.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Batman/Nightwing: Bloodborne",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/974352-batman_nightwing__bloodborne__1__2002_1____page_1.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Phantom Stranger",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/19859/845741-52597_20060806163708_large.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Planetary: Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5700128-01.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Poison Ivy: Cast Shadows",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/469098-1.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Punisher: Lake of Fire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/238084-19711-118201-1-batman--punisher-l.jpg",
      "year": "1994",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Scarecrow 3-D",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74848/1456986-batman___scarecrow_3_d_cover.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Shadow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5824247-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Batman/Shadow: The Murder Geniuses",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6152984-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/49501/909627-p00001.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Superman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7052758-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Batman/Superman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3129067-batmansupemran%2001.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "33 Issues"
    },
    {
      "title": "Batman/Superman Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3675445-batsup%2001.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Batman/Superman: Cross World",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3790750-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Superman: Futures End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4101658-batman%20superman.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Superman: Game Over",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4212071-02.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Superman: Saga of The Super Sons",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1784068-sbsagaofthess.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Superman: Second Chance",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4545148-03.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Superman: Siege",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4955614-04.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Superman: Truth Hurts",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5368803-05.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Superman: Universe's Finest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5786749-06.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Superman/Wonder Woman: Trinity: The Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4995850-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Teenage Mutant Ninja Turtles",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4945058-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Batman/Teenage Mutant Ninja Turtles",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5383742-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Teenage Mutant Ninja Turtles Director's Cut",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5448251-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Teenage Mutant Ninja Turtles II",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6548892-02.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Teenage Mutant Ninja Turtles II",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6178624-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Batman/Teenage Mutant Ninja Turtles III",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6913007-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Batman/Teenage Mutant Ninja Turtles: The Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6507204-1440478128-Cover.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/The Spirit",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/365361-21288-128310-1-batman--the-spirit.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Two-Face: Face the Face Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5819596-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batman/Wildcat",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/74377-9367-75525-1-batman--wildcat.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Batman/Wildcat",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5863191-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Battle Classics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51078/1018363-battl1.jpeg",
      "year": "1978",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Battle Scars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2160080-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Battle Scars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2414467-www.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Battlestar Galactica",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4085418-bg1nm92m084.jpg",
      "year": "1979",
      "publisher": "Marvel",
      "Field7": "23 Issues"
    },
    {
      "title": "Battlezones: Dream Team",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/99405-18277-107018-1-battlezones-dream-t.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Batwing",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/2002444-1__2_.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "35 Issues"
    },
    {
      "title": "Batwing: Enemy of the State",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3588350-03.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batwing: Futures End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4069911-batwing.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batwing: In the Shadow of the Ancients",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498156-02.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batwing: Into the Dark",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4436314-05.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batwing: The Lost Kingdom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3485565-01.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batwing: Welcome To the Family",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3993980-04.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batwoman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5749547-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "18 Issues"
    },
    {
      "title": "Batwoman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2033132-01a.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "42 Issues"
    },
    {
      "title": "Batwoman Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3789209-batwoman.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Batwoman by Greg Rucka and J.H. Williams III",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5897063-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batwoman: Elegy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6631191-7179423689-Cover.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batwoman: Fall of the House of Kane",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6760814-03.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batwoman: Futures End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4101657-batwoman.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batwoman: Haunted Tides",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7091387-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batwoman: Hydrology",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2400462-978_1_4012_3465_2.jpeg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batwoman: Rebirth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5700377-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batwoman: The Many Arms of Death",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6143967-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batwoman: The Unknowns",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4698670-06.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batwoman: This Blood Is Thick",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3724460-04.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batwoman: To Drown the World",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2806574-__kgrhqrhjbqfds6dv5smbq8jb1ytcq__60_57.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batwoman: Webs",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4240246-05.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batwoman: Wonderland",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6447338-02.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batwoman: World's Finest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3321296-03.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Batwoman/Supergirl: World's Finest Giant",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7167915-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "BBDO Campbell's Diversity: Ultimate Spider-Man/Ultimate X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15302/824878-001.jpg",
      "year": "",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Be X-tra Safe with the X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110802/4054004-x-men%20-%20blockbuster%28safety%20first%29%20-%20c1.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Beast Boy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/7015/313939-20624-123578-1-beast-boy.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Beauty and the Beast",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/22392-3333-24983-1-beauty-and-the-beast.jpg",
      "year": "1984",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Beavis & Butt-Head",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/19327/382280-21508-129783-1-beavis-and-butt-head.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "28 Issues"
    },
    {
      "title": "Before the Fantastic Four: Ben Grimm and Logan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3501367-01.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Before the Fantastic Four: Reed Richards",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/64439-11114-97436-1-before-the-fantastic.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Before the Fantastic Four: The Storms",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/63155-11019-96151-1-before-the-fantastic.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Before Watchmen Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730677-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Before Watchmen Sampler",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3726609-01.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Before Watchmen: Comedian",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2416808-__kgrhqzhjcwe__udjuw7bp4t5br_rg__60_57.jpeg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Before Watchmen: Comedian/Rorschach Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3161000-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Before Watchmen: Dollar Bill",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2839150-1_dbaba37f05.jpeg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Before Watchmen: Dr. Manhattan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2543483-drman_cv1_ds.jpeg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Before Watchmen: Minutemen",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/2397022-cover.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Before Watchmen: Minutemen/Silk Spectre Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3130872-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Before Watchmen: Moloch",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2687437-screen_shot_2012_11_05_at_3.45.00_pm.png",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Before Watchmen: Nite Owl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2429433-nite.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Before Watchmen: Nite Owl/Dr. Manhattan Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3161001-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Before Watchmen: Ozymandias",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3407284-01d.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Before Watchmen: Ozymandias/Crimson Corsair Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3130873-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Before Watchmen: Rorschach",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2531779-_t2ec16rhjhqe9nzezmfubqkogo__7___60_57.jpeg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Before Watchmen: Silk Spectre",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2400461-silks_cv1_ds1.jpeg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Ben Reilly Scarlet Spider - Marvel Legacy Primer Pages",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6119598-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ben Reilly: Scarlet Spider",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5819599-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "25 Issues"
    },
    {
      "title": "Ben Reilly: Scarlet Spider: Back In The Hood",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6113367-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ben Reilly: Scarlet Spider: Damnation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6623596-04.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ben Reilly: Scarlet Spider: Deal With The Devil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6771015-05.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ben Reilly: Scarlet Spider: Death's Sting",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6254347-02.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Ben Reilly: Scarlet Spider: The Slingers Return",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6429636-03.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Beowulf",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2029239-01.jpg",
      "year": "1975",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Best of Marvel '96",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3175039-best%20of%20marvel%20%27%20096%20pagecover.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Best of Star Trek",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/2246974-best1.jpg",
      "year": "1991",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Best of Star Trek: The Next Generation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/2248103-bes1.jpg",
      "year": "1994",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Best of the Brave and the Bold",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/27151-3981-30124-1-best-of-the-brave-an.jpg",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Best of the Fantastic Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1644296-bof4.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Best of The Spirit",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2062284-best_of_spirit.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Best of Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1597263-bo_wlv.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Best-Selling Authors Sampler",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/2171207-best_selling_authors_sampler_v2008__2008____page_1.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Beta Ray Bill: Godhunter",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/832660-1.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Beta Ray Bill: Godhunter",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6782379-7630178676-74538.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Beware the Batman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3423496-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Beware the Batman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4340126-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Beware the Batman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3396246-beware-the-batman-1-variant-print-cover-be6f5.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Beware the Creeper",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/624741-0001.jpg",
      "year": "1968",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Beware!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/45014-2629-52072-1-beware.jpg",
      "year": "1973",
      "publisher": "Marvel",
      "Field7": "8 Issues"
    },
    {
      "title": "Beyond the Fringe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2238658-fringe___beyond_the_fringe_01_00fc.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Beyond The Fringe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/73936/2017985-beyond_the_fringe__1___page_1.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Beyond!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/138592-18221-110896-1-beyond.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Beyond!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3527412-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Big Book of Fun Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/58701/1122146-bigbookfun1_1.jpg",
      "year": "1935",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Big Daddy Danger",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/658061-bigdaddy1.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "9 Issues"
    },
    {
      "title": "Big Easy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/5169016-big1.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Big Hero 6",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/539115-0004.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Big Hero 6: Brave New Heroes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3175041-big%20hero%206%20-%20brave%20new%20heroes%20001%20%282012%29%20pagecover.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Big Jim's P.A.C.K.",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/37015/2925346-big_jim1.jpg",
      "year": "1975",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Big Thunder Mountain Railroad",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4863036-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Big Thunder Mountain Railroad",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4466378-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Big Town",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27783/1072147-bigt_1.jpg",
      "year": "1951",
      "publisher": "DC Comics",
      "Field7": "50 Issues"
    },
    {
      "title": "Big Town",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/42714-6823-48841-1-big-town.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Biker Mice from Mars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61418-4987-94413-1-biker-mice-from-mars.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Bill & Ted's Bogus Journey",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1169128-bill_ted_bogus.jpg",
      "year": "1991",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Bill & Ted's Excellent Adventure",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/1833895-124795_20080413215625_large.jpg",
      "year": "1989",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Bill & Ted's Excellent Comic Book",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/658087-bill1.jpg",
      "year": "1991",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Billy Batson & the Magic of Shazam!: Family Affair",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7240261-01.jpg",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "0 Issues"
    },
    {
      "title": "Billy Batson and the Magic of SHAZAM!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/434360-billybatsonshazam1.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "21 Issues"
    },
    {
      "title": "Billy Batson and the Magic of Shazam!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2064646-the_magic_of_shazam.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Billy Batson and the Magic of Shazam!: Mr. Mind Over Matter",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6086853-5336203203-57939.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Billy The Marlin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/616068-billy1.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Binky",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/45762-2464-53105-1-binky.jpg",
      "year": "1970",
      "publisher": "DC Comics",
      "Field7": "11 Issues"
    },
    {
      "title": "Binky's Buddies",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67581/1287406-8389_binky_s_buddies__1___page_1.jpg",
      "year": "1969",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Bionicle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/19859/421494-387px-Comic1-TheComingoftheToa2.png",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "27 Issues"
    },
    {
      "title": "Bionicle Ignition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/19859/462585-387px_ignition1_ifauniverseends___.png",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "15 Issues"
    },
    {
      "title": "Bionicle:  Glatorian",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/78188/2075450-sands_of_bara_magna_cover.png",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "7 Issues"
    },
    {
      "title": "Birds Eye Puzzle Fun Book",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/3116710-bird1.jpg",
      "year": "1961",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Birds of Prey",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2033286-01a.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "35 Issues"
    },
    {
      "title": "Birds of Prey",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1225553-birds_of_prey_1.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "15 Issues"
    },
    {
      "title": "Birds of Prey",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/12370/257310-6498-46507-2-birds-of-prey.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "127 Issues"
    },
    {
      "title": "Birds of Prey",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/83050/1577037-bop.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Birds of Prey",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5716027-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Birds of Prey Giant",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7218239-01.jpg",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Birds of Prey Secret Files & Origins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/166525-18999-112950-1-birds-of-prey-secret.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Birds of Prey: A Clash of Daggers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3507894-03.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Birds of Prey: Batgirl/Catwoman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4121382-01.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Birds of Prey: Between Dark and Dawn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/83392/1730015-4820_400x600.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Birds of Prey: Black Canary",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7218056-0019630560-83512.jpg",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Birds of Prey: Black Canary/Batgirl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/165739-18996-112866-1-birds-of-prey-black.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Birds of Prey: Black Canary/Oracle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/165745-18997-112867-1-birds-of-prey-black.jpg",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Birds of Prey: Blood and Circuits",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/83050/1577601-blood_and_circuits.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Birds of Prey: Club Kids",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/83050/1578436-club_kids2.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Birds of Prey: Dead of Winter",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74247/1531222-8740_400x600.png",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Birds of Prey: Endrun",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2170047-endrun.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Birds of Prey: Futures End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4086392-birds%20of%20prey.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Birds of Prey: Harley Quinn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7218275-01.jpg",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Birds of Prey: Huntress",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7195743-01.jpg",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Birds of Prey: Manhunt",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/41712-6634-47372-1-birds-of-prey-manhu.jpg",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Birds of Prey: Metropolis or Dust",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/83050/1578474-bop_metropolis.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Birds of Prey: Murder & Mystery",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7225244-01.jpg",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Birds of Prey: Of Like Minds",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/1970634-birds_of_prey_of_like_minds.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Birds of Prey: Old Friends, New Enemies",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/449577-birds_of_prey_old_friends__new_enemies_1_00.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Birds of Prey: Perfect Pitch",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/442169-birds_of_prey_perfect_pitch_1_00.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Birds of Prey: Platinum Flats",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/902840-0.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Birds of Prey: Revolution",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/165691-18993-112855-1-birds-of-prey-revol.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Birds of Prey: Sensei and Student",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/449596-birds_of_prey_sensei___student_1_00.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Birds of Prey: Soul Crisis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4340127-05.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Birds of Prey: The Battle Within",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/83050/1577592-thebattlewithin.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Birds of Prey: The Cruelest Cut",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3962828-04.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Birds of Prey: The Death of Oracle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2055029-__kgrhqeokj8e6wnp_ebkbomwlky_j___60_3.jpeg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Birds of Prey: The Ravens",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/165725-18994-112863-1-birds-of-prey-the-r.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Birds of Prey: Trouble in Mind",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3485580-01.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Birds of Prey: Wolves",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/165734-18995-112865-1-birds-of-prey-wolve.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Birds of Prey: Your Kiss Might Kill",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498158-02.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Bishop",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/35936-5277-40119-1-bishop.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Bishop: The Last X-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/50356-6352-65813-1-bishop-the-last-x-m.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "16 Issues"
    },
    {
      "title": "Bishop: XSE",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/65076-11200-98073-1-bishop-xse.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Bizarre Adventures",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/18881-3082-21102-1-bizarre-adventures.jpg",
      "year": "1981",
      "publisher": "Marvel",
      "Field7": "10 Issues"
    },
    {
      "title": "Bizarre Adventures",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7092695-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Bizarro",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4599827-stk672292.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Bizarro",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5030415-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Bizarro Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/470340-1.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Bizarro World",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11785/296849-20433-122288-1-bizarro-world.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Adam: The Dark Age",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/166801-19003-112973-2-black-adam-the-dark.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Black Adam: The Dark Age",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2062296-black_adam.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Adam: Year of the Villain",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7116646-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Bolt",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5830860-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Black Bolt",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7197045-01.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Bolt - Marvel Legacy Primer Pages",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6148409-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Bolt: Hard Time",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6172982-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Bolt: Home Free",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6457994-02.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Bolt: Something Inhuman This Way Comes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3210208-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Canary",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/43924-7169-51241-1-black-canary.jpg",
      "year": "1993",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Black Canary",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/308/146657-18833-111245-1-black-canary.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Black Canary",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/31292-4544-34836-1-black-canary.jpg",
      "year": "1991",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Black Canary",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4628878-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Black Canary and Zatanna: Bloodspell",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3854985-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Canary Archives",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/583664-bc1.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Canary: Ignite",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7115843-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Canary: Kicking and Screaming",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5075136-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Canary: New Killer Star",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5544286-02.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Canary: Wedding Planner",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/190102-19108-114209-1-black-canary-weddin.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Cat",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6958034-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "9 Issues"
    },
    {
      "title": "Black Cat Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7144085-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Cat: Grand Theft Marvel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7197046-01.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Condor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/32050-4727-35723-1-black-condor.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Black Eyed Peas Present: Masters of the Sun: The Zombie Chronicles",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5960884-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Goliath",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/14368-2855-16070-1-black-goliath.jpg",
      "year": "1976",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Black Knight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2559710-01.jpg",
      "year": "1990",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Black Knight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4912384-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Black Knight: Exodus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/3308115-199612%20black%20knight%20-%20exodus%20v1%20%231%20-%20page%201.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Knight: The Fall of Dane Whitman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5254526-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Lightning",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5133331-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Black Lightning",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/15528-2884-17309-1-black-lightning.jpg",
      "year": "1977",
      "publisher": "DC Comics",
      "Field7": "11 Issues"
    },
    {
      "title": "Black Lightning",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/36264-5500-40495-1-black-lightning.jpg",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "13 Issues"
    },
    {
      "title": "Black Lightning Preview",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/32599/1336561-627034.jpg",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Lightning: Brick City Blues",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6807710-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Lightning: Cold Dead Hands",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6130781-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Black Lightning: Cold Dead Hands",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6650814-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Lightning: Year One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/675533-blacklighting.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Black Lightning: Year One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/32599/1263395-13245_400x600.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Lightning/Hong Kong PHOOEY Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6447339-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Magic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/45263-2608-52453-1-black-magic.jpg",
      "year": "1973",
      "publisher": "DC Comics",
      "Field7": "9 Issues"
    },
    {
      "title": "Black Mask: Year of the Villain",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7046321-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Orchid",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/27545-3982-30552-1-black-orchid.jpg",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Black Order",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6684791-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Black Panther",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5133332-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "25 Issues"
    },
    {
      "title": "Black Panther",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/704665-black_panther_01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Black Panther",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/15334-2896-17091-1-black-panther.jpg",
      "year": "1977",
      "publisher": "Marvel",
      "Field7": "15 Issues"
    },
    {
      "title": "Black Panther",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/41174-6496-46481-1-black-panther.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "62 Issues"
    },
    {
      "title": "Black Panther",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6437956-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "20 Issues"
    },
    {
      "title": "Black Panther",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/26896-4045-29850-1-black-panther.jpg",
      "year": "1988",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Black Panther",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/68458-11502-101456-1-black-panther.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "41 Issues"
    },
    {
      "title": "Black Panther - Marvel Legacy Primer Pages",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6084517-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther - Start Here!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6260359-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther & the Crew: We Are The Streets",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6103651-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther Adventures",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6212041-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther and the Agents of Wakanda",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7075980-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Black Panther and the Crew",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5797755-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Black Panther Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/318995-20713-124232-1-black-panther-annual.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6289312-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther by Christopher Priest: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4738219-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Black Panther by Jack Kirby",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6687403-6238631752-37534.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Black Panther by Reginald Hudlin: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6877166-8399989856-76104.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Black Panther Epic Collection: Panther's Rage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5478729-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther Epic Collection: Revenge of the Black Panther",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6807711-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther Postcard Book",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7236765-01.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther Saga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1300245-black_panther_saga_1.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther vs. Deadpool",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6657907-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Black Panther vs. Deadpool",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6850852-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther: A Nation Under Our Feet",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7012640-8069123146-78608.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther: A Nation Under Our Feet",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5408269-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Black Panther: Avengers of the New World",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7012641-3858088278-78609.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther: Avengers of the New World Part One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6135194-04.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther: Avengers of the New World Part Two",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6449138-02.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther: Back to Africa",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4319484-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther: Bad Mutha",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1049322-bp.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther: Civil War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4261037-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther: Civil War - War Crimes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1417645-89261_20070330105233_large.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther: Doomwar",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7214140-6101539726-82880.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther: Enemy of the State",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2028322-bp__eots.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther: Four the Hard Way",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4288109-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther: Killmonger: By Any Means",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6913166-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther: Little Green Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4296420-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther: Long Live the King",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6184478-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Black Panther: Long Live The King",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6437958-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther: Panther's Prey",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/982992-61593_20060904125738_large.jpg",
      "year": "1991",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Black Panther: Panther's Quest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6203576-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther: Power",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5245483-02.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther: Secret Invasion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1227717-bp.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther: Soul of A Machine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6152586-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "8 Issues"
    },
    {
      "title": "Black Panther: The Bride",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1804310-black_panther_bride.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther: The Client",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2028304-bp__tc.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther: The Deadliest of the Species",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4346332-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther: The Intergalactic Empire of Wakanda Part One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6771016-06.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther: The Intergalactic Empire of Wakanda Part Three",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7205222-08.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther: The Intergalactic Empire of Wakanda Part Two",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7016185-07.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther: The Man Without Fear",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1564199-black_panther_the_man_without_fear_513.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "11 Issues"
    },
    {
      "title": "Black Panther: The Man Without Fear: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6967792-8733193672-77942.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther: The Man Without Fear: Urban Jungle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4721735-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther: The Most Dangerous Man Alive",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/2959542-1000px-black_panther_the_most_dangerous_man_alive_vol_1_523.1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "7 Issues"
    },
    {
      "title": "Black Panther: The Most Dangerous Man Alive: The Kingpin of Wakanda",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5141403-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther: The Sound and the Fury",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6266877-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther: Who Is The Black Panther",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1766951-who_is_black_panther.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Panther: World of Wakanda",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5523024-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Black Panther: World of Wakanda",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5897066-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black September Preview Book",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/101389-18342-107500-1-black-september-prev.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Widow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6760819-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Black Widow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3556393-01a.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "20 Issues"
    },
    {
      "title": "Black Widow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/1188801-bw1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "8 Issues"
    },
    {
      "title": "Black Widow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5075137-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Black Widow & The Marvel Girls",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1048370-prv3921_cov.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Black Widow & the Marvel Girls",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6728718-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Widow Saga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1300250-black_widow_saga_1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Widow: Deadly Origin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1015401-prv3709_cov.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Black Widow: Deadly Origin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5738517-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Widow: Homecoming",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5716481-01.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Widow: Kiss or Kill",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3527411-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Widow: Last Days",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4814472-03.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Widow: No More Secrets",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5819600-02.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Widow: No Restraints Play",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7012690-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Widow: S.H.I.E.L.D.'s Most Wanted",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5500584-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Widow: The Coldest War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2648697-sydc4ha.jpg",
      "year": "1990",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Widow: The Finely Woven Thread",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3968689-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Widow: The Itsy-Bitsy Spider",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4319487-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Widow: The Name of the Rose",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1610923-bw__tnotr.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Widow: The Sting of the Widow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6451360-6677525463-68050.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Widow: The Things They Say About Her",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5738518-01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Widow: The Tightly Tangled Web",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4344298-02.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Widow: Web of Intrigue",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1182972-bw.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Widow: Welcome To The Game",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7205223-01.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Black Widow: Widowmaker",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7226941-01.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Blackest Night",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3368473-01.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Blackest Night",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4367469-01.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "9 Issues"
    },
    {
      "title": "Blackest Night 10th Anniversary Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6958046-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Blackest Night Saga (DC Essential Edition)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6789742-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Blackest Night Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/125887/2667215-761dd0a1_3353_4322_8e4a_87851ed363ff.jpg",
      "year": "",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Blackest Night: Batman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/914564-bnb1b.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Blackest Night: Black Lantern Corps",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1765964-black_lantern_corps1.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Blackest Night: Director's Cut",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51267/1202220-blackest_night_directors_cut_000.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Blackest Night: Green Lantern",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498054-01.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Blackest Night: Green Lantern Corps",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6422997-3513531882-67952.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Blackest Night: JSA",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/1075901-blackest_night_jsa_1_000.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Blackest Night: Rise of The Black Lanterns",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1318949-riseofthebl.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Blackest Night: Superman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/1200269-002.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Blackest Night: Tales Of The Corps",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1765966-tales_of_the_corps.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Blackest Night: Tales of the Corps",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/1706215-blackest_night_tales_of_the_corps__2009__1a.jpeg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Blackest Night: The Flash",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/1219507-001.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Blackest Night: Titans",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/29350/932787-blackest_night___titans__1_001.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Blackest Night: Wonder Woman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/1226697-001.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Blackhawk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/2622-1819-2848-1-blackhawk.jpg",
      "year": "1944",
      "publisher": "DC Comics",
      "Field7": "265 Issues"
    },
    {
      "title": "Blackhawk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/4519317-blackhawk%20%231%20fc%20final.jpg",
      "year": "1987",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Blackhawk Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1434544-blackhawkv3annual_1_01_fc.jpg",
      "year": "1989",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Blackhawk Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/101735/1883832-blackhawk_special_1.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Blackhawk: Blood & Iron",
      "img": "https://comicvine1.cbsistatic.com/bundles/phoenixsite/images/core/loose/img_broken.png",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "0 Issues"
    },
    {
      "title": "Blackhawks",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2083713-01.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "8 Issues"
    },
    {
      "title": "Blackhawks: The Great Leap Forward",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3485599-01.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Blackmask",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/101735/1861495-blackmask_1_cover.jpg",
      "year": "1993",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Blackstone The Magician",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/158860-18938-112000-1-blackstone-the-magic.jpg",
      "year": "1947",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Blackwulf",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/2022247-blackwulf1a.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "10 Issues"
    },
    {
      "title": "Blade",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1268142-blade___the_final_glory_of_deacon_frost___page_1.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Blade",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64188/1200839-blade_1.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "7 Issues"
    },
    {
      "title": "Blade",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2945023-blade_01___page_01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Blade",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1268129-blade_v1__1___page_1.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Blade II",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/824885-30727_4_001.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Blade Runner",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/20173-3133-22509-1-blade-runner.jpg",
      "year": "1982",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Blade: Blood and Chaos",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6640601-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Blade: Crescent City Blues",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52080/1166562-blade_v2_1.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Blade: Nightstalking",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/823438-18343_4_001.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Blade: Sins of the Father",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4711882-02.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Blade: Sins of the Father",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6640323-9316796262-72305.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Blade: The Vampire Hunter",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/13340/272938-20271-121019-1-blade-the-vampire-h.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "10 Issues"
    },
    {
      "title": "Blade: Undead Again",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4177283-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Blade: Undead By Daylight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4887857-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Blasters Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/617032-blast1.jpg",
      "year": "1989",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Blaze",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61429-5281-94424-1-blaze.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Blaze of Glory",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1169139-blaze.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Blaze of Glory",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/40966-6456-46238-1-blaze-of-glory.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Blaze: Legacy of Blood",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/3609108-%24%28kgrhqqokocfe3q%298%29qibrsp666vi%21~~60_57.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Blink",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/43280-6985-49461-1-blink.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Blip",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61441-3218-94436-1-blip.jpg",
      "year": "1983",
      "publisher": "Marvel",
      "Field7": "7 Issues"
    },
    {
      "title": "Blitzkrieg",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/14266-2835-15962-1-blitzkrieg.jpg",
      "year": "1976",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Blockbusters of the Marvel Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2205710-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Blood of the Demon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3754895-01.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "17 Issues"
    },
    {
      "title": "Blood Pack",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/28355/632582-blood1.jpg",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Bloodbath Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/34202-4954-38194-1-bloodbath-special.jpg",
      "year": "1993",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Bloodhound",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3229/103872-18411-107913-1-bloodhound.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "10 Issues"
    },
    {
      "title": "Bloodlines",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5135388-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Bloodstone",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2755164-01.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Bloodstone & The Legion of Monsters",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6069420-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Blue Beetle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/24090-3595-26835-1-blue-beetle.jpg",
      "year": "1986",
      "publisher": "DC Comics",
      "Field7": "24 Issues"
    },
    {
      "title": "Blue Beetle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3464/145367-18443-111271-1-blue-beetle.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "36 Issues"
    },
    {
      "title": "Blue Beetle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5457508-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "18 Issues"
    },
    {
      "title": "Blue Beetle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2033293-01.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "17 Issues"
    },
    {
      "title": "Blue Beetle: Black And Blue",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1843151-blue_beetle_black_and_blue.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Blue Beetle: Blue Diamond",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498159-02.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Blue Beetle: Boundaries",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1843148-blue_beetle_boundaries.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Blue Beetle: End Game",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1843132-blue_beetle_end_game.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Blue Beetle: Hard Choices",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6203577-02.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Blue Beetle: Metamorphosis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3485598-01.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Blue Beetle: Reach For The Stars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1843119-reach_for_the_stars.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Blue Beetle: Rebirth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5398330-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Blue Beetle: Road To Nowhere",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6506208-03.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Blue Beetle: Road Trip",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1726657-bluebbetleroadtrip.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Blue Beetle: Shellshocked",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1843107-blue_beetle_shellshocked.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Blue Beetle: The More Things Change",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5842015-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Blue Devil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/21828-3307-24356-1-blue-devil.jpg",
      "year": "1984",
      "publisher": "DC Comics",
      "Field7": "32 Issues"
    },
    {
      "title": "Blue Devil Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/33231/991113-blue_devil.jpg",
      "year": "1985",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Bob, the Galactic Bum",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4064655-01.jpg",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Body Doubles",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/65315-6317-98312-1-body-doubles.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Body Doubles (Villains)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/677124-15125_20051221234830_large.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Bomba the Jungle Boy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/8676-2337-9583-1-bomba-the-jungle-boy.jpg",
      "year": "1967",
      "publisher": "DC Comics",
      "Field7": "7 Issues"
    },
    {
      "title": "Bombshells: United",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6022514-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "38 Issues"
    },
    {
      "title": "Bombshells: United",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6045029-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "19 Issues"
    },
    {
      "title": "Bombshells: United: American Soil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6486517-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Bombshells: United: Taps",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6819153-03.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Bombshells: United: War Bonds",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6650815-02.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Book of the Dead",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/34300-4992-38296-1-book-of-the-dead.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Books of Doom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2764605-scan0001.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Books of Magic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6658282-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "16 Issues"
    },
    {
      "title": "Booster Gold",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/23730-3596-26451-1-booster-gold.jpg",
      "year": "1986",
      "publisher": "DC Comics",
      "Field7": "25 Issues"
    },
    {
      "title": "Booster Gold",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/172374-19025-113547-1-booster-gold.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "49 Issues"
    },
    {
      "title": "Booster Gold: 52 Pick-Up",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4048599-01.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Booster Gold: Blue and Gold",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4121370-01.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Booster Gold: Day of Death",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4048601-04.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Booster Gold: Futures End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4114527-booster%20gold.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Booster Gold: Past Imperfect",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4121369-01.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Booster Gold: Reality Lost",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4121371-01.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Booster Gold: The Big Fall",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7166797-0132323456-82087.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Booster Gold: The Tomorrow Memory",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4048603-05.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Booster Gold/The Flintstones Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5774272-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Boy Commandos",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/12084-2609-13532-1-boy-commandos.jpg",
      "year": "1973",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Boy Commandos",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/45206-921-52350-1-boy-commandos.jpg",
      "year": "1942",
      "publisher": "DC Comics",
      "Field7": "36 Issues"
    },
    {
      "title": "Boy Commandos by Joe Simon and Jack Kirby",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2080952-boy_commandos_by_joe_simon_and_jack_kirby.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Boy Commandos Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/6403244-boy1.jpg",
      "year": "1942",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Boys' Ranch",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3059997-boy%27s%20ranch%20hardcover%20v1950%20%281992%29%20pagecover.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Brats Bizarre",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61450-5282-94445-1-brats-bizarre.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Brave And The Bold Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/675452-bba1.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Brave New World",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48250/925524-384px_brave_new_world_1.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Breach",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/525435-0000.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "11 Issues"
    },
    {
      "title": "Break The Chain!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15238/1272578-break_the_chain__1.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Breaking Into Comics The Marvel Way!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2770656-bictmw_01_pg_01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Breathtaker",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/28935-4355-32135-1-breathtaker.jpg",
      "year": "1990",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Brian Michael Bendis: Crime Noir Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5903283-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Brian Michael Bendis: Ten Years At Marvel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1072182-oct090645.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Brightest Day",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56616/1217047-bday_cv1_copy.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "25 Issues"
    },
    {
      "title": "Brightest Day",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3752411-01.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Brightest Day Aftermath: The Search for Swamp Thing",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1870856-prev_img.jpeg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Brightest Day Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4048555-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Brightest Day: The Atom Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62263/1292140-brightestdaytheatom.cbr___page_1.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Bring Back the Bad Guys",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849923-__addme___bring_back_the_bad_guys_v9999__1998____page_1.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Bring on the Bad Guys Revised Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849935-__addme___bring_on_the_bad_guys__origins_of_the_marvel_comics_villains_v9999__1___bring_on_the_bad_guys__1976_1____page_1.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Brother Billy, the Pain From Plains",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/5878503-bro1.jpg",
      "year": "1979",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Brother Power the Geek",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/2135/110599-18507-108632-1-brother-power-the-ge.jpg",
      "year": "1968",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Brothers in Arms",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4312/273634-20290-121075-1-brothers-in-arms.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Bruce Wayne: Fugitive",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/59264/1174378-bruce_wayne_fugitive_1.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Bruce Wayne: The Road Home: Batgirl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1452335-scanned_image_6_4.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Bruce Wayne: The Road Home: Batman and Robin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1452224-scanned_image_6_1.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Bruce Wayne: The Road Home: Catwoman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1465732-scanned_image_6_1.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Bruce Wayne: The Road Home: Commissioner Gordon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1465258-bwtrhcg_cv1_copy.jpeg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Bruce Wayne: The Road Home: Oracle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/28071/1477043-bwrhoracle1.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Bruce Wayne: The Road Home: Outsiders",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1452286-scanned_image_6_3.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Bruce Wayne: The Road Home: Ra's al Ghul",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1477752-scanned_image_6.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Bruce Wayne: The Road Home: Red Robin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7080042-01.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Brute Force",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61453-4387-94448-1-brute-force.jpg",
      "year": "1990",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Brute Force",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6559431-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Bubble Funnies",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2499725-bubble_funnies__1___page_1.jpg",
      "year": "1981",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Buck Rogers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/13923/1028308-buckrogersgiantmovie1.jpg",
      "year": "1979",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Buckaroo Banzai",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/22429-3334-25020-1-buckaroo-banzai.jpg",
      "year": "1984",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Bucky Barnes: The Winter Soldier",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4877190-02.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Bucky Barnes: The Winter Soldier",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/4128693-bbws2014001_dc11_lr-page-001.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "11 Issues"
    },
    {
      "title": "Bucky Barnes: The Winter Soldier: The Man On The Wall",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4603126-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Bug",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/332749-20971-125586-1-bug.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Bug! The Adventures of Forager",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5843157-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Bug! The Adventures of Forager",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6395714-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Bugs Bunny",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/29499-4356-32789-1-bugs-bunny.jpg",
      "year": "1990",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Bugs Bunny : What's Up Doc?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/1200287-bbwud.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Bugs Bunny and Friends: A Comic Celebration",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/333691-20984-125634-1-bugs-bunny-and-frien.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Bugs Bunny Monthly",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/330500-20918-125343-1-bugs-bunny-monthly.jpg",
      "year": "1993",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Build A Fantastic You",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/996141-164705_20090314164928_large.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Bullet Points",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2779390-bullet_points__001_000.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Bullet Points",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5479059-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Bullseye",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5677314-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Bullseye: Greatest Hits",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1310850-bse__gh.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Bullseye: The Colombian Connection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6029048-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Bullwinkle and Rocky Marvel Moosterworks",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1169148-moose.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Burn Notice: A New Day",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/103617/3726107-12908687.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Butcher",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/101735/1887205-butcher__1.jpg",
      "year": "1990",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Buzzy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/1390776-buzzy_v1944__1__1944_12____cover.jpg",
      "year": "1944",
      "publisher": "DC Comics",
      "Field7": "77 Issues"
    },
    {
      "title": "C-3PO",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5147174-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/674262-cable_00pg001a.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "25 Issues"
    },
    {
      "title": "Cable",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2697084-cable.png",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "108 Issues"
    },
    {
      "title": "Cable",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5873075-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "15 Issues"
    },
    {
      "title": "Cable",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2778468-cable__1___page_1.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Cable - Marvel Legacy Primer Pages",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6073799-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable / Machine Man '98",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3848/229648-18365-117675-1-cable--machine-man.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable & Deadpool",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2720905-01.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "50 Issues"
    },
    {
      "title": "Cable & Deadpool MGC",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/2349932-cab1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable & Deadpool: Bosom Buddies",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1153827-dpcb.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable & Deadpool: If Looks Could Kill",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1053840-cable1.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable & Deadpool: The Burnt Offering",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1053844-bo.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable & X-Force Classic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6687516-6078310564-37083.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable & X-Force Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6990891-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable & X-Force: Onslaught Rising",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6289316-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable & X-Force: Onslaught!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6807714-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable 1999",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/258413-20140-120198-1-cable-1999.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable and Deadpool: Living Legends",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1153985-dpcb.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable and Deadpool: Paved With Good Intentions",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1172766-d_c.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable and Deadpool: Separation Anxiety",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1172783-d_c.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable and Deadpool: The Human Race",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1153980-dpcb.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable and the New Mutants",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/406594-21747-131180-1-cable-and-the-new-mu.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable and X-Force",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2747085-01a.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "19 Issues"
    },
    {
      "title": "Cable and X-Force: Dead or Alive",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3411118-02.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable and X-Force: This Won't End Well",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3756094-03.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable and X-Force: Vendetta",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3841175-04.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable and X-Force: Wanted",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3017576-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable Classic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/406542-21746-131179-1-cable-classic.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Cable Deadpool Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6559434-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable Vol.1, No. 73",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/2351605-cable.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable: Conquest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6172983-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable: Homecoming",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4361977-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable: Messiah War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1175834-cbl.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable: Past Fears",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6614295-03.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable: Revolution",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6395716-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable: Second Genesis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/258421-20141-120199-1-cable-second-genesi.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable: Soldier X",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6657910-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable: Stranded",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4336624-03.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable: The End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1864485-cable_the_end.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable: The Hellfire Hunt",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6143971-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable: The Last Hope",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6395853-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Cable: The Nemesis Contract",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6223135-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable: The Newer Mutants",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6374032-02.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable: The Shining Path",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/3310585-811uu14cpzs._sl1500_.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cable: Waiting for the End of the World",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1175849-cbl.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2029199-01.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "20 Issues"
    },
    {
      "title": "Cage!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5467790-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Cage!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5808926-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Call of Duty: The Brotherhood",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2755250-01.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Call of Duty: The Wagon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/55698-9457-77747-1-call-of-duty-the-t.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Camelot 3000",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/250908-19975-119417-1-camelot-300.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Camelot 3000",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/20288-3111-22636-1-camelot-3000.jpg",
      "year": "1982",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Camelot 3000: The Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/148518/3035690-camelotdeluxe.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Camp Candy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4064736-01.jpg",
      "year": "1990",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Campus Humor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/4800031-cam1.jpg",
      "year": "1966",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Campus Jokes & Cartoons",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/6595614-cam0102.jpg",
      "year": "1967",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Cancelled Comic Cavalcade",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/16712-2942-18622-1-cancelled-comic-cava.jpg",
      "year": "1978",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Cape",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/85575/1623342-thecape.png",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Caper",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/65306-11146-98303-1-caper.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Capt. Storm",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/6525-2176-7131-1-captain-storm.jpg",
      "year": "1964",
      "publisher": "DC Comics",
      "Field7": "18 Issues"
    },
    {
      "title": "Captain Action",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/32578/795877-cap_action_01_01.jpg",
      "year": "1968",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Captain America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5996704-25.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "11 Issues"
    },
    {
      "title": "Captain America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/57023/1903826-prv9182_cov.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "19 Issues"
    },
    {
      "title": "Captain America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/39593-6206-44561-1-captain-america.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "50 Issues"
    },
    {
      "title": "Captain America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/2709867-capa2012001_dc11_lr.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "25 Issues"
    },
    {
      "title": "Captain America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2466951-captainamerica100.jpg",
      "year": "1968",
      "publisher": "Marvel",
      "Field7": "355 Issues"
    },
    {
      "title": "Captain America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/1706285-captain_america__1996_2nd_series__01b.jpeg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "13 Issues"
    },
    {
      "title": "Captain America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6497365-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "18 Issues"
    },
    {
      "title": "Captain America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2032486-01.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "72 Issues"
    },
    {
      "title": "Captain America - Marvel Legacy Primer Pages",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6095380-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America [Taco Bell]",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3070487-captain%20america%20taco%20bell%20exclusive%20collector%20edition%20v2009%20001%20%282009%29%20pagecover.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America / Citizen V '98",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2031581-1998a.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America & Black Widow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4511115-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America & the Falcon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61293-10973-94288-1-captain-america-amp.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "14 Issues"
    },
    {
      "title": "Captain America & The Incredible Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3070507-captain%20america%20%26%20the%20incredible%20hulk%20v1981%20001%20%281981%29%20pagecover.jpg",
      "year": "1981",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America & the Invaders: Bahamas Triangle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6990892-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America & the Korvac Saga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2205741-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Captain America & the Mighty Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4212096-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "9 Issues"
    },
    {
      "title": "Captain America & the Mighty Avengers: Open For Business",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4635240-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America & Thor: Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1946241-captain_america___thor_avengers_01_00fc.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America #25 Director's Cut",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2880048-director_s_cut_captain_america_v2005__25.01___the_death_of_the_dream__director_s_cut__2007_8____page_1.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America #34 Director's Cut",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2850096-__addme___captain_america_v9999__34___the_burden_of_dreams__part_4__2008_3____page_1.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America 1999",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2031583-1999.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America 2000",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2031584-2000.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America 2001",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2031585-2001.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America 70th Anniversary Magazine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/1647139-965483.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America 75th Anniversary Magazine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5151906-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America and Batroc",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1742505-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America and Black Widow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2586269-636.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Captain America and Bucky",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/1933637-capbuck1.jpeg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "9 Issues"
    },
    {
      "title": "Captain America and Bucky: Old Wounds",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4093307-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America and Bucky: The Life Story of Bucky Barnes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4093308-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America and Crossbones",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/1723362-capcrossbones.jpeg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America and Falcon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/1706557-captain_america_and_falcon_vol_1_1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America and Hawkeye",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2490690-2313173_www_super.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Captain America and Hawkeye",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4511116-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America and Iron Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65567/2427646-prv12772_cov.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Captain America and Iron Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4511117-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America and Namor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2544429-prev_img.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America and The Avengers: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5960887-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America and The Campbell Kids",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52503/1417669-42_page_01.jpg",
      "year": "1980",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America and The Falcon by Priest: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5105421-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America and the Falcon: Brothers and Keepers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4886841-02.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America and the Falcon: Madbomb",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5045427-01.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America and the Falcon: Nomad",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5045428-01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America and the Falcon: Secret Empire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5069997-01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America and the Falcon: The Swine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/927250-1capswine.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America and the Falcon: Two Americas",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4775044-01.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America and the First Thirteen",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/1711930-firstthirteen.jpeg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America and the Korvac Saga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6512001-5974690734-69152.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America and the Mighty Avengers: Last Days",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4872378-02.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America and the Secret Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1771144-captain_america_and_the_secret_avengers_001.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6614296-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/10189-2510-11218-1-captain-america-annu.jpg",
      "year": "1971",
      "publisher": "Marvel",
      "Field7": "13 Issues"
    },
    {
      "title": "Captain America Ashcan Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2918818-__addme___captain_america_ashcan_v9999___page_1.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America by Dan Jurgens",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4872486-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Captain America by Ed Brubaker",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2181162-ca_by_eb1.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Captain America by Jack Kirby Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1904547-ca_by_jk_omn.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America by Jack Kirby: Bicentennial Battles",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5069919-01.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America by Mark Waid, Ron Garney & Andy Kubert Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6178643-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America by Mark Waid: Promised Land",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6582659-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America by Waid & Samnee: Home of the Brave",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6458000-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America Collector's Preview",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23221/1644203-captain_america_collectors__2010____page_1.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America ComiCave Custom Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6100647-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America Comics 70th Anniversary Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/28247/1739071-cap_70_001.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Captain America Corps",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/1861939-cacorps1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Captain America Corps",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/101073/2098364-d8617d87f707142fdc89d2d94bb409db.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America Epic Collection: Bucky Reborn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5935967-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America Epic Collection: Captain America Lives Again",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7012660-4974185081-78609.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America Epic Collection: Dawn's Early Light",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3650714-09.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America Epic Collection: Hero Or Hoax?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6506211-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America Epic Collection: Justice Is Served",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5786751-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America Epic Collection: Man Without A Country",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5151817-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America Epic Collection: Society of Serpents",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4045746-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America Epic Collection: Streets of Poison",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4635238-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America Epic Collection: The Bloodstone Hunt",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6395717-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America Epic Collection: The Coming of... The Falcon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5445039-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America Epic Collection: The Superia Stratagem",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6850855-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America Evolution of an Icon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849821-__addme___marvel_legends_evolution_of_an_icon___captain_america_v9999___page_1.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America Exclusive ComiCon Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/523356-2.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America Featuring Road Force",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4885634-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America Goes to War Against Drugs",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/667437-capt1.jpg",
      "year": "1990",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Captain America Lives Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1718838-ca_lv_omn.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America Meets the Asthma Monster!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/667438-capta1.jpg",
      "year": "1988",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America MGC",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1158273-p00001___captain_america_mgc__1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1074326-cao.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1862962-ca_omn.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Captain America Poster Book",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1173475-p00001___captain_america_poster_book__1.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America Reborn: Who Will Wield The Shield?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1070327-prv4087_cov.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/41255-3335-46562-1-captain-america-spec.jpg",
      "year": "1984",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Captain America Spotlight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3070488-captain%20america%20spotlight%20%282011%29%20pagecover.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America The 1940s Newspaper Strip",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1286044-captain_america_the_1940_s_newspaper_strip.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Captain America Theater of War: A Brother in Arms",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5756/786249-cabia_001_01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America Theater of War: America First",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2172629-america_first.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America Theater of War: America the Beautiful",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2172630-america_the_beautiful.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America Theater of War: Ghosts of My Country",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5756/986340-catow_gomc_c01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America Theater of War: Operation Zero-Point",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2172631-operation_zero_point.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America Theater of War: Prisoners of Duty",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5756/1051922-catow_pod_c01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America Theater of War: To Soldier On",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5756/915262-catow_tso_c01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America vs. the Red Skull",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5271873-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: 65th Anniversary Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5478645-01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Allies and Enemies",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1856421-ca__a_e.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: America First",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6609732-0240713864-71312.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: America's Avenger",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/1891436-captain_america_america_s_avenger_vol_1_1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: American Nightmare",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1889514-ca__an.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Cap Lives",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/121886/2991901-04.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Captain of Nothing",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7084652-02.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Castaway In Dimension Z",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3480310-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Captain America: Civil War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2934566-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Dead Men Running",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/55702-9458-77751-1-captain-america-dea.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Captain America: Death of the Red Skull",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2285657-ca__dotrs.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Disassembled",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4391378-01.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Drug War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1364780-captain_america_drug_war_v1_001.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Evolutions of a Living Legend",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6958048-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Fighting Chance: Acceptance",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1058967-cap.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Fighting Chance: Denial",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1058954-cap.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: First Vengeance",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2804138-cafv_01_001_copy.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Captain America: First Vengeance",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6491668-4663861269-68877.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Forever Allies",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1856431-ca__frv_alls.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Forever Allies",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1327929-captain_america_forever_allies_1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Captain America: Hail Hydra",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/1603930-caphailhydra1.jpeg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Captain America: Hail Hydra",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3295859-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Homecoming",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3718043-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Homeland",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2990928-05.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Ice",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2991738-03.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Land of the Free",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2815873-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Living Legend",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3345298-01a.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Captain America: Living Legend",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3756095-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Loose Nuke",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3752374-03.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Man and Wolf",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5069920-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Man Out of Time",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3580567-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Man Out of Time",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1488974-p00001.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Captain America: Marvel Knights",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5087313-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Captain America: No Escape",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1560484-ca__ne.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Official Index to the Marvel Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/13/135797/2974262-capindex.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Operation Rebirth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3264322-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Patriot",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1679524-ca__ptr.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Patriot",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1399256-captain_america_patriot_1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Captain America: Peggy Carter, Agent of S.H.I.E.L.D.",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4252938-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Playball",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11113/111133305/3941750-captain%20america%20-%20playball%20%231%20-%20page%201.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Prisoner of War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6350552-3693787367-65746.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Rebirth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11113/111133305/4070762-page00.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Reborn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3754906-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Captain America: Reborn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1164879-yhst_23599503122488_2099_734099586.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Reborn MGC",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74848/2020258-captain_america___reborn_01__mgc_.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Reborn Prologue",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3038451-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Red Glare",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2030873-ca__rg.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Red Menace",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/890478-cap3.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Captain America: Red Menace Ultimate Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2934622-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Red, White & Blue",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5825016-01.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Return of the Winter Soldier Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4551674-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Road to Reborn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1148577-ca.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Road To War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5160003-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Sam Wilson",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4851203-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "24 Issues"
    },
    {
      "title": "Captain America: Sam Wilson - Civil War II",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5640107-03.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Sam Wilson: #TAKEBACKTHESHIELD",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5808927-04.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Sam Wilson: End of the Line",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5996316-05.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Sam Wilson: Not My Captain America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5160004-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Sam Wilson: Standoff",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5478732-02.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Sam Wilson: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7220166-01.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Scourge of the Underworld",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6586837-5611622911-70941.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Secret Empire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6060360-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Sentinel of Liberty",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6619562-1377050701-71318.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Sentinel of Liberty",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/19249/366638-19381-116163-3-captain-america-sen.JPG",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Captain America: Sentinel of Liberty Rough Cut",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6173249-01.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Serpents Unite!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5445040-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Steve Rogers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5225560-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "19 Issues"
    },
    {
      "title": "Captain America: Steve Rogers - Hail Hydra",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5574691-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Steve Rogers: Empire Building",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5984658-03.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Steve Rogers: The Trial of Maria Hill",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5797756-02.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Streets Of Poison",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/667446-captaina1.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: The 75th Anniversary Vibranium Collection Slipcase",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5030417-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: The Adventures of Captain America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6302377-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: The Bloodstone Hunt",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1513916-cap__bsh.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: The Captain",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1808112-ca__tcp.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: The Chosen",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1153033-cap.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: The Classic Years",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/2217708-100_3902_1.jpg",
      "year": "1990",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Captain America: The End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7234741-01.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: The Extremists",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2990930-02.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: The Fighting Avenger",
      "img": "https://comicvine1.cbsistatic.com/bundles/phoenixsite/images/core/loose/img_broken.png",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: The Fighting Avenger",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/108980/2159983-captain_america__the_fighting_avenger.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: The First Avenger American Armed Forces Exclusive",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/82159/2567654-scan0002.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Captain America: The Iron Nail",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4029250-04.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: The Legacy of Captain America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6531483-1216430026-69775.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: The Legend",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23221/1408398-captain_america_the_legend___page_1.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: The Man With No Face",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2934632-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: The Medusa Effect",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/198301-19187-114885-1-captain-america-the.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: The Movie",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/667447-captainam1.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: The New Deal",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1529466-ca__tnd.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: The Tomorrow Soldier",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4293050-05.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: The Trial of Captain America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70563/1813213-trial_of_cap_1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: The Trial of Captain America Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4258069-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: The Winter Soldier",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3605139-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Theater Of War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1131709-ca_tow.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Theater of War: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5160005-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: To Serve and Protect",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1877151-ca__tsap.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Transformation and Triumph",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/103530/3100029-1.png",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Two Americas",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1329694-tw_amr.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: War & Remembrance",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/28071/1718361-warrem_new_edition.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: What Price Glory?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/691804-cawp1.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Captain America: White",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/10390/443337-16173_ms_marvel_400.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Captain America: White",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5055941-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Who Won't Wield the Shield?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1200309-who_won_t_wield_the_shield_1_.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Winter In America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6807715-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Winter Soldier",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/889750-steven_rogers.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Captain America: Winter Soldier #1 Director's Cut",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3732880-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America: Winter Soldier Ultimate Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7012642-6756292554-78610.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America's Bicentennial Battles",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/667440-captai1.jpg",
      "year": "1976",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America/Black Panther: Flags of Our Fathers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5141409-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America/Nick Fury: Blood Truce",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/1064839-211000.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain America/Nick Fury: The Otherworld War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/910543-1.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Atom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/2022886-captain_atom__2011_2nd_series__01a.jpeg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "13 Issues"
    },
    {
      "title": "Captain Atom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2755271-01.jpg",
      "year": "1987",
      "publisher": "DC Comics",
      "Field7": "57 Issues"
    },
    {
      "title": "Captain Atom Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2755346-01.jpg",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Captain Atom: Evolution",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3485594-01.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Atom: Genesis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3795627-02.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Atom: The Fall and Rise of Captain Atom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6212043-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Britain",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26954/503445-cptbritain.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Britain",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/260393-20170-120320-1-before-excalibur-.jpg",
      "year": "1988",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Britain and MI:13",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/639821-a_captain_brit__000.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "15 Issues"
    },
    {
      "title": "Captain Britain and MI:13 : Hell Comes To Birmingham",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3480317-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Britain and MI:13 : Secret Invasion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/965670-cap.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Britain and MI:13 Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/33110/825878-captainbritainmi13annual1.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Britain And MI:13 Vampire State",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1066943-cpbrn.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Britain and the Mighty Defenders",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4685102-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Captain Britain Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/887622-brian_braddock.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Britain Summer Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/1561524-1.png",
      "year": "1979",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Captain Britain: Birth of a Legend",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1889395-cb__boal.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Britain: Legacy of A Legend",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5547950-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Britain: The Siege of Camelot",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2022615-cb__tsoc.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Carrot and His Amazing Zoo Crew",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/19689-3112-21974-1-captain-carrot-and-h.jpg",
      "year": "1982",
      "publisher": "DC Comics",
      "Field7": "21 Issues"
    },
    {
      "title": "Captain Carrot and the Final Ark",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2064556-captain_carrot.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Carrot and the Final Ark!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/233244-19670-118015-1-captain-carrot-and-t.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Captain Justice",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61459-4046-94454-1-captain-justice.jpg",
      "year": "1988",
      "publisher": "Marvel",
      "Field7": "2 Issues"
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
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2755503-01.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "36 Issues"
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
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6753279-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "14 Issues"
    },
    {
      "title": "Captain Marvel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2770643-cm_1_dcp_0000.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Captain Marvel - Marvel Legacy Primer Pages",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6084519-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Marvel & The Carol Corps",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4613181-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Captain Marvel & The Carol Corps: Warzones!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4912385-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Marvel By Jim Starlin: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5547951-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Marvel Start Here Sampler 2019",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6780971-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Marvel: Alis Volat Propriis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4751350-03.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Marvel: Braver & Mightier",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6819190-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Marvel: Carol Danvers – The Ms. Marvel Years",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6351112-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Captain Marvel: Civil War II",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5677315-02.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Marvel: Coven",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1080741-cm.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Marvel: Crazy Like A Fox",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1080746-cm.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Marvel: Down",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3609626-02.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Marvel: Earth's Mightiest Hero",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6782380-7539858855-74539.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Captain Marvel: Falling Star",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7205224-02.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Marvel: First Contact",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/3310534-715zcjoqkws._sl1500_.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Marvel: Higher, Further, Faster, More",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4149727-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Marvel: In Pursuit of Flight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3499745-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Marvel: Monica Rambeau",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6779303-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Marvel: Ms. Marvel: A Hero Is Born",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6797680-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Marvel: Nothing to Lose",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1080731-cm.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Marvel: Odyssey",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1080752-cm.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Marvel: Re-Entry",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7054371-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Marvel: Rise of Alpha Flight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5337564-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Marvel: Starforce",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6929670-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Marvel: Stay Fly",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4501772-02.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Marvel: The Death of Captain Marvel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1285207-cm__docm.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Marvel: The End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7226415-01.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Marvel/Ms. Marvel: Secret Invasion Infiltration",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/53998/1028473-captain_marvel_ms__marvel__secret_invasion_infiltration_v2008__1__2008____page_1.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Planet and the Planeteers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61461-4584-94456-1-captain-planet-and-t.jpg",
      "year": "1991",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Captain Savage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2172646-01.jpg",
      "year": "1968",
      "publisher": "Marvel",
      "Field7": "19 Issues"
    },
    {
      "title": "Captain Universe / Daredevil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2764595-captain_universe_._daredevil_pg_01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Universe / Invisible Woman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2764577-capt_universe.invisible_woman_pg_01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Universe / Silver Surfer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2764572-00captain_universe_silver_surfer_1_cover.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Universe / The Incredible Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2764593-00captain_universe_hulk_1_cover.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Universe / X-23",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2764561-00captain_universe_x_23_1_cover.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Universe: Power Unimaginable",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/28028/728064-unimaginable_cover.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Captain Universe: The Hero Who Could Be You!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3074778-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Carnage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/49117/1466767-carnage__1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Carnage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4900389-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "16 Issues"
    },
    {
      "title": "Carnage Classic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5302160-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Carnage Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6396950-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Carnage U.S.A.",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2160113-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Carnage USA",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2415419-cng_usa.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Carnage: Family Feud",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/104675/1980790-carnageff.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Carnage: It's a Wonderful Life",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/717213-carnage.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Carnage: Mind Bomb",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/557584-1.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Carnage: Minimum Carnage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2815875-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Carnage: The One That Got Away",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5173542-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Carnage: What Dwells Beneath",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5819605-03.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Carnage: World Tour",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5500589-02.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cars 2",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/2152527-hr.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Cartoon Cartoons",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38826/900957-1vol.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Cartoon Cartoons",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1828140-01.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "33 Issues"
    },
    {
      "title": "Cartoon Network Action Pack",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/170394-19019-113368-1-cartoon-network-acti.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "67 Issues"
    },
    {
      "title": "Cartoon Network Block Party",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1029700-1.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "59 Issues"
    },
    {
      "title": "Cartoon Network Presents",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2363914-01.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "24 Issues"
    },
    {
      "title": "Cartoon Network Starring",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2363562-01.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "18 Issues"
    },
    {
      "title": "Cartoon Network: Jam-Packed Action!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2077736-2344_400x600.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Cartoons - For Men Only",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/4992445-car1.jpg",
      "year": "1974",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Casper",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11113/111132479/5093958-casper%20v1%20%231%20-%20page%201.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Casper",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64684/1920944-casper.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Casper and Friends Magazine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/1267743-cafm1.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Castle: A Calm Before Storm",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2761018-castle_001_zone_000.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Castle: A Calm Before Storm",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3135056-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Castle: Richard Castle's Deadly Storm",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/2058340-castle___richard_castle_s_deadly_storm__2011____page_1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Castle: Richard Castle's Storm Season",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2637812-02.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cataclysm",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3409435-0.1a.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cataclysm: The Ultimates",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3453875-01a.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Cataclysm: The Ultimates Last Stand",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3854854-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cataclysm: The Ultimates' Last Stand",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3423925-01a.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Cataclysm: Ultimate Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3459302-01a.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Cataclysm: Ultimate X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3468798-01a.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Catwoman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62070/1796862-acatwoman.png",
      "year": "1989",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Catwoman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/4984868-catwoman%20%231%2001042016.jpg",
      "year": "1993",
      "publisher": "DC Comics",
      "Field7": "96 Issues"
    },
    {
      "title": "Catwoman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6498621-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "19 Issues"
    },
    {
      "title": "Catwoman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/45062-7328-52122-1-catwoman.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "83 Issues"
    },
    {
      "title": "Catwoman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/2018282-1.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "53 Issues"
    },
    {
      "title": "Catwoman 101",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2845242-digital_catwoman_101_v9999__101___page_1.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/1185502-cwa94a.jpg",
      "year": "1994",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Catwoman Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6947186-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3070856-catwoman.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Catwoman by Jim Balent",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6060362-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Catwoman Defiant",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6497054-1238416475-69628.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman Plus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/240544-19732-118292-1-catwoman-plus.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman Secret Files And Origins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1797485-13728_20051128211907_large.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman The Movie & Other Cat Tales",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/103098/3548256-catwoman%20the%20movie%20%282004%29%20tpb.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman: A Celebration of 75 Years",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4912386-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman: Backward Masking",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5199895-05.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman: Catwoman Dies",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1877587-catwoman_dies.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman: Copycats",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6883246-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman: Crime Pays",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1974047-crime_pays.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman: Crooked Little Town",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84316/1588703-1292_400x600.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman: Death of the Family",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3377597-03.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman: Dollhouse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3368523-02.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman: Election Night",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5513297-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman: Far From Gotham",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7059395-02.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman: Final Jeopardy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5628424-06.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman: Futures End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4114528-catwoman.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman: Gotham Underground",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3850003-04.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman: Guardian of Gotham",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/40763-6318-45985-1-catwoman-guardian-o.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Catwoman: Her Sister's Keeper",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62070/1249699-keeper.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman: Inheritance",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5051552-07.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman: It's Only a Movie",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84316/1591116-7617_400x600.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman: Keeper of the Castle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4711625-06.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman: Nine Lives of a Feline Fatale",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/250926-19977-119419-1-catwoman-nine-lives.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman: No Easy Way Down",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4964297-02.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman: Race of Thieves",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4240250-05.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman: Relentless",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84316/1591085-2481_400x600.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman: Run Like Hell",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5479399-08.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman: Selina's Big Score",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/1332570-1293_400x600.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman: The Catfile",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/316166-20652-123869-1-catwoman-the-catfil.jpg",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman: The Dark End of the Street",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84316/1587658-1296_400x600.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman: The Game",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2345616-978_1_4012_3464_5.jpeg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman: The Long Road Home",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1981511-long_road_home.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman: The Movie",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/4924878-catwoman%20movie.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman: The One You Love",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4955620-04.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman: The Replacements",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84316/1591105-6603_400x600.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman: Trail of the Catwoman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4964294-01.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman: Under Pressure",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3724462-03.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman: When In Rome",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515489-01.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman: When in Rome",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/197214-19181-114800-1-catwoman-when-in-ro.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Catwoman: Wild Ride",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84316/1591090-3885_400x600.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman/Tweety and Sylvester",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6584070-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman/Vampirella: The Furies",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/316164-20651-123868-1-catwoman-vampirella.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Catwoman/Wildcat",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/598445-cwwc1a.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Cave Carson Has A Cybernetic Eye",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5491616-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Cave Carson Has A Cybernetic Eye: Every Me, Every You",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6266881-02.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Cave Carson Has A Cybernetic Eye: Going Underground",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5923479-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Cave Carson Has A Cybernetic Eye/Swamp Thing Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6289319-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Cave Carson Has An Interstellar Eye",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6721950-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Cave Carson Has An Interstellar Eye",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6339682-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Celebrate The Century Super Heroes Stamp Album",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/681565-cel1.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "10 Issues"
    },
    {
      "title": "Centipede",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/72648/2378751-centipede1.jpg",
      "year": "1983",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Centurions",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/25336-3783-28169-1-centurions.jpg",
      "year": "1987",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Century",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/990484-0.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Chain Gang War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1812/100355-18315-107261-1-chain-gang-war.jpg",
      "year": "1993",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Challengers of the Unknown",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/83392/1700053-challengers_of_the_unknown_v2__1___page_2.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "18 Issues"
    },
    {
      "title": "Challengers of the Unknown",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/3412-1866-3766-1-challengers-of-the-u.jpg",
      "year": "1958",
      "publisher": "DC Comics",
      "Field7": "87 Issues"
    },
    {
      "title": "Challengers of the Unknown",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/64693-11147-97690-1-challengers-of-the-u.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Challengers of the Unknown",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/30500-4547-33944-1-challengers-of-the-u.jpg",
      "year": "1991",
      "publisher": "DC Comics",
      "Field7": "8 Issues"
    },
    {
      "title": "Challengers of the Unknown Archives",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2064562-challengersvol1.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Challengers of the Unknown by Jack Kirby",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100555/3428371-cotu_kirby.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Challengers of the Unknown by Jeph Loeb and Tim Sale",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6266880-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Challengers of the Unknown Must Die",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2064559-challengers2.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Challengers of the Unknown Stolen Moments, Borrowed Time",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2064557-challengers.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Chamber",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/74714-9459-77754-1-chamber.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Chamber of Chills",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/11393-2566-12645-1-chamber-of-chills.jpg",
      "year": "1972",
      "publisher": "Marvel",
      "Field7": "25 Issues"
    },
    {
      "title": "Chamber of Darkness",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/9488-2441-10465-1-chamber-of-darkness.jpg",
      "year": "1969",
      "publisher": "Marvel",
      "Field7": "8 Issues"
    },
    {
      "title": "Chamber of Darkness Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/136740-18714-110621-1-chamber-of-darkness.jpg",
      "year": "1972",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Champion Sports",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/12182-2611-13650-1-champion-sports.jpg",
      "year": "1973",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Champions",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6744786-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "10 Issues"
    },
    {
      "title": "Champions",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5467793-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "28 Issues"
    },
    {
      "title": "Champions - Marvel Legacy Primer Pages",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6073800-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Champions Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730711-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Champions by Jim Zub: Beat The Devil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7031428-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Champions by Jim Zub: Give and Take",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7169485-02.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Champions Classic: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6477290-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Champions: Because The World Still Needs Heroes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6938320-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Champions: Champion For A Day",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6548895-03.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Champions: Change The World",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5830861-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Champions: Northern Lights",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6676149-04.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Champions: The Freelancer Lifestyle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6184482-02.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Champions: Weird War One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6760820-05.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Chaos War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/49117/1440378-chaos_war__1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Chaos War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3264325-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Chaos War: Alpha Flight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1526921-chaos_war_alpha_flight.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Chaos War: Ares",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1557396-chaos_war_ares_1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Chaos War: Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5271877-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Chaos War: Chaos King",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/1517492-chaos_war_chaos_king_vol_1_1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Chaos War: Dead Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6063/1516837-cwavn001_dc11_lr_0001.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Chaos War: God Squad",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1541420-chaos_war_god_squad_1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Chaos War: Incredible Hulks",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5271878-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Chaos War: Thor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/1505295-chaos_war_thor_vol_1_1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Chaos War: X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1589199-chaos_war_x_men.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Chaos War: X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6523685-5271185155-69772.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Chase",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/39665-6152-44644-1-chase.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "10 Issues"
    },
    {
      "title": "Chase",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/2178094-chase.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Cheap Trick: Busted",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/616075-cheap1.jpg",
      "year": "1990",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Checkmate",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/4632773-checkmate%20%231%20final.jpg",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "33 Issues"
    },
    {
      "title": "Checkmate",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/468813-img000.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "31 Issues"
    },
    {
      "title": "Checkmate By Greg Rucka",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5665071-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Checkmate: A King's Game",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1777958-a_kings_game.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Checkmate: Chimera",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1967845-01.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Checkmate: Fall of the Wall",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1967827-01.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Checkmate: Pawn Breaks",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1967834-01.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Chewbacca",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4851204-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Chili",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/595376-chili1a.jpg",
      "year": "1969",
      "publisher": "Marvel",
      "Field7": "26 Issues"
    },
    {
      "title": "Chili Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/898819-1987_4_001.jpg",
      "year": "1971",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Christmas With the Super-Heroes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/27546-3987-30553-1-christmas-with-the-s.jpg",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Chronos",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/41639-6602-47217-1-chronos.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Cinder and Ashe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3930250-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Cinder and Ashe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/26694-3988-29628-1-cinder-and-ashe.jpg",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Cinnamon: El Ciclo",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/66757-11378-99754-1-cinnamon-el-ciclo.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Citizen V and the V-Battalion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/37015/797209-citizen_v3.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Citizen V and the V-Battalion: the Everlasting",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/1047545-citizenveverlasting1.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Civil War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2934550-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/443/82656-18023-105525-1-civil-war.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "7 Issues"
    },
    {
      "title": "Civil War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4670533-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Civil War Chronicles",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/154411-18899-111693-1-civil-war-chronicles.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Civil War Companion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/440519-civil_war_companion_1_00.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War Files",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2945058-www.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War II",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5211082-00.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "9 Issues"
    },
    {
      "title": "Civil War II",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5677317-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War II Daily Bugle Newspaper",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5229400-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War II Fallout",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5759767-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War II Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5360514-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War II: Amazing Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6688116-7279485629-44386.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War II: Amazing Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5252035-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Civil War II: Choosing Sides",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6688117-4577736816-44397.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War II: Choosing Sides",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5278606-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Civil War II: Gods of War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6688118-3408645094-44399.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War II: Gods of War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5252037-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Civil War II: Kingpin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5302707-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Civil War II: Kingpin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5542865-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War II: The Oath",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5665072-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War II: Ulysses",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5396216-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Civil War II: Ulysses Infinite Comic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5267910-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Civil War II: X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5263998-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Civil War II: X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5542871-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War MGC",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1215304-civil_war_mgc.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War Poster Book",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2489442-civil_war_poster_book__21379___page_1.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War Prelude: New Warriors",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4403021-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War Script Book",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/83918/2235578-13330281_1.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War: Amazing Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1177836-spm.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War: Amazing Spider-Man Decisions",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9338/637488-spideypoc.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War: Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1443228-cw_avg.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War: Battle Damage Report",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/101237-18332-107416-1-civil-war-battle-da.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War: Captain America/Iron Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5092383-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War: Choosing Sides",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/99294-18273-107009-1-civil-war-choosing.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War: Director's Cut",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/111946/2094618-cwdirect.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War: Fallen Son Daily Bugle Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1282007-fallen_son___daily_bugle_special__6___page_1.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War: Fantastic Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1736999-cwff.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War: Fantastic Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4150196-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War: Front Line",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/97460-18245-106844-1-civil-war-front-lin.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "11 Issues"
    },
    {
      "title": "Civil War: Front Line",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7214139-1591541705-82880.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War: Front Line, Book One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1403278-cw__fl1.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War: Front Line, Book Two",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1403306-cw__fl2.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War: Heroes for Hire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4721777-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War: Heroes for Hire/Thunderbolts",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5141427-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War: House of M",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1151862-hom.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War: Iron Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/957226-iron_man.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War: Marvel Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4285856-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War: Opening Shot Sketchbook",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/440562-civil_war_opening_shot_sketchbook_1_00.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War: Peter Parker, Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4161661-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War: Punisher War Journal",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1182930-pns.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War: Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1550695-cw__spm.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War: The Confession",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/98620-18258-106909-1-civil-war-the-confe.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War: The Initiative",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/96477-18235-106789-1-civil-war-the-initi.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War: The Return",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/87794-18106-106020-1-civil-war-the-retur.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War: The Underside",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1613933-cw__tus.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War: Thunderbolts",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4261038-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War: War Crimes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/114363-18539-108953-1-civil-war-war-crime.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War: War Crimes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4260991-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War: Warzones!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5055942-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War: X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2934582-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War: X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/112416-18528-108786-1-civil-war-x-men.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Civil War: X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1679519-cw__xmn.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War: X-Men Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4711884-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Civil War: Young Avengers & Runaways",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/443/78640-17991-105339-1-young-avengers--run.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Civil War: Young Avengers and Runaways",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1171800-cw.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "ClanDestine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/35633-5286-39788-1-clandestine.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "ClanDestine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/299097-20448-122417-1-clandestine.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "ClanDestine Classic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1171065-clandestine_classic.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Clandestine Preview",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1169758-clandestine_preview.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "ClanDestine: Family Ties",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6614299-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Clash",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/101735/1861500-clash_1_cover.jpg",
      "year": "1991",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Classic Punisher",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1808/1050841-classic_punisher___00___fc.jpg",
      "year": "1989",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Classic X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3586664-01.jpg",
      "year": "1986",
      "publisher": "Marvel",
      "Field7": "45 Issues"
    },
    {
      "title": "Claw the Unconquered",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23749/433008-43856_20060603150818_large.jpg",
      "year": "1975",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Claws",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3464/110069-18502-108617-1-claws.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Cloak & Dagger: Child of Darkness, Child of Light",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/992542-c_d.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cloak and Dagger",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1169281-cloak_and_dagger.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cloak and Dagger",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6458235-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Cloak and Dagger",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2032754-01.jpg",
      "year": "1983",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Cloak and Dagger",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3586667-01.jpg",
      "year": "1985",
      "publisher": "Marvel",
      "Field7": "11 Issues"
    },
    {
      "title": "Cloak and Dagger",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6518412-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Cloak and Dagger: Agony and Ecstasy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6958054-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cloak and Dagger: Crime and Punishment",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5286411-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cloak and Dagger: Lost and Found",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5734654-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cloak and Dagger: Negative Exposure",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6863608-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cloak and Dagger: Negative Exposure",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6737673-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Cloak and Dagger: Predator and Prey",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6570579-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cloak and Dagger: Runaways and Reversals",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6326188-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cloak and Dagger: Shades of Grey",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6721951-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cloak and Dagger: Shadows and Light",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5688773-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Clueless Comic Magazine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/79647/6984709-capture.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Code of Honor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/44651-7282-51699-1-code-of-honor.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Codename: Spitfire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/44701-3835-51749-1-codename-spitfire.jpg",
      "year": "1987",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Collapser",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7008011-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Color Your Own Age of Ultron",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4838215-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Color Your Own Ant-Man and the Wasp",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6447341-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Color Your Own Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6352574-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Color Your Own Avengers: Earth's Mightiest Heroes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6863609-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Color Your Own Black Panther",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6212045-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Color Your Own Captain Marvel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6779304-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Color Your Own Civil War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5133341-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Color Your Own Deadpool",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4984278-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Color Your Own Deadpool Again!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6406869-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Color Your Own Doctor Strange",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5478475-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Color Your Own Guardians of the Galaxy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5791970-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Color Your Own James Patterson: Max Ride",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5302045-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Color Your Own Marvel Masters",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6003135-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Color Your Own Marvel Tsum Tsum",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5870327-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Color Your Own Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5884491-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Color Your Own Star Wars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5479404-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Color Your Own Star Wars: Darth Vader",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6050250-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Color Your Own Star Wars: Han Solo",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6406870-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Color Your Own Thor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6080278-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Color Your Own Venom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6594987-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Color Your Own Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5680714-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Color Your Own Women of Power",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5421860-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Color Your Own X-Men: The New Mutants",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6280002-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Color Your Own Young Marvel by Skottie Young",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5259876-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Coloring DC: Batman Hush",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5081130-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Coloring DC: DC Super Hero Girls",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5935975-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Coloring DC: Harley Quinn in Batman Adventures: Mad Love",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5099086-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Coloring DC: Wonder Woman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5302024-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Colossus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52080/1039632-colossus_1.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Colossus: God's Country",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/1151488-colossusgc.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Combat Kelly and the Deadly Dozen",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6066330-7758600701-57245.jpg",
      "year": "1972",
      "publisher": "Marvel",
      "Field7": "9 Issues"
    },
    {
      "title": "Combat Zone: True Tales of GIs in Iraq",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/2320920-comb1.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Combo Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/682808-comb1.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Comet Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/25018-3836-27817-1-comet-man.jpg",
      "year": "1987",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Comic Book",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/2450667-comic_book_001__1995__pagecover.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Comic Cavalcade",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1093/150930-18856-111487-1-comic-cavalcade.jpg",
      "year": "1942",
      "publisher": "DC Comics",
      "Field7": "63 Issues"
    },
    {
      "title": "Comic Cavalcade Archives",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/1055267-cca1.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Complete Frank Miller Batman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1627519-compfrnkmllrbtmn.jpg",
      "year": "1989",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Complete Frank Miller Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/2248068-comp1.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Computer Masters of Metropolis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/136470-18710-110594-1-computer-masters-of.jpg",
      "year": "1982",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Con Edison Presents JLA Starring Batman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/37375/1391963-jla_con_edison.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Conan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/36885-5539-41252-1-conan.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "11 Issues"
    },
    {
      "title": "Conan 2099",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7161561-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Conan Chronicles Epic Collection: Out of the Darksome Hills",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6789744-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Conan Chronicles Epic Collection: Return To Cimmeria",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7092696-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Conan Chronicles Epic Collection: The Battle of Shamla Pass",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7197047-01.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Conan Chronicles Epic Collection: The Heart of Yag-Kosha",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6874985-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Conan Classic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/35113-5287-39217-1-conan-classic.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "11 Issues"
    },
    {
      "title": "Conan Saga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/2173562-01.jpg",
      "year": "1987",
      "publisher": "Marvel",
      "Field7": "97 Issues"
    },
    {
      "title": "Conan the Adventurer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/35114-5288-39218-1-conan-the-adventurer.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "14 Issues"
    },
    {
      "title": "Conan the Barbarian",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6744788-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Conan the Barbarian",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/10040-2471-11052-1-conan-the-barbarian.jpg",
      "year": "1970",
      "publisher": "Marvel",
      "Field7": "275 Issues"
    },
    {
      "title": "Conan the Barbarian Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3586679-01.jpg",
      "year": "1973",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Conan the Barbarian Movie Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/20176-3134-22512-1-conan-the-barbarian-.jpg",
      "year": "1982",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Conan the Barbarian: Exodus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7039244-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Conan the Barbarian: Stalker of the Woods",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/28121/535287-conan_and_the_stalker_of_the_woods_0010000.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Conan the Barbarian: The Horn of Azoth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/1054548-384232.jpg",
      "year": "1990",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Conan the Barbarian: The Life and Death of Conan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6990894-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Conan the Barbarian: The Original Marvel Years Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7022516-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Conan the Barbarian: The Skull of Set",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1266253-marvel_graphic_novel_v1982__53___conan__the_skull_of_set__2010____page_1.jpg",
      "year": "1989",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Conan the Barbarian: The Usurper",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/28121/531989-conan_the_usurper_0010000.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Conan the Destroyer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61474-3476-94469-1-conan-the-destroyer.jpg",
      "year": "1985",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Conan the King",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/21406-3336-23867-1-conan-the-king.jpg",
      "year": "1984",
      "publisher": "Marvel",
      "Field7": "36 Issues"
    },
    {
      "title": "Conan the Rogue",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1266250-marvel_graphic_novel_v1982__69___conan__the_rogue__2010____page_1.jpg",
      "year": "1991",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Conan the Savage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/451813-5278_4_001.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "10 Issues"
    },
    {
      "title": "Conan vs. Rune",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/230597-19636-117802-1-conan-vs-rune.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Conan: Battle For the Serpent Crown",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7234742-01.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Conan: Death Covered in Gold",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/73406/1347878-conan_01_001.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Conan: Flame and the Fiend",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/397958-21676-130828-1-conan-flame-and-the.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Conan: Lord of the Spiders",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/74719-9460-77759-1-conan-lord-of-the-s.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Conan: Return of Styrm",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74848/1530545-conan_the_barbarian___return_of_styrm_01.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Conan: River of Blood",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74848/1530568-conan_the_barbarian___river_of_blood_01.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Conan: Scarlet Sword",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/1049730-353899.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Conan: Serpent War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7169461-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Conan: The Hour of the Dragon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7197048-01.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Conan: The Jewels of Gwahlur and Other Stories",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6990895-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Conan: The Ravagers Out of Time",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1358664-conan___the_ravagers_out_of_time.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Coneheads",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61476-5289-94471-1-coneheads.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Congo Bill",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/1189-1614-1273-1-congo-bill.jpg",
      "year": "1954",
      "publisher": "DC Comics",
      "Field7": "7 Issues"
    },
    {
      "title": "Congorilla",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/32590-4731-36357-1-congorilla.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Conjurors",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/40627-6319-45807-1-conjurors.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Connor Hawke: Dragon's Blood",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1812/195846-18497-114670-1-connor-hawke-dragon.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Connor Hawke: Dragon's Blood",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/39328/1166208-img11275.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Conqueror of the Barren Earth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/22589-3440-25206-1-conqueror-of-the-bar.jpg",
      "year": "1985",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Conspiracy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/39694-6208-44674-1-conspiracy.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Constantine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2937260-const_cv1_ds.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "23 Issues"
    },
    {
      "title": "Constantine Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4170684-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Constantine: Blight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4009337-02.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Constantine: Futures End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4086478-constantine.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Constantine: The Apocalypse Road",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4751352-04.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Constantine: The Hellblazer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4616260-%24_57-1.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "13 Issues"
    },
    {
      "title": "Constantine: The Hellblazer: Going Down",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5041577-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Constantine: The Hellblazer: The Art of the Deal",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5443201-02.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Constantine: The Spark and the Flame",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3635310-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Constantine: The Voice In the Fire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4398314-03.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Contagion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7212743-01.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Contagion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7092697-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Contest of Champions",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4838217-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "10 Issues"
    },
    {
      "title": "Contest of Champions II",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/40782-6353-46012-1-contest-of-champions.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Contest of Champions: Battleworld",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5160007-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Contest of Champions: Final Fight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5547952-02.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Convergence",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4502501-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "9 Issues"
    },
    {
      "title": "Convergence",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4838218-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Convergence Action Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4530552-convergence%20action%2001.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Adventures of Superman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4519593-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Aquaman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4504954-convergence%20aquaman%2001.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Atom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4490995-atom%2001.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Batgirl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4502487-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Batman and Robin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4502489-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Batman and the Outsiders",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4518157-convergence%20batman%20and%20the%20outsiders%2001.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Batman: Shadow of the Bat",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4504956-convergence%20bat%20shadow%2001.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Blue Beetle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4534240-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Booster Gold",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4530555-convergence%20booster%2001.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Catwoman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4504957-convergence%20catwoman%2001.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Crime Syndicate",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4530557-convergence%20crime%2001.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Detective Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4530558-convergence%20detective%2001.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Green Arrow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4504958-convergence%20green%20a%2001.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Green Lantern Corps",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4518155-convergence%20green%20lantern%20corps%2001.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Green Lantern/Parallax",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4504959-convergence%20green%20l%2001.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Harley Quinn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4490999-harley%2001.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Hawkman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4518160-convergence%20hawkman%2001.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Infinity INC.",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4530559-convergence%20infinity%2001.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Justice League",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4491001-justice%2001.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Justice League International",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4504960-convergence%20jli%2001.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Justice League of America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4518158-convergence%20jla%2001.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Justice Society of America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4534241-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence New Teen Titans",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4518161-convergence%20new%20teen%20titans%2001.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Nightwing/Oracle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4491002-nightwing%2001.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Plastic Man and the Freedom Fighters",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4530562-convergence%20plastic%20man%2001.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Shazam",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4530563-convergence%20shazam%2001.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Speed Force",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4491005-speed%20force%2001.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Suicide Squad",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4504962-convergence%20suicide%20squad%2001.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Superboy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4504963-convergence%20superboy%2001.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Superboy and the Legion of Super-Heroes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4518167-convergence%20superboy%2001.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Supergirl: Matrix",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4504964-convergence%20supergirl%2001.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Superman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4493414-convergencesup1a.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Superman: The Man of Steel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4504966-convergence%20superman%2001.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Swamp Thing",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4518165-convergence%20swamp%20thing%2001.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence The Flash",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4518230-img_1393.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence The Question",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4491003-question%2001.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Titans",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4491255-titans%2001.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence Wonder Woman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4519608-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence World's Finest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4530564-convergence%20world%2001.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence: Crisis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4851207-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence: Flashpoint",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4864625-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence: Infinite Earths",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4878046-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Convergence: Zero Hour",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4838219-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Cool World",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51078/998266-coolw1.jpeg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Cool World Movie Adaptation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/148518/3018536-132121_20080804153526_large.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "COPS",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/26932-3989-29892-1-cops.jpg",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "15 Issues"
    },
    {
      "title": "Cops: The Job",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/32104-4782-35779-1-cops-the-job.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Cosmic Boy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2755651-01.jpg",
      "year": "1986",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Cosmic Ghost Rider",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6498643-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Cosmic Ghost Rider Destroys Marvel History",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7092698-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cosmic Ghost Rider Destroys Marvel History",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6828898-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Cosmic Ghost Rider: Baby Thanos Must Die",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6771019-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cosmic Odyssey",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2077737-3766_400x600.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Cosmic Odyssey",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/27268-3990-30255-1-cosmic-odyssey.jpg",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Cosmic Odyssey: The Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5711895-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Cosmic Powers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/44636-5290-51684-1-cosmic-powers.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Cosmic Powers Unlimited",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/918213-cpu_1.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Count Duckula",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61485-4047-94480-1-count-duckula.jpg",
      "year": "1988",
      "publisher": "Marvel",
      "Field7": "15 Issues"
    },
    {
      "title": "Countdown Presents: Lord Havok and the Extremists",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2612311-01.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Countdown Presents: Lord Havok and the Extremists",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/236950-19701-118151-2-countdown-presents.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Countdown Presents: The Search for Ray Palmer: Crime Society",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/212294-19256-115567-1-countdown-presents.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Countdown Presents: The Search for Ray Palmer: Gotham By Gaslight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/274629-20299-121175-1-countdown-presents.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Countdown Presents: The Search for Ray Palmer: Red Rain",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/229750-19618-117690-1-countdown-presents.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Countdown Presents: The Search for Ray Palmer: Red Son",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/297557-20435-122329-1-countdown-presents.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Countdown Presents: The Search For Ray Palmer: Superwoman/Batwoman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/1000935-search.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Countdown Presents: The Search for Ray Palmer: Wildstorm",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/192979-19136-114442-1-countdown-presents.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Countdown Special: Eclipso",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1061818-prv3843_pg1.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Countdown Special: Jimmy Olsen",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/251920-20023-119568-1-countdown-special-j.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Countdown Special: KAMANDI: The Last Boy On Earth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/12075/417592-Kamandi.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Countdown Special: OMAC",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/58245/1141655-countdown_special___omac_1.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Countdown Special: The Atom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/47357/1222069-img12598.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Countdown Special: The Flash",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/598455-flash.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Countdown Special: The New Gods",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66792/1241178-001.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Countdown to Adventure",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/184606-19084-113970-1-countdown-to-adventu.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "8 Issues"
    },
    {
      "title": "Countdown To Final Crisis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1078687-cover.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Countdown to Final Crisis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/364722-18564-128207-1-countdown-to-final-c.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "51 Issues"
    },
    {
      "title": "Countdown to Infinite Crisis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1093/120776-18410-107912-2-countdown-to-infinit.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Countdown to Mystery",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/196466-19175-114761-1-countdown-to-mystery.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "8 Issues"
    },
    {
      "title": "Countdown: Arena",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/261511-20179-120389-1-countdown-arena.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Counter X",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5406572-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Counter X: Generation X: Four Days",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6688122-3580591970-41840.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Counter X: X-Force: Rage War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6688124-2467745676-41842.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cover",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6595973-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Cover",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6938321-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Cover Run: The DC Comics Art of Adam Hughes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515492-01.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Cover Story: The DC Comics Art of Brian Bolland",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/2027150-1.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Craftsman Bolt-On System Saves the Justice League",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/83283/2627537-craftsman_zone_000.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Craptacular B-Sides",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/33561/675649-b_sides1.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Crazy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/55747-2631-77796-1-crazy.jpg",
      "year": "1973",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Crazy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7212744-01.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Crazy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7109883-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Crazy Magazine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/29571/606169-crazy_1.jpg",
      "year": "1973",
      "publisher": "Marvel",
      "Field7": "94 Issues"
    },
    {
      "title": "Crazy Super Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/6980338-cra1.jpg",
      "year": "1975",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Creature Commandos",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/1016404-cc1_00.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "8 Issues"
    },
    {
      "title": "Creatures on the Loose",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/10285-2512-11323-1-creatures-on-the-loo.jpg",
      "year": "1971",
      "publisher": "Marvel",
      "Field7": "28 Issues"
    },
    {
      "title": "Creeper",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/8182/314533-18140-123608-1-the-creeper.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Creeper by Steve Ditko",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1709325-creeper.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Creeper: Welcome to Creepsville",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2176009-creeper.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Crime Bible: The Five Lessons of Blood",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/221935-19448-116460-1-crime-bible-five-le.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Crimson Avenger",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/5115741-crimson%20avenger%20%231.jpg",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Crisis Aftermath: The Spectre",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2080964-crisis_aftermath_the_spectre.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Crisis on Infinite Earths",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/22706-3441-25335-1-crisis-on-infinite-e.jpg",
      "year": "1985",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Crisis on Infinite Earths",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4371770-01.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Crisis On Infinite Earths 30th Anniversary Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4838830-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Crisis On Infinite Earths 8 (Facsimile Edition)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7167916-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Crisis On Infinite Earths Companion Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6676153-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Crisis On Infinite Earths Giant",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7211102-01.jpg",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Crisis On Infinite Earths: 35th Anniversary Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7083678-8341881670-80819.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Crisis On Multiple Earths",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515440-01.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Crisis on Multiple Earths The Team-Ups",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/2789881-comettu1a.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Crybaby",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/8015/221408-19434-116410-1-crybaby.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Crypt of Shadows",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/59031-2632-92026-1-crypt-of-shadows.jpg",
      "year": "1973",
      "publisher": "Marvel",
      "Field7": "21 Issues"
    },
    {
      "title": "Crypt of Shadows",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6771021-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Curse of the Weird",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4365879-01.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Cursed Comics Cavalcade",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6640603-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Custom Disney Child Life Avengers: Solo Act",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6318522-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Custom Sony Pictures 2018 Venom English Comic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11134/111341676/6614075-venommovie.png",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Custom: Deal - Fox Home Entertainment (X-3 Stan Lee Comic)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/3086231-cus1.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Custom: Lions Gate Dr. Strange",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/566166-1.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cutting Edge",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48343/890644-hulk.gif",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cyblade / Ghost Rider",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/103012-18378-107763-2-cyblade--ghost-ride.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cyborg",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4701613-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Cyborg",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5444228-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "23 Issues"
    },
    {
      "title": "Cyborg: Danger In Detroit",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5996317-02.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Cyborg: Enemy of the State",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5559760-02.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Cyborg: Rebirth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5422106-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Cyborg: Singularity",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6418899-03.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Cyborg: The Imitation of Life",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5760941-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Cyborg: Unplugged",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5109002-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Cyclops",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3805322-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Cyclops",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/87073/1748364-cyclops_1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cyclops",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/55750-9461-77799-1-cyclops.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Cyclops Retribution",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1160232-300px_cyclopsretribution1.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cyclops: A Pirate's Life For Me",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4651641-02.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Cyclops: Starstruck",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4283478-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "D.P.7",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/24610-3627-27380-1-d-p-7.jpg",
      "year": "1986",
      "publisher": "Marvel",
      "Field7": "32 Issues"
    },
    {
      "title": "D.P.7 Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1252843-dp7_annual_v1_001.jpg",
      "year": "1987",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "D.P.7 Classic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1310864-dp7_cls.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daffy Duck, You're Despicable!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/1052876-ddyd.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Daily Bugle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2770461-img001.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "18 Issues"
    },
    {
      "title": "Daily Bugle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/38348-5778-43073-1-daily-bugle.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Daily Bugle Civil War Newspaper Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1257072-daily_bugle___wednesday_july__19__2006____page_1.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daily Bugle: Avenging Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110249/2056979-001.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daily Planet Special Edition: Superman Returns!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2850552-__addme___daily_planet_special_edition_superman_returns_v9999___page_1.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Daken: Dark Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1384799-daken.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "24 Issues"
    },
    {
      "title": "Daken: Dark Wolverine - Punishment",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5949057-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daken: Dark Wolverine: Big Break",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4150198-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daken: Dark Wolverine: Empire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/2350848-1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daken: Dark Wolverine: Empire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2351023-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daken: Dark Wolverine: No More Heroes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4261006-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daken: Dark Wolverine: The Pride Comes Before The Fall",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4161667-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daken/X-23: Collision",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3480318-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dakota North",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2173137-01.jpg",
      "year": "1986",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Dakota North: Design For Dying",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6467845-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dale Evans Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27783/1143496-dale_1.jpg",
      "year": "1948",
      "publisher": "DC Comics",
      "Field7": "24 Issues"
    },
    {
      "title": "Damage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4069631-01.jpg",
      "year": "1994",
      "publisher": "DC Comics",
      "Field7": "21 Issues"
    },
    {
      "title": "Damage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6243741-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "16 Issues"
    },
    {
      "title": "Damage Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6572679-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Damage Control",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/30815-4586-34293-1-damage-control.jpg",
      "year": "1991",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Damage Control",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/28127-4349-31211-1-damage-control.jpg",
      "year": "1989",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Damage Control",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/28861-4350-32051-1-damage-control.jpg",
      "year": "1989",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Damage Control: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4863037-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Damage: Out of Control",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6614302-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Damage: Scorched Earth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6893183-02.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Damian: Son of Batman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3408675-damian%2001.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Damian: Son of Batman Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3962829-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Damnation: Johnny Blaze - Ghost Rider",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6351116-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Damnation: Johnny Blaze - Ghost Rider: Halloween ComicFest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7119210-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Danger Trail",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/33176-4957-37041-1-danger-trail.jpg",
      "year": "1993",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Danger Trail",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/80403/1755038-danger_trail_vol_1_1.jpg",
      "year": "1950",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Daphne Byrne",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7203429-01.jpg",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Daredevil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4934520-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "46 Issues"
    },
    {
      "title": "Daredevil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2677618-daredevil001.jpg",
      "year": "1964",
      "publisher": "Marvel",
      "Field7": "381 Issues"
    },
    {
      "title": "Daredevil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3703480-01a.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "21 Issues"
    },
    {
      "title": "Daredevil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/1710590-daredevil__1998__2nd_series__01a.jpeg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "133 Issues"
    },
    {
      "title": "Daredevil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/1918959-dd1.jpeg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "37 Issues"
    },
    {
      "title": "Daredevil - Marvel Legacy Primer Pages",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6107744-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil / Deadpool '97",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/37015/807528-daredevil_deadpool1.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil & Captain America: Dead On Arrival",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2810409-daredevil_captain_america__001.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil #181: Facsimile Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7075981-181.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil And The Punisher: Child's Play",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/1230857-62162.jpg",
      "year": "1988",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/8707-2351-9614-1-daredevil-annual.jpg",
      "year": "1967",
      "publisher": "Marvel",
      "Field7": "10 Issues"
    },
    {
      "title": "Daredevil Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5355908-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/2517197-prv13165_cov.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6582661-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2777087-dd_ann_1_dcp_0000.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil Black & White",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62586/1325545-scan0001.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil by Bendis and Maleev Ultimate Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/141991/3757530-daredevil%20ult.%20collection%20%231.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Daredevil by Brubaker and Lark Ultimate Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2181196-dd_by_b_l_uc1.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Daredevil by Chip Zdarsky: Know Fear",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7023017-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil by Chip Zdarsky: No Devils, Only God",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7169486-02.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil By Ed Brubaker Saga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/496503-001.jpeg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil by Frank Miller and Klaus Janson",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/53928/1031387-1_.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Daredevil by Frank Miller and Klaus Janson Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11134/111341174/6224657-8853126245-29118.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil by Frank Miller Omnibus Companion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/355894-21192-127432-1-daredevil-frank-mil.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil by Mark Waid",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7178802-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Daredevil by Mark Waid",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2615136-_t2ec16zhjgqe9nombzu4bqjczdpy7q__60_57.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "7 Issues"
    },
    {
      "title": "Daredevil by Mark Waid Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5728409-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Daredevil Epic Collection: A Touch of Typhoid",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4998048-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil Epic Collection: A Woman Called Widow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7115996-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil Epic Collection: Brother, Take My Hand",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5711898-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil Epic Collection: Fall From Grace",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5680853-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil Epic Collection: Heart of Darkness",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6060364-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil Epic Collection: Mike Murdock Must Die!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6280003-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil Epic Collection: Purgatory & Paradise",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6958055-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil Epic Collection: Root of Evil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6527877-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil Epic Collection: The Man Without Fear",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5328322-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil Epic Collection: Widow's Kiss",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4763035-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil Legends",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2192677-01.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Daredevil MGC",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1277173-daredevil_mgc_26.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil Noir",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2578585-__kgrhqzhjcie_psh68b_bp5ddrk__w__60_57.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil Noir",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/763680-dn_01a.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Daredevil Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5694825-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil Omnibus by Brian Michael Bendis and Alex Maleev",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2028433-dd_omn_bnd.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Daredevil Omnibus by Ed Brubaker",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5792402-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Daredevil Visionaries: Frank Miller",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/73101-9624-85508-1-daredevil-visionarie.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Daredevil vs. Bullseye",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64684/1626722-daredevil_vs_bullseye.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil Vs. Vapora",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51078/944302-dd.jpeg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Back In Black: Chinatown",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5199898-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Back In Black: Dark Art",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5711897-03.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Back In Black: Identity",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5960892-04.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Back In Black: Mayor Fisk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6527876-06.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Back In Black: Mayor Murdock",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730712-07.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Back In Black: Supersonic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5442648-02.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Back In Black: Supreme",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6164804-05.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Back In Black: The Death of Daredevil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6771020-08.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Blood of the Tarantula",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/375821-21398-129177-1-daredevil-blood-of.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Born Again",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3726651-01.jpg",
      "year": "1987",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Cage Match",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66210/1227444-daredevil___cage_match_v1__1__2010_7____page_1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Cruel and Unusual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4260993-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Dark Nights",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3754556-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "8 Issues"
    },
    {
      "title": "Daredevil: Dark Nights",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3841176-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Decalogue",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1180470-dd.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Devil At Bay",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4162333-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: End of Days",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3148287-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: End of Days",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2625744-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "8 Issues"
    },
    {
      "title": "Daredevil: Fall from Grace",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2150963-2150931-grace.png",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Fearless Origins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6947187-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Gang War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64684/1518905-dgw.jpg",
      "year": "1991",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Golden Age",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2028555-dd__ga.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Hardcore",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2028542-dd__hc.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Hell to Pay",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4161671-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Daredevil: King of Hell's Kitchen",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2028543-dd__kohk.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Lady Bullseye",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4261000-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Lone Stranger",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4721738-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Love's Labors Lost",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4721741-01.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Lowlife",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2028538-dd__ll.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Marked For Death",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/355862-21191-127430-1-daredevil-marked-fo.jpg",
      "year": "1990",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Out",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2028532-dd_out.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Parts of a Hole",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4656042-03.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Reborn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1904747-dd__rb.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Reborn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2083852-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Daredevil: Return of the King",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4261001-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Road Warrior",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3664758-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Daredevil: Season One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/107368/2290084-daredevil_seasonone_cover.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Shadowland Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6271360-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: The Autobiography of Matt Murdock",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4932895-04.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: The Daredevil You Know",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4711803-03.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: The Devil, Inside and Out",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1179937-dd.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Daredevil: The Devil's Hand",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4261008-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: The Fall of The Kingpin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/61948/1397467-dd_000.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: The Man Without Fear",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/33989-5000-37946-1-daredevil-the-man-wi.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Daredevil: The Man Without Fear",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2010333-dd__mwfvar.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: The Movie",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/681399-ddmov.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: The Widow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2028551-dd__tw.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Typhoid's Kiss",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4738229-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Underboss",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2028523-dd__ub.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Wake Up",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4621112-01.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: West-Case Scenario",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4403050-02.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil: Yellow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1653700-yellow.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil/Batman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/986562-daredevil___batman___eye_for_an_eye__1__1997_1____page_1.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil/Black Widow: Abattoir",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/59000/1140393-p00001___daredevil_black_widow_abattoir.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil/Echo: Parts of a Hole",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2028632-dd_ech___poah.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil/Echo: Vision Quest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4886842-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil/Punisher: Seventh Circle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5489475-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daredevil/Punisher: Seventh Circle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5187350-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Daredevil/Punisher: Seventh Circle Infinite Comic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5078612-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "8 Issues"
    },
    {
      "title": "Daredevil/Shi",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/444749-1dd_shi.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daring Mystery Comics 70th Anniversary Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/941818-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daring New Adventures of Supergirl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5316366-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Dark Agnes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7234743-01.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2482834-davengers_175_cover.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "16 Issues"
    },
    {
      "title": "Dark Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/684020-dark_avengers_01_pg01a.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "16 Issues"
    },
    {
      "title": "Dark Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2010316-da_hc.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Avengers Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1047995-prv3923_cov.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Avengers By Brian Michael Bendis Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6948802-4166780590-77699.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Avengers Poster Book",
      "img": "",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Avengers: Ares",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6687261-7297606940-73053.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Avengers: Ares",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1006588-prv3649_cov.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Dark Avengers: Dark Avengers Assemble",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1053849-das.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Avengers: Masters of Evil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3148289-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Avengers: Molecule Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1157266-dark_avengers_volume_2_molecule_man_hc.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Avengers: The End Is The Beginning",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3480319-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Avengers/Uncanny X-Men: Exodus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/948806-exodus.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Avengers/Uncanny X-Men: Utopia",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2669876-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Days: The Casting",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5954185-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Days: The Forge",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5897069-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Days: The Forge/Casting Director's Cut",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6164806-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Days: The Road To Metal",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6429640-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Knight III: The Master Race",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4923763-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "9 Issues"
    },
    {
      "title": "Dark Knight III: The Master Race Collector's Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4945060-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "9 Issues"
    },
    {
      "title": "Dark Knight III: The Master Race Director's Cut",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5435822-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Knight Returns: The Golden Child",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7174830-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Knight Returns: The Last Crusade - The Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5586797-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Knights Rising: The Wild Hunt",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6280004-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Moon Rising - Batman & the Monster Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27470/518748-1_1mmen.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Dark Moon Rising - Batman and the Mad Monk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27470/518666-1_1madmonk.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Dark Nemesis (Villains)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1098843-479769_54924_20061210014220_large_super.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Nights: Metal",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6012380-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Dark Nights: Metal Director's Cut",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6203579-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Nights: Metal: Dark Knights Rising",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6477291-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Nights: Metal: The Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6458003-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Nights: Metal: The Resistance",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6486522-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Nights: The Batman Who Laughs",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6149520-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Nights: The Batman Who Laughs 1 (Special Edition)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7067480-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Reign Files",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6363704-4920610733-66254.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Reign: Accept Change",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1043971-acceptchange.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Reign: Deadpool/Thunderbolts",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1075544-yhst_23599503122488_2082_1951389.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Reign: Elektra",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1082866-1bb01b67_f1d4_487f_8d42_bc663d6ee9bc.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Reign: Elektra",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/792268-001.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Dark Reign: Fantastic Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/741338-drff_01_001.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Dark Reign: Fantastic Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4391379-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Reign: Fantastic Four Preview",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3038445-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Reign: Hawkeye",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2781829-200906_dark_reign_hawkeye__1___page_1.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Dark Reign: Hawkeye",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1287464-drkr__hwk.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Reign: Lethal Legion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3408011-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Dark Reign: Made Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52212/968830-drmmcov.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Reign: Mister Negative",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6535/842330-prv2818_cov.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Dark Reign: New Nation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/646679-dark_reign__001.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Reign: Sinister Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3408014-01a.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Dark Reign: Skrull Kill Krew",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6755372-9271739335-74116.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Reign: The Cabal",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/786440-cabal.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Reign: The Goblin Legacy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/901405-legacy.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Reign: The Hood",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/817824-001.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Dark Reign: The Hood",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5716482-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Reign: The List - Amazing Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1030675-drlistasm001_dc11_0001.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Reign: The List - Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/948800-list_avengers.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Reign: The List - Daredevil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3408023-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Reign: The List - Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/997485-prv3606_cov.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Reign: The List - Punisher",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1006601-prv3650_cov.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Reign: The List - Secret Warriors",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/982620-secret.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Reign: The List - Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1006609-prv3651_cov.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Reign: The List - X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48343/965380-num_risation0003.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Reign: The Sinister Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1075841-_bihjqoqbgk___kgrhgookjwejllmv5fdblm61_oimg___3.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Reign: The Underside",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4419757-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Reign: Young Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/25835/799223-dark_reign_young_avengers_20090506025741587.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Dark Reign: Young Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4447623-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Reign: Zodiac",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/2426430-cover.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Dark Tower Sketchbook",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1278200-the_gunslinger_born_sketchbook___page_1.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Tower: Battle of Jericho Hill",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2658125-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Dark Tower: End-World Almanac",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15455/460519-ewa.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Tower: Fall of Gilead",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/798561-1.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Dark Tower: Fall of Gilead",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5328451-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Tower: Guide To Gilead",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/772387-gtg_01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Tower: Gunslinger's Guidebook",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15829/309294-20562-123149-1-dark-tower-gunsling.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Tower: The Drawing of the Three - Bitter Medicine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5160010-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Dark Tower: The Drawing of the Three - Lady of Shadows",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4777989-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Dark Tower: The Drawing of the Three - The Sailor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5479408-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Dark Tower: The Drawing of the Three - The Sailor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5819615-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Tower: The Drawing of the Three: Lady of Shadows",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5102693-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Tower: The Gunslinger - Sheemie's Tale",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2871276-dark_tower_1_0001.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Dark Tower: The Gunslinger - So Fell Lord Perth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3226280-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Tower: The Gunslinger - The Battle of Tull",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74848/1912140-dark_tower_tg_tbot_01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Dark Tower: The Gunslinger - The Journey Begins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031881-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Tower: The Gunslinger - The Journey Begins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/1234124-dark_tower1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Dark Tower: The Gunslinger - The Man in Black",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/115366/2419367-tdt_1_thegroup_001.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Dark Tower: The Gunslinger - The Way Station",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2160169-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Dark Tower: The Gunslinger Born",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5328461-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Tower: The Gunslinger Born",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2658190-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "7 Issues"
    },
    {
      "title": "Dark Tower: The Gunslinger Born MGC",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2087468-dark_tower__the_gunslinger_born_v2007__1___part_one__2007_2____page_1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Tower: The Gunslinger: Battle of Jericho Hill",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5340440-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Tower: The Gunslinger: The Battle of Tull",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5340441-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Tower: The Gunslinger: Treachery",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5340442-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Tower: The Long Road Home",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5328464-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Tower: The Long Road Home",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2658207-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Dark Tower: The Sorcerer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/766940-1.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/850521-prv2876_cov.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "16 Issues"
    },
    {
      "title": "Dark X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1023318-dark.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Dark X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4462843-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dark X-Men: The Beginning",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/868446-1.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Dark X-Men: The Confession",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48343/965388-num_risation0005.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Darkdevil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/42123-6700-47794-1-darkdevil.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Darkhawk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6170196-51.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Darkhawk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/30571-4587-34018-1-darkhawk.jpg",
      "year": "1991",
      "publisher": "Marvel",
      "Field7": "50 Issues"
    },
    {
      "title": "Darkhawk Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/36267/729099-24693_20060930213420_large.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Darkhawk Classic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4161680-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Darkhold: Pages from the Book of Sins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/32518-4784-36271-1-darkhold-pages-from.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "16 Issues"
    },
    {
      "title": "Darkhold: Pages From the Book of Sins: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6623602-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Darkman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1273750-darkman_v1_001.jpg",
      "year": "1990",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Darkman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38826/774416-0000000000000000000.jpg",
      "year": "1990",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Darkman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38826/850227-00.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Darkseid (Villians)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/677132-54927_20060819000811_large.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Darkseid Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6034028-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Darkseid vs. Galactus: The Hunger",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/231209-19654-117870-1-darkseid-vs-galactu.jpg",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Darkstar & the Winter Guard",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6619571-1189523028-71319.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Darkstar & The Winter Guard",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54965/1252170-darkandwg1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Darkstars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/72626-7273-76321-1-darkstars.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "39 Issues"
    },
    {
      "title": "Darth Vader",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5886825-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "25 Issues"
    },
    {
      "title": "Darth Vader",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4383684-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "25 Issues"
    },
    {
      "title": "Darth Vader Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4955621-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Darth Vader Director's Cut",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4628675-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Darth Vader: Doctor Aphra: Halloween ComicFest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5521664-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dastardly & Muttley",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6045031-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Dastardly & Muttley",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6418901-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Date with Debbi",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/45846-2433-53191-1-date-with-debbi.jpg",
      "year": "1969",
      "publisher": "DC Comics",
      "Field7": "18 Issues"
    },
    {
      "title": "Daughters of the Dragon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3464/110056-18498-108601-1-daughters-of-the-dra.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Daughters of the Dragon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6685968-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Daughters of the Dragon: Deadly Hands Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/2522216-dau1.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daughters of the Dragon: Deep Cuts",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6797683-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Daughters of the Dragon: Samurai Bullets",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5790876-01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Day Of Judgment",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2948679-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Day of Judgment",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/41651-6604-47229-1-day-of-judgment.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Day of Judgment: Secret Files and Origins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/248973-19899-119121-1-day-of-judgment-sec.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Day of the Defenders",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50534/930449-day_of_the_defenders___00.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Day of Vengeance",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2642824-01.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Day of Vengeance",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27470/517151-day_of_vengeance_1.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Day of Vengeance: Infinite Crisis Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/19530/621007-350px_day_of_vengeance_special_1.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Daydreamers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/39132-5999-43999-1-daydreamers.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Dazzler",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4026826-d1.jpg",
      "year": "1981",
      "publisher": "Marvel",
      "Field7": "42 Issues"
    },
    {
      "title": "Dazzler",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/1242056-dazz1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dazzler #1: Facsimile Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6807719-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dazzler: X-Song",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6458004-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "DC 100-Page Super Spectacular",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/10159-2500-11183-1-dc-100-page-super-sp.jpg",
      "year": "1971",
      "publisher": "DC Comics",
      "Field7": "19 Issues"
    },
    {
      "title": "DC 2000",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/41657-6606-47235-1-dc-2000.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "DC and Marvel present  Superman and Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26163/587362-supermanspider_man.jpg",
      "year": "1981",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Challenge",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/23347-3442-26032-1-dc-challenge.jpg",
      "year": "1985",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "DC Collectibles Showcase 2016",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5076507-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics - The New 52 FCBD Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2326229-fcbd12_cvr_11.jpeg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Bombshells",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4706053-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "100 Issues"
    },
    {
      "title": "DC Comics Bombshells",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4741219-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "33 Issues"
    },
    {
      "title": "DC Comics Bombshells: Queens",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5909056-04.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Classics Library: Batman - A Death In the Family",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1656498-dcclassic.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Classics Library: Batman - The Annuals",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1665382-batmanannuals.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "DC Comics Classics Library: Legion of Super-Heroes - The Life and Death of Ferro Lad",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2064781-ferro_lad.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Classics Library: Roots of the Swamp Thing",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/1441493-11320_400x600.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Classics Library: Superman - Kryptonite Nevermore!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/2396837-kryptonitenvrm.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Classics Library: The Flash of Two Worlds",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/907338-hc.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Essentials: Action Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4390314-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Essentials: All-Star Superman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4131864-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Essentials: Batman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3497899-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Essentials: Batman And Robin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5066557-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Essentials: Batman Year One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4390317-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Essentials: Batman: Death of the Family",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5137203-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Essentials: Batman: Earth One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4226451-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Essentials: Batman: Hush",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4259163-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Essentials: Batman: The Black Mirror Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4390315-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Essentials: Batman: The Dark Knight Returns",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4013031-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Essentials: Batman: The Dark Knight Returns",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5078630-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Essentials: Batman: The Long Halloween",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4174323-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Essentials: DC: The New Frontier",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4987103-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Essentials: Final Crisis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4265279-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Essentials: Green Lantern",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3497900-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Essentials: Green Lantern: Rebirth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4240251-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Essentials: Identity Crisis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4289903-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Essentials: JLA",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4277149-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Essentials: Justice League",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3497901-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Essentials: Kingdom Come",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4156872-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Essentials: Superman - Earth One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4340131-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Essentials: Superman Unchained",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5102326-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Essentials: The Joker",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4315086-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Essentials: Watchmen",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3497902-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Essentials: Wonder Woman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3497903-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics on TV: Fall 2014 Graphic Novel Primer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4118588-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/16713-2943-18623-1-dc-comics-presents.jpg",
      "year": "1978",
      "publisher": "DC Comics",
      "Field7": "97 Issues"
    },
    {
      "title": "DC Comics Presents - Batman: Dark City, Dark Knight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1829024-dccpbatmandkdc.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/19505-3114-21776-1-dc-comics-presents-a.jpg",
      "year": "1982",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "DC Comics Presents Batman Adventures",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3993981-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents Batman/Catwoman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1453852-01.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents Green Lantern",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1444586-dc_comics_presents_green_lantern.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents Jack Cross",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1444581-dc_comics_presents_jack_cross.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Batman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1470625-dc_comics_presents_batman.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "DC Comics Presents: Batman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1017500-family_guy_dvd_blue_harvest.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Batman - Gotham Noir",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/61948/3789674-dc%20comics%20presents%20-%20batman%20-%20gotham%20noir%20%282011%29%20%28digital-empire%29%20001.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Batman - The Demon Laughs",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/2030982-jokerdemon.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Batman Arkham",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/2150794-batman_arkham.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Batman Beyond",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1541588-dccpbb1.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Batman Conspiracy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/1686588-969341.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Batman Irresistible",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/87073/1722442-dccomicspresentsbatmanirresistible.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Batman: Bad",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/2087674-dc_comics_presents_batman_bad.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Batman: Blaze of Glory",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2225078-blaze_of_glory.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Batman: Blink",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/2110064-235881_20111018053621_large.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Batman: Don't Blink",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/2110069-239195_20111130174628_large.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Batman: The Secret City",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/2150832-secret_city.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Batman: Urban Legends",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/2150888-urban_legends.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Brightest Day",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/1455301-947255.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "DC Comics Presents: Captain Atom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/2150835-captain_atom.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Chase",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/1490838-950651.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Elseworlds",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/2164389-dccpelseworlds.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Green Lantern",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/250962-19978-119420-1-dc-comics-presents.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Green Lantern - Fear Itself",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1667760-dccpglfearitself.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Green Lantern Willworld",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/47029/1834744-image__54_.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Harley Quinn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3621821-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Hawkman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1022000-preview_brian_pulido_s_unholy__2004____page_1.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Impulse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1877180-dccpimpulse.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Jack Kirby Omnibus Sampler",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74848/2150187-jack_kirby_omnibus_sampler.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: JLA",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1591172-dccpjla1.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: JLA: Heaven's Ladder",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1995948-dccpjlaheavensladder.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: JLA: The Age of Wonder",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/2054309-jlaageofw.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Justice League of America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1022011-preview_brian_pulido_s_unholy__2004____page_1.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Justice League of America - Black Baptism",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1876515-dccpjlablackbaptism.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Legion of Super-Heroes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1830783-dccplshdamned.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "DC Comics Presents: Lobo",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1611000-dccplobo.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Metal Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1945880-dccpmetalmen1.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Mystery in Space",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1022017-preview_brian_pulido_s_unholy__2004____page_1.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Night Force",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/2128983-night_force.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Ninja Boy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/2150784-ninja_boy.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Robin War 100-Page Spectacular",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4934521-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Shazam!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1954108-dccpshazam1.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "DC Comics Presents: Son of Superman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1810918-dccpsonofsupes.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Superboy's Legion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/2077665-dccpsl.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Superman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/1479377-949671.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "DC Comics Presents: Superman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1022021-preview_brian_pulido_s_unholy__2004____page_1.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Superman - Infestation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1878797-dccpsupermaninfestation.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Superman - Secret Identity",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/2077666-dccpssi.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "DC Comics Presents: Superman - The Kents",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/2107449-dccpkents.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "DC Comics Presents: Superman Adventures",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/2431717-dccpsadv.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Superman Sole Survivor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1636652-dccpsss1.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Superman: Lois & Clark 100-Page Super Spectacular",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4904818-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Superman/Doomsday",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1704391-dc_comics_presents_superman_doomsday_1.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Superman/Supergirl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/2381807-dc_comics_presents_superman_supergirl__1.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: T.H.U.N.D.E.R. Agents",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1602356-dccpta1.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Teen Titans",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/2150912-teen_titans.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: The Atom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/250967-19979-119421-1-dc-comics-presents.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: The Atom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1626102-dccptatom1.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: The Darkseid War 100-Page Spectacular",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4955623-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: The Demon Driven Out",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3817475-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: The Flash",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1821848-dccptheflash.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: The Flash",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1022025-preview_brian_pulido_s_unholy__2004____page_1.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: The Flash/Green Lantern: Faster Friends",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1489895-dccpflgff1.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: The Life Story of The Flash",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/2196495-dccpflash.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Titans Hunt 100-Page Super Spectacular",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4934522-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Wonder Woman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1701971-dccomicspresentsww.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Wonder Woman Adventures",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/2930558-dc_comics_presents_wonder_woman_adventures__2012__pagecover.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics Presents: Young Justice",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1483307-dc_comics_presents_young_justice_1.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "DC Comics Previews Catalog",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5122792-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "24 Issues"
    },
    {
      "title": "DC Comics Rarities Archives",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/2390393-dc1.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics The New 52",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2114830-dc52_dj_300.jpeg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics The New 52 Presents: The Dark",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/2169983-dark.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics The New 52 Villains Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498028-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics: Bombshells Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5419989-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics: Bombshells: Allies",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5316367-02.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics: Bombshells: Enlisted",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5075143-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics: Bombshells: The Death of Illusion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6091847-05.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics: Bombshells: The Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6582663-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "DC Comics: Bombshells: Uprising",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5755884-03.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics: Bombshells: War Stories",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6351120-06.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics: The Art of Darwyn Cooke",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6326192-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics: The Art of Jim Lee",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7158980-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics: The New 52",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1919723-dc_comics_the_new_52_1.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics: The Sequential Art of Amanda Conner",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/148518/2832636-seqamndacnnr.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics: Zero Year",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4184395-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics/Dark Horse Comics: Justice League",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5523032-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics/Dark Horse: Aliens",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5173545-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Comics/Dark Horse: Batman vs. Predator",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5896792-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Digital Comics Sneak Peeks",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/2434595-dc_digital_comics_sneak_peeks_20110511_pagecover.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "138 Issues"
    },
    {
      "title": "DC Entertainment Essential Graphic Novels And Chronology",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3368549-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Entertainment Essential Graphic Novels and Chronology 2014",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3887860-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Entertainment Essential Graphic Novels and Chronology 2015",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4354842-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Essential Graphic Novels 2016",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5051020-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Essential Graphic Novels 2017",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5641829-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Essential Graphic Novels 2018",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6134441-4152654040-59487.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Essential Graphic Novels 2019",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6633125-2019.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC First: Batgirl/Joker",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/978/87658-18099-105999-1-dc-first--batgirl-j.JPG",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC First: Flash/Superman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1147934-dc1st___superman___flash__01_.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC First: Green Lantern/Green Lantern",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1271309-p00001.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC First: Superman/Lobo",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3586756-01.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Ghosts Giant",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7125236-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Goes Ape",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1820381-dcgoespae.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Graphic Novel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/1078742-dc_graphic_novel_01_star_raiders_00.jpg",
      "year": "1983",
      "publisher": "DC Comics",
      "Field7": "7 Issues"
    },
    {
      "title": "DC Holiday Nightmares",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7133548-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Holiday Special 2017",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6178629-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC House of Horror",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6113374-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Infinite Halloween Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/228087-19596-117519-1-dc-infinite-hallowee.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Ink Sampler",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11134/111349471/6479920-dc%20ink%20sampler.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Justice League Essentials: Aquaman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5960891-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Justice League Essentials: Batman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5960893-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Justice League Essentials: Cyborg",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5960894-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Justice League Essentials: Justice League",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5960896-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Justice League Essentials: Superman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5960897-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Justice League Essentials: The Flash",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5960895-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Kids Mega Sampler",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/797412-dck_01.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "DC Meets Hanna-Barbera",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6060367-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "DC Meets Looney Tunes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6280005-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Nation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2774232-01.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "DC Nation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6408242-00.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "7 Issues"
    },
    {
      "title": "DC Nation FCBD Super Sampler",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3021700-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Nation FCBD Super Sampler/Superman Family Adventures Flip Book",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/2326271-fcbdsupesfamilyflip.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Nation Super Sampler: Teen Titans Go!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3816321-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Nuclear Winter Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6704341-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC One Million",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/24925/478152-dc_one_million__1__1998_11____page_1.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "DC One Million 80-Page Giant",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48250/925659-dc_one_million_80_page_giant.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC One Million Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3413298-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Poster Portfolio: Frank Cho",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7151418-5595126143-81890.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Poster Portfolio: Jim Lee",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7074780-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Poster Portfolio: Joshua Middleton",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7240264-01.jpg",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "0 Issues"
    },
    {
      "title": "DC Poster Portfolio: Stanley Artgerm Lau",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6965800-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Previews",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6408268-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "22 Issues"
    },
    {
      "title": "DC Primal Age",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6775905-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Rebirth Holiday Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5588935-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Rebirth Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5575847-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Releases",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/5965254-dc%20releases%20%2332%201.jpg",
      "year": "",
      "publisher": "DC Comics",
      "Field7": "17 Issues"
    },
    {
      "title": "DC Retroactive: Batman - The '70s",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1917750-dcrbm70_cv1_copy.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Retroactive: Batman - The '80s",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1940466-dcrbm80_cv1.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Retroactive: Batman - The '90s",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1966278-dcrbm90_cv1_copy.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Retroactive: Flash - The '90s",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1966294-dcrfls90_cv1_copy.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Retroactive: Green Lantern - The '70s",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1967488-01.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Retroactive: Green Lantern - The '80s",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1956784-dc_retro_gl_80s__0000.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Retroactive: Green Lantern - The '90s",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1977634-dc_retro_gl_90s.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Retroactive: JLA - The '70s",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1928945-dcrjla70_cv1_copy.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Retroactive: JLA - The '80s",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1955468-dcrjla80_cv1.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Retroactive: JLA - The '90s",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/83283/1979304-00.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Retroactive: Superman - The '70s",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1928352-dcrsm70_cv1_copy.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Retroactive: Superman - The '80s",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1955323-dcrsm80_cv1.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Retroactive: Superman - The '90s",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1976585-dcrsm90_cv1_copy.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Retroactive: The Flash - The '70s",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1917758-dcrfls70_cv1_copy.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Retroactive: The Flash - The '80s",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1940579-dcrfls80_cv1.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Retroactive: Wonder Woman - The '70s",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1917759-dcrww70_cv1_copy.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Retroactive: Wonder Woman - The '80s",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1940580-dcrww80_cv1_copy.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Retroactive: Wonder Woman - The '90s",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/92932/1970031-wwretro.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sampler",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62392/2453616-dcsampler1.jpg",
      "year": "1983",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "DC Science Fiction Graphic Novels",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/1177469-dcsf1.jpg",
      "year": "1985",
      "publisher": "DC Comics",
      "Field7": "7 Issues"
    },
    {
      "title": "DC Silver Age Classics Detective Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70196/2941015-225_01.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "DC Silver Age Classics Green Lantern",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/47697/2110256-dc_silver_age_classics_green_lantern.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Silver Age Classics Showcase 4",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/73761/1563937-dc_silver_age_classics_showcase_4.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Silver Age Classics The Brave and the Bold",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3074324-dc%20silver%20age%20classics-brave%20and%20the%20bold%20v1992%20028%20%281992%29%20pagecover.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Silver Age Classics: Action Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70196/2944717-sac_action_252_00fc.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Silver Age Classics: Adventure Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70196/2944718-adv_247_00fc_reprint.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Silver Age Classics: House of Secrets 92",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11113/111133305/3650555-hos092-00fc.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Silver Age Classics: Sugar and Spike",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/129499/3092148-sugar_spike_99-00fc.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Action Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4556404-action%20comics.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: All-Star Section 8",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4544648-section%20eight.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Aquaman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4556406-aquaman.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Bat-Mite",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4556410-bat-mite.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Batgirl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4584272-batgirl.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Batman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4584273-batman.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Batman Beyond",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4570449-batman%20beyond.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Batman/Superman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4570450-batsup.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Bizarro",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4556411-bizarro.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Black Canary",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4584274-black%20canary.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Catwoman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4570451-catwoman.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Constantine: The Hellblazer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4584275-constantine.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Cyborg",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4584276-cyborg.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Deathstroke",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4556412-deathstroke.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Detective Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4544630-detective%20comics.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Doomed",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4544632-doomed.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Dr. Fate",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4556413-dr.%20fate.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Earth 2: Society",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4584277-earth%202.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Gotham Academy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4570452-gotham%20academy.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Gotham by Midnight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4556414-gotham%20by%20midnight.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Grayson",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4570453-grayson.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Green Arrow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4544635-green%20arrow.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Green Lantern",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4544636-green%20lantern.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Green Lantern: The Lost Army",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4556417-green%20lantern%20lost%20army.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Harley Quinn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4584279-harley.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Justice League",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4584280-jl.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Justice League 3001",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4556418-jl%203001.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Justice League United",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4584281-jlu.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Lobo",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4556419-lobo.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Martian Manhunter",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4570454-marian.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Midnighter",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4544637-midnighter.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: New Suicide Squad",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4570455-new%20suicide.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Prez",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4544644-prez.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Red Hood/Arsenal",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4544645-red%20hood.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Robin: Son of Batman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4570456-robin.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Secret Six",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4570457-secret%20six.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Sinestro",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4584282-sinestro.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Starfire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4544650-starfire.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Superman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4584283-superman.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Superman/Wonder Woman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4584285-supermanwonder.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: Teen Titans",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4570458-teen%20titans.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: The Flash",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4584278-flash.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: The Omega Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4544641-omega%20men.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Peek: We Are Robin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4584286-we%20are%20robin.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Sneak Previews",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/148518/2978271-61430_20060919131122_large.jpg",
      "year": "1991",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/354289-2392-127307-1-dc-special.jpg",
      "year": "1968",
      "publisher": "DC Comics",
      "Field7": "15 Issues"
    },
    {
      "title": "DC Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/354294-2730-127310-1-dc-special.jpg",
      "year": "1975",
      "publisher": "DC Comics",
      "Field7": "14 Issues"
    },
    {
      "title": "DC Special Blue Ribbon Digest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/18061-3032-20211-1-dc-special-blue-ribb.jpg",
      "year": "1980",
      "publisher": "DC Comics",
      "Field7": "24 Issues"
    },
    {
      "title": "DC Special Series",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/15261-2886-17013-1-dc-special-series.jpg",
      "year": "1977",
      "publisher": "DC Comics",
      "Field7": "27 Issues"
    },
    {
      "title": "DC Special: Cyborg",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/458213-dcc_01.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "DC Special: Raven",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/325038-20830-124849-1-dc-special-raven.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "DC Special: The Return of Donna Troy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3302/374782-21375-129103-1-the-return-of-donna.JPG",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "DC Spotlight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51078/998434-dc1.jpeg",
      "year": "1985",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Super Friends",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/334797-21000-125707-1-super-friends.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "29 Issues"
    },
    {
      "title": "DC Super Hero Girls 2017 Halloween Comic Fest Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6124908-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Super Hero Girls Free Comic Book Day 2018 Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6413939-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Super Hero Girls Giant",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7142264-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "DC Super Hero Girls Halloween Fest Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5503925-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Super Hero Girls Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5837367-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Super Hero Girls Wonder Woman Day Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5893336-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Super Hero Girls: At Metropolis High",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7100348-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Super Hero Girls: At Metropolis High (Halloween ComicFest Special Edition)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7074760-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Super Hero Girls: Batman Day 2017 Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6061015-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Super Hero Girls: Date With Disaster!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6254352-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Super Hero Girls: Finals Crisis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5290748-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Super Hero Girls: Hits and Myths",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5511209-02.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Super Hero Girls: Out of the Bottle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5800784-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "DC Super Hero Girls: Out of the Bottle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6538871-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Super Hero Girls: Past Times At Super Hero High",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6069427-04.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Super Hero Girls: Past Times at Super Hero High",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5471627-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "DC Super Hero Girls: Search For Atlantis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6623604-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Super Hero Girls: Spaced Out",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6152573-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "13 Issues"
    },
    {
      "title": "DC Super Hero Girls: Summer Olympus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5909057-03.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Super Hero Girls: Weird Science",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6866827-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "14 Issues"
    },
    {
      "title": "DC Super Stars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/14424-2836-16130-1-dc-super-stars.jpg",
      "year": "1976",
      "publisher": "DC Comics",
      "Field7": "18 Issues"
    },
    {
      "title": "DC Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3664/373135-21352-129019-1-dc-universe.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Universe by Alan Moore",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2243975-dcumoore_hc_dustjacket.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Universe by John Byrne",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6184484-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Universe Christmas",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1656108-dcuxmas.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Universe Holiday Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26476/646896-dcuholliday001.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Universe Holiday Special '09",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/1059145-cov.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Universe Online",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1615269-dcu_online__000.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Universe Online Legends",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1649050-dcuol_1_legion_cps_002.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "27 Issues"
    },
    {
      "title": "DC Universe Online Legends",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2245615-20567_900x1350.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "DC Universe Presents",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2083868-01.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "20 Issues"
    },
    {
      "title": "DC Universe Presents: Black Lightning and Blue Devil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3664123-03.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Universe Presents: Featuring Deadman and Challengers of the Unknown",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3485592-01.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Universe Presents: Vandal Savage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3321427-02.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Universe Rebirth Omnibus: Expanded Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6050252-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Universe Special: Justice League of America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/420096-2cf8n83.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Universe Special: Reign in Hell",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/101735/1862710-dc_universe_special_reign_in_hell_cover.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Universe Special: Superman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/101735/1862711-dc_universe_special_superman_cover.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Universe vs. Masters of the Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4057890-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Universe vs. Masters of the Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3284763-dcu%2001.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "DC Universe: Decisions",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/547220-0002.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "DC Universe: Illustrated by Neal Adams",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4062339-01.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Universe: Last Will And Testament",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/686595-dcu_lwnt.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Universe: Legacies",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2334404-21477_900x1350.jpeg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Universe: Legacies",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1232268-0.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "10 Issues"
    },
    {
      "title": "DC Universe: Origins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1616968-origins.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Universe: Rebirth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5219841-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Universe: Rebirth The Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5544294-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Universe: Secret Origins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2961745-01.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Universe: The Bronze Age Omnibus by Jack Kirby",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7016187-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Universe: The Stories of Alan Moore",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/250980-19980-119422-1-dc-universe-the-sto.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Universe: Trinity",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/33672-4958-37602-1-dc-universe-trinity.jpg",
      "year": "1993",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "DC Versus Marvel / Marvel Versus DC Consumer Preview",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3903416-dc%20versus%20marvel%20marvel%20versus%20dc%20consumer%20preview%20001%20%281995%29%20pagecover.jpg",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Villains Giant",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7100349-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC vs. Marvel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54045/1153626-dc_vs_marvel.png",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "DC Zoom Sampler",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11134/111349471/6479919-dc%20zoom%20sampler.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC: The New Frontier",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3454837-01.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "DC: The New Frontier",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/60967-10939-93962-1-dc-the-new-frontier.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "DC: The New Frontier (DC Black Label Edition)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6806379-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC: The New Frontier Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4384980-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC's Beach Blanket Bad Guys Summer Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6529646-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC's Crimes of Passion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7233221-01.jpg",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC's Greatest Imaginary Stories",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/250984-19981-119423-1-dc-s-greatest-imagin.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "DC's Year of the Villain Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6913009-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC/Looney Tunes 100-Page Spectacular",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5893066-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC/Marvel Crossover Classics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/61269/1293941-random.jpg",
      "year": "1991",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "DC/Marvel: All Access",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/38342-5910-43065-1-dc--marvel-all-acce.jpg",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "DC/Top Cow: Crossover Classics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2083343-dc_top_cow.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DC/Wildstorm: Dreamwar",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/308/365522-21292-128357-1-dc-wildstorm-dreamw.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "DC/Young Animal: Milk Wars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6467846-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DCeased",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7152276-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DCeased",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6913048-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "DCeased (Halloween ComicFest Special Edition)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7074759-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DCeased: A Good Day To Die",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7059730-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DCU Halloween Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26476/593243-dcuhalloween001.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DCU Halloween Special '09",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52820/999971-aug090141d.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DCU Halloween Special 2010",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1468128-scanned_image_6_4.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DCU Heroes Secret Files",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/46951/982573-dcuheroessfno001.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DCU Holiday Bash",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/986508-47714_20061121001127_large.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "DCU Holiday Special 2010",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1552336-p00001.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DCU Infinite Holiday Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/986524-dcu__infinite_holiday_special___a_hector_hammond_christmas__1__2007_2____page_1.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "DCU Villains Secret Files and Origins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27836/966148-dcu_villains_secret_files_1.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "De La Soul Is Dead",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/128927-18651-110044-1-de-la-soul-is-dead.JPG",
      "year": "1991",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dead Island",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11113/111133305/4929502-dead%20island%20custom%20comic%20%231%20%282011%29%20-%20page%201.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dead Man Logan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6703928-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Dead Man Logan: Sins of the Father",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6974960-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dead Man Logan: Welcome Back, Logan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7184466-02.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dead of Night",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/45294-2633-52524-1-dead-of-night.jpg",
      "year": "1973",
      "publisher": "Marvel",
      "Field7": "11 Issues"
    },
    {
      "title": "Dead Rising 3",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3905322-dead%20rising%203%20001%20%282013%29%20pagecover.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Dead Romeo",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38826/1079404-0deadromeo.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Dead Romeo",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1092924-deadromeo.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadline",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/70527-11801-103525-1-deadline.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Deadly Foes of Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/30761-4588-34233-1-deadly-foes-of-spide.jpg",
      "year": "1991",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Deadly Hands of Kung Fu: Out Of The Past",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4162335-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadly Hands of Kung-Fu",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3817512-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Deadman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2658218-01.jpg",
      "year": "1986",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Deadman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6123807-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Deadman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6548897-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/22805-3443-25443-1-deadman.jpg",
      "year": "1985",
      "publisher": "DC Comics",
      "Field7": "7 Issues"
    },
    {
      "title": "Deadman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2658232-01.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "9 Issues"
    },
    {
      "title": "Deadman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1834776-deadv1_cv_copy.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Deadman by Kelley Jones: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6029053-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadman Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1726317-deadman_collection.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadman: Dark Mansion of Forbidden Love",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5873078-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadman: Dark Mansion of Forbidden Love",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5470240-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Deadman: Dead Again",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/54910-9398-76361-1-deadman-dead-again.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Deadman: Exorcism",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2658245-01.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Deadman: Kelley Jones Gallery Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5822789-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadman: Lost Souls",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51078/997373-deadman1.jpeg",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Deadman: Love After Death",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2658251-01.jpg",
      "year": "1989",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Deadpool",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6458005-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "15 Issues"
    },
    {
      "title": "Deadpool",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7153351-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "2 Issues"
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