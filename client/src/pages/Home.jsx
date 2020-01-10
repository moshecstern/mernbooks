import React from "react";
import Notes from "../components/Notes";
import CharactersBoard from "../components/CharactersBoard";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
// import useAxios from "axios-hooks";
// import { makeStyles } from "@material-ui/styles";


const Home = () => {

  
  return (


<div>
<CharactersBoard />
      <br />
      <Notes></Notes>
    </div>
  );
};

export default Home;
