import React from 'react';
// import logo from './logo.svg';
import './style.css';
import Wrapper from "../MemorygameWrapper";
import SuperheroCard from "../MemorygameCard";
import Navbar from "../MemorygameNav";

import Superheros from "../../../utils/superheros.json";
import {
  Grid,
  Typography,
  Button,
  ListItemAvatar,
  Avatar,
  ListItemText
} from "@material-ui/core";
import Axios from "axios";
import Cookies from 'js-cookie';

const jwtDecode = require('jwt-decode');
let accessString = localStorage.getItem('JWT')
if(accessString == null){
  accessString = Cookies.get("JWT");
}
// client\src\superheros.json
// import Footer from "./components/Footer";

class Memorygame extends React.Component {
  state = {
    Score: 0,
    HighScore: 0,
    message: "Click a Superhero to get started!",
    NewSuperheros: [],
    Superheros: Superheros
  }
  saveHighScore = () => {
    let accessString = localStorage.getItem('JWT')
    if(accessString == null){
      accessString = Cookies.get("JWT");
    }
      Axios.post("/api/userhighscorememory", {
          userID: jwtDecode(accessString).id,
          score: this.state.HighScore
      }, {headers: { Authorization: `JWT ${accessString}` }})
      .then(res => console.log(res))
      // location.reload? to update
      .catch(err => console.log(err));
  }

  ClickedImage = id => {
    const { NewSuperheros } = this.state;
    if (NewSuperheros.includes(id)) {
      this.shuffle();
      this.resetGame(false);
    }
    else if (!NewSuperheros.includes(id)) {
      this.shuffle();
      this.setState({ Score: this.state.Score + 1 }, function () {
        console.log("line 51: the score now is " + this.state.Score)
        if (this.state.Score > this.state.HighScore) {
          this.setState({ HighScore: this.state.Score }, function () {
            if (this.state.Score === 12) {
              this.resetGame(true);
              // window.location.reload();
              console.log("reset game damnit")
            }
          })
        }
      })
      NewSuperheros.push(id);
    }
  };


  shuffle = () => {
    this.state.Superheros.sort(function () { return 0.5 - Math.random() });
  }
  //reset game function
  resetGame = (booleam) => {
    if (!booleam){
    this.setState({
      Score: 0,
      NewSuperheros: [],
      message: "OOO So close, try again!"
    })
  }else if (booleam) {
    this.setState({
      Score: 0,
      NewSuperheros: [],
      HighScore: 0,
      message: "YAY YOU WIN!!!!!!"
    })
  }
  }


  render() {

    return (
      <div className="body">
        <br></br>
        <Wrapper>
        <Navbar count={this.state.Score} highcount={this.state.HighScore} message={this.state.message}/>


          {this.state.Superheros.map((item) => (
            // {this.state.NewSuperheros.map((item, id) =>

            <SuperheroCard
              key={item.id}
              id={item.id}
              // name={item.name}
              image={item.image}
              ClickedImage={() => this.ClickedImage(item.id)}
            />
          ))}
          <Button onClick={this.saveHighScore}>Save Score</Button>

        </Wrapper>
        {/* <Footer/> */}
      </div>
    )
  }
}

export default Memorygame
