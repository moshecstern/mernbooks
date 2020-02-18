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
// import { makeStyles } from "@material-ui/core/styles";
// import FolderIcon from "@material-ui/icons/Folder";
// import Modal from "@material-ui/core/Modal";
import MemHighScores from "../components/Memorygamemain/HighScore"
import TriviaScores from "../components/GameTrivia/UserHighScore"
import ProfileCustom from "../components/Userprofile/Userprofilecustom"
import Mycart from "../components/Nmarketplace/Mycart"
import Productsbought from "../components/Nmarketplace/productsbought"
// import Mycart from "../components/Nmarketplace/Mycart"
// import Userblog from "../components/"
// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }
// function getModalStyle() {
//   const top = 50;
//   const left = 50;
//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`
//   };
// }

// const useStyles = makeStyles(theme => ({
//   root: {
//     // flexGrow: "100%",
//     flexGrow: 1,
//     maxWidth: 360,
//     backgroundColor: "#fffaf0"
//   },
//   demo: {
//     backgroundColor: theme.palette.background.paper
//   },
//   title: {
//     // margin: theme.spacing(4, 0, 2),
//     // height: theme.spacing(5),
//     backgroundColor: "#F2F2F2",
//     textAlign: "center"
//   },
//   volumes: { minWidth: "400px" },
//   paper: {
//     position: "absolute",
//     width: "auto",
//     backgroundColor: "#D9D9D9",
//     border: "2px solid #000",
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     // padding: theme.spacing(2, 4, 3)
//   }
// }));

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
const [selectedDashboardB, setSelectedDashboardB] = useState('profile')
  return (
    <>
{/* <Imageuploader /> */}
      {/* <YelpAPI /> */}
      <Button onClick={(e)=> setSelectedDashboardB("profile")}>Profile</Button>
      <Button onClick={(e)=> setSelectedDashboardB("mybooks")}>My Books</Button>

        {/* <Button onClick={(e)=> setSelectedDashboardB("products")}>Products</Button>
        <Button onClick={(e)=> setSelectedDashboardB("cart")}>My Cart</Button> */}
        <Button onClick={(e)=> setSelectedDashboardB("scores")}>My Scores</Button>
        <Button onClick={(e)=> setSelectedDashboardB("blogs")}>My Blogs</Button>
        <Button onClick={(e)=> setSelectedDashboardB("history")}>My PurchaseHistory</Button>
        {/* <Button onClick={(e)=> setSelectedDashboardB("favcharacters")}>Favorite Characters</Button>
        <Button onClick={(e)=> setSelectedDashboardB("tvseries")}>TV Series</Button>
        <Button onClick={(e)=> setSelectedDashboardB("storyarcs")}>Story Arcs</Button>
        <Button onClick={(e)=> setSelectedDashboardB("series")}>Series</Button>
        <Button onClick={(e)=> setSelectedDashboardB("volumes")}>Volumes</Button>
        <Button onClick={(e)=> setSelectedDashboardB("concepts")}>Concepts</Button> */}




<Grid
  container
  direction="row"
  justify="space-evenly"
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
{selectedDashboardB === 'profile' && <ProfileCustom />}


{selectedDashboardB === 'mybooks' && <Userprofileco />}
{selectedDashboardB === 'scores' && 
<div><TriviaScores /> 
<MemHighScores /> </div>}
{selectedDashboardB === 'blogs' && <Userblog /> }
{selectedDashboardB === 'history' && <Productsbought /> }
 
</Grid>
{/* add blog here */}
{/* // </Grid> */}
{/* <Grid
  // container
  direction="column"
  justify="center"
  alignItems="flex-end"
> */}


{/* // </Grid> */}
{/* // </Grid> */}
{/* <br />
    <SeriesAll /> */}
    </>
  );
};
export default Userprofile;