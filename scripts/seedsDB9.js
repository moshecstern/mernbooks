const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/comicbookdb"
  );
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

const comicvinevolumesSeed = 

[
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
