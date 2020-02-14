import React, { useState } from "react";
// import SeriesAll from "../components/SeriesAll";
// import Allblogs from "../components/blog/Allblogs"
import Notes from "../components/Notes"
import VolumeDB from "../components/VolumesDB"
// import Cookies from 'js-cookie';
import YelpAPI from "../components/YelpAPI"
// import SeriesScraper from "../components/Comicvineapi/seriesscraper"
import YoutubeAPI from "../components/Youtubeapi"
import CharactersBoard from "../components/CharactersBoard";

import {
    TextField,
    Button,
    form,
    Grid,
    Avatar,
    Typography
  } from "@material-ui/core";
const More = props => {



    const [selectedDashboard, setSelectedDashboard] = useState('VolumesByDB')

    return (
        <>
        <div className="text-center">
        <div><h2>Find More by clicking below</h2></div>
        <Button onClick={(e)=> setSelectedDashboard("Yelpcomicshops")}>Local Comic Book Shops</Button>
        <Button onClick={(e)=> setSelectedDashboard("VolumesByDB")}>Search Volumes</Button>
        {/* <Button onClick={(e)=> setSelectedDashboard("Youtube")}>Youtube</Button> */}
        <Button onClick={(e)=> setSelectedDashboard("VolumeByCharacter")}>Find Volumes By Character</Button>
</div>
{/* news */}


   {/* <YoutubeAPI /> */}

{/* <VolumeDB /> */}
 {/* <YelpAPI /> */}
{/* <Allblogs />  */}
{/* <SeriesAll /> */}
{/* <CharactersBoard props={props}/> */}
{selectedDashboard === 'Yelpcomicshops' && <YelpAPI props={props}>{props}</YelpAPI>}
{selectedDashboard === 'VolumesByDB' && <VolumeDB props={props}>{props}</VolumeDB>}
{selectedDashboard === 'Youtube' && <YoutubeAPI props={props}>{props}</YoutubeAPI>}
{selectedDashboard === 'VolumeByCharacter' && <CharactersBoard props={props}>{props}</CharactersBoard>}

<br />
        <Notes />
        
    </>
  );
}
export default More;