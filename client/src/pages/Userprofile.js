import React, { useState } from "react";
// import REACT_APP_googlebooks_APP_API_KEY from "dotenv";
// import Superheroapi from "../components/Superheroapi";
// import { List, ListItem } from "../components/List";
// import Linkpage from "../components/Linkpage";
import Userprofileco from "../components/Userprofile";
import SeriesAll from "../components/SeriesAll";
import Userblog from "../components/blog/Userblog"
// import YelpAPI from "../components/YelpAPI";
// import DisplayallSeries from "../components/DisplayallSeries"
// import Imageuploader from "../components/imageuploader";
import Cookies from 'js-cookie';
import {
  Grid,
  Typography,
  Button,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
// import useAxios from "axios-hooks";
// import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import FolderIcon from "@material-ui/icons/Folder";
import Modal from "@material-ui/core/Modal";
import MemHighScores from "../components/Memorygamemain/HighScore"
import TriviaScores from "../components/GameTrivia/UserHighScore"
import ProfileCustom from "../components/Userprofile/Userprofilecustom"
// import Userblog from "../components/"
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
    // flexGrow: "100%",
    flexGrow: 1,
    maxWidth: 360,
    backgroundColor: "#fffaf0"
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
    padding: theme.spacing(2),
    textAlign: 'center',
    // padding: theme.spacing(2, 4, 3)
  }
}));

const Userprofile = props => {
  const [logIn, SetLogIn] = useState(logIn)
  // useEffect(() => {
  const checklogin = ()=>{
    if(props.location.state && props.location.state.loggedIn){
    SetLogIn(true);
  }else if(Cookies.get("JWT")){
    SetLogIn(true);
  }
}
  return (
    <>
{/* <Imageuploader /> */}
      {/* <YelpAPI /> */}

<Grid
  container
  direction="row"
  justify="space-between"
  alignItems="flex-start"
>
{/* <Grid
  // container
  direction="column"
  justify="center"
  alignItems="flex-start"
><ProfileCustom /></Grid> */}
{/* <Grid
  // container
  direction="column"
  justify="center"
  alignItems="center" */}
{/* > */}
<ProfileCustom />
<TriviaScores /> 
<MemHighScores />  
</Grid>
{/* add blog here */}
{/* // </Grid> */}
{/* <Grid
  // container
  direction="column"
  justify="center"
  alignItems="flex-end"
> */}
<Userblog />
<Userprofileco />
{/* // </Grid> */}
{/* // </Grid> */}
<br />
    <SeriesAll />
    </>
  );
};
export default Userprofile;