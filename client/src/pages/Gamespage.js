import React from "react";
import Notes from "../components/Notes";
import GameTrivia from "../components/GameTrivia"
import CharactersBoard from "../components/CharactersBoard";
import { Link } from "react-router-dom";
// import {memoryimage} from "../../public/images/reactmemorygame.png" 
// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
// import useAxios from "axios-hooks";
// import { makeStyles } from "@material-ui/styles";


const Gamepage = () => {

  
  return (
 <div className="container">
 <div className="row">

    <div className="card">
  <img src="../images/reactmemorygame.png" className="card-img-top img-responsive" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Memory Clicky Game</h5>
    <p className="card-text">See if you can click all superheroes without clicking twice</p>
    {/* <p className="card-text">Save your scores</p> */}
    {/* <a href="" className="btn btn-primary">Go to game</a> */}
<p><Link to={"/gamepage/memorygame"}>Memory game</Link></p>
  </div>
</div>
    <div className="card">
  <img src="../images/triviagamebackground.jpg" className="card-img-top img-responsive" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Trivia Game</h5>
    <p className="card-text">Test your superhero knowledge</p>
    {/* <p className="card-text">Save your scores</p> */}
    {/* <a href="" className="btn btn-primary">Go to game</a> */}
<p><Link to={"/gamepage/triviagame"}>Trivia Game</Link></p>
  </div>
</div>


{/* <CharactersBoard /> */}
      {/* <br /> */}
 </div>
 <br />
 <br />
      <Notes />
     </div>
  );
};

export default Gamepage