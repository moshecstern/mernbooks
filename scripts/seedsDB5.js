// const mongoose = require("mongoose");
// const db = require("../models");

// mongoose.connect(
//     process.env.MONGODB_URI ||
//     "mongodb://localhost/comicbookdb"
//   );


// const comicvinevolumesSeed = 
// [
//     {
//       "title": "Marvel Masterworks: Ka-Zar",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2815902-01a.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Killraven",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6614322-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Luke Cage, Hero For Hire",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4763039-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Luke Cage, Power Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6040336-02.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Marvel Rarities",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4062216-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Marvel Team-Up",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/119711/2934372-09.png",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Marvel Two-In-One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3443349-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Ms. Marvel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4162358-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Nick Fury, Agent of S.H.I.E.L.D.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/47524/2131361-mm_shield01_3b.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Not Brand Echh",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4608393-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Rawhide Kid",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/582479-rkm1.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Sgt. Fury",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/119711/2934382-09.png",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Spider-Woman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4908560-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: The Amazing Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/47524/1361915-mm_asm01_3b.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "21 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: The Champions",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5062787-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: The Fantastic Four",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/47524/1362899-mm_ff01_3b.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "21 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: The Human Torch",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/47524/1394758-pre_mm_ht1_reg_b.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: The Incredible Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/47524/1385716-mm_hulk01_3b.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: The Invincible Iron Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/49017/1360908-iron_man_cover_1.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: The Mighty Thor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/49017/1364342-mighty_thor_masterwork_cover_1.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "19 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: The Savage She-Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5984691-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: The Silver Surfer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/49017/1329335-silver_surfer_masterworks_volume_1_cover_1.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: The Spectacular Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5936011-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: The Sub-Mariner",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/47524/1363608-mm_subby_1.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: The Uncanny X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1077891-mm_uncannyv1v.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "11 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: The X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/47524/1385671-x_men1.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Marvel Masterworks: Warlock",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/119711/2934517-09.png",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel MegaMorphs - Captain America",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11113/111133305/4127359-marvel%20megamorphs%20-%20captain%20america%20-%20page%201.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel MegaMorphs - Doctor Octopus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11113/111133305/4127993-marvel%20megamorphs%20-%20doctor%20octopus%20-%20page%201.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Megamorphs - Ghost Rider",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11113/111133305/4167200-marvel%20megamorphs%20-%20ghost%20rider%20-%20page%201.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Megamorphs - Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11113/111133305/4167650-marvel%20megamorphs%20-%20hulk%20-%20page%201.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel MegaMorphs - Iron Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11113/111133305/4369154-marvel%20megamorphs%20-%20iron%20man%20-%20page%201.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Megamorphs - Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11113/111133305/4414414-marvel%20megamorphs%20-%20spider-man%20-%20page%201.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Megamorphs - Thing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11113/111133305/4418079-marvel%20megamorphs%20-%20thing%20-%20page%201.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel MegaMorphs - Venom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11113/111133305/4369262-marvel%20megamorphs%20-%20venom%20-%20page%201.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel MegaMorphs - Wolverine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11113/111133305/4123600-marvel%20megamorph%20%230%20-%20page%201.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Milestone Edition: Fantastic Four",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849264-__addme___marvel_milestone_edition___fantastic_four_v9999__1___page_1.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel Milestone Edition: Giant-Size X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3446191-01.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Milestone Edition: Iron Fist",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849262-__addme___marvel_milestone_edition_v9999__14___page_1.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Milestone Edition: Strange Tales",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849273-__addme___marvel_milestone_edition___strange_tales_v9999__1___page_1.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Milestone Edition: Tales of Suspense",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11113/111133305/4113184-marvel%20milestone%20edition%20-%20tales%20of%20suspense%20%2339%20-%20page%201.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Milestone Edition: The X-Men #1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11113/111133305/4113182-marvel%20milestone%20edition%20-%20a%20reprinting%20of%20x-men%20%231%20-%20page%201.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Milestones",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/691456-mm1.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "16 Issues"
//     },
//     {
//       "title": "Marvel Milestones Special: Bloodstone, X-51 & Captain Marvel II",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849289-__addme___marvel_milestones_v9999__4___page_1.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Milestones: Beast & Kitty Pryde",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849373-marvel_milestones_v2005__13___featuring_beast___kitty_pryde__2006_4____page_1.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Milestones: Black Panther, Storm & Ka-Zar",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849378-marvel_milestones_v2005__14___featuring_black_panther__storm___ka_zar__2006_5____page_1.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Milestones: Blade, Man-Thing & Satana",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849323-__addme___marvel_milestones____dracula_v9999___page_1.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Milestones: Captain Britain, Psylocke & Sub-Mariner",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849344-marvel_milestones_v2005__6___featuring_captain_britain__psylocke___sub_mariner__2005_8____page_1.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Milestones: Doom, Sub-Mariner & Red Skull",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849329-marvel_milestones_v2005__4___featuring_dr._doom__sub_mariner___red_skull__2005_6____page_1.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Milestones: Dr. Strange, Silver Surfer, Sub-Mariner, & Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849336-marvel_milestones_v2005__5___featuring_dr._strange__silver_surfer__sub_mariner___hulk__2005_7____page_1.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Milestones: Dragon Lord, Speedball & The Man in the Sky",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849362-marvel_milestones_v2005__11___featuring_dragon_lord__speedball___the_man_in_the_sky__2006_2____page_1.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Milestones: Ghost Rider, Black Widow & Iceman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849350-marvel_milestones_v2005__7___featuring_ghost_rider__black_widow___iceman__2005_9____page_1.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Milestones: Iron Man, Ant-Man & Captain America",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849325-marvel_milestones_v2005__1___featuring_iron_man__ant_man___captain_america__2005_3____page_1.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Milestones: Jim Lee and Chris Claremont X-Men & The StarJammers Part 1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849406-marvel_milestones_v2005__17___featuring_x_men___the_starjammers__part_1___2006_8____page_1.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Milestones: Legion of Monsters, Spider-Man & Brother Voodoo",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849274-__addme___marvel_milestones_v9999__1___page_1.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Milestones: Millie the Model & Patsy Walker",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849396-marvel_milestones_v2005__16___featuring_millie_the_model___patsy__2006_7____page_1.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Milestones: Onslaught",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849495-fc.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Milestones: Rawhide Kid & Two-Gun Kid",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849382-marvel_milestones_v2005__15___featuring_rawhide_kid___two_gun_kid__2006_6____page_1.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Milestones: Star Brand & Quasar",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849367-marvel_milestones_v2005__12___featuring_star_brand___quasar__2006_3____page_1.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Milestones: Ultimate Spider-Man, Ultimate X-Men, Microman & Mantor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849285-__addme___marvel_milestones_v9999__3___page_1.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Milestones: Venom & Hercules",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849284-__addme___marvel_milestones_v9999__2___page_1.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Milestones: Wolverine, X-Men & Tuk: Caveboy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849328-marvel_milestones_v2005__3___featuring_wolverine__x_men___tuk__caveboy__2005_5____page_1.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Milestones: X-Men & The StarJammers Part 2",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849489-marvel_milestones_v2005__18___featuring_x_men___the_starjammers__part_2___2006_9____page_1.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Mix-Tape: SDCC 2009",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849117-__addme___marvel_mix_tape___sdcc_v9999__1___page_1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Mix-Tape: SDCC 2011",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3110957-marvel%20mix-tape%20-%20sdcc%202011%202011%20%282011%29%20pagecover.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Mix-Tape: SDCC 2012",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849574-digital_marvel_mix_tape___sdcc_2012_v9999__1___page_1.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Mix-Tape: SDCC 2013",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/122433/3197963-marvel%20mix-tape%20%282013%29%20-%20page%201.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Monograph: J. Scott Campbell: The Complete Covers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7000481-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Monograph: The Art of Adi Granov",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7054374-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Monograph: The Art of Declan Shalvey",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7205230-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Monograph: The Art of Ed McGuinness: Deadpool & His Amazing Friends",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7175959-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Monograph: The Art of Esad Ribić",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7066197-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Monograph: The Art of Humberto Ramos: Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6965823-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Monograph: The Art of Sara Pichelli",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7101023-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Monsters",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7054351-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Monsters: Devil Dinosaur",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/98094/1790937-marvel_monsters___devil_dinosaur___00___fc.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Monsters: Fin Fang 4",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/137059-18723-110647-1-fin-fang-4.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Monsters: From the Files of Ulysses Bloodstone (and the Monster Hunters)",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/189228-19101-114169-1-marvel-monsters.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Monsters: Monsters on the Prowl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/195556-19161-114630-1-marvel-monsters-mon.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Monsters: Where Monsters Dwell",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74848/1903104-where_monsters_dwell.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Monthly Catalog",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3110966-marvel%20monthly%20catalog%20v1998%20001%20%281998%29%20pagecover.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Marvel Movie Showcase",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/4819464-ccf%20movie%20showcase%20star%20wars%20%231%2009242015.jpg",
//       "year": "1982",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel Movie Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56565/1059815-timebandits.jpg",
//       "year": "1982",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Movie Spotlight Featuring Raiders of the Lost Ark",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/4906788-marvel%20movie%20spotlight%20raiders%20%231%20final.jpg",
//       "year": "1982",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Must Haves",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/347031-21102-126724-1-marvel-must-haves.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel Must Haves: Ultimate Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2847486-__addme___marvel_must_haves___ultimate_spider_man_001_v9999__3___page_1.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Mystery Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/903186-15999_4_001.jpg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Mystery Comics 70th Anniversary Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/807126-1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Mystery Handbook: 70th Anniversary Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/45797/985460-marvel_mystery_handbook___70th_anniversary_special__1___page_1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Nemesis The Imperfects",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/4355999-marvel%20nemesis%20the%20imperfects%201a.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Marvel New Stories Road To Civil War II Previews",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5137214-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel New Stories Start Now! Previews",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5044843-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel New Year's Eve Special Infinite Comic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5643505-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel No-Prize Book",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1251894-marvel_no_prize_book_v1_001.jpg",
//       "year": "1983",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Noir: Daredevil/Cage/Iron Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3105296-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Noir: Spider-Man/Punisher",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3073991-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Noir: Wolverine & the X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2898547-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Now! Free Previews 2016",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5459501-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Marvel Now! Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3148291-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel NOW! Point One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2653323-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel NOW! Previews",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3446716-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Marvel Now! Previews",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5320691-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Pets Handbook",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/949810-marvel_pets_handbook_vol_1_1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Point One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6378640-3084698418-66351.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Point One II",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6412105-5116880337-67090.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Poster Magazine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/2397233-marvel_poster_magazine__1__2001_8____page_1.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel Premiere",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2618086-marvelpremiere01.jpg",
//       "year": "1972",
//       "publisher": "Marvel",
//       "Field7": "61 Issues"
//     },
//     {
//       "title": "Marvel Presents",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/14019-2773-15692-1-marvel-presents.jpg",
//       "year": "1975",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Marvel Preview '93",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1358675-marvel_preview_93_v1_001.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Previews",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1860415-01.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "107 Issues"
//     },
//     {
//       "title": "Marvel Previews",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2538274-01a.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "34 Issues"
//     },
//     {
//       "title": "Marvel Previews",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4720355-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "24 Issues"
//     },
//     {
//       "title": "Marvel Previews",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5994833-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "31 Issues"
//     },
//     {
//       "title": "Marvel Previews SDCC Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3110988-marvel%20previews%20sdcc%20special%20v2003%20001%20%282008%29%20pagecover.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Previews: Special Dark Reign Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52212/991159-mpsdearkreign.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Previews: Special Initiative Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849158-__addme___marvel_previews_special_initiative_edtion_v9999__1___page_1.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Quarterly Report",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849164-__addme___marvel_quarterly_report_qtr_v9999__1___page_1.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel Reading Chronology",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52212/990206-chron1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Requirer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1267158-marvel_requirer_v1_001.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "33 Issues"
//     },
//     {
//       "title": "Marvel Riot",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/33913/959904-marvel_riot.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Rising",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6676175-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Rising",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6396953-00.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Rising",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6863626-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Marvel Rising: Alpha",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6467851-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Rising: Heroes of the Round Table",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7084656-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Rising: Ms. Marvel & Squirrel Girl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6538887-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Rising: Omega",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6606811-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Rising: Squirrel Girl & Ms. Marvel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6497392-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Romance",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3110991-marvel%20romance%20v2006%20001%20%282006%29%20pagecover.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Romance Redux: Another Kind Of Love",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5380404-01.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Romance Redux: But I Thought He Loved Me",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849167-__addme___marvel_romance_redux___but_i_thought_he_loved_me_v9999__1___page_1.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Romance Redux: Guys & Dolls",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/79902/1444933-p00001.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Romance Redux: I Should Have Been A Blonde!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5380401-5121822723-53799.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Romance Redux: Love Is A Four Letter Word",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/449763-marvel_romance_redux_love_is_a_four_letter_word_1_00.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Romance Redux: Restraining Orders Are For Other Girls",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849170-__addme___marvel_romance_redux___restraining_orders_are_for_other_girls_v9999__1___page_1.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Sampler November 2019",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7144087-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Selects: Fantastic Four",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/2037097-marvel_selects___fantastic_four__1__2000_1____page_1.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Marvel Selects: Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/2037111-marvel_selects___spider_man__1___page_1.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Marvel Share Your Universe Sampler",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3162102-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Special Edition Featuring Close Encounters of the Third Kind",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1300981-marvel_special_edition_featuring_close_encounters_of_the_third_kind_v1__3___page_1.jpg",
//       "year": "1978",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Special Edition Featuring Star Wars",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/70370-11734-103368-1-marvel-special-editi.jpg",
//       "year": "1977",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Marvel Special Edition Featuring Star Wars The Empire Strikes Back",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/122409/2898078-marvel_special_edition_featuring_the_empire_strikes_back.png",
//       "year": "1980",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Special Edition Featuring The Spectacular Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/59022/1703877-marvel_treasury_edition_v1974_001__1974__pagecover.jpg",
//       "year": "1975",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spectacular",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/12056-2640-13484-1-marvel-spectacular.jpg",
//       "year": "1973",
//       "publisher": "Marvel",
//       "Field7": "19 Issues"
//     },
//     {
//       "title": "Marvel Spotlight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849879-__addme___marvel_spotlight_v9999__3___page_1.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel Spotlight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/17571-3007-19647-1-marvel-spotlight.jpg",
//       "year": "1979",
//       "publisher": "Marvel",
//       "Field7": "11 Issues"
//     },
//     {
//       "title": "Marvel Spotlight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/10704-2516-11788-1-marvel-spotlight.jpg",
//       "year": "1971",
//       "publisher": "Marvel",
//       "Field7": "33 Issues"
//     },
//     {
//       "title": "Marvel Spotlight Captain America",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1161922-p00001___marvel_spotlight_captain_america__1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight John Cassaday and Sean Mckeever",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1160993-marvel_spotlight_john_cassaday.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight July 2018",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6518424-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight Marvel Zombies",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1159867-marvel_spotlight_marvel_zombies.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight Marvel Zombies Return",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1159864-marvel_spotlight_marvel_zombies_return.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight Secret Invasion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1160997-marvelspotlightsecretinvasion.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/692262-msbb1.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight Summer Events",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1255641-marvel_spotlight_summer_events_01.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight X-Men: Messiah Complex",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/35620/704808-01___marvel_spotlight_2007_.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight:  Captain America Remembered",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1283219-marvel_spotlight_captain_america__53___page_1.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight: Brian Michael Bendis/Mark Bagley",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2778269-marvel_spotlight___brian_michael_bendis___mark_bagley_000.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight: Civil War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/440660-marvel_spotlight_civil_war_1_00.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight: Civil War Aftermath",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/59000/1175344-p00001___marvel_spotlight_civil_war_aftermath.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight: Daniel Way/Oliver Coipel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849884-__addme___marvel_spotlight___daniel_way_olivier_coipel_v9999___page_1.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight: Dark Reign",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/14859/696007-marvel_spotlight_dark_reign_p0001.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight: Dark Tower",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1278206-the_dark_tower_extras______marvel_spotlight_dark_tower___page_1.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight: David Finch/Roberto Aguirre-Sacasa",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849887-__addme___marvel_spotlight___david_finch_roberto_aguirre_sacasa_v9999___page_1.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight: Deadpool",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6635/1000153-marvel_spotlight_deadpool.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight: Ed Brubaker & Billy Tan",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/252251-20029-119632-1-marvel-spotlight-ed.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight: Fantastic Four and Silver Surfer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2103793-marvel_spotlight___fantastic_four_and_silver_surfer__960___page_1.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight: Ghost Rider",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/58790/2330015-marvel_spotlight___ghost_rider__1.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight: Halo",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849891-__addme___marvel_spotlight___halo_v9999___page_1.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight: Heroes Reborn-Onslaught Reborn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/406900-21752-131197-1-marvel-spotlight-he.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight: Hulk Movie",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/2179522-marvel_spotlight__hulk_movie__22595___page_1.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight: Iron Man Movie",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/2179518-marvel_spotlight__iron_man_movie___page_1.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight: Joss Whedon & Michael Lark",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/698703-mslark.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight: Laurell K. Hamilton/George R.R. Martin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74140/1979189-001.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight: Marvel Knights 10th Anniversary",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/98410/1785569-ms_mk_001.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight: Neil Gaiman/Salvador Larroca",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/59000/1175345-p00001___marvel_spotlight_neil_gaiman_salvador_larroca.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight: New Mutants",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1149938-p00001___marvel_spotlight___new_mutants.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight: Punisher Movie",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52212/991226-marvel_spotlight_punisher_movie.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight: Robert Kirkman/Greg Land",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849893-__addme___marvel_spotlight___robert_kirkman_greg_land_v9999___page_1.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight: Secret Invasion Aftermath",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/639903-si_spotlight_001.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight: Spider-Man - One More Day/Brand New Day",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2770219-001.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight: Stan Lee/Jack Kirby",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/59000/1175340-p00001___marvel_spotlight_stan_lee_and_jack_kirby.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight: The Amazing Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74140/1391922-ms_bnd_001.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight: Thor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/693710-mst1.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight: Ultimates 3",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/59000/1175346-p00001___marvel_spotlight_ultimates__3.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight: Ultimatum",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/59000/1175347-p00001___marvel_spotlight_ultimatum.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight: Uncanny X-Men 500 Issues Celebration",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/608225-ms___uxm_500_ic_000.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight: War Of Kings",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52212/992861-ms_war_of_kings.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight: Warren Ellis/Jim Cheung",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849895-__addme___marvel_spotlight___warren_ellis_jim_cheung_v9999___page_1.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight: Wolverine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1161000-spotlight_wolv.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spotlight: World War Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/162780-18958-112444-1-marvel-spotlight-wo.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Spring Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/33224/693540-elvira_marvel.jpg",
//       "year": "1988",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Strike Force: The Art of the Game",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7184471-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Super Action",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2803681-mar001.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Super Action",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/67740-11450-100738-1-marvel-super-action.jpg",
//       "year": "1977",
//       "publisher": "Marvel",
//       "Field7": "37 Issues"
//     },
//     {
//       "title": "Marvel Super Hero Adventures",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6385003-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Super Hero Adventures: Captain Marvel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6753290-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Super Hero Adventures: Captain Marvel - Halloween Spooktacular",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6657933-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Super Hero Adventures: Captain Marvel - Mealtime Mayhem",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6677249-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Super Hero Adventures: Captain Marvel: First Day of School",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6614323-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Super Hero Adventures: Frost Giants Among Us!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730738-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Super Hero Adventures: Inferno",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6570604-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Super Hero Adventures: Ms. Marvel and the Teleporting Dog",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6518428-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Super Hero Adventures: Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6958077-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Super Hero Adventures: Spider-Man – Across the Spider-Verse",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6744805-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Super Hero Adventures: Spider-Man – Spider-Sense of Adventure",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6828919-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Super Hero Adventures: Spider-Man – Web Designers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6875368-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Super Hero Adventures: Spider-Man – Web of Intrigue",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6797706-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Super Hero Adventures: The Spider-Doctor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6447355-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Super Hero Adventures: To Wakanda and Beyond",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6657932-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Super Hero Adventures: Webs and Arrows and Ants, Oh My!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6486533-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Super Hero Contest of Champions",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/19929-3147-22234-1-marvel-super-hero-co.jpg",
//       "year": "1982",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Marvel Super Hero Contest of Champions",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4845176-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Super Hero Island Adventures",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/253661-20064-119746-1-marvel-super-hero-is.jpg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Super Hero Spectacular",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5424767-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Super Hero Spectacular",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4838282-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Super Hero Squad",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1092960-super_hero_squad_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Marvel Super Hero Squad",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/45797/964160-marvel_super_hero_squad__hero_up____one_shot__1__2009_3____page_1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel Super Hero Squad Hero Up",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/676238-msh_01a.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Super Hero Squad Online Game: Hero Up!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/2609358-marvel_super_hero_squad_hero_up_001__2009__pagecover.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Super Hero Squad Online Magazine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7166102-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Super Heroes Adventure Game Roster Book",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3910008-marvel%20super%20heroes%20adventure%20game%20roster%20book%20pagecover.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Super Heroes Origins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849203-__addme___marvel_super_heroes_origins_v9999___page_1.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Super Heroes Secret Wars",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2407772-marvelsuperheroessecretwars01.jpg",
//       "year": "1984",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Marvel Super Heroes: Larger Than Life",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6164839-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Super Heroes: Secret Wars #1 - Halloween ComicFest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4192043-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Super Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1417737-marvel_super_special_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Super Stars Magazine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1970894-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Marvel Super-Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2481693-marvelsuper_heroes12.jpg",
//       "year": "1967",
//       "publisher": "Marvel",
//       "Field7": "94 Issues"
//     },
//     {
//       "title": "Marvel Super-Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/73408-4404-86083-1-marvel-super-heroes.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "15 Issues"
//     },
//     {
//       "title": "Marvel Super-Heroes King-Size Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1234043-marvel_super_heroes_special_01.jpg",
//       "year": "1966",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Super-Heroes Megazine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/35640-5312-39795-1-marvel-super-heroes-.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Marvel Superhero Team-Up",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1529415-mvl_shr_tu.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Swimsuit Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/374559-19791-129085-1-marvel-swimsuit-spec.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel Tails Starring Peter Porker The Spectacular Spider-Ham",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1251936-marvel_tails_starring_peter_porker_the_spectacular_spider_ham_v1_001.jpg",
//       "year": "1983",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Tales",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/7995/251959-2293-119574-1-marvel-tales.jpg",
//       "year": "1966",
//       "publisher": "Marvel",
//       "Field7": "291 Issues"
//     },
//     {
//       "title": "Marvel Tales by Alan Davis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6148424-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Tales: Annihilation",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7184462-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Tales: Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6913171-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Tales: Black Panther",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7066199-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Tales: Black Widow",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6797709-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Tales: Captain America",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7000483-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Tales: Doctor Strange",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7144088-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Tales: Fantastic Four",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6744807-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Tales: Ghost Rider",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7109889-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Tales: Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7016199-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Tales: Iron Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6929689-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Tales: Ravencroft",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7212614-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Tales: Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6965826-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Tales: Thanos",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6883265-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Tales: Thor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6838551-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Tales: Venom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6760837-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Tales: X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7047348-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Team-Up",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4033788-mtu1vf8m054.jpg",
//       "year": "1972",
//       "publisher": "Marvel",
//       "Field7": "150 Issues"
//     },
//     {
//       "title": "Marvel Team-Up",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1076/82946-18024-105549-1-marvel-team-up.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "25 Issues"
//     },
//     {
//       "title": "Marvel Team-Up",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/39201-6011-44085-1-marvel-team-up.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "11 Issues"
//     },
//     {
//       "title": "Marvel Team-Up",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6875008-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Marvel Team-Up Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2432227-marvelteam_upannual1.jpg",
//       "year": "1976",
//       "publisher": "Marvel",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Marvel Team-Up: Freedom Ring",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5802641-04.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Team-Up: League of Losers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5790890-03.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Team-Up: Master of the Ring",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5778677-02.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Team-Up: The Golden Child",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5764506-01.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Treasury Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/12415-2694-13920-1-marvel-treasury-edit.jpg",
//       "year": "1974",
//       "publisher": "Marvel",
//       "Field7": "28 Issues"
//     },
//     {
//       "title": "Marvel Treasury of Oz featuring the Marvelous Land of Oz",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74848/1536690-marvel_treasury_of_oz_featuring_the_marvelous_land_of_oz.jpg",
//       "year": "1975",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Treasury Special Giant Superhero Holiday Grab-Bag",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/616933-2181_4_01.jpg",
//       "year": "1974",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Triple Action",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/10881-2577-11997-1-marvel-triple-action.jpg",
//       "year": "1972",
//       "publisher": "Marvel",
//       "Field7": "47 Issues"
//     },
//     {
//       "title": "Marvel Triple Action",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/799794-mta_01.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Marvel Tsum Tsum",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5355933-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel Tsum Tsum: Takeover!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5673991-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel TV: Galactus - The Real Story",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2811756-galactus___the_real_story_001.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Two-in-One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/12538-2696-14067-1-marvel-two-in-one.jpg",
//       "year": "1974",
//       "publisher": "Marvel",
//       "Field7": "100 Issues"
//     },
//     {
//       "title": "Marvel Two-In-One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6195210-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Marvel Two-In-One - Marvel Legacy Primer Pages",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6148426-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Two-in-One Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/14228-2865-15916-1-marvel-two-in-one-an.jpg",
//       "year": "1976",
//       "publisher": "Marvel",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Marvel Two-In-One Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6468805-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Two-In-One Epic Collection: Cry Monster",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6548909-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Two-In-One: Fate of the Four",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6517731-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Two-In-One: Next of Kin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6771027-02.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/37015/798489-marvel3.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Marvel Universe All-New Avengers Assemble",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4512014-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Marvel Universe All-New Avengers Assemble",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3696051-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel Universe Avengers Assemble",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3345320-01a.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "Marvel Universe Avengers Assemble Season 2",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4212103-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "16 Issues"
//     },
//     {
//       "title": "Marvel Universe Avengers Assemble Season 2: Civil War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5075158-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel Universe Avengers Assemble: Civil War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5408293-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Universe Avengers Earth's Mightiest Heroes Digest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2816003-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel Universe Avengers Infinite Comic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4987112-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "Marvel Universe Avengers: Spider-Man and the Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2418880-mu_avg__spm__avg.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Universe Avengers: Ultron Revolution",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5601625-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Marvel Universe Avengers: Ultron Revolution",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5305074-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Marvel Universe Avengers: United",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6563510-3536834477-70733.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Universe by Chris Claremont Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6003151-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Universe by Frank Miller Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730739-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Universe by John Byrne Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5133365-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel Universe By Rob Liefeld Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7092704-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Universe Captain America: Civil War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5045262-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Universe Deadpool & Wolverine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5033211-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Universe Doctor Strange",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5478733-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Universe Fall 2019 Magazine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7054355-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Universe Guardians of the Galaxy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4838284-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "23 Issues"
//     },
//     {
//       "title": "Marvel Universe Guardians of the Galaxy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4398329-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel Universe Guardians of the Galaxy Infinite Comic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4928783-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "Marvel Universe Guardians of the Galaxy: Cosmic Team-Up",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3968690-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Universe Guardians of the Galaxy: Galaxy's Most Wanted",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4681690-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Universe Hulk: Agents of S.M.A.S.H.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3358213-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel Universe Hulk: Agents of S.M.A.S.H.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3752377-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Universe Iron Man Digest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2974377-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Universe Magazine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6385007-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel Universe Spider-Man: Amazing Fantasy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2413623-muv_spm__afs.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Universe Thor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3413416-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Universe Thor Comic Reader",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3331109-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Universe Ultimate Spider-Man and Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5028064-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Universe Ultimate Spider-Man Digest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2871032-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Marvel Universe Ultimate Spider-Man Spider-Verse",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4923794-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel Universe Ultimate Spider-Man Vs. The Sinister Six",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5342781-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "11 Issues"
//     },
//     {
//       "title": "Marvel Universe Ultimate Spider-Man Vs. The Sinister Six",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5628443-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Marvel Universe Ultimate Spider-Man: Contest of Champions",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5120524-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel Universe Ultimate Spider-Man: Contest of Champions",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5408294-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Universe Ultimate Spider-Man: Spider-Verse",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5151820-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Universe Ultimate Spider-Man: Web Warriors",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4240285-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Marvel Universe Ultimate Spider-Man: Web Warriors/Avengers Assemble Season 2: Halloween ComicFest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4884828-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Universe Ultimate Spider-Man: Web-Warriors",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4471819-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Marvel Universe Vs The  Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515612-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Universe vs. The Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2638407-prev_img.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel Universe vs. The Punisher",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117127/3083478-apr110723_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Universe vs. The Punisher",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52245/1324251-muvspun.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel Universe vs. Wolverine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117127/3082786-sep110647_1.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Universe vs. Wolverine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1920210-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel Universe: Ant-Man Digest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4608396-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Universe: Avengers and Ultimate Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2626281-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Universe: Iron Man Comic Reader",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2909102-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Universe: Millennial Visions",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/106733-18457-108330-1-marvel-universe-mil.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Universe: The End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1490970-mvun__te.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Universe: The End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/462/128139-18641-109997-1-marvel-the-end.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Marvel Universe: Time and Again",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6779320-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Universe: Wolverine Digest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3105300-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Valentine's Day Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2206057-01.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Vampires Poster Book",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1737971-marv01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Vision",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23221/1610551-361px_marvel_vision_vol_1_1_1_.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "30 Issues"
//     },
//     {
//       "title": "Marvel Visionaries: Chris Claremont",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7162937-9969051442-80144.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Visionaries: Gil Kane",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1906354-mvs__gk.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Visionaries: Jack Kirby",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7066138-3911618390-78715.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel Visionaries: Jim Steranko",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1906379-mvs__js.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Visionaries: John Buscema",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7054331-01.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Visionaries: John Romita Jr.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7185535-7243150734-80673.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Visionaries: John Romita Sr.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6947205-01.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Visionaries: Roy Thomas",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7016152-01.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Visionaries: Stan Lee",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6981205-1070260848-76552.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Visionaries: Steve Ditko",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7110519-2328596159-79527.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel vs. Capcom: Fate of Two Worlds",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6100670-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Western: Kid Colt and the Arizona Girl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/453165-18644_4_001.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Western: Strange Westerns Starring the Black Rider",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/453164-19017_4_001.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Western: Two-Gun Kid",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/453163-18313_4_001.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Western: Western Legends",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/453155-19165_4_001.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Westerns: Outlaw Files",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/453171-18652_4_001.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Year-In-Review",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/680716-1989.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Marvel Zombie",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6650998-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Zombies",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/7995/211725-19252-115533-1-marvel-zombies.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Marvel Zombies",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4613209-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel Zombies",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117127/2888817-50257_marvel_zombies.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Zombies 2",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2792530-01.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Marvel Zombies 2",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1202887-mvz.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Zombies 3",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2792533-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel Zombies 3",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1214287-mvz.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Zombies 4",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/14859/761402-marvel_zombies_4__1_001.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel Zombies 4",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1220878-mvz.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Zombies 5",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3232170-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Zombies 5",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2515195-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Marvel Zombies Destroy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2337128-prev_img_1.jpeg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Marvel Zombies Destroy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2912767-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Zombies Halloween",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2650482-prev_img.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Zombies MGC",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1241374-1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Zombies Return",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/45797/942412-marvel_zombies_return__1__of_5____page_1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Marvel Zombies Return",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1221675-mrz.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Zombies Supreme",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4098398-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Zombies Supreme",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/1698633-zomb.jpeg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Marvel Zombies vs. Army Of Darkness",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1084019-marvel_zombies_army_of_darkness_tpb.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Zombies: Battleworld",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4912411-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Zombies: Dead Days",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3186832-01.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Zombies: Dead Days",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1202658-mvz.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Zombies: Evil Evolution",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/1019440-ape.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Zombies: Resurrection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7125470-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Zombies: The Book of Angels, Demons & Various Monstrosities",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3186834-01.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Zombies: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7034142-0228027501-79026.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Marvel Zombies: The Covers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/126521/2415154-00_marvel_zombies_the_covers__artnet_dcp_.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel Zombies/Army of Darkness",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2792539-01.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Marvel Zomnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/3251887-9780785140269.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel-Verse: Black Panther",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7226945-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel-Verse: Iron Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7125471-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel-Verse: Thanos",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7125472-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel: Avengers Alliance",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/13/135098/5113330-avengers_alliance_001.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel: Five Fabulous Decades of the World’s Greatest Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/69256/1275013-marvelfivefdotwgc1romita.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel: Now What?!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3394613-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel: Shadows and Light",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/14661/427106-Shadows_and_Light_1.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel: The End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2820356-2815120_01_super.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel: The Hip-Hop Covers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5445046-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel: The Hip-Hop Covers Sampler",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4987108-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel: The Lost Generation",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/42487-6784-48466-1-marvel-the-lost-gen.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Marvel: Universe of Super Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6863627-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel: Your Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1153143-marvel_your_universe_01_0001.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Marvel: Your Universe Saga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/533711-marveluniverse.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Agent Carter: Season One Declassified",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4641196-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Agent Carter: Season Two Declassified",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5472134-02.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Agents of S.H.I.E.L.D.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/79073/3992179-marvel%27s%20agents%20of%20s.h.i.e.l.d.%20001.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Agents of S.H.I.E.L.D. Season One Declassified",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3951126-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Agents of S.H.I.E.L.D. Season Two Declassified",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4708278-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Ant-Man - Scott Lang: Small Time Marvel Cinematic Universe Infinite Comic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4427934-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Ant-Man and the Wasp Prelude",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6312669-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel's Ant-Man and the Wasp Prelude",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6458023-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Ant-Man and the Wasp: The Art of the Movie",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6497393-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Ant-Man Prelude",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4621046-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Ant-Man Prelude",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4370337-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel's Avengers: Age of Ultron - The Art of the Movie",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4536844-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Avengers: Endgame Prelude",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6875004-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Avengers: Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7234745-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Avengers: Infinity War Prelude",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6339708-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Avengers: Infinity War Prelude",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6250499-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel's Avengers: Infinity War: The Art of the Movie",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6676178-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Avengers: Iron Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7175955-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Avengers: Thor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7204790-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Avengers: Untitled Prelude",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6712674-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Marvel's Black Panther Prelude",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6110282-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel's Black Panther Prelude",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6223160-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Black Widow Prelude",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7212654-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Captain America: Civil War Prelude",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5151819-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Captain America: Civil War Prelude",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4955652-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel's Captain America: Civil War Prelude Infinite Comic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5044847-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Captain America: The First Avenger Adaptation",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3423923-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel's Captain America: The Winter Soldier - The Art of the Movie",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3732885-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Captain America: The Winter Soldier Prelude",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4801569-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Captain Marvel Prelude",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6684826-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Captain Marvel Prelude",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6789764-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Captain Marvel: The Art of the Movie",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6828917-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Doctor Strange Prelude",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5305072-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel's Doctor Strange Prelude",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5478479-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Doctor Strange Prelude Infinite Comic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5424769-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Greatest Collections",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5193953-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Greatest Collections",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/2179485-marvels_greatest_collections__1___page_1.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Greatest Collections 2009",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52212/991227-marvels_greatest_collections_2009.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Greatest Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/16281/316518-20665-123907-1-marvel-s-greatest-co.jpg",
//       "year": "1969",
//       "publisher": "Marvel",
//       "Field7": "74 Issues"
//     },
//     {
//       "title": "Marvel's Greatest Heroes Sampler",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1300732-marvel_s_greatest_heroes_sampler_marvel_comics_digital_exclusive___page_1.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Guardians of the Galaxy Prelude",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3732886-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel's Guardians of the Galaxy Prelude",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3937918-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel's Guardians of The Galaxy Prequel Infinite Comic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3734595-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Iron Man 2 Adaptation",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2690036-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel's Iron Man 3 Prelude",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4502526-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Iron Man 3 Prelude Custom Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117127/3063273-scan0001.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's New York Bulletin Secret Wars Newspaper",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4536845-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Spider-Man: City At War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7109887-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Spider-Man: City At War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6850872-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Marvel's Spider-Man: Homecoming Prelude",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5723005-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel's Spider-Man: The Black Cat Strikes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7212655-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Spider-Man: Velocity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7054352-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Marvel's The Art of Ant-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4694335-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's The Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4289914-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel's The Avengers Prelude: Fury's Big Week",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2599367-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel's The Avengers Prelude: Fury's Big Week",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4502677-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's The Avengers: Age of Ultron Prelude",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4433824-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's The Avengers: Black Widow Strikes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4501800-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's The Avengers: The Avengers Initiative",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6159417-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Thor Adaptation",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/79073/2814535-marvels_thor_adaptation_01__of_02__000.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvel's Thor: Ragnarok Prelude",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6080302-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Thor: Ragnarok Prelude",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5936016-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvel's Thor: Ragnarok: The Art of the Movie",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6123829-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Thor: The Dark World Prelude",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3377645-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvel's Thor: The Dark World Prelude",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/79073/3089135-marvel%27s%20thor%20-%20the%20dark%20world%20prelude%20001.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Marvelman Classic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2670133-01a.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Marvelman Classic Primer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2670138-01a.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvelman Family's Finest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2670165-01a.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Marvelman: Family's Finest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1753528-mm__ff.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvelous Adventures Of Gus Beezer: Gus Beezer & Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48250/893487-1.jpeg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvelous Adventures of Gus Beezer: Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/904730-marvelous_adventures_of_gus_beezer_spider_man.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvels",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2849909-__addme___marvels_v9999__1___marvels_premiere_hc___page_1.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvels",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/34476-5313-38505-1-marvels.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Marvels",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1279529-mrv.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvels Adventures",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2847382-__addme___marvel_adventures_v9999__1___page_1.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvels Annotated",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6797710-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvels Comics: Captain America #1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/98094/1785054-marvels_comics_groups_captain_america_01.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvels Comics: Daredevil #1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/98410/1785408-marvels_comics___daredevil_01_cover.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvels Comics: Fantastic Four #1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/98094/1782912-marvels_comics___fantastic_four_01_cover.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvels Comics: Spider-Man #1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/529956-mcsm_01.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvels Comics: Thor #1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/98410/1785410-call_him_thor_00_rougher.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvels Comics: X-Men #1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48343/958979-num_risation0013.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvels Companion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4149751-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvels Epilogue",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7016198-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvels Guardians of the Galaxy Vol. 2: The Art of the Movie",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5835377-001.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvels Monster-Sized Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7023035-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvels Postcard Book",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7054925-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvels Poster Book",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6981398-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvels Spider-Man Script Book",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7226944-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvels X",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7204792-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvels: Eye of the Camera",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1612437-mrv__eotc.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marvels: Eye of the Camera",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2760224-marvels__eye_on_the_camera__001.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Marvels: Portraits",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2850060-__addme___marvels___portraits_v9999__1___page_2.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Marvels: The Remastered Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6684827-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Marville",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/448460-marville_1_00_sm.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Mary Jane",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/66235-11304-99232-1-mary-jane.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Mary Jane: Circle of Friends",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5778682-01.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mary Jane: Homecoming",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/2699/98610-18259-106912-1-mary-jane-homecommi.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Mary Jane: Homecoming",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1858879-01.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mask",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/23454-3452-26147-1-mask.jpg",
//       "year": "1985",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Mask",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/24948-3801-27746-1-mask.jpg",
//       "year": "1987",
//       "publisher": "DC Comics",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "Masked Rider",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15317/955845-maskedrider.gif",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Master Lock Presents: The Incredible Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11113/111133305/4111471-ck%20presents-the%20incredible%20hulk%20-%20page%201.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Master of Kung Fu",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/12660-2697-14204-1-master-of-kung-fu.jpg",
//       "year": "1974",
//       "publisher": "Marvel",
//       "Field7": "109 Issues"
//     },
//     {
//       "title": "Master of Kung Fu",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4572730-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Master of Kung Fu",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6135203-126.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Master of Kung Fu Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/965232-master_of_kung_fu_annual_1.jpg",
//       "year": "1976",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Master of Kung Fu Epic Collection: Fight Without Pity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6981399-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Master of Kung Fu Epic Collection: Weapon of the Soul",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6326208-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Master of Kung Fu: Bleeding Black",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/37015/740111-bleeding_black1.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Master of Kung-Fu: Battleworld",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4963463-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Masterlock Presents: The Incredible Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/999806-devil_may_cry__3__2004____page_1.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Masters of the Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47096-3117-56456-1-masters-of-the-unive.jpg",
//       "year": "1982",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Masters of the Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3755021-01.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Masters Of The Universe Preview",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111129651/6098729-preview%20masters%20of%20the%20universe%20%20-%20unknown%20-%20page%201.jpg",
//       "year": "1982",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Masters of the Universe: Origin of He-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2840135-motuohm_1_cover.jpeg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Masters of the Universe: Origins of Eternia",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3703458-02.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Masters of the Universe: The Origin of Hordak",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3100780-masters.png",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Masters of the Universe: The Origin of Skeletor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2676197-1_2a5d4fc7d7.jpeg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Maverick",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/13340/279457-20331-121481-1-maverick.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Maverick",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/89708-18150-106317-1-maverick.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Max Payne 3",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/107849/2326938-actual_1335560600.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Max Ride: Final Flight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5734663-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Max Ride: Final Flight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5421884-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Max Ride: First Flight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4493007-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Max Ride: First Flight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4845168-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Max Ride: Ultimate Flight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4887908-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Max Ride: Ultimate Flight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5225579-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Max Steel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/617258-max1.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "MAX Yearbook",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51078/944333-imagehandler.ashx.jpeg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Maximum Anniversary X-Perience",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51078/944334-imagehandler.ashx.jpeg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Maximum Carnage",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3506354-01.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Maximum Security",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2720890-01.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Maximum Security Dangerous Planet",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2792544-01.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Maximum Security: Thor vs. Ego",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/231176-19650-117851-1-maximum-security-th.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Maxum Games: Demons of Mercy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/118064/3761627-demonsofmercy.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Meet Angel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/8015/218896-19376-116149-1-angel.jpg",
//       "year": "1969",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Meet The Skrulls",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6828920-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Meet the Skrulls",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7047351-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mega Marvel Catalog",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11122/111222211/6373148-blank.png",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "15 Issues"
//     },
//     {
//       "title": "MegaMorphs",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1074242-mm.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "MegaMorphs",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/10390/396960-21674-130796-1-mega-morphs.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Megawatt",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55858/3641011-megawatt%20starring%20jj%20watt%20%231%20%282013%29%20-%20page%201.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mekanix",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4366744-01.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Memories",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3112728-memories%20v2005%20001%20%282005%29%20pagecover.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Men in Black: Far Cry",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3133/143103-18816-111160-1-1.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Men In Black: Initiation",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/79647/6984688-untitled.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Men in Black: Retribution",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2089010-men_in_black_v1997__1___retribution__1997_12____page_1.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Men in Black: The Movie",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/57473/1124325-15031a_men_in_black___the_movie___page_1.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Men of War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/15840-2888-17652-1-men-of-war.jpg",
//       "year": "1977",
//       "publisher": "DC Comics",
//       "Field7": "26 Issues"
//     },
//     {
//       "title": "Men of War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2034376-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Men of War: Uneasy Company",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2529597-_t2ec16zhjhge9n0yg_qubqch57l_tw__60_57.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mephisto Vs. ...",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/25127-3853-27939-1-mephisto-vs---.jpg",
//       "year": "1987",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Mephisto vs....",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6461188-4199655263-68055.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mera: Queen of Atlantis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6712675-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mera: Queen of Atlantis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6302398-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Mera: Tidebreaker",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6863628-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Merry X-Men Holiday Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6712677-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Metal Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/5888-2113-6443-1-metal-men.jpg",
//       "year": "1963",
//       "publisher": "DC Comics",
//       "Field7": "56 Issues"
//     },
//     {
//       "title": "Metal Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1866763-01.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Metal Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/33943-4972-37899-1-metal-men.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Metal Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/907425-0.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Metal Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7108510-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Mighty Mouse",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/29974-4405-33321-1-mighty-mouse.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "Mighty Thor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4912412-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "30 Issues"
//     },
//     {
//       "title": "Mighty Thor - Marvel Legacy Primer Pages",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6073805-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mighty Thor Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1691559-thr_omn1.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Mighty Thor: At the Gates of Valhalla",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6429654-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mighty Thor: Lords of Midgard",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5563260-02.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mighty Thor: Thunder In Her Veins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5211101-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Miles Morales: Bring On the Bad Guys",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7197050-02.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Miles Morales: Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6721981-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "15 Issues"
//     },
//     {
//       "title": "Miles Morales: Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7016201-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Miles Morales: Spider-Man: Halloween ComicFest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7119220-00.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Miles Morales: Straight Out of Brooklyn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7012694-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Miles Morales: The End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7204793-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Miles Morales: The Ultimate Spider-Man Ultimate Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6914882-6812585308-76989.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Miles Morales: The Ultimate Spider-Man: Revival",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4204910-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Miles Morales: Ultimate Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3805327-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Miles Morales: Ultimate Spider-Man - Revelations",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4621047-02.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Miles Morales: Ultimate Spider-Man Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6458025-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Miles Morales: With Great Power",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7066202-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/5809192-millennium%20%231%20final.jpg",
//       "year": "1988",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Millennium",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2163978-01.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Action Comics 1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1206867-actioncomics.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Action Comics 252",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1206868-actioncomics252.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Adventure Comics 247",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1206875-adventurecomics247.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Adventure Comics 61",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1206870-adventurecomics.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: All Star Comics 3",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1206878-allstarcomics3.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: All Star Comics 8",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11134/111349471/6431107-millennium%20edition%20all%20star%20comics%208.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: All-Star Western 10",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1206883-allstarwestern10.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Batman 1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11134/111349471/6432262-millennium%20edition%20batman%201.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Batman: The Dark Knight Returns",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1206887-batmandarknightreturns1.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Crisis on Infinite Earths 1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1206893-crisisoninfiniteearths1.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Detective Comics 1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11134/111349471/6431115-millennium%20edition%20detective%20comics%201.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Detective Comics 225",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11134/111349471/6431117-millennium%20edition%20detective%20comics%20225.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Detective Comics 27",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1206901-detectivecomics27.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Detective Comics 327",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1206903-detectivecomics327.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Detective Comics 359",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1206906-detectivecomics359.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Detective Comics 38",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1206909-detectivecomics38.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Detective Comics 395",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11134/111349471/6431118-millennium%20edition%20detective%20comics%20395.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Flash Comics 1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1206916-flashcomics1.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Green Lantern 76",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1207431-greenlantern76.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: House of Secrets 92",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1207930-houseofsecrets92.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: JLA 1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1207942-jla1.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Justice League 1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1207943-justiceleague1.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Kingdom Come 1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3240125-millennium%20edition%20-%20kingdom%20come%20v2000%20001%20%282000%29%20pagecover.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Military Comics 1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1207948-militarycomics1.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: More Fun Comics 101",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1207955-morefuncomics101.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: More Fun Comics 73",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1207953-morefuncomics73.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Mysterious Suspense 1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1207962-mysterioussuspense1.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: New Gods 1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1207967-newgods1.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Our Army at War 81",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/564698-1.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Plop! 1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1207973-plop1.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Police Comics 1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1207977-policecomics1.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Sensation Comics 1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1207988-sensationcomics1.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Showcase 22",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1208001-showcase22.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Showcase 4",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1208005-showcase4.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Showcase 9",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11134/111349471/6431111-millennium%20edition%20lois%20lane%209.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Superboy 1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11134/111349471/6431131-millennium%20edition%20superboy%201.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Superman 1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1208010-superman1.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Superman 233",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11134/111349471/6431120-millennium%20edition%20superman%20233.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Superman 75",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1208015-superman75.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Superman 76",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1208017-superman76.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Superman's Pal Jimmy Olsen 1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1208019-supermanspaljimmyolsen1.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Tales Calculated to Drive You Mad 1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/972467-me1.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: The Brave and the Bold 28",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1208026-braveandthebold28.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: The Brave and the Bold 85",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1208038-braveandthebold85.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: The Flash 123",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1208041-flash123.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: The Man of Steel 1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1208045-manofsteel1.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: The New Teen Titans 1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1208053-newteentitans1.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: The Shadow 1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11134/111349471/6431119-millennium%20edition%20shadow%201.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: The Spirit 1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1208071-spirit1.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Watchmen 1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1208072-watchmen1.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Whiz Comics 2",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1208073-whizcomics2.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Wonder Woman 1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1208083-wonderwoman1.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Wonder Woman 1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1208084-wonderwoman01.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: World's Finest 71",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1208085-worldsfinest71.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millennium Edition: Young Romance Comics 1",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1208088-youngromance1.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Millie the Model",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/340053-19441-125987-2-millie-the-model.jpg",
//       "year": "1945",
//       "publisher": "Marvel",
//       "Field7": "207 Issues"
//     },
//     {
//       "title": "Millie the Model Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/804157-1.jpg",
//       "year": "1962",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Mini Marvels Ultimate Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/59000/1175348-p00001.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mini Marvels: Rock, Paper, Scissors",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/472584-mmrps_cover3.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mini Marvels: Secret Invasion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/724027-minimarvvol2.gif",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Minimum Carnage: Alpha",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3446781-01a.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Minimum Carnage: Omega",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/2710949-prv14264_cov.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Minor Miracles",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110626/2429799-eisnerminormiracles.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Miracleman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/3573090-1.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "16 Issues"
//     },
//     {
//       "title": "Miracleman by Gaiman & Buckingham: The Golden Age",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5081104-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Miracleman by Gaiman and Buckingham",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4781145-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Miracleman: A Dream of Flying",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3854859-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Miracleman: Olympus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/4497336-%24_57.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Miracleman: The Red King Syndrome",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/4188331-02.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Miss America",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/494154-2.jpg",
//       "year": "1953",
//       "publisher": "Marvel",
//       "Field7": "43 Issues"
//     },
//     {
//       "title": "Miss America Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/2439253-miss1.jpg",
//       "year": "1944",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Miss America Comics 70th Anniversary Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/834591-1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Miss America Magazine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27783/730209-missamerica_1.jpg",
//       "year": "1944",
//       "publisher": "Marvel",
//       "Field7": "82 Issues"
//     },
//     {
//       "title": "Miss Beverly Hills of Hollywood",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47099-1241-56459-1-miss-beverly-hills-o.jpg",
//       "year": "1949",
//       "publisher": "DC Comics",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "Miss Melody Lane of Broadway",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47106-1326-56468-1-miss-melody-lane-of-.jpg",
//       "year": "1950",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Mission: Impossible",
//       "img": "https://comicvine1.cbsistatic.com/bundles/phoenixsite/images/core/loose/img_broken.png",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mister E",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/148518/2883281-better_mr_e_1_cover.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Mister Miracle",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6797712-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mister Miracle",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/27776-4203-30813-1-mister-miracle.jpg",
//       "year": "1989",
//       "publisher": "DC Comics",
//       "Field7": "28 Issues"
//     },
//     {
//       "title": "Mister Miracle",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4017660-mm1.jpg",
//       "year": "1971",
//       "publisher": "DC Comics",
//       "Field7": "25 Issues"
//     },
//     {
//       "title": "Mister Miracle",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30859/789655-mister_miracle.v3_001.00fc.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Mister Miracle",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5996667-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Mister Miracle #1 Director's Cut",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6280027-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mister Miracle #1 Extended Preview",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6040024-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mister Miracle by Jack Kirby",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6060401-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mister Miracle Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1202359-cover.jpg",
//       "year": "1987",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mister Terrific",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2086492-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Mister Terrific: Mind Games",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3485586-01.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mix-Tape",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2805908-mar01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mockingbird",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5087350-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Mockingbird: Bobbi Morse, Agent of S.H.I.E.L.D.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5368017-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mockingbird: I Can Explain",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5489501-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mockingbird: My Feminist Agenda",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5808944-02.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mockingbird: S.H.I.E.L.D. 50th Anniversary",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4778017-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Modeling With Millie",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/221482-19440-116430-1-modeling-with-millie.jpg",
//       "year": "1963",
//       "publisher": "Marvel",
//       "Field7": "34 Issues"
//     },
//     {
//       "title": "Models Inc.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6716173-5064318878-73587.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Models, Inc.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/950061-1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Modesty Blaise",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/1438357-mb1.jpg",
//       "year": "1994",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moment of Silence",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51965/1215572-moment_of_silence_1.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Monster Masterworks",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/3294884-mons1.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Monster Menace",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/34265-5030-38258-1-monster-menace.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Monsters on the Prowl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/41308-6505-46618-1-monsters-on-the-prow.jpg",
//       "year": "1971",
//       "publisher": "Marvel",
//       "Field7": "22 Issues"
//     },
//     {
//       "title": "Monsters to Laugh With",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1233950-monsters_to_laugh_with_001.jpg",
//       "year": "1964",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Monsters Unleashed",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5808945-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Monsters Unleashed - Marvel Legacy Primer Pages",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6084546-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Monsters Unleashed: Battleground",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5949080-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Monsters Unleashed: Learning Curve",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6437971-02.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Monsters Unleashed!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5652351-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Monsters Unleashed!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5936017-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Monsters Unleashed! Free Preview",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5639559-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Monsters Unleashed! Prelude",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5628444-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Monsters Unleashed! Special Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5655545-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Monsters Unleashed!: Monster Mash",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6164840-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Monsters Unlimited",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1233961-monsters_unlimited_004.jpg",
//       "year": "1965",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Monsters, Inc.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4527104-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Monsters, Inc.: A Perfect Date",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2916081-monsters_inc___a_percect_date_001_001.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Monsters, Inc.: Scary Stories",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4527100-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Monsters, Inc.: The Humanween Party",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4527101-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Monsters: The Marvel Monsterbus by Stan Lee, Larry Lieber & Jack Kirby",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5836035-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Moon Girl and Devil Dinosaur",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4923795-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "47 Issues"
//     },
//     {
//       "title": "Moon Girl and Devil Dinosaur - Marvel Legacy Primer Pages",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6130200-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Girl and Devil Dinosaur: Bad Dream",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6981402-07.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Girl and Devil Dinosaur: BFF",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5286348-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Girl and Devil Dinosaur: Cosmic Cooties",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5613463-02.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Girl and Devil Dinosaur: Fantastic Three",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6486538-05.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Girl and Devil Dinosaur: Full Moon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7197052-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Girl and Devil Dinosaur: Girl-Moon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6203589-04.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Girl and Devil Dinosaur: Save Our School",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730740-06.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Girl and Devil Dinosaur: The Beginning",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6789765-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Girl and Devil Dinosaur: The Smartest There Is",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5923496-03.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Girl and Devil Dinosaur: Yancy Street Legends",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7184472-08.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Girl and the Marvel Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6703943-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5147219-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "27 Issues"
//     },
//     {
//       "title": "Moon Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2515260-01a.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Moon Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/3675846-1%20moonkn2014001_dc11_lr.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "17 Issues"
//     },
//     {
//       "title": "Moon Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1641/98698-18105-106380-2-moon-knight.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "30 Issues"
//     },
//     {
//       "title": "Moon Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/37540/993963-ea0b_12.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Moon Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/1798878-moon_knight__1980_1st_series__1.jpeg",
//       "year": "1980",
//       "publisher": "Marvel",
//       "Field7": "38 Issues"
//     },
//     {
//       "title": "Moon Knight - Marvel Legacy Primer Pages",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6107760-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Knight Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2770207-mk_ann_1_dcp_0000.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Knight Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7066207-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Knight by Bendis and Maleev",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2133276-mk_by_b_m1.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Moon Knight by Brian Michael Bendis & Alex Maleev",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6976738-5653123959-78050.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Knight by Jeff Lemire & Greg Smallwood",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7042764-9014382812-79141.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Knight Epic Collection: Bad Moon Rising",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4133409-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Knight Epic Collection: Final Rest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730741-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Knight Epic Collection: Shadows of the Moon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4872380-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Knight Saga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/53928/1028804-5f6489ab_920a_4e21_b1f9_39aacfd28a80.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Knight Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1300987-moon_knight_special_v1__1___page_1.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Knight: Birth and Death",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6060405-03.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Knight: Countdown to Dark",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5755036-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Knight: Dead Will Rise",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4512017-02.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Knight: Divided We Fall",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52035/1319907-moon_knight___divided_we_fall.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Knight: Down South",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5140097-05.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Knight: Fist of Khonshu",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/22940-3492-25586-1-moon-knight.jpg",
//       "year": "1985",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Moon Knight: From The Dead",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4133410-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Knight: God and Country",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/53928/1028782-2009_3_god_and_country.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Knight: High Strangers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/53928/1060220-1_.jpg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Moon Knight: In the Night",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4826113-03.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Knight: Legacy: Crazy Runs In The Family",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6429655-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Knight: Legacy: Phases",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730742-02.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Knight: Lunatic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5570998-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Knight: Midnight Sun",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3264319-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Knight: Reincarnations",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5863227-02.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Knight: Silent Knight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2810207-moon_knight__001.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Knight: The Bottom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/961855-mk.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Knight: The Death of Marc Spector",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/53928/1028785-2009_4_the_death_of_marc_spector.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Moon Knight: The Special Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/21202-3233-23638-1-moon-knight-special-.jpg",
//       "year": "1983",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Morbius",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7144089-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Morbius Revisited",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2582672-199308_morbius_revisited_v1__1___page_1.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Morbius: The Living Vampire",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2781294-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "Morbius: The Living Vampire",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/32421-4798-36155-1-morbius-the-living-.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "32 Issues"
//     },
//     {
//       "title": "Morbius: The Living Vampire - The Man Called Morbius",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3545461-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "More Fun Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/37015/859392-7.jpg",
//       "year": "1936",
//       "publisher": "DC Comics",
//       "Field7": "121 Issues"
//     },
//     {
//       "title": "More Secret Origins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3115011-more%20secret%20origins%20replica%20edition%20v1999%20001%20%281999%29%20pagecover.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "More Weird Mystery Tales",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/3797203-mor1.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "More You Don't Say",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1231455-more_you_don_t_say.jpg",
//       "year": "1963",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Morlocks",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4366781-01.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Mort the Dead Teenager",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/62222-5032-95217-1-mort-the-dead-teenag.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Mortal Kombat VS DC Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/1039832-mkvsdcu1a.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mortal Kombat X",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4332772-01a.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Mortal Kombat X",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4313688-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "36 Issues"
//     },
//     {
//       "title": "Mortal Kombat X: Blood Gods",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4851241-02.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mortal Kombat X: Blood Island",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5147221-03.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mortal Kombat X: Blood Ties",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4492992-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mosaic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5479426-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Mosaic Prelude",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5398602-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mosaic: Down Below",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6050288-02.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mosaic: King of the World",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5819624-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mother Panic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5523686-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Mother Panic: A Work In Progress",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5897086-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mother Panic: Gotham A.D.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6676183-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mother Panic: Gotham A.D.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6364220-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Mother Panic: Under Her Skin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6289349-02.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mother Panic/Batman Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6277705-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mother Teresa of Calcutta",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1251943-mother_teresa_of_calcutta_v1_001.jpg",
//       "year": "1984",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Movie Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/59474-771-92469-1-movie-comics.jpg",
//       "year": "1939",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Mr. & Mrs. X: Gambit and Rogue Forever",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7039265-02.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mr. & Mrs. X: Love and Marriage",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6819211-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mr. and Mrs. X",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6529942-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Mr. District Attorney",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1011212-1.jpg",
//       "year": "1948",
//       "publisher": "DC Comics",
//       "Field7": "67 Issues"
//     },
//     {
//       "title": "Mr. Mxyzptlk (Villains)",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/677134-54931_20060909132555_large.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mrs. Deadpool and the Howling Commandos",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4613219-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Mrs. Deadpool and the Howling Commandos: Warzones!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5151821-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ms Marvel: Ascension",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3714577-06.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ms Marvel: Dark Reign",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3888686-07.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ms. Marvel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3619499-01a.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "19 Issues"
//     },
//     {
//       "title": "Ms. Marvel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/308/78632-17990-105338-1-ms-marvel.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "50 Issues"
//     },
//     {
//       "title": "Ms. Marvel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/15354-2910-17111-1-ms-marvel.jpg",
//       "year": "1977",
//       "publisher": "Marvel",
//       "Field7": "23 Issues"
//     },
//     {
//       "title": "Ms. Marvel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4912413-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "38 Issues"
//     },
//     {
//       "title": "Ms. Marvel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7042765-6707766346-79142.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Ms. Marvel - Marvel Legacy Primer Pages",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6159422-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ms. Marvel Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/528747-0000.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ms. Marvel by Saladin Ahmed: Destined",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7109890-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ms. Marvel Epic Collection: The Woman Who Fell To Earth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6913172-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ms. Marvel Epic Collection: This Woman, This Warrior",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6753294-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ms. Marvel Infinite",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3714588-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ms. Marvel Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5514793-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ms. Marvel Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/90069-18158-106352-1-ms-marvel-special.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ms. Marvel Special: Storyteller",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2810204-mm_storyteller_01_page_001.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ms. Marvel Team-Up",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7161571-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ms. Marvel: Best of the Best",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5551/908687-img5222.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ms. Marvel: Best You Can Be",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4098399-09.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ms. Marvel: Civil War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5551/909157-img6621.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ms. Marvel: Civil War II",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5586836-06.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ms. Marvel: Crushed",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4621048-03.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ms. Marvel: Damage Per Second",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5960918-07.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ms. Marvel: Generation Why",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4460368-02.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ms. Marvel: Halloween ComicFest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6663972-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ms. Marvel: Kamala Khan",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6789766-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ms. Marvel: Last Days",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4912414-04.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ms. Marvel: Mecca",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6184517-08.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ms. Marvel: Metamorphosis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6974977-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ms. Marvel: Monster Smash",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4136284-04.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ms. Marvel: No Normal",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4162370-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ms. Marvel: Operation Lightning Storm",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/448528-ms_marvel_operation_lightning_storm_1_00.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ms. Marvel: Secret Invasion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5551/914179-shehulk004_1_.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ms. Marvel: Super Famous",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5302046-05.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ms. Marvel: Teenage Wasteland",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6517732-09.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ms. Marvel: Time and Again",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6863630-10.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ms. Marvel: War of the Marvels",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4062266-08.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ms. Tree Quarterly",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/29625-4372-32933-1-ms-tree-quarterly.jpg",
//       "year": "1990",
//       "publisher": "DC Comics",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "MTV's Beavis & Butt-Head",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3038458-00.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mucha Lucha",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100757/2223618-mucha_lucha_vol_1_1.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Multiple Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6486539-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Multiple Man: It All Makes Sense In the End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730743-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Muppet Babies Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6080304-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mutant X",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2430421-mutant_x_vol_1_1.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "32 Issues"
//     },
//     {
//       "title": "Mutant X 1999",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2499168-mutant_x__199905___page_1.jpg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mutant X 2000",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2499238-mutant_x__200004___page_1.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mutant X 2001",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2499317-mutant_x__200100___page_1.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mutant X: Dangerous Decisions",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/13820/1126528-52244_20060718194309_large.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mutant X: Origin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/13820/1126513-52243_20060718193322_large.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mutant X: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6666586-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Mutants vs. Ultras: First Encounters",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/326869-20865-124975-1-mutants-vs-ultras.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Muties",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4366801-01.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Mutopia X",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26954/512718-9575_20051118173322_large.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Mutt & Jeff",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27783/881797-muttjeff_1.jpg",
//       "year": "1939",
//       "publisher": "DC Comics",
//       "Field7": "148 Issues"
//     },
//     {
//       "title": "My Greatest Adventure",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/1458-1687-1566-1-my-greatest-adventur.jpg",
//       "year": "1955",
//       "publisher": "DC Comics",
//       "Field7": "85 Issues"
//     },
//     {
//       "title": "My Greatest Adventure",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2086645-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "My Love",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/62326-2445-95321-1-my-love.jpg",
//       "year": "1969",
//       "publisher": "Marvel",
//       "Field7": "39 Issues"
//     },
//     {
//       "title": "My Love Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1235916-my_love_annual_01.jpg",
//       "year": "1971",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "My Name Is Chaos",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/617260-my1.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Mysteries of Love In Space",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6780945-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mystery In Space",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23400/759610-mystery_in_space_no.1__1951_.jpg",
//       "year": "1951",
//       "publisher": "DC Comics",
//       "Field7": "110 Issues"
//     },
//     {
//       "title": "Mystery In Space",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/2350/100368-18319-107265-1-mystery-in-space.JPG",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Mystery In Space",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/18451-3034-20640-1-mystery-in-space.jpg",
//       "year": "1980",
//       "publisher": "DC Comics",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Mystery Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2140223-mm.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mystery Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1866741-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Mystery Men: The Golden Age",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6254372-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mystic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2034403-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Mystic Arcana",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5070000-01.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mystic Arcana",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/135066-18352-107617-16-mystic-arcana.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Mystic Arcana: The Book of Marvel Magic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3016/137952-18680-110379-2-official-handbook-of.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mystic Comics 70th Anniversary Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/941831-1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mystic: The Tenth Apprentice",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5071654-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mystik U",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6164843-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Mystik U",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6477315-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mystique",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/66866-11391-99863-1-mystique.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "24 Issues"
//     },
//     {
//       "title": "Mystique & Sabretooth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/38382-5787-43117-1-mystique-and-sabreto.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Mystique by Brian K. Vaughan Ultimate Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3656517-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mystique by Sean McKeever Ultimate Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3747303-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mystique: Drop Dead Gorgeous",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70204/1486022-1_drop_dead_gorgeus.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mystique: Quiet",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70204/1487489-4_quiet.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mystique: Tinker, Tailor, Mutant, Spy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70204/1487311-2._tinker_tailor_mutant_spy.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mystique: Unnatural",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70204/1487466-3_unnatural.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mythos: Captain America",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/428378-CapMythos1.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mythos: Fantastic Four",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/7995/222621-19470-116551-1-mythos-fantastic-fo.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mythos: Ghost Rider",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22277/701622-ghostrider.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mythos: Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64451/1230048-p00001.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mythos: Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6178494-1383846192-60714.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Mythos: X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6178495-5370523925-60740.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Name of the Game",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74848/1775670-notg.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Namor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/448539-1salvador.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Namor the First Mutant: Curse of the Mutants",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1688045-nmr__cotm.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Namor the First Mutant: Namor Goes to Hell",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2017694-ntfm__ngth.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Namor The Sub-Mariner By Byrne and Jae Lee Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7092705-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Namor Visionaries: John Byrne",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6131861-8429206644-59610.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Namor, the Sub-Mariner",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/29367-4406-32633-1-namor-the-sub-marin.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "62 Issues"
//     },
//     {
//       "title": "Namor, The Sub-Mariner Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/74595-9432-77411-1-namor-the-sub-marin.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Namor: The Best Defense",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6712679-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Namor: The First Mutant",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5551/1355606-03938422_284c_4b57_9e97_920ee57f1e57.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "11 Issues"
//     },
//     {
//       "title": "Namor: The First Mutant Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/96747/1814620-namorannual1c.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Namora",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6063/1273962-namora.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Namorita",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1364096-namorita_v1_001__arise_foundation_.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Naomi",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6771003-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Naomi: Season One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7115846-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nathaniel Dusk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/21468-3313-23941-1-nathaniel-dusk.jpg",
//       "year": "1984",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Nathaniel Dusk II",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/148518/2940073-47225_20080417215122_large.jpg",
//       "year": "1985",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Nation X",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2792705-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Nation X: X-Factor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48343/1084955-num_risation0001.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "National Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/941135-32469_20061219151502_large.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "National Comics: Eternity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/2490118-nceternity.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "National Comics: Looker",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2557295-__kgrhqz__jqe__p_dpv_bqpprtd_bw__60_57.jpeg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "National Comics: Madame X",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2664061-__kgrhqvhjeofbmww0sd4bqhtebujkq__60_57.jpeg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "National Comics: Rose and Thorn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2613658-__kgrhqr__kwfbv9f1tjzbqyehhyj____60_57.jpeg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Necessary Evil: The Villains of the DC Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3321399-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nellie the Nurse",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/57550-1061-90545-1-nellie-the-nurse.jpg",
//       "year": "1945",
//       "publisher": "Marvel",
//       "Field7": "36 Issues"
//     },
//     {
//       "title": "Nemesis: The Impostors",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/1145602-nemi_cv1_ds_copy.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Neon Joe, Werewolf Hunter",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4920986-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nets BrooklyKnight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/114926/5312259-brooklynknight%20v2012%20%231%20%28of%201%29%20%282012%29%20-%20page%201.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Adventure Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/115312-18546-109012-1-new-adventure-comics.jpg",
//       "year": "1937",
//       "publisher": "DC Comics",
//       "Field7": "20 Issues"
//     },
//     {
//       "title": "New Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/2782836-newavn2013001_dc11_lr.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "33 Issues"
//     },
//     {
//       "title": "New Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4851242-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "New Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5648/278684-11497-101407-3-new-avengers.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "64 Issues"
//     },
//     {
//       "title": "New Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3853/1266754-newavengers1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "35 Issues"
//     },
//     {
//       "title": "New Avengers Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2029320-01.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "New Avengers Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3913987-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Avengers Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2034411-01a.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Avengers by Brian Michael Bendis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1706558-na_by_bmb1.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "New Avengers by Brian Michael Bendis: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6932935-3735568727-77305.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "New Avengers By Jonathan Hickman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7156676-1284004349-80909.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "New Avengers Director’s Cut",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1284783-the_new_avengers_v0__1___breakout___part_one__2005_1____page_1.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Avengers Finale",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/98902/2697861-_001.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Avengers Illuminati: Secret History",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/519065-0000.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Avengers MGC",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1200495-new_avengers_mgc_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Avengers Poster Book",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/61948/2187850-napb_01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Avengers The Reunion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4062267-01.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Avengers: A Perfect World",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4204920-04.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Avengers: A.I.M. - Civil War II",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5613464-03.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Avengers: A.I.M.: Everything Is New",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5160034-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Avengers: A.I.M.: Standoff",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5368018-02.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Avengers: American Armed Forces Exclusive Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/82159/1878927-new_avengers_activity_book.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Avengers: Breakout",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/937009-brkout.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Avengers: Breakout Marvel Select",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7205231-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Avengers: Civil War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/937077-war_of_civils.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Avengers: Everything Dies",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3148293-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Avengers: Illuminati",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1223682-ill.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Avengers: Illuminati",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/91562-18113-106129-2-the-new-avengers-ill.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "New Avengers: Infinity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3799315-02.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Avengers: Luke Cage",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1179073-new_avengers_luke_cage.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "New Avengers: Luke Cage: Town Without Pity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4000520-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Avengers: Nannies and Nazis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2766439-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Avengers: Other Worlds",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3918916-03.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Avengers: Power",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/944004-power_pack.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Avengers: Power Loss",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1179107-na.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Avengers: Revolution",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/937118-rev.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Avengers: Search For the Sorcerer Supreme",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1179099-na.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Avengers: Secret Invasion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/943863-skrulls_.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "New Avengers: Secrets and Lies",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/937043-s_l.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Avengers: Siege",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1384454-axmx2.png",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Avengers: The Collective",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/440705-new_avengers_the_collective_1_00tpb.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Avengers: The Reunion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/726573-prv2146_cov.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "New Avengers: The Sentry",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/440694-new_avengers_the_sentry_1_00premierehc.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Avengers: The Trust",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/943130-the_trus.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Avengers: Ultron Forever",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4532206-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Avengers/Transformers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/308/146576-18832-111244-1-new-avengers-transfo.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "New Avengers/Transformers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11113/111139104/4173569-kn3sl.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Book of Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27783/1289017-nbc_1.jpg",
//       "year": "1936",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "New Challengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6432713-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "New Challengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730695-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/124725-18608-109779-1-new-comics.jpg",
//       "year": "1935",
//       "publisher": "DC Comics",
//       "Field7": "11 Issues"
//     },
//     {
//       "title": "New Excalibur",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2763841-00new_excalibur_1_cover.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "24 Issues"
//     },
//     {
//       "title": "New Excalibur: Battle For Eternity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1078688-ne.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Excalibur: Defenders of the Realm",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5548009-01.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Excalibur: Last Days of Camelot",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1158637-ne.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Exiles",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/281646-20347-121609-1-new-exiles.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "19 Issues"
//     },
//     {
//       "title": "New Exiles Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2760135-ne_ann_1_onlyorko_dcp_001.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Exiles: Away We Go",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1100163-ex.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Exiles: New Life, New Gambit",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1100142-ex.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Exiles: Soul Awakening",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5548010-02.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Exiles: The Enemy Within",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5548011-03.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Fun",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/137176-18728-110666-1-fun.jpg",
//       "year": "1935",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "New Gods",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/15763-2889-17568-1-new-gods-the.jpg",
//       "year": "1977",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "New Gods",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30859/790621-newgods01_00.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "15 Issues"
//     },
//     {
//       "title": "New Gods",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4262/131018-18669-110258-1-new-gods.jpg",
//       "year": "1989",
//       "publisher": "DC Comics",
//       "Field7": "28 Issues"
//     },
//     {
//       "title": "New Gods",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/21839-3314-24367-1-new-gods.jpg",
//       "year": "1984",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "New Gods by Jack Kirby",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6582715-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Mangaverse: The Rings of Fate",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3464/110058-18500-108615-1-new-mangaverse.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "New Mangaverse: The Rings of Fate",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1627570-nmv__rof.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Mutants",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7135754-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "New Mutants",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/455/102042-18351-107614-1-new-mutants.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "New Mutants",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2193213-01b.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "50 Issues"
//     },
//     {
//       "title": "New Mutants #98: Facsimile Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6990912-98.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Mutants by Abnett & Lanning: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6771031-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "New Mutants by Zeb Wells: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6280029-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Mutants Epic Collection: Curse of the Valkyries",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6302401-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Mutants Epic Collection: Renewal",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5734667-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Mutants Epic Collection: The Demon Bear Saga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7000485-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Mutants Forever",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1324426-newm1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "New Mutants Summer Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/14955/312957-20601-123502-1-new-mutants-summer-s.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Mutants: A Date With the Devil",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2351480-nw__adwtd.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Mutants: Back to School",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1025618-xmn.gif",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Mutants: Back To School: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6242734-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Mutants: De-Animator",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3920589-06.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Mutants: Dead Souls",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6640629-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Mutants: Dead Souls",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6326209-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "New Mutants: Fall of the New Mutants",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1758788-nm__fotnm.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Mutants: Fight the Future",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4115831-07.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Mutants: Forever",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/87073/1694974-newmutantsforevertp.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Mutants: Necrosha",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1220158-nm.jpeg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Mutants: Return of Legion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1176930-xmn.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Mutants: The Demon Bear Saga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/55780/1063009-bearsaga.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Mutants: Truth or Death",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/39375-6012-44299-1-new-mutants-truth-o.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "New Mutants: Unfinished Business",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2041084-nm__ub.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Mutants: War Children",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7084657-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Suicide Squad",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3943244-n%20suicide%20squad.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "22 Issues"
//     },
//     {
//       "title": "New Suicide Squad Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4828989-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Suicide Squad: Freedom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5340679-03.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Suicide Squad: Futures End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4086394-new%20suicide%20squad.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Suicide Squad: Kill Anything",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5533004-04.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Suicide Squad: Monsters",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5030437-02.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Suicide Squad: Pure Insanity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4685126-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Super-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5318627-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "19 Issues"
//     },
//     {
//       "title": "New Super-Man & the Justice League of China",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6280819-20.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "New Super-Man and the Justice League of China",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6789767-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Super-Man: Coming To America",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6080305-02.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Super-Man: Equilibrium",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6467854-03.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Super-Man: Made In China",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5909104-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Talent Showcase",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5563202-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Talent Showcase",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52503/2817749-nt_showcase_01pg00fcbc.jpg",
//       "year": "1984",
//       "publisher": "DC Comics",
//       "Field7": "15 Issues"
//     },
//     {
//       "title": "New Talent Showcase 2017",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6170193-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Talent Showcase 2018",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6722372-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Teen Titans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4103463-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "New Thunderbolts",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/66216-11298-99213-1-new-thunderbolts.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "New Thunderbolts: Modern Marvels",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/958271-new_t_bolts.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Thunderbolts: One Step Forward",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/958232-nwtbolts.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Thunderbolts: Right of Power",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/959097-new_t_bolts.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Warriors",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1076/81959-18016-105453-1-new-warriors-the.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "New Warriors",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3650728-01a.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "New Warriors",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3673/131703-18671-110267-1-new-warriors-the.JPG",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "20 Issues"
//     },
//     {
//       "title": "New Warriors Classic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4000521-01.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "New Warriors Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3042217-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Warriors: Always and Forever",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4361237-02.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Warriors: Darkness & Light",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6582716-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Warriors: Defiant",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1177822-nw.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Warriors: Reality Check",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1283856-nw__rc.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Warriors: The Kids Are All Fight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4057911-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Warriors: Thrashed",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/959244-new_wrs.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/86871-18078-105907-1-new-x-men.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "46 Issues"
//     },
//     {
//       "title": "New X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/51150-9121-66992-1-new-x-men.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "43 Issues"
//     },
//     {
//       "title": "New X-Men 2001",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/18265/371486-21334-128914-1-new-x-men-annual-200.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New X-Men By Grant Morrison",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2041355-nxm_gm1.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "New X-Men Companion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7000486-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New X-Men MGC",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1270540-new_x_men_mgc_114.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New X-Men Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1045374-newxmenomnibus.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New X-Men Ultimate Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7162966-7573279392-81723.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "New X-Men: Academy X Yearbook",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/89409-18147-106307-1-new-x-men-academy-x.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New X-Men: Academy X: Choosing Sides",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1052896-choosingsides.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New X-Men: Academy X: Haunted",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1052903-haunted.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New X-Men: Academy X: House Of M",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4361979-01.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New X-Men: Academy X: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6730744-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New X-Men: Academy X: X-Posed",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/6219736-4886849-03.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New X-Men: Assault On Weapon Plus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1052872-253677_20068_119752_1_new_x_men_tpb_super.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New X-Men: Childhood's End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5716409-01.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New X-Men: Childhood's End: Crusade",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5716411-02.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New X-Men: Childhood's End: Mercury Falling",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5716415-04.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New X-Men: Childhood's End: Nimrod",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5716413-03.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New X-Men: Childhood's End: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6779323-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New X-Men: Childhood's End: The Quest For Magik",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5716416-05.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New X-Men: E is for Extinction",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1051352-1044947_eisforextinction_super.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New X-Men: Hellions",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1025613-xmn.gif",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New X-Men: Hellions",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/90748-18173-106415-1-new-x-men-hellions.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "New X-Men: Here Comes Tomorrow",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1052880-374564_20068_129086_1_new_x_men_hct_super.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New X-Men: Imperial",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1052834-1044949_xmenimperial_super.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New X-Men: New Worlds",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1052836-1045080_xmennewworlds_super.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New X-Men: Planet X",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1052877-1045348_planetx_super.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New X-Men: Riot at Xavier's",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1052858-1045305_riotxaviers_super.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New X-Men: The Quest For Magik: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6974978-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New Year's Evil",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7167927-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New York World's Fair Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/197731-19183-114852-1-new-york-world-s-fai.jpg",
//       "year": "1939",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "New York, the Big City",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/2829359-new1.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "New-Gen",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11155/1234953-ng_cover_1.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "New-Gen: New Dawn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/83918/2240743-newdawn01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Newstime Magazine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1239863-standard_newstime__1___the_life_and_death_of_the_man_of_steel__1993_5____page_1.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "newuniversal",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/2868/100040-18306-107174-1-newuniversal.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Newuniversal: 1959",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2670493-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Newuniversal: Conqueror",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2670496-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Newuniversal: Everything Went White",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2670505-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Newuniversal: Shockfront",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2670506-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Nextwave: Agents of H.A.T.E.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/104769-18133-107960-1-nextwave-agents-of.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Nextwave: Agents of H.A.T.E. Ultimate Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7162970-6671803613-81725.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nextwave: Agents of HATE: I Kick Your Face",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1641933-nwv_aoh__ikyf.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nextwave: Agents of HATE: This is What They Want",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1641931-nwv_aoh__tiwtw.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nextwave: Director's Cut",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/114168-18535-108920-1-nextwave-director-s.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "NFL Superpro",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15197/302315-20476-122582-1-nfl-superpro.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "NFL SuperPro Super Bowl Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1281574-superpro_super_bowl_special__1.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nick Fury",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5808947-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Nick Fury vs S.H.I.E.L.D.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/2621752-nick_fury_vs_s.h.i.e.l.d._tpb__1989__pagecover.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nick Fury vs. S.H.I.E.L.D.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/62430-4061-95425-1-nick-fury-vs-s-h-i.jpg",
//       "year": "1988",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Nick Fury, Agent of SHIELD",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117930/2694258-nick_fury_aos__1.jpg",
//       "year": "1968",
//       "publisher": "Marvel",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "Nick Fury, Agent of SHIELD",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/28521-4232-31659-1-nick-fury-agent-of-.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "47 Issues"
//     },
//     {
//       "title": "Nick Fury, Agent of SHIELD",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/21294-3235-23736-1-nick-fury-agent-of-.jpg",
//       "year": "1983",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Nick Fury, Agent of SHIELD Classic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4580793-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Nick Fury, Agent of SHIELD: Who Is Scorpio?",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1922615-nfaos__wis.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nick Fury: Deep-Cover Capers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6153014-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nick Fury: Scorpio Connection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2482888-wolverine_nick_fury_the_scorpio_connection_v1989__1___the_scorpio_connection__1989____page_1.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nick Fury's Howling Commandos",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/690530-hc1.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Nick Fury's Howling Commandos No. 1 (Director's Cut)",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2850105-__addme___nick_fury_s_howling_commandos_v9999__1___creatures_on_the_loose___2005_12____page_1.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Night Force",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/20031-3119-22352-1-night-force.jpg",
//       "year": "1982",
//       "publisher": "DC Comics",
//       "Field7": "14 Issues"
//     },
//     {
//       "title": "Night Force",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2230852-ngtf_cv1_ds_7da90s87f.jpeg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Night Force",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/65835-11255-98832-1-night-force.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Night Force by Marv Wolfman and Gene Colan: The Complete Series",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6113414-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Night Man vs. Wolverine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/104904-18416-107984-1-night-man-vs-wolveri.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Night Nurse",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4558201-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Night Nurse",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3541560-01.jpg",
//       "year": "1972",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Night of the Living Deadpool",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4538660-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Night of the Living Deadpool",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3572919-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Night of the Owls",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/83283/2302219-noto_booklet_pg001.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Night Raven: From The Marvel UK Vaults",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5759788-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Night Rider",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52212/1008123-night_rider_1_10_74_the_origin_of_the_night_rider_.jpg",
//       "year": "1974",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Night Thrasher",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/51166-5034-67008-1-night-thrasher.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "21 Issues"
//     },
//     {
//       "title": "Night Thrasher: Four Control",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/62436-4801-95431-1-night-thrasher-four.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Nightcat",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/616457-night1.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightcrawler",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/449771-nightcrawler_01_00.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Nightcrawler",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3016/145095-18835-111255-1-nightcrawler.jpg",
//       "year": "1985",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Nightcrawler",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3748035-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Nightcrawler",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/72660-9467-77828-1-nightcrawler.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Nightcrawler Poster Book",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1167552-nightcrawlerposterbook_00.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightcrawler: Homecoming",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4218326-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightcrawler: Reborn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4593496-02.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightcrawler: The Devil Inside",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3656520-01.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightcrawler: The Winding Way",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3747308-02.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nighthawk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5225581-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Nighthawk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2938847-199809_nighthawk_v1__1___page_1.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Nighthawk: Hate Makes Hate",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5613465-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightmare",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/931094-1.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Nightmask",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/23407-3647-26092-1-nightmask.jpg",
//       "year": "1986",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Nightmask: New Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6486540-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightmaster: Monsters of Rock",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1545861-nmor.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightside",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4366882-01.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Nightstalkers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/62440-4802-95435-1-nightstalkers.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "Nightwatch",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/62450-5314-95445-1-nightwatch.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Nightwing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/38220-5755-42916-1-nightwing.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "155 Issues"
//     },
//     {
//       "title": "Nightwing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/37030-5514-41426-1-nightwing.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Nightwing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5342712-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "68 Issues"
//     },
//     {
//       "title": "Nightwing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2034412-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "31 Issues"
//     },
//     {
//       "title": "Nightwing 101",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2845248-digital_nightwing_101_v9999__101___page_1.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Nightwing 80-Page Giant",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1235899-43169_20060830091037_large.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing and Huntress",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/12370/267116-20240-120810-1-nightwing-and-huntre.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Nightwing Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3406968-ntwann-cv1-0f33f.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6584075-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Nightwing By Peter J. Tomasi: Guardian of Gotham!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7218067-9672561089-83510.jpg",
//       "year": "2020",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing Secret Files",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/61069/1260010-nightwing_secretfiles1_00.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: A Darker Shade of Justice",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1280155-46112_20070826010917_large.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: A Knight in Bludhaven",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60739/1255660-51wdsz5dnbl._ss500_.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: Alfred's Return",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1103274-cover.jpg",
//       "year": "1995",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: Back To Blüdhaven",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5897088-02.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: Better Than Batman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5665109-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: Big Guns",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/449793-nightwing_big_guns_1_00.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: Blockbuster",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6233342-04.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: Blüdhaven",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4252921-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: Brothers In Blood",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1283624-103554_20070826021410_large.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: Burnback",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7133551-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: Death of the Family",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3482222-03.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: False Starts",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4974183-03.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: Freefall",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1275727-148379_20090307010440_large.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: Knight Terrors",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6958082-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: Lethal Force",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6684831-08.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: Love and Bullets",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1283592-46111_20070826010405_large.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: Love and Bullets",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5160035-04.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: Love and War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1283630-8004_400x600.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: Mobbed Up",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1280197-54165_20060924134107_large.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: Night of the Owls",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3368486-02.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: Nightwing Must Die",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6060406-03.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: Old Friends, New Enemies",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3321389-01.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: On The Razor's Edge",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/449796-nightwing_on_the_razor_s_edge_1_00a.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: Our Worlds at War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1075352-cover.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: Raptor's Revenge",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6395755-05.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: Rebirth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5318630-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: Rebirth Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6113415-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Nightwing: Renegade",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1283602-103553_20070826020303_large.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: Rough Justice",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4614743-02.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: Rough Justice",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1280282-46110_20100228224440_large.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: Second City",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3945848-04.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: Setting Son",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4265290-05.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: Shrike",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6280032-07.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: The Bleeding Edge",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6735983-07.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: The Great Leap",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/906541-0.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: The Hunt For Oracle",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/449803-nightwing_the_hunt_for_oracle_1_00.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: The Hunt For Oracle",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5500616-05.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: The Lost Year",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1280196-123108_20080326165122_large.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: The New Order",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6418172-5874794286-67231.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: The New Order",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6034354-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Nightwing: The Target",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/59264/1173740-nightwingthetargetvs8.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: The Untouchable",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6606781-06.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: Ties That Bind",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70539/1289497-ttb.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: To Serve and Protect",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5949081-06.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: Traps and Trapezes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2643276-__kgrhqf__lcfbk0jot_jbqd4j_ro8q__60_57.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing: Year One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1275762-46116_20070826014613_large.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing/Huntress",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/83050/1603185-n_h.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nightwing/Magilla Gorilla Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6666587-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "No Escape",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/62462-5315-95457-1-no-escape.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Nocturne",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/36667-5551-40979-1-nocturne.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Nolan Ryan",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/4519397-nolan%20ryan%20fc%20final.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nomad",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2193227-01.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Nomad",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2193237-01.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "25 Issues"
//     },
//     {
//       "title": "Nomad: Girl Without A World",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5028072-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nomad: Girl Without a World",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/25835/951841-nomad01.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Nomextra and Kevlor",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/114926/5046945-nomextra%20and%20kevlor%20v1990%20%231%20%28of%201%29%20-%20dupont%20-%20page%201.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "North 40",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4361969-01.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Northanger Abbey",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6148322-7182242577-60353.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Northanger Abbey",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2241302-www.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Northstar",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2515352-01.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Not Brand Echh",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/8655-2354-9557-1-not-brand-echh.jpg",
//       "year": "1967",
//       "publisher": "Marvel",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "Not Brand Echh",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6145216-14.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Not Brand Echh: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6981403-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nova",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/334503-20997-125695-1-nova-the-human-rocke.jpg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Nova",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4887914-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "11 Issues"
//     },
//     {
//       "title": "Nova",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/107083-18462-108362-1-nova.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "36 Issues"
//     },
//     {
//       "title": "Nova",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5571263-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Nova",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/14964-2867-16694-1-nova.jpg",
//       "year": "1976",
//       "publisher": "Marvel",
//       "Field7": "21 Issues"
//     },
//     {
//       "title": "Nova",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/328692-2957-18970-2-man-called-nova-the.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "Nova",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3504183-01a.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "31 Issues"
//     },
//     {
//       "title": "Nova Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/305797-20513-122798-1-nova-annual.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nova Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4440321-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nova by Abnett & Lanning: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6877169-0808378152-76106.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Nova Classic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3373081-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Nova Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4024180-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nova: Annihilation",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1142718-nova.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nova: Annihilation Conquest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1013618-nova_tpb_1.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nova: AXIS",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4512018-05.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nova: Homecoming",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4885184-06.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nova: Knowhere",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031789-02.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nova: Nova Corps",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1432337-nova_vol_4_nova_corps.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nova: Nova Corpse",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3968804-03.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nova: Origin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3288984-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nova: Origin of Richard Rider",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/681237-nova.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nova: Original Sin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4293069-04.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nova: Realm of Kings",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1301129-untitled.png",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nova: Resurrection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5973417-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nova: Rookie Season",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3826104-02.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nova: Secret Invasion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1432343-nova_secret_invasion.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nova: The Human Rocket - Afterburn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5613466-02.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nova: The Human Rocket - Burn Out",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5259878-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nova: War of Kings",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031822-05.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "November 2010 Sneak Peeks",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56213/1506258-marvel__sneek_peeks__one_shot_.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Nth Man the Ultimate Ninja",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/28423-4234-31544-1-nth-man-the-ultimate.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "16 Issues"
//     },
//     {
//       "title": "Nutsy Squirrel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47109-1617-56471-1-nutsy-squirrel.jpg",
//       "year": "1954",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "NYX",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/402/78553-17987-105318-1-nyx.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "NYX / X-23",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/252241-20026-119619-1-nyx--x-23.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "NYX: No Way Home",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5406694-01.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "NYX: No Way Home",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/49897/2085921-nyx_no_way_out_01__dizzy_megan__pg01a.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "NYX: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5286349-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "NYX: Wannabe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5406697-01.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "O.M.A.C.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1998629-1a.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "O.M.A.C.: Omactivate!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3485560-01.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Obi-Wan and Anakin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4978932-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Obnoxio the Clown",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3329/110620-18510-108635-1-obnoxio-the-clown-vs.jpg",
//       "year": "1983",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Occupy Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5511364-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "Occupy Avengers: In Plain Sight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6069450-02.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Occupy Avengers: Taking Back Justice",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5909108-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ocean",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3795623-01.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ocean Master: Year of the Villain",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7182331-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Odyssey of the Amazons",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6164846-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Official Handbook of the Marvel Universe  A-Z",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/13/135797/2975470-ohotmutpb.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Official Handbook of the Marvel Universe A to Z",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/538272-muh1.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "14 Issues"
//     },
//     {
//       "title": "Official Handbook of the Marvel Universe A to Z Update",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2753738-scan001.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Official Handbook of the Marvel Universe: Alternate Universes 2005",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/94050-18179-106689-1-the-official-handboo.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Official Handbook of the Marvel Universe: Avengers 2004",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/91869-18179-106524-1-the-official-handboo.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Official Handbook of the Marvel Universe: Avengers 2005",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/92842-18179-106606-1-the-official-handboo.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Official Handbook of the Marvel Universe: Book of the Dead 2004",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/92137-18179-106534-1-the-official-handboo.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Official Handbook of the Marvel Universe: Daredevil 2004",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/92116-18179-106532-1-the-official-handboo.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Official Handbook of the Marvel Universe: Fantastic Four 2005",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/92839-18179-106605-1-the-official-handboo.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Official Handbook of the Marvel Universe: Golden Age Marvel 2004",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/92383-18179-106555-1-the-official-handboo.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Official Handbook of the Marvel Universe: Horror 2005",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/94051-18179-106690-1-the-official-handboo.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Official Handbook of the Marvel Universe: Hulk 2004",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/91871-18179-106525-1-the-official-handboo.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Official Handbook of the Marvel Universe: Marvel Knights 2005",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/92395-18179-106557-1-the-official-handboo.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Official Handbook of the Marvel Universe: Spider-Man 2004",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/91864-18179-106523-1-the-official-handboo.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Official Handbook of the Marvel Universe: Spider-Man 2005",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/92661-18179-106581-1-the-official-handboo.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Official Handbook of the Marvel Universe: Teams 2005",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/92838-18179-106604-1-the-official-handboo.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Official Handbook of the Marvel Universe: The Women of Marvel 2005",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/92389-18179-106556-1-the-official-handboo.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Official Handbook of the Marvel Universe: Wolverine 2004",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/92122-18179-106533-1-the-official-handboo.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Official Handbook of the Marvel Universe: X-Men - Age of Apocalypse 2005",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/92660-18179-106580-1-the-official-handboo.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Official Handbook of the Marvel Universe: X-Men 2004",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/91545-18179-106480-1-the-official-handboo.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Official Handbook of the Marvel Universe: X-Men 2005",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2763064-000.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Official Handbook of the Ultimate Marvel Universe: The Fantastic Four & Spider-Man 2005",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/93985-18179-106680-1-the-official-handboo.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Official Handbook of the Ultimate Marvel Universe: The Ultimates & X-Men 2005",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/94193-18179-106697-1-the-official-handboo.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Official Index to the Marvel Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6350836-7084623213-66077.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "14 Issues"
//     },
//     {
//       "title": "Old Lady Harley",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6658283-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Old Lady Harley",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6981404-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Old Man Hawkeye",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6223164-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Old Man Hawkeye: An Eye For An Eye",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6559461-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Old Man Hawkeye: The Whole World Blind",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6807742-02.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Old Man Logan",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4584121-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Old Man Logan",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5019263-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "50 Issues"
//     },
//     {
//       "title": "Old Man Logan - Marvel Legacy Primer Pages",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6135208-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Old Man Logan Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6596001-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Old Man Quill",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6789770-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Old Man Quill: Go Your Own Way",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7236767-02.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Old Man Quill: Nobody's Fault But Mine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7031465-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "OMAC",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/494521-scan.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "OMAC",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4285911-01.jpg",
//       "year": "1974",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "OMAC: One Man Army Corps",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/31491-4560-35067-1-omac-one-man-army-c.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Omega Flight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/105786-18441-108222-1-omega-flight.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Omega Flight: Alpha to Omega",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/976435-omega.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Omega Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/24019/807321-omega_men__part_1__the_end_of_the_beginning_.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Omega Men Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/21322-3317-23774-1-omega-men-annual.jpg",
//       "year": "1984",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Omega the Unknown",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2193309-01.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "Omega the Unknown",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/2998933-tn.jpg",
//       "year": "1976",
//       "publisher": "Marvel",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "Omega The Unknown Classic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3530889-01.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Once Upon A Time: Out of the Past",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4503969-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Once Upon A Time: Shadow of the Queen",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3290897-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "One Month To Live",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1627645-1m2l.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Onslaught Reborn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2193321-01.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Onslaught Reborn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/406957-21756-131205-1-onslaught-reborn-tpb.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Onslaught Unleashed",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3656521-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Onslaught Unleashed",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2193328-01a.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Onslaught: Epilogue",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111121457/5295483-onslaught_%20epilogue%20v1997%20%231%20-%20prisoner%20m-13%20%281997_2%29%20-%20page%201.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Onslaught: Marvel Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/99394-18278-107019-2-onslaught-marvel.JPG",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Onslaught: X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/99389-18280-107021-2-onslaught-x-men.JPG",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Open Space",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/28894-4236-32086-1-open-space.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Operation: S.I.N.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/4312321-opsin2015001_dc11-0.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Operation: S.I.N. - Agent Carter",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4738272-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Oracle: The Cure",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/14859/747104-bftc_o1p01.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Oracle: The Cure",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1984518-oracle_the_cure.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Origin II",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3521285-01a.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Origin of Generation X",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/442395-origin_of_generation_x_1_00.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Original Sin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4093765-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "Original Sin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4188633-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Original Sin Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4158636-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Original Sin by Aaron & Deodato",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4536848-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Original Sin Companion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4344322-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Original Sin Special Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3874245-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Original Sin: Hulk vs. Iron Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4174341-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Original Sin: Secret Avengers Infinite Comic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3838202-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Original Sin: Thor & Loki - The Tenth Realm",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4218328-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Original Sins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4536849-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Original Sins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3882774-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Origins of Marvel Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6531488-4246303187-69775.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Origins of Marvel Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1234398-origins_of_marvel_comics.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Origins of Marvel Comics: X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56299/1372524-origins_of_marvel_comics_x_men.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Origins of Siege",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1078705-origins_of_siege.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Orion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/42505-6788-48488-1-orion.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "25 Issues"
//     },
//     {
//       "title": "Orion by Walt Simonson Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/4495475-orion.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Orion by Walter Simonson",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6506247-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Orion: The Gates of Apokolips",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2072508-orion.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ororo: Before the Storm",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1649602-oro__bts.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ororo: Before the Storm",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1494/86337-18075-105857-1-ororo-before-the-st.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Orson Scott Card's Ender in Exile",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1254893-ender_in_exile_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Orson Scott Card's Speaker for the Dead",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2193333-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Osborn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/1516504-osbornno1.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Osborn Journals",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/940890-spider_man_the_osborn_journal_vol_1_1.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Osborn: Evil Incarcerated",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4447626-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Our Army at War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1375801-our_army_at_war_1.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Our Army at War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/229785-1472-117702-1-our-army-at-war.JPG",
//       "year": "1952",
//       "publisher": "DC Comics",
//       "Field7": "301 Issues"
//     },
//     {
//       "title": "Our Army at War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2083348-our_army.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Our Fighting Forces",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/1293-1618-1385-1-our-fighting-forces.jpg",
//       "year": "1954",
//       "publisher": "DC Comics",
//       "Field7": "181 Issues"
//     },
//     {
//       "title": "Our Fighting Forces",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1400074-our_fighting_forces_1.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Our Love Story",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/62470-2446-95465-1-our-love-story.jpg",
//       "year": "1969",
//       "publisher": "Marvel",
//       "Field7": "38 Issues"
//     },
//     {
//       "title": "Our Men at War [ashcan]",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/2877468-our1.jpg",
//       "year": "1952",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Outcasts",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/25776-3802-28640-1-outcasts.jpg",
//       "year": "1987",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Outlaws",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/31099-4561-34613-1-outlaws.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Outsiders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/144112-10415-111214-1-outsiders.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "50 Issues"
//     },
//     {
//       "title": "Outsiders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/25579/477932-out_alpha.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "26 Issues"
//     },
//     {
//       "title": "Outsiders Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/135705-18696-110518-1-outsiders-annual.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Outsiders Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3186647-01.jpg",
//       "year": "1987",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Outsiders: Crisis Intervention",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/32599/1263432-4980_400x600.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Outsiders: Five of a Kind",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/32599/1337317-8828_400x600.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Outsiders: Five of a Kind - Katana/Shazam",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/166809-19004-112975-1-outsiders-five-of-a.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Outsiders: Five of a Kind - Martian Manhunter/Thunder",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/172368-19024-113545-1-outsiders-five-of-a.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Outsiders: Five of a Kind - Metamorpho/Aquaman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/176487-19048-113735-1-outsiders-five-of-a.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Outsiders: Five of a Kind - Nightwing/Boomerang",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/166812-19005-112977-1-outsiders-five-of-a.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Outsiders: Five of a Kind - Wonder Woman/Grace",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/184255-19081-113958-1-outsiders-five-of-a.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Outsiders: Looking For Trouble",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/32599/1264454-3774_400x600.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Outsiders: Pay As You Go",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/32599/1264265-7468_400x600.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Outsiders: Sum of All Evil",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1785394-sum_of_all_evil.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Outsiders: The Good Fight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/32599/1264467-6468_400x600.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Outsiders: The Great Divide",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2632692-__kgrhqv__hse4vztquibbou_cwpem___48_3.jpeg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Outsiders: The Hunt",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2062089-the_hunt.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Outsiders: The Road to Hell",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2062088-road_to_hell.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Outsiders: Wanted",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/32599/1263427-4098_400x600.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Outsiders/Checkmate: Checkout",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1967831-01.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Over the Edge",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/64939-11182-97936-1-over-the-edge.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "Oz Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4077145-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Oz Primer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2031273-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Oz-Wonderland War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/23647-3613-26362-1-oz-wonderland-war-t.jpg",
//       "year": "1986",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Oz: Dorothy and the Wizard in Oz",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2815137-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Oz: Marvelous Land of Oz",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2719094-__kgrhqzhjeufc__snsuqbqrz3t5_2___60_57.jpeg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Oz: Ozma of Oz",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3854852-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Oz: Road to Oz",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4261025-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Oz: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7197053-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Oz: The Emerald City Of Oz",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3681119-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Oz: The Wonderful Wizard Of Oz",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1085152-wonderful_wizard_of_oz.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ozma of Oz",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48443/1488693-prv6824_cov.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Ozzie and Harriet",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/45721-1239-53062-1-ozzie-and-harriet.jpg",
//       "year": "1949",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Ozzie Smith",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/4519416-ozzie%20smith%20fc%20final.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Paradise X",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/74985-9547-80587-1-paradise-x.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "Paradise X Sketchbook",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/48573/1160234-paradise_x_sketchbook.gif",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Paradise X Special Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23221/1644038-paradise_x_v1__1___issue_1__2002_5____page_1.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Paradise X Special: A",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/642147-paradisexa.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Paradise X Special: Devils",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/640232-devils.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Paradise X Special: Ragnarok",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/641372-ragnarok1.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Paradise X Special: Xen",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/638647-xen.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Paradise X: Heralds",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/186414-19092-114070-1-paradise-x-heralds.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Paradise X: X",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3038260-x.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Parallax: Emerald Night",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/43547/914978-5517_4_1.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Pat Boone",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47120-1996-56483-1-pat-boone.jpg",
//       "year": "1959",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Patsy and Hedy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1048315-patsy_and_hedy_001.jpg",
//       "year": "1952",
//       "publisher": "Marvel",
//       "Field7": "110 Issues"
//     },
//     {
//       "title": "Patsy and Hedy Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/804342-1.jpg",
//       "year": "1963",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Patsy Walker",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1995068-1.jpg",
//       "year": "1945",
//       "publisher": "Marvel",
//       "Field7": "124 Issues"
//     },
//     {
//       "title": "Patsy Walker, A.K.A. Hellcat!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4963465-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "17 Issues"
//     },
//     {
//       "title": "Patsy Walker, A.K.A. Hellcat!: Careless Whisker(s)",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5960919-03.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Patsy Walker, A.K.A. Hellcat!: Don't Stop Me-Ow",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5601629-02.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Patsy Walker, A.K.A. Hellcat!: Hooked On A Feline",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5268255-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Patsy Walker: Hellcat",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5140098-01.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Patsy Walker: Hellcat",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/435132-hellcat1.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Patsy Walker's Fashion Parade",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1233963-patsy_walker_s_fashion_parade_v1_001.jpg",
//       "year": "1966",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Peacemaker",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111120209/4123845-peacemaker%20%231.jpg",
//       "year": "1988",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Pearl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6922206-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Pearl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6561146-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Penance: Relentless",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/787/195564-19160-114627-1-penance-relentless.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Penance: Relentless",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/968435-pnnce.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Penguin: Pain & Prejudice",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2088552-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Penguin: Pain and Prejudice",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2630181-__kgrhqnhjcke_qmtk9zqbq_tfulh_q__60_57.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Pet Avengers Classic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5674124-01.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Peter Cannon - Thunderbolt",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5551/588568-915a5e64_7de1_403d_94d7_93407adefc5d.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Peter Panda",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/33077/645904-156160_20081216214811_large.jpg",
//       "year": "1953",
//       "publisher": "DC Comics",
//       "Field7": "31 Issues"
//     },
//     {
//       "title": "Peter Parker",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6635875-0769278571-72345.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Peter Parker",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1163971-prv4712_cov.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Peter Parker, Spider-Man: Back in Black",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5082187-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Peter Parker: Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/51585-9142-68478-1-peter-parker-spider.jpg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "58 Issues"
//     },
//     {
//       "title": "Peter Parker: Spider-Man / Elektra '98",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1791949-peter_parker_spider_man_elektra_98.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Peter Parker: Spider-Man 1999",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1791981-peter_parker_spider_man_99.jpg",
//       "year": "1999",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Peter Parker: Spider-Man 2000",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1791996-peter_parker_spider_man_2000.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Peter Parker: Spider-Man 2001",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1792053-peter_parker_spider_man_2001.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Peter Parker: Spider-Man: A Day in the Life",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1054186-spm.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Peter Parker: Spider-Man: One Small Break",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1054194-spm.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Peter Parker: Spider-Man: Return of the Goblin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1054216-spm.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Peter Parker: Spider-Man: Senseless Violence",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1054223-spm.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Peter Parker: Spider-Man: Trials and Tribulations",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1054218-spm.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Peter Parker: The Spectacular Spider-Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5914604-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "23 Issues"
//     },
//     {
//       "title": "Peter Parker: The Spectacular Spider-Man Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6477316-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Peter Parker: The Spectacular Spider-Man: Amazing Fantasy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6559464-03.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Peter Parker: The Spectacular Spider-Man: Coming Home",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6694357-04.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Peter Parker: The Spectacular Spider-Man: Into The Twilight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6184520-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Peter Parker: The Spectacular Spider-Man: Most Wanted",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6374061-02.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Peter Parker: The Spectacular Spider-Man: Spider-Geddon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6797715-05.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Peter Porkchops",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47155-1242-56519-1-peter-porkchops.jpg",
//       "year": "1949",
//       "publisher": "DC Comics",
//       "Field7": "62 Issues"
//     },
//     {
//       "title": "Peter Porker, the Spectacular Spider-Ham",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6660689-3786270557-72857.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Peter Porker, The Spectacular Spider-Ham: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6981405-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Peter, the Little Pest",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/62536-2447-95531-1-peter-the-little-pes.jpg",
//       "year": "1969",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Petey",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1235707-petey_v2_004.jpg",
//       "year": "1970",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Phantom 2040",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/36567-5552-40857-1-phantom-2040.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Phantom Lady",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2557125-phlady_cv1_1.jpeg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Phoenix Resurrection: The Return of Jean Grey",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6203592-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Phoenix Resurrection: The Return of Jean Grey",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6385010-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Phoenix Saga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1300294-phoenix_saga_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Phoenix: The Untold Story",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/880439-879581_x_men137a_alternate_ending___phoenix_saga.cbr___page_1_super.jpg",
//       "year": "1984",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Picture Stories from the Bible (New Testament)",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61369-988-94364-1-picture-stories-from.jpg",
//       "year": "1944",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Picture Stories from the Bible (Old Testament)",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1955652-1.jpg",
//       "year": "1942",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Pilgrim's Progress",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1358695-pilgrim_s_progress.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Pinky and the Brain",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/121664-18586-109625-1-pinky-and-the-brain.JPG",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "27 Issues"
//     },
//     {
//       "title": "Pinky and the Brain Christmas Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/98121/1796693-pinky_and_the_brain_____christmas_special__0___seite_1.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Pinocchio and the Emperor of the Night",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1252874-pinocchio_and_the_emperor_of_the_night_v1_001.jpg",
//       "year": "1988",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Pint-Sized X-Babies: Murderama",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/196278-19173-114741-1-x-babies-murderama.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Pirates of Dark Water",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/24967/443497-the_pirates_of_dark_water__1.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "Pizza Hut Super Savings Book Featuring X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/2875567-pizz1.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Pizzazz",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1249877-pizzazz_001.jpg",
//       "year": "1977",
//       "publisher": "Marvel",
//       "Field7": "16 Issues"
//     },
//     {
//       "title": "Planet Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4572731-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Planet Hulk: Gladiator Guidebook",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/325688-20839-124921-1-planet-hulk-gladiat.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Planet Hulk: Warzones!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4974189-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Planet Skaar Prologue",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/808464-planet_skaar_prologue_001.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Planetary",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5955609-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Planetary Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3604175-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Planetary/Batman: Night on Earth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/760/83016-18026-105551-1-planetary-batman.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Planetary/JLA: Terra Occulta",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/760/83323-18028-105567-1-planetary-jla.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Plastic Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/46951/1837233-plasticman11.jpg",
//       "year": "1976",
//       "publisher": "DC Comics",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "Plastic Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/64428-11111-97425-1-plastic-man.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "20 Issues"
//     },
//     {
//       "title": "Plastic Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/27282-4017-30269-1-plastic-man.jpg",
//       "year": "1988",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Plastic Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/1073132-pm1.jpg",
//       "year": "1966",
//       "publisher": "DC Comics",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "Plastic Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6468789-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Plastic Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6883277-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Plastic Man 80-Page Giant",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/46951/953104-plasticmanannual001.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Plastic Man Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/46951/899361-plasticmanspecial001.jpg",
//       "year": "1999",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Plastic Man: On The Lam",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/1371711-2393_400x600.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Plastic Man: Rubber Bandits",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/1541872-4617_400x600.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Playmates Toys",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/7209621-pla1.jpg",
//       "year": "",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Plop!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47214-2618-56581-1-plop-.jpg",
//       "year": "1973",
//       "publisher": "DC Comics",
//       "Field7": "24 Issues"
//     },
//     {
//       "title": "Point One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2163914-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Poison Ivy: Cycle of Life and Death",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5010446-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Poison Ivy: Cycle of Life and Death",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5421891-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Police Academy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/62427-4237-95422-1-police-academy.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Popsicle",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5557869-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Power Girl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/26729-4018-29667-1-power-girl.jpg",
//       "year": "1988",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Power Girl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/2396106-power_girl_v2_1.jpeg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "27 Issues"
//     },
//     {
//       "title": "Power Girl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1352194-5316_400x600.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Power Girl: A New Beginning",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50391/1214904-power_girl.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Power Girl: Aliens and Apes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50391/1442803-powergirl2.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Power Girl: Bomb Squad",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2202342-bomb.png",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Power Girl: Old Friends",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2202309-1100457.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Power Girl: Power Trip",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3635323-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Power Lords",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/21254-3200-23696-1-power-lords.jpg",
//       "year": "1983",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Power Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/12541-2700-14070-1-power-man.jpg",
//       "year": "1974",
//       "publisher": "Marvel",
//       "Field7": "33 Issues"
//     },
//     {
//       "title": "Power Man and Iron Fist",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/16539-2959-18426-1-power-man-and-iron-f.jpg",
//       "year": "1978",
//       "publisher": "Marvel",
//       "Field7": "76 Issues"
//     },
//     {
//       "title": "Power Man and Iron Fist",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5051574-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "15 Issues"
//     },
//     {
//       "title": "Power Man and Iron Fist",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/63915/1662473-iron_fist.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Power Man and Iron Fist Epic Collection: Doombringer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7153356-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Power Man and Iron Fist Epic Collection: Heroes For Hire",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4725129-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Power Man And Iron Fist Epic Collection: Revenge!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5478480-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Power Man and Iron Fist: Civil War II",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5734669-02.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Power Man and Iron Fist: Street Magic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6060408-03.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Power Man and Iron Fist: Sweet Christmas Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5601632-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Power Man and Iron Fist: The Boys Are Back In Town",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5445048-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Power Man and Iron Fist: The Comedy of Death",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4801577-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Power Man Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/965274-power_man_annual_vol_1_1.jpg",
//       "year": "1976",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Power of Green: Go Green, Save Some Green",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/3156289-pow1.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Power of the Atom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4366999-01.jpg",
//       "year": "1988",
//       "publisher": "DC Comics",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "Power Pachyderms",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/470333-1.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Power Pack",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/22059-3358-24611-1-power-pack.jpg",
//       "year": "1984",
//       "publisher": "Marvel",
//       "Field7": "62 Issues"
//     },
//     {
//       "title": "Power Pack",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6123841-63.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Power Pack",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/42374-6748-48279-1-power-pack.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Power Pack",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/156766-18919-111872-1-power-pack.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Power Pack Classic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/968454-pp.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Power Pack Holiday Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1300998-power_pack_holiday_special_v1__1___page_1.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Power Pack: Day One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2031274-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Power Pack: Day One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11111/111117825/3932253-2014-07-01%2020.54.37.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Power Pack: Grow Up!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7054358-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Power Pack: Origin Album",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/33913/1777840-powerpackoriginalbum001.jpg",
//       "year": "1988",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Power Pack: Pack Attack!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5657583-01.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Power Pack: The Kids Are All Right",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11111/111117825/3943414-1602536504-51wBH.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Powerless",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1417622-84968_20070214183104_large.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Powerless",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111121983/5750550-4260860846-UJeeNkzMB-4BvsTl8yTt8ahpuJcqwniEMxmJsSqHJ3CSEzFjJ3cvjEh8MB4__dKyOhTet8waHtcsm_XrVG_LL_kBWtYn1q8gYDXlPR62tQRRdy0n5yqOTAAdxIXxZvoRm0ffpw%3Ds0",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Powerpuff Girls The Movie: The Comic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1345608-01.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Powers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6779228-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Powers of X",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7023036-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Prelude to Deadpool Corps",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1372814-bish.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Prelude to Deadpool Corps",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52245/1146009-deadpool_corps_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Prelude to Infinite Crisis",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23749/738607-55434_20060822220011_large.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "President Luthor Secret Files",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3755055-01.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Presidents' Day Celebration",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1301001-presidents__day_celebration__marvel_digital_comics_exclusive__1___page_1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Prevent Child Abuse America Presents: Amazing Spider-Man on Bullying Prevention",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100239/2100184-prevent_child_abuse_america_presents__amazing_spider_man_on_bullying_prevention_v2003__1__of_1____page_1.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Prez",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4628889-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Prez",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/12097-2619-13545-1-prez.jpg",
//       "year": "1973",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Prez: Corndog in Chief",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5030442-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Prez: The First Teen President",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5238276-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Pride & Prejudice",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4222108-01.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Pride & Prejudice",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/753653-1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Primal Force",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/35809-5253-39981-1-primal-force.jpg",
//       "year": "1994",
//       "publisher": "DC Comics",
//       "Field7": "15 Issues"
//     },
//     {
//       "title": "Prince Namor, the Sub-Mariner",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/22138-3359-24701-1-prince-namor-the-su.jpg",
//       "year": "1984",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Prince Valiant",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/35900-5319-40081-1-prince-valiant.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Princess Leia",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4426846-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Princess Natasha",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/10/100757/2223641-princess_natasha_vol_1_1.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Pro Action Spider-Man Giveaway",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/2924169-the_amazing_spider_man___the_goblin_strikes_01_v2_001__1994__pagecover.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Pro Action X-Men Giveaway",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/558072-1.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Professor Xavier and the X-Men",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/37207-5553-41644-1-professor-xavier-and.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "Prometheus (Villains)",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/677123-8116_20051112000430_large.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Prowler",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5500618-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Prowler: The Clone Conspiracy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5923503-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Pryde and Wisdom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/38125-5785-42797-1-pryde-and-wisdom.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Pryzm the Beginning: A Costly Peace",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/572600-pryzymcomic.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Psi-Force",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/68368-11495-101366-1-psi-force.jpg",
//       "year": "1986",
//       "publisher": "Marvel",
//       "Field7": "32 Issues"
//     },
//     {
//       "title": "Psi-Force Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/10700/223461-19502-116638-1-psi-force-annual.jpg",
//       "year": "1987",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Psi-Force Classic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1429355-pf_cls.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Psylocke",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52212/1014527-psylocke.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Psylocke & Archangel: Crimson Dawn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/14955/316085-20650-123844-1-psylocke--archangel.jpg",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Punisher",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/670344-punisher_1_001a.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "16 Issues"
//     },
//     {
//       "title": "Punisher",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/2868/100657-18328-107344-1-punisher.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "Punisher - Marvel Legacy Primer Pages",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6119623-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher & Bullseye: Deadliest Hits",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5711921-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher Anniversary Magazine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1364719-punisher_anniversary_magazine_v1_001.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/977438-annual_punisher__1__2009____page_1.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher by Greg Rucka",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2615121-__kgrhqv__pee8wf8rdbibpt6cerwi___60_57.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Punisher by Rick Remender Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2451048-pun.png",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher Epic Collection: Capital Punishment",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6173003-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher Epic Collection: Kingpin Rules",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6789771-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher Holiday Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/53928/1029654-1993_pu_holiday_special_1_.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Punisher Invades the 'Nam",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6431642-1224486161-67501.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher Invades the 'Nam",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6429660-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher Kill Krew",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7220169-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher Kill Krew",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7039270-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Punisher Kills the Marvel Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3530856-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher Kills the Marvel Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/134018-18681-110386-1-punisher-kills-the-m.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher Max by Jason Aaron Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3874321-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher MAX: From First to Last",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5658369-01.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher Max: Hardcover",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/83050/1578481-punisher_max1.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Punisher Nightmare",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3545462-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher Noir",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/922373-prv3201_cov.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Punisher Noir",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1300686-pns_nr.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher vs. Bullseye",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1052488-vs.gif",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher vs. Daredevil",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/24227/424961-The%20Punisher%20vs%20Daredevil%2001%2000.jpg",
//       "year": "2000",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher vs. the Marvel Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5055944-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher War Journal",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2777469-pwj1cover.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "26 Issues"
//     },
//     {
//       "title": "Punisher War Journal Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2810161-punisher_war_journal_annual__001.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher War Journal By Carl Potts & Jim Lee",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5442650-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher War Journal by Matt Fraction: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6789772-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher War Journal Classic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1227140-pns.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher War Journal: Goin' Out West",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1227146-pns.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher War Journal: Hunter/Hunted",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1227692-pns.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher War Journal: Jigsaw",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1227698-pns.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher War Journal: Secret Invasion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5260000-01.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher War Zone",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3515611-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher, Moon Knight & Daredevil: The Big Shots",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2088563-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher: A Man Named Frank",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1808/1073133-the_punisher___a_man_named_frank___00___fc.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher: Barbarian with a Gun",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117127/4296618-punisher%20-%20barbarian%20with%20a%20gun%20%23200800%20-%20page%201.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher: Blood on the Moors",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/51078/943369-imagehandler.ashx.jpeg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher: Bloodlines",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1808/1072821-punisher___bloodlines___00___fc.jpg",
//       "year": "1991",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher: Circle of Blood",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5739704-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher: Dark Reign",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2934638-01.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher: Dead End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4801579-02.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher: Die Hard in the Big Easy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6178496-9896714353-60731.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher: Franken-Castle",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1529453-pns__frncs.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher: Franken-Castle - Birth of the Monster",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2207400-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher: G-Force",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6178497-7823858505-60731.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher: In the Blood",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1867291-pns__itb.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher: In the Blood",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1490682-pitb1.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Punisher: Kingdom Gone",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1808/1072814-the_punisher___kingdom_gone___00___fc.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher: Nightmare",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2783605-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Punisher: No Escape",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7231699-2325212934-83317.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher: Official Index to the Marvel Universe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/13/135797/2975474-punindex.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher: Origin of Microchip",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30638/725977-microchip1.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Punisher: Return To Big Nothing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7016204-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher: Shadowmasters",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6497396-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher: Soviet",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7144091-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Punisher: The Ghosts of Innocents",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/32934-5039-36761-1-punisher-the-ghosts.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Punisher: The Platoon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6385011-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher: The Prize",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7231700-2835605340-83318.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher: Trial of the Punisher",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3331116-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Punisher: Very Special Holidays",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/1559610-3852241_1.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher: War Zone",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3504579-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Punisher: Year One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30638/725956-punisher4.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Punisher: Year One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1564706-pns__yr_on.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher/Batman: Deadly Knights",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/357038-21206-127550-1-punisher-batman.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher/Black Widow: Spinning Doomsday's Web",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6178498-01.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Punisher/Captain America: Blood & Glory",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52035/1159319-punisher_captain_america_vol_1_1.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "PunisherMAX: Bullseye",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1887625-punishermax_bullseye.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "PunisherMAX: Kingpin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1887614-punishermax_kingpin.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Quake: S.H.I.E.L.D. 50th Anniversary",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4801324-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Quarantine Zone",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5099155-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Quasar",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/28621-4242-31774-1-quasar.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "60 Issues"
//     },
//     {
//       "title": "Quasar Classic",
//       "img": "https://comicvine1.cbsistatic.com/bundles/phoenixsite/images/core/loose/img_broken.png",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Quasar Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1358696-quasar_special_001.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Quasar: Cosmos In Collision",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6640637-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Quest For Camelot",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60392/1716884-4901421_1.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Question: Epitaph for a Hero",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1249089-questionvol3.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Question: Peacemaker",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1275680-199796_20100512222543_large.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Question: Pipeline",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1691165-questionpipeline.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Question: Poisoned  Ground",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1248971-question_vol2.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Question: Riddles",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1000451-vol5.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Question: The Five Books of Blood",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/1528402-9166_400x600.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Question: Welcome to Oz",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1248976-questionoz.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Question: Zen and Violence",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1248980-question1.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Questprobe",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/22060-3360-24612-1-questprobe.jpg",
//       "year": "1984",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Quicksilver",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/117763/2594178-quicks.png",
//       "year": "1997",
//       "publisher": "Marvel",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "Quicksilver: No Surrender",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6429662-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Quicksilver: No Surrender",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6703948-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "R.E.B.E.L.S: Strange Companions",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2277093-rebels_strange_companions.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "R.E.B.E.L.S.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/717396-r_01.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "28 Issues"
//     },
//     {
//       "title": "R.E.B.E.L.S.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1812/105117-18426-108078-1-r-e-b-e-l-s--94.jpg",
//       "year": "1994",
//       "publisher": "DC Comics",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "R.E.B.E.L.S. Annual: Starro The Conqueror",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/45797/990081-annual_r.e.b.e.l.s.___the_future_is_now__1__2009_4____page_1.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "R.E.B.E.L.S.: Sons of Brainiac",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2277102-219586_20110911200440_large.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "R.E.B.E.L.S.: The Coming of Starro",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2277089-13639_900x1350.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "R.E.B.E.L.S.: The Son and the Stars",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2277103-216950_20110911200608_large.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Radio Funnies",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/3784515-rad1.jpg",
//       "year": "1939",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Ragman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6094030-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Ragman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/14925-2844-16655-1-ragman.jpg",
//       "year": "1976",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Ragman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6506250-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ragman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/1046540-rag1.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Ragman: Cry of the Dead",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/1056046-rcotd1.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Ragman: Suit of Souls",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/62444/1469739-prv6716_cov.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Raiders of the Lost Ark",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/51438-3089-68403-1-raiders-of-the-lost-.jpg",
//       "year": "1981",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Rainbow Brite and the Star Stealer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/59938/1471566-rainbow_brite_comic.jpg",
//       "year": "1985",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Rampaging Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/2505437-__kgrhqj__hie6z3ns__lbosy7ehqdg__60_3.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Rampaging Wolverine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/768070-sc00116dbd.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Rann-Thanagar War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65423/1639921-rannthanagarwartpb.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Rann/Thanagar Holy War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/16235/385716-21541-130036-2-rann-thanagar-holy-w.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Rann/Thanagar War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/311572-20002-123343-1-rann-thanagar-war.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Rann/Thanagar War: Infinite Crisis Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/704435-rtws1.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ratchet and Clank",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1388906-01.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Ratchet and Clank",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2083200-ratchet___clank.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ravage 2099",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3182770-01.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "33 Issues"
//     },
//     {
//       "title": "Raven",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5842050-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Raven",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5444335-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Raven: Daughter of Darkness",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6250484-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Raven: Daughter of Darkness",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6650824-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Ravencroft",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7226418-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Rawhide Kid",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/23127-3501-25791-1-rawhide-kid.jpg",
//       "year": "1985",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Rawhide Kid Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1235936-rawhide_kid_annual_01.jpg",
//       "year": "1971",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Rawhide Kid: Slap Leather",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6660716-5066389195-72857.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Rawhide Kid: The Sensational Seven",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6599799-5558678938-70945.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Razorline The First Cut",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/312768-20599-123474-1-razorline-the-first.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Re-Loaded",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/14542/2555479-reloaded.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Real Fact Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/64932-1097-97929-1-real-fact-comics.jpg",
//       "year": "1946",
//       "publisher": "DC Comics",
//       "Field7": "21 Issues"
//     },
//     {
//       "title": "Real Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4361465-1165283-realheroes1.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Real Screen Comics",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47251-1043-56618-1-real-screen-comics.jpg",
//       "year": "1945",
//       "publisher": "DC Comics",
//       "Field7": "127 Issues"
//     },
//     {
//       "title": "Real Screen Funnies",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/325827-20851-124933-1-real-screen-funnies.jpg",
//       "year": "1945",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Realm of Kings",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4504038-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Realm of Kings",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/31666/1030961-prv3812_cov.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Realm of Kings Inhumans",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1032273-realm_of_kings_inhumans_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Realm of Kings Son of Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1114486-son.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Realm of Kings: Imperial Guard",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3182852-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Realworlds: Batman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1061191-prv3843_pg1.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Realworlds: Justice League of America",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1061194-prv3843_pg1.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Realworlds: Superman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7214143-6004768752-83195.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Realworlds: Wonder Woman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/1061197-star_trek_alien_spotlight_cardassians__2009____page_1.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Goblin: Red Death",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7125473-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Hood & the Outlaws",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5379295-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "26 Issues"
//     },
//     {
//       "title": "Red Hood and the Outlaws",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/2014909-red_hood_and_the_outlaws__2011__01a.jpeg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "41 Issues"
//     },
//     {
//       "title": "Red Hood and the Outlaws Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3070857-red%20hod.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Red Hood and the Outlaws Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6030786-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Red Hood and the Outlaws: Bizarro Reborn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6385012-03.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Hood and the Outlaws: Dark Trinity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5819631-01.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Hood and the Outlaws: Death of the Family",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3468786-03.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Hood and the Outlaws: Futures End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4108612-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Hood and the Outlaws: Good Night Gotham",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6666594-04.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Hood and the Outlaws: Last Call",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4984305-07.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Hood and the Outlaws: League of Assassins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3882726-04.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Hood and the Outlaws: Lost and Found",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4627354-06.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Hood And The Outlaws: Rebirth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5342716-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Hood and the Outlaws: REDemption",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3368489-01.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Hood and the Outlaws: The Big Picture",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4265292-05.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Hood and the Outlaws: The New 52 Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6640638-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Hood and the Outlaws: The Starfire",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3368490-02.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Hood and the Outlaws: Who Is Artemis?",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6080312-02.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Hood: Outlaw",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6641746-27.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "16 Issues"
//     },
//     {
//       "title": "Red Hood: Outlaw: Prince of Gotham",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7160268-02.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Hood: Outlaw: Requiem For An Archer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6990916-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Hood: The Lost Days",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3889219-01.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Hood: The Lost Days",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56616/1250625-rhood_cv1_ds_copy.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Red Hood/Arsenal",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4617094-01-variant.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "Red Hood/Arsenal: Dancing With the Devil's Daughter",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5479430-02.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Hood/Arsenal: Open For Business",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5120530-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Hulk: Haunted",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4872489-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Hulk: Mayan Rule",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5073997-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Hulk: Planet Red Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2030895-rh__prh.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Hulk: Scorched Earth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/1843291-rhlk__scr_ert.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Lanterns",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/2009925-1.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "41 Issues"
//     },
//     {
//       "title": "Red Lanterns Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3996137-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Lanterns: Atrocities",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4252924-05.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Lanterns: Blood and Rage",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2385637-978_1_4012_3491_1.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Lanterns: Blood Brothers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3850010-04.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Lanterns: Forged In Blood",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4711666-06.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Lanterns: Futures End",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4114532-red%20lanterns.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Lanterns: The Death of the Red Lanterns",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11122/111222211/6373148-blank.png",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Lanterns: The Second Prophecy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3439030-03.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Robin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/2165253-red_robin__2009____01a.jpeg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "26 Issues"
//     },
//     {
//       "title": "Red Robin: 7 Days of Death",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110017/2260774-www.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Robin: Collision",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/1387695-scanned_image_4.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Robin: The Grail",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/25855/1279744-red_robin_the_grail_tp_400x620_1.jpg",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Robin: The Hit List",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2063145-red_robin_hit_list.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red She-Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2638156-prev_img.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "Red She-Hulk: Hell Hath No Fury Now",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3352252-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red She-Hulk: Route 616",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3499746-02.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Skull",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4655773-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Red Skull",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/1894182-incarnate.jpeg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Red Skull: Battleworld",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5045263-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Skull: Incarnate",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4462845-01.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Sonja",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/84205/4017672-rs1nm92m043.jpg",
//       "year": "1977",
//       "publisher": "Marvel",
//       "Field7": "15 Issues"
//     },
//     {
//       "title": "Red Sonja",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/51281-9122-67543-1-red-sonja.jpg",
//       "year": "1983",
//       "publisher": "Marvel",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "Red Sonja",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/20507-3238-22874-1-red-sonja.jpg",
//       "year": "1983",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Red Sonja: Scavenger Hunt",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74848/1530542-red_sonja_scavenger_hunt.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Sonja: The Movie",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1252875-red_sonja___the_movie_v1_001.jpg",
//       "year": "1985",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Red Tornado",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/28097/941264-redtornadov21.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Red Tornado",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3182935-01.jpg",
//       "year": "1985",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Red Tornado: Family Reunion",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/1302700-untitled.png",
//       "year": "2010",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Red Wolf",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/11039-2579-12199-1-red-wolf.jpg",
//       "year": "1972",
//       "publisher": "Marvel",
//       "Field7": "9 Issues"
//     },
//     {
//       "title": "Red Wolf: Man Out of Time",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5286350-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "RED: Better R.E.D. Than Dead",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11120/111202288/5802869-6810442693-1",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Reign in Hell",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/933830-0.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Reign In Hell",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/574/478510-rih_01.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Reign of the Zodiac",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/64727-11159-97724-1-reign-of-the-zodiac.jpg",
//       "year": "2003",
//       "publisher": "DC Comics",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Relative Heroes",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/617268-rel1.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Ren & Stimpy Show",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3051677-ren%20%26%20stimpy%20show%20%20ash%20001%20%281992%29%20pagecover.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ren & Stimpy Show Halloween Special Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1358699-ren___stimpy_show_halloween_special_edition_v1_001.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ren & Stimpy Show Special Powdered Toastman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1364803-ren___stimpy_show_special_powdered_toastman_v1_001.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ren and Stimpy Radio Daze",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/83918/2166686-4e_84706_0_renstimpyspecial0radiodaze.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ren and Stimpy Show Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1364924-ren_and_stimpy_show_special_v1_002.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Ren and Stimpy Show Special: Sports",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3051661-ren%20%26%20stimpy%20show%20special%20-%20sports%20001%20%281995%29%20pagecover.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Requiem for Dracula",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/965154-requiemfordracula1.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Rescue",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/6063/1233810-rescue.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Resident Evil",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/275080-20304-121203-1-resident-evil.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Resurrection Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/2173048-1.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Resurrection Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/2011083-1.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "Resurrection Man",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/1993313-01.jpg",
//       "year": "1997",
//       "publisher": "DC Comics",
//       "Field7": "28 Issues"
//     },
//     {
//       "title": "Resurrection Man: A Matter of Death and Life",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3105287-02.jpg",
//       "year": "2013",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Resurrection Man: Dead Again",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2566975-__kgrhqnhje_e92cln_7lbqp5ldespg__60_57.jpg",
//       "year": "2012",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "ResurrXion Free Previews Spotlight",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5775138-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Return of the Asthma Monster",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/23221/1644222-return_of_the_asthma_monster.jpg",
//       "year": "1989",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Return of the Living Deadpool",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4774972-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Return of the Living Deadpool",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4370335-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Return of Wolverine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6850879-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Return of Wolverine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6614333-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Return of Wolverine: Director's Cut Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6659643-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Revenge of the Cosmic Ghost Rider",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7184463-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Revenge: The Secret Origin of Emily Thorne",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4071733-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Revolution",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11111/111114802/4677404-rev01-00a-cover.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Revolutionary War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4527086-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Revolutionary War: Alpha",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3556406-01a.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Revolutionary War: Dark Angel",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3572921-01a.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Revolutionary War: Death's Head II",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3635359-01a.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Revolutionary War: Knights of Pendragon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3604228-01a.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Revolutionary War: Motormouth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3690516-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Revolutionary War: Omega",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3718056-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Revolutionary War: SuperSoldiers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3664141-01a.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Revolutionary War: Warheads",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3703492-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Richard Castle's Unholy Storm",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3809638-03.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Richard Dragon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/61383-10977-94378-1-richard-dragon.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Richard Dragon, Kung Fu Fighter",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/14065/282662-2737-121664-1-richard-dragon-kung.jpg",
//       "year": "1975",
//       "publisher": "DC Comics",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "Richie Rich",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/1314108-rr1.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Riddler: Year of the Villain",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7067490-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Riftwar",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/32578/855456-riftwar_001_f_cover__2009___oddbot_dcp_.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Rima, the Jungle Girl",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/12632-2666-14175-1-rima-the-jungle-gir.jpg",
//       "year": "1974",
//       "publisher": "DC Comics",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Ringo Kid",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/9636-2477-10628-1-ringo-kid-the.jpg",
//       "year": "1970",
//       "publisher": "Marvel",
//       "Field7": "30 Issues"
//     },
//     {
//       "title": "Rio Rides Again",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67310/1277031-marvel_graphic_novel_60___rio_rides_again__29___page_1.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Rip Hunter ... Time Master",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/4795-2032-5220-1-rip-hunter---time-.jpg",
//       "year": "1961",
//       "publisher": "DC Comics",
//       "Field7": "29 Issues"
//     },
//     {
//       "title": "Rise of Incarnates",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/127706/4036490-rise%20of%20incarnates%20001-000.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "17 Issues"
//     },
//     {
//       "title": "Rise of the Black Panther",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6538893-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Rise of the Black Panther",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6213874-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Road Force: Wrecked & Ruined",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/110802/4738516-001.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Road to Oz",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2572899-prev_img.jpg",
//       "year": "2012",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Road to War of Kings",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4609154-01.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Robert E. Howard's Conan the Barbarian",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/74848/1530536-conan_red.jpg",
//       "year": "1983",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Robin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/34078-4975-38052-1-robin.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "185 Issues"
//     },
//     {
//       "title": "Robin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/30333-4563-33743-1-robin.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Robin 101",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/127706/4083299-p00001.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Robin 3000",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/32782-4751-36584-1-robin-3000.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Robin 80-Page Giant",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/58436/1127257-robin_80pagegiant_1_00.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Robin Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/25855/732394-_bnbnnewbgk___kgrhgookigejllmbzrpbjnel_miyw___1.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Robin Archives",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1220484-3965_400x600.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Robin Days of Fire and Madness",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/25855/1283701-5523_400x600.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Robin Hood Tales",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/27783/820803-robinhood_1.jpg",
//       "year": "1956",
//       "publisher": "DC Comics",
//       "Field7": "14 Issues"
//     },
//     {
//       "title": "Robin II: The Joker's Wild!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/56044/1811324-robin_2_the_joker_s_wild__1991__1b.jpeg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Robin III: Cry of the Huntress",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1237964-11561_20051122212806_large.jpg",
//       "year": "1992",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Robin Plus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/50638/993011-38135_20081107055406_large.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Robin Rises: Alpha",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/4288964-robin1a.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Robin Rises: Omega",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/66303/3960053-robin%20rises.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Robin War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5147229-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Robin War",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4934606-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Robin, The Boy Wonder: A Celebration of 75 Years",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4558183-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Robin: A Hero Reborn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/251224-20003-119455-1-robin-a-hero-reborn.jpg",
//       "year": "1991",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Robin: Flying Solo",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/25855/1282019-1306_400x600.jpg",
//       "year": "1994",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Robin: Reborn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4889076-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Robin: Search of a Hero",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9116/916298-0.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Robin: Solo",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5559784-03.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Robin: Son of Batman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4628891-01.jpg",
//       "year": "2015",
//       "publisher": "DC Comics",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "Robin: Son of Batman: Dawn of the Demons",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5421901-02.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Robin: Son of Batman: Year of Blood",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5109019-01.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Robin: Teenage Wasteland",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/25855/1280202-8199_400x600.jpg",
//       "year": "2007",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Robin: The Big Leagues",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/25855/1280194-8829_400x600.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Robin: The Teen Wonder",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1630641-171194_20090528215145_large.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Robin: To Kill A Bird",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/25855/1283671-4936_400x600.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Robin: Tragedy & Triumph",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/14/148518/4137998-zzz103231_20130108031454_large.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Robin: Triumphant",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5099985-02.jpg",
//       "year": "2016",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Robin: Turning Point",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5960926-04.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Robin: Unmasked!",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/25855/1282028-2396_400x600.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Robin: Violent Tendencies",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1806622-robin_violent_tendencies.jpeg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Robin: Wanted",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/25855/1280226-robin_wanted_tp.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Robin: War of the Dragons",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6203593-05.jpg",
//       "year": "2017",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Robin: Year One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/1878361-robinyearone.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Robin: Year One",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/51476-9134-68422-1-robin-year-one.jpg",
//       "year": "2000",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Robin: Year One: The Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6289364-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Robin/Argent: Double-Shot",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/11307/449806-robin___argent_double_shot_1_00.jpg",
//       "year": "1998",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Robin/Batgirl: Fresh Blood",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/25855/1283642-4209_400x600.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Robin/Spoiler Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/410636-21780-131348-1-robin-spoiler-specia.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "RoboCop",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/386616-21547-130134-1-robocop-magazine.jpg",
//       "year": "1987",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "RoboCop",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38826/845154-00000000.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "23 Issues"
//     },
//     {
//       "title": "RoboCop",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3755070-01.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "RoboCop 2",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/62631-4419-95627-1-robocop-2.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "RoboCop 2",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/2609406-robocop_2_001_001__1990__pagecover.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Robotech Defenders",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/22525-3457-25133-1-robotech-defenders.jpg",
//       "year": "1985",
//       "publisher": "DC Comics",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Robotech: Prelude to the Shadow Chronicles",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/65600/1797466-robotech_prelude_to_the_shadow_chronicles_001.jpg",
//       "year": "2005",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Robotix",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/26751/616470-robotix1.jpg",
//       "year": "1986",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Rocket",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5843165-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Rocket Raccoon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/40/3928974-0%20rocrac2014001_dc11.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "11 Issues"
//     },
//     {
//       "title": "Rocket Raccoon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5613469-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Rocket Raccoon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2193392-01.jpg",
//       "year": "1985",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Rocket Raccoon & Groot",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4978953-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "Rocket Raccoon & Groot: Civil War II",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5523056-02.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Rocket Raccoon & Groot: Tricks of the Trade",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5337567-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Rocket Raccoon and Groot Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4093825-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Rocket Raccoon Special Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/9/98202/3935406-rocket%20raccoon%20%282014%29%20special%20edition.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Rocket Raccoon: A Chasing Tale",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4390392-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Rocket Raccoon: Free Comic Book Day",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3797222-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Rocket Raccoon: Grounded",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5996345-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Rocket Raccoon: Guardian of the Keystone Quadrant",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2010348-rr__gotkq.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Rocket Raccoon: Storytailer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4711806-02.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Rocket Raccoon: Tales From Half-World",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3274841-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Rocket: The Blue River Score",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6184524-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Rocko's Modern Life",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/134156-18682-110387-1-rocko-s-modern-life.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Roger Zelazny's Amber: The Guns of Avalon",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/81997/1697759-roger_zelazny_s_amber____the_guns_of_avalon_v2__1__1996____page_1.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Roger Zelazny's Nine Princes in Amber",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/8/81997/1697752-roger_zelazny_s_amber____nine_princes_in_amber_v1__1__1996____page_1.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "3 Issues"
//     },
//     {
//       "title": "Rogue",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/2515481-01.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Rogue",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15977/421760-211%20rogue%201.jpg",
//       "year": "2001",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Rogue",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/10135/230382-19612-117667-2-rogue.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Rogue",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124153/2778597-roguetpbcovercv.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Rogue & Gambit",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6213875-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Rogue & Gambit: Ring of Fire",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6497399-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Rogue: Forget-Me-Not",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1053819-rogue2.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Rogue: Going Rogue",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4346337-01.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Rogue: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4763043-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Rogues Gallery",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3047512-rogues%20gallery%20001%20%281996%29%20pagecover.jpg",
//       "year": "1996",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Rom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/17893-3010-19997-1-rom.jpg",
//       "year": "1979",
//       "publisher": "Marvel",
//       "Field7": "75 Issues"
//     },
//     {
//       "title": "Rom Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/20265-3148-22606-1-rom-annual.jpg",
//       "year": "1982",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Romance Trail",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47362-1243-56744-1-romance-trail.jpg",
//       "year": "1949",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Ronin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38826/1027659-0ronin.jpg",
//       "year": "1987",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ronin",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/20860-3201-23268-1-ronin.jpg",
//       "year": "1983",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Ronin: Deluxe Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/4171045-01.jpg",
//       "year": "2014",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Roots of the Swamp Thing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/64770/2170015-roots_swamp_thing.jpg",
//       "year": "2011",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Roots of the Swamp Thing",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/24203-3615-26954-1-roots-of-the-swamp-t.jpg",
//       "year": "1986",
//       "publisher": "DC Comics",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Rose & Thorn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/63322-11032-96318-1-rose-and-thorn.jpg",
//       "year": "2004",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Royals",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5786794-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Royals - Marvel Legacy Primer Pages",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6059547-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Royals: Beyond Inhuman",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6080314-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Royals: Judgment Day",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6254373-02.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Rudolph the Red-Nosed Reindeer",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/47368-1327-56750-1-rudolph-the-red-nose.jpg",
//       "year": "1950",
//       "publisher": "DC Comics",
//       "Field7": "13 Issues"
//     },
//     {
//       "title": "Ruins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6676536-3638387240-73027.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Ruins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3374748-7934452847-33738.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ruins of Ravencroft: Carnage",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7204794-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ruins of Ravencroft: Dracula",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7219909-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ruins of Ravencroft: Sabretooth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7212656-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Runaways",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4627357-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Runaways",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/528267-0000.jpg",
//       "year": "2003",
//       "publisher": "Marvel",
//       "Field7": "18 Issues"
//     },
//     {
//       "title": "Runaways",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/30497/1110756-74219_20080223204823_large.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "0 Issues"
//     },
//     {
//       "title": "Runaways",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/6177668-runaways%20v2%201a.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "30 Issues"
//     },
//     {
//       "title": "Runaways",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6050299-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "29 Issues"
//     },
//     {
//       "title": "Runaways",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1124/85143-18055-105744-1-runaways-vol-1-hardc.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "Runaways",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1124/85141-18060-105748-1-runaways.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Runaways",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3182956-01.jpg",
//       "year": "2008",
//       "publisher": "Marvel",
//       "Field7": "14 Issues"
//     },
//     {
//       "title": "Runaways by Brian K. Vaughan & Adrian Alphona Omnibus",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6458038-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Runaways by Rainbow Rowell & Kris Anka: Best Friends Forever",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6651000-02.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Runaways by Rainbow Rowell & Kris Anka: That Was Yesterday",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6883282-03.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Runaways by Rainbow Rowell: But You Can't Hide",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7109891-04.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Runaways by Rainbow Rowell: Find Your Way Home",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6385014-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Runaways Halloween Comic Fest 2017",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6125225-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Runaways Saga",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/631466-300px_runaways_saga_1.jpg",
//       "year": "2007",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Runaways: Battleworld",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4945089-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Runaways: Dead End Kids",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3232171-01.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Runaways: Dead Wrong",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3856174-09.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Runaways: Escape To New York",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1280529-escape_to_ny.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Runaways: Homeschooling",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4115837-11.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Runaways: Live Fast",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031833-01.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Runaways: Parental Guidance",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4031831-01.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Runaways: Pride and Joy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11/119711/2742298-51kwgjtw3kl._sl500_.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Runaways: Pride and Joy",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/960602-run.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Runaways: Rock Zombies",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3984688-10.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Runaways: Teenage Wasteland",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/1766158-teenage_wasteland.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Runaways: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7049838-6142353315-79336.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Runaways: The Good Die Young",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/54649/1090815-runaways_good_die_young.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Runaways: True Believers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/15776/1280860-ratb1a.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Rune vs. Venom",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/101002-18335-107434-1-rune-vs-venom.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Ruse: The Victorian Guide To Murder",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5074000-01.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Rush City",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/70196/1296947-rush_city___01__2006____was_dcp___01_.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "RWBY",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7100356-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "RWBY",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7052919-01.jpg",
//       "year": "2019",
//       "publisher": "DC Comics",
//       "Field7": "11 Issues"
//     },
//     {
//       "title": "S.H.I.E.L.D.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4299801-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "S.H.I.E.L.D.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/5344/1178102-shield_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "S.H.I.E.L.D.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/47589/1838765-shieldv2n1.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "S.H.I.E.L.D. by Hickman & Weaver",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6438983-05.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "2 Issues"
//     },
//     {
//       "title": "S.H.I.E.L.D. by Hickman & Weaver: The Human Machine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6527898-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "S.H.I.E.L.D. by Hickman & Weaver: The Rebirth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6406901-01.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "S.H.I.E.L.D. by Lee & Kirby: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4836980-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "S.H.I.E.L.D. Director's Cut",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/3/38919/1349646-shield_directors_cut_1.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "S.H.I.E.L.D. Origins",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3426357-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "S.H.I.E.L.D.: Architects of Forever",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/68811/2062691-shield.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "S.H.I.E.L.D.: Hydra Reborn",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5996346-01.jpg",
//       "year": "2017",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "S.H.I.E.L.D.: Infinity",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6527853-1391589262-17740.jpg",
//       "year": "2011",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "S.H.I.E.L.D.: Perfect Bullets",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4660073-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "S.H.I.E.L.D.: Secret History",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4998241-01.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "S.H.I.E.L.D.: The Complete Collection",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4838307-01.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "S.H.I.E.L.D.: The Man Called D.E.A.T.H.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/5022622-02.jpg",
//       "year": "2016",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "S.T.A.R. Corps",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/60408/1147956-star_corps_001_00.jpg",
//       "year": "1993",
//       "publisher": "DC Comics",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "S.W.O.R.D.",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/5/52045/1023218-prv3772_cov.jpg",
//       "year": "2010",
//       "publisher": "Marvel",
//       "Field7": "5 Issues"
//     },
//     {
//       "title": "Sable & Fortune",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/1867/106067-18449-108262-1-sable--fortune.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Sabretooth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/40136/889380-000___cover.jpg",
//       "year": "1998",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Sabretooth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/33754-5041-37685-1-sabretooth.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Sabretooth",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/1/10390/452099-3718_2.jpg",
//       "year": "2004",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Sabretooth Classic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/4/40136/887937-001.jpg",
//       "year": "1994",
//       "publisher": "Marvel",
//       "Field7": "15 Issues"
//     },
//     {
//       "title": "Sabretooth Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/229/98977-18269-106977-2-sabretooth-special.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Sabretooth: Death Hunt",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2028481-sbt__dh.jpg",
//       "year": "1995",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Sabretooth: Mary Shelley Overdrive",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/64867-11173-97864-1-sabretooth-mary-she.jpg",
//       "year": "2002",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Sabretooth: Open Season",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/2/22664/2027350-sbt__os.jpg",
//       "year": "2005",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Sachs and Violens",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/7/71975/2063149-sachs_and_violens.jpg",
//       "year": "2006",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Saga of Squadron Supreme",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/102984-18383-107769-1-squadron-supreme-sag.jpg",
//       "year": "2006",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Saga of the Original Human Torch",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/29376-4420-32642-1-saga-of-the-original.jpg",
//       "year": "1990",
//       "publisher": "Marvel",
//       "Field7": "4 Issues"
//     },
//     {
//       "title": "Saga of the Sub-Mariner",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/27329-4067-30317-1-saga-of-the-sub-mari.jpg",
//       "year": "1988",
//       "publisher": "Marvel",
//       "Field7": "12 Issues"
//     },
//     {
//       "title": "Saga of the Swamp Thing Special Convention Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/6392100-sag1.jpg",
//       "year": "2009",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Sales To Astonish: The Comic Book, Autumn 1992",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1301120-sales_to_astonish_the_comic_book_autumn_v1__1___page_1.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Sales To Astonish: The Comic Book, Autumn 1993",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3119706-sales%20to%20astonish%20-%20the%20comic%20book%20v1992%20002%20%281993%29%20pagecover.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Sales To Astonish: The Comic Book, Summer 1992",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67047/1301110-sales_to_astonish_the_comic_book_summer_v1__1___page_1.jpg",
//       "year": "1992",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Sales To Astonish: The Comic Book, Winter 1993",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3119707-sales%20to%20astonish%20-%20the%20comic%20book%20v1992%20003%20%281993%29%20pagecover.jpg",
//       "year": "1993",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Salute",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/7066974-sal1.jpg",
//       "year": "1943",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Salvation Run",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/9241/527568-0002.jpg",
//       "year": "2008",
//       "publisher": "DC Comics",
//       "Field7": "7 Issues"
//     },
//     {
//       "title": "Samurai Jack Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/121936-18590-109667-1-samurai-jack-special.jpg",
//       "year": "2002",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "San Francisco Giants: Super Heroes Collector's Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/3125/3521158-san1.jpg",
//       "year": "2001",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Sān Huáng Dòu Zhànshì",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/77/7041210-warriors_of_three_sovereigns_vol_1_1.jpg",
//       "year": "2018",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Sasquatch Detective Special",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6722382-01.jpg",
//       "year": "2018",
//       "publisher": "DC Comics",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Saturday Morning The Comic",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3120614-saturday%20morning%20the%20comic%20v1996%20001%20%281996%29%20pagecover.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Savage Avengers",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/6913173-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "10 Issues"
//     },
//     {
//       "title": "Savage Avengers Annual",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7125474-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Savage Avengers: City of Sickles",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7144095-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Savage Fists Of Kung Fu",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/12/124613/3120616-savage%20fists%20of%20kung%20fu%20v1975%20001%20%281975%29%20pagecover.jpg",
//       "year": "1975",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Savage Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4093893-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "6 Issues"
//     },
//     {
//       "title": "Savage Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/11112/111121457/5255308-one%20shot%20savage%20hulk%20v1996%20%231%20-%20courtroom%20sequence%20%281996_1%29%20-%20page%201.jpg",
//       "year": "1996",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Savage Hulk: Down To the Crossroads",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4563142-02.jpg",
//       "year": "2015",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Savage Hulk: The Man Within",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4270222-01.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Savage She-Hulk",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7132812-1234516265-80902.jpg",
//       "year": "2009",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Savage Sword of Conan: Conan the Gambler",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7212747-01.jpg",
//       "year": "2020",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Savage Sword of Conan: The Cult of Koga Thun",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7016207-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Savage Sword of Conan: The Cult of Koga Thun Black & White Edition",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/7016248-01.jpg",
//       "year": "2019",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Savage Tales",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/0/4/23312-3505-25990-1-savage-tales.jpg",
//       "year": "1985",
//       "publisher": "Marvel",
//       "Field7": "8 Issues"
//     },
//     {
//       "title": "Savage Wolverine",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3504261-01a.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "23 Issues"
//     },
//     {
//       "title": "Savage Wolverine: Hands On A Dead Body",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3626514-02.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Savage Wolverine: Kill Island",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3566083-01.jpg",
//       "year": "2013",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Savage Wolverine: The Best There Is",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/4245139-04.jpg",
//       "year": "2014",
//       "publisher": "Marvel",
//       "Field7": "1 Issues"
//     },
//     {
//       "title": "Savage Wolverine: Wrath",
//       "img": "https://comicvine1.cbsistatic.com/uploads/scale_small/6/67663/3937919-03.jpg",
//       "year": "2014",
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