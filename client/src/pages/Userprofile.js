import React, { useState } from "react";
import REACT_APP_googlebooks_APP_API_KEY from "dotenv";
import Superheroapi from "../components/Superheroapi";
import { List, ListItem } from "../components/List";
import Linkpage from "../components/Linkpage";
import Userprofileco from "../components/Userprofile";
import SeriesAll from "../components/SeriesAll";
import DisplayallSeries from "../components/DisplayallSeries"
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
<Grid
  container
  direction="row"
  justify="space-evenly"
  alignItems="center"
><Userprofileco /></Grid>
      

    <SeriesAll />
    </>
  );
};

export default Userprofile;