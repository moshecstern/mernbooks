const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/comicbookdb"
  );


const comicvinevolumesSeed = 

[
    {
      "title": "Scare Tactics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/3614116-%24%28kgrhqrhjeufdjv%28vcusbqymmukzlg~~60_57.jpg",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Scarecrow (Villains)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/677135-47395_20070103105651_large.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Scarlet",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6903187-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Scarlet",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6584077-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Scarlet Spider",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3501562-01a.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "26 Issues"
    },
    {
      "title": "Scarlet Spider",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/607829-scarlets1a.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Scarlet Spider Unlimited",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/607825-scarletunlimited1a.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Scarlet Spider: Into the Grave",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3767716-04.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Scarlet Spider: Life After Death",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2870951-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Scarlet Spider: Lone Star",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031816-02.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Scarlet Spider: The Big Leagues",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3545463-03.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Scarlet Spiders",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4240298-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Scarlet Witch",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4945090-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "15 Issues"
    },
    {
      "title": "Scarlet Witch",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/62659-5323-95655-1-scarlet-witch.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Scarlet Witch: The Final Hex",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5808959-03.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Scarlet Witch: Witches' Road",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5315357-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Scarlet Witch: World of Witchcraft",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5658718-02.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Scarlett",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/73867-9255-73196-1-scarlett.jpg",
      "year": "1993",
      "publisher": "DC Comics",
      "Field7": "14 Issues"
    },
    {
      "title": "Science Of Superman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/617275-science1.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Scooby Apocalypse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5226131-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "36 Issues"
    },
    {
      "title": "Scooby Apocalypse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5677336-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Scooby Apocalypse and Hanna-Barbera Special Preview Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/5359985-scooby%20apocalypse%20and%20hanna-barbera%20special%20preview%20edition%20%231.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Scooby Apocalypse/Hanna-Barbera Halloween Comics Fest Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5503968-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Scooby Doo: Ruh-Roh!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2083180-ruh_roh.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Scooby Doo: You Meddling Kids!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2083179-you_meddling_kids.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Scooby-Doo",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/62663-2913-95659-1-scooby-doo.jpg",
      "year": "1977",
      "publisher": "Marvel",
      "Field7": "9 Issues"
    },
    {
      "title": "Scooby-Doo",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/1263881-sd1.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Scooby-Doo Spooky Spectacular",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/1255491-sd1.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Scooby-Doo Spooky Spectacular 2000",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/1256779-sdss1.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Scooby-Doo Spooky Summer Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/1257838-sd1.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Scooby-Doo Super Scarefest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/1259392-sdss1.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Scooby-Doo Team-Up",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4412538-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Scooby-Doo Team-Up",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3455395-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "50 Issues"
    },
    {
      "title": "Scooby-Doo Team-Up: Doomed!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7031470-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Scooby-Doo Team-Up: It's Scooby Time!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7218279-08.jpg",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Scooby-Doo, Where Are You?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1391787-scooby_doo_where_are_you_1.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "102 Issues"
    },
    {
      "title": "Scooby-Doo: All Wrapped Up!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2083181-all_wrapped_up.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Scooby-Doo: Space Fright!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2083182-space_fright.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Scooby-Doo: Surf's Up!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2083187-surf_s_up.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Scooby-Doo: The Big Squeeze!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2083183-the_big_squeeze.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Scooby-Doo!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/462/137753-18731-110701-1-scooby-doo.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "159 Issues"
    },
    {
      "title": "Scooby-Doo! 50th Anniversary Giant",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7083445-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Scooby-Doo! Presented by Burger King",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/1260450-sd1.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Scooby-Doo! Team-Up",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3464439-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "100 Issues"
    },
    {
      "title": "Scooby-Doo's Greatest Adventures",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7059426-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Scorpio Rising",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6249145-0899594742-62918.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Scorpion: Poison Tomorrow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1296076-scr__pt.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Scratch",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/65847-11256-98844-1-scratch.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Scream: Curse of Carnage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7161565-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Screwtape Letters",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1364865-screwtape_letters.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Scribblenauts Unmasked: A Crisis of Imagination",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3484241-91ulizp3khl._sl1500_.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "18 Issues"
    },
    {
      "title": "Scribblenauts Unmasked: A Crisis of Imagination",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4383720-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Scribblenauts Unmasked: A Crisis of Imagination",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3590585-01a.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "9 Issues"
    },
    {
      "title": "Scribbly",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67581/1238247-01464_scribbly__1___page_1.jpg",
      "year": "1948",
      "publisher": "DC Comics",
      "Field7": "15 Issues"
    },
    {
      "title": "Sea Devils",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/5012-2033-5453-1-sea-devils.jpg",
      "year": "1961",
      "publisher": "DC Comics",
      "Field7": "35 Issues"
    },
    {
      "title": "Season One 2012 Guide",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/82159/2447331-scan0002.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Season One Guide",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/2063346-season_one_guide__2011_10____page_1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Season's Beatings",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730755-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Second Coming: Prepare",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52245/1140273-2nd_coming.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1242114-secret1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "39 Issues"
    },
    {
      "title": "Secret Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3690517-01a.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "15 Issues"
    },
    {
      "title": "Secret Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2867428-01a.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "16 Issues"
    },
    {
      "title": "Secret Avengers by Ed Brubaker: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6902133-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Avengers by Rick Remender",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2578553-_t2ec16nhjfoe9nh6npdqbqeysfwdmg__60_57.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Secret Avengers by Rick Remender: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6863640-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Avengers: Eyes of the Dragon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1904608-sa__eotd.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Avengers: God Level",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4655896-03.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Avengers: How To MA.I.M. A Mockingbird",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3970723-03.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Avengers: Iliad",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3826105-02.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Avengers: Let's Have A Problem",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4174344-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Avengers: Mission to Mars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1649647-sa__mtm.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Avengers: Reverie",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3273523-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Avengers: Run the Mission, Don't Get Seen, Save the World",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2287320-sa__rtmdgsstw.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Avengers: The Labyrinth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4471831-02.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Defenders",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/33122-5044-36977-1-secret-defenders-th.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "25 Issues"
    },
    {
      "title": "Secret Empire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6113423-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Empire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5808960-00.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "11 Issues"
    },
    {
      "title": "Secret Empire Free Previews Spotlight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5822810-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Empire Omega",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6050301-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Empire Prelude",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5819634-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Empire: Brave New World",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6164860-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Empire: Brave New World",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5884520-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Secret Empire: Underground",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5909111-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Empire: United",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5897096-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Empire: United We Stand",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6091906-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Empire: Uprising",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5873107-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Files and Origins Guide to the DC Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1150779-p00001.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Secret Hearts",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/952670-sh1.jpg",
      "year": "1949",
      "publisher": "DC Comics",
      "Field7": "153 Issues"
    },
    {
      "title": "Secret Invasion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/2743383-si1a.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "8 Issues"
    },
    {
      "title": "Secret Invasion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/970426-si.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Invasion Aftermath: Beta Ray Bill - The Green Of Eden",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/766895-001.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Invasion by Brian Michael Bendis Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6527899-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Invasion Chronicles",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1156218-165936_20090514161353_large.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Secret Invasion Director's Cut",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15455/461800-sidc.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Invasion Prologue",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3038421-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Invasion Saga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/323730-20804-124689-1-seccret-invasion-sag.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Invasion: Amazing Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4538651-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Invasion: Captain Marvel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/971309-si.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Invasion: Dark Reign",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/638004-secret_invasion_dark_regin_01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Invasion: Fantastic Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/387723-21574-130245-1-secret-invasion-fan.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Secret Invasion: Fantastic Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/971316-si.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Invasion: Front Line",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4609152-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Invasion: Front Line",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/433452-15wm7ua.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Secret Invasion: Home Invasion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5576762-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Invasion: Incredible Hercules",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3596197-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Invasion: Inhumans",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/495195-scan.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Secret Invasion: Inhumans",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4621113-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Invasion: New Warriors",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/960478-new_wrs.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Invasion: Requiem",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/656124-secret_invasion___requiem_01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Invasion: Rise of the Skrulls",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6527900-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Invasion: Runaways/Young Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4656006-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Invasion: Runaways/Young Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/426855-2q3btvk.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Secret Invasion: The Amazing Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/518312-000.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Secret Invasion: The Infiltration",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1227732-si.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Invasion: Thor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/495416-scan3.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Secret Invasion: Thor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4361981-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Invasion: War Machine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4656007-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Invasion: War Of Kings",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/674019-secret_invasion_war_of_kings_01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Invasion: Who Do You Trust?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/473321-immagine.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Invasion: Who Do You Trust?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5576756-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Invasion: X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/495415-secret_invasion__016.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Secret Invasion: X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4261034-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret of the Swamp Thing",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/2218535-swamp_thing.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Origin: Leaf Candy Mini Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3119670-secret%20origin%20of%20aquaman%20v1981%20001%20%281981%29%20pagecover.jpg",
      "year": "1980",
      "publisher": "DC Comics",
      "Field7": "8 Issues"
    },
    {
      "title": "Secret Origins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/129499/3122533-secretorigins1961-00fc.jpg",
      "year": "1961",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Origins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/23932-3616-26662-1-secret-origins.jpg",
      "year": "1986",
      "publisher": "DC Comics",
      "Field7": "50 Issues"
    },
    {
      "title": "Secret Origins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/11594-2620-12899-1-secret-origins.jpg",
      "year": "1973",
      "publisher": "DC Comics",
      "Field7": "7 Issues"
    },
    {
      "title": "Secret Origins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4383722-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Secret Origins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3773671-secret%20origin%2001.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "11 Issues"
    },
    {
      "title": "Secret Origins 80-Page Giant",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1147962-p00001.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Origins Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/24770-3807-27550-1-secret-origins-annua.jpg",
      "year": "1987",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Secret Origins of Super Villains",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/152345-18873-111563-1-secret-origins-of-su.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Origins of the World's Greatest Super-Heroes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/251226-20005-119457-1-secret-origins.jpg",
      "year": "1989",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Origins Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/251225-20004-119456-1-secret-origins-speci.jpg",
      "year": "1989",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Six",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2670713-01.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "36 Issues"
    },
    {
      "title": "Secret Six",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/25579/806903-1855_4_1.jpg",
      "year": "1968",
      "publisher": "DC Comics",
      "Field7": "7 Issues"
    },
    {
      "title": "Secret Six",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/476663-secret_six_01_page_01.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Secret Six",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4257231-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "14 Issues"
    },
    {
      "title": "Secret Six: Cat's Cradle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4838836-03.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Six: Cats in the Cradle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1626173-cats.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Six: Caution To the Wind",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5160041-04.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Six: Danse Macabre",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1440265-scanned_image_6.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Six: Depths",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1439369-scanned_image_6.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Six: Friends In Low Places",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5041620-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Six: Murder For Money",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4642801-02.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Six: Six Degrees of Devastation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/119711/2933787-51y_wauomol._sl500_.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Six: The Darkest House",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2174485-scanned_image_1.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Six: The Gauntlet",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5613470-02.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Six: The Reptile Brain",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1796144-ssixrb_cv_r2_copy.jpeg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Six: Unhinged",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1583528-secretsix_vol1_cvr.jpeg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Six: Villains United",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4383730-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Society of Super-Villains",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/14605-2845-16318-1-secret-society-of-su.jpg",
      "year": "1976",
      "publisher": "DC Comics",
      "Field7": "15 Issues"
    },
    {
      "title": "Secret War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/1231188-swtpb.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/98313-18234-106863-1-secret-war.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Secret War: From the Files of Nick Fury",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6350856-7582836279-66084.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Warps",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7084658-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Warps: Arachknight Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7016208-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Warps: Ghost Panther Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7009255-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Warps: Iron Hammer Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7023041-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Warps: Soldier Supreme Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6990918-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Warps: Weapon Hex Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7000489-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Warriors",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5850398-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Secret Warriors",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/14859/698527-sw__000.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "28 Issues"
    },
    {
      "title": "Secret Warriors Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2451288-h.png",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Warriors: God of Fear, God of War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1176861-sw.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Warriors: If Trouble Must Come",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6293862-02.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Warriors: Last Ride of the Howling Commandos",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1492305-sw__lrothc.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Warriors: Nick Fury, Agent of Nothing",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1148464-sw.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Warriors: Night",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3920590-05.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Warriors: Secret Empire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6091907-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Warriors: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7172309-4481272175-81727.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Secret Warriors: Wake the Beast",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1915652-wake_the_beast.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Warriors: Wheels Within Wheels",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4121335-06.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Wars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/116897/2197672-001.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Wars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2408585-e95798803a70949cc721af3ec1bcb238.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Wars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5102699-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Wars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4545264-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "9 Issues"
    },
    {
      "title": "Secret Wars 2099",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4584124-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Secret Wars 2099: Warzones!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4912423-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Wars II",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4553233-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Wars II",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/48080-3506-57516-1-secret-wars-ii.jpg",
      "year": "1985",
      "publisher": "Marvel",
      "Field7": "9 Issues"
    },
    {
      "title": "Secret Wars II Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1073470-swii.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Wars Journal",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4584125-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Secret Wars Journal/Battleworld",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5045264-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Wars June Previews",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4610232-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Wars May Previews",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4551702-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Wars Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/971832-sw.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Wars Prelude",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4545267-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Wars, Too",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4912426-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Wars, Too",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5408298-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Wars: Agents of Atlas",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4864613-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Wars: Armor Wars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4539685-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Wars: Battleworld",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4572735-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Secret Wars: Last Days of the Marvel Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5245355-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Wars: Official Guide To the Marvel Multiverse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4876876-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secret Wars: Secret Love",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/103431/4752959-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secrets of Haunted House",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/135577-2738-110492-1-secrets-of-haunted-h.jpg",
      "year": "1975",
      "publisher": "DC Comics",
      "Field7": "46 Issues"
    },
    {
      "title": "Secrets of Sinister House",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7100358-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Secrets of Sinister House",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47381-2554-56763-1-secrets-of-sinister-.jpg",
      "year": "1972",
      "publisher": "DC Comics",
      "Field7": "14 Issues"
    },
    {
      "title": "Secrets of the House of M",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/902177-shm.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Secrets of the Legion of Super-Heroes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/18735-3074-20951-1-secrets-of-the-legio.jpg",
      "year": "1981",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Secrets of Uncanny X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6686006-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Sectaurs",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/62672-3507-95668-1-sectaurs.jpg",
      "year": "1985",
      "publisher": "Marvel",
      "Field7": "8 Issues"
    },
    {
      "title": "Seeker 3000",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/523783-seeker30001.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Seeker 3000 Premiere",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/1404858-259355.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Sega Iron Man Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/2162595-sega_iron_man_special_v2008__1__2008_6____page_1.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Semper Fi",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/62675-4068-95671-1-semper-fi.jpg",
      "year": "1988",
      "publisher": "Marvel",
      "Field7": "9 Issues"
    },
    {
      "title": "Sensation Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/940979-86617_20070303093717_large.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Sensation Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/454947-sensation_comics_1.jpg",
      "year": "1942",
      "publisher": "DC Comics",
      "Field7": "109 Issues"
    },
    {
      "title": "Sensation Comics Featuring Wonder Woman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4492994-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Sensation Comics Featuring Wonder Woman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4027074-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "51 Issues"
    },
    {
      "title": "Sensation Comics Featuring Wonder Woman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4040833-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "17 Issues"
    },
    {
      "title": "Sensation Mystery",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67581/1245798-sensation_mystery__110___page_1.jpg",
      "year": "1952",
      "publisher": "DC Comics",
      "Field7": "7 Issues"
    },
    {
      "title": "Sensational She-Hulk by John Byrne",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6575586-9331014378-70735.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Sensational Spider-Man '96",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/21994/732828-1996.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Sensational Spider-Man Wizard Mini Comic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3150902-wizard%20mini%20comic%20%20-%20the%20sensational%20spiderman%20v1995%20003%20%281995%29%20pagecover.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Sensational Spider-Man: Feral",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2934625-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Sense & Sensibility",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1253921-sense_and_sensibility_1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Sense & Sensibility",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2934627-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Sentinel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2762983-sentinel__2005__01___00___fc.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Sentinel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/683284-st1.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Sentinel Squad O*N*E",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/569637-26635_20060129192809_large.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Sentinel Squad O*N*E: Tin-Can Heroes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1089086-78656_20080229012429_large.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Sentinel: No Hero",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1568537-snt__nh.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Sentinel: Past Imperfect",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1568544-snt__pim.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Sentinel: Salvage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1568534-snt__slv.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Sentry",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6486545-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Sentry",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/13340/299432-20454-122436-1-sentry.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "8 Issues"
    },
    {
      "title": "Sentry 1 (Rough Cut)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2850039-__addme___sentry_v9999__1___the_sentry__act_one__under_the_eye_of_the_clock___page_1.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Sentry: Age of the Sentry",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1228967-snt.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Sentry: Fallen Sun",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1225523-the_sentry_fallen_sun001.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Sentry: Man of Two Worlds",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730757-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Sentry: Reborn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5813235-01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Sergeant Bilko",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47394-1823-56776-1-sergeant-bilko.jpg",
      "year": "1957",
      "publisher": "DC Comics",
      "Field7": "18 Issues"
    },
    {
      "title": "Sergio Aragonés Destroys DC",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/395937-21667-130747-1-sergio-aragones-dest.jpg",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Sergio Aragones Massacres Marvel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/16529/1090893-ma.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Seven Soldiers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1613474-1.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Seven Soldiers By Grant Morrison Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6559469-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Seven Soldiers of Victory",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1613476-1.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Seven Soldiers of Victory",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3836134-01.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Seven Soldiers: Bulleteer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/971304-bulleteer_cover.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Seven Soldiers: Frankenstein",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27994/2587182-3rffubfx.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Seven Soldiers: Guardian",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1793504-ssg1.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Seven Soldiers: Klarion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/971172-klarion_cover.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Seven Soldiers: Mister Miracle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/2747/111523-18519-108706-1-seven-soldiers-mr.JPG",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Seven Soldiers: Shining Knight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/440006-seven_soldiers_shining_knight_1_00.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Seven Soldiers: Zatanna",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/308/260550-18517-108704-2-seven-soldiers-zata.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Sex, Lies, and Mutual Funds of the Yuppies From Hell",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1301230-sex__lies_and_mutual_funds_of_the_yuppies_from_hell___page_1.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Sgt. Bilko's Pvt. Doberman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67581/1254155-04552_sgt._bilko_s_pvt._doberman__1___page_1.jpg",
      "year": "1958",
      "publisher": "DC Comics",
      "Field7": "11 Issues"
    },
    {
      "title": "Sgt. Fury",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/5951-6724-6508-1-sgt-fury.jpg",
      "year": "1963",
      "publisher": "Marvel",
      "Field7": "120 Issues"
    },
    {
      "title": "Sgt. Fury & His Howling Commandos",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2029340-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Sgt. Fury and His Howling Commandos",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/13027-2132-14602-1-sgt-fury-and-his-ho.jpg",
      "year": "1974",
      "publisher": "Marvel",
      "Field7": "47 Issues"
    },
    {
      "title": "Sgt. Fury Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/7493-2237-8257-1-sgt-fury-annual.jpg",
      "year": "1965",
      "publisher": "Marvel",
      "Field7": "7 Issues"
    },
    {
      "title": "Sgt. Fury Epic Collection: The Howling Commandos",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6863641-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Sgt. Rock",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/15471-2890-17246-1-sgt-rock.jpg",
      "year": "1977",
      "publisher": "DC Comics",
      "Field7": "121 Issues"
    },
    {
      "title": "Sgt. Rock",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/30893-4566-34384-1-sgt-rock.jpg",
      "year": "1991",
      "publisher": "DC Comics",
      "Field7": "8 Issues"
    },
    {
      "title": "Sgt. Rock Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/19535-3123-21808-1-sgt-rock-annual.jpg",
      "year": "1982",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Sgt. Rock Archives",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/35506/699965-star15623.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Sgt. Rock Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/32500-4753-36250-1-sgt-rock-special.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Sgt. Rock Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/26108-4024-29001-1-sgt-rock-special.jpg",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "13 Issues"
    },
    {
      "title": "Sgt. Rock: The Lost Battalion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2072535-sgt_rock.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Sgt. Rock: The Lost Battalion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/610178-sr_01.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Sgt. Rock: The Prophecy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2072532-sgt._rock.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Sgt. Rock: The Prophecy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2194328-01.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Sgt. Rock's Prize Battle Tales",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1928226-strocksprizebattletales.jpg",
      "year": "1964",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Shade, The Changing Girl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5470276-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Shade, the Changing Girl: Earth Girl Made Easy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5949087-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Shade, The Changing Girl: Little Runaway",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6254375-02.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Shade, the Changing Girl/Wonder Woman Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6280810-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Shade, the Changing Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2194333-01.jpg",
      "year": "1977",
      "publisher": "DC Comics",
      "Field7": "8 Issues"
    },
    {
      "title": "Shade, The Changing Woman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6320661-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Shade, The Changing Woman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6753298-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Shado: Song of the Dragon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/43954-7170-51257-1-shado-song-of-the-d.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Shadow of the Batgirl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7231701-3584458456-83636.jpg",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Shadow of the Batman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/22607-3459-25224-1-shadow-of-the-batman.jpg",
      "year": "1985",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Shadowdragon Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1147963-p00001.jpg",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Shadowland",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1291911-shadowland_1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Shadowland",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1727992-shl.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Shadowland: After the Fall",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6063/1550986-prv7154_cov.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Shadowland: Blood On the Streets",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1333498-shadowlandbots_1_legion_cps_001.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Shadowland: Blood on the Streets",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1809321-sdl__bots.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Shadowland: Bullseye",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1323725-slbe001_dc11_lr_0001.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Shadowland: Daredevil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4261007-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Shadowland: Daughters of the Shadow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1344641-sldots_1_legion_cps_001.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Shadowland: Elektra",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1369773-prv6204_cov.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Shadowland: Ghost Rider",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1398343-shadowland_ghost_rider_1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Shadowland: Moon Knight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1355865-slmk_1_leraje_cps_001.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Shadowland: Moon Knight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1758823-shl__mk.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Shadowland: Power Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66616/1346149-slpm_1_legion_cps_001.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Shadowland: Power Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/141991/4554745-shadowland%20powerman.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Shadowland: Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/49117/1440356-shadowland_spider_man__1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Shadowland: Street Heroes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4609153-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Shadowland: Thunderbolts",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4621114-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Shadowmasters",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61321-4244-94316-1-shadowmasters.jpg",
      "year": "1989",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Shadowpact",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/1936952-cover.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "25 Issues"
    },
    {
      "title": "Shadowpact: Cursed",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/1998243-shadowpact2.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Shadowpact: Darkness and Light",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2077896-darkness_and_light.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Shadowpact: The Burning Age",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2513818-565371.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Shadowpact: The Pentacle Plot",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/1939193-shadowpact_the_pentacle_plot.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Shadows and Light",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/44634-7275-51682-1-shadows-and-light.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Shame Itself",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6063/2066410-prv10263_cov.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Shang-Chi Master of Kung-Fu Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5245528-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Shang-Chi: Master of Kung Fu One-Shot (B&W)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52245/980896-shang_chi_super1.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Shanna the She-Devil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4033767-shanna1nm9m054.jpg",
      "year": "1972",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Shanna the She-Devil: Survival of the Fittest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/162295-18952-112293-1-shanna-the-she-devil.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Shanna the She-Devil: Survival of the Fittest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1644221-stsd__sotf.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Share Your Universe Hulk: Agents of Smash",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3166242-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Share Your Universe Thor: God of Thunder",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3166249-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Share Your Universe: Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3166254-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Share Your Universe: Captain America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3166245-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Share Your Universe: Captain America & Thor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3166250-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Share Your Universe: Invincible Iron Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3166251-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Share Your Universe: Iron Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3166248-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Share Your Universe: Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3166246-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Share Your Universe: The Avengers!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3166199-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Share Your Universe: Thor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3166244-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Share Your Universe: Ultimate Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3166243-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Share Your Universe: Ultimate Spider-Man Premiere",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3166241-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Share Your Universe: Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3166252-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Share Your Universe: X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3166253-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Shattered Heroes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5739691-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Shatterstar",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6631624-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Shatterstar: Reality Star",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6893203-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Shazam: A Celebration of 75 Years",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4521655-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Shazam: The Greatest Stories Ever Told",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64684/1887626-shazamthegreateststoriesevertold.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Shazam!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6713279-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "10 Issues"
    },
    {
      "title": "Shazam!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/11595-2622-12900-1-shazam-.jpg",
      "year": "1973",
      "publisher": "DC Comics",
      "Field7": "35 Issues"
    },
    {
      "title": "Shazam!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3331087-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Shazam!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1636682-shazam__1__001.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Shazam! and the Shazam Family! Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3242601-shazam%21%20and%20the%20shazam%20family%20v2002%20001%20%282002%29%20pagecover.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Shazam! Family Archives",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2059314-shazam_family.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Shazam! The New Beginning",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/4777014-ccf%20shazam%20%231%2008302015.jpg",
      "year": "1987",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Shazam! The Power of Hope",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1246724-shazam____the_power_of_hope___page_1.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Shazam!: A New Beginning 30th Anniversary Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6173010-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Shazam!: Origins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6817763-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Shazam!: The Monster Society of Evil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6086920-9908958942-57938.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Shazam!: The Monster Society of Evil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/90456-18168-106386-1-shazam--the-monster.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Shazam!: The World's Mightiest Mortal",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6947215-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "She-Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/63787-11058-96783-1-she-hulk.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "She-Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/448626-she_hulk_01_00.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "38 Issues"
    },
    {
      "title": "She-Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3635364-01a.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "She-Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6135211-159.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "She-Hulk - Marvel Legacy Primer Pages",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6107782-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "She-Hulk Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7054360-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "She-Hulk by Dan Slott: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3638069-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "She-Hulk by Soule & Pulido: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730758-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "She-Hulk Sensational",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6535/1170552-senshehulk.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "She-Hulk: Cosmic Collision",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/631705-she_hulk_cosmic_collision__001.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "She-Hulk: Deconstructed",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5949089-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "She-Hulk: Disorderly Conduct",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4471834-02.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "She-Hulk: Here Today....",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4296424-07.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "She-Hulk: Jaded",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4285870-06.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "She-Hulk: Jen Walters Must Die",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6406902-03.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "She-Hulk: Lady Liberators",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4436369-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "She-Hulk: Law and Disorder",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4149761-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "She-Hulk: Laws of Attraction",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3984691-04.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "She-Hulk: Let Them Eat Cake",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6223167-02.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "She-Hulk: Planet Without A Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4079258-05.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "She-Hulk: Secret Invasion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4377146-08.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "She-Hulk: Single Green Female",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3642059-01.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "She-Hulk: Superhuman Law",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3699682-01.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "She-Hulk: Time Trials",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3856175-03.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "She-Hulks",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6535/1502039-shehulks1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "She-Hulks: Hunt For the Intelligencia",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5028073-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "She-Ra: Princess of Power Magazine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/19859/794396-01.jpg",
      "year": "1986",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Sheena",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/22417-3361-25008-1-sheena.jpg",
      "year": "1984",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Shell Collector Series - Superman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/6003656-she1.jpg",
      "year": "1980",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Sherlock Holmes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/58127/1183149-sherlock_holmes__1__of_1__dc_comics.jpg",
      "year": "1975",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "SHIELD",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/11630-2642-12935-1-shield-nick-fury-an.jpg",
      "year": "1973",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Shield By Steranko: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3626772-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "SHIELD: Nick Fury vs. SHIELD",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2131991-sld__nfvs.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Shogun Warriors",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/66844-3011-99841-1-shogun-warriors.jpg",
      "year": "1979",
      "publisher": "Marvel",
      "Field7": "20 Issues"
    },
    {
      "title": "Showcase",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52503/2598749-showcase_001.jpg",
      "year": "1956",
      "publisher": "DC Comics",
      "Field7": "104 Issues"
    },
    {
      "title": "Showcase '93",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/25579/528275-10379_4_001.jpg",
      "year": "1993",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Showcase '94",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38826/767723-00000000000000000000000000.jpg",
      "year": "1994",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Showcase '95",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/25579/528302-10020_4_001.jpg",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Showcase '96",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/25579/528842-10455_4_001.jpg",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Showcase Presents Weird War Tales",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2815920-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: Adam Strange",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1959418-adam_starage_1.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: All-Star Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/2015415-1.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: Ambush Bug",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1665199-ambushbug.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: Amethyst, Princess of Gemworld",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/148518/2826980-amethystshowcase.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: Aquaman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6535/1428121-aquaman1.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Showcase Presents: Bat Lash",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/871883-yhst_23599503122488_2062_451135453.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: Batgirl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1616928-showbatgrl.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: Batman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1641642-showbat.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Showcase Presents: Batman and The Outsiders",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/32599/1337277-_bjdsjpwbmk___kgrhquh_c0es_gvvtggblr8dhn8_w___12.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: Blackhawk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1665143-143139_20081008170309_large.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: Blue Beetle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4361909-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: Booster Gold",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/72648/1665648-bgshowcase.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: Brave and the Bold: Batman Team-Ups",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1649488-brveboldone.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Showcase Presents: Captain Carrot and His Amazing Zoo Crew",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4092596-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: Challengers Of The Unknown",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1928191-chalenge1.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Showcase Presents: DC Comics Presents - Superman Team-Ups",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/2194608-showcase_supes.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Showcase Presents: Dial H For Hero",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68452/1287029-showcase_presents_dial_h_for_hero.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: Doc Savage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1942607-doc_savage.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: Eclipso",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/938537-0.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: Enemy Ace",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1928194-enemyace.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: Ghosts",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/2194599-showcase_ghosts.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: Green Arrow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1656133-greenarrow.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: Green Lantern",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62697/1233871-300px_showcase_presents___green_lantern_vol_1_1.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Showcase Presents: Haunted Tank",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1928211-haunted1.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Showcase Presents: Hawkman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1820366-vol_1hawkman.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Showcase Presents: House Of Mystery",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68452/1287416-showcase_presents_001.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Showcase Presents: Jonah Hex",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68452/1287020-scan10007.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Showcase Presents: Justice League of America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2898763-01.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Showcase Presents: Legion of Super-Heroes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4293413-01.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Showcase Presents: Martian Manhunter",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1665335-martianmanhunter.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Showcase Presents: Men of War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3724464-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: Metal Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1959361-metal_men_1.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Showcase Presents: Metamorpho",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/32599/1380936-4371_400x600.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: Our Army At War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1942558-army_at_war.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: Phantom Stranger",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1641765-phantom.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Showcase Presents: Robin, the Boy Wonder",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1220326-116778_20080109203859_large.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: Secrets of Sinister House",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1641875-sinister.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: Sgt. Rock",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1942572-sgt_rock_1.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Showcase Presents: Shazam!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1709510-shazam.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: Showcase",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2453232-sp_showc_v1_cvr_r4.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: Strange Adventures",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3507808-01.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Showcase Presents: Super Friends",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3833217-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: Superman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1641927-showcasepsupermanvol1.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Showcase Presents: Superman Family",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3031703-01.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Showcase Presents: Tales of the Unexpected",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2556801-01.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: Teen Titans",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1641572-teentitans1.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Showcase Presents: The Doom Patrol",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/904966-2009.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Showcase Presents: The Elongated Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/35506/702555-5440_400x600.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: The Flash",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1709368-theflash1.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Showcase Presents: The Great Disaster Featuring The Atomic Knights",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3905121-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: The House of Secrets",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1641839-housesecre.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Showcase Presents: The Losers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2288940-sp_lsrsv1_cvr_r4.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: The Sea Devils",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2361788-spsd_cvr_r3.jpeg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: The Spectre",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/58820/2508425-showcase_presents_the_spectre_vol1_657x1024.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: The Trial of the Flash",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1959384-showcase_trial_flash.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: The Unknown Soldier",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1928207-unknown.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Showcase Presents: The War That Time Forgot",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1942551-war_time.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: The Warlord",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/148518/2904164-showcase_pre_warlrd.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: The Witching Hour",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1825291-showcasehour.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Showcase Presents: Wonder Woman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1061246-355478.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Showcase Presents: Young Love",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2241515-showcase_presents_young_love_vol1_tp_660x1024.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Shuri",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6651002-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "10 Issues"
    },
    {
      "title": "Shuri: 24/7 Vibranium",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7066217-02.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Shuri: The Search For Black Panther",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6903189-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Sideways",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6280811-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "13 Issues"
    },
    {
      "title": "Sideways Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6678539-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Sideways: Rifts and Revelations",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7039274-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Sideways: Steppin' Out",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6650825-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Sidewise",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/47162/1108830-sp_poster_2_final.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Siege",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4685135-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Siege",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1084030-siege001_dc11_0001.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Siege",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1351642-sieg.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Siege Director's Cut",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1162332-p00001___director_s_cut_siege__1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Siege Oversized Hardcover Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2135456-sge__osz_hc.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Siege Prelude",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6741020-0460231868-74038.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Siege: Avengers: The Initiative",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4502678-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Siege: Battlefield",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1408735-sge__btf.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Siege: Battleworld",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5069796-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Siege: Captain America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/1189105-casiege.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Siege: Dark Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1410763-sge__da.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Siege: Embedded",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1084045-prv4158_cov.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Siege: Embedded",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1349764-sieg_emb.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Siege: Loki",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/1189082-loki.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Siege: Mighty Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1410823-sge__ma.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Siege: Secret Warriors",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1207886-siege_secret.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Siege: Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48343/1198952-num_risation0007.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Siege: Storming Asgard –– Heroes & Villains",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1107805-yhst_23599503122488_2091_801917246.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Siege: The Cabal",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1047325-siege.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Siege: Thor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031823-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Siege: Thunderbolts",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4471494-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Siege: X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5045430-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Siege: Young Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/1189139-siegeya.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Sif",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5551/1199938-692a2335_a26a_4b76_89ff_3fc8ed1ac6c9.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Sif: Journey into Mystery - The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7235128-3861790755-83279.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Sigil: Out Of Time",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5074001-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Silent War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3669084-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Silent War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/308/87777-18107-106025-1-silent-war.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Silk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4923803-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "19 Issues"
    },
    {
      "title": "Silk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4398330-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "7 Issues"
    },
    {
      "title": "Silk: Sinister",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5211105-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Silk: The Clone Conspiracy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5996349-03.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Silk: The Life and Times of Cindy Moon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4883679-00.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Silk: The Negative",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5601636-02.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Silly Putty Man vs. The Space Pirates",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/2896350-sill1.jpg",
      "year": "1978",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Silver Age",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3416744-01.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Silver Age 80-Page Giant",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3416748-01.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Silver Age Classics: Showcase 22",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62697/1261440-300px_dc_silver_age_classics_showcase_22.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Silver Age Secret Files & Origins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3416747-01.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Silver Age: Challengers Of The Unknown",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3416756-01.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Silver Age: Dial H For Hero",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3416754-01.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Silver Age: Doom Patrol",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3416753-01.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Silver Age: Green Lantern",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3416767-01.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Silver Age: Justice League of America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3416760-01.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Silver Age: Showcase",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3416752-01.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Silver Age: Teen Titans",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3416750-01.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Silver Age: The Brave And The Bold",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3416757-01.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Silver Age: The Flash",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3416765-01.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Silver Sable and the Wild Pack",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6153018-36.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Silver Sable and the Wild Pack",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2478943-silversable01.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "35 Issues"
    },
    {
      "title": "Silver Surfer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5008166-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "14 Issues"
    },
    {
      "title": "Silverblade",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/25669-3811-28527-1-silverblade.jpg",
      "year": "1987",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Simon Dark",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1993100-01.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "18 Issues"
    },
    {
      "title": "Simon Dark",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/53928/1479415-simon_259x400.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Sinestro",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3760977-sinestro.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "23 Issues"
    },
    {
      "title": "Sinestro Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4479019-stk666663.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Sinestro Corps Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/141465-18797-111101-1-sinestro-corps-speci.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Sinestro: Futures End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4114533-sinestro.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Sinestro: Rising",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5041624-03.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Sinestro: Sacrifice",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4670616-02.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Sinestro: The Demon Within",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4328751-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Sinestro: The Fall of Sinestro",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5559790-04.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Sinestro: Year of the Villain",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7032318-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Sins of Youth:  Batboy and Robin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70461/1285799-batboyscan.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Sins of Youth: Aquaboy/Lagoon Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48791/1372750-aquaboy1.gif",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Sins of Youth: JLA, Jr.",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1147965-p00001.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Sins of Youth: Kid Flash and Impulse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1271359-p00001.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Sins of Youth: Secret Files and Origins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/1277346-sinssecretfiles.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Sins of Youth: Starwoman & The JSA Jr.",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1487142-p00001.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Sins of Youth: Superman Jr. & Superboy Sr.",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/927512-sins.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Sins of Youth: The Secret and Deadboy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70196/1280542-sins_of_youth_11_of_12_00fc.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Sins of Youth: Wonder Girls",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1271322-p00001.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Six Guns",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/73936/2075707-six_guns_001__2012__pagecover.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Six Guns",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2352024-sg.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "SixPack and Dogwelder: Hard Travelin' Heroz",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6006879-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Sixpack and Dogwelder: Hard-Travelin' Heroz",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5398350-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Skaar: King of the Savage Land",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2099848-skr__kotsl.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Skaar: King of the Savage Land",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50099/1758447-skaar1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Skaar: Son of Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/17892/427241-bigtalk-SkaarSonOfHulk-001A-2008-Marvel.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Skaar: Son of Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5028069-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Skaar: Son of Hulk Presents - Savage World of Sakaar",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/558377-0006.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Skaar: Son of Hulk: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6895568-3978361149-76111.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Skeleton Warriors",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6535/1687525-skeletonwarriors1.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Skreemer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/28103-4211-31187-1-skreemer.jpg",
      "year": "1989",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Skrull Kill Krew",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/778781-skk_01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Skrull Kill Krew",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/401200-21706-130939-1-skrull-kill-krew.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Skrulls Must Die! - The Complete Skrull Kill Krew",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4512025-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Skrulls vs. Power Pack",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/475739-skrullsvspowerpack1.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Skrulls!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/472308-2uzy0w5.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Skull & Bones",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/43183-6954-49349-1-skull-amp-bones.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Skull The Slayer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4501827-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Skull the Slayer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4026664-tnsk1.jpg",
      "year": "1975",
      "publisher": "Marvel",
      "Field7": "8 Issues"
    },
    {
      "title": "Slapstick",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5571270-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Slapstick",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/32639-4811-36407-1-slapstick.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Slapstick Infinite Comic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5489513-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Slapstick: That's Not Funny",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5973440-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Slash Maraud",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/25886-3812-28761-1-slash-maraud.jpg",
      "year": "1987",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Sledge Hammer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47648-4072-57034-1-sledge-hammer.jpg",
      "year": "1988",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Sleeper",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6395763-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Sleepwalker",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/1079139-sw1.jpg",
      "year": "1991",
      "publisher": "Marvel",
      "Field7": "33 Issues"
    },
    {
      "title": "Sleepwalker Holiday Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/134771-18688-110444-1-sleepwalker-holiday.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Sleepy's Hulk Custom Comic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3124399-sleepy%27s%20hulk%20custom%20comic%20v2008%20001%20%282008%29%20pagecover.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Slingers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/670831-slingers1c.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "13 Issues"
    },
    {
      "title": "Sly Cooper",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30515/606877-untitled.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Smallville",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4404572-01.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "11 Issues"
    },
    {
      "title": "Smallville Season 11: Chaos",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5225586-08.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Smallville Season 11: Continuity",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6203594-09.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Smallville Season Eleven Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3070858-smallville%20special.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Smallville Season Eleven: Argo",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3703459-04.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Smallville Season Eleven: Detective",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3321387-02.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Smallville Season Eleven: Guardian",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515525-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Smallville Season Eleven: Haunted",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3377604-03.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Smallville Season Eleven: Lantern",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4864662-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Smallville Season Eleven: Olympus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4143629-05.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Smallville: Alien",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/3525670-smallvillealien1.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Smallville: Alien",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4545160-06.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Smallville: Alien",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3447097-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Smallville: Chaos",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4024160-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Smallville: Chaos",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3877001-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Smallville: Continuity",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4277162-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Smallville: Continuity",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4065920-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Smallville: Harbinger",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3550332-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Smallville: Lantern",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3695915-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Smallville: Lantern",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3764088-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Smallville: Season Eleven",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2292783-000.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "69 Issues"
    },
    {
      "title": "Smallville: Season Eleven",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/2323225-smallville1.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "19 Issues"
    },
    {
      "title": "Smallville: The Comic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/17880/368204-21316-128604-1-smallville-the-comi.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Smallville: Titans",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3352996-dig009818_1.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Smash Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/940981-86617_20070303093717_large.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Smurfs",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47655-3150-57042-1-smurfs.jpg",
      "year": "1982",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Solarman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/109227/2197678-solar_man_set_001.jpg",
      "year": "1989",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Soldier X",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26954/507105-soldier_x_vol_1_1.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Solo",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5479433-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Solo",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47661-5325-57049-1-solo.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Solo",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6497058-9631058140-69629.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Solo Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/1771316-solo_avengers__1987__1.jpeg",
      "year": "1987",
      "publisher": "Marvel",
      "Field7": "20 Issues"
    },
    {
      "title": "Solo: A Star Wars Story Adaptation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6958089-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Solo: A Star Wars Story Adaptation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6641732-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "7 Issues"
    },
    {
      "title": "Solo: The Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498179-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Solo: The One-Man War On Terror",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5874769-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Solomon Grundy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/741474-solomon_grundy__001_000.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "7 Issues"
    },
    {
      "title": "Son of Ambush Bug",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/24206-3618-26957-1-son-of-ambush-bug.jpg",
      "year": "1986",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Son of Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2488167-son_of_hulk_vol_1_13__1_.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Son of M",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/90107-18160-106360-1-son-of-m.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Son of Marvel Reading Chronology",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1039385-son_of_marvel.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Son of Origins of Marvel Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3124611-son%20of%20origins%20of%20marvel%20comics%20v1975%20001%20%281975%29%20pagecover.jpg",
      "year": "1975",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Son of Origins of Marvel Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2642809-01.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Son of Satan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/14197-2781-15881-1-son-of-satan.jpg",
      "year": "1975",
      "publisher": "Marvel",
      "Field7": "8 Issues"
    },
    {
      "title": "Son of Satan: Marvel Spotlight #12: Facsimile Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7084659-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Son of Superman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/308881-20553-123076-2-son-of-superman.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Son of Vulcan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/7368/178652-19068-113848-1-son-of-vulcan.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Son of Yuppies from Hell",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1266220-son_of_yuppies_from_hell.jpg",
      "year": "1990",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Sonic Disruptors",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/26000-3813-28884-1-sonic-disruptors.jpg",
      "year": "1987",
      "publisher": "DC Comics",
      "Field7": "7 Issues"
    },
    {
      "title": "SoulCalibur IV",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62070/1787829-collectable.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Sovereign Seven",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3183667-01.jpg",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "36 Issues"
    },
    {
      "title": "Sovereign Seven",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2079421-s7.jpg",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Sovereign Seven Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1232845-s7_annual_1___01.jpg",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Sovereign Seven Plus Legion of Superheroes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3183747-01.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Soviet Super Soldiers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/884400-4476_4_1.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Space Ghost",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/276781-20311-121301-1-space-ghost.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Space Jam",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/35374/841037-space_jam.jpg",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Space: Punisher",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4638283-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Space: Punisher",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/2458274-prv12905_cov.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Spaceknights",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2690185-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Spaceknights",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/37015/732486-spaceknight1.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Spanner's Galaxy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/617304-span1.jpg",
      "year": "1984",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Speaker for the Dead",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/128795/2863052-speaker_for_the_dead_hc.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Special Collectors Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11352/1103780-savagefistsofkungfu01_01.jpg",
      "year": "1975",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Special Edition [U.S. Navy]",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/2383733-2.jpg",
      "year": "1944",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Special Edition X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/37015/1132890-special_edition1.jpg",
      "year": "1983",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Special Edition: Spider-Man and the Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1996323-cover.jpg",
      "year": "1980",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Special Edition: Spider-Man vs. the Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1996331-cover.jpg",
      "year": "1979",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Special Marvel Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/10201-2520-11230-1-special-marvel-editi.jpg",
      "year": "1971",
      "publisher": "Marvel",
      "Field7": "16 Issues"
    },
    {
      "title": "Special Preview Edition Batman: Earth One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/82159/2490750-scan0005.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Spectacular Spider-Girl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1224024-spectacular_spider_girl_1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Spectacular Spider-Girl: The Last Stand",
      "img": "https://comicvine1.cbsistatic.com/bundles/phoenixsite/images/core/loose/img_broken.png",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spectacular Spider-Girl: Who Killed Gwen Reilly?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6636287-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spectacular Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111121983/5750975-8720034072-1FHOSG-SDe1ZPTJtJvwByr6zfCTz3BcDuVyxJJ6Rf6M6AfdgwPgrvz2NAkmvZYqk_dLv-wDUbmrL%3Ds0",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "27 Issues"
    },
    {
      "title": "Spectacular Spider-Man Adventures: Riot at Ryker's Island!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111121983/3780719-7883151008-5103I.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spectacular Spider-Man Super Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/19859/584094-5297_4_1.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spectacular Spider-Man: Countdown",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1054137-spm.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spectacular Spider-Man: Disassembled",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1054146-spm.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spectacular Spider-Man: Here There Be Monsters",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1054144-spm.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spectacular Spider-Man: Sins Remembered",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/449854-spectacular_spider_man_sins_remembered_1_00.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spectacular Spider-Man: The Final Curtain",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1054167-spm.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spectacular Spider-Man: The Hunger",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1054116-spm.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Speed Force",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110802/4696553-speed_force-01-00-fc.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Speedball",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/27098-4073-30065-1-speedball.jpg",
      "year": "1988",
      "publisher": "Marvel",
      "Field7": "10 Issues"
    },
    {
      "title": "Speedball: The Masked Marvel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6947218-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spellbinders",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/238960-19717-118227-1-spellbinders.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Spellbinders: Signs and Wonders",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1600954-splb__saw.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spellbound",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47715-4074-57103-1-spellbound.jpg",
      "year": "1988",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Spelljammer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/59059/1110810-spelljammer__1___cover.jpg",
      "year": "1990",
      "publisher": "DC Comics",
      "Field7": "15 Issues"
    },
    {
      "title": "Spider-Force",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6666600-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Spider-Geddon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6797720-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Geddon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6623643-00.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Spider-Geddon Handbook",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6712687-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Geddon: Covert Ops",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6819214-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Geddon: Edge of Spider-Geddon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6744811-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Girl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/595318-sg1a.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "102 Issues"
    },
    {
      "title": "Spider-Girl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11131/111318833/6431843-spider-girl.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Girl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1523013-01a.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "8 Issues"
    },
    {
      "title": "Spider-Girl 1999",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/19859/564808-6188_4_1.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Girl Presents Avengers Next: Second Coming",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1143287-spg.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Girl Presents The Buzz and Darkdevil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/968469-sg.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Girl Presents Wild Thing: Crash Course",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1143275-spg.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Girl:  The End!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56299/1355939-spider_girl_the_end.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Girl: A Fresh Start",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11131/111318833/6431805-spider-girlafreshstart.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Girl: Avenging Allies",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5813435-03.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Girl: Betrayed",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5841938-07.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Girl: Duty Calls",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1182230-spg.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Girl: Endgame",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5825075-05.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Girl: Family Values",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6400305-7564258163-66813.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Girl: Legacy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5813434-01.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Girl: Like Father, Like Daughter",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5813250-02.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Girl: Marked For Death",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5856318-11.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Girl: Season of the Serpent",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1182240-spg.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Girl: Secret Lives",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5847550-09.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Girl: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6895571-7752680528-76112.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Spider-Girl: The Games Villains Play",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5859560-12.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Girl: Too Many Spiders",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5825079-06.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Girl: Turning Point",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5813436-04.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Girls",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6657944-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Spider-Gwen",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6976739-6263872445-78248.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Spider-Gwen",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4851255-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "35 Issues"
    },
    {
      "title": "Spider-Gwen",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4412559-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Spider-Gwen - Marvel Legacy Primer Pages",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6073807-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Gwen : Most Wanted?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4932901-00.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Gwen Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5290770-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Gwen: Ghost-Spider",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6657945-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "10 Issues"
    },
    {
      "title": "Spider-Gwen: Ghost-Spider: Impossible Year",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7059429-02.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Gwen: Ghost-Spider: Spider-Geddon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6922217-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Gwen: Greater Power",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5199921-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Gwen: Gwen Stacy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7125475-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Gwen: Gwenom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6385020-05.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Gwen: Long-Distance",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5909115-03.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Gwen: Predators",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6103712-04.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Gwen: The Life of Gwen Stacy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6614340-06.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Gwen: Weapon of Choice",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5601637-02.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Ham",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7188311-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Spider-Island",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4670620-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Spider-Island Daily Bugle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/1905762-dbsi1a.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Island Spotlight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3126357-spider-island%20spotlight%20%282011%29%20pagecover.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Island: Cloak & Dagger",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/93295/1956458-image__13_.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Spider-Island: Deadly Foes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1992904-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Island: Deadly Hands of Kung Fu",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2034445-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Spider-Island: Emergence of Evil - Jackal & Hobgoblin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1989429-spider_island___emergence_of_evil_001.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Island: Heroes For Hire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/73936/2031544-spider_island___heroes_for_hire_001__2011__pagecover.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Island: I Love New York City",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2034446-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Island: Spider-Woman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/108051/2016038-prv9804_cov.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Island: The Amazing Spider-Girl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/1975163-siasg1a.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Spider-Island: The Avengers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2034443-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Island: Warzones!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4908969-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5030452-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "28 Issues"
    },
    {
      "title": "Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/2423629-spider_man__1990__01a.jpeg",
      "year": "1990",
      "publisher": "Marvel",
      "Field7": "100 Issues"
    },
    {
      "title": "Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7075985-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1300468-spider_man_v1977__1___page_1.jpg",
      "year": "1987",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Spider-Man - Marvel Legacy Primer Pages",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6095392-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man '97",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52080/1014608-s_m_an_97.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man '98",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5586/623646-98.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man \"How to Beat the Bully\"/Jubilee \"Peer Pressure\"",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1165292-jubilee_spidey_antipeer_pressure_bully__noxic___001.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man & Araña Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/19859/833315-34291_20070228014958_large.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man & The Human Torch In... Bahia De Los Muertos!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/744453-s_01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man & the New Warriors: The Hero Killers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5695280-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man & The Secret Wars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/1054566-cover1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Spider-Man & the Secret Wars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6660697-0413825549-72858.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man & the X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4711807-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man & the X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4265337-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Spider-Man & Venom: Double Trouble",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7135755-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Spider-Man #1: Behind The Scenes Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7075986-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man 1602",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/986697-spider1602_1a.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Spider-Man 2: The Movie",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1119635-cover.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man 2099",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7175956-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man 2099",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3945888-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Spider-Man 2099",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4851257-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "25 Issues"
    },
    {
      "title": "Spider-Man 2099",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3656523-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Spider-Man 2099",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/1811820-spider_man_2099__1992_.jpeg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "46 Issues"
    },
    {
      "title": "Spider-Man 2099 Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/235135-19686-118063-1-spider-man-2099-annu.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man 2099 Meets Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/235134-19685-118062-1-spider-man-2099-meet.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man 2099 Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/235136-19687-118064-1-spider-man-2099-spec.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man 2099 vs. Venom 2099",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6893205-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man 2099: Apocalypse Soon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6029079-06.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man 2099: Back To Future, Shock!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6069460-07.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man 2099: Civil War II",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5658719-05.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man 2099: Gods and Women",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5351446-04.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man 2099: Out of Time",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4377094-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man 2099: Smack To the Future",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5173571-03.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man 2099: Spider-Verse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4694351-02.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man 24/7",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1087420-spider_man_24_7.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man 3: Movie Prequel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3126360-spider-man%203%20-%20movie%20prequel%20v2007%20001%20%282007%29%20pagecover.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man 3: The Black",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/7995/279821-20334-121512-1-spider-man-3-the-bl.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Activision",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2609707-__addme___spider_man_activision_v9999___page_1.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Adventures",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/7995/195552-19157-114620-1-spider-man-adventure.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "15 Issues"
    },
    {
      "title": "Spider-Man and Batman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3853/468429-spiderbat.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man and Daredevil Greatest Team-Ups",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/908077-sm_dd_teamups.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man and Daredevil Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/13923/844811-spm_daredevil.jpg",
      "year": "1984",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man and His Amazing Friends",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/1772215-spider_man_and_his_amazing_friends__1981__1.jpeg",
      "year": "1981",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man and Mysterio",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/14661/436264-spider_manthemysteriomanifesto1.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Spider-Man and Power Pack",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2777398-img001.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Spider-Man and Power Pack",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1301235-spider_man_power_pack___page_1.jpg",
      "year": "1984",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man and Sinister 6 Poster Book",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3126370-spider-man%20and%20sinister%206%20poster%20book%20v2004%20001%20%282004%29%20pagecover.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man and Spider-Woman (7-11 Giveaway)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3126372-spider-man%20and%20spider-woman%20%287-11%20giveaway%29%20v1981%20001%20%281981%29%20pagecover.jpg",
      "year": "1981",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man and the Black Cat: The Evil That Men Do",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/442441-spider_man_black_cat_the_evil_that_men_do_tpb_1_00a.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man and the Dallas Cowboys: \"Danger in Dallas\"",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65194/1284553-dallas_spiderman.jpg",
      "year": "1983",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man and the Fantastic Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/108799-18482-108524-1-spider-man-and-the-f.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Spider-Man and the Fantastic Four in Hard Choices",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52074/2172060-spiderffelksdrugcomic.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man and the Fantastic Four: Silver Rage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1245272-spm.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man and the Human Torch",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4763291-01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man and the Incredible Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1996327-cover.jpg",
      "year": "1981",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man and the Incredible Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2609572-__addme___spider_man_and_the_incredible_hulk_v9999__1_dp___page_1.jpg",
      "year": "1982",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man and the Incredible Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2609632-__addme___spider_man_and_the_incredible_hulk_v9999__1_kcs___page_1.jpg",
      "year": "1982",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man and the Incredible Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2609640-__addme___spider_man_and_the_incredible_hulk_v9999__1_sh___page_1.jpg",
      "year": "1982",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man and the Incredible Hulk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/846412-1.jpg",
      "year": "1982",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man and the New Mutants",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/33913/846924-q766.jpg",
      "year": "1990",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man and Uncanny X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/900585-spxm.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man and Wolverine by Wells & Madureira",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7086518-7931935395-79790.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man and X-Factor: Shadowgames",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47742-5330-57132-1-spider-man-and-x-fac.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Spider-Man Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6548917-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6981417-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Anthologies",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15302/822254-ultimate.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Spider-Man Battles The Myth Monster",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1281576-spider_man_battles_the_myth_monster_v1_001.jpg",
      "year": "1991",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Black & Blue & Read All Over",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2945138-spider_man_special___page_01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man By John Byrne Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7059430-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man by Mark Millar Ultimate Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2133399-spm_by_mm.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man by Michelinie and Larsen Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5887038-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man by Roger Stern Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3782206-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man by Todd Dezago & Mike Wieringo",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5863242-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man by Todd McFarlane Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5355947-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Chronicle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11113/111136721/3502371-4808068972-spide.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Classics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/33232-5047-37100-1-spider-man-classics.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "16 Issues"
    },
    {
      "title": "Spider-Man Clone Saga Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5472142-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Spider-Man Collectible Series",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3242541-1.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "24 Issues"
    },
    {
      "title": "Spider-Man Collectors' Preview",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1119640-cover.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Comics Magazine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47721-3860-57109-1-spider-man-comics-ma.jpg",
      "year": "1987",
      "publisher": "Marvel",
      "Field7": "13 Issues"
    },
    {
      "title": "Spider-Man Doctor Octopus Mini Reprint",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3126367-spider-man%20-%20doctor%20octopus%20v2005%20001%20%282005%29%20pagecover.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Drakes Cakes Mini Comics Series 1",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/2092536-552232.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Spider-Man Drakes Cakes Mini Comics Series 2",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/109024/2061165-drakescakes_vol2_issue1_cover.png",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Spider-Man Epic Collection: Cosmic Adventures",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4000513-20.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Fairy Tales",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5941500-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Fairy Tales",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3183788-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Spider-Man Family",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3183799-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "9 Issues"
    },
    {
      "title": "Spider-Man Family",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/812783-spider_man_family.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Family Featuring Amazing Friends",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/812797-spider_family_amazing_friends.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Family Featuring Spider-Clan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2777415-spider_man_family_featuring_spider_clan__001_000.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Family: Back in Black",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1245047-spm.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Family: Itsy-Bitsy Battles",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1245260-spm.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Family: Untold Team-Ups",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1245234-spm.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Fights Substance Abuse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2214376-spm_fgt_sa.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Holiday Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1267690-cover.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Homecoming: Fight or Flight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11131/111316849/6043959-1564324942-latest",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Interactive Comic Book",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3124998-spider-man%20interactive%20comic%20v1996%20001%20%281996%29%20pagecover.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man J",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6350889-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Spider-Man J",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4094314-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Spider-Man Legends",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1922539-spm_lg__tm2.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Spider-Man Loves Mary Jane",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/2699/98601-18104-106911-1-spider-man-loves-mar.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "20 Issues"
    },
    {
      "title": "Spider-Man Loves Mary Jane Season 2",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/488030-000.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Spider-Man Loves Mary Jane: My Secret Life",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1531331-spm_lv_mj__msl.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Loves Mary Jane: Still Friends",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5706505-04.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Loves Mary Jane: Super Crush",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1531325-spm_lv_mj__sc.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Loves Mary Jane: The New Girl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1531328-spm_lv_mj__tng.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Loves Mary Jane: The Real Thing",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6965844-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Loves Mary Jane: The Unexpected Thing",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7101024-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Magazine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1091088-1.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "15 Issues"
    },
    {
      "title": "Spider-Man Magazine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/680881-spider.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Spider-Man Megazine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/35644-5326-39800-1-spider-man-megazine.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Spider-Man Mysteries",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3125005-spider-man%20mysteries%20v1998%20001%20%281998%29%20pagecover.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Newspaper Strips",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6824619-4118318798-74871.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Spider-Man Noir",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1245291-spm.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Noir: Eyes Without A Face",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1287481-spmnr__ewaf.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Noir: Eyes Without A Face",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/1049586-snoir.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Spider-Man Noir: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7093817-9087481577-80411.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Peter Pan Peanut Butter",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/2455048-spider_man_peter_pan_peanut_butter_001__1994__pagecover.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Spider-Man Postcard Book",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7084660-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Poster Book",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/61948/2187855-smpb_01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Saga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52245/1478067-ss.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Saga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/2305/153257-18876-111581-1-spider-man-saga.jpg",
      "year": "1991",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Spider-Man Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5679008-01.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Spectacular",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3913995-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Start Here Sampler 2019",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6958091-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Super Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/19859/584073-5300_4_1.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Team-Up",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2451933-spider_manteam_up1.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "7 Issues"
    },
    {
      "title": "Spider-Man Team-Up Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/399691-21695-130883-1-spider-man-team-up-s.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111129651/3444546-spider-man%20universe%20%20-%20unknown%20%231%20-%20page%201.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "7 Issues"
    },
    {
      "title": "Spider-Man Unlimited",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4404586-01.jpg",
      "year": "1999",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Spider-Man Unlimited",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4404594-01.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "15 Issues"
    },
    {
      "title": "Spider-Man Unlimited",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47873-5048-57288-1-spider-man-unlimited.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "22 Issues"
    },
    {
      "title": "Spider-Man Unmasked",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1126768-cover.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Visionaries: John Romita",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1920350-spm_vs__jr.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Visionaries: Kurt Busiek",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1922462-spm_vs__kb.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Visionaries: Roger Stern",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1920324-spm_vs__rs.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Visionaries: Todd McFarlane",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1922537-spm_vs__tmf.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man VS Doctor Doom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15317/1013131-sm_vs_dd.gif",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Vs Dracula",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/230612-19638-117804-1-spider-man-vs-dracu.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man vs Punisher",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/24227/424963-Spider-Man%20vs%20The%20Punisher%20-%20No%20one%20Here%20gets%20Out%20Alive%20-%2000%20-%20FC.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man vs. Black Cat",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5070002-01.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man vs. Doctor Octopus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/3311996-spider-man%20vs%20doctor%20octopus%20%23200000%20-%20page%201.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man vs. Green Goblin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/908034-vs_goblin.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man vs. Mysterio",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6947220-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man vs. Silver Sable",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5928428-01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man vs. The Vulture",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5852976-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man vs. Vampires (MDCU)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1483310-spider_man_vs_vampires_1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Vs. Venom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/230616-19639-117805-1-spider-man-vs-venom.jpg",
      "year": "1990",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man Vs. Venom Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6595024-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man vs. Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3056675-01.jpg",
      "year": "1990",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man vs. Wolverine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3755102-01.jpg",
      "year": "1987",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man, Captain America, The Incredible Hulk and Spider-Woman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52503/1262042-1276430819852.jpg",
      "year": "1981",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man, Fire-Star and Iceman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1301240-spider_man__firestar__and_iceman___page_1.jpg",
      "year": "1983",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man, Fire-Star and Iceman at the Dallas Ballet Nutcracker",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/2192898-1.jpg",
      "year": "1983",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man, Punisher, Sabretooth: Designer Genes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/105403-18432-108126-1-spider-man-punisher.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man, Storm And Luke Cage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117127/4274613-spider-man%2C%20storm%2C%20and%20luke%20cage%20%231%20%282002_7%29%20-%20page%201.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man, Storm and Power Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/128795/2689740-spidermanstormpm_2.jpg",
      "year": "1982",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: 101 Ways to End the Clone Saga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/965127-101_ways_to_end_the_clone_saga_vol_1_1.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Am I an Avenger?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5141411-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Amazing Origins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5884524-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: American Son",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1149059-spm.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Animal Magnetism",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5755039-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Anti-Venom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1288739-ant_vnm.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Back in Black",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4296425-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Back in Black Handbook",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/107742-18477-108458-1-spider-man-back-in.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Back In Quack",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/49117/1440369-amazing_spider_man_back_in_quack__1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Ben Reilly Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6744812-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Birth of Venom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5674133-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Black & Blue",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111129651/5758789-spider-man%20-%20black%20%26%20blu%20-%20unknown%20%23200800%20-%20page%201.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Black Cat",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5141210-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Blue",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1245129-spm.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Brand New Day",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1143330-spm.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Spider-Man: Brand New Day - Extra",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/2189611-spider_man___brand_new_day_extra__1__2008_8____page_1.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Brand New Day Yearbook",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2759873-spider_man_bnd_yearbook_p0001.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Breakout",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5739693-01.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Breakout",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/235371-19688-118068-1-spider-man-breakout.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Spider-Man: Bug Stops Here",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3126366-spider-man%20-%20bug%20stops%20here%20000%20%281994%29%20pagecover.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Carnage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/904503-carnage.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Chapter One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/1637557-spider_man_chapter_one__1999__1.jpeg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "13 Issues"
    },
    {
      "title": "Spider-Man: Chapter One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4763295-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Christmas in Dallas (Dallas Times Herald Giveaway)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3126375-spider-man%20-%20christmas%20in%20dallas%20v1983%20001%20%281983%29%20pagecover.jpg",
      "year": "1983",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Clone Genesis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/909005-clone.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Cosmic Adventures",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/915734-cosmic.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Crime and Punisher",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1143179-smn.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Daily Bugle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6069462-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Dead Man's Hand",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1156937-cover.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Deadly Foes of Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6301625-7499099945-64508.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Death and Dating",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1143199-smn.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Death and Destiny",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1117808-cover.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Spider-Man: Death of Captain Stacy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/977278-spm.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Death of the Stacys",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1245034-spm.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Demolition Days",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6722002-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Died In Your Arms Tonight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1857913-died_in_your_arms2.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Election Day",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1147836-spm.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Ends of the Earth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2815145-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Enter the Spider-Verse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6694363-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Family Ties",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1143169-smn.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Far From Home Prelude",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6958090-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Far From Home Prelude",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6863647-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Spider-Man: Far From Home: The Art of the Movie",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7092706-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Father's Day is Every Day",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11119/111192134/4180544-spider-man%20father%27s%20day.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Fear Itself",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15455/670693-smfi.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Fear Itself",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111121457/5255081-spider-man_%20fear%20itself%20v1992%20%231%20-%20gn%20%281992_2%29%20-%20page%201.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Fever",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5739694-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Free Falling",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6406904-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Friendly Neighborhood Spider-Man by Peter David - The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5808963-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Friends and Enemies",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/49931-9082-64972-1-spider-man-friends-.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Spider-Man: Funeral for an Octopus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/7995/333688-20983-125633-1-spider-man-funeral.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Spider-Man: Get Kraven",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/347120-21106-126734-1-spider-man-s-get-kra.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Spider-Man: Grim Hunt - The Kraven Saga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66210/1218271-p00001.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Halloween Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1150064-cover.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Spider-Man: Hobgoblin Lives",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5878632-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Hobgoblin Lives",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5875526-1314899709-52198.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Spider-Man: Homecoming - The Art of the Movie",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5936024-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Homecoming Prelude",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5884526-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: House of M",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/7995/222170-19465-116494-1-spider-man-house-of.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Spider-Man: House of M",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4319489-01.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Identity Crisis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/900495-identity.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: India",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9245/506129-1.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Spider-Man: Invasion of the Spider-Slayers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/917329-slayers.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Kraven's First Hunt",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1143220-smn.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Kraven's Last Hunt",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3669085-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Kraven's Last Hunt Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7042766-5877939700-79143.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Legacy of Evil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/7995/278074-20324-121394-1-spider-man-legacy-o.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Legend of the Spider-Clan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3464/110060-18501-108616-1-spider-man-legend-o.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Spider-Man: Legend of the Spider-Clan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1616180-spm__lotsc.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Life Story",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6850884-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Spider-Man: Life Story",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7116002-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Lifeline",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/13923/844889-spm_lifeline1.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Spider-Man: Light In the Darkness",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6903190-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Made Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/59000/1175356-p00001___spider_man_made_men.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Mark of the Tarantula",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3484012-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Marvel Team-Up by Claremont & Byrne",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2765603-mtu_001.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Masques",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3726658-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Master Plan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5947655-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Maximum Carnage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70563/1615837-spider_man_maximum_carnage.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Maximum Clonage Alpha",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/57713/1079847-spmn_cl_1.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Maximum Clonage Omega",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/57713/1080421-spiderman_omega__1__maximum_clonage__1.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Miles Morales",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5421914-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Spider-Man: National Committee for Prevention of Child Abuse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55780/1090781-99646_20070719192141_large.jpg",
      "year": "1987",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: New Ways to Die",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1143254-smn.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: New Ways To Live",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6863600-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: New York Stories",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6511999-0882382068-69926.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Noir",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/648608-smnoir_001.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Spider-Man: Nothing Can Stop the Juggernaut",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4447627-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: One More Day",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/347106-21105-126733-1-spider-man-one-more.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Origin of the Hobgoblin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1882941-spm__oothb.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Parallel Lives",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/37015/923512-spider_man1.jpg",
      "year": "1989",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Perceptions",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2418908-spm__pcp.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Quality of Life",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/72780-9470-77961-1-spider-man-quality.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Spider-Man: Red-Headed Stranger",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1176988-spm.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Redemption",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/13923/843657-redemption1.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Spider-Man: Reptilian Rage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6981421-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Return of The Black Cat",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1177811-spm.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Return of the Burglar",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2460038-spm__rotb.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Revelations",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/357131-21209-127558-1-spider-man-revelati.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Revenge of the Green Goblin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1616182-spm__rotgg.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Revenge of the Green Goblin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6029655-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Revenge of the Green Goblin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/7995/317210-20677-124017-1-spider-man-revenge.jpg",
      "year": "2000",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Spider-Man: Revenge of the Sinister Six",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3747453-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Round Robin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/907834-round_robin.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Saga of the Sandman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5941506-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Savage Land",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3120618-savage%20land%20v1988%20001%20%281988%29%20pagecover.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Season One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/107368/2300649-spiderman_season_one_cover.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Silver Surfer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5008553-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Sinister Six",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1087196-spider_man_sinister_six.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Son of the Goblin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/905754-goblin.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Spider-Hunt",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6199248-3886894662-61436.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Spider-Island Companion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2204990-spm__sic.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Spider-Verse - Fearsome Foes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6684838-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Spider-Verse - Miles Morales",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6684840-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Spider-Verse - Spider-Gwen",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6684841-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Spider-Verse - Spider-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6684842-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Spider-Women",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1920287-spm__spw.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Spirits of the Earth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1582031-1030548_spider_man___spirits_of_the_earth_00fc_super.jpg",
      "year": "1990",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Sweet Charity",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/37015/871305-sweet_charity1.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Swing Shift Director's Cut",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1106674-cover.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: The Arachnis Project",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47732-5327-57122-1-spider-man-the-arac.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Spider-Man: The Assassin Nation Plot",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70215/2461722-71yt8czfpwl.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: The Clone Journal",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1216031-cover.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: The Clone Saga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/976866-smcs1a.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Spider-Man: The Death of Jean DeWolff",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2010259-spm__dojd.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: The Final Adventure",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/7995/335150-21004-125747-1-spider-man-the-fina.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Spider-Man: The Gathering of Five",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3513473-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: The Gauntlet - Electro And Sandman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1164975-spider_man_gauntlet_book_1_electro___sandman_hc.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: The Gauntlet - Juggernaut",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1351696-spm_gnt_jgg.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: The Gauntlet - Rhino and Mysterio",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1202438-spm.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: The Gauntlet - Vulture and Morbius",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1245278-spm.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: The Gauntlet: Lizard",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1429479-spm_gnt__lzd.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: The Jackal Files",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1119618-cover.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: The Lifeline Tablet Saga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5842057-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: The Lost Years",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/2969899-spider-man%20-%20the%20lost%20years%20v1995%20001%20%281995%29%20pagecover.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: The Lost Years",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/7995/325651-20732-124917-1-spider-man-the-lost.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Spider-Man: The Manga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15317/698415-manga_sm1.gif",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "31 Issues"
    },
    {
      "title": "Spider-Man: The Many Hosts of Carnage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7066218-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: The Mutant Agenda",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6108883-4647610581-58384.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: The Mutant Agenda",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47736-5328-57126-1-spider-man-the-muta.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Spider-Man: The Next Chapter",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6131868-3059716473-59612.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Spider-Man: The Official Movie Adaptation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1267868-cover.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: The Official Movie Adaptation (Wal-Mart Edition)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/2609454-spider_man___the_official_movie_adaptation_001__2002__pagecover.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: The Original Clone Saga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6575588-8572333586-69153.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: The Other",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/347125-21107-126735-1-spider-man-the-othe.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: The Other Sketchbook",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11113/111133305/4476068-spider-man%20-%20the%20other%20sketchbook%20-%20page%201.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: The Parker Years",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/7995/270851-20257-120918-1-spider-man-the-park.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: The Power of Terror",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/25835/528168-001.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Spider-Man: The Real Clone Saga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1284662-sp__rcs.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: The Short Halloween",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6154206-7032702642-60337.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: The Short Halloween",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6801592-1516484336-74800.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: The Vengeance of Venom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5680914-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: The Venom Agenda",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/13923/843594-venomagenda1.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: The World's Greatest Super Hero",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6140391-01.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Tombstone",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5225587-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Torment",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/960659-spider.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Venom Returns",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/907870-venom_returns.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: Web of Doom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47739-5329-57129-1-spider-man-web-of-d.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Spider-Man: Webspinners: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5923510-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man: With Great Power Comes Great Responsibility",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2655344-01a.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "7 Issues"
    },
    {
      "title": "Spider-Man: You're Hired!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1753008-sy_01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man's Greatest Team-Ups",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/916326-teamups.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man's Greatest Villains",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/916351-villains.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man's Tangled Web",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3183817-01.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "22 Issues"
    },
    {
      "title": "Spider-Man's Tangled Web",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11113/111139104/4173310-img102.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Spider-Man's Tangled Web Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5901092-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man’s Fearsome Foes Poster Book",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3126377-spider-man%E2%80%99s%20fearsome%20foes%20poster%20book%20v2005%20001%20%282005%29%20pagecover.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man/Black Cat: The Evil that Men Do",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/442428-spider_man_black_cat_the_evil_that_men_do_1_00.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Spider-Man/Deadpool",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4984312-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "51 Issues"
    },
    {
      "title": "Spider-Man/Deadpool - Marvel Legacy Primer Pages",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6107784-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man/Deadpool by Joe Kelly & Ed McGuinness",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6948808-9261873131-77700.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man/Deadpool: Arms Race",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6374071-05.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man/Deadpool: Don't Call It A Team-Up",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5199922-00.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man/Deadpool: Eventpool",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7000488-09.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man/Deadpool: Isn't It Bromantic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5408300-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man/Deadpool: Itsy Bitsy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6069463-03.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man/Deadpool: My Two Dads",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6703952-07.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man/Deadpool: Road Trip",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6883287-08.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man/Deadpool: Serious Business",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6212063-04.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man/Deadpool: Side Pieces",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5884525-02.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man/Deadpool: WLMD",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6517767-06.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man/Doctor Octopus: Negative Exposure",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5674136-01.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man/Doctor Octopus: Out of Reach",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1616165-spm_do__oor.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man/Doctor Octopus: Out of Reach",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/722893-1.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Spider-Man/Doctor Octopus: Year One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5695286-01.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man/Doctor Octopus: Year One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/7995/221778-19445-116454-1-spider-man-doctor-oc.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Spider-Man/Doctor Strange: The Way To Dusty Death",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5909116-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man/Dr. Strange: \"The Way to Dusty Death\"",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111121457/5255102-graphic%20novel%20spider-man_dr.%20strange_%20_the%20way%20to%20dusty%20death_%20v1992%20%231%20-%20gn%20%281992_1%29%20-%20page%201.jpg",
      "year": "1992",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man/Fantastic Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1292610-spider_man_and_the_fantastic_four_1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Spider-Man/Fantastic Four",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1686622-spm_f4.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man/Gen 13",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/39583/824549-sg1.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man/Hulk/Deadpool: Identity Wars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1992271-spm_hlk_dp__iw.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man/Human Torch",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/70522-11800-103520-1-spider-man--human-t.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Spider-Man/Iron Man: Marvel Team-Up",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6651003-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man/Kingpin: To The Death",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3755100-01.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man/Mary Jane:...You Just Hit the Jackpot",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7146609-2179624836-80906.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man/Punisher: Family Plot",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/24227/424962-Spider-Man--Punisher%20-%20Family%20Plot%2001%20-%2000%20-%20FC.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Spider-Man/Red Sonja",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2891747-sm_rs_1_0000.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Spider-Man/Red Sonja",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3417866-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Man/Spider-Gwen: Sitting In A Tree",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5852975-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3547808-01a.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Spider-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2703474-__kgrhqv__hmfbddtot_zbqphddokk___60_57.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Men II",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6339717-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Men II",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5949094-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Spider-Verse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4536862-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Verse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7092707-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Spider-Verse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4572737-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Spider-Verse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4212111-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Spider-Verse Team-Up",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4199369-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Spider-Verse: Warzones!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4934614-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
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
      "title": "Spider-Woman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48343/965364-num_risation0001.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "7 Issues"
    },
    {
      "title": "Spider-Woman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47745-5049-57135-1-spider-woman.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Spider-Woman #1: Facsimile Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7059431-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Woman Saga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1300299-spider_woman_saga_1.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Woman: Agent of S.W.O.R.D.",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3669088-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Woman: New Duds",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5022623-02.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Woman: Origin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1641/99543-18292-107045-1-spider-woman-origin.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Spider-Woman: Origin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3626773-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Woman: Shifting Gears - Baby Talk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5245356-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Woman: Shifting Gears - Civil War II",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5613474-02.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Woman: Shifting Gears: Scare Tactics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5874782-03.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Woman: Spider-Verse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4635241-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Women",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5328329-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Women Alpha",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5133388-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spider-Women Omega",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5238284-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spidey",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4934616-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Spidey & The Mini-Marvels: Halloween 2003 Ashcan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1150119-cover.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spidey And The Mini Marvels",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/250513-19970-119387-1-spidey-and-the-mini.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Spidey Sunday Spectacular!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84837/1798175-spidey_sunday_spectacular.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spidey Super Stories",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/13104-2702-14686-1-spidey-super-stories.jpg",
      "year": "1974",
      "publisher": "Marvel",
      "Field7": "57 Issues"
    },
    {
      "title": "Spidey: After-School Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5613476-02.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spidey: All-New Marvel Treasury Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5268256-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spidey: First Day",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5406635-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spidey: Freshman Year",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6875017-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spidey: Halloween ComicFest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5521666-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spidey: School's Out",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6456774-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Spidey: School's Out",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6694364-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spidey/Marrow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/14955/313866-20622-123573-1-spider-man-marrow.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spiral Zone",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67581/1261651-15847_spiral_zone__1__1987____page_1.jpg",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Spirit World",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/148518/2940011-spirit_world.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Spirit World",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52503/2856935-spirit_world_01_01.jpg",
      "year": "1971",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Spirits of Vengeance",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6080320-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Spirits of Vengeance - Marvel Legacy Primer Pages",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6059548-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spirits of Vengeance: Rise of the Midnight Sons",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5483407-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spirits of Vengeance: War At The Gates of Hell",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6395765-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spitfire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/32599/1324851-prv5939_cov.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spitfire and the Troubleshooters",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/44692-3651-51740-1-spitfire-and-the-tro.jpg",
      "year": "1986",
      "publisher": "Marvel",
      "Field7": "9 Issues"
    },
    {
      "title": "Spoof",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/43195-2478-49362-1-spoof.jpg",
      "year": "1970",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Spümcø Comic Book",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74848/2063015-comicbook_01.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Spyboy/Young Justice",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30025/803656-spyboy_young_justice01.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Squadron Sinister",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4627367-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Squadron Sinister: Warzones!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4945092-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Squadron Supreme",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/19859/587480-squadron_supreme_01__zone_megan__pg01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Squadron Supreme",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/2868/100179-18307-107189-1-squadron-supreme.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "7 Issues"
    },
    {
      "title": "Squadron Supreme",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4553237-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Squadron Supreme",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2516648-01.jpg",
      "year": "1985",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Squadron Supreme",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4955665-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "15 Issues"
    },
    {
      "title": "Squadron Supreme by Mark Gruenwald Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1508759-sqd_spr.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Squadron Supreme Classic Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5245357-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Squadron Supreme: Bright Shining Lies",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1231952-ss.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Squadron Supreme: By Any Means Necessary!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5268257-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Squadron Supreme: Civil War II",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5542873-02.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Squadron Supreme: Death of a Universe",
      "img": "https://comicvine1.cbsistatic.com/bundles/phoenixsite/images/core/loose/img_broken.png",
      "year": "1989",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Squadron Supreme: Death of a Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1388258-ss_doau.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Squadron Supreme: Finding Namor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5874809-03.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Squadron Supreme: Hyperion vs. Nighthawk",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1060789-prv3843_pg1.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Squadron Supreme: New World Order",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6338061-1250912048-65593.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Squadron Supreme: Power to the People",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/976836-sq.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Squadron Supreme: The Pre-War Years",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/966088-sqsp.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Stacked Deck: The Greatest Joker Stories Ever Told: Expanded Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1640445-stackeddeckjoker.jpg",
      "year": "1990",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Stalker",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3755105-01.jpg",
      "year": "1975",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Stan Lee Meets",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11131/111318833/5841863-stanleemeets.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Stan Lee Meets Doctor Doom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/566198-1.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Stan Lee Meets Doctor Strange",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2945147-slmds_01_oroboros__001.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Stan Lee Meets Silver Surfer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2777377-img001.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Stan Lee Meets The Amazing Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2945149-slmsm_01_oroboros__001.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Stan Lee Meets The Thing",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/567216-1.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Stan Lee Presents The Mighty Marvel Superheroes’ Cookbook",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9245/1294221-marvelcookbook.jpg",
      "year": "1977",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Stan Lee: Marvel Treasury Edition Slipcase",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5238286-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Stan Lee’s Amazing Marvel Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/69256/1275974-stanlee_samazingmarvelu1.gif",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Stan's Soapbox: The Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2810096-soapbox_000a_fc.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Stanley and His Monster",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74848/1507103-stanley_109_.jpg",
      "year": "1968",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Stanley and His Monster",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/32998-4979-36835-1-stanley-and-his-mons.jpg",
      "year": "1993",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Star",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7204795-01.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Brand",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/24523-3652-27286-1-star-brand.jpg",
      "year": "1986",
      "publisher": "Marvel",
      "Field7": "10 Issues"
    },
    {
      "title": "Star Brand Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1252877-star_brand_annual_001.jpg",
      "year": "1987",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Brand Classic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/357137-21210-127559-1-star-brand-classic.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Brand: New Universe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5211106-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Star Comics: All-Star Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6670680-0495700730-73018.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Star Comics: Planet Terry: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6938339-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Hunters",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/16023-2893-17850-1-star-hunters.jpg",
      "year": "1977",
      "publisher": "DC Comics",
      "Field7": "7 Issues"
    },
    {
      "title": "Star Masters",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/64903-11175-97900-1-starmasters.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Star Spangled Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/940995-86617_20070303093717_large.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Spangled Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/369946-21332-128715-1-star-spangled-comics.jpg",
      "year": "1941",
      "publisher": "DC Comics",
      "Field7": "130 Issues"
    },
    {
      "title": "Star Spangled War Stories",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/49897/1443401-1.jpg",
      "year": "1952",
      "publisher": "DC Comics",
      "Field7": "205 Issues"
    },
    {
      "title": "Star Spangled War Stories Ashcan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/3507842-star1.jpg",
      "year": "1952",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Team",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1249831-star_team_001.jpg",
      "year": "1977",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Trek",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/28581-4212-31734-1-star-trek.jpg",
      "year": "1989",
      "publisher": "DC Comics",
      "Field7": "80 Issues"
    },
    {
      "title": "Star Trek",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/18170-3054-20328-1-star-trek.jpg",
      "year": "1980",
      "publisher": "Marvel",
      "Field7": "18 Issues"
    },
    {
      "title": "Star Trek",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/21476-3318-23949-1-star-trek.jpg",
      "year": "1984",
      "publisher": "DC Comics",
      "Field7": "56 Issues"
    },
    {
      "title": "Star Trek Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/28939-4376-32139-1-star-trek-annual.jpg",
      "year": "1990",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Star Trek Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/25579/762461-2995_4_1.jpg",
      "year": "1985",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Star Trek First Contact",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2207453-01.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Trek Generations",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/80403/1874167-st7_comic.jpg",
      "year": "1994",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Trek IV The Voyage Home",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9367/225777-19574-117070-1-star-trek-iv-the-voy.JPG",
      "year": "1987",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Trek Movie Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/22184-3319-24756-1-star-trek-movie-spec.jpg",
      "year": "1984",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Star Trek Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/34829-5256-38904-1-star-trek-special.jpg",
      "year": "1994",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Star Trek Unlimited",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/38284-5793-42990-1-star-trek-unlimited.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "10 Issues"
    },
    {
      "title": "Star Trek V: The Final Frontier",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124153/3880874-star_trek_v_cover.jpg",
      "year": "1989",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Trek VI Undiscovered Country",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9367/225778-19575-117071-1-star-trek-vi-undisco.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Trek: Collector's Preview",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/122433/3081446-preview%20star%20trek%20-%20collector%27s%20%20%20ashcan%20edition%20%231%20%281996%29%20-%20page%201.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Star Trek: Debt of Honor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/122433/3081562-star%20trek%20-%20debt%20of%20honor%20-%20page%201.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Trek: Debt of Honor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3242582-1.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Trek: Deep Space Nine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2194557-01.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "15 Issues"
    },
    {
      "title": "Star Trek: Deep Space Nine/Star Trek: The Next Generation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/35865-5258-40044-1-star-trek-the-next-.jpg",
      "year": "1994",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Star Trek: Early Voyages",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/38619-6015-43391-1-star-trek-early-voy.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "17 Issues"
    },
    {
      "title": "Star Trek: Mirror, Mirror",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15302/477099-star_trek_mirror__mirror.gif",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Trek: Operation Assimilation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/33224/669396-operation_assimilation_comic.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Trek: Revisitations",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3242566-star%20trek%20book%20v1994%20001%20%281994%29%20pagecover.jpg",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Trek: Starfleet Academy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3183888-01.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "19 Issues"
    },
    {
      "title": "Star Trek: Telepathy War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/122433/3081445-star%20trek%20%20telepathy%20war%20%236%20-%20page%201.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Trek: Tests of Courage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3242573-star%20trek%20book%20v1994%20002%20%281994%29%20pagecover.jpg",
      "year": "1994",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Trek: The Ashes of Eden",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38826/850091-kirkcover.jpg",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Trek: The Mirror Universe Saga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3242568-star%20trek%20book%20v1991%20001%20%281991%29%20pagecover.jpg",
      "year": "1991",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Trek: The Modala Imperative",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/30897-4567-34388-1-star-trek--the-moda.jpg",
      "year": "1991",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Star Trek: The Next Generation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/28582-4214-31735-1-star-trek-the-next-.jpg",
      "year": "1989",
      "publisher": "DC Comics",
      "Field7": "80 Issues"
    },
    {
      "title": "Star Trek: The Next Generation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/26318-4027-29226-1-star-trek-the-next-.jpg",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Star Trek: The Next Generation - Beginnings",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3242587-star%20trek%20-%20the%20next%20generation%20book%20v1989%20003%20%281989%29%20pagecover.jpg",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Trek: The Next Generation - Shadowheart",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/35864-5257-40043-1-star-trek-the-next-.jpg",
      "year": "1994",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Star Trek: The Next Generation - The Modala Imperative",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/31068-4568-34581-1-star-trek-the-next-.jpg",
      "year": "1991",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Star Trek: The Next Generation - The Series Finale",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/25579/856527-15712_4_001.jpg",
      "year": "1994",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Trek: The Next Generation -- Ill Wind",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/37185-5521-41621-1-star-trek-the-next-.jpg",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Star Trek: The Next Generation -- Perchance to Dream",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/41000-6440-46274-1-star-trek-the-next-.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Star Trek: The Next Generation / Star Trek: Deep Space Nine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3242589-star%20trek%20-%20the%20next%20generationdeep%20space%20nine%20v1994%20001%20%281994%29%20pagecover.jpg",
      "year": "1994",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Trek: The Next Generation Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/28940-4377-32140-1-star-trek-the-next-.jpg",
      "year": "1990",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Star Trek: The Next Generation Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/34084-4980-38058-1-star-trek-the-next-.jpg",
      "year": "1993",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Star Trek: The Next Generation The Star Lost",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3242583-star%20trek%20-%20the%20next%20generation%20book%20v1989%20001%20%281989%29%20pagecover.jpg",
      "year": "1993",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Trek: The Next Generation: Riker",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2850031-__addme___star_trek_riker_v9999___page_1.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Trek: The Next Generation/X-Men: Second Contact",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/3122621-star%20trek%20tng%20x-men%201.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Trek: Untold Voyages",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/595445-stut1a.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Star Trek: Voyager",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15659/5322726-star_trek_voyager%231-cover.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "15 Issues"
    },
    {
      "title": "Star Trek: Voyager - Splashdown",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/28078/532486-star_trek_voyager_comic_cover_by_ssava.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Star Trek: Voyager -- The Planet Killer",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/43284-6986-49465-1-star-trek-voyager-.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Star Trek: Who Killed Captain Kirk?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3242581-star%20trek%20book%20v1994%20005%20%281995%29%20pagecover.jpg",
      "year": "1993",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Trek/X-Men",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/374699-21369-129095-1-star-trek--x-men.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7062772-0369946559-79783.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Star Wars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4328920-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "75 Issues"
    },
    {
      "title": "Star Wars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/15811-2914-17616-1-star-wars.jpg",
      "year": "1977",
      "publisher": "Marvel",
      "Field7": "108 Issues"
    },
    {
      "title": "Star Wars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7197041-01.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Star Wars #1: Facsimile Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7169465-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4945094-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Star Wars Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/17126-3013-19083-1-star-wars-annual.jpg",
      "year": "1979",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Star Wars by Jason Aaron Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6819217-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars Director's Cut",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4628679-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars Episode VI: Return of the Jedi",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4909269-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars Legends Epic Collection: Infinities",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4955667-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars Legends Epic Collection: Legacy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5478736-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Star Wars Legends Epic Collection: Rise of the Sith",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4774973-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Star Wars Legends Epic Collection: The Clone Wars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5613477-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Star Wars Legends Epic Collection: The Empire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4501830-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Star Wars Legends Epic Collection: The Menace Revealed",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6614344-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Star Wars Legends Epic Collection: The New Republic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4563144-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Star Wars Legends Epic Collection: The Newspaper Strips",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5673993-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Star Wars Legends Epic Collection: The Old Republic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4660075-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Star Wars Legends Epic Collection: The Original Marvel Years",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5500627-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Star Wars Legends Epic Collection: The Rebellion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5286351-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Star Wars Legends: Forever Crimson",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7220170-01.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars May the 4th Previews",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6913175-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars Movie Sampler",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4947427-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars Previews",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4895856-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars Reads",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6091916-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Star Wars Saga",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7169466-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars Special Edition: A New Hope",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5786803-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: A New Hope: The 40th Anniversary",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6364077-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of Rebellion - Boba Fett",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6922218-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of Rebellion - Boba Fett: Halloween ComicFest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7126562-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of Rebellion - Darth Vader",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6981422-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of Rebellion - Grand Moff Tarkin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6883288-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of Rebellion - Han Solo",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6913174-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of Rebellion - Heroes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7031474-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of Rebellion - Jabba the Hutt",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6938340-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of Rebellion - Lando Calrissian",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6929700-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of Rebellion - Luke Skywalker",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6958092-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of Rebellion - Princess Leia",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6883289-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of Rebellion - Villains",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7047357-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of Rebellion Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6893206-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of Republic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7236769-01.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of Republic - Count Dooku",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6797721-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of Republic - Darth Maul",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6722003-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of Republic - General Grievous",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6838564-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of Republic - Jango Fett",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6753302-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of Republic - Obi-Wan Kenobi",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6744813-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of Republic - Padme Amidala",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6828937-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of Republic Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6760846-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of Republic: Anakin Skywalker",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6789774-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of Republic: Heroes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6929701-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of Republic: Villains",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6922219-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of Resistance - Captain Phasma",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7000496-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of Resistance - Finn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6990922-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of Resistance - General Hux",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7054362-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of Resistance - Heroes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7144096-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of Resistance - Kylo Ren",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7084662-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of Resistance - Poe Dameron",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7054364-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of Resistance - Rey",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7075987-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of Resistance - Rose Tico",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7075988-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of Resistance - Supreme Leader Snoke",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7066219-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of Resistance - Villains",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7153358-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of Resistance Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7023042-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Age of the Republic - Qui-Gon Jin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6712690-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Beckett",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6559471-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Chewbacca",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5069797-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Darth Maul",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6044945-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Darth Maul",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5677319-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Star Wars: Darth Maul - Son of Dathomir",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6140392-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Darth Maul Halloween Comic Fest 2017",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6149619-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Darth Vader",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7062743-6465022898-79784.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Star Wars: Darth Vader",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7234746-01.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Darth Vader - Shadows and Secrets",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5028065-02.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Darth Vader - Vader",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4845172-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Darth Vader by Kieron Gillen & Salvador Larroca",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6044990-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Darth Vader: Dark Lord of the Sith",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6843024-2259753490-74880.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Darth Vader: Dark Lord of the Sith: Fortress Vader",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6779333-04.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Darth Vader: Dark Lord of the Sith: Imperial Machine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6153021-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Darth Vader: Dark Lord of the Sith: Legacy's End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6395767-02.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Darth Vader: Dark Lord of the Sith: The Burning Seas",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6606816-03.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Darth Vader: End of Games",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5547955-04.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Darth Vader: The Shu-Torun War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5406636-03.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Doctor Aphra",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7068625-7498329539-79785.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Doctor Aphra",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5571245-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "40 Issues"
    },
    {
      "title": "Star Wars: Doctor Aphra Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6034453-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Star Wars: Doctor Aphra: Aphra",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5909120-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Doctor Aphra: Doctor Aphra and the Enormous Profit",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6266914-02.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Doctor Aphra: Remastered",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6506261-03.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Doctor Aphra: The Catastrophe Con",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6753301-04.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Doctor Aphra: Unspeakable Rebel Superweapon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7175962-06.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Doctor Aphra: Worst Among Equals",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6981423-05.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Droids & Ewoks Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5245359-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Droids Unplugged",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5923512-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Empire Ascendant",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7184464-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Episode I - The Phantom Menace",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5225591-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Episode II: Attack of the Clones",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5421915-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Episode III: Revenge of the Sith",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5571000-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Episode IV - A New Hope",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4545274-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Episode V The Empire Strikes Back",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4738386-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Ewoks: Flight To Danger",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6828939-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Galaxy's Edge",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6903191-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Star Wars: Galaxy's Edge",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7116003-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Han Solo",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6843038-9793848359-74881.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Han Solo",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5628452-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Han Solo - Imperial Cadet",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6676196-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Star Wars: Han Solo: Imperial Cadet",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6929702-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Heroes For A New Hope",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7068626-8762314169-79786.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Hope Dies",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6722004-09.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Jedi Fallen Order–Dark Temple",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7059433-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Star Wars: Jedi of the Republic: Mace Windu",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6302407-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Journey to Star Wars: The Force Awakens - Shattered Empire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4912438-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Journey to Star Wars: The Last Jedi - Captain Phasma",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6143999-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Kanan - The Last Padawan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4897067-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Kanan Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5575672-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Kanan: First Blood",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5211107-02.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Lando",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5008167-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Lando - Double Or Nothing",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6676197-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Lando: Double Or Nothing",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6447363-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Star Wars: Last Flight of the Harbinger",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5658720-04.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Mace Windu",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6029081-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Star Wars: Mutiny At Mon Cala",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6548919-08.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Obi-Wan and Anakin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5337568-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Out Among The Stars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6173015-06.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Poe Dameron",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5133382-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "31 Issues"
    },
    {
      "title": "Star Wars: Poe Dameron Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5914521-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Star Wars: Poe Dameron: Black Squadron",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5574693-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Poe Dameron: Legend Found",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6429665-04.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Poe Dameron: Legend Lost",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6144000-03.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Poe Dameron: The Gathering Storm",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5909124-02.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Poe Dameron: The Spark and the Fire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6712689-05.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Princess Leia",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4897065-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Rebel Jail",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5406503-03.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Rebels and Rogues",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7153359-12.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Return of the Jedi",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/79273/5649767-s-l500.jpg",
      "year": "1983",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Return of the Jedi",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47778-3243-57171-1-star-wars-return-of.jpg",
      "year": "1983",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Star Wars: Rogue One - Cassian & K2SO Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5996351-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Rogue One Adaptation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6164870-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Rogue One Adaptation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5786801-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Star Wars: Screaming Citadel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6091918-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Screaming Citadel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5850403-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Showdown On the Smuggler's Moon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4998055-02.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Skywalker Strikes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4845175-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Tag & Bink Were Here",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6406907-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Target Vader",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6990923-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Star Wars: The Ashes of Jedha",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6364073-07.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: The Escape",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6883290-10.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: The Force Awakens Adaptation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5574692-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: The Force Awakens Adaptation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5278647-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Star Wars: The Last Jedi - DJ - Most Wanted",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6254378-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: The Last Jedi - The Storms of Crait",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6203595-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: The Last Jedi Adaptation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6676198-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: The Last Jedi Adaptation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6418929-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Star Wars: The Marvel Covers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4845174-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: The Marvel UK Collection Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6044991-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: The Original Marvel Years",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4330901-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Star Wars: The Original Marvel Years #50: Facsimile Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6913176-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: The Original Trilogy: The Movie Adaptations",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7212748-01.jpg",
      "year": "2020",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: The Rise of Kylo Ren",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7184465-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Star Wars: The Scourging of Shu-Torun",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7047359-11.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Thrawn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6606819-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Thrawn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6280043-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Star Wars: Tie Fighter",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6893207-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Star Wars: Tie Fighter",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7109892-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Vader - Dark Visions",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7054377-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Vader Down",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4912442-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Vader Down",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5160042-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star Wars: Vader: Dark Visions",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6828941-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Star Wars: Yoda's Secret War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5936026-05.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star-Lord",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5601639-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Star-Lord",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4912433-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "8 Issues"
    },
    {
      "title": "Star-Lord & Kitty Pryde",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4698747-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Star-Lord and Kitty Pryde: Battleworld",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4932903-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star-Lord Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5870328-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star-Lord: Annihilation - Conquest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3619504-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star-Lord: Grounded",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5909118-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star-Lord: Guardian of the Galaxy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3951144-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star-Lord: Tears For Heaven",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3732898-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star-Lord: The Hollow Crown",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3135246-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star-Lord: Worlds On the Brink",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3485432-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Star-Spangled War Stories",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3976845-star%20spangled%2001.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "8 Issues"
    },
    {
      "title": "Star-Spangled War Stories",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1431605-star_spangled_war_stories_1.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Star-Spangled War Stories: Futures End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4116587-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Starblast",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/34514-5331-38548-1-starblast.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Starbrand & Nightmask",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4955669-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Starbrand and Nightmask: Eternity's Children (Attend University)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5302048-01.jpg",
      "year": "2016",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Starcraft: Kerrigan - Hope and Vengeance",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2912085-00.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Starfire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2029348-01.jpg",
      "year": "1976",
      "publisher": "DC Comics",
      "Field7": "8 Issues"
    },
    {
      "title": "Starfire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4617095-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Starfire: A Matter of Time",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5665119-02.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Starfire: Welcome Home",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5109026-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Starjammers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/44088-7192-51326-1-starjammers.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Starjammers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/66281-11308-99278-1-starjammers.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Starjammers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6981424-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Starlord",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65073/1294156-starlord__1___page_1.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Starlord Megazine",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/59022/1693014-starlord.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Starlord, The Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/894259-2665_4_1.jpg",
      "year": "1982",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Starman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3548023-01.jpg",
      "year": "1994",
      "publisher": "DC Comics",
      "Field7": "83 Issues"
    },
    {
      "title": "Starman",
      "img": "https://comicvine1.cbsistatic.com/bundles/phoenixsite/images/core/loose/img_broken.png",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "45 Issues"
    },
    {
      "title": "Starman - Secret Files and Origins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1257078-starman_secret_files__1___page_1.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Starman 80 Page Giant",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3548006-01.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Starman Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3548003-01.jpg",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Starman Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1435194-513778.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Starman: A Starry Knight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1993080-7.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Starman: A Wicked Inclination",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1989060-3.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Starman: Grand Guignol",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/109024/2129099-starman_grand_guignol.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Starman: Infernal Devices",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1992171-5.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Starman: Mist",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5551/670601-a0dfa83c_099f_415a_b12c_335f28c13e3c.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Starman: Night and Day",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6244147-1169773642-61970.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Starman: Sins of the Father",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6244146-2602405628-61970.jpg",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Starman: Sons of the Father",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/109024/2129100-starman_sons_of_the_father.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Starman: Stars My Destination",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1993826-8.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Starman: Times Past",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1992159-4.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Starman: To Reach the Stars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1992178-6.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Starman/Congorilla",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5551/1602123-b4d28591_37b3_48a7_9362_12755d82f549.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Starriors",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47782-3366-57175-1-starriors.jpg",
      "year": "1984",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Starriors Mini-Comics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11119/111192134/4153105-starriors%201.jpg",
      "year": "1984",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Stars and S.T.R.I.P.E.",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/42541-6800-48619-1-stars-and-s-t-r-i-p-.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "15 Issues"
    },
    {
      "title": "Startling Stories: Banner",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54045/1360345-startling_stories_banner.png",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Startling Stories: Banner",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/2473206-cover.jpg",
      "year": "2001",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Startling Stories: Fantastic Four - Unstable Molecules",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/469411-2.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Startling Stories: Fantastic Four - Unstable Molecules",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11114/111143288/3634705-fantastic%20four-unstable%20molecules.jpg",
      "year": "",
      "publisher": "Marvel",
      "Field7": "0 Issues"
    },
    {
      "title": "Startling Stories: The Megalomaniacal Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/7995/253124-20041-119696-1-the-meglomaniacal-sp.jpg",
      "year": "2002",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Startling Stories: The Thing",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/36359/1208681-thingi.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Startling Stories: The Thing - Night falls on Yancy Street",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55074/1128794-startlingstoriesthingyancy1.jpg",
      "year": "2003",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Static Shock",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2034452-01.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "8 Issues"
    },
    {
      "title": "Static Shock Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56299/1840028-staticshockspecial_preview_00.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Static Shock: Supercharged",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3485575-01.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Steel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4773/128113-5260-109995-1-steel.jpg",
      "year": "1994",
      "publisher": "DC Comics",
      "Field7": "53 Issues"
    },
    {
      "title": "Steel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1601468-steel_cv1_copy.jpeg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Steel Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/5232648-steel%20annual%20%231.jpg",
      "year": "1994",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Steel Movie Adaptation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64684/1920982-steel.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Steel, the Indestructible Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/2764662-tn.jpg",
      "year": "1978",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Steel: Forging of a Hero",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2062172-steel.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Steel: The Official Comic Adaptation of the Warner Bros. Motion Picture",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/47697/2112183-steel.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Steeltown Rockers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1273730-steeltown_rockers_v1_001.jpg",
      "year": "1990",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Stephen King's N.",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2150478-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Stephen King's N.",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48343/1145978-num_risation0004.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Steve Ditko Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100555/2127771-steve_ditko_omn.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Steve Rogers: Super Soldier",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3404738-01.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Steve Rogers: Super Soldier",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1292194-steve_rogers_super_soldier_1.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Steve Rogers: Super Soldier Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/33110/1770365-steverogerssupersoldierannual1.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Steve Rogers: Super-Soldier - The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5949096-01.jpg",
      "year": "2017",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Stoker's Dracula",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52080/1110086-s_sd1a.jpg",
      "year": "2004",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Stoker's Dracula",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11111/111117470/4873036-stoker%27s%20dracula%20%28thomas%20%26%20giorgano%29.jpeg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Storm",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/102176-7191-107612-1-storm.jpg",
      "year": "1996",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Storm",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/120767-18260-106913-3-storm.jpg",
      "year": "2006",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Storm",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3978752-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "11 Issues"
    },
    {
      "title": "Storm",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/2119324-stormhc.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Storm: Bring the Thunder",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4721764-02.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Storm: Make It Rain",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4403068-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Stormbreaker: The Saga of Beta Ray Bill",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/13340/309687-20565-123207-1-stormbreaker-the-sa.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Stormbreaker: The Saga of Beta Ray Bill",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3726660-01.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Stormwatch",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3888913-01.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Stormwatch",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/2000145-1a.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "31 Issues"
    },
    {
      "title": "Stormwatch: Betrayal",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498180-03.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Stormwatch: Enemies of the Earth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498181-02.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Stormwatch: Reset",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3866909-04.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Stormwatch: The Dark Side",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2358609-978_1_4012_3483_6.jpeg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Strange",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1023877-prv3773_cov.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Strange Adventures",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1093/344982-1328-126400-1-strange-adventures.jpg",
      "year": "1950",
      "publisher": "DC Comics",
      "Field7": "244 Issues"
    },
    {
      "title": "Strange Adventures",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/727320-sa01_001.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "8 Issues"
    },
    {
      "title": "Strange Adventures ashcan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/3647778-str1.jpg",
      "year": "1950",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Strange Days: Movie Adaptation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64684/1921261-strangedays.jpg",
      "year": "1995",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Strange Sports Stories",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/12102-2623-13550-1-strange-sports-stori.jpg",
      "year": "1973",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Strange Tales",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/25203-3863-28020-1-strange-tales.jpg",
      "year": "1987",
      "publisher": "Marvel",
      "Field7": "19 Issues"
    },
    {
      "title": "Strange Tales",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/596802-st1a.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Strange Tales",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3754591-169.jpg",
      "year": "1973",
      "publisher": "Marvel",
      "Field7": "20 Issues"
    },
    {
      "title": "Strange Tales",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111121457/5227740-one%20shot%20strange%20tales%20v1994%20%231%20%281994_11%29%20-%20page%201.jpg",
      "year": "1994",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Strange Tales",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6690230-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Strange Tales",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/110912-18066-105759-2-strange-tales.jpg",
      "year": "1951",
      "publisher": "Marvel",
      "Field7": "168 Issues"
    },
    {
      "title": "Strange Tales Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/5207-2079-5673-1-strange-tales-annual.jpg",
      "year": "1962",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Strange Tales II",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6772720-7446568490-74537.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Strange Tales: Dark Corners",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/331029-20941-125442-1-strange-tales-dark.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Strange: Beginnings & Endings",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3642061-01.jpg",
      "year": "2005",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Strange: The Doctor is Out",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3656525-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Street Fighter: The Battle for Shadaloo",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2850574-__addme___street_fighter_battle_for_shadaloo_v9999___page_1.jpg",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Street Poet Ray",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/71449-12008-104447-1-street-poet-ray.jpg",
      "year": "1990",
      "publisher": "Marvel",
      "Field7": "4 Issues"
    },
    {
      "title": "Streets",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/73936/1711325-streets__1___page_1.jpg",
      "year": "1993",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Strikeforce",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7084663-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Strikeforce Morituri: Electric Undertow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/28835-4247-32015-1-strikeforce-moritur.jpg",
      "year": "1989",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Strikeforce: Morituri",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/24723-3654-27499-1-strikeforce-moritur.jpg",
      "year": "1986",
      "publisher": "Marvel",
      "Field7": "31 Issues"
    },
    {
      "title": "Strikeforce: Morituri",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2181868-sm1.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Strikeforce: Morituri - We Who Are About to Die",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/2189308-strikeforce__morituri___we_who_are_about_to_die_no_1_v2012__1__2012_3____page_1.jpg",
      "year": "2012",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Strong Guy Reborn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26954/511093-strongguyreborn1.jpg",
      "year": "1997",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Stryfe's Strike File",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/89735-18149-106316-1-stryfes-strike-file.jpg",
      "year": "1993",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Sub-Mariner",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2803744-submariner01.jpg",
      "year": "1968",
      "publisher": "Marvel",
      "Field7": "72 Issues"
    },
    {
      "title": "Sub-Mariner",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/135188-18687-110438-1-sub-mariner.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "6 Issues"
    },
    {
      "title": "Sub-Mariner & the Original Human Torch",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4107863-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Sub-Mariner Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4106193-sman1nm92m085.jpg",
      "year": "1971",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Sub-Mariner Comics 70th Anniversary Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/773509-sm_01.jpg",
      "year": "2009",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Sub-Mariner: Revolution",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/977262-nmr.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Suburban Jersey Ninja She-Devils",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1281575-suburban_she_devils_001.jpg",
      "year": "1991",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Sugar & Spike: Metahuman Investigations",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5523059-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Sugar and Spike",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/2204-1771-2396-1-sugar-amp-spike.jpg",
      "year": "1956",
      "publisher": "DC Comics",
      "Field7": "98 Issues"
    },
    {
      "title": "Sugar and Spike Archives",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/2005019-1.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7184390-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Suicide Squad",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5385313-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "50 Issues"
    },
    {
      "title": "Suicide Squad",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2034455-01.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "31 Issues"
    },
    {
      "title": "Suicide Squad",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3664/192169-19127-114380-1-suicide-squad.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Suicide Squad",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3664/192483-19133-114404-1-suicide-squad.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "8 Issues"
    },
    {
      "title": "Suicide Squad",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/25258-3815-28084-1-suicide-squad.jpg",
      "year": "1987",
      "publisher": "DC Comics",
      "Field7": "67 Issues"
    },
    {
      "title": "Suicide Squad #1 Director's Cut",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5764701-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad 101",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/127706/4037137-p00001.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6581409-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1382996-p00001.jpg",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad Black Files",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6678540-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Suicide Squad by Jim Lee Unwrapped",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6650827-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad Most Wanted: Deadshot",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5355949-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad Most Wanted: Deadshot and Katana",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5022075-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Suicide Squad Most Wanted: El Diablo",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5808965-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad Most Wanted: El Diablo & Boomerang",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5379299-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Suicide Squad Most Wanted: Katana",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5432095-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad Special: War Crimes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5419998-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad: Amanda Waller",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3716447-waller11.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad: Apokolips Now",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5601642-05.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad: Basilisk Rising",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498182-02.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad: Burning Down the House",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6039805-03.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad: Constriction",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7039278-08.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad: Death Is For Suckers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3416483-03.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad: Discipline and Punish",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3790754-04.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad: Drain the Swamp",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6650826-07.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad: Earthlings On Fire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6184530-04.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad: From the Ashes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1716881-fromashessuicdesqaud.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad: Going Sane",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5884528-02.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad: Hell To Pay",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6340678-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Suicide Squad: Hell To Pay",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6797722-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad: Katana: The Revenge of Kobra",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6998528-1678333765-79008.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad: Kicked in the Teeth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3485579-01.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad: Kill Your Darlings",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6374074-05.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad: Rebirth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5357955-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad: Rebirth Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6103717-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Suicide Squad: Rogues",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5133391-03.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad: Secret Files",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5797777-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad: The Black Vault",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5734326-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad: The Dragon's Hoard",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6173017-07.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad: The Final Mission",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6937068-2407477445-77941.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad: The Janus Directive",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5316395-04.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad: The Nightshade Odyssey",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4945095-02.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad: The Phoenix Gambit",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5852978-06.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad: The Secret History of Task Force X",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6517770-06.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad: The Silver Age",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6212064-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad: The Silver Age Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5342726-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad: Trial By Fire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1716861-suicidesqud.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad: Walled In",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4170693-05.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Suicide Squad/The Banana Splits Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5774300-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Sun Devils",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/21933-3320-24473-1-sun-devils.jpg",
      "year": "1984",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Sunfire & Big Hero 6",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26954/500101-sunfire___big_hero_6_1.jpg",
      "year": "1998",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Super 8",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74848/3797407-super-8-001-000-cheapskate.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Super Boxers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1714/229019-19603-117602-1-super-boxers.jpg",
      "year": "1983",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Super DC Giant",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47418-2466-56802-1-super-dc-giant.jpg",
      "year": "1970",
      "publisher": "DC Comics",
      "Field7": "15 Issues"
    },
    {
      "title": "Super Friends",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/15102-2847-16844-1-super-friends.jpg",
      "year": "1976",
      "publisher": "DC Comics",
      "Field7": "47 Issues"
    },
    {
      "title": "Super Friends Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/220433-19414-116334-1-super-friends-specia.jpg",
      "year": "1981",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Super Friends: Calling All Super Friends",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2059493-superfriends2.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Super Friends: Head of the Class",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2059482-superfriends.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Super Friends!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/570274-superfriends_.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Super Friends! : Truth, Justice and Peace",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/580307-sftjap.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Super Hero Squad Spectacular",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/1905601-mshss1a.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Super Hero Squad: A Squad For All Seasons",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1922640-shs__asfas.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Super Hero Squad: Infinity Sword Quest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6626998-01.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Super Hero Squad: Squad Up!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6610230-03.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Super Hero Squad: Squaddies Forever",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6622054-04.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Super Hero Squad: Super Hero Safari",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6512016-6994147576-69927.jpg",
      "year": "2011",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Super Hero Squad: Super Stars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6599802-02.jpg",
      "year": "2010",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Super Heroes Puzzles and Games",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1301248-super_heroes_puzzles_and_games___page_1.jpg",
      "year": "1979",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Super Heroes: Secret Of The Sinister Lighthouse!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/998467-164705_20090314164928_large.jpg",
      "year": "1980",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Super Powers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/24394-3619-27152-1-super-powers.jpg",
      "year": "1986",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Super Powers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/23180-3462-25850-1-super-powers.jpg",
      "year": "1985",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Super Powers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5996352-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Super Powers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/3711183-%24_57.jpg",
      "year": "1984",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Super Powers by Jack Kirby",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6233351-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Super Powers Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3131548-super%20powers%20collection%20v1983%20001%20%281983%29%20pagecover.jpg",
      "year": "1983",
      "publisher": "DC Comics",
      "Field7": "23 Issues"
    },
    {
      "title": "Super Powers!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5998178-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Super Sons",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5700404-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "16 Issues"
    },
    {
      "title": "Super Sons Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6170194-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Super Sons of Tomorrow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6486550-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Super Sons Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730700-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Super Sons: Parent Trap",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6623648-03.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Super Sons: Planet of the Capes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6312686-02.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Super Sons: The Foxglove Mission",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7115847-02.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Super Sons: The Polarshield Project",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6863650-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Super Sons: When I Grow Up...",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6091919-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Super Sons/Dynomutt Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6447367-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Super Villains Unite: The Complete Super-Villain Team-Up",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4433832-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Super-Heroes Battle Super-Gorillas",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2850577-__addme___super_heroes_battle_super_gorillas_v9999__1___page_1.jpg",
      "year": "1976",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Super-Team Family",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/14049-2741-15725-1-super-team-family.jpg",
      "year": "1975",
      "publisher": "DC Comics",
      "Field7": "15 Issues"
    },
    {
      "title": "Super-Villain Classics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/825850-super_villain_classics__1.jpg",
      "year": "1983",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Super-Villain Team-Up",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/13839-2782-15501-1-super-villain-team-u.jpg",
      "year": "1975",
      "publisher": "Marvel",
      "Field7": "17 Issues"
    },
    {
      "title": "Super-Villain Team-Up: Modok's 11",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4504039-01.jpg",
      "year": "2008",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Super-Villain Team-Up/MODOK's 11",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2199725-01.jpg",
      "year": "2007",
      "publisher": "Marvel",
      "Field7": "5 Issues"
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
      "title": "Superboy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6212065-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superboy & Risk - Double-Shot",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27053/619436-superboy___risk.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superboy and the Legion of Super-Heroes",
      "img": "https://comicvine1.cbsistatic.com/bundles/phoenixsite/images/core/loose/img_broken.png",
      "year": "1977",
      "publisher": "DC Comics",
      "Field7": "28 Issues"
    },
    {
      "title": "Superboy and the Legion of Super-Heroes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5909126-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Superboy And The Legion of Super-Heroes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1830204-sblshearlyyearstpb.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superboy and the Ravers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4404747-01.jpg",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "19 Issues"
    },
    {
      "title": "Superboy Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2824325-sbann_cv1_ds.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superboy Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/35965-5262-40155-1-superboy-annual.jpg",
      "year": "1994",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Superboy Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67581/1261682-annual_6711_superboy__1___page_1.jpg",
      "year": "1964",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superboy Plus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/38498-5971-43257-1-superboy-plus.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Superboy Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51078/1296563-adv.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superboy Spectacular",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/81074/2816701-superboy__spectacular_v1__1___page_1.jpg",
      "year": "1980",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superboy: Blood and Steel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3930259-04.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superboy: Extraction",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3073994-02.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superboy: Futures End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4086400-superboy.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superboy: Incubation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3485566-01.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superboy: Lost",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3536766-03.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superboy: Paradox",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4328752-05.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superboy: Smallville Attacks",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/2125442-sbsmallvilleatt.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superboy: The Boy of Steel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100647/2865180-superboy.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superboy: The Comic Book",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/29155-4378-32398-1-superboy.jpg",
      "year": "1990",
      "publisher": "DC Comics",
      "Field7": "17 Issues"
    },
    {
      "title": "Superboy's Legion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3664/359096-21245-127755-1-superboy-s-legion.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Superboy/Robin: World's Finest Three",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3184113-01.jpg",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Supergirl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/20221-3113-22562-1-daring-new-adventure.jpg",
      "year": "1982",
      "publisher": "DC Comics",
      "Field7": "23 Issues"
    },
    {
      "title": "Supergirl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/108980/2187824-supergirl__01b__2005_.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "68 Issues"
    },
    {
      "title": "Supergirl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/38145-5766-42825-1-supergirl.jpg",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "81 Issues"
    },
    {
      "title": "Supergirl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/34569-5263-38612-1-supergirl.jpg",
      "year": "1994",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Supergirl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3548154-01.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "41 Issues"
    },
    {
      "title": "Supergirl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/17981/2055935-supergirl__vol5__tpb.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/11376-2555-12628-1-supergirl.jpg",
      "year": "1972",
      "publisher": "DC Comics",
      "Field7": "10 Issues"
    },
    {
      "title": "Supergirl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5422113-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "38 Issues"
    },
    {
      "title": "Supergirl and the Legion of Super-Heroes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3664/198471-19189-114907-1-supergirl-and-the-le.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "21 Issues"
    },
    {
      "title": "Supergirl And The Legion Of Super-Heroes: Adult Education",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4886751-04.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl And The Legion Of Super-Heroes: Strange Visitor From Another Century",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4886749-03.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl And The Legion Of Super-Heroes: The Dominator War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4886753-05.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl And The Legion Of Super-Heroes: The Quest For Cosmic Boy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4886755-06.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/29350/941255-sgann_cv1_ds_copy.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Supergirl Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6034037-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Supergirl Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3848/126379-18623-109863-1-supergirl-annual.jpg",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Supergirl Archives",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2566109-01.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Supergirl By Peter David",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5489520-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Supergirl Movie Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/81074/2816700-supergirl_movie_special___page_1.jpg",
      "year": "1985",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl Plus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1060461-batman___unseen__5__of_5___2010____page_1.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/5359972-supergirl%20special%20edition%20%231.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl: An Adult Coloring Book",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5450887-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl: Being Super",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6447364-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl: Being Super",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5613479-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Supergirl: Beyond Good and Evil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4886724-04.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl: Bizarrogirl",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4886735-09.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl: Breaking the Chain",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5368835-02.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl: Candor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4886719-02.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl: Cosmic Adventures in the 8th Grade",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4886758-01.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl: Cosmic Adventures in the 8th Grade",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/29350/634566-cosmic_cover.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Supergirl: Crucible",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4685139-06.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl: Daughter of New Krypton",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6223169-04.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl: Death And The Family",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4886733-08.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl: Escape From the Phantom Zone",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6113428-02.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl: Fastest Woman Alive",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5962884-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl: Friends And Fugitives",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4886731-07.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl: Futures End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4108613-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl: Ghosts of Krypton",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5873114-03.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl: Girl In the World",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498183-02.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl: Girl of No Tomorrow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6364078-03.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl: Identity",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4886722-03.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl: Last Daughter of Krypton",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3485595-01.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl: Many Happy Returns",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/248938-19891-119109-1-supergirl-many-happy.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl: Out of the Past",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3962847-04.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl: Plain Sight",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6666599-04.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl: Power",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4886717-01.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl: Rebirth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5385314-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl: Red Daughter of Krypton",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4332740-05.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl: Reign of the Cyborg Supermen",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5852979-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl: Sanctuary",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3635326-03.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl: Sins of the Circle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7188302-02.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl: The Girl of Steel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5019276-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl: The Hunt For Reactron",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6760847-05.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl: The Killers of Krypton",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6903193-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl: The Silver Age",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5960932-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Supergirl: The Silver Age Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5261770-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Supergirl: Way of the World",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4886727-05.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl: Who is Superwoman?",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4886729-06.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl: Wings",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3755112-01.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl/Lex Luthor Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1060467-batman___unseen__5__of_5___2010____page_1.jpg",
      "year": "1993",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Supergirl/Prysm Double-Shot",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1060468-batman___unseen__5__of_5___2010____page_1.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superior Carnage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3176712-01a.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "5 Issues"
    },
    {
      "title": "Superior Carnage",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3756099-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Superior Carnage Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3619509-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Superior Foes of Spider-Man: Getting the Band Back Together",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3767718-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Superior Iron Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4212113-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "9 Issues"
    },
    {
      "title": "Superior Iron Man: Infamous",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4525015-01.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Superior Iron Man: Stark Contrast",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4801328-02.jpg",
      "year": "2015",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Superior Octopus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6631630-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Superior Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3548171-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "34 Issues"
    },
    {
      "title": "Superior Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3305778-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "3 Issues"
    },
    {
      "title": "Superior Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6735989-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Superior Spider-Man Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3519434-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Superior Spider-Man Companion",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730765-01.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Superior Spider-Man Team-Up",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3192686-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "12 Issues"
    },
    {
      "title": "Superior Spider-Man Team-Up Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3409442-01a.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Superior Spider-Man Team-Up: Friendly Fire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3781827-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Superior Spider-Man Team-Up: Superior Six",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4527087-02.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Superior Spider-Man Team-Up: Superiority Complex",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3165452-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Superior Spider-Man Team-Up: Versus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3826106-01.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Superior Spider-Man: A Troubled Mind",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3255590-02.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Superior Spider-Man: Full Otto",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7023044-01.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Superior Spider-Man: Goblin Nation",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4538653-06.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Superior Spider-Man: My Own Worst Enemy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3073995-01.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Superior Spider-Man: Necessary Evil",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3781829-04.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Superior Spider-Man: No Escape",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3455887-03.jpg",
      "year": "2013",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Superior Spider-Man: Otto-Matic",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7184473-02.jpg",
      "year": "2019",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Superior Spider-Man: The Complete Collection",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6792553-4998796285-74797.jpg",
      "year": "2018",
      "publisher": "Marvel",
      "Field7": "2 Issues"
    },
    {
      "title": "Superior Spider-Man: The Superior Venom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3970724-05.jpg",
      "year": "2014",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38826/851086-01.jpg",
      "year": "1939",
      "publisher": "DC Comics",
      "Field7": "488 Issues"
    },
    {
      "title": "Superman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6536011-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "19 Issues"
    },
    {
      "title": "Superman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/999831-devil_may_cry__3__2004____page_1.jpg",
      "year": "1981",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5266004-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "45 Issues"
    },
    {
      "title": "Superman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/24856-3816-27645-1-superman.jpg",
      "year": "1987",
      "publisher": "DC Comics",
      "Field7": "228 Issues"
    },
    {
      "title": "Superman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/2022908-superman__2011_2nd_series__01a.jpeg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "57 Issues"
    },
    {
      "title": "Superman - Action Comics: Superdoom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4613169-06.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman - Action Comics: Welcome To The Planet",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5808966-02.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman : The Wedding Album",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1630476-p00001.jpg",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman & Batman Generations",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4404771-01.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Superman & Batman: Generations II",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4404775-01.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Superman & Batman: Generations III",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/12075/469703-scan10037.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Superman & Batman: World's Finest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117539/2800657-2800654-601995.jpeg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman & Bugs Bunny",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/42338-6741-48243-1-superman-amp-bugs-.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Superman & Jeff Gordon",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/4806057-sup1.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman & Savage Dragon: Chicago",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/942383-52100_20060717232651_large.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman & Savage Dragon: Metropolis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/942394-52100_20060717232651_large.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman #32 Director's Cut",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4087855-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman 10-Cent Adventure",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/19859/654683-16896_20060314191516_large.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman 201",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3104720-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman 3-D",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1266219-standard_superman_v2008__1___page_1.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman 80-Page Giant",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1158374-superman_80_page_giant.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman 80-Page Giant",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/964178-122292_20080316155509_large.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Superman 80-Page Giant 2011",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/83283/1650969-00.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman Action Comics: Under the Skin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4963475-07.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman Adventures",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100555/2801682-superman.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Superman Adventures",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/38264-5767-42970-1-superman-adventures.jpg",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "66 Issues"
    },
    {
      "title": "Superman Adventures",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4900424-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Superman Adventures Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/59022/1484936-annual_adventures_of_superman_v1987__1___page_1.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman Adventures Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64780/1796393-45669_20060617013609_large.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman Adventures: The Man of Steel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3413418-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman Aliens 2: God War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3184116-01.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Superman and Batman Generations",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3133228-superman%20%26%20batman%20-generations%20-%20tpb%20pagecover.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman and Batman vs. Aliens and Predator",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/5941301-sup1b.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman and Batman vs. Aliens and Predators",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5706520-01.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Superman and Batman vs. Vampires and Werewolves",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/5942846-sup1.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman and Batman vs. Vampires and Werewolves",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1808/587995-sbvw01001.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Superman and Batman: World's Funnest",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/136212-18705-110577-1-superman-and-batman.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman and the Great Cleveland Fire",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/5942865-sup1c.jpg",
      "year": "1948",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman and the Justice League America",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5109027-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Superman and the Legion of Super-Heroes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74140/1460758-sloshhc_000_000.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman And Wonder Woman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/999823-devil_may_cry__3__2004____page_1.jpg",
      "year": "1982",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2556504-smann_cv1.jpeg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Superman Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5563206-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/4249-2016-4652-1-superman-annual.jpg",
      "year": "1960",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Superman Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/5815349-sm%20annual%20%231%20final.jpg",
      "year": "1987",
      "publisher": "DC Comics",
      "Field7": "14 Issues"
    },
    {
      "title": "Superman Archives",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2056946-superman.jpg",
      "year": "1989",
      "publisher": "DC Comics",
      "Field7": "8 Issues"
    },
    {
      "title": "Superman Beyond",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/2301780-sb1.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "21 Issues"
    },
    {
      "title": "Superman Beyond: Man Of Tomorrow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3003188-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman Blank",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6631631-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman Blue",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6506264-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman by Mark Millar",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6447365-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman Confidential",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/2973/105829-18444-108239-1-superman-confidentia.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "14 Issues"
    },
    {
      "title": "Superman Family Adventures",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515548-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Superman Family Adventures",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/2375919-sfa1.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Superman For All Seasons",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/33913/1051185-1_1.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Superman For All Seasons",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3586789-01.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman for the Animals",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/136226-18706-110584-1-superman-for-the-ani.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman Forever",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1147974-p00001___superman_forever__1__1998_6____superman_forever.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman Giant",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11134/111349471/6495075-superman%20giant%201.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "5 Issues"
    },
    {
      "title": "Superman Giant",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7195718-01.jpg",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman III",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1447769-supermaniiimovieadap.jpg",
      "year": "1983",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman in \"Victory by Computer\"",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/136448-18709-110593-1-victory-by-computer.jpg",
      "year": "1981",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman in Action Comics: Featuring The Complete Covers of the First 25 Years",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100559/2391989-supermaninactioncomicscovers.jpg",
      "year": "1993",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman in Action Comics: Featuring The Complete Covers of the Second 25 Years",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100559/2391991-supermaninactioncomicscovers2.jpg",
      "year": "1994",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman in the Eighties",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2059463-in_the_eighties.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman in the Fifties",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74848/1653662-superman_in_the_fifties.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman in the Forties",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2059470-in_the_forties.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman in the Seventies",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2059465-in_the_seventies.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman in the Sixties",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2059467-in_the_sixties.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman Inc.",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6471629-6607728919-copyO.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman IV: The Quest For Peace",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1446724-thequest.jpg",
      "year": "1987",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman Man of Steel; Superboy vs. King Shark",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/6104401-sup1.jpg",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman Meets the Motorsports Champions",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3133232-superman%20meets%20the%20motorsports%20champions%20%281999%29%20pagecover.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman Meets the Quik Bunny",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/4118400-sm%20meets%20qb%20fc.jpg",
      "year": "1987",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman of Smallville",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7059816-6468501880-80248.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman Plus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/993017-38135_20081107055406_large.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman Red/Superman Blue",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/954208-36203_20061006170620_large.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman Returns",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/80778/1904791-sr.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman Returns Prequel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/246588-19812-118855-1-supeman-returns-preq.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Superman Returns: The Prequels",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2079840-superman_returns_the_prequels.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman Secret Files & Origins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1147975-p00001.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Superman Smashes the Klan",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7108512-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Superman Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1148032-p00001.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6429668-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/61902/1151779-sc00009eaa.jpg",
      "year": "1983",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Superman Unchained",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3099619-unchained1.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "9 Issues"
    },
    {
      "title": "Superman Unchained Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4265299-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman Unchained Director's Cut",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3193221-smund_cv1_dc.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman Villains: Secret Files & Origins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/927679-villains.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman vs the Revenge Squad",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2063143-superman_vs_the_revenge_squad.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman vs. Aliens",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3184124-01.jpg",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Superman vs. Brainiac",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3514337-01.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman vs. Darkseid",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4545165-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman vs. Darkseid: Apokolips Now!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1147981-apokolipsnow.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman vs. Flash",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/2396883-svsf.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman vs. Lex Luthor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2063144-superman_vs_lex_luthor.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman vs. Mongul",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3507899-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman vs. Muhammad Ali",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/1616250-supermanali.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman vs. Predator",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2062138-superman_vs_predator.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman vs. Predator",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3184135-01.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Superman Vs. Shazam!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515553-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman vs. the Amazing Spider-Man",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/161029-18946-112157-1-superman-vs-the-ama.jpg",
      "year": "1976",
      "publisher": "Marvel",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman Vs. Zod",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2948685-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman Year One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6974988-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Superman: 3-2-1 Action!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1982917-321_action.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: A Celebration of 75 Years",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3468787-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: A Nation Divided",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6461182-2834443856-copyO.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Action Comics - Path of Doom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5700403-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Action Comics Rebirth Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5923514-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Superman: Action Comics: Booster Shot",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6570617-05.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Action Comics: Invisible Mafia",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6875019-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Action Comics: Last Rites",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5601643-09.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Action Comics: Leviathan Rising",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7133552-02.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Action Comics: Men of Steel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5923513-03.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Action Comics: The New World",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6123844-04.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Action Comics: The Oz Effect Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6339672-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Action Comics: Truth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5328125-08.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Action Comics: World Against Superman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6903194-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Adventures of the Man of Steel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2079844-superman_adventures.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: American Alien",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5479436-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: American Alien",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4903545-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "7 Issues"
    },
    {
      "title": "Superman: At Earth's End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/36287/787486-01.gif",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Back In Action",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1856266-back_in_action.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Before Truth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5133392-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Birthright",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3368495-01.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Birthright",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/7015/157302-18926-111922-1-superman-birthright.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Superman: Bizarroverse",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6703956-07.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Black Dawn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6164875-04.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Blood of My Ancestors",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1147985-p00001.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Bottle City of Kandor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2060504-bottle.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Brainiac",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515545-01.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Camelot Falls",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4048618-01.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Camelot Falls: The Weight of the World",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4108718-02.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Codename Patriot",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2062165-patriot.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Cover To Cover",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100559/2381447-supermancovertocover.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Critical Condition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2062166-critical_condition.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Dark Knight Over Metropolis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3377550-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Day of Doom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3133195-superman-day%20of%20doom%20tpb%20pagecover.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Day of Doom",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/21859/423329-superman.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Superman: Deadly Legacy",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/128795/2805168-superman_deadly_legacy_english__2_.jpg",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Distant Fires",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6461180-1652335164-copyO.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Doomed",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3816640-superman%20doomed.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Superman: Doomed",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4466352-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Doomsday",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5147001-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Earth One",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3368497-01.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Superman: Emperor Joker",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5133393-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Emperor Joker",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9506/291036-20401-121999-1-superman-emperor-jo.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: End of the Century",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1147986-p00001.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Ending Battle",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515546-01.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Escape From Bizarro World",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515547-01.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Exile",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2137202-exile.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: For All Seasons - The Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4265298-01.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: For Earth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1147988-p00001.jpg",
      "year": "1991",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: For Tomorrow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2911534-for_tomorrow.png",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: For Tomorrow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/1578772-5075_400x600.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Superman: For Tomorrow 15th Anniversary Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7167924-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Funeral For A Friend",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5147002-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Fury At World's End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3556377-03.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Futures End",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4114535-superman.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Godfall",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/393711-21621-130546-1-superman-godfall.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Grounded",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5083545-01.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Superman: H'el On Earth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3468788-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Heroes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7240311-01.jpg",
      "year": "2020",
      "publisher": "DC Comics",
      "Field7": "0 Issues"
    },
    {
      "title": "Superman: Hopes and Fears",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6374075-05.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Imperius Lex",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6538897-06.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: In The Name Of Gog",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1781486-superman_in_the_name_of_gog.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Infinite City",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1842971-superman_infinite_city.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Kal",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6451622-01.jpg",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: King of the World",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1147991-week22_1999_supes_kotw_01_00_fc.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Krisis Of The Krimson Kryptonite",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/102483/3819032-1.jpg",
      "year": "1996",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Krypton Returns",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4383733-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Kryptonite",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/58127/2836035-12501_900x1350.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Kryptonite: The Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6744814-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Last Son",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1289417-last_son.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Last Son of Earth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/40922-6445-46188-1-superman-last-son-o.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Superman: Last Son of Krypton",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2798004-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Last Son of Krypton FCBD Special Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3021784-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Last Stand of New Krypton",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1147968-0.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Superman: Last Stand of New Krypton",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1534680-slsonkvol1.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Superman: Last Stand on Krypton",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1246321-last_stand_on_krypton___page_1.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Leviathan Rising Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6947225-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Lex 2000",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3755114-01.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Lois and Clark",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4852083-01.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "8 Issues"
    },
    {
      "title": "Superman: Lois and Clark",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5408304-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Lois Lane",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/284557-20361-121761-1-superman-lois-lane.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Lois Lane",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3662646-lois%20lane.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Man of Steel: Doomsday Is Coming",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/996148-164705_20090314164928_large.jpg",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Man of Steel: Target Superman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/75522/1498012-supermanmanofsteeltarge19364_f.gif",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Metropolis",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/34588/1095260-1_1.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "12 Issues"
    },
    {
      "title": "Superman: Metropolis Secret Files",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1148019-metropolis_secret_files_2000__01_.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Mon-El",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1642990-smonelvol1.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Superman: Multiplicity",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5984711-03.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: New Krypton",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3781998-01.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Superman: New Krypton Special",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/594225-00.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Nightwing and Flamebird",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/2110149-superman_n_and_f_1.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Superman: No Limits!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2062139-no_limits.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Our Worlds at War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/1956841-s_owaw1a.jpg",
      "year": "2002",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Superman: Our Worlds at War Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/75522/1540841-66_8our.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Our Worlds at War Secret Files & Origins",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/33599/802098-superman_owaw_secret_files_origins_no1.jpg",
      "year": "2001",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Panic in the Sky",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/61948/1528395-superman_pits_000.jpg",
      "year": "1993",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Peace on Earth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/395286-21654-130710-1-superman-peace-on-e.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Phantom Zone",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515549-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: President Lex",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/61948/1528394-000.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: President Luthor",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6289373-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Psi-War",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4009347-04.jpg",
      "year": "2014",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Rebirth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5238290-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Rebirth Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6069464-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Superman: Reborn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6050310-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Red Son",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/60986-10943-93981-1-superman-red-son.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Superman: Red Son",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3382379-01.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Red Son: The Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/148518/3035725-12915_900x1350.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Redemption",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2062145-redemption.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Reign of Doomsday",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/2194094-supermanreign.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Reign of the Supermen",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5147003-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Return of Doomsday",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3767746-01.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Return To Glory",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5455995-02.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Return to Krypton",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2062144-return_to_krypton.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Riddle of the Senseless Crimes",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/998474-164705_20090314164928_large.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Ruin Revealed",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2062140-ruin_revealed.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Sacrifice",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/313450-20615-123553-1-superman-sacrifice.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Savage Dawn",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5467852-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Save the Planet",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1147998-p00001.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Secret Files 2009",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/29350/917068-00.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Secret Identity",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3368499-01.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Secret Identity",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/29723/662363-2414_400x600.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Superman: Secret Identity - The Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5019277-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Secret Origin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1598289-ssodeluxe.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Secret Origin",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1571493-sso1.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Superman: Secret Origin: The Deluxe Edition",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7167925-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Secrets and Lies",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3368494-02.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Shadows Linger",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/2104469-shadows_linger.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Silver Banshee",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1148000-p00001.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Superman: Son of Superman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5628453-01.jpg",
      "year": "2017",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Speeding Bullets",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6451368-1807961217-copyO.jpg",
      "year": "1993",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Strange Attractors",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1781645-strange_attractors.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Strength",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1148002-p00001.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Superman: Sunday Classics",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/75349/2780374-superman___the_sunday_classics__1939___page_1.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Tales from the Phantom Zone",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515550-01.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Tales of the Bizarro World",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2060859-bizarro_world.jpg",
      "year": "2000",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: Terra-Man's Skyway Robbery",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/998470-164705_20090314164928_large.jpg",
      "year": "1980",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: That Healing Touch",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2060862-that_healing_touch.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: The Action Comics Archives",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/168497-5975-113195-1-superman-the-action.jpg",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Superman: The Adventures of Flamebird & Nightwing",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2060858-nightwing_flamebird.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: The Amazing Transformations of Jimmy Olsen",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/251237-20009-119467-1-superman-the-amazin.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: The Black Ring",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515551-01.jpg",
      "year": "2011",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Superman: The City of Tomorrow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7174843-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: The Coming of Atlas",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1642892-supermantcoatlashc.jpg",
      "year": "2009",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: The Coming of the Supermen",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5533013-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: The Coming of the Supermen",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5062802-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Superman: The Computers That Saved Metropolis!",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/136227-18707-110585-1-superman-the-comput.jpg",
      "year": "1980",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: The Dailies",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2160511-supermandailies.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Superman: The Daily Planet",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2079845-daily_planet.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: The Dark Side",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1579216-01.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Superman: The Dark Side",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/61948/1753407-001_002.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: The Death and Return of Superman Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6883292-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: The Death and Return of Superman Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2941439-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: The Death and Return of Superman Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2079846-superman_omnibus.jpg",
      "year": "2007",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: The Death of Clark Kent",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54045/1153428-superman_death_of_clack_kent.png",
      "year": "1997",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: The Doomsday Wars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4404779-01.jpg",
      "year": "1998",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Superman: The Doomsday Wars",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2099882-superman__doomsday_wars_v1999__1__1999____page_1.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: The Earth Stealers",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1147995-p00001.jpg",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: The Exile & Other Stories Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6374073-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: The Final Days of Superman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5500628-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: The Golden Age",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5099166-01.jpg",
      "year": "2016",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Superman: The Golden Age Omnibus",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3088878-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Superman: The Greatest Stories Ever Told",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100559/2141135-supermangreatest1.jpg",
      "year": "2006",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Superman: The Journey",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/248951-19893-119112-1-superman-the-journey.jpg",
      "year": "2005",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: The Kansas Sighting",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/954196-36203_20061006170620_large.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Superman: The Last Family of Krypton",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1323929-supermanlfok.jpg",
      "year": "2010",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Superman: The Last God of Krypton",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/24019/835368-superman__the_last_god_of_krypton.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: The Legacy of Superman",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1147949-superman___the_legacy_of_superman__mookie__pg001.jpg",
      "year": "1993",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: The Man of Steel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/125887/2398408-6193191_1.jpg",
      "year": "1988",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: The Man of Steel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515552-01.jpg",
      "year": "2003",
      "publisher": "DC Comics",
      "Field7": "9 Issues"
    },
    {
      "title": "Superman: The Man of Steel",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/30952-4571-34451-1-superman-the-man-of.jpg",
      "year": "1991",
      "publisher": "DC Comics",
      "Field7": "136 Issues"
    },
    {
      "title": "Superman: The Man Of Steel - Believe",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3413419-01.jpg",
      "year": "2013",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: The Man of Steel (Best Buy Exclusive)",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3133207-superman-the%20man%20of%20steel%20best%20buy%20exclusive%20%282006%29%20pagecover.jpg",
      "year": "1986",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: The Man of Steel Annual",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/347155-21108-126736-1-superman-the-man-of.jpg",
      "year": "1992",
      "publisher": "DC Comics",
      "Field7": "6 Issues"
    },
    {
      "title": "Superman: The Man of Steel Gallery",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1300610-manofsteelgallery.jpg",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: The Man of Tomorrow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/36695-5523-41014-1-superman-man-of-tom.jpg",
      "year": "1995",
      "publisher": "DC Comics",
      "Field7": "16 Issues"
    },
    {
      "title": "Superman: The Man of Tomorrow Archives",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2079842-superman_man_of_tomorrow_archives.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "3 Issues"
    },
    {
      "title": "Superman: The Many Worlds of Krypton",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6302409-01.jpg",
      "year": "2018",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: The Men of Tomorrow",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4739536-06.jpg",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: The Odyssey",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1147996-p00001.jpg",
      "year": "1999",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: The Power Within",
      "img": "https://comicvine1.cbsistatic.com/bundles/phoenixsite/images/core/loose/img_broken.png",
      "year": "2015",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: The Secret Years",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/5809224-stsy%20%231%20final.jpg",
      "year": "1985",
      "publisher": "DC Comics",
      "Field7": "4 Issues"
    },
    {
      "title": "Superman: The Secrets of The Fortress of Solitude",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/2324770-smsfs.jpg",
      "year": "2012",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: The Third Kryptonian",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1569538-141977_20090101152934_large.jpg",
      "year": "2008",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: The Unity Saga: Phantom Earth",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6828006-01.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: The Unity Saga: The House of El",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7152280-02.jpg",
      "year": "2019",
      "publisher": "DC Comics",
      "Field7": "1 Issues"
    },
    {
      "title": "Superman: The World's Finest Comics Archives",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/114183/5143476-superman_the_world%27s_finest_comics_archives_vol_1_1.jpg",
      "year": "2004",
      "publisher": "DC Comics",
      "Field7": "2 Issues"
    },
    {
      "title": "Superman: The Wrath of Gog",
      "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/311566-20584-123346-1-supeman-the-wrath-o.jpg",
      "year": "2005",
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