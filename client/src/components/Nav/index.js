// import React from "react";
import React, { useState } from "react";

import Searchbar from "../Searchbar";
// import Signinmodal from "../Signinmodal";
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
// import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
import ComicbookpagesModified from "../../images/ComicbookpagesModified.jpg";
import "typeface-roboto";
// import Modal from "@material-ui/core/Modal";
// import Input from "@material-ui/core/Input";
// import useAxios from "axios-hooks";
// import Axios from "axios";
import Cookies from 'js-cookie';
import logo from "../../images/gndblogo5.png"
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import AccountCircle from '@material-ui/icons/AccountCircle';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormGroup from '@material-ui/core/FormGroup';
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

 const [anchorEl, setAnchorEl] = React.useState(null);
 const open = Boolean(anchorEl);
 const handleMenu = event => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};
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
    <div className={classes.root}>
      {/* <AppBar position="static" className={classes.root}> */}
      <AppBar position="static">
        <Toolbar>
        <Link to={"/home"}>

        <Avatar alt="Remy Sharp" src={logo} className={classes.large}/>
        </Link>
        <Typography variant="h6" className={classes.title}>
        <Searchbar />
        </Typography>
          <div>
          <IconButton edge="start" className={classes.menuButton}
              aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
           color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" className={classes.title}>
            News
          </Typography> */}

          <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><Link to={"/home"}>Home</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to={"/userprofile"}>Profile  </Link></MenuItem>
                {/* <MenuItem onClick={handleClose}><Link to={"/blog"}>Blog</Link></MenuItem> */}
                <MenuItem onClick={handleClose}><Link to={"/gamepage"}>Games</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to={"/more"}>Find More</Link></MenuItem>
                <MenuItem onClick={handleClose}><a href="/" onClick={logout}>Logout</a></MenuItem>

             
             
              </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Nav;
