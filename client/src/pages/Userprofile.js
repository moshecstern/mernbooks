import React, { useState } from "react";
import REACT_APP_googlebooks_APP_API_KEY from "dotenv";
import Superheroapi from "../components/Superheroapi";
import { List, ListItem } from "../components/List";
import Linkpage from "../components/Linkpage";
import Userprofileco from "../components/Userprofile";
import SeriesAll from "../components/SeriesAll";
import YelpAPI from "../components/YelpAPI";
import DisplayallSeries from "../components/DisplayallSeries"
import Imageuploader from "../components/imageuploader";
import Cookies from 'js-cookie';
import {
  Grid,
  Typography,
  Button,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@material-ui/core";
import useAxios from "axios-hooks";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import FolderIcon from "@material-ui/icons/Folder";
import Modal from "@material-ui/core/Modal";
import MemHighScores from "../components/Memorygamemain/HighScore"
import TriviaScores from "../components/GameTrivia/UserHighScore"
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
    padding: theme.spacing(2, 4, 3)
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
    {/* <Linkpage props={props}>{props}</Linkpage> */}
      {/* <Superheroapi props={props}>{props}</Superheroapi> */}
 {/* <DisplayallSeries props={props}>{props}</DisplayallSeries> */}
 {/* <Grid container spacing={1}>
  <Grid container item xs={12} spacing={3}>
    <Userprofileco />
  </Grid>
  <Grid container item xs={12} spacing={3}>
  <Userprofileco />
  </Grid>
  <Grid container item xs={12} spacing={3}>
  <Userprofileco />
  </Grid>
</Grid> */}
<h2 className="text-center">Your Saved Books</h2>
<Grid
  container
  direction="row"
  justify="space-evenly"
  alignItems="baseline"
><Userprofileco /></Grid>
      {/* <YelpAPI /> */}
{/* <Imageuploader /> */}
<br />
<h2 className="text-center">Trivia Scores</h2>
<Grid
  container
  direction="row"
  justify="space-evenly"
  alignItems="baseline"
><TriviaScores /></Grid>

<br />
<h2 className="text-center">Memory Game Scores</h2>
<Grid
  container
  direction="row"
  justify="space-evenly"
  alignItems="baseline"
><MemHighScores /></Grid>
<br />
    <SeriesAll />
    </>
  );
};

export default Userprofile;