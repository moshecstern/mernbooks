import React, { useState } from "react";
import REACT_APP_googlebooks_APP_API_KEY from "dotenv";
import Superheroapi from "../components/Superheroapi";
import { List, ListItem } from "../components/List";
import Linkpage from "../components/Linkpage";
import Comicbookvineapi from "../components/Comicvineapi";
import DisplayallSeries from "../components/DisplayallSeries"
import ComicbookvineapiSeries from "../components/Comicvineapi/serieslist";
import ComicbookvineapiStoryArcs from "../components/Comicvineapi/storyarcs";
import Comicbookvineapiteams from "../components/Comicvineapi/teams";
import Comicbookvineapivolumes from "../components/Comicvineapi/volumes";
import Cookies from 'js-cookie';
import {
  Grid,
  Typography,
  Button,
  ListItemAvatar,
  Avatar,
  ListItemText
} from "@material-ui/core";
import useAxios from "axios-hooks";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import FolderIcon from "@material-ui/icons/Folder";
import Modal from "@material-ui/core/Modal";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: "100%",
    maxWidth: 360
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    // margin: theme.spacing(4, 0, 2),
    // height: theme.spacing(5),
    backgroundColor: "#F2F2F2",
    textAlign: "center"
  },
  volumes: { minWidth: "400px" },
  paper: {
    position: "absolute",
    width: "auto",
    backgroundColor: "#D9D9D9",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const Detail = props => {
  const [logIn, SetLogIn] = useState(logIn)
  // useEffect(() => {
  const checklogin = ()=>{
    if(props.location.state && props.location.state.loggedIn){
    SetLogIn(true);
  }else if(Cookies.get("JWT")){
    SetLogIn(true);
  }
}
const [selectedDashboard, setSelectedDashboard] = useState('character')
  return (
    <>
   {/* <Linkpage props={props}>{props}</Linkpage> */}
      {/* <Superheroapi props={props}>{props}</Superheroapi> */}
      
 <DisplayallSeries props={props}>{props}</DisplayallSeries>
 <br />
 <div><h2>Find More by clicking below</h2></div>
<Button onClick={(e)=> setSelectedDashboard("character")}>Characters</Button>
<Button onClick={(e)=> setSelectedDashboard("volumes")}>Volumes</Button>
<Button onClick={(e)=> setSelectedDashboard("teams")}>Teams</Button>
<Button onClick={(e)=> setSelectedDashboard("tvseries")}>TV Series</Button>
<Button onClick={(e)=> setSelectedDashboard("storyarcs")}>Story Arcs</Button>

{/* <Button onClick={(e)=> setSelectedDashboard("concepts")}>Concepts</Button>
<Button onClick={(e)=> setSelectedDashboard("locations")}>Locations</Button>
<Button onClick={(e)=> setSelectedDashboard("issues")}>Issues</Button>
<Button onClick={(e)=> setSelectedDashboard("videos")}>Videos</Button> */}

{/* <Button onClick={(e)=> setSelectedDashboard("movies")}>Movies</Button> */}

{selectedDashboard === 'character' && <Comicbookvineapi props={props}>{props}</Comicbookvineapi>}
{selectedDashboard === 'volumes' && <Comicbookvineapivolumes props={props}>{props}</Comicbookvineapivolumes>}
{selectedDashboard === 'teams' &&   <Comicbookvineapiteams props={props}>{props}</Comicbookvineapiteams> }
{selectedDashboard === 'tvseries' &&  <ComicbookvineapiSeries props={props}>{props}</ComicbookvineapiSeries>  }
{selectedDashboard === 'storyarcs' &&   <ComicbookvineapiStoryArcs props={props}>{props}</ComicbookvineapiStoryArcs> }

{/* {selectedDashboard === 'concepts' &&   } */}
{/* {selectedDashboard === 'locations' &&   } */}
{/* {selectedDashboard === 'issues' &&   } */}
{/* {selectedDashboard === 'videos' &&   } */}

{/* {selectedDashboard === 'movies' &&   } */}

    </>
  );
};

export default Detail;
