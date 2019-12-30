const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/comicbookdb"
  );
// https://www.amazon.com/gp/product/B07JJJGYQ4/?ie=UTF8&%2AVersion%2A=1&%2Aentries%2A=0
//amazon banner link https://affiliate-program.amazon.com/home/ads/adcode/search?ac-ms-src=quicklinks&search_term=BATMAN+KINDLE
// reading lists  https://www.comicbookherald.com/reading-dc-comics/
// batman reading list https://www.comicbookherald.com/reading-dc-comics/batman-reading-order/
// good reads 

// copy modal
// {
//   series: "rebirth",
//   character: "batman",
//   name: "Batman All-Star",
//   synopsis: "batman fights joker hahaha... mwaahahha ",
//   volumes: ["Vol 1: ", "Vol 2: ", "Vol 3: ", "Vol 4: ", "Vol 5: ", "Vol 6: ", "Vol 7: ", "Vol 8: ", "Vol 9: ", "Vol 10: ", "Vol 11: "],
// }, 


  const characterSeed = [
      {
          name: "batman",
          link: "https://dc.fandom.com/wiki/Batman",
          img: "#.png",
          info: "badass hero kicks villains butt",
          series: ["new52", "rebirth"]
      },
      {
        name: "superman",
        link: "https://dc.fandom.com/wiki/Superman",
        img: "#.png",
        info: "smallville",
        series: ["new52", "rebirth"]
      }
  ];

const seriesSeed = [
    {
        series: "new52",
        character: "batman",
        name: "batman",
        synopsis: "batman fights joker...",
        volumes: ["Vol 1: Court of Owls", "Vol 2: City of Owls", "Vol 3: Death of the Family", "Vol 4: Zero Year - Secret City", "Vol 5: Zero Year - Dark City", "Vol 6: Graveyard Shift", "Vol 7: Endgame", "Vol 8: Superheavy", "Vol 9: Bloom", "Vol 10: Epilogue"],
        extras: ["DC Comics: Zero Year", "The Joker: Endgame", "Batman vs. Superman: The Greatest Battles", "Absolute Batman: The Court of Owls"]
    }, 
    {
        series: "new52",
        character: "batman",
        name: "Batman: Detective Comics",
        synopsis: "batman fights joker...",
        volumes: ["Vol 1: Faces of Death", "Vol 2: Scare Tactics", "Vol 3: Emperor Penguin", "Vol 4: The Wrath", "Vol 5: Gothtopia", "Vol 6: Icarus", "Vol 7: Anarky", "Vol 8: Blood of Heroes", "Vol 9: Gordon at War", "Vol 10: Epilogue"],
    }, 
    {
      series: "rebirth",
      character: "batman",
      name: "Batman",
      synopsis: "batman fights joker hahaha...",
      volumes: ["Vol 1: I am Gotham", "Vol 2: I Am Suicide", "Vol 3: I Am Bane", "Vol 4: The War of Jokes and Riddles", "Vol 5: Rules of Engagement", "Vol 6: Bride or Burglar", "Vol 7: The Wedding", "Vol 8: Cold Days", "Vol 9: The Tyrant Wing", "Vol 10: Knightmares", "Vol 11: The Fall and the Fallen"],
  }, 
  {
    series: "rebirth",
    character: "batman",
    name: "All-Star Batman",
    synopsis: "batman fights joker hahaha... mwaahahha ",
    volumes: ["Vol 1: My Own Worst Enemy", "Vol 2: Ends of the Earth", "Vol 3: The First Ally"],
}, 

  // Wonder Woman
    {
      series: "new52",
      character: "Wonder Woman",
      name: "Wonder Woman",
      synopsis: "yadada",
      volumes: ["Vol 1: Blood","Vol 2: Guts", "Vol 3: Iron", "Vol 4: War", "Vol 5: Flesh", "Vol 6: Bones", "Vol 7: War-Torn", "Vol 8: A Twist of Fate", "Vol 9: Resurrection"]
    },
    {
      series: "rebirth",
      character: "Wonder Woman",
      name: "Wonder Woman",
      synopsis: "yadada",
      volumes: ["Vol 1: The Lies","Vol 2: Year One", "Vol 3: The Truth", "Vol 4: Godwatch", "Vol 5: The Heart of the Amazon", "Vol 6: Children of the Gods", "Vol 7: Amazons Attacked", "Vol 8: The Dark Gods", "Vol 9: The Enemy of Both Sides"]
    },
    // aquaman
    {
      series: "rebirth",
      character: "Aquaman",
      name: "Aquaman",
      synopsis: "yadadawabababa",
      volumes: ["Vol 1: the drowning", "Vol 2: Black Manta Rising", "Vol 3: Crown of Atlantis", "Vol 4: Underworld", "Vol 5: The Crown Comes Down", "Vol 6: Kingslayer"],
      extras: ["Aquaman/Suicide Squad: Sink Atlantis"]
    },


]

// const seriesSeed = [
//   {
//       series: "new52",
//       character: "batman",
//       name: "batman",
//       synopsis: "batman fights joker...",
//       volumes: {"vol": "1: Court of Owls", "vol": "2: City of Owls", "vol": "3: Death of the Family", "vol": "4: Zero Year - Secret City", "vol": "5: Zero Year - Dark City", "vol": "6: Graveyard Shift", "vol": "7: Endgame", "vol": "8: Superheavy", "vol": "9: Bloom", "vol": "10: Epilogue"},
//       extras: ["DC Comics: Zero Year", "The Joker: Endgame", "Batman vs. Superman: The Greatest Battles", "Absolute Batman: The Court of Owls"]
//   }, 
//   {
//       series: "new52",
//       character: "batman",
//       name: "Batman: Detective Comics",
//       synopsis: "batman fights joker...",
//       volumes: {"vol": "1: Faces of Death", "vol": "2: Scare Tactics", "vol": "3: Emperor Penguin", "vol": "4: The Wrath", "vol": "5: Gothtopia", "vol": "6: Icarus", "vol": "7: Anarky", "vol": "8: Blood of Heroes", "vol": "9: Gordon at War", "vol": "10: Epilogue"},
//   }, 

// ]

const volumeSeed = [
  {

  }
]

const notesSeed = [
    {
        name: "DC Comics: Zero Year",
        message: "Read after vol 4: Zero Year- Secret City "
    },
    {
        name: "The Joker: Endgame",
        message: "Read after Vol 7: Endgame"
    },
    {
        name: "Batman vs. Superman: The Greatest Battles",
        message: "Read after entire series"
    }
];

db.Character
  .remove({})
  .then(() => db.Character.collection.insertMany(characterSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Series
  .remove({})
  .then(() => db.Series.collection.insertMany(seriesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Notes
  .remove({})
  .then(() => db.Notes.collection.insertMany(notesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });