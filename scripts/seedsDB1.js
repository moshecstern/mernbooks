// const mongoose = require("mongoose");
// const db = require("../models");

// // graphicKnowveldb
// mongoose.connect(
//     process.env.MONGODB_URI ||
//     "mongodb://localhost/comicbookdb"
//   );
// // // https://www.amazon.com/gp/product/B07JJJGYQ4/?ie=UTF8&%2AVersion%2A=1&%2Aentries%2A=0
// // //amazon banner link https://affiliate-program.amazon.com/home/ads/adcode/search?ac-ms-src=quicklinks&search_term=BATMAN+KINDLE
// // // reading lists  https://www.comicbookherald.com/reading-dc-comics/
// // // batman reading list https://www.comicbookherald.com/reading-dc-comics/batman-reading-order/
// // // good reads 
// // // GCD indexing??  https://docs.comics.org/wiki/Developer%27s_Guide_to_the_Code
// // //https://docs.comics.org/wiki/Indexing
// // // dc comics listing of seriesmanual q
// // // https://www.dccomics.com/comics?seriesid=232253#browse
// // //scrape this website, doing more research
// // // https://www.comics.org/series/76455/details/
// // // list of batman comics- go to collections/ collected
// // // https://en.wikipedia.org/wiki/List_of_Batman_comics

// const comicvinevolumesSeed = [
//     {
//       "title": "'Mazing Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23749/431926-59700_20061008130132_large.jpg",
//       "year": "1986",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "'Mazing Man Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23749/431984-61334_20060902142054_large.jpg",
//       "year": "1987",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "'Nuff Said",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23749/438551-134029_20080617031059_large.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "\"Out of Control\" Starring Superman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2856693-__addme____out_of_control__starring_superman_v9999___page_1.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "100th Anniversary Special: Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/3978807-3970330-0%2Baven100th2014001_dc11-page-001.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "100th Anniversary Special: Fantastic Four",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3930262-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "100th Anniversary Special: Guardians of the Galaxy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3993995-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "100th Anniversary Special: Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3945865-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "100th Anniversary Special: X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3962862-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "15-Love",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15455/1849553-15love.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "1602 Witch Hunter Angela",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4613164-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "1602 Witch Hunter Angela: Warzones!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5045258-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "1872",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4670517-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "1939 Daily Bugle",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52212/974056-bd1939.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "1985",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/49017/1296517-1985_tpb_cover.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "1985",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/402747-21711-130974-4-1985.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "1994 Marvel Comics Publishing Plan",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849182-__addme___marvel_comics_publishing_plan_v9999__1___page_1.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "1st Issue Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4028694-a1.jpg",
//       "year": "1975",
//       "publisher": "DC Comics",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "2001, A Space Odyssey",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111121983/5766143-7427260866-qTy1ND1MnhzoNx2fR5IVTRHo-R16oQuVaPiEyXFRr1R7D_shlhe_HAYRmLqw9T9x-aodsIomc4vC%3Ds0",
//       "year": "1976",
//       "publisher": "Marvel",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "2001, A Space Odyssey",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/43236/3805443-2001-a-space-odyssey.jpg",
//       "year": "1976",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "2010",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/22747-3470-25376-1-2010.jpg",
//       "year": "1985",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "2099 A.D.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/234641-19677-118043-1-2099-a-d.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "2099 A.D. Apocalypse",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/234643-19678-118044-1-2099-a-d-apocalypse.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "2099 A.D. Genesis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/234644-19679-118045-1-2099-a-d-genesis.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "2099 Alpha",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7153348-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "2099 Omega",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7184405-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "2099 Sketchbook",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23749/494437-46611_20060627184200_large.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "2099 Special: The World of Doom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/234646-19680-118046-1-2099-special-the-wo.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "2099 Unlimited",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2753760-01.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "2099 Unlimited Ashcan",
//       "img": "",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "2099: Manifest Destiny",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/235129-19682-118059-1-2099-manifest-desti.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "2099: World of Tomorrow",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/813099-2099wot1a.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "3-D Batman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23749/498415-113854_20071129160737_large.jpg",
//       "year": "1966",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "3-D Batman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/431425-3db.jpg",
//       "year": "1953",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "40 Years of the Amazing Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23749/503110-22564_20060104171532_large.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "40 Years of the Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23749/503137-b0e5_1.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "40 Years of X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23749/503165-5325_1.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "411",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23749/503256-9781_20060119233051_large.gif",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "44 Years of the Fantastic Four",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23749/503273-22565_20060104175657_large.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "5 Ronin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/87073/1697059-5ronin01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "5 Ronin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1867231-5_rnn.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "52",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4346352-01.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "52",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/313155-18053-105733-2-52.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "52 Issues"
//     },
//     {
//       "title": "52",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5263990-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "52 Aftermath: The Four Horsemen",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1855400-52_aftermath.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "52 Aftermath: The Four Horsemen",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/184780-19088-113982-1-52-aftermath-the-fo.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "52 Companion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23749/505054-108912_20071018014056_large.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "52 Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2719237-__kgrhqz__nwfcqs2nfwfbqr_yej2zq__60_57.jpeg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "52: The Covers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2077904-52.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "80 Page Giant",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/6612-2175-7220-1-80-page-giant.jpg",
//       "year": "1964",
//       "publisher": "DC Comics",
//       "Field7": "15 Issues"
//     },
//     {
//       "title": "A Contract with God",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/19151/679209-contractgn.jpg",
//       "year": "1978",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "A Date with Judy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/45860-1133-53209-1-date-with-judy-a.jpg",
//       "year": "1947",
//       "publisher": "DC Comics",
//       "Field7": "79 Issues"
//     },
//     {
//       "title": "A Life Force",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/79902/1439477-p00001.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "A Very DC Halloween",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7091384-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "A Very DC Rebirth Holiday",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6123851-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "A Very DC Rebirth Holiday Sequel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6676208-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "A Very DC Valentine's Day",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6760850-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "A Year Of Marvels",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5173580-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "A Year of Marvels",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5808972-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "A Year of Marvels: April Infinite Comic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5128144-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "A Year Of Marvels: August Infinite Comic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5373390-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "A Year Of Marvels: February Infinite Comic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5044858-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "A Year Of Marvels: July Infinite Comic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5295286-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "A Year Of Marvels: June Infinite Comic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5267949-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "A Year of Marvels: March Infinite Comic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5091086-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "A Year Of Marvels: May Infinite Comic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5193994-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "A Year Of Marvels: November Infinite Comic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5547432-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "A Year Of Marvels: October Infinite Comic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5503907-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "A Year Of Marvels: September Infinite Comic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5424784-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "A Year Of Marvels: The Incredible",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5264045-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "A Year of Marvels: The Unbeatable",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5489532-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "A Year of Marvels: The Uncanny",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5571293-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "A Year of Marvels: The Unstoppable",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5355955-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "A-Babies vs. X-Babies",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2658433-01a.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "A-Force",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4984266-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "A-Force",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4572718-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "A-Force Presents",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4801970-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "A-Force: Hypertime",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5306274-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "A-Force: Rage Against the Dying of the Light",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5658715-02.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "A-Force: Warzones!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4912376-00.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "A-Next",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23749/422637-20003_20060403101253_large.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "A-Team Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84048/2937330-ateamannual1.jpg",
//       "year": "1986",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "A-Team Storybook Comics Illustrated",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84048/2937335-ateam_storybook.jpg",
//       "year": "1983",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "A. Bizarro",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/40703-6307-45909-1-a-bizarro.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "A+X",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2675510-www.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "A+X: A+X = Amazing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3455886-02.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "A+X: A+X = Awesome",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3059630-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "A+X: A+X = Outstanding",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3968800-03.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "AAFES 10th Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/2811878-aafes_10th_edition___new_avengers___exchange__2010__pagecover.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "AAFES 11th Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3924025-aafes%2011th%20edition%20-%20captain%20america%20-%20electric%20nightmare%20%282011%29%20pagecover.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "AAFES 12th Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3924230-captain%20america%20-%20the%20first%20avenger%20american%20armed%20forces%20exclusive%20v2011%20012%20%282011%29%20pagecover.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "AAFES 13th Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3924202-the%20avengers%20american%20armed%20forces%20exclusive%20v2012%20013%20%282012%29%20pagecover.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "AAFES 14th Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3924207-the%20avengers%20american%20armed%20forces%20exclusive%20v2012%20014%20%282013%29%20pagecover.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "AAFES 15th Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3924186-aafes%2015th%20edition%20-%20iron%20man%20-%20fin%20fang%20doom%20%282013%29%20pagecover.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "AAFES 16th Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3924198-aafes%2016th%20edition%20-%20thor%20-%20deep%20freeze%20%282013%29%20pagecover.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "AAFES 17th Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/114926/7127089-aafes%20%20-%20captain%20america%20%2317%20%282014%29%20-%20page%201.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "AAFES 4th Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2104130-0968_new_avengers___letters_home__4___page_1.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "AAFES 5th Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2499242-new_avengers_aafes_5th_edition_military_giveaway__21867___page_1.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "AAFES 6th Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/2162552-new_avengers_aafes_6th_edition_military_giveaway___page_1.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "AAFES 7th Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/114973/2397717-aafes_07_001.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "AAFES 8th Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2499187-aafes_8th_edition__200912___page_1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "AAFES 9th Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/47697/2109233-aafes_9th_edition.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "AAFES Activity Book",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/47697/2109250-aafes_activity_book.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Abominations",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/66702-11365-99699-1-abominations.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Absolute All Star Superman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2654122-__kgrhqz__l_e6b9dtn_lbos_ipeusg__60_57.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute All-Star Batman and Robin, The Boy Wonder",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3930246-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Batman & Robin: Batman Reborn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2805022-oct120264.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Batman Arkham Asylum: 30th Anniversary Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7091385-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Batman, Incorporated",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4318730-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Batman: Dark Victory",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/148518/2828198-absdrkvictry.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Batman: Haunted Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4245088-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Batman: Hush",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/1550176-116oxsb_0ll._sl500_aa300_.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Batman: The Black Mirror",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6946251-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Batman: The Court of Owls",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4971443-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Batman: The Killing Joke",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6606770-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Batman: The Long Halloween",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/1549679-6764_400x600.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Carnage",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7031420-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Absolute Carnage",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7205220-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Carnage vs. Deadpool",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7205221-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Carnage vs. Deadpool",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7047332-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Absolute Carnage: Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7109882-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Carnage: Captain Marvel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7153349-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Carnage: Immortal Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7092694-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Carnage: Immortal Hulk and Other Tales",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7212735-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Carnage: Lethal Protectors",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7054334-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Absolute Carnage: Lethal Protectors",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7212737-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Carnage: Miles Morales",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7054335-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Absolute Carnage: Miles Morales",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7212738-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Carnage: Scream",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7039233-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Absolute Carnage: Scream",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7212739-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Carnage: Separation Anxiety",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7039234-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Carnage: Symbiote of Vengeance",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7066177-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Carnage: Symbiote Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7059378-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Carnage: Weapon Plus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7135752-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Crisis On Infinite Earths",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/650888-absolute1.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Dark Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23749/517510-65439_20080406054219_large.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Dark Knight III: The Master Race",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7167919-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute DC: The New Frontier",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/1566482-61nsc1y87al._ss500_.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute DC: The New Frontier 15th Anniversary Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7152306-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Final Crisis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/148518/2832525-absfnlcrss.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Flashpoint",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6771132-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Green Arrow By Kevin Smith",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4479783-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Green Lantern: Rebirth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/1566660-19648653_1.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Green Lantern/Green Arrow",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4963447-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Identity Crisis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/2110085-absolute_identity_crisis.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Infinite Crisis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5575846-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Justice",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/1571636-11906_400x600.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Justice League: Origin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6071273-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Justice League: The World's Greatest Superheroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6123794-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Kingdom Come",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/1259357-5472_400x600.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Luthor/Joker",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3394587-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Ronin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38826/1027563-ronin.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Scarlet",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6883239-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Sinestro Corps War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2659023-feb120252.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Superman for Tomorrow",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/1578639-51zcw4vrcvl._ss500_.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Superman/Batman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3276023-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Absolute Swamp Thing by Alan Moore",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/7140952-9781401284930.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Top Ten",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3073982-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Watchmen",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/53928/1027296-absolute_watchmen.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute WildC.A.T.s by Jim Lee",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6315859-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Absolute Wonder Woman By Brian Azzarello & Cliff Chiang",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5679331-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Across the Universe: The DC Universe Stories of Alan Moore",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23749/520541-43819_20061213162419_large.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Action Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1998210-1a.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "57 Issues"
//     },
//     {
//       "title": "Action Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/2/80536-18005-105403-1-action-comics.jpg",
//       "year": "1938",
//       "publisher": "DC Comics",
//       "Field7": "864 Issues"
//     },
//     {
//       "title": "Action Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5253674-957.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "63 Issues"
//     },
//     {
//       "title": "Action Comics #1000: The Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6624918-1000.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Action Comics #858 Special Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1241380-858.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Action Comics Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2674468-acann_cv1_ds.jpeg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Action Comics Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/4002722-ac%20annual%201.jpg",
//       "year": "1987",
//       "publisher": "DC Comics",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "Action Comics Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6408241-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Action Comics Weekly",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/5478287-ac%20601.jpg",
//       "year": "1988",
//       "publisher": "DC Comics",
//       "Field7": "42 Issues"
//     },
//     {
//       "title": "Action Comics: 80 Years of Superman: The Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6374022-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Action Comics: At the End of Days",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3493694-03.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Action Comics: Bulletproof",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3015659-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Action Comics: Futures End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4069909-action%20comics.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Action Comics: Hybrid",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3978715-04.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Action Comics: Superman and the Men of Steel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/2505515-acvol1.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Action Comics: What Lies Beneath",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4289906-05.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Action Force Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51078/1296507-act1.jpg",
//       "year": "1987",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Action Funnies",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/325822-20848-124930-1-action-funnies.jpg",
//       "year": "1937",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Action Heroes Archives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/583674-ah1.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Acts of Evil!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7212740-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Acts of Vengeance Crossovers Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2880235-1958055_1035537_super.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Acts of Vengeance Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1686635-aov_omn1.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Acts of Vengeance: Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7226939-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Adam Strange",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/66499-11344-99496-1-adam-strange.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Adam Strange",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/30199-4351-33589-1-adam-strange.jpg",
//       "year": "1990",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Adam Strange Archives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/582423-as1.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Adam Strange Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/531382-ass1.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Adam Strange: Planet Heist",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23749/615222-828_20060422070745_large.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Adam Strange: The Man of Two Worlds",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2064616-adam_strange_two_worlds.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Adam Strange: The Silver Age Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5960875-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Adam Strange/Future Quest Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5774269-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Adam: Legend of the Blue Marvel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/603743-q7ydqj1icghwxodjjgw.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Adam: Legend of the Blue Marvel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4079253-01.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Advanced Dungeons & Dragons",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/27376-3974-30374-1-advanced-dungeons-an.jpg",
//       "year": "1988",
//       "publisher": "DC Comics",
//       "Field7": "36 Issues"
//     },
//     {
//       "title": "Advanced Dungeons & Dragons Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23749/731375-38414_20081010230006_large.jpg",
//       "year": "1990",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Advent Rising",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111129651/6070556-advent%20rising%20001%20dc%20majesco%20%232%20-%20page%201.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Adventure Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/220967-3105-116357-1-adventure-comics.jpg",
//       "year": "1938",
//       "publisher": "DC Comics",
//       "Field7": "472 Issues"
//     },
//     {
//       "title": "Adventure Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/20224/918072-1250133805_cvr.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "27 Issues"
//     },
//     {
//       "title": "Adventure Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23749/731415-16396_20051211033419_large.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Adventure Comics 80-Page Giant",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2030497-01.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Adventure Comics Special Featuring: The Guardian",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/603602-244adrl.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Adventure into Fear",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/10085-2472-11100-1-fear.jpg",
//       "year": "1970",
//       "publisher": "Marvel",
//       "Field7": "31 Issues"
//     },
//     {
//       "title": "Adventures in Reading Starring the Amazing Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1295365-adventures_in_reading_starring_the_amazing_spider_man_v2__1___page_1.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Adventures in Reading Starring the Amazing Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48343/959011-num_risation0016.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Adventures in the DC Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/38746-5933-43549-1-adventures-in-the-dc.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "19 Issues"
//     },
//     {
//       "title": "Adventures in the DC Universe Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23749/732226-46405_20061128212255_large.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Adventures of Alan Ladd",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23749/732361-125458_20080419202433_large.jpg",
//       "year": "1949",
//       "publisher": "DC Comics",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "Adventures of Bob Hope",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/45489-1321-52829-1-adventures-of-bob-ho.jpg",
//       "year": "1950",
//       "publisher": "DC Comics",
//       "Field7": "109 Issues"
//     },
//     {
//       "title": "Adventures of Captain America",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6301947-3355365223-64778.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Adventures of Cyclops and Phoenix",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23749/733428-82581_20070121165048_large.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Adventures of Dean Martin & Jerry Lewis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/45598-1467-52938-1-adventures-of-dean-m.jpg",
//       "year": "1952",
//       "publisher": "DC Comics",
//       "Field7": "40 Issues"
//     },
//     {
//       "title": "Adventures of Jerry Lewis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/45637-1818-52978-1-adventures-of-jerry-.jpg",
//       "year": "1957",
//       "publisher": "DC Comics",
//       "Field7": "84 Issues"
//     },
//     {
//       "title": "Adventures of Snake Plissken",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38826/846468-000000000000000000.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Adventures of Supergirl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5479071-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Adventures of Superman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3017042-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "51 Issues"
//     },
//     {
//       "title": "Adventures of Superman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3070855-adventures.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "17 Issues"
//     },
//     {
//       "title": "Adventures of Superman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3762600-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Adventures of Superman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/2396636-adventures_of_superman_424.jpg",
//       "year": "1987",
//       "publisher": "DC Comics",
//       "Field7": "228 Issues"
//     },
//     {
//       "title": "Adventures of Superman Annual",
//       "img": "https://comicvine1.cbsistatic.com/bundles/phoenixsite/images/core/loose/img_broken.png",
//       "year": "1987",
//       "publisher": "DC Comics",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "Adventures of Superman: Gil Kane",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4315180-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Adventures of Superman: José Luis García-López",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515476-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Adventures of the Outsiders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2753791-33.jpg",
//       "year": "1986",
//       "publisher": "DC Comics",
//       "Field7": "14 Issues"
//     },
//     {
//       "title": "Adventures of the Super Sons",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6540075-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Adventures of the Super Sons: Action Detectives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6883240-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Adventures of the Super Sons: Little Monsters",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7152273-02.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Adventures of the X-Men: Clear and Present Dangers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6990889-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Adventures of the X-Men: Rites of Passage",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7144094-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Adventures of the X-Men: Tooth & Claw",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7236763-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Adventures on the Planet of the Apes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4146847-pota1nm9m101.jpg",
//       "year": "1975",
//       "publisher": "Marvel",
//       "Field7": "11 Issues"
//     },
//     {
//       "title": "Adventures With The DC Super Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51078/1296604-adv.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Adventures with the DC Superheroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/698511-1.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aero",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6990890-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "After Watchmen ...What's Next",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51078/1006487-after1.jpeg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Age of Apocalypse",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2232096-www.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "14 Issues"
//     },
//     {
//       "title": "Age of Apocalypse",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4670519-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Age of Apocalypse: Generation Next",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6754/1450862-images.jpeg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Age of Apocalypse: The Chosen",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/983690-age_of_apocalypse_the_chosen.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Age of Apocalypse: The X-Terminated",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2757510-age_of_apocalypse_x_terminated.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Age of Apocalypse: Warzones",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4897070-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Age of Apocalypse: Weapon Omega",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4721775-02.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Age of Conan: Bêlit",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7075978-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Age of Conan: Bêlit, Queen of the Black Coast",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6838517-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Age of Conan: Valeria",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7039236-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Age of Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/98902/2699539-_001.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Age of Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5406567-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Age of Innocence: The Rebirth of Iron Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6384836-4968604432-66617.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Age Of Ultron",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3816330-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Age of Ultron",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2909095-01a.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "11 Issues"
//     },
//     {
//       "title": "Age Of Ultron Companion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3968801-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Age of Ultron vs. Marvel Zombies",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4641163-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Age of Ultron vs. Marvel Zombies",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4909267-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Age of X-Man Alpha",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6779301-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Age of X-Man Omega",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7009250-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Age of X-Man: Apocalypse & the X-Tracts",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7066178-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Age of X-Man: Apocalypse and the X-Tracts",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6838518-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Age of X-Man: Marvelous X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7047333-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Age of X-Man: NextGen",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6797672-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Age of X-Man: NextGen",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7047334-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Age of X-Man: Prisoner X",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6828889-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Age of X-Man: Prisoner X",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7059379-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Age of X-Man: The Amazing Nightcrawler",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7054369-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Age of X-Man: The Amazing Nightcrawler",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6807701-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Age of X-Man: The Marvelous X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6789733-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Age of X-Man: X-Tremists",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6819180-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Age of X-Man: X-Tremists",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7054370-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Age of X: Alpha",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6754/1636484-ageofx1a.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Age of X: Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/87073/1747754-ageofxuniverse01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Agent Carter: S.H.I.E.L.D. 50th Anniversary",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4801978-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Agent Liberty Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5551/590655-2100846d_ce52_4c5e_bc9d_4fbb064bab3c.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Agent X",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64188/1208896-agentx_1.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "15 Issues"
//     },
//     {
//       "title": "Agents of Atlas",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/14859/698202-agents_of_atlas_01__zone_avenger__pg01a.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Agents of Atlas",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7031422-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Agents of Atlas",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/2305/127387-18400-109912-1-agents-of-atlas.JPG",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Agents of Atlas",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4775041-01.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Agents of Atlas MGC",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1228552-agents_of_atlas_mgc.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Agents of Atlas: Dark Reign",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5406568-01.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Agents of Atlas: Pandemonium",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7236764-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Agents of Atlas: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6895560-6787533745-76110.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Agents of Atlas: Turf Wars",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1187115-aoa.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Agents of Atlas: Vs.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1923585-atlas.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Agents of S.H.I.E.L.D.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4995847-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "Agents of S.H.I.E.L.D.: The Coulson Protocols",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5337563-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Agents of S.H.I.E.L.D.: Under New Management",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5586778-02.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "ALF",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47516-4042-56900-1-alf.jpg",
//       "year": "1988",
//       "publisher": "Marvel",
//       "Field7": "50 Issues"
//     },
//     {
//       "title": "ALF",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1168148-alf.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "ALF Holiday Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61403-4044-94398-1-alf-holiday-special.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "ALF* Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61401-4043-94396-1-alf-annual.jpg",
//       "year": "1988",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "ALF* Comics Magazine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1252845-alf_comics_magazine_v1_001.jpg",
//       "year": "1988",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "ALF* Spring Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1253125-alf_spring_special_v1_001.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Alganon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/73936/2037021-alganon_001_pagecover.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Alien Nation Movie Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/712480-anms1.jpg",
//       "year": "1988",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All About Collecting Comic Books",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/653092-all1.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All Flash",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/157387-18925-111918-1-all-flash.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All Funny Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27783/716554-all_funny_1.jpg",
//       "year": "1943",
//       "publisher": "DC Comics",
//       "Field7": "23 Issues"
//     },
//     {
//       "title": "All New Collectors' Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/2805894-all_new_collectors__edition__53__1978____page_1.jpg",
//       "year": "1978",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "All New Collectors' Edition (Superman The Movie)",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2099878-all_new_collectors__edition_vol_1_c_62.jpg",
//       "year": "1979",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All Select Comics 70th Anniversary Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5551/885110-691cf07f_7b90_4838_a7a9_388a25b04414.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All Star Batman & Robin, The Boy Wonder",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/1719140-all_star_batman_and_robin_the_boy_wonder__2005__01a.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "All Star Batman & Robin: Special Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1623246-p00001.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All Star Batman and Robin, the Boy Wonder",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3368460-01.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All Star Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/41628-6596-47206-1-all-star-comics.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "All Star Comics 80-Page Giant",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/36009/710931-allstar1.jpeg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All Star Comics Archives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2055826-all_star.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "All Star Comics: Only Legends Live Forever",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7100345-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All Star Superman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3368463-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All Star Superman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/2352251-all_star_superman__2005__01a.jpeg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "All Star Superman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/28140/1196475-all_star_superman_volume_1.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "All Star Superman (DC Black Label Edition)",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6703915-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All Star Superman #1 Special Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/1715674-all_star_superman__2009_special_edition__1.jpeg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All True Crime Cases",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/251266-20014-119484-1-all-true-crime-cases.jpg",
//       "year": "1948",
//       "publisher": "Marvel",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "All Winners Comics 70th Anniversary Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/906612-1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-American Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/683709-no.1.jpg",
//       "year": "1939",
//       "publisher": "DC Comics",
//       "Field7": "102 Issues"
//     },
//     {
//       "title": "All-American Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/36009/710930-allam1.jpeg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-American Men of War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/172-1553-182-1-all-american-men-of-.jpg",
//       "year": "1952",
//       "publisher": "DC Comics",
//       "Field7": "118 Issues"
//     },
//     {
//       "title": "All-American Western",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/59022/1484914-all_american_western__103___page_1.jpg",
//       "year": "1948",
//       "publisher": "DC Comics",
//       "Field7": "24 Issues"
//     },
//     {
//       "title": "All-Flash Quarterly",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/35506/702484-allfl01.jpg",
//       "year": "1941",
//       "publisher": "DC Comics",
//       "Field7": "32 Issues"
//     },
//     {
//       "title": "All-New All-Different Marvel Point One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4838199-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New Captain America",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4212090-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "All-New Captain America Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4545216-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New Captain America: Fear Him",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4655890-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New Captain America: Fear Him",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4370306-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "All-New Captain America: Fear Him Infinite Comic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4188545-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "All-New Captain America: Hydra Ascendant",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4655892-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New Doop",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3748561-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "All-New Doop",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/4146314-9943222220-01.jp.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New Ghost Rider",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3718049-01a.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "All-New Ghost Rider: Engines of Vengeance",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4133380-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New Ghost Rider: Legend",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4580786-02.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New Guardians of the Galaxy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5830848-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "All-New Guardians of the Galaxy Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5929750-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New Guardians of the Galaxy: Communication Breakdown",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6152982-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New Guardians of the Galaxy: Riders In the Sky",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6195167-02.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New Hawkeye",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4426838-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "All-New Hawkeye",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4900377-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "All-New Inhumans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4934507-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "11 Issues"
//     },
//     {
//       "title": "All-New Inhumans: Global Outreach",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5211075-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New Inhumans: Skyspears",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5489464-02.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New Invaders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3588353-01a.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "15 Issues"
//     },
//     {
//       "title": "All-New Invaders: Gods and Soldiers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3998388-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New Invaders: Original Sin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4245090-02.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New Invaders: The Martians Are Coming",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4593072-03.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New Marvel Now! Point One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3556388-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New Marvel NOW! Previews",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/61948/3518565-all-new%20marvel%20now%21%20previews%20001-000.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "All-New Marvel Now! Teen Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3669089-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New Miracleman Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/4301047-4291866-miraclemanann2014001_dc11-0.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New Official Handbook of the Marvel Universe A to Z",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/371865-18126-106455-2-all-new-official-han.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "All-New Official Handbook of the Marvel Universe A to Z: Update",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26989/498790-1.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "All-New Savage She-Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/764490-001.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "All-New Ultimates",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3748014-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "All-New Ultimates: No Gods, No Masters",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4443581-02.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New Ultimates: Power For Power",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4162322-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New Wolverine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4900378-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "35 Issues"
//     },
//     {
//       "title": "All-New Wolverine - Marvel Legacy Primer Pages",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6064954-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New Wolverine Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5408262-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New Wolverine Saga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/57845/1356976-saga.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New Wolverine: Civil War II",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5489465-02.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New Wolverine: Enemy of the State II",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5830849-03.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New Wolverine: Immune",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6164792-04.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New Wolverine: Old Woman Laura",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6506200-06.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New Wolverine: Orphans of X",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6293858-05.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New Wolverine: The Four Sisters",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5199887-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New X-Factor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3556389-01a.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "20 Issues"
//     },
//     {
//       "title": "All-New X-Factor: AXIS",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4471803-03.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New X-Factor: Change of Decay",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4162324-02.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New X-Factor: Not Brand X",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4260988-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4934508-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "20 Issues"
//     },
//     {
//       "title": "All-New X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7221252-5035688214-82882.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "41 Issues"
//     },
//     {
//       "title": "All-New X-Men",
//       "img": "https://comicvine1.cbsistatic.com/bundles/phoenixsite/images/core/loose/img_broken.png",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "All-New X-Men Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5544282-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New X-Men Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4289911-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New X-Men Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3345296-01a.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New X-Men: All-Different",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4093102-04.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New X-Men: Here To Stay",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3073983-02.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New X-Men: Inevitable: Apocalypse Wars",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5479393-02.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New X-Men: Inevitable: Ghosts of Cyclops",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5187338-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New X-Men: Inevitable: Hell Hath So Much Fury",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5711887-03.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New X-Men: Inevitable: IvX",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6034435-04.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New X-Men: One Down",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4092281-05.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New X-Men: Out of Their Depths",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3319480-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New X-Men: The Ultimate Adventure",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4460317-06.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New X-Men: The Utopians",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4694656-06.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New X-Men: Yesterday's X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2948671-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New X-Men/Indestructible Hulk/Superior Spider-Man: The Arms of the Octopus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3781825-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New Young Guns",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3887898-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New, All-Different Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6003133-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New, All-Different Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4900376-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "15 Issues"
//     },
//     {
//       "title": "All-New, All-Different Avengers Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5368797-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New, All-Different Avengers: Civil War II",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5688763-03.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New, All-Different Avengers: Family Business",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5478728-02.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New, All-Different Avengers: The Magnificent Seven",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5159999-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New, All-Different Marvel December/January Previews",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4966448-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New, All-Different Marvel November Previews",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4904446-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New, All-Different Marvel October Previews",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4854566-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New, All-Different Marvel Previews",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4660118-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New, All-Different Marvel Reading Chronology",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5822779-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-New, All-Different Marvel Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5120509-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-Out War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/17660-2988-19745-1-all-out-war.jpg",
//       "year": "1979",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "All-Star Batman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5379264-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "14 Issues"
//     },
//     {
//       "title": "All-Star Batman 1 Director's Cut",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5601591-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-Star Batman: Ends of the Earth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6039754-02.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-Star Batman: My Own Worst Enemy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5808920-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-Star Batman: The First Ally",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6326178-03.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-Star Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/630321-a1.jpg",
//       "year": "1940",
//       "publisher": "DC Comics",
//       "Field7": "74 Issues"
//     },
//     {
//       "title": "All-Star Section Eight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4616249-sect8-cv1-ds-d26f0.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "All-Star Section Eight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5263992-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-Star Squadron",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/19233-3070-21477-1-all-star-squadron.jpg",
//       "year": "1981",
//       "publisher": "DC Comics",
//       "Field7": "67 Issues"
//     },
//     {
//       "title": "All-Star Squadron Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/19504-3106-21775-1-all-star-squadron-an.jpg",
//       "year": "1982",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "All-Star Western",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2083401-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "35 Issues"
//     },
//     {
//       "title": "All-Star Western",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67581/1287545-all_star_western__58___page_1.jpg",
//       "year": "1951",
//       "publisher": "DC Comics",
//       "Field7": "62 Issues"
//     },
//     {
//       "title": "All-Star Western",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/9922-2463-10926-1-all-star-western.jpg",
//       "year": "1970",
//       "publisher": "DC Comics",
//       "Field7": "11 Issues"
//     },
//     {
//       "title": "All-Star Western: End of the Trail",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4466347-06.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-Star Western: Gold Standard",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3805306-04.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-Star Western: Guns and Gotham",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498148-01.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-Star Western: Man Out of Time",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4170679-05.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-Star Western: The Black Diamond Probability",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3441065-03.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-Star Western: The War of Lords and Owls",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498147-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "All-True Crime",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/2517271-26.jpg",
//       "year": "1948",
//       "publisher": "Marvel",
//       "Field7": "27 Issues"
//     },
//     {
//       "title": "All-Winners Squad: Band of Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/1891391-all_winners_squad_band_of_heroes_vol_1_1.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Alpha Centurion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/616974-alpha1.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Alpha Flight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/80654/1872766-alpha_1_0001_copy.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "Alpha Flight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4051625-af1.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "21 Issues"
//     },
//     {
//       "title": "Alpha Flight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/59309-10818-92304-1-alpha-flight.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Alpha Flight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/20946-3217-23361-1-alpha-flight.jpg",
//       "year": "1983",
//       "publisher": "Marvel",
//       "Field7": "130 Issues"
//     },
//     {
//       "title": "Alpha Flight / Inhumans '98",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5551/698718-6b3d8006_6673_410c_ad11_fcaeb1bb5cc9.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Alpha Flight #1: Facsimile Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6938314-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Alpha Flight Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/23553-3623-26258-1-alpha-flight-annual.jpg",
//       "year": "1986",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Alpha Flight By John Byrne Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5679332-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Alpha Flight by Pak and Van Lente",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2158042-af_by_p_vl1.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Alpha Flight Classic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4079254-01.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Alpha Flight Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26954/511089-af1_spezial.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Alpha Flight Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/30227-4579-33625-1-alpha-flight-special.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Alpha Flight: The Complete Series by Greg Pak & Fred Van Lente",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5406571-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Alpha Flight: True North",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7059380-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Alpha Flight: Waxing Poetic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5928423-02.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Alpha Flight: You Gotta Be Kiddin' Me!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5914664-01.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Alpha: Big Time",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2880017-01a.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Alpha: Big Time",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3596192-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amadeus Cho: Genius At Work",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5133319-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Adult Fantasy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/5174-2043-5633-1-amazing-adult-fantas.jpg",
//       "year": "1961",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Amazing Adventures",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60444/1132089-amazing_adventures___tales_of_exotic_places__people__and_times_v1__1__1988____page_1.jpg",
//       "year": "1988",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Adventures",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/9942-2469-10946-1-amazing-adventures.jpg",
//       "year": "1970",
//       "publisher": "Marvel",
//       "Field7": "39 Issues"
//     },
//     {
//       "title": "Amazing Adventures",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1985253-01.jpg",
//       "year": "1979",
//       "publisher": "Marvel",
//       "Field7": "14 Issues"
//     },
//     {
//       "title": "Amazing Adventures",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/4910-2044-5346-1-amazing-adventures.jpg",
//       "year": "1961",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Amazing Adventures of the JLA",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/964195-122292_20080316155509_large.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Fantasy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2431998-amazingfantasy15.jpg",
//       "year": "1962",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Amazing Fantasy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/130794-18663-110252-1-amazing-fantasy.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "20 Issues"
//     },
//     {
//       "title": "Amazing Fantasy #15: Facsimile Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7101013-15.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Fantasy #15: Spider-Man!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/2818654-amazing_fantasy___spider_man_015__2012__pagecover.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Fantasy Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/2174083-afo1.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing High Adventure",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/22074-3332-24626-1-amazing-high-adventu.jpg",
//       "year": "1984",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Amazing Mary Jane",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7116848-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Amazing Spider-Girl: Brand New May",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/970959-sg.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Girl: Comes the Carnage!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/970469-sg.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Girl: Maybreak",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/970990-sg.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Girl: Mind Games",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/970476-sg.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Girl: Whatever Happened To The Daughter of Spider-Man?",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/968499-sg.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man & Silk: Spider(Fly) Effect Infinite Comic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5011722-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man & Silk: The Spider(Fly) Effect",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5445036-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man & Silk: the Spider(Fly) Effect",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5075130-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man #252: Facsimile Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6893178-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man #347: Facsimile Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7225384-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man 2 Prelude",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3752373-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man 509 Director's Cut",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2104814-the_amazing_spider_man_v1963__509___sins_past__part_1__2004_8____page_1.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6614288-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5544283-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4265312-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man Behind-the-Scenes Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6506205-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man by David Michelinie & Todd MacFarlane Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/bundles/phoenixsite/images/core/loose/img_broken.png",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man by Nick Spencer: Absolute Carnage",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7197044-06.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man by Nick Spencer: Back To Basics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6703918-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man by Nick Spencer: Behind The Scenes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7115995-05.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man by Nick Spencer: Friends and Foes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6807844-02.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man by Nick Spencer: Lifetime Achievement",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6913164-03.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man Cinematic Infinite Comic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3750375-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man Epic Collection: Assassin Nation",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6929665-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man Epic Collection: Great Responsibility",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5606803-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man Epic Collection: Kraven's Last Hunt",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5884481-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man Epic Collection: Round Robin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4471804-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man Epic Collection: Spider-Man No More",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6429631-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man Epic Collection: The Goblin Lives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6974952-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man Epic Collection: The Goblin's Last Stand",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5830853-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man Epic Collection: Venom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6582642-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man Family",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/505279-asf_01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man Firsts",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3738237-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man Magazine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2700502-01.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man Movie",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100559/2395683-theamazingspider_manmovie.png",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1288799-spm_omn.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man Presents: American Son",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/53409/1234806-cover_large.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man Presents: Anti-Venom - New Ways To Live",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/957424-1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man Presents: Black Cat",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1266780-1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man Presents: Jackpot",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5092535-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man Presents: Jackpot",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/2057134-jackpot1a.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man Super Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/138585-18772-110899-1-amazing-spider-man-s.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man Toy Fair Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/653100-amazings1.jpg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: A New Goblin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5045431-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Amazing Grace",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5398594-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Big Time",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1679424-spm__bt.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Big Time - The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7057934-3763191775-79338.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Big Time Ultimate Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2415151-asm__bt_uc.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Coming Home",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2492523-amazing_spider_man___coming_home___1st_printing_cover.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Daily Bugle",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7226413-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Edge of Spider-Verse",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4536810-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Ends of the Earth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2345840-prev_img.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Family Business",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3747258-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Flying Blind",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2354232-asm__fb.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Full Circle",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7116849-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Going Big",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7059381-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Grim Hunt",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1480940-asm_grh.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Hooky",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3267070-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Hunted",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7039237-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Infested",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1994190-cover.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Learning To Crawl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4245091-1.1.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Matters of Life and Death",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1875893-matters_of_life_and_death.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Official Index to the Marvel Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/13/135797/2974167-spideyindex.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: One Moment in Time",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1516671-asm_omit1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Origin of the Hunter",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1193389-asm_origin_of_the_hunter_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Origin of the Species",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1627598-spm__oots.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Parallel Lives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/2397658-amazing_spider_man__parallel_lives_v2012__1__2012_4____page_1.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Peter Parker The One And Only",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3953562-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Red Goblin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6614289-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Renew Your Vows",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5523017-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "23 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Renew Your Vows",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4598340-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Renew Your Vows - Marvel Legacy Primer Pages",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6130195-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Renew Your Vows: Are You Okay, Annie?",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6694309-04.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Renew Your Vows: Brawl In The Family",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5897061-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Renew Your Vows: Eight Years Later",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6447328-03.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Renew Your Vows: The Venom Experiment",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6164793-02.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Secret Origins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2409796-asm__so.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Spider-Island",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498150-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: The Clone Conspiracy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5797745-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: The Fantastic Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031785-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: The Gauntlet: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6974953-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: The Graphic Novels",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6273978-8868096241-63129.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: The Osborn Identity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5082188-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: The Return of Anti-Venom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2030936-spm__roav.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Trouble on the Horizon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2455850-asm__toth.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Venom 3D",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7054340-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Venom Inc.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6418897-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Venom Inc. Alpha",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6172973-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Venom Inc. Omega",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6233318-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Wakanda Forever",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6486510-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Web-Slinger",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62392/2782344-amazingspidermanwebslinger.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Who Am I?",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4403016-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Who Am I?",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3805320-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Who Am I?",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3807711-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Worldwide",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5139986-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man: Worldwide",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6948799-9337233255-77698.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man/Ghost Rider: Motorstorm",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2764707-asm01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing Spider-Man/Inhumans/All-New Captain America: Inhuman Error",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5011721-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing World of DC Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/239961-19724-118264-1-amazing-world-of-dc.jpg",
//       "year": "1974",
//       "publisher": "DC Comics",
//       "Field7": "17 Issues"
//     },
//     {
//       "title": "Amazing World of Superman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1513116-awos1.jpg",
//       "year": "1973",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3423921-01a.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "19 Issues"
//     },
//     {
//       "title": "Amazing X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/36336-5535-40581-1-amazing-x-men.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Amazing X-Men Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3866926-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing X-Men: Once and Future Juggernaut",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4635236-03.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing X-Men: The Quest For Nightcrawler",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3903134-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazing X-Men: World War Wendigo",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4293042-02.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amazons Attack!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/516142-0000.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Ambush Bug",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/22877-3435-25523-1-ambush-bug.jpg",
//       "year": "1985",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Ambush Bug Nothing Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/135109-18691-110475-1-ambush-bug-nothing-s.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ambush Bug: Stocking Stuffer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/653104-ambush1.jpg",
//       "year": "1986",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ambush Bug: Year None",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/2263691-cover_1.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Ame-Comi Girls",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2908821-amecomigirl_1_print_cover_1000tall_urb9wv8rnw_.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Ame-Comi Girls",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2585132-ame_comi_girls_01_01.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "24 Issues"
//     },
//     {
//       "title": "Ame-Comi Girls",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515477-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ame-Comi Girls Featuring...",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2639548-_t2ec16h__yee9s5jhp3kbqdobordy___60_57.jpeg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Ame-Comi Girls: Earth In Crisis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4370308-03.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ame-Comi Girls: Rise of the Brainiac",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3993975-02.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ame-Comi I: Wonder Woman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2371562-img_0824.png",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Ame-Comi II: Batgirl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2414153-2012_06_18_13.26.56.png",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Ame-Comi III: Duela Dent",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2456654-photo_jul_09__10_41_46_am.png",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Ame-Comi IV: Power Girl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2500123-pg_01_01.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Ame-Comi V: Supergirl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2544440-ame_comi_v_supergirl_01_01.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "America",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5722970-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "America - Marvel Legacy Primer Pages",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6084510-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "America vs. the Justice Society",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/4074315-a%20vs%20jsa%20%231%20fc.jpg",
//       "year": "1985",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "America vs. the Justice Society",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4698652-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "America: Fast and Fuertona",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6374024-02.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "America: The Life and Times of America Chavez",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6103642-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "America's Best TV Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/393544-21614-130529-1-america-s-best-tv-co.jpg",
//       "year": "1967",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "American Dream",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15530/381795-21500-129706-1-american-dream.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "American Dream: Beyond Courage",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1085667-ad.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "American Honda Presents DC Comics' Supergirl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/972827-fann1h.jpg",
//       "year": "1984",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "American Tail: Fievel Goes West",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61406-4773-94401-1-american-tail-fieve.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "American Welding Society Iron Man Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/2134138-american_welding_society_iron_man_special__1___page_1.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amethyst",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/72819/2144832-amethyst_princess_of_gemworld__1987__01___00___fc.jpg",
//       "year": "1987",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Amethyst Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/13923/646501-amethystann01sm.jpg",
//       "year": "1984",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amethyst, Princess of Gemworld",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/22503-3437-25111-1-amethyst.jpg",
//       "year": "1985",
//       "publisher": "DC Comics",
//       "Field7": "16 Issues"
//     },
//     {
//       "title": "Amethyst, Princess of Gemworld",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/20684-3193-23076-1-amethyst-princess-o.jpg",
//       "year": "1983",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Amethyst, Princess of Gemworld Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/58245/1145422-amyspecial.jpg",
//       "year": "1986",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Amtrak Presents All Aboard",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2843804-__addme___amtrak_presents_all_aboard_v9999__1__2006____page_1.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "An American Tail: Fievel Goes West",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/3787741-ame1.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Anarky",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/41169-6492-46465-1-anarky.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Anarky",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/32578/849724-anarky_vol.2__01_p0.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Anarky: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6233319-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Angel and the Ape",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/45727-2385-53069-1-angel-and-the-ape.jpg",
//       "year": "1968",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Angel and the Ape",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/30496-4538-33940-1-angel-and-the-ape.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Angel Love",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/24278-3590-27033-1-angel-love.jpg",
//       "year": "1986",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Angel Love Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/111856/2090751-angellovesp_00.jpg",
//       "year": "1987",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Angel: Revelations",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5802633-01.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Angela, Queen of Hel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4876818-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Angela: Asgard's Assassin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4252936-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Angela: Asgards Assassin - Priceless",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4725096-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Angela: Queen of Hel: Journey To the FUNderworld",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5302042-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Anima",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/34780-5229-38846-1-anima.jpg",
//       "year": "1994",
//       "publisher": "DC Comics",
//       "Field7": "16 Issues"
//     },
//     {
//       "title": "Animal Antics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/959609-aa1.jpg",
//       "year": "1946",
//       "publisher": "DC Comics",
//       "Field7": "51 Issues"
//     },
//     {
//       "title": "Animal Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/2001130-1.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "30 Issues"
//     },
//     {
//       "title": "Animal Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1120563-1.jpg",
//       "year": "1988",
//       "publisher": "DC Comics",
//       "Field7": "89 Issues"
//     },
//     {
//       "title": "Animal Man Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2373124-anman_ann_cv1.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Animal Man By Jeff Lemire Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7182283-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Animal Man: Animal vs. Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2806577-_t2ec16nhjhie9nysegtbbq8jelhgiq__60_57.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Animal Man: Evolve Or Die",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4199312-05.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Animal Man: Rotworld - The Red Kingdom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3321398-03.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Animal Man: Splinter Species",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3676859-04.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Animal Man: The Hunt",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2323290-978_1_4012_3507_9.jpeg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Animaniacs",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/653320-1.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "59 Issues"
//     },
//     {
//       "title": "Animaniacs: A Christmas Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/653565-animaniacs1.jpg",
//       "year": "1994",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Anita Blake, Vampire Hunter: Circus Of The Damned",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1880412-charmer.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Anita Blake, Vampire Hunter: Circus of the Damned - The Charmer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1235068-1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Anita Blake, Vampire Hunter: Circus of the Damned - The Ingenue",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1627537-ingenue1.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Anita Blake, Vampire Hunter: Circus of the Damned - The Scoundrel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2083413-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Anita Blake, Vampire Hunter: Guilty Pleasures",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/2318449-01a_cropped.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Anita Blake, Vampire Hunter: Guilty Pleasures",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1809151-guilty_pleasures1.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Anita Blake, Vampire Hunter: Guilty Pleasures Handbook",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1787498-344129.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Anita Blake, Vampire Hunter: The First Death",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2549116-01.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Anita Blake, Vampire Hunter: The First Death",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1808558-first_death.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Anita Blake, Vampire Hunter: The Laughing Corpse",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/2318421-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Anita Blake, Vampire Hunter: The Laughing Corpse - Executioner",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1008875-1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Anita Blake, Vampire Hunter: The Laughing Corpse - Necromancer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/761903-covera.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Anita Blake, Vampire Hunter: The Laughing Corpse Ultimate Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2195901-anita_blake.png",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Anita Blake, Vampire Hunter: The Laughing Corpse: Animator",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1830910-animator.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Anita Blake, Vampire Hunter: The Laughing Corpse: Executioner",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1835945-executioner1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Anita Blake, Vampire Hunter: The Laughing Corpse: Necromancer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1835903-necromancer1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Annex",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61409-5274-94404-1-annex.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Annie",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/20171-3131-22507-1-annie.jpg",
//       "year": "1982",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Annie Treasury Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/1448616-ann1.jpg",
//       "year": "1982",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Annihilation",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/108866-18137-108532-1-annihilation.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Annihilation - Scourge Omega",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7184457-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Annihilation - Scourge: Beta Ray Bill",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7175952-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Annihilation - Scourge: Fantastic Four",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7169458-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Annihilation - Scourge: Nova",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7169460-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Annihilation - Scourge: Silver Surfer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7175953-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Annihilation Classic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1085695-annih.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Annihilation Conquest: Prologue",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/136680-18708-110587-1-annihilation-conques.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Annihilation Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5359982-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Annihilation Saga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22277/712469-annihilation_saga.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Annihilation, Book One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1000568-annih.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Annihilation, Book Three",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1001954-annih.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Annihilation, Book Two",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1000627-annih.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Annihilation: Conquest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2770763-ac_1_dcp_0000.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Annihilation: Conquest - Quasar",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/157274-18923-111894-1-annihilation-conque.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Annihilation: Conquest - Starlord",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/2868/176317-19051-113750-1-annihilation-conque.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Annihilation: Conquest - Wraith",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/154019-18882-111624-1-annihilation-conque.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Annihilation: Conquest Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4635237-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Annihilation: Conquest, Book One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1065294-anhn.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Annihilation: Conquest, Book Two",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1065328-anhn.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Annihilation: Heralds of Galactus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/94643-18215-106711-1-annihilation-herald.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Annihilation: Nova",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1076/82077-18017-105470-1-annihilation-nova.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Annihilation: Prologue",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/99508-18290-107043-1-annihilation-prolog.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Annihilation: Ronan",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/262963-20186-120432-1-annihilation-ronan.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Annihilation: Scourge Alpha",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7153350-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Annihilation: Silver Surfer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1774531-annihilation_silver_surfer_1.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Annihilation: Super-Skrull",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1076/82078-18018-105471-1-annihilation-super.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Annihilation: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6792536-8580862169-74796.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Annihilation: The Nova Corps Files",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6338055-2171907917-65583.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Annihilators",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1697533-annihilators_1.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Annihilators",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2014151-ann.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Annihilators: Earthfall",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/2021026-annihilators_earthfall_1.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Annihilators: Earthfall",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4775043-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ant-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7234740-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ant-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/4312279-antman2015001_dc11-0.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Ant-Man & the Wasp",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6457985-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Ant-Man & the Wasp: Living Legends",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6457988-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ant-Man & Wasp",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/108980/2208822-ant_man___wasp__1__2011_.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Ant-Man and the Wasp Adventures",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6457986-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ant-Man and the Wasp: Lost and Found",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6676137-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ant-Man and Wasp: Small World",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1889481-am_w__sw.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ant-Man Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4685096-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ant-Man: Astonishing Origins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6457989-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ant-Man: Larger Than Life",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4641167-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ant-Man: Last Days",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4766495-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ant-Man: Scott Lang",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4621044-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ant-Man: Season One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2460857-2127114_1_ant_man_super.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ant-Man: Second-Chance Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4655894-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ant-Man's Big Christmas",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/258080-20128-120141-2-ant-man-s-big-christ.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ant-Man/Giant-Man Epic Collection: The Man In the Ant Hill",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4655893-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ant-Man/Giant-Man: Growing Pains",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6486511-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Anthro",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/652224-anthro1.jpg",
//       "year": "1968",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Aquaman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/5218-2050-5685-1-aquaman.jpg",
//       "year": "1962",
//       "publisher": "DC Comics",
//       "Field7": "63 Issues"
//     },
//     {
//       "title": "Aquaman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/23725-3591-26446-1-aquaman.jpg",
//       "year": "1986",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Aquaman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2083416-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "55 Issues"
//     },
//     {
//       "title": "Aquaman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/74890-9517-78400-1-aquaman.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "39 Issues"
//     },
//     {
//       "title": "Aquaman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/28176-4170-31273-1-aquaman.jpg",
//       "year": "1989",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Aquaman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5278597-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "56 Issues"
//     },
//     {
//       "title": "Aquaman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/35412-5230-39548-1-aquaman.jpg",
//       "year": "1994",
//       "publisher": "DC Comics",
//       "Field7": "77 Issues"
//     },
//     {
//       "title": "Aquaman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/31392-4539-34951-1-aquaman.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "Aquaman 101",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2845238-digital_aquaman_101_v9999__2012____page_1.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman and The Others",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3731059-aquaman%20and%20the%20others.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "11 Issues"
//     },
//     {
//       "title": "Aquaman and the Others: Alignment Earth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4641169-02.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman and the Others: Futures End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4114526-aquaman%20others.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman and the Others: Legacy of Gold",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4340125-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3406975-aquaman.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Aquaman Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/36805-5488-41153-1-aquaman-annual.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Aquaman Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6170188-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Aquaman Archives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/583647-aq1.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman by Geoff Johns Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730668-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman by Peter David",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6266870-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Aquaman Giant",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7125232-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Aquaman Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5551/710917-the_legend_of_aquaman___00___fc.jpg",
//       "year": "1989",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5551/711172-aquaman_special__1988__01___00___fc.jpg",
//       "year": "1988",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: A Celebration of 75 Years",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5489466-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: Amnesty",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7182284-02.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: Black Manta Rising",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5797746-02.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: Crown of Atlantis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6029041-03.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: Death of A King",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3817467-04.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: Death of a Prince",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1900669-aquamandeathprince.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: Exiled",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5160001-07.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: Futures End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4069910-aquaman.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: Kingdom Lost",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5973371-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: Kingslayer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6721943-06.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: Maelstrom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4666365-06.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: Out of Darkness",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5559752-08.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: Rebirth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5253676-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: Sea of Storms",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4226447-05.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: Secret Files & Origins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/1043968-asf.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Aquaman: Sub Diego",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4670520-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: Sword of Atlantis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/2973/110178-18503-108619-1-aquaman-sword-of-at.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "Aquaman: Sword of Atlantis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7160266-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: Sword of Atlantis: Once and Future",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1691186-77360_20070112150038_large.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: Tempest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6477286-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: The Atlantis Chronicles: The Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6123797-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: The Crown Comes Down",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6497360-05.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: The Death of a Prince Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7225240-01.jpg",
//       "year": "2020",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: The Drowning",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5640097-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: The Legend of Aquaman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6339675-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: The Others",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3372567-02.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: The Search For Mera Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6703920-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: The Trench",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3368450-01.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: The Waterbearer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/313362-20607-123529-1-aquaman-the-waterbe.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: The Waterbearer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6212038-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: Throne of Atlantis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3439026-03.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: Time and Tide",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2363789-01.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Aquaman: Time and Tide",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/1052869-att.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: To Serve and Protect",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5316357-02.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: Underworld",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6242715-04.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: Underworld: The Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6684789-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: Unspoken Water",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7031424-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman: War For the Throne",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6694312-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman/Jabberjaw Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6447329-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman/Justice League: Drowned Earth Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6704336-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aquaman/Suicide Squad: Sink Atlantis!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6789736-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Arak Son Of Thunder Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/2773013-2221.jpg",
//       "year": "1984",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Arak, Son of Thunder",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/19234-3071-21478-1-arak-son-of-thunder.jpg",
//       "year": "1981",
//       "publisher": "DC Comics",
//       "Field7": "50 Issues"
//     },
//     {
//       "title": "Araña: Heart of the Spider",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1654/88013-18110-106077-1-ara-a-heart-of-the.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Araña: In the Beginning",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5548006-01.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Araña: Night of the Hunter",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1294850-arn__noth.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Araña: The Heart of the Spider",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1294832-arn__hots.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Archangel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2494764-01.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Archie Meets the Punisher",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15317/487798-archie_meets_punisher.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Arena",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/494341-2.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ares",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9245/279715-20332-121501-1-ares.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Ares: God Of War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3626770-01.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Argus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/36413-5489-40673-1-argus.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Arion the Immortal",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/456317-10146_4_001.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Arion, Lord of Atlantis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/20215-3107-22556-1-arion-lord-of-atlan.jpg",
//       "year": "1982",
//       "publisher": "DC Comics",
//       "Field7": "35 Issues"
//     },
//     {
//       "title": "Arion, Lord of Atlantis Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1271368-p00001.jpg",
//       "year": "1985",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Arkham Asylum: Living Hell",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70563/1340332-arkham_asylum_living_hell_1.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Arkham Asylum: Living Hell",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/196995-19179-114793-1-arkham-asylum-livin.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Arkham Asylum: Madness",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67626/1276381-arkhammadness01.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Arkham Manor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4168774-arkham%20manor%2001.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Arkham Manor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4698667-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Arkham Manor: Endgame",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4478889-arkham%20manor.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Arkham Reborn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1010138-arkham_reborn_1.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Armageddon 2001",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/3907689-%24_57.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Armageddon: Inferno",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/31887-4715-35530-1-armageddon-inferno.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Armageddon: The Alien Agenda",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/1811299-armageddon_alien_agenda__1991__1.jpeg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Armor Wars",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4598343-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Armor Wars: Warzones!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5022614-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Army At War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2993895-01.jpg",
//       "year": "1978",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Arrgh!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9338/457255-2159_4_001.jpg",
//       "year": "1974",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Arrow",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2723285-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Arrow",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2465712-arrow_zone__000.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Arrow",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3382376-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Arrow",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/79073/2640067-ga_01_01.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "36 Issues"
//     },
//     {
//       "title": "Arrow: Season 2.5",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4143591-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Arrow: Season 2.5",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4067892-arrow_2_5_cover_a_p.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "24 Issues"
//     },
//     {
//       "title": "Arrow: Season 2.5",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4826065-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Arrow: Special Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/3620277-%24%28kgrhqzhjdqfc%28wfyzvwbqmupr8ye%21~~60_57.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Arrow: The Dark Archer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4996001-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Arrow: The Dark Archer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5408266-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Arsenal",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/597921-arsenal1a.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Arsenal Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65073/1369663-arsenal_special__1__1996____page_1.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Artemis: Requiem",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/37850-5725-42456-1-artemis-requiem.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Asgardians of the Galaxy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6594966-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "Asgardians of the Galaxy: The Infinity Armada",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6863604-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Asgardians of the Galaxy: War of the Realms",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7039241-02.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Askani'Son",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2754347-01_cropped.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Askani'son",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1168152-ascani.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Assassin's Creed: The Fall",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1503064-scanned_image_6.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Assault on New Olympus Prologue",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52212/1014495-assualtonnew.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Astonishing Spider-Man & Wolverine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/1217083-asmw1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Astonishing Spider-Man & Wolverine Director's Cut",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1674375-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Astonishing Spider-Man and Wolverine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1992235-aspm___wlv.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Astonishing Tales",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/33913/1080235-691913_prv1971_cov_super.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Astonishing Tales",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/9944-2470-10948-1-astonishing-tales.jpg",
//       "year": "1970",
//       "publisher": "Marvel",
//       "Field7": "36 Issues"
//     },
//     {
//       "title": "Astonishing Thor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2020164-ast_thr.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Astonishing Thor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/1528059-astonishing_thor_vol_1_1.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Astonishing X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1051152-axm_hc1.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Astonishing X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1012/83213-18027-105554-1-astonishing-x-men.jpg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Astonishing X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/36337-5536-40582-1-astonishing-x-men.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Astonishing X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/37375/2944876-gold.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Astonishing X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5960877-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "17 Issues"
//     },
//     {
//       "title": "Astonishing X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/57585-10746-90580-1-astonishing-x-men.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "68 Issues"
//     },
//     {
//       "title": "Astonishing X-Men - Marvel Legacy Primer Pages",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6178715-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Astonishing X-Men Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2725367-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Astonishing X-Men Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6559425-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Astonishing X-Men by Charles Soule: A Man Called X",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6538858-02.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Astonishing X-Men by Charles Soule: Life of X",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6293860-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Astonishing X-Men by Matt Rosenberg: Until Our Hearts Stop",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6753275-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Astonishing X-Men by Whedon and Cassaday Ultimate Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7001683-2350646154-78606.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Astonishing X-Men Director's Cut",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/99089/1777368-astonishingxmen01dc_00.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Astonishing X-Men MGC",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2809751-ast01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Astonishing X-Men Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1003365-xmn.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Astonishing X-Men Saga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1058903-batman___unseen__5__of_5___2010____page_1.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Astonishing X-Men Sketchbook Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2549120-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Astonishing X-Men: Children of the Brood",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3390527-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Astonishing X-Men: Dangerous",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1051014-astonishingx_menvol2dangerous.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Astonishing X-Men: Deathwish",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1059398-xmn.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Astonishing X-Men: Exalted",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3527413-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Astonishing X-Men: Exogenetic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3232164-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Astonishing X-Men: Ghost Box",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1889320-ghost_box.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Astonishing X-Men: Ghost Boxes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/599594-axm___gb__001_000.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Astonishing X-Men: Gifted",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1887538-gifted.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Astonishing X-Men: Monstrous",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3352203-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Astonishing X-Men: Northstar",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4306446-10.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Astonishing X-Men: Torn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1051052-astx3_torn.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Astonishing X-Men: Unmasked",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4285854-12.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Astonishing X-Men: Unstoppable",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1051055-axm_unstoppable.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Astonishing X-Men: Weaponized",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3888684-11.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Astonishing X-Men: Xenogenesis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1225321-astonishing.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Astonishing X-Men: Xenogenesis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1763754-ast_xmn__xng.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Astonishing X-Men: Xenogenesis Director's Cut",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2205697-01_cropped.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Astonishing X-Men/Amazing Spider-Man: The Gauntlet Sketchbook",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/965988-astonishing_x_men_asm_sketchbook.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Atari Force",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/19513-3108-21784-1-atari-force.jpg",
//       "year": "1982",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Atari Force",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/21363-3304-23824-1-atari-force.jpg",
//       "year": "1984",
//       "publisher": "DC Comics",
//       "Field7": "20 Issues"
//     },
//     {
//       "title": "Atari Force Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/128646-18648-110021-1-atari-force-special.jpg",
//       "year": "1986",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Atlantis Attacks",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7219906-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Atlantis Attacks Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1738596-aa_omn.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Atlas",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2169993-01a.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Atlas: Marvel Boy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6653356-6116928528-72694.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Atlas: Return of the Three Dimensional Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1612512-atl__rottdm.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Atom and Hawkman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1106682-39.jpg",
//       "year": "1968",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Atom Archives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/582411-at1.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Atom Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/34318-4948-38320-1-atom-special.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Atomic Knights",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2063469-atomic_knights.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avataars: Covenant of the Shield",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/49628-9076-64479-1-avataars-covenant-o.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Avatar",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64684/1935430-avatar1.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4838201-00.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/1716963-avengers__1996_2nd_series__01a.jpeg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/2748468-cover.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "46 Issues"
//     },
//     {
//       "title": "Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6406863-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "30 Issues"
//     },
//     {
//       "title": "Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5511323-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "36 Issues"
//     },
//     {
//       "title": "Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2491344-av1.png",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "90 Issues"
//     },
//     {
//       "title": "Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1233650-avengers1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "36 Issues"
//     },
//     {
//       "title": "Avengers - Marvel Legacy Primer Pages",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6059531-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers - The Avengers Initiative",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/114700/2323641-avengers_zone__000.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers [Taco Bell]",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/2953182-avengers%20taco%20bell%20exclusive%20collector%20edition%20v2009%20001%20%282009%29%20pagecover.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers / Squadron Supreme '98",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2593458-annual1.png",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers & Champions: Worlds Collide",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6266872-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers & X-Men: Axis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4143647-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "Avengers & X-Men: Axis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4418979-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers 1959",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/2030830-1959.jpeg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Avengers 1959",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6178509-0448539504-60865.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers 1999",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/32578/795473-avengers_annual_1999_00.jpg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers 2000",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1791914-avengers_2000.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers 2001",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1791931-avengers_2001.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers A.I.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3145481-01a.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Avengers A.I.: 12,000 A.D.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4527083-02.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers A.I.: Human After All",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3767713-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Academy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6063/1258069-the_heroic_age_avengers_academy_001.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "40 Issues"
//     },
//     {
//       "title": "Avengers Academy Giant-Size",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/98410/1797786-aags_1.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Academy: Arcade Death Game",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6400284-3601533319-66809.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Academy: Final Exams",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2815847-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Academy: Meet the New Class",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74140/1874081-av01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Academy: Permanent Record",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1664478-aa__pr.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Academy: Second Semester",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2411974-avg_acd___ss.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Academy: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6885683-3578538824-76107.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Avengers Academy: Will We Use This In The Real World?",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1992261-avg_acd__wwutitrw.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers and Power Pack Assemble!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/154357-18895-111689-1-avengers-and-power-p.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Avengers and the Infinity Gauntlet",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6320713-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers and the Infinity Gauntlet",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1347610-av.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Avengers Anniversary Magazine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/680878-aven.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3482242-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/101073/2148479-previews_avengers_annual_cover.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Annual #10 [Marvel Legends Reprint]",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/2950559-the%20avengers%20%20%20annual%20010%20%282005%29%20pagecover.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Arena",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2746571-01a.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "Avengers Arena: Boss Level",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3781826-03.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Arena: Game On",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3487141-02.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Arena: Kill Or Die",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3031657-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Arena: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6885705-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Assemble",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1613839-avg_ass_vl1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Avengers Assemble",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2241137-www.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "25 Issues"
//     },
//     {
//       "title": "Avengers Assemble",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1236874-avengers_assemble_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Assemble Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2854231-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Assemble by Brian Michael Bendis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031796-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Assemble Featuring Captain Citrus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110802/4116360-the%20avengers%20featuring%20captain%20citrus%20in%20%26quot%3Bchoose%20wisely%26quot%3B%20001-000.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Avengers Assemble: Game On",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6406864-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Assemble: Living Legends",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6874976-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Assemble: Science Bros",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3240074-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Assemble: The Forgeries of Jealousy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4527085-03.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Assemble: Time Will Tell",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6712635-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers by Brian Michael Bendis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1664523-avg_by_bmb.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Avengers by Brian Michael Bendis: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6945116-0144756798-77308.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Avengers by Brian Michael Bendis: The Heroic Age",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2243288-avg_by_bmb___tha.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers by Jason Aaron: Challenge of the Ghost Riders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7226940-05.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers by Jason Aaron: The Final Host",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6631566-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers by Jason Aaron: War of the Realms",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7161568-04.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers by Jason Aaron: War of the Vampires",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6958032-03.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers by Jason Aaron: World Tour",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6828895-02.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers by John Byrne Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5324157-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers By Jonathan Hickman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7156669-8759065766-80908.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Avengers by Jonathan Hickman Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5935961-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Avengers By Kurt Busiek & George Perez Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4460320-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Avengers Classic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2170049-01.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Avengers Disassembled",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6956009-4134381144-19671.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Disassembled: Iron Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4511109-01.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Disassembled: Iron Man, Thor, and Captain America",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1080614-disa.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Disassembled: Thor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4511113-01.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Earth's Mightiest Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2290009-avengers_zone_000.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "Avengers Endgame: The Art of the Movie",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7153353-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Epic Collection: Behold... The Vision",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4536816-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Epic Collection: Earth's Mightiest Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7118186-7021162089-80590.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Epic Collection: Fear The Reaper",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6883243-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Epic Collection: Once An Avenger",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5535642-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Epic Collection: Operation Galactic Storm",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5973372-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Epic Collection: The Avengers/Defenders War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6374025-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Epic Collection: The Collection Obsession",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6326183-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Epic Collection: The Final Threat",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7110576-5090159644-80587.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Epic Collection: The Gatherers Strike!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7169483-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Epic Collection: The Masters of Evil",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5819594-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Epic Collection: Under Siege",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5199892-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Fairy Tales",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2754373-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Avengers Featuring Hulk & Nova",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5304180-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Avengers Finale",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111121457/5255919-avengers%20finale%20v2005%20%231%20%282005_1%29%20-%20page%201.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Forever",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2585612-199812_avengers_forever___02__covers_v1__1__of_2____page_1.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Avengers Forever",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/963306-avg.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Halloween Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6666531-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Icons: The Vision",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/108980/2320869-01.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Avengers Icons: Tigra",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2203609-01.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Avengers in Gearing Up",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4651633-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Infinity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/42300-6730-48190-1-avengers-infinity.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Avengers K: Assembling The Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5842010-05.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers K: Avengers Disassembled",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6687307-8692424104-44397.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers K: Avengers Vs. Ultron",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5211077-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers K: Secret Invasion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5688766-04.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers K: The Advent of Ultron",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5406632-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Legends Vol. II: George Perez Book I",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2843753-tpb_avengers_visionaries__george_perez_bride_of_ultron_collection_v1999__1___tpb__1999_5____page_1.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Legends: Avengers Forever",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1114736-avg.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Legends: The Korvac Saga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3173125-avengers%20legends%20%20-%20the%20korvac%20saga%20002%20%282003%29%20pagecover.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Log",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51078/1016624-av1.jpeg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Magazine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4523503-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Next",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2779295-img001.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Avengers Next: Rebirth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/962015-avg.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Now!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4285835-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers of the Wastelands",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7226414-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2204912-avg_omn.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Avengers Origins: Ant-Man & The Wasp",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2083556-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Origins: Luke Cage",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/107443/2088681-avengers_origins_luke_cage__1___page_1.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Origins: Scarlet Witch & Quicksilver",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51565/2099855-avorigin_qs_sw_01_001.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Origins: Thor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2160008-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Origins: Vision",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/73936/2078486-avengers_origin___vision_001__2012__pagecover.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Presented By Gillette",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110802/4738456-001.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Presented By Western Union",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110802/4738468-001.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Prime",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1810237-avengers_prime.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Rough Cut",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/98094/1744818-aven1roughz.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Sampler",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/149950/3306740-avengers%20sampler%20%282012%29%20-%20page%201.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Solo",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3563239-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Spotlight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/28413-4218-31534-1-avengers-spotlight.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "20 Issues"
//     },
//     {
//       "title": "Avengers Standoff: Assault On Pleasant Hill Alpha",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5075134-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Standoff: Assault On Pleasant Hill Omega",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5173535-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Standoff: Welcome to Pleasant Hill",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5051540-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Start Here Sampler 2019",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6874977-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Strikefile",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7166790-01.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Two: Wonder Man and Beast",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/44592-7261-51638-1-avengers-two-wonder.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Avengers Undercover",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3690508-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "Avengers Undercover: Descent",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4061808-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Undercover: Going Native",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4218299-02.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Undercover: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6885686-3110662517-76109.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers United They Stand",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/40863-6351-46113-1-avengers-united-they.jpg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Avengers Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/73936/1853483-avengers_universe__1___page_1.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Avengers Unplugged",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2029182-01.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Avengers VS",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4501767-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Avengers VS",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4545238-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Vs Infinity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4887854-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Vs X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7001687-5459669380-78607.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Vs X-Men Companion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3031658-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Vs X-Men Companion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111121457/5585453-avengers%20vs.%20x-men%20companion%20book%20one%20%282013%29%20-%20page%201.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Avengers Vs X-Men: Avengers Academy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3337495-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Vs X-Men: Consequences",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3352242-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Vs X-Men: X-Men Legacy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3404734-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers vs. Atlas",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1098118-avat.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Avengers vs. Fantastic Four",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7169484-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers vs. Pet Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70623/1480258-prv6747_cov.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Avengers vs. Pet Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1894179-avg_vs_pav.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers vs. Thanos",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6364027-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Vs. X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2691602-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Vs. X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2275022-www.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "Avengers vs. X-Men Program",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/2271525-avengers_vs._x_men_program_v2012__2012_2____page_1.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers Vs. X-Men: Infinite",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/113509/2277513-sam.png",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Avengers Vs. X-Men: It's Coming",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2291353-www.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers vs. X-Men: VS",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2971148-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers West Coast",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/109745-18494-108597-1-avengers-west-coast.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "56 Issues"
//     },
//     {
//       "title": "Avengers West Coast Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/28696-4219-31863-1-avengers-west-coast-.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Avengers West Coast Epic Collection: How The West Was Won",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6623594-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers West Coast Epic Collection: Lost In Space-Time",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7075979-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers West Coast: Darker Than Scarlet",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4580816-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers West Coast: Vision Quest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4536818-01.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers World",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3556391-01a.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "21 Issues"
//     },
//     {
//       "title": "Avengers World: A.I.M.pire",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3903136-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers World: Ascension",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4218300-02.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers World: Before Time Runs Out",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4761737-04.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers World: Next World",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4390419-03.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers World: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6874978-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers, Thor & Captain America: Official Index to the Marvel Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1991341-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "15 Issues"
//     },
//     {
//       "title": "Avengers: Above and Beyond",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1059873-avng.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Absolute Vision",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4261005-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Avengers: Adapt Or Die",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3983609-05.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Age of Ultron Prelude - This Sceptre'd Isle Infinite Comic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4371623-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Assault on Olympus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/101073/2012189-51ebrd1yk8l._ss500_.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Assemble",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2844247-__addme___avengers_assemble_v9999__200500___page_1.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Avengers Infinity Classic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6066316-0773672385-57205.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Avengers vs. Thanos",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031795-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Avengers World",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2987967-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Avengers/X-Men - Bloodties",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2148671-avg_xmn__bt.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Back To Basics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6312636-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Avengers: Back To Basics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6570574-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Casebook 1999",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/654937-avenge1.jpg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Celestial Madonna",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51078/1016626-ave1.jpeg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Celestial Quest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4580818-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Celestial Quest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/53183-9243-73022-1-avengers-celestial-.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Avengers: Citizen Kang",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4563971-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Clear and Present Dangers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51078/1016646-aven1.jpeg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Death Trap, The Vault",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2495885-01.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Defenders War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/3066742-5efff4a9-43a0-4479-b32a-e64228602d3f.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Director's Cut",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/57343-10730-90338-1-avengers.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Earth's Mightiest Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1511039-avengers_earths_mightiest_heroes_1.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Avengers: Earth's Mightiest Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6523678-9689088088-69772.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Earth's Mightiest Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5140096-01.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Earth's Mightiest Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/308/235796-19690-118075-1-avengers-earth-s-mi.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Avengers: Earth's Mightiest Heroes Comic Reader",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2611929-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Avengers: Earth's Mightiest Heroes II",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1015865-aveng.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Earth's Mightiest Heroes II",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2779273-aemh_v2_01_00.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Avengers: Earth's Mightiest Heroes Ultimate Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2241755-avg__emh_uc.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Edge of Infinity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6903152-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Electric Rain",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/113509/4397846-electric%20rain.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Avengers: Endless Wartime",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3347213-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Falcon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3682912-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: First to Last",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6442440-8359458881-67712.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Four",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5879906-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Galactic Storm",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4563977-01.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Avengers: Hawkeye",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/993255-hawkeye.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Hawkeye - Earth's Mightiest Marksman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4296417-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Heart of Stone",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/3028243-9780785184317_p0_v2_s600.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Heavy Metal",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3197462-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Heroes Welcome",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3793102-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: I Am An Avenger",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6670628-0677981837-73018.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: I am an Avenger II",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1288745-avg.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Infinite Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4655698-06.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Infinity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3577477-04.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Kang: Time and Time Again",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5271872-01.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: King of the Road",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5304176-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Kree-Skrull Wars",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111124205/5776969-schermata%202017-03-30%20alle%2017.39.48.png",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Kree/Skrull War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2836561-1c_297973_0_theavengerskreeskrullwarhc.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Legion of the Unliving",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5315488-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Lionheart of Avalon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1403224-avg__loa.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Loki Unleashed!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7084650-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Mighty Origins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6364023-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Millennium",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4608746-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Millennium",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4479797-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Avengers: Millennium Infinite Comic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4413873-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Avengers: Mythos",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2301013-avg_myt.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Never Alone",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5332732-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Nights of Wundagore",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/28071/1717934-avgrs_001.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: No More Bullying",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4845163-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: No More Bullying",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4313694-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: No Road Home",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6797678-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "Avengers: No Road Home",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6965791-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: No Surrender",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6486513-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: No Surrender Free Preview",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6178779-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Official Index to the Marvel Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/13/135797/2974259-avengersindex.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Once an Invader",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1429396-avg__oai.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Operation Hydra",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4519395-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Origin of Vision",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51078/1016656-aveng1.jpeg",
//       "year": "1982",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Prelude to Infinity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3380282-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Prime",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2029159-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Avengers: Quicksilver",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4443582-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Rage of Ultron",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/4478781-avengers_rage_of_ultron_cover.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Red Zone",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1227108-avg.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Revelations",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4344296-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Road to Marvel's The Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2243366-avg__rtmta.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Roll Call",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110802/2313510-avengers_roll_call.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Save Like A Hero",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7119441-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Saving the Day",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74848/2263265-00.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Scarlet Witch by Dan Abnett & Andy Lanning",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4637655-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Season One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/85575/2877070-avengersseasononegnaveng11502_f.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Season One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3135470-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Shards of Infinity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6364026-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Solo",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/105039/2060832-prv10172_cov.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Avengers: Solo Avengers Classic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2181144-avg_sl_cls1.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Spotlight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1253674-avengers_spotlight_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Standoff",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1170408-avg.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Standoff",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5302044-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Supreme Justice",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/3310552-713u6eolzts._sl1500_.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Tales To Astonish",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6203572-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Big Three",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4593677-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Bride of Ultron",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3656514-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Children's Crusade",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4092716-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Children's Crusade",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2170042-01a.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "Avengers: The Children's Crusade - Search for the Scarlet Witch",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2179123-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Children's Crusade - Young Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/87073/1722365-avengersthechildrenscrusade_youngavengers01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Coming of the Beast",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1641966-avg__cotb.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Complete Celestial Madonna Saga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5797749-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Complete Collection by Geoff Johns",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/3074297-avengers.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Avengers: The Contest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6471641-2728016577-68465.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Crossing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/477488-avengers_crossing.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Crossing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2357199-dec110696.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Death of Mockingbird",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5022616-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Enemy Within",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3042208-01a.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Enemy Within",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3799291-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Initiative",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2029169-01b.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "35 Issues"
//     },
//     {
//       "title": "Avengers: The Initiative Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2770741-avengers___the_initiative_annual_01__2008___minutemen_darthscann_001.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Initiative Featuring Reptil",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/746681-1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Initiative Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/604528-avengers_special__001.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Initiative: Basic Training",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/949740-inititative.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Initiative: Disassembled",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4260999-01.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Initiative: Dreams & Nightmares",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4177281-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Initiative: Killed in Action",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/950948-roocckk___.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Initiative: Secret Invasion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/951334-skrull.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Initiative: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7001689-3395986822-78607.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Avengers: The Kang Dynasty",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1878854-kang_dynasty.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Korvac Saga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1154129-avg.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Korvac Saga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/37015/793028-korvac_saga1.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Last White Event",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3165433-02.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Legacy of Thanos",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4538641-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Many Faces of Henry Pym",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4593678-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Morgan Conquest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/654860-avengers1.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Once and Future Kang",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4694738-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Origin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1542772-avg__to.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Origin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1178091-avengers_origin.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Avengers: The Private War of Dr. Doom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2357254-avengersdoom.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Search for She-Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4260989-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Serpent Crown",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3920587-01.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Serpent Crown",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2357825-nov110606.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Terminatrix Objective",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/33848-4986-37791-1-avengers-the-termin.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Avengers: The Trial of Yellowjacket",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4593679-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Ultron Imperative",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/123992-18598-109747-1-avengers--the-ultro.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Vibranium Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4501769-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: The Yesterday Quest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/3396121-avengers%20the%20yesterday%20quest%20tpb%20-%20page%201.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Time Runs Out",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4330866-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Avengers: Time Runs Out",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7162961-7243398194-81723.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Timeslide",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/654863-avengerst1.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Ultron Forever",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4885179-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Ultron Forever",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4479799-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Ultron Quest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/2339538-robert_jordan_s_wheel_of_time___the_eye_of_the_world__0__2009____page_1.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Ultron Unbound",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4502590-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Ultron Unleashed",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51078/1016657-avenge1.jpeg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Ultron Unlimited",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2549126-01.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Under Siege",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1432790-avg__us.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Under Siege",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/3066839-2285727-p00001.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Unleashed: Kang War One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5909039-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Unleashed: Secret Empire",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6143965-02.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Vision and the Scarlet Witch",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4536822-01.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Vision and the Scarlet Witch: A Year In the Life",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5245482-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: Visionaries",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4724316-01.jpg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: We Are the Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6531487-8905665858-69774.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: West Coast Avengers - Along Came A Spider-Woman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6199242-8877744633-61433.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: West Coast Avengers - Family Ties",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2014205-awc__ft.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: West Coast Avengers - Lost in Space-Time",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5286409-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: West Coast Avengers - Sins of the Past",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6189151-3400591409-60871.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: West Coast Avengers - Zodiac Attack",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6217690-2270805428-62827.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: West Coast Avengers Assemble",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1244201-awc.jpeg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: West Coast Avengers Assemble",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4593675-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: West Coast Avengers Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2961839-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Avengers: World Trust",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1171770-avg.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: X-Sanction",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2409859-avg__xsnc.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers: X-Sanction",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/57023/2122929-prv10715_cov.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Avengers/Defenders War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2100133-avengers_defenders_war_v2007__1___avengers_defenders_war__2007_10____page_1.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers/Doctor Strange: Rise of the Darkhold",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6631571-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers/Invaders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1170370-avginv.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers/Invaders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6653265-4135501642-72694.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers/Invaders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2170075-01a.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Avengers/Invaders #1 Director's Cut",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3038280-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers/Invaders Sketchbook",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/366487-21298-128424-1-avengers-invaders-sk.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers/Iron Man: First Sign",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5978792-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers/Iron Man: Force Works",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5187341-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers/JLA: Compendium",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2494567-jla_avengers___the_collector_s_edition_hc______the_compendium_v2___page_1.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers/Thunderbolts",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/68302-11486-101300-1-avengers--thunderbo.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Avengers/Thunderbolts: Best Intentions",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1566443-avg_tbl__bi.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers/Thunderbolts:The Nefaria Protocols",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1566509-avg_tbl__np.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers/Ultraforce",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/276688-20312-121302-1-avengers--ultraforc.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers/X-Men: Bloodties",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2857432-avengers_x_men__bloodties_v1995__1__1995_1____page_1.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers/X-Men: Maximum Security",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5302163-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avengers/X-Men: Utopia",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1050140-avengers_xmen_utopia.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avenging Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/2075079-avsm2011001_dc11_lr__1_.png",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "23 Issues"
//     },
//     {
//       "title": "Avenging Spider-Man Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2675535-www.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avenging Spider-Man: My Friends Can Beat Up Your Friends",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031797-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avenging Spider-Man: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6883244-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avenging Spider-Man: The Good, the Green and the Ugly",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2884504-02.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Avenging Spider-Man: Threats & Menaces",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3563238-03.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "AVX: Consequences",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2638169-avxcon2012001_lrcb_1.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "AVX: VS",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2311600-www.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "AXE: The Freshmen. Featuring the Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7098709-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Axis: Carnage",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4184407-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Axis: Carnage & Hobgoblin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4403018-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Axis: Hobgoblin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4170704-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "AXIS: Revolutions",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4580787-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Axis: Revolutions",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4184409-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Azrael",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/36177-5490-40405-1-azrael.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "47 Issues"
//     },
//     {
//       "title": "Azrael",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1000437-1.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "Azrael Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/35970-5491-40160-1-azrael-annual.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Azrael Plus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/239415-19720-118238-1-azrael-plus.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Azrael: Agent of the Bat",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/239416-19721-118239-1-azrael-agent-of-the.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "54 Issues"
//     },
//     {
//       "title": "Azrael: Angel in the Dark",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/2159270-angel_in_the_dark.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Azrael: Death's Dark Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1612238-216053_20101211171555_large.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Azrael: Death's Dark Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/747308-001.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Azrael: Fallen Angel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5087294-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Azrael/Ash",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/83918/4644291-screenshot_01.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Aztek: The Ultimate Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/38016-5727-42665-1-aztek-the-ultimate-.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "Baby's First Deadpool Book",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/378/124600-18600-109764-1-baby-s-first-deadpoo.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Babylon 5",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/66643-11358-99640-1-babylon-5.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "11 Issues"
//     },
//     {
//       "title": "Babylon 5: In Valen's Name",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/655122-babylon1.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Backpack Marvels: Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/447796-avengers_nights_of_wundagore_1_00.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Backpack Marvels: Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/448887-spider_man_murder_by_spider_1_00.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Backpack Marvels: X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/448905-x_men_dark_phoenix_returns_1_00.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Bad Girls",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/957718-tpb.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Bad Girls",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/294489-20417-122200-1-bad-girls.gif",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Balder the Brave",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/23388-3471-26073-1-balder-the-brave.jpg",
//       "year": "1985",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Bane 101",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2845240-digital_bane_101_v9999__2012____page_1.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Bane: Conquest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6614292-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Bane: Conquest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5836001-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Barbie",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27783/1264155-barb_1.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "63 Issues"
//     },
//     {
//       "title": "Barbie and Baby Sister Kelly",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/77609/4326173-barbie%20and%20baby%20sister%20kelly%20v1%20%231%20-%20page%201.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Barbie Fashion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27783/1264140-barbie_a.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "53 Issues"
//     },
//     {
//       "title": "Barbie Halloween Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1364084-barbie_halloween_special_v1_001.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Barnes & Noble Make Mine Marvel Sampler",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5557339-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Basketful of Heads",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7125233-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Bat Lash",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/18154/617082-300px_bat_lash_1.jpg",
//       "year": "1968",
//       "publisher": "DC Comics",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Bat Lash",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/259284-20162-120268-1-bat-lash.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Bat-Mite",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5051545-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Bat-Mite",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4599826-stk672288.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Batgirl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/54470-7205-75503-1-batgirl.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "73 Issues"
//     },
//     {
//       "title": "Batgirl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/922169-bg_cv1_ds_copy.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "24 Issues"
//     },
//     {
//       "title": "Batgirl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1998231-1a.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "53 Issues"
//     },
//     {
//       "title": "Batgirl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5342682-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "43 Issues"
//     },
//     {
//       "title": "Batgirl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/454731-batgirl1.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Batgirl & the Birds of Prey: Rebirth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5332333-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl Adventures",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/40136/1057229-000___cover.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl and the Birds of Prey",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5385304-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "22 Issues"
//     },
//     {
//       "title": "Batgirl and the Birds of Prey: Full Circle",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6517686-03.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl and the Birds of Prey: Source Code",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6172977-02.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl and the Birds of Prey: Who is Oracle?",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5786748-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2674471-batgirl_sl1.jpeg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batgirl Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5774271-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batgirl Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/108980/2422385-batgirl_annual__1__2000_.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl Secret Files and Origins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/982936-61593_20060904125738_large.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl Special",
//       "img": "https://comicvine1.cbsistatic.com/bundles/phoenixsite/images/core/loose/img_broken.png",
//       "year": "1988",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl Year One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/24925/478831-batgirl__year_one__1___page_1.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "Batgirl:  The Darkest Reflection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2537464-__kgrhqv__nue_w5o_kywbq_hfmzrcq__60_57.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl: A Celebration of 50 Years",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5700375-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl: A Knight Alone",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1632101-knightalone.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl: An Adult Coloring Book",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5711888-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl: Art of the Crime",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6929667-05.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl: Batgirl of Burnside",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4613178-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl: Batgirl Rising",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1300506-untitled.png",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl: Beyond Burnside",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5760938-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl: Deadline",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4277147-05.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl: Death of the Family",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3399183-03.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl: Death Wish",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1632109-deathwish.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl: Destruction's Daughter",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1632158-destruction.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl: Endgame",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4451075-batgirl%20endgame.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl: Family Business",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5051542-02.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl: Fists of Fury",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1632124-fistsfury.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl: Futures End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4086389-batgirl.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl: Kicking Assassins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1632136-kickass.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl: Knightfall Descends",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3372598-02.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl: Mindfields",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5396213-03.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl: Old Enemies",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7182285-06.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl: Point Blank",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5652309-03.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl: Redemption",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1677947-batgirlredemption.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl: Silent Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5008129-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl: Silent Running",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1632089-batgirl_silent_running_tp.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl: Son of Penguin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6103648-02.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl: Stephanie Brown",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6006854-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batgirl: Strange Loop",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6712637-04.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl: Summer of Lies",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6351101-03.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl: The Bronze Age Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6195173-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batgirl: The Flood",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1824163-108865_342366_3.jpeg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl: The Greatest Stories Ever Told",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1574996-dccomics.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl: The Lesson",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2108833-xbox_costco_001.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl: To the Death",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5328070-02.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl: Wanted",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3833205-04.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl: Year One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70539/1289283-batgirl_year_one.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl: Year One: The Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6807707-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batgirl/Robin: Year One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515479-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/103530/3421824-2.png",
//       "year": "1940",
//       "publisher": "DC Comics",
//       "Field7": "716 Issues"
//     },
//     {
//       "title": "Batman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38826/811021-batman.jpg",
//       "year": "1989",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5265989-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "88 Issues"
//     },
//     {
//       "title": "Batman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2033095-01a.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "57 Issues"
//     },
//     {
//       "title": "Batman - Detective Comics: Anarky",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4984277-07.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman - Detective Comics: Icarus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4572709-06.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman - Streets of Gotham: House of Hush",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4482100-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman - Streets of Gotham: Hush Money",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4482103-01.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman - Streets of Gotham: Leviathan",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4482104-02.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman - Two-Face",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64460/1919145-00.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman '66",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3177459-batman%2066%20main%201_print_cvr_0.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "30 Issues"
//     },
//     {
//       "title": "Batman '66",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3732861-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Batman '66",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3171587-dig005809_3.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "73 Issues"
//     },
//     {
//       "title": "Batman '66 Meets Steed and Mrs Peel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5305631-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Batman '66 Meets Steed and Mrs Peel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5252487-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Batman '66 Meets the Green Hornet",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3866904-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Batman '66 Meets the Green Hornet",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3833208-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Batman '66 Meets the Green Hornet",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4466349-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman '66 Meets the Legion of Super-Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5896604-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman '66 Meets the Legion of Super-Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5971490-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman '66 Meets The Man From U.N.C.L.E.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4923349-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Batman '66 Meets the Man From U.N.C.L.E.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5421852-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman '66 Meets The Man From U.N.C.L.E.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4965952-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Batman '66 Meets Wonder Woman '77",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5669285-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Batman '66 Meets Wonder Woman '77",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5544867-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Batman '66 Meets Wonder Woman '77",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6069416-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman '66 Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6538860-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman '66: The Lost Episode",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4226449-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman \"The Joker's Last Laugh\"",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/996143-164705_20090314164928_large.jpg",
//       "year": "1980",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman (Claritin Giveaway)",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3060156-batman%20clairitin%20giveaway%20v1999%20001%20%281999%29%20pagecover.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman / Scarecrow: Fear",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/571370-1.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman / Superman / Wonder Woman: Trinity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3889223-01.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman / Superman / Wonder Woman: Trinity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61001-10945-93996-1-batman--superman-.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman & Demon: A Tragedy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/974108-fann1h.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman & Dracula: Red Rain",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4043974-01.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman & Robin - The Official Comic Adaptation",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/80608/1469022-batman_robin_movie_adaptation___00_ocd_horus.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman & Robin Adventures",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5586783-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman & Robin Eternal",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4838206-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "26 Issues"
//     },
//     {
//       "title": "Batman & Robin Eternal",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5087298-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman & Superman Adventures: World's Finest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/469452-1.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman & Superman In World's Finest Comics: The Silver Age",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5755877-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman & Superman in World's Finest: The Silver Age Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5087305-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman & the Justice League",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6650813-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman & the Outsiders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6922578-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "Batman & the Outsiders Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7125234-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman & the Signal",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6220994-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman #1: Director's Cut",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5542835-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman #181 Facsimile Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7059387-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman #232: Facsimile Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7046319-232.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman #251: Facsimile Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7091386-251.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman #608 Special Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3754886-01.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman 1 Batman Day Special Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5443506-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman 101",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2845241-digital_batman___101_v9999___page_1.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman 201",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2919164-digital_batman___201_v9999___page_1.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman 3-D",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/2076122-batman3d_001.jpg",
//       "year": "1990",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman 75th Anniversary Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4133385-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman 80-Page Giant",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/65382-11213-98379-1-batman-80-page-giant.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman 80-Page Giant 2010",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1540652-p00001.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman 80-Page Giant 2011",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1976591-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Adventures",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/39793/825083-ba1.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "17 Issues"
//     },
//     {
//       "title": "Batman Adventures / Scooby Doo Halloween Fest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2626278-01.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Adventures #1 Halloween Fest Special Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4876824-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Adventures: Dangerous Dames & Demons",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1640499-batdangedem.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Adventures: Mad Love",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11785/309001-20558-123083-1-batman-adventures-m.jpg",
//       "year": "1994",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Adventures: Mad Love - The Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4506510-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Adventures: Rogues Gallery",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1640544-rouges_gallery.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Adventures: Shadows and Masks",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1640606-shadowsmasks.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Allies Secret Files and Origins 2005",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/982946-61593_20060904125738_large.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman and Harley Quinn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6113224-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Batman and Harley Quinn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6312640-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman and Other DC Classics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/250430-19965-119369-1-batman-and-other-dc.jpg",
//       "year": "1989",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman and Robin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/2009553-1.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "45 Issues"
//     },
//     {
//       "title": "Batman and Robin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2154534-batman_and_robin1.jpeg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "26 Issues"
//     },
//     {
//       "title": "Batman and Robin #1 Special Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1178129-01.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman and Robin Adventures Presented by Act II Microwave Popcorn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/4995481-bat1.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman and Robin Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2839136-bmrobann_cv1.jpeg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman and Robin by Peter J. Tomasi and Patrick Gleason Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6135152-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman and Robin: Bad Blood: DC Essential Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6676143-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman and Robin: Batman and Robin Must Die!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2580532-__kgrhqf__jue_bmwi9c3bporzvgvvg__60_57.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman and Robin: Batman Reborn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2580351-17002_900x1350.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman and Robin: Batman vs. Robin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2580354-__kgrhqr__qce88fts_umbpifdgmzcg__60_57.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman and Robin: Born to Kill",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2445323-978_1_4012_3487_4.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman and Robin: Dark Knight vs. White Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4361964-01.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman and Robin: Death of the Family",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3468780-03.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman and Robin: Futures End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4106640-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman and Robin: Pearl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498151-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman and Robin: Requiem For Damian",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3866905-04.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman and Robin: Robin Rises",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4912380-07.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman and Robin: The Big Burn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4277148-05.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman and Robin: The Cheetah Caper",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/80608/1475567-000.jpg",
//       "year": "1969",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman and Robin: The Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3754692-01.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman and Robin: The Hunt For Robin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4641171-06.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman and Son",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3368464-01.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman and Son",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3622112-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman and Superman: World's Finest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50633/948325-p00001.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "Batman and the Mad Monk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2059752-mad_monk.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman and the Monster Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2059756-monster_men.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman and the Outsiders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5700376-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman and the Outsiders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2755085-01.jpg",
//       "year": "1983",
//       "publisher": "DC Comics",
//       "Field7": "32 Issues"
//     },
//     {
//       "title": "Batman and the Outsiders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/231880-19660-117960-1-batman-and-the-outsi.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "14 Issues"
//     },
//     {
//       "title": "Batman and the Outsiders Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2755133-01.jpg",
//       "year": "1984",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman and the Outsiders Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26476/705949-batmanoutsidersspec001.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman and the Outsiders: Lesser Gods",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7218273-01.jpg",
//       "year": "2020",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman and the Outsiders: The Chrysalis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/32599/1263422-529339.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman and the Outsiders: The Snare",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/32599/1263406-10910_400x600.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman and the Signal",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6570575-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/19859/846090-88302_20071006024323_large.jpg",
//       "year": "1961",
//       "publisher": "DC Comics",
//       "Field7": "28 Issues"
//     },
//     {
//       "title": "Batman Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2373123-batman_annual_cover_1000.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Batman Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5563192-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Batman Archives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/246538-19810-118846-1-batman-archives.jpg",
//       "year": "1990",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Batman Arkham Asylum: Living Hell - The Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3866907-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Arkham: Black Mask",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7203362-01.jpg",
//       "year": "2020",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Arkham: Clayface",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5996314-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Arkham: Hugo Strange",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6384979-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Arkham: Joker's Daughter",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6195174-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Arkham: Mister Freeze",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5842011-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Arkham: Penguin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6582653-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Arkham: Ra's Al Ghul",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6850848-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Arkham: Two-Face",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4889060-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Arkham: Victor Zsasz",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7233441-01.jpg",
//       "year": "2020",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Begins Official Movie Adaptation",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100559/2127831-batmanbegins00.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Begins: The Movie and Other Tales of the Dark Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4361966-01.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Beyond",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/40587-6420-45752-1-batman-beyond.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Batman Beyond",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/40869-6421-46119-1-batman-beyond.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "24 Issues"
//     },
//     {
//       "title": "Batman Beyond",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2201604-bb1pg001.jpeg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "29 Issues"
//     },
//     {
//       "title": "Batman Beyond",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/58127/1595849-bat007.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Beyond",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1601939-bmbv3_cv1_ds_copy.jpeg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Batman Beyond",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4600723-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "16 Issues"
//     },
//     {
//       "title": "Batman Beyond",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1281795-1.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Batman Beyond",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5501748-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "40 Issues"
//     },
//     {
//       "title": "Batman Beyond 2.0",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3216511-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "40 Issues"
//     },
//     {
//       "title": "Batman Beyond 2.0: Justice Lords Beyond",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4440292-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Beyond 2.0: Mark of the Phantasm",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4790293-03.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Beyond 2.0: Rewired",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4199321-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Beyond Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3251331-bbu%2001.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "16 Issues"
//     },
//     {
//       "title": "Batman Beyond Unlimited",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2221668-__kgrhqjhjbge8e6_bkfhbptq2cquew__60_57.jpeg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "Batman Beyond: 10,000 Clowns",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3042201-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Beyond: Batgirl Beyond",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3732862-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Beyond: Brave New Worlds",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5087303-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Beyond: City of Yesterday",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5456845-02.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Beyond: Divide, Conquer, and Kill",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7225243-06.jpg",
//       "year": "2020",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Beyond: Escaping the Grave",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5923468-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Beyond: Hush Beyond",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4361968-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Beyond: Industrial Revolution",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4371763-01.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Beyond: Rebirth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5457503-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Beyond: Return of The Joker",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/33619/925175-batman_beyond_v2___return_of_the_joker_fc.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Beyond: Rise of the Demon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6223133-02.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Beyond: Target: Batman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6735979-04.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Beyond: The Final Joke",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7016182-05.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Beyond: The Long Payback",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6548891-03.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Beyond: Wired For Death",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5711889-03.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Black & White Preview",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/3923246-bat1.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Black And White",
//       "img": "https://comicvine1.cbsistatic.com/bundles/phoenixsite/images/core/loose/img_broken.png",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Batman Black and White",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3284427-batman%20bw%2001.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Batman Blank",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6631572-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman by Brian Azzarello and Eduardo Risso Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5936047-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman by Brian K. Vaughn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5772890-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman By Doug Moench & Kelley Jones",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3708515-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman by Ed Brubaker",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5019221-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman by Francis Manapul & Brian Buccellato: The Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6694313-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman by Grant Morrison Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6497361-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman by Jeph Loeb & Tim Sale Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6594969-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman by Neal Adams",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6312642-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman by Neal Adams Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5087304-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman By Scott Snyder and Greg Capullo Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7125235-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Cacophony",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/610233-2ijgdv9.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman Cacophony",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3836135-01.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Chronicles: The Gauntlet",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1283778-47430_20071007112235_large.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Confidential",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1993263-01.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "54 Issues"
//     },
//     {
//       "title": "Batman Day Special Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6061014-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Day Special Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6061017-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Ego and Other Tails: The Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5747720-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Eternal",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4240241-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman Eternal",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3746165-1-cc281b9cdd.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "52 Issues"
//     },
//     {
//       "title": "Batman Eternal Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7066180-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Forever: The Official Adaptation of the Warner Bros. Motion Picture",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/13536/290047-20393-121974-1-batman-forever.PNG",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Gallery",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51078/1017072-batm1.jpeg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Giant",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7100346-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman Giant",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11134/111349471/6495078-batman%20giant%201.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Batman Gotham Adventures 36 Pop Tart Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/6402599-bat1.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman Halloween Comic Fest Special Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6124907-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman in Barcelona: Dragon's Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/1766648-batman_in_barcelona_dragons_knight__2009_dc__1_.jpeg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman In Court of Owls: An Adult Coloring Book",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6060356-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman in Detective Comics: The Complete Covers of the First 25 Years",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100559/2392341-batmancovers1.jpg",
//       "year": "",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman in Detective Comics: The Complete Covers of the Second 25 Years",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100559/2392347-batmancovers2.jpg",
//       "year": "",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman In Noir Alley",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6110198-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman In The Brave & The Bold: The Bronze Age Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5665067-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman In The Eighties",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/656011-batm1.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman In The Fifties",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/656012-batma.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman in the Forties",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1259629-109349_20080522170029_large.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman In The Seventies",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/656014-batman1.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman in the Sixties",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1259667-109355_20071226160427_large.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Incorporated",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2802074-_t2ec16zhjhie9nysezcsbq5otpgm8q__60_57.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Incorporated: Demon Star",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498152-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Incorporated: Gotham's Most Wanted",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3468781-02.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman International",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1640411-batsint.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Masterpieces",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/80608/1469019-000fc.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Noir: Dark Victory",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5954207-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Noir: Eduardo Risso: The Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515482-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Noir: Gotham by Gaslight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6903154-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Noir: Hush",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4801989-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Noir: The Black Mirror",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5051544-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Noir: The Court of Owls",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6178623-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Noir: The Dark Knight Returns",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/4600565-7344888518-45983.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Noir: The Dark Knight Strikes Again",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6351104-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Noir: The Killing Joke",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5355899-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Noir: The Long Halloween",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4143607-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Plus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/238100-19712-118202-1-batman-plus.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Returns",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38826/810943-batmanreturns.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Returns: The Official Comic Adaptation of the Warner Bros. Motion Picture",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2851543-__addme___batman_returns___official_comic_adaptation_v9999___page_1.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Secret Files",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6666536-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/656021-batmansp1.jpg",
//       "year": "1984",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Spectacular",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/6013960-bat1a.jpg",
//       "year": "1978",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Strikes: Duty Calls",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100555/3404588-7845_400x600.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Superman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/6013971-bat1b.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Tales: Once Upon A Crime",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7233443-01.jpg",
//       "year": "2020",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman the Video Game",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/6042292-bat1.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Unseen",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51438/984303-batman___unseen__1___page_1.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Batman Unwrapped by Andy Kubert",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3699675-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Unwrapped: Death of the Family",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6184475-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Unwrapped: R.I.P.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4901818-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Unwrapped: The Court of Owls",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4103458-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman v Superman: Dawn of Justice - Upstairs/Downstairs",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5275196-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman v Superman: Dawn of Justice Prequel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5274821-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Batman Versus Bane",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4371769-01.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Versus Predator",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/13923/956529-batmanvspred_tpb.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman versus Predator",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/35249/712278-69846_20061107223017_large.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman Versus Predator II: Bloodmatch",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2755136-01.jpg",
//       "year": "1994",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Batman Versus Predator II: Bloodmatch",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2717525-01.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Versus Predator III",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2755140-01.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Batman Versus Predator III: Blood Ties",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70215/3386427-bvp3tpb.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Villains Secret Files & Origins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/250432-19966-119382-1-batman-villains-secr.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Villains Secret Files And Origins 2005",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/249289-19907-119188-1-batman-villains-secr.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman vs. Deathstroke",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6838522-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman vs. Ra's Al Ghul",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7059728-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman vs. Superman: The Greatest Battles",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4934512-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman vs. The Incredible Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/1766656-batman_vs._the_incredible_hulk__1995__1b.jpeg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Vs. The Undead",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1878394-batmanvstheundead.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman vs. Two-Face",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/439993-batman_vs_two_face_1_00.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Year 100 and Other Tales Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4851186-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Year Two: Fear The Reaper",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/657711-batmanyear1.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Year Two: The 30th Anniversary Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6152985-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman Zero Year Director's Cut",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3209678-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman-Spawn: War Devil",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/103870-18407-107904-1-batman--spawn--war.jpg",
//       "year": "1994",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman, Incorporated",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1515566-yhst_23599503122488_2133_1073429322.jpeg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Batman, Incorporated",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2358333-a3c05fd6b51103f5567af577e7a7a0fc0c92bf55.jpeg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "14 Issues"
//     },
//     {
//       "title": "Batman, Incorporated Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2291363-__kgrhqvhjcee92nykzmqbphcznppbg__60_57.jpeg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman, Incorporated Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3273038-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman, Incorporated: Leviathan Strikes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2130666-bmincls_cv1.jpeg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman:  War Drums",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/73350/1439541-batman___war_drums__2004____page_1.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: A Celebration of 75 Years",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3962827-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: A Death in the Family",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4315176-01.jpg",
//       "year": "1988",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: A Lonely Place of Dying",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1396001-30360_20080806224938_large.jpg",
//       "year": "1990",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: A Lot of Li'l Gotham",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6582649-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: A Movie Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64684/1676753-batmanmoviespecial.jpg",
//       "year": "1989",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: A Word to the Wise",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/996126-164705_20090314164928_large.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Absolution",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1219180-2wrln2x.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Anarky",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1396174-84210_20070328164835_large.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Arkham - The Riddler",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4558179-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Arkham Asylum",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/462/291349-20403-122008-3-arkham-asylum-a-ser.jpg",
//       "year": "1989",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Arkham Asylum - Tales of Madness",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27836/641831-300px_batman_arkham_asylum_tales_of_madness_1.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Arkham Asylum - The Road to Arkham",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38826/936612-1.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Arkham Asylum 25th Anniversary Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4199320-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Arkham City",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1993018-01a.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Batman: Arkham City",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3565885-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Arkham City - End Game",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2701227-__kgrhqv__p8fbmujr9sjbqor3vnldg__60_57.jpeg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Arkham City Digital Chapters",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2083627-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Batman: Arkham City: End Game",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2358958-batman_zone_000.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Batman: Arkham City: Special Issue",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/47697/2102812-batman___arkham_city___special_issue.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Arkham Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4412530-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "39 Issues"
//     },
//     {
//       "title": "Batman: Arkham Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4670526-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman: Arkham Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4440290-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "Batman: Arkham Knight Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4829190-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Arkham Knight Genesis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5108989-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Arkham Knight Genesis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4765088-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Batman: Arkham Knight: Batgirl & Harley Quinn Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4971664-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman: Arkham Knight: Batgirl Begins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4761798-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Arkham Knight: Batgirl/Harley Quinn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5045241-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Arkham Knight: Robin Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4923759-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Arkham Origins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4289901-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Arkham Reborn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1330575-batman_arkham_reborn.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Arkham Unhinged",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2049266-photo_oct_18__10_47_12_pm.png",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "58 Issues"
//     },
//     {
//       "title": "Batman: Arkham Unhinged",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3536681-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Batman: Arkham Unhinged",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2289076-__kgrhqrhjbwe9r5n3f00bphjibjet___60_57.jpeg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "20 Issues"
//     },
//     {
//       "title": "Batman: Arkham: Killer Croc",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5278602-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Arkham: Man-Bat",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5665066-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Arkham: Poison Ivy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5421853-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Arkham: Scarecrow",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5030413-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: As The Crow Flies",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1564369-2336_400x600.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Bane",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1234291-392px_batman___bane.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Bane of the Demon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27470/517214-300px_batman___bane_of_the_demon_1.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Batman: Batgirl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5551/670566-e14447b3_4abb_4d8c_99ab_6a019600ad4a.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Batgirl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4121479-01.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Battle for the Cowl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/755870-001.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman: Battle for the Cowl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4385629-01.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Battle for the Cowl Companion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1018626-battle_for_the_cowl_companion.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Battle for the Cowl: Arkham Asylum",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31068/773610-btfcaa1p01.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Battle for the Cowl: Commissioner Gordon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/755894-001.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Battle for the Cowl: Man-Bat",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/755099-sc00688e62.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Battle for the Cowl: The Network",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/791605-001.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Battle for the Cowl: The Underground",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/795677-bc_01.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Birth of the Demon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/73406/1346544-p00001.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Birth of the Demon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2416402-01.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Black and White",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1346280-1.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Batman: Black and White Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7218274-01.jpg",
//       "year": "2020",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Blackgate",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/158547-18935-111990-1-batman-blackgate.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Blackgate, Isle of Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/158550-18932-111986-1-batman-blackgate-i.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Blind Justice",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1677940-blindjustice.jpg",
//       "year": "1989",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Blink",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4398313-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Bloodstorm",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/196045-19169-114716-1-batman-bloodstorm.jpg",
//       "year": "1994",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Bloom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5421854-09.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Book of the Dead",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/40696-6309-45899-1-batman-book-of-the-.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman: Bride of the Demon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/73406/1345217-p00001.jpg",
//       "year": "1990",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Bride or Burglar?",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6527869-06.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Broken City",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1165795-3745_400x600.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Brotherhood of the Bat",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1947797-batbrotherhood.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Bruce Wayne - Fugitive",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3945843-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Bruce Wayne - The Road Home",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3514388-01.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Bruce Wayne-Murderer?",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1160265-1235_400x600.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Bullock's Law",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/158551-18934-111989-1-batman-bullock-s-la.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Castle of the Bat",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27470/527934-castle_of_the_bat.jpg",
//       "year": "1994",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Cataclysm",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1561617-batmancataclysmtp.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Child of Dreams",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/335890-21008-125787-1-batman-child-of-dre.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: City of Crime",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1255514-67822_20061023194947_large.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: City of Light",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23400/754652-batman_city_of_light_no.1_of_8__2003_.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Batman: Cold Days",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730674-08.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Contagion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/2185490-contagion__2_.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Cover to Cover",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2135230-covertocover.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Creature of the Night",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6164799-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Batman: Crimson Mist",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/196048-19170-114717-1-batman-crimson-mist.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Curse of the White Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7016183-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Batman: Damned",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6614293-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman: Damned",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7059388-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Dark Allegiances",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/308666-20537-123038-1-batman-dark-allegia.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Dark Detective",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27836/641852-1.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Batman: Dark Detective",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27994/2498610-641961_4940_400x600_super.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Dark Joker - The Wild",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/974402-batman__dark_joker__the_wild__sc__1993_10____page_1.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Dark Knight Dynasty",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/974405-batman__dark_knight_dynasty___batman__dark_knight_dynasty__1__1998_8____page_1.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Dark Knight Gallery",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/315984-20648-123806-1-batman-dark-knight.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Dark Knight of the Round Table",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/24019/588971-batman__dark_knight_of_the_round_table__1.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman: Dark Knight, Dark City",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4384982-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Dark Legends",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1592879-9703761_1.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Dark Victory",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70563/1748028-dark_victory.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Dark Victory",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/1704741-batman_dark_victory__1999__01.jpeg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "14 Issues"
//     },
//     {
//       "title": "Batman: Day of Judgment",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/1099156-batman_day_of_judgment__1999__1.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Dead to Rights",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3368682-01.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Death and the City",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/439965-batman_death_and_the_city_1_00.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Death and the Maidens",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/2171107-batmandeathmaidens.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Death and the Maidens",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/60973-10940-93968-1-batman-death-and-th.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "Batman: Death and the Maidens The Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5665068-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Death By Design Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/37809/2377230-batman_death_by_design_hc_667x1024.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Death Mask",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/32578/860541-batmandm01_001.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Batman: Death of Innocents",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/80608/1468587-batman___death_of_innocents_pg00.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Death of the Family",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3409427-03.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Detective",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/439972-batman_detective_1_00.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Detective #27",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1257069-batman___detective_comics__27__2003____page_1.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Detective Comics: A Lonely Place of Living",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6364029-05.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Detective Comics: Arkham Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7174840-02.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Detective Comics: Batmen Eternal",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6594973-07.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Detective Comics: Blood of Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5340651-08.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Detective Comics: Deface the Face",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6874980-09.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Detective Comics: Deus Ex Machina",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6195175-04.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Detective Comics: Faces of Death",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2385602-batman_detective_comics_vol1_hc_706x1024.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Detective Comics: Fall of the Batmen",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6477285-06.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Detective Comics: Gordon At War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5559757-09.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Detective Comics: League of Shadows",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6080269-03.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Detective Comics: Mythology",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7059389-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Detective Comics: On the Outside",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6712638-08.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Detective Comics: Rebirth Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6123801-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Batman: Detective Comics: Rise of the Batmen",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5677312-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Detective Comics: The Victim Syndicate",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5842012-02.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Digital Justice",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/974408-batman__digital_justice__1__1990_0____page_1.jpg",
//       "year": "1990",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: DOA",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70461/1286880-00.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Dreamland",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23749/1113297-dreamland.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Earth One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2444427-enhanced_buzz_wide_27774_1340638828_6.jpeg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman: Ego",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11785/312121-20592-123427-1-batman-ego.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Ego and Other Tails",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5270623-01.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Endgame",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4801988-07.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Endgame #40 Director's Cut",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4930323-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Endgame Special Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4829206-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Epilogue",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5586787-10.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Europa",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4913274-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Batman: Europa",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5147168-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Europa Director's Cut",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5238249-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Evolution",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1632195-evo.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Eye of the Beholder",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2680974-_t2ec16vhjhee9ny2rtbkbqk0gj8sjq__60_57.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Face the Face",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/439979-batman_face_the_face_1_00.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Faces",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70539/1289502-batman_faces.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: False Faces",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1781725-false_faces.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Family",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/64871-11174-97868-1-batman-family.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Batman: Featuring Two-Face and The Riddler",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/63924/1206869-batman2riddler.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Fortunate Son",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1229215-1245_400x600.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Four of a Kind",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1592849-107969_20071009025706_large.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: From the 30's to the 70's",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51078/1018340-bat1.jpeg",
//       "year": "1971",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Full Circle",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51078/1018359-batman1.jpeg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Futures End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4086620-bmfe_cv1_2d_ds_540a442b342611.44061374.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Gates of Gotham",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2358988-01a.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Batman: Gates of Gotham",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2192245-scanned_image_1.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Gates of Gotham: The Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6676144-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: GCPD",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/38066-5732-42722-1-batman-gcpd.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Batman: Ghosts",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6429635-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Going Sane",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1663623-goingane.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Golden Streets of Gotham",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6705497-1232652363-copyO.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Gordon of Gotham",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4089931-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Gordon of Gotham",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2358990-01.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Batman: Gordon's Law",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1232402-batman___gordon_s_law__1_pg00.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Batman: Gotham Adventures",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/597964-bga1a.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "60 Issues"
//     },
//     {
//       "title": "Batman: Gotham After Midnight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15455/462574-bgam.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Batman: Gotham by Gaslight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2612375-01.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Gotham City Secret Files",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/34588/1024289-secret_files_and_origins_gotham_city.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Gotham County Line",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/197023-19180-114794-1-batman-gotham-count.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman: Gotham Knights",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/46652-7207-55295-1-batman-gotham-knigh.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "74 Issues"
//     },
//     {
//       "title": "Batman: Gotham Knights: Transference",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7195742-01.jpg",
//       "year": "2020",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Gotham Nights",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/53346/1002836-gn001.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Batman: Gotham Nights II",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/229790-19622-117704-1-batman-gotham-nights.JPG",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Batman: Gotham Noir",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/974420-batman__gotham_noir__ogn__2001_0____page_1.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Gotham Shall Be Judged",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2279166-gothamtpb.png",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Gotham Underground",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/80954/1562562-batman_gothamunderground.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Gothic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/238102-19713-118203-1-batman-gothic.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Gothic Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4698669-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Graveyard Shift",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4532184-06.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Harley & Ivy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/1611252-51wxjq9lvxl._ss500_.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Harley & Ivy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9541/311777-20586-123376-1-batman-harley-and-i.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman: Harley and Ivy: The Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5041570-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Harley Quinn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4685097-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Harley Quinn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/1766548-batman_harley_quinn__1999_1st_printing__1.jpeg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Harvest Breed",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1219300-bhb_b.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Haunted Gotham",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/41002-6424-46276-1-batman-haunted-goth.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Batman: Haunted Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4414505-01.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Heart of Hush",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4414506-01.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Hidden Treasures",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/1440357-sc00446a88.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: His Greatest Adventures",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6050242-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Hollywood Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61972-6484-94967-1-batman-hollywood-kn.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman: Holy Terror",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/974424-batman__holy_terror___holy_terror__1__1991_0____page_1.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Hong Kong",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/7368/191339-19124-114319-1-batman-hong-kong.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Huntress/Spoiler: Blunt Trauma",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23749/743424-34169_20060329133929_large.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Hush",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1353279-hush_vol_1.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman: Hush",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3368467-01.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Hush Returns",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1090047-4691_400x600.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Hush The 15th Anniversary Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6135153-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Hush Unwrapped",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1967871-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: I Am Bane",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6029043-03.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: I Am Gotham",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5640098-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: I Am Suicide",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5797751-02.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: I, Joker",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4427957-01.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Illustrated by Neal Adams",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1396077-nealadams1.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman: Impostors",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1967869-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: In Darkest Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4043975-01.jpg",
//       "year": "1994",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: It's Joker Time",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64460/1236344-batman_its_joker_time_1_of_3_00fc.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman: Jekyll & Hyde",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/470332-1.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Batman: Jekyll and Hyde",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2080713-jekyll.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Joker's Apprentice",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1257059-joker_s_apprentice___page_1.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Joker's Asylum",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/58127/2317737-10567_900x1350.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman: Joker's Daughter",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3618090-joker%27s%20daughter.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Journey Into Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27470/518638-1_1jik.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Batman: Kelley Jones Gallery Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4283471-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: King Tut's Tomb",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1612290-15384kingtut.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Kings of Fear",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6572678-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Batman: Kings of Fear",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7046320-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Knight and Squire",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3855021-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Knightfall",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100559/2506137-batmanknighfall1.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman: Knightfall",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1251993-54798_20060730120956_large.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman: Knightfall Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5801595-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman: Knightfall: 25th Anniversary Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6606772-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman: Knightgallery",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27470/527935-batmanknightgallery.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Knightmares",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7073666-1402174243-80510.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Knightquest: The Crusade",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6623595-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman: Knightquest: The Search",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6694314-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Knightsend",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6703921-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Last Knight On Earth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6947183-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman: League of Batmen",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61975-6488-94970-1-batman-league-of-ba.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman: Legacy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5797753-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman: Legacy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1219237-batman_legacy_tpb_cover.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Legends Of The Dark Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3321400-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Batman: Legends of the Dark Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/32433-4720-36168-1-batman-legends-of-t.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "179 Issues"
//     },
//     {
//       "title": "Batman: Legends of the Dark Knight Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/32805-4950-36608-1-batman-legends-of-t.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Batman: Legends of the Dark Knight Halloween Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11785/312127-20593-123428-1-batman-legends-of-t.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman: Legends of the Dark Knight Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6367894-2673834765-copyO.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Legends of the Dark Knight: Jazz",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/36495-5495-40769-1-batman-legends-of-t.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman: Li'l Gotham",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3480306-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Batman: Li'l Gotham",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2677631-screen_shot_2012_10_31_at_10.11.29_am.png",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "24 Issues"
//     },
//     {
//       "title": "Batman: Li'l Gotham",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3650696-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman: Li'l Gotham Batman Day 2018",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6594974-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Life After Death",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1467661-scanned_image_6.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Long Shadows",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515481-01.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Lost",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6135155-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Lovers & Madmen",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1297645-20661.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Mad Love and Other Stories",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4442082-01.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Manbat",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/37137-5496-41557-1-batman-manbat.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman: Manbat",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/148518/4120138-349839-5496-126952-1-batman-manbat_super.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Mask of the Phantasm - The Animated Movie",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/40136/826467-mmotpcover.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Masque",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6635858-0543346640-copyO.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Master of the Future",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2612392-01.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Mitefall",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1256082-batman___mitefall___page_1.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Monsters",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1592868-183907_20091028055204_large.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Mr. Freeze",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60739/1250969-batman___mr_freeze_00fc.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Nevermore",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27470/518845-1_1nevermore.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Batman: New Gotham",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5863190-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman: Night Cries",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1197826-nightcriz.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Night of the Monster Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5711890-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Night of the Owls",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3368518-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Nightwalker (Special Edition)",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7080067-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Nightwalker: The Graphic Novel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7083659-9996576973-80816.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Nine Lives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/330952-20933-125405-1-batman-nine-lives.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: No Law and a New Order",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1655847-nolawneworder.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: No Man's Land",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/21374/428063-nomansland1altcover.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman: No Man's Land",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4462838-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Batman: No Man's Land",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/238041-19706-118196-1-batman-no-man-s-lan.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Batman: No Man's Land Gallery",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70461/1286893-00.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: No Man's Land Secret Files",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74848/1456967-no_man_s_land_secret_files_cover.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Noel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2065481-bmnoel_cover_sdfkljsdf098g.jpeg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Nosferatu",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2669871-01.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Odyssey",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3345274-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Odyssey",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2083576-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Batman: Odyssey",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62263/1291858-batmanodyssey001.cbz___page_1.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Batman: Officer Down",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1234042-1265_400x600.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Onstar",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/656019-batmano1.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman: Orphans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1993027-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman: Orpheus Rising",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1993033-01.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Batman: Other Realms",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1592908-137546_20080725135006_large.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Our Worlds at War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1075310-cover.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Outlaws",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/238051-19707-118197-1-batman-outlaws.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman: Penguin Triumphant",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70539/1289499-300px_batman_penguin_triumphant.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Pennyworth R.I.P.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7240308-01.jpg",
//       "year": "2020",
//       "publisher": "DC Comics",
//       "Field7": "0 Issues"
//     },
//     {
//       "title": "Batman: Poison Ivy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6209989-3492055641-copyO.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Prelude To Knightfall",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6594976-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Prelude to the Wedding: Batgirl vs. Riddler",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6476559-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Prelude to the Wedding: Harley Quinn vs. Joker",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6486514-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Prelude To the Wedding: Nightwing vs. Hush",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6457993-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Prelude to the Wedding: Red Hood vs. Anarky",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6479044-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Prelude To the Wedding: Robin vs. Ra's Al Ghul",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6451276-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Preludes to the Wedding",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6594978-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Prey",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4468618-01.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Private Casebook",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1024965-13243_400x600.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Prodigal",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6744781-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Prodigal",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1396025-1267_400x600.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: R.I.P.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2160474-batmanrip.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: R.I.P. Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4724043-01.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Rebirth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5238251-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Rebirth Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6029042-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Batman: Reign of Terror",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1256026-batman__reign_of_terror__1998____page_1.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Riddler and the Riddle Factory",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/13536/337684-21026-125884-1-batman-riddler-and.PNG",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Road To No Man's Land",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4838208-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman: Room Full of Strangers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1346288-1.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Rules of Engagement",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1564429-168696_20090426154507_large.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Run, Riddler, Run",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/31808-4722-35433-1-batman-run-riddler.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman: Scar of the Bat",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/974389-batman___scar_of_the_bat__ogn__1996_0____page_1.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Scarecrow and Two-Face Year One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1275840-170143_20090513122752_large.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Scarecrow Tales",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1587632-2824_400x600.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Scarface -- A Psychodrama",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/676448-scarface.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Scottish Connection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1220414-44960_20060829155858_large.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Second Chances",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4685098-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Secret Files",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/238098-19710-118200-1-batman-secret-files.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Secrets",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2080718-secrets.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Secrets",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27836/651203-1_3_1_2006.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Batman: Secrets of the Batcave",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/439992-batman_secrets_of_the_batcave_1_00.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Seduction of the Gun",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/657706-batman1.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Shadow of the Bat",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/5232625-shadow%20of%20the%20bat%20%231.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "96 Issues"
//     },
//     {
//       "title": "Batman: Shadow of the Bat",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5252030-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Batman: Shadow of the Bat Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/8056/391326-9219-130466-1-batman-shadow-of-th.gif",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Batman: Shaman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1260506-batsham.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Sins of the Father",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6676145-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Sins of the Father",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6279119-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Batman: Sins of the Father",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6289310-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Batman: Snow",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1279121-92219_20070502143807_large.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Son of the Demon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6066379-7414584562-copyO.jpg",
//       "year": "1987",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Strange Apparitions",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1229171-strangeapparitions.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Streets of Gotham",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2549135-01a.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "21 Issues"
//     },
//     {
//       "title": "Batman: Super Powers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6302371-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Superheavy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5099084-08.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Sword of Azrael",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1917925-01b.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Batman: Sword of Azrael",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/148518/4120141-batman_sword_of_azrael_tp.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Tales of the Demon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1663352-talesdemon8.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Tales of the Man-Bat",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6339678-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Ten Nights of the Beast",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1286131-44693_20060730125345_large.jpg",
//       "year": "1994",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Tenses",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/657708-batmanten1.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman: Terror",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1587681-50295_20060710092756_large.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The 10-Cent Adventure",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/21374/766961-10cent.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The 12 Cent Adventure",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/28245/817874-12centadv.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The 1989 Movie Adaptation Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7152274-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Abduction",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/73406/1346348-p00001.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Ankh",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1299913-296978.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman: The Arkham Saga Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6606771-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Bat and the Beast",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1612305-beastbtmn.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Bat and the Cat: 80 Years of Romance",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7225242-01.jpg",
//       "year": "2020",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Black Casebook",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/1613158-11737_400x600.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Black Glove",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/975066-bbg.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Black Glove Deluxe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2983241-01.jpg",
//       "year": "",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Black Mirror",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2096858-batman_the_black_mirror.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Blue, the Grey and the Bat",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4909338-01.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Book of Shadows",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/218115-19328-116035-1-batman-the-book-of.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Brave and the Bold",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4593667-01.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Brave and the Bold",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/691153-batmanbravebold1.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "22 Issues"
//     },
//     {
//       "title": "Batman: The Brave and the Bold - Emerald Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4385631-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Brave and the Bold - The Fearsome Fang Strikes Again",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2080720-fearsome_fangs.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Brave and the Bold: The Bronze Age Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6213421-5046656371-61767.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman: The Caped Crusader",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6559428-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman: The Cat and the Bat",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1587750-187442_20091208032456_large.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Chalice",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6063/696828-1274_400x600.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The City of Owls",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100647/3206965-4uy4hxif82xm-gpsriocfoxxxl4j3hpexhjnof_p3ymrypkwj94qgrtdb3sbc6ky.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Collected Adventures",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/32817-4951-36625-1-batman-the-collecte.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman: The Collected Legends of the Dark Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1663566-clotdk.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Court of Owls",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2334383-978_1_4012_3541_3.jpeg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Court of Owls Saga: DC Essential Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6594972-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Cult",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1878345-thecultnew.jpg",
//       "year": "1989",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Cult",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3413364-01.jpg",
//       "year": "1988",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Batman: The Dark Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4133781-bmtdkr1nm94m093.jpg",
//       "year": "1986",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Batman: The Dark Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/2023294-1.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "34 Issues"
//     },
//     {
//       "title": "Batman: The Dark Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1587481-prev_img.jpeg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Batman: The Dark Knight - Clay",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3993978-04.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Dark Knight - Mad",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3572890-03.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Dark Knight Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3070860-the%20dark%20knight.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Dark Knight Archives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1062657-vol1.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Batman: The Dark Knight Detective",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6364028-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman: The Dark Knight III: The Master Race",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6060055-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Dark Knight Master Race: The Covers Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6050240-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Dark Knight Returns",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1657463-1c.png",
//       "year": "1986",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Dark Knight Returns - 30th Anniversary Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5041569-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Dark Knight Returns Tenth Anniversary Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2850042-__addme___batman__the_dark_knight_returns_tenth_anniversary_edition_v9999__1___batman__the_dark_knight_returns__1986_10____page_1.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Dark Knight Saga: Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5141583-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Dark Knight Strikes Again",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3368470-01.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Dark Knight Unwrapped By David Finch Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4558181-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Dark Knight: Cycle of Violence",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498153-02.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Dark Knight: Golden Dawn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/2150970-batman_dark_knight.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Dark Knight: Knight Terrors",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498154-01.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Dark Prince Charming",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6123800-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman: The Dark Prince Charming",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6666534-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Dawnbreaker",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6080270-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Devastator",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6130777-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Doom that Came to Gotham",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/42330-6738-48235-1-batman-the-doom-tha.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman: The Doom That Came To Gotham",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5052364-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Drowned",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6110232-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Dynamic Duo Archives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1679452-dynamicduo.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman: The Fall and the Fallen",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7182286-11.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Golden Age",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5368804-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Batman: The Golden Age Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4918789-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Batman: The Greatest Stories Ever Told",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100559/2141221-batmangreatest1.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman: The Hill",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1283792-44636_20060829161433_large.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Jiro Kuwata Batmanga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3936437-batmanga-1-sfcover.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "53 Issues"
//     },
//     {
//       "title": "Batman: The Jiro Kuwata Batmanga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4252909-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman: The Joker's Last Laugh",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1165817-9173_400x600.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Killing Joke",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70215/6412182-bkj%2014th.jpg",
//       "year": "1988",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Killing Joke: The Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2850046-hc_batman__the_killing_joke_v1988__1___the_killing_joke__1988_6____page_1.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Last Angel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/470465-1.jpg",
//       "year": "1994",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Last Arkham",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70563/1336030-batman_the_last_arkham_tpb.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Long Halloween",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/2140968-bats_long_hall_new_ptg.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Long Halloween",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/42700-6822-48827-1-batman-the-long-hal.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "Batman: The Long Halloween - Halloween ComicFest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3726619-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Man Who Laughs",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4436361-01.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Many Deaths of Batman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1587687-250px_many_deaths_of_the_batman_tp.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Merciless",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6113366-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Movies",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1640423-1284_400x600.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Murder Machine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6076647-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Order of Beasts",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/598470-26232_20060216204228_large.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Red Death",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6060357-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Resurrection Of Ra's Al Ghul",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3514392-01.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Return",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1515276-p00001.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Return of Bruce Wayne",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62058/1220057-bmrbw_cv1_ds_copy.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Batman: The Return of Bruce Wayne",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2580576-__kgrhqnhj_0e7_ygo_ljbpdkmui7bw__60_57.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Return of Bruce Wayne - The Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3498155-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Ring, the Arrow and the Bat",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1630687-ringarrowbat.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Rules of Engagement",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6395710-05.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The TV Stories",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3556372-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Tyrant Wing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6850849-09.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Ultimate Evil",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1219257-batman_ue_vol_1.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman: The War of Jokes and Riddles",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6184476-04.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Wedding",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6657905-07.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The Widening Gyre",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/931905-bmwgy_cv1_var_copy.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Batman: The Widening Gyre",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515483-01.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: The World's Finest Comics Archives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2080932-batman_in_world_s_finest_archives.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman: The Wrath",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1587794-188587_20091223075454_large.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Thrillkiller",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/240541-19731-118290-1-batman-thrillkiller.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Through the Looking Glass",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/2536701-p00001.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Time and the Batman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1697417-time_and_the_batman.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Too Many Jokers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/998463-164705_20090314164928_large.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Toyman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/32578/860561-batman_toyman_1_of_4_00fc.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Batman: Troika",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6779302-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Turning Points",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/125887/2799106-268fa387_9c63_4527_b61a_bfbbca090935.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Turning Points",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/46370-7507-54546-1-batman-turning-poin.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Batman: Two Faces",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/974731-batman__two_faces__1__1998_11____page_1.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Two-Face - Crime and Punishment",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1283785-46231_20060719223844_large.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Two-Face Strikes Twice",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1623203-p00001a.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Batman: Under the Cowl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1630672-batutc.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Under The Hood",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1777652-under_the_red_hood.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman: Under The Red Hood",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/2007781-batmanutrd.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6999155-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Batman: Unseen",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/125887/2799459-escanear0001.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Vengeance of Bane",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4197509-batmanrevofbane1nm94m103.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman: Vengeance of Bane II: The Redemption",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/974765-519578_vengeanceofbane_super.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: Venom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/657709-batmanvenom1.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: War Crimes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1801848-batman_war_crimes.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Batman: War Games",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4888973-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Batman: War Games",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1784511-war_games_act_one.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Batman: War on Crime",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/229829-19628-117721-1-batman-war-on-crime.JPG",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     }
//   ]
// // const characterSeed = [
// //   {
// //     name: "Batman",
// //     publisher: "DC",
// //     link: "https://dc.fandom.com/wiki/Batman",
// //     img:  "https://vignette.wikia.nocookie.net/marvel_dc/images/7/7b/Batman_Vol_2_9_Textless_Variant.jpg/revision/latest/scale-to-width-down/150?cb=20120510175322",
// //     info: "the super-hero protector of Gotham City, a man dressed like a bat who fights against evil and strikes terror into the hearts of criminals everywhere.",
// //     series: ["new52", "rebirth", "All-Star Batman"]
// //   },
// //   {
// //     name: "Superman",
// //     publisher: "DC",
// //     link: "https://dc.fandom.com/wiki/Superman",
// //     img:  "https://vignette.wikia.nocookie.net/marvel_dc/images/9/9d/Superman_0008.jpg/revision/latest/scale-to-width-down/150?cb=20120825192746",
// //     info: "also known as the Man of Steel, is one of the most powerful superheroes in the DC Universe.",
// //     series: ["new52", "rebirth"]
// //   },
// //   {
// //     name: "Wonder Woman",
// //     publisher: "DC",
// //     link: "https://dc.fandom.com/wiki/Wonder_Woman",
// //         img:  "https://vignette.wikia.nocookie.net/marvel_dc/images/e/ec/Wonder_Woman_0007.jpg/revision/latest/scale-to-width-down/150?cb=20130928221412",
// //         info: " is an Amazon warrior princess and one of the most powerful superheroes in the DC Universe.",
// //         series: ["new52", "rebirth"]
// //       },
// //       {
// //           name: "Aquaman",
// //           publisher: "DC",
// //           link: "https://dc.fandom.com/wiki/Aquaman",
// //           img:  "https://vignette.wikia.nocookie.net/marvel_dc/images/5/51/Aquaman_0024.jpg/revision/latest?cb=20130516170558",
// //           info: "also known as Arthur Curry and Orin, is a superhero and the ruler of the seas.",
// //           series: ["rebirth"]
// //         },
// //         {
// //           name: "Flash",
// //           publisher: "DC",
// //           link: "https://dc.fandom.com/wiki/Flash",
// //           img:  "https://vignette.wikia.nocookie.net/marvel_dc/images/6/6e/Flash_0012.jpg/revision/latest/scale-to-width-down/150?cb=20130708162057",
// //           info: "the fastest man alive. He is the protector of Central City and Keystone City, fighting against evil using his super-speed and a dedicated sense of heroism",
// //           series: ["new52", "rebirth"]
// //         },
// //         {
// //           name: "Green Lantern",
// //           publisher: "DC",
// //           link: "https://dc.fandom.com/wiki/Green_Lantern",
// //           img:  "https://vignette.wikia.nocookie.net/marvel_dc/images/8/83/Hal_Jordan_and_the_Green_Lantern_Corps_Vol_1_45_Textless_Variant.jpg/revision/latest/scale-to-width-down/329?cb=20180523193425",
// //           info: "a name that has been used by many characters in the DC Universe, and two distinct franchises.",
// //           series: ["new52", "rebirth"]
// //         },
// //         {
// //           name: "Booster Gold",
// //           publisher: "DC",
// //           link: "https://dc.fandom.com/wiki/Booster_Gold",
// //           img:   "https://vignette.wikia.nocookie.net/marvel_dc/images/1/13/Booster_Gold_Futures_End_Vol_1_1_Present_Textless.jpg/revision/latest/scale-to-width-down/329?cb=20140926203505",
// //           info: "a time-traveling super-hero from the 25th Century who uses high-tech equipment to fight crime, alongside his robotic side-kick Skeets.",
// //           series: ["new52", "rebirth"]
// //         },
// //         {
// //           name: "Shazam",
// //           publisher: "DC",
// //           link: "https://dc.fandom.com/wiki/Shazam",
// //           img:  "https://vignette.wikia.nocookie.net/marvel_dc/images/6/61/Shazam%21_Vol_3_1_Textless_Variant.jpg/revision/latest/scale-to-width-down/329?cb=20181205234924",
// //           info: "The name originally belonged to an ancient wizard, who lived in the Rock of Eternity and guarded the Seven Deadly Sins.",
// //           series: ["new52", "rebirth"]
// //         },
// //         {
// //           name: "Green Arrow",
// //           publisher: "DC",
// //           link: "https://dc.fandom.com/wiki/Green_Arrow",
// //           img:   "https://vignette.wikia.nocookie.net/marvel_dc/images/2/29/Green_Arrow_Vol_6_1_Textless_Variant.jpg/revision/latest/scale-to-width-down/333?cb=20160617025432",
// //           info: "Green Arrow is a vigilante superhero who fights crime using archery, technology, and martial arts.",
// //           series: ["new52", "rebirth"]
// //         },
// //         {
// //           name: "Swamp Thing",
// //           publisher: "DC",
// //           link: "https://dc.fandom.com/wiki/Swamp_Thing",
// //           img:   "https://vignette.wikia.nocookie.net/marvel_dc/images/0/0b/Swamp_Thing_Vol_5_25_Textless.jpg/revision/latest/scale-to-width-down/330?cb=20131106222450",
// //           info: "Swamp Thing is an elemental creature who shares a connection to all plant life on the planet Earth through a network called the Green.",
// //           series: ["new52", "rebirth"]
// //         },
// //         {
// //           name: "Red Tornado",
// //           publisher: "DC",
// //           link: "https://dc.fandom.com/wiki/Red_Tornado",
// //           img:   "https://vignette.wikia.nocookie.net/marvel_dc/images/4/42/Red_Tornado_003.jpg/revision/latest/scale-to-width-down/329?cb=20180306225132",
// //           info: "Red Tornado is an android super-hero with wind-manipulation powers in addition to incredible strength and speed.",
// //           series: ["new52", "rebirth"]
// //         },
// //         {
// //           name: "Scooby-Doo",
// //           publisher: "DC",
// //           link: "https://dc.fandom.com/wiki/Scooby_Doo",
// //           img:  "https://vignette.wikia.nocookie.net/marvel_dc/images/1/1e/Scooby-Doo_Vol_1_159.jpg/revision/latest/scale-to-width-down/328?cb=20111222180514",
// //           info: "Mystery Inc Solving Mysteries",
// //           series: ["new52", "rebirth"]
// //         },
// //         // marvel superheroes 8
// //         {
// //           name: "Deadpool",
// //           publisher: "Marvel",
// //           link: "https://marvel.fandom.com/wiki/Wade_Wilson_(Earth-616)",
// //           img:  "https://vignette.wikia.nocookie.net/marveldatabase/images/e/e3/Despicable_Deadpool_Vol_1_300_Liefeld_Variant_Textless.jpg/revision/latest/scale-to-width-down/250?cb=20180603160322",
// //           info: "As 'The Merc with a Mouth' he set out as Deadpool to kill and have a good time doing it. Deadpool was created by Fabian Nicieza and Rob Liefeld, first appearing in New Mutants #98 (1991).",
// //           series: ["Secret Wars"]
// //         },
// //         {
// //           name: "Spider-Man",
// //           publisher: "Marvel",
// //           link: "https://marvel.fandom.com/wiki/Spider-Man",
// //           img:  "https://vignette.wikia.nocookie.net/marveldatabase/images/c/c8/Amazing_Spider-Man_Vol_3_1_Ross_Variant_Textless.jpg/revision/latest/scale-to-width-down/250?cb=20140124154956",
// //           info: "As a result of a radioactive spider bite, high schooler Peter Parker developed powers and abilities similar to that of a spider.",
// //           series: ["Secret Wars"]
// //         },
// //         {
// //           name: "Iron Man",
// //           publisher: "Marvel",
// //           link: "https://marvel.fandom.com/wiki/Iron_Man",
// //           img:  "https://vignette.wikia.nocookie.net/marveldatabase/images/a/a8/Superior_Iron_Man_Vol_1_1_Marvel_Comics_75th_Anniversary_Variant_Textless.jpg/revision/latest/scale-to-width-down/250?cb=20140819193357",
// //           info: "Stark built an armored suit to escape captivity, which doubled as a device to keep his heart beating keeping him alive. Once he returned to the United States, Stark reinvented himself as the armor-clad superhero Iron Man.",
// //           series: ["Secret Wars"]
// //         },
// //         {
// //           name: "Thor",
// //           publisher: "Marvel",
// //           link: "https://marvel.fandom.com/wiki/Thor",
// //           img:  "https://vignette.wikia.nocookie.net/marveldatabase/images/a/ae/Thor_Vol_4_1_Ross_Variant_Textless.jpg/revision/latest/scale-to-width-down/250?cb=20140909103520",
// //           info: "Leaping from the legends of Norse mythology, the Asgardian God of Thunder, Thor Odinson, is the son of Odin the All-Father and Jord, Elder Goddess and spirit of the Earth.",
// //           series: ["Secret Wars"]
// //         },
// //         {
// //           name: "Hulk",
// //           publisher: "Marvel",
// //           link: "https://marvel.fandom.com/wiki/Hulk",
// //           img:  "https://vignette.wikia.nocookie.net/marveldatabase/images/c/ce/Savage_Hulk_Vol_2_1_Marvel_Comics_75th_Anniversary_Variant_Textless.jpg/revision/latest/scale-to-width-down/250?cb=20140825205702",
// //           info: "Bruce Banner was a scientist who was working on a gamma bomb when he noticed teenager Rick Jones out on the test range.",
// //           series: ["Secret Wars"]
// //         },
// //         {
// //           name: "Black Widow",
// //           publisher: "Marvel",
// //           link: "https://marvel.fandom.com/wiki/Black_Widow",
// //           img:  "https://vignette.wikia.nocookie.net/marveldatabase/images/5/54/Black_Widow_Vol_5_13_Textless.jpg/revision/latest/scale-to-width-down/250?cb=20140916201519",
// //           info: "A former KGB agent, Natalia Romanova otherwise known as Black Widow defected to the United States from the Soviet Union (later known as Russia) to join S.H.I.E.L.D..",
// //           series: ["Secret Wars"]
// //         },
// //         {
// //           name: "Avengers",
// //           publisher: "Marvel",
// //           link: "https://marvel.fandom.com/wiki/Avengers",
// //           img:  "https://vignette.wikia.nocookie.net/marveldatabase/images/1/12/Avengers_Vol_8_10_Ross_Variant_Textless.jpg/revision/latest/scale-to-width-down/250?cb=20180823183630",
// //           info: "The Avengers are Earth's foremost major organization of costumed superhuman crimefighters, adventurers and heroes dedicated to safeguarding the world from any threat beyond the power of conventional peacekeeping forces or any which any of them can't handle alone.",
// //           series: ["Secret Wars"]
// //         },
// //         {
// //           name: "Fantastic Four",
// //           publisher: "Marvel",
// //           link: "https://marvel.fandom.com/wiki/Fantastic_Four",
// //           img:  "https://vignette.wikia.nocookie.net/marveldatabase/images/7/72/Fantastic_Four_Vol_6_1_Virgin_Variant.jpg/revision/latest/scale-to-width-down/400?cb=20180523101754",
// //           info: "The Fantastic Four are a team of adventurers and super-heroes. During an accident on an experimental rocket, they were all given fantastic powers through exposure to cosmic rays.",
// //           series: ["Secret Wars"]
// //         },
// //         {
// //           name: "Wolverine",
// //           publisher: "Marvel",
// //           link: "https://marvel.fandom.com/wiki/Wolverine",
// //           img:  "https://vignette.wikia.nocookie.net/marveldatabase/images/1/1d/Death_of_Wolverine_Vol_1_4_Land_Variant_Textless.jpg/revision/latest/scale-to-width-down/250?cb=20141003044738",
// //           info: "Wolverine was created by Len Wein, John Romita and Herb Trimpe, first cameo appearence in Incredible Hulk #180 (Oct 1974) and first full appearence in Incredible Hulk #181 (Nov 1974).",
// //           series: ["Secret Wars"]
// //         },
// //         {
// //           name: "Captain America",
// //           publisher: "Marvel",
// //           link: "https://marvel.fandom.com/wiki/Captain_America",
// //           img:  "https://vignette.wikia.nocookie.net/marveldatabase/images/9/90/Captain_America_Vol_7_22_Marvel_Comics_75th_Anniversary_Variant_Textless.jpg/revision/latest/scale-to-width-down/250?cb=20140423170823",
// //           info: "As a symbol of freedom and patriotism, a number of men have taken the mantle of Captain America in Rogers' various absences. Of note are William Nasland and Jeffrey Mace, Bucky Barnes, and Sam Wilson.",
// //           series: ["Secret Wars"]
// //         },
// //         {
// //           name: "Storm",
// //           publisher: "Marvel",
// //           link: "https://marvel.fandom.com/wiki/storm",
// //           img:  "https://vignette.wikia.nocookie.net/marveldatabase/images/b/b1/Fearless_Vol_1_2_Textless.jpg/revision/latest/scale-to-width-down/250?cb=20190524181911",
// //           info: "After her parents were murdered in the rubble of a plane crash, Ororo Munroe began life as a thief with a severe case of claustrophobia, until she was worshiped as a goddess in a tribe in Africa. ",
// //           series: ["Secret Wars"]
// //         },
// //         {
// //           name: "Captain Marvel",
// //           publisher: "Marvel",
// //           link: "https://marvel.fandom.com/wiki/Captain_Marvel",
// //           img:  "https://vignette.wikia.nocookie.net/marveldatabase/images/f/f2/Captain_Marvel_Vol_9_3_McKelvie_Variant_Textless.jpg/revision/latest/scale-to-width-down/250?cb=20160310183503",
// //           info: "cool cat",
// //           series: ["Secret Wars"]
// //         },
// //         //       Captain Marvel
// //       ];
      
// // const seriesSeed = [
// //   {
// //     series: "new52",
// //     character: "Batman",
// //     name: "Batman",
// //     synopsis: "batman fights joker...",
// //     volumes: ["Vol 1: Court of Owls", "Vol 2: City of Owls", "Vol 3: Death of the Family", "Vol 4: Zero Year - Secret City", "Vol 5: Zero Year - Dark City", "Vol 6: Graveyard Shift", "Vol 7: Endgame", "Vol 8: Superheavy", "Vol 9: Bloom", "Vol 10: Epilogue","DC Comics: Zero Year", "The Joker: Endgame", "Batman vs. Superman: The Greatest Battles", "Absolute Batman: The Court of Owls"],
// //     extras: ["DC Comics: Zero Year", "The Joker: Endgame", "Batman vs. Superman: The Greatest Battles", "Absolute Batman: The Court of Owls"]
// //   }, 
// //   {
// //     series: "new52",
// //     character: "Batman",
// //     name: "Batman: Detective Comics",
// //     synopsis: "batman fights joker...",
// //     volumes: ["Vol 1: Faces of Death", "Vol 2: Scare Tactics", "Vol 3: Emperor Penguin", "Vol 4: The Wrath", "Vol 5: Gothtopia", "Vol 6: Icarus", "Vol 7: Anarky", "Vol 8: Blood of Heroes", "Vol 9: Gordon at War", "Vol 10: Epilogue"],
// //   }, 
// //   {
// //     series: "new52",
// //     character: "Batman",
// //     name: "Batman and Robin",
// //     synopsis: "batman fights joker...",
// //     volumes: ["Vol 1: Born to Kill", "Vol 2: Pearl", "Vol 3: Death of the Family", "Vol 4: Requiem for Damian", "Vol 5: The Big Burn", "Vol 6: The Hunt for Robin", "Vol 7: Robin Rises", "Bad Blood"],
// // }, 
// //   {
// //     series: "rebirth",
// //     character: "Batman",
// //     name: "Batman",
// //     synopsis: "batman fights joker hahaha...",
// //     volumes: ["Vol 1: I am Gotham", "Vol 2: I Am Suicide", "Vol 3: I Am Bane", "Vol 4: The War of Jokes and Riddles", "Vol 5: Rules of Engagement", "Vol 6: Bride or Burglar", "Vol 7: The Wedding", "Vol 8: Cold Days", "Vol 9: The Tyrant Wing", "Vol 10: Knightmares", "Vol 11: The Fall and the Fallen"],
// //   }, 
// //   {
// //     series: "rebirth",
// //     character: "Batman",
// //     name: "All-Star Batman",
// //     synopsis: "batman fights joker hahaha... mwaahahha ",
// //     volumes: ["Vol 1: My Own Worst Enemy", "Vol 2: Ends of the Earth", "Vol 3: The First Ally"],
// //   },
// //   {
// //     series: "1996",
// //     character: "Batman",
// //     name: "The Long Halloween",
// //     synopsis: "batman fights joker hahaha... mwaahahha ",
// //     volumes: ["Batman: The Long Halloween", "Batman: Haunted Knight","Absolute Batman: The Long Halloween", "Batman Noir: The Long Halloween", "Batman By Jeph Loeb and Tim Sale Omnibus", "Batman: The Long Halloween (DC Modern Classics Edition)"],
// //   }, 
// //   {
// //     series: "Detective Comics",
// //     character: "Batman",
// //     name: "Batman: Hush",
// //     synopsis: "batman fights joker hahaha... mwaahahha ",
// //     volumes: ["Batman: Hush", "Heart of Hush"],
// //   }, 
// //   {
// //     series: "2017",
// //     character: "Batman",
// //     name: "Batman: The Dark Prince Charming",
// //     synopsis: "batman fights joker hahaha... mwaahahha ",
// //     volumes: ["Book One", "Book Two"],
// //   }, 
  
// //   // Wonder Woman
// //   {
// //     series: "new52",
// //     character: "Wonder Woman",
// //     name: "Wonder Woman",
// //     synopsis: "yadada",
// //     volumes: ["Vol 1: Blood","Vol 2: Guts", "Vol 3: Iron", "Vol 4: War", "Vol 5: Flesh", "Vol 6: Bones", "Vol 7: War-Torn", "Vol 8: A Twist of Fate", "Vol 9: Resurrection"]
// //   },
// //   {
// //     series: "rebirth",
// //     character: "Wonder Woman",
// //     name: "Wonder Woman",
// //     synopsis: "yadada",
// //     volumes: ["Vol 1: The Lies","Vol 2: Year One", "Vol 3: The Truth", "Vol 4: Godwatch", "Vol 5: The Heart of the Amazon", "Vol 6: Children of the Gods", "Vol 7: Amazons Attacked", "Vol 8: The Dark Gods", "Vol 9: The Enemy of Both Sides"]
// //   },
// //   // aquaman
// //   {
// //     series: "rebirth",
// //     character: "Aquaman",
// //     name: "Aquaman",
// //     synopsis: "yadadawabababa",
// //     volumes: ["Vol 1: the drowning", "Vol 2: Black Manta Rising", "Vol 3: Crown of Atlantis", "Vol 4: Underworld", "Vol 5: The Crown Comes Down", "Vol 6: Kingslayer","Aquaman/Suicide Squad: Sink Atlantis"],
// //     extras: ["Aquaman/Suicide Squad: Sink Atlantis"]
// //   },
// //   // green lanterns
// //   {
// //   series: "rebirth",
// //   character: "Green Lantern",
// //   name: "Green Lantern",
// //   synopsis: "Green lanter nbladibladaaba ",
// //   volumes: ["Vol 1: Rage Planet", "Vol 2: The Phantom Lantern", "Vol 3: POLARITY", "Vol 4: THE FIRST RING", "Vol 5: OUT OF TIME", "Vol 6: A WORLD OF OUR", "Vol 7: SUPERHUMAN", "Vol 8: GHOSTS OF THE PAST", "Vol 9: EVIL’S MIGHT"],
// // }, 
// // {
// //   series: "new52",
// //   character: "Green Lantern",
// //   name: "Green Lantern",
// //   synopsis: "Green lanter nbladibladaaba ",
// //   volumes: ["Vol 1: Sinestro", "Vol 2: The Revenge of Black Hand", "Vol 3: The End", "Vol 4: Dark Days", "Vol 5: Test of Wills", "Vol 6: The Life Equation", "Vol 7: Renegade", "Vol 8: Reflections"],
// // },
// // // superman

// //   {
// //   series: "new52",
// //   character: "Superman",
// //   name: "Superman: Action Comics",
// //   // name: "All-Star Superman",
// //   synopsis: "superman hahahah ",
// //   volumes: ["Vol 1: SUPERMAN AND THE MEN OF STEEL", "Vol 2: BULLETPROOF", "Vol 3: AT THE END OF DAYS", "Vol 4: HYBRID", "Vol 5: WHAT LIES BENEATH", "Vol 6: SUPERDOOM", "Vol 7: UNDER THE SUN", "Vol 8: TRUTH", "Vol 9: LAST RITES","WORLD AGAINST SUPERMAN"],
// //   extras: ["WORLD AGAINST SUPERMAN"]
// // },
// // {
// //   series: "new52",
// //   character: "Superman",
// //   name: "Superman",
// //   synopsis: "superman hahahah ",
// //   volumes: ["Vol 1: What Price Tomorrow?", "Vol 2: Secrets and Lies", "Vol 3: Fury At World's End", "Vol 4: Psi-War", "Vol 5: Under Fire", "Doomed", "The Men of Tomorrow", "Vol 1: Before Truth", "Vol 2: Return to Glory", "Savage Dawn", "The Final Days Of Superman", "Savage Dawn"],  
// // },
// // {
// //   series: "rebirth",
// //   character: "Superman",
// //   name: "Superman",
// //   synopsis: "superman hahahah ",
// //   volumes: ["Vol 1: Son of Superman", "Vol 2: Trials of the Super Sons", "Vol 3: Multiplicity", "Vol 4: Black Dawn", "Vol 5: Hopes and Fears", "Vol 6: Imperius Lex", "Vol 7: Bizarroverse"],  
// // },
// // {
// //   series: "rebirth",
// //   character: "Superman",
// //   name: "Superman: Action Comics",
// //   synopsis: "superman hahahah ",
// //   volumes: ["Vol 1: Path of Doom", "Vol 2: Welcome to the Planet", "Vol 3: Men of Steel", "Vol 4: The New World", "Vol 5: Booster Shot", "Superman Reborn", "Vol 1: Invisible Mafia"],
// // },
// // {
// //   series: "rebirth",
// //   character: "Superman",
// //   name: "New Super-man",
// //   synopsis: "superman hahahah ",
// //   volumes: ["Kryptonite"],
// // },
// // {
// //   series: "2006",
// //   character: "Superman",
// //   name: "Superman",
// //   synopsis: "superman hahahah ",
// //   volumes: ["Vol 1: Made In China", "Vol 2: Coming To America", "Vol 3: Equilibrium", "New Super-Man and The Justice League of China"],
// // },
// // // Flash
// // {
// // series: "new52",
// // character: "Flash",
// // name: "The Flash",
// // synopsis: "superman hahahah ",
// // volumes: ["Vol 1: Move Forward", "Vol 2: Rogues Revolution", "Vol 3: Gorilla Warfare", "Vol 4: Reverse", "Vol 5: History Lessons", "Vol 6: Out of Time", "Vol 7: Savage World", "Vol 8: Zoom", "Vol 9: Full Stop"],
// // },
// // {
// //   series: "new52",
// //   character: "Flash",
// //   name: "The Flash By Geoff Johns Omnibus",
// //   synopsis: "superman hahahah ",
// //   volumes: ["Vol 1", "Vol 2", "Vol 3"],
// // },
// // {
// //   series: "rebirth",
// //   character: "Flash",
// //   name: "The Flash",
// //   synopsis: "superman hahahah ",
// //   volumes: ["Vol 1: Lightning Strikes Twice", "Vol 2: Speed of Darkness", "Vol 3: Rogues Reloaded", "Vol 4: Running Scared", "Vol 5: Negative", "Vol 6: A Cold Day In Hell", "Vol 7: Perfect Storm", "Vol 8: Flash War", "Vol 9: Reckoning Of The Forces"],
// // },
// // {
// //   series: "rebirth",
// //   character: "Flash",
// //   name: "The Flash By Mark Waid",
// //   synopsis: "superman hahahah ",
// //   volumes: ["Book 1", "Book 2", "Book 3", "Book 4", "Book 5", "Book 6"],
// // },
// // {
// //   series: "2009",
// //   character: "Flash",
// //   name: "The Flash",
// //   synopsis: "superman hahahah ",
// //   volumes: ["Rebirth"],
// // },

// // {
// //   series: "2010",
// //   character: "Flash",
// //   name: "The Flash",
// //   synopsis: "superman hahahah ",
// //   volumes: ["The Dasterdly Death Of The Rogues", "The Road to Flashpoint"],
// // },
// // {
// //   series: "2006",
// //   character: "Flash",
// //   name: "The Flash The Fastest Man Alive",
// //   synopsis: "superman hahahah ",
// //   volumes: ["Lightning In a Bottle", "Full Throttle"],
// // },
// // // Scooby Doo
// // {
// // series: "2013",
// // character: "Scooby-Doo",
// // name: "Scooby-Doo Team Up",
// // synopsis: "Teaming up with dc heroes to solve crimes.",
// // volumes: ["Scooby-Doo Team Up", "Vol. 2", "Vol. 3", "Vol. 4", "Vol. 5", "Vol. 6"],
// // },
// // {
// //   series: "2010",
// //   character: "Scooby-Doo",
// //   name: "Scooby-Doo, Where Are You?",
// //   synopsis: "Teaming up with dc heroes to solve crimes.",
// //   volumes: ["Scooby-Doo, Where Are You?"],
// //   },
// // ]
// // // copy modal                    "H'el on Earth", is vol 3
// // // {
// // //   series: "rebirth",
// // //   character: "batman",
// // //   name: "Batman All-Star",
// // //   synopsis: "batman fights joker hahaha... mwaahahha ",
// // //   volumes: ["Vol 1: ", "Vol 2: ", "Vol 3: ", "Vol 4: ", "Vol 5: ", "Vol 6: ", "Vol 7: ", "Vol 8: ", "Vol 9: ", "Vol 10: ", "Vol 11: "],
// // // }, 


// // // const seriesSeed = [
// //   //   {
// //     //       series: "new52",
// //     //       character: "batman",
// //     //       name: "batman",
// //     //       synopsis: "batman fights joker...",
// //     //       volumes: {"vol": "1: Court of Owls", "vol": "2: City of Owls", "vol": "3: Death of the Family", "vol": "4: Zero Year - Secret City", "vol": "5: Zero Year - Dark City", "vol": "6: Graveyard Shift", "vol": "7: Endgame", "vol": "8: Superheavy", "vol": "9: Bloom", "vol": "10: Epilogue"},
// //     //       extras: ["DC Comics: Zero Year", "The Joker: Endgame", "Batman vs. Superman: The Greatest Battles", "Absolute Batman: The Court of Owls"]
// //     //   }, 
// //     //   {
// //       //       series: "new52",
// //       //       character: "batman",
// // //       name: "Batman: Detective Comics",
// // //       synopsis: "batman fights joker...",
// // //       volumes: {"vol": "1: Faces of Death", "vol": "2: Scare Tactics", "vol": "3: Emperor Penguin", "vol": "4: The Wrath", "vol": "5: Gothtopia", "vol": "6: Icarus", "vol": "7: Anarky", "vol": "8: Blood of Heroes", "vol": "9: Gordon at War", "vol": "10: Epilogue"},
// // //   }, 

// // // ]

// // const volumeSeed = [
// //   {

// //   }
// // ]

// // const notesSeed = [
// //     {
// //         name: "DC Comics: Zero Year",
// //         message: "Read after vol 4: Zero Year- Secret City "
// //     },
// //     {
// //         name: "The Joker: Endgame",
// //         message: "Read after Vol 7: Endgame"
// //     },
// //     {
// //         name: "Batman vs. Superman: The Greatest Battles",
// //         message: "Read after entire series"
// //     }
// // ];
// // // const userbooksSeed = [
// // //     {
// // //       userID:"randomstring",
// // //       Title: "The Great Gatsby",
// // //       img: "randomimgurl",
// // //       link: "mylink",
// // //       author: "F. Scott Fitzgerald",
// // //       description: "The authentic edition from Fitzgerald's original publisher. This edition approved by the Holden-Crowther Literary Organisation. The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted \"gin was the national drink and sex the national obsession,\" it is an exquisitely crafted tale of America in the 1920s. The Great Gatsby is one of the great classics of twentieth-century literature.",
// // //       published: "9-30-20"
// // //     },
// // //     {
// // //       userID:"randomstring1233",
// // //       Title: "The Great Gatsby123",
// // //       img: "randomimgurl132",
// // //       link: "mylink123",
// // //       author: "F. Scott Fitzgerald123",
// // //       description: "132The authentic edition from Fitzgerald's original publisher. This edition approved by the Holden-Crowther Literary Organisation. The Great Gatsby, F. Scott Fitzgerald's third book, stands as the supreme achievement of his career. This exemplary novel of the Jazz Age has been acclaimed by generations of readers. The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted \"gin was the national drink and sex the national obsession,\" it is an exquisitely crafted tale of America in the 1920s. The Great Gatsby is one of the great classics of twentieth-century literature.",
// // //       published: "9-30-2019"
// // //     }
// // //   ];

// // db.Character
// //   .remove({})
// //   .then(() => db.Character.collection.insertMany(characterSeed))
// //   .then(data => {
// //     console.log(data.result.n + " records inserted!");
// //     process.exit(0);
// //   })
// //   .catch(err => {
// //     console.error(err);
// //     process.exit(1);
// //   });
// db.comicvinevolumes
// db.comicvinevolumes.collection
// .insertMany(comicvinevolumesSeed)
//  .then(data => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch(err => {
//     console.error(err);
//     process.exit(1);
//   });


// //   db.Series
// //   .remove({})
// //   .then(() => db.Series.collection.insertMany(seriesSeed))
// //   .then(data => {
// //     console.log(data.result.n + " records inserted!");
// //     process.exit(0);
// //   })
// //   .catch(err => {
// //     console.error(err);
// //     process.exit(1);
// //   });

// //   db.Notes
// //   .remove({})
// //   .then(() => db.Notes.collection.insertMany(notesSeed))
// //   .then(data => {
// //     console.log(data.result.n + " records inserted!");
// //     process.exit(0);
// //   })
// //   .catch(err => {
// //     console.error(err);
// //     process.exit(1);
// //   });