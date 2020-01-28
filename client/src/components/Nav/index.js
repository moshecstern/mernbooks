// import React from "react";
import React, { useState } from "react";

import Searchbar from "../Searchbar";
import Signinmodal from "../Signinmodal";
import { Link } from "react-router-dom";
import {
  TextField,
  Button,
  form,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import ComicbookpagesModified from "../../images/ComicbookpagesModified.jpg";
import "typeface-roboto";
import Modal from "@material-ui/core/Modal";
import Input from "@material-ui/core/Input";
import useAxios from "axios-hooks";
import Axios from "axios";
import Cookies from 'js-cookie';
const jwtDecode = require('jwt-decode');

const useStyles = makeStyles(theme => {
  return {
    root: {
      backgroundColor: "#D92B6B"
    },
    title: {
      backgroundImage: `url(${ComicbookpagesModified})`,
      padding: theme.spacing(15, 0, 15, 0)
    },
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  };
});

const Nav = (props) => {
 const classes = useStyles();
 const [logIn, SetLogIn] = useState(logIn)
  // useEffect(() => {
  const checklogin = ()=>{
    if(props.location.state && props.location.state.loggedIn){
    SetLogIn(true);
  }else if(Cookies.get("JWT")){
    SetLogIn(true);
  }
}
function logout () {
  // this.setState({loggedIn:false})
  SetLogIn(false)
  localStorage.clear('JWT');
  Cookies.remove('JWT');
}
  return (
    <Grid container direction="column">
        <Grid container direction="row">
      <Grid container item justify="space-between" className={classes.root}>
        <Searchbar />
        <Grid direction="row" item justify="flex-end">
        {/* <ul>
          <li><Link to={"/"}>Home  </Link></li>
          <li><Link to={"/gamepage"}>Games  </Link></li>
        </ul> */}
{/* {!logIn ? true : ( */}
  <Grid item><a href="/" onClick={logout}>logout</a></Grid>
{/* )} */}

        <Grid item><Link to={"/home"}>Home  </Link></Grid>
        <Grid item><Link to={"/gamepage"}>Games  </Link></Grid>
        <Grid item><Link to={"/userprofile"}>User Profile  </Link></Grid>
        </Grid>
        </Grid>
        {/* <Signinmodal /> */}

      </Grid>
    </Grid>
  );
};

export default Nav;
