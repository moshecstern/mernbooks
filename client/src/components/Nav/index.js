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
  Avatar,
  Typography
} from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ComicbookpagesModified from "../../images/ComicbookpagesModified.jpg";
import "typeface-roboto";
import Modal from "@material-ui/core/Modal";
import Input from "@material-ui/core/Input";
import useAxios from "axios-hooks";
import Axios from "axios";
import Cookies from 'js-cookie';
import logo from "../../images/gndblogo5.png"

// if()
// const jwtDecode = require('jwt-decode');
// let accessString = localStorage.getItem('JWT')
// if(accessString == null){
//   accessString = Cookies.get("JWT");
// }

const useStyles = makeStyles(theme => {
  return {
    root: {
      backgroundImage: `url(${ComicbookpagesModified})`,
      backgroundColor: "#D92B6B",
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      // backgroundImage: `url(${ComicbookpagesModified})`,
      padding: theme.spacing(2, 0, 2, 0),
      flexGrow: 1,
    },
    paper: {
      position: "absolute",
      width: 400,
      backgroundImage: `url(${ComicbookpagesModified})`,
      // backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2),
      // padding: theme.spacing(2, 4, 3)
    },
    large: {
      width: theme.spacing(15),
      height: theme.spacing(15),
    },
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
  //   <Grid container spacing={3}>
  //   <br/>
  //       <Grid container direction="row">
  //     <Grid container justify="space-between" className={classes.root}>
  //       <Searchbar />
  //       <Grid direction="collumn" item justify="flex-end">
  // <Grid item xs={3}><a href="/" onClick={logout}>logout</a></Grid>


  //       <Grid item xs={3}><Link to={"/home"}>Home  </Link></Grid>
  //       <Grid item xs={3}><Link to={"/gamepage"}>Games  </Link></Grid>
  //       <Grid item xs={3}><Link to={"/userprofile"}>User Profile  </Link></Grid>
  //       </Grid>
  //       </Grid>
  //     </Grid>
  //   </Grid>
    <div className={classes.root}>
      {/* <AppBar position="static" className={classes.root}> */}
      <AppBar position="static">
        <Toolbar>
        <Avatar alt="Remy Sharp" src={logo} className={classes.large} />
        <Typography variant="h6" className={classes.title}>
        <Searchbar />
        </Typography>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          {/* <Typography variant="h6" className={classes.title}>
            News
          </Typography> */}
          <Typography variant="h6" className={classes.title}>

          <Link to={"/home"}>Home</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Link to={"/userprofile"}>Profile  </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Link to={"/blog"}>Blog  </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <Link to={"/gamepage"}>Games  </Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
          <a href="/" onClick={logout}>Logout</a>
          </Typography>
          {/* {!jwtDecode(accessString) ? null : (

          <Typography variant="h6" className={classes.title}>
          Welcome {jwtDecode(accessString).username}
          </Typography>
          )}
          <Button color="inherit">Login</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
