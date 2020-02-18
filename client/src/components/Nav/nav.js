import React, { useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
// import MoreIcon from "@material-ui/icons/MoreVert";
import logo from "../../images/gndblogo5.png"
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MoreIcon from '@material-ui/icons/More';
import {
    TextField,
    Button,
    form,
    Grid,
    Avatar,
    Typography
  } from "@material-ui/core";
  import Searchbar from "../Searchbar";
const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

export default function PrimarySearchAppBar(props) {
    const [logIn, SetLogIn] = useState(logIn)
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
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = event => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link to={"/home"}>Home</Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to={"/marketplace"}>Marketplace</Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to={"/more"}>Features</Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link to={"/gamepage"}>Games</Link>
      </MenuItem>
      {/* <MenuItem onClick={handleClose}><Link to={"/blog"}>Blog</Link></MenuItem> */}
      <MenuItem onClick={handleMenuClose}>
        <Link to={"/userprofile"}>Profile </Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <a href="/" onClick={logout}>
          Logout
        </a>
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
            {/* <MenuItem onClick={handleMobileMenuClose}><Link to={"/home"}>Home</Link></MenuItem> */}
                {/* <MenuItem onClick={handleMobileMenuClose}><Link to={"/userprofile"}>Profile  </Link></MenuItem> */}
                {/* <MenuItem onClick={handleClose}><Link to={"/blog"}>Blog</Link></MenuItem> */}
                {/* <MenuItem onClick={handleMobileMenuClose}><Link to={"/gamepage"}>Games</Link></MenuItem> */}
                {/* <MenuItem onClick={handleMobileMenuClose}><Link to={"/more"}>Features</Link></MenuItem> */}
                {/* <MenuItem onClick={handleMobileMenuClose}><a href="/" onClick={logout}>Logout</a></MenuItem> */}

                {/* <Link to={"/home"}><MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit"><Badge// badgeContent={4}
            color="secondary">
            <logo />
          </Badge></IconButton><p>Home</p></MenuItem></Link> */}
          <Link to={"/home"}>
          <Avatar alt="Remy Sharp" src={logo} className={classes.large}/>
          </Link>
<Link to={"/more"}><MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge
        //    badgeContent={4}
           color="secondary">
            <MoreIcon />
          </Badge>
        </IconButton>
        <p>Features</p>
      </MenuItem></Link>
      <Link to={"/marketplace"}>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge 
        //   badgeContent={11} 
          color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Marketplace</p>
      </MenuItem>
      </Link>
                <Link to={"/gamepage"}><MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit"><Badge// badgeContent={4}
            color="secondary">
            <SportsEsportsIcon />
          </Badge></IconButton><p>Games</p></MenuItem></Link>
      <Link to={"/userprofile"}>
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      </Link>
                <Link to={"/"}><MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit"><Badge// badgeContent={4}
            color="secondary">
            <ExitToAppIcon />
          </Badge></IconButton><p>Logout</p></MenuItem></Link>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleProfileMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Link to={"/home"}>
<Avatar alt="Remy Sharp" src={logo} className={classes.large}/>
</Link>
          {/* <Typography className={classes.title} variant="h6" noWrap>
            Material-UI
          </Typography> */}
          <div className={classes.search}>
            {/* <div className={classes.searchIcon}>
              <SearchIcon />
            </div> */}
            {/* <InputBase
              placeholder="Search Any Character"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ "aria-label": "search" }}
            /> */}
            <Searchbar />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge
            //    badgeContent={4}
                color="secondary">
                <Link to={"/more"}>
                <MoreIcon />
                </Link>
              </Badge>
            </IconButton>
            <IconButton aria-label="Marketplace" color="inherit">
              <Badge
            //    badgeContent={17}
                color="secondary">
                <Link to={"/marketplace"}>
                <ShoppingCartIcon />
                </Link>
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
            //   onClick={handleProfileMenuOpen}
              color="inherit"
            >
            <Link to={"/userprofile"}>
              <AccountCircle />
              </Link>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
