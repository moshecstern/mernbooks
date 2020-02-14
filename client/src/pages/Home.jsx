// import React from "react";
import Notes from "../components/Notes";
import CharactersBoard from "../components/CharactersBoard";
// import API from "../utils/API";
import { Link } from "react-router-dom";
// import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
// import useAxios from "axios-hooks";
// import { makeStyles } from "@material-ui/styles";
import React, { useState, useEffect } from 'react';
import {Redirect} from "react-router-dom"
import Cookies from 'js-cookie';
import axios from "axios";
import HomeNavLayout from "../components/HomeNavLayout"
import Allblogs from "../components/blog/Allblogs"
import YoutubeAPI from "../components/Youtubeapi"
// function FriendStatus(props) {
//   const [isOnline, setIsOnline] = useState(null);

//   useEffect(() => {
//     function handleStatusChange(status) {
//       setIsOnline(status.isOnline);
//     }

//     ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
//     // Specify how to clean up after this effect:
//     return function cleanup() {
//       ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
//     };
//   });

//   if (isOnline === null) {
//     return 'Loading...';
//   }
//   return isOnline ? 'Online' : 'Offline';
// }

function Home (props) {
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


<div>
{/* <HomeNavLayout />
<br /> */}
<CharactersBoard props={props}/>
<div className="text-center"><h2><Link to={"/more"}>Search Series through our extensive database & so much more click here </Link> </h2></div>
      <br />
      <YoutubeAPI />
      <Allblogs />
        <br />

      <Notes props={props}/>
    </div>
  );
};

export default Home;
