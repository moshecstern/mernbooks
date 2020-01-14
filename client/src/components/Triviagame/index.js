import React from 'react';
// import logo from './logo.svg';
import './style.css';
// import Wrapper from "../MemorygameWrapper";
// import SuperheroCard from "../MemorygameCard";
// import Navbar from "../MemorygameNav";
import Questions from "../../utils/triviagamequestions.json";
// client\src\superheros.json
// import Footer from "./components/Footer";
// import { List, ListItem } from "../List";
// import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import {
    Container,
    Grid,
    GridList,
    GridListTile,
    GridListTileBar,
    IconButton,
    Loading,
    Collapse,
    Paper,
    Typography,
    Button,
    makeStyles,
    TextField,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
  } from "@material-ui/core";


function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  function getModalStyle() {
    const top = 50;
    const left = 50;
    const width = 75;
    return {
      width:`${width}%`, 
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
class Triviagame extends React.Component {
    
    state = {
        wins: 0,
        losses: 0,
        countdown: 20,
        playingGame: true,
        unanswered: 0,
        answer:0,
        currentQuestion : 0,
        Questions: Questions,
        
    }


//     reset = () => {
//         // show start game button and reset all stats
//        this.setState({

//            wins = 0,
//            losses = 0,
//            unanswered = 0,
//            currentQuestion = 0,
//            answer=0,
//            playingGame = true
//        })
//         clearInterval(intervalId);
//         // $("#hideContent").show();
//         // $("#questions").show();
//         // $("#results").hide();
//         newSlide();
//     }
//     // function that will start countdown
//     startCountDown = () => {
//         // $("#reset").hide();
//         this.setState({countDown: 16})
//         // countDown = 16;
//         clearInterval(intervalId);
//         intervalId = setInterval(decrement, 1000);
//     }
//     // $("#reset").on("click", reset);
//     // 
//  decrement = () => {
//         if (countDown <= 0 && playingGame) {
//             clearInterval(intervalId);
//             displayResult();
//             // startCountDown();
//             setTimeout(function () {
//                 console.log("delay")
//                 if (currentQuestion > allQuestions.length - 1) {
//                     finalResults();
//                 } else {
//                     currentQuestion++;
//                     newSlide();
//                 }
//             }, 3000);
//         } else {
//             countDown--;
//         }
//         //  Show the number in the #show-number tag.
//         // $("#timeRemaining").text(countDown);
//     };

//      newSlide = () => {
//         console.log("lets see what question we are on " + currentQuestion);
//         if (currentQuestion > allQuestions.length - 1) {
//             finalResults();
//             // show game stats. and make start button visable
//         } else {
//             $("#answers").html("<div> </div>");
//             startCountDown();
//             let question = allQuestions[currentQuestion];
//             console.log(question);
//             $("#question").text(question.question);
//             for (let i = 0; i < question.answer.length; i++) {
//                 let answer = '<div id="answer' + i + '">' + question.answer[i] + '</div>';
//                 $("#answers").append(answer);
//                 // console.log("i:", i);
//                 // console.log("answer:", answer);
//                 let id = "answer" + i;
//                 // console.log("id", id);
//                 document.getElementById(id).addEventListener("click", function () {
//                     clearInterval(intervalId);
//                     checkAnswer(question.answer[i]);
//                 })
//             }
//             let rightAnswer = question.correctAnswer;
//         };
//     };
//     checkAnswer=(answer)=> {
//         // console.log('answer', answer, answer.length);
//         // console.log('correct answer', allQuestions[currentQuestion].correctAnswer, allQuestions[currentQuestion].correctAnswer.length);
//         // console.log('truth', answer == allQuestions[currentQuestion].correctAnswer);
//         if (answer == allQuestions[currentQuestion].correctAnswer) {
//             displayResult(true);
//         } else {
//             displayResult(false);
//         };
//         setTimeout(function () {
//             console.log("delay")
//             if (allQuestions.length - 1 == currentQuestion) {
//                 finalResults();
//                 // show game stats. and make start button visable
//             } else {
//                 currentQuestion++;
//                 // this is where it calling new slide even if we dont have one
//                 newSlide();
//             }
//         }, 3000);
//     };

//     displayResult=(correctAnswer) =>{
//         console.log(correctAnswer);
//         console.log("our current question is at" + currentQuestion);
//         // finalResults();
//         // }else
//         if (correctAnswer === true) {
//             // display you won
//             $("#answers").html("<h2>you know it!! " + allQuestions[currentQuestion].correctAnswer + "</h2>");
//             wins++;
//         } else if (correctAnswer === false) {
//             //display you lost
//             $("#answers").html("<h2>nopeee!! the correct answer is " + allQuestions[currentQuestion].correctAnswer + "</h2>");
//             losses++;
//             console.log("losses" + losses);
//             // }else{
//             //     unanswered++;
//             // }
//             // else display final result
//         } else if (correctAnswer === undefined) {
//             $("#answers").html("<h2>out of time!! the correct answer is " + allQuestions[currentQuestion].correctAnswer + "</h2>");
//             unanswered++;
//         }
//     }
//      finalResults=() => {
//         playingGame = false;
//         // display score
//         $("#results").html("<div> wins: " + wins + "</div>"
//             + "<div> wrong answers: " + losses + "</div>"
//             + "<div> unanswered: " + unanswered + "</div>");
//         $("#results").show();
//         $("#questions").hide();
//         countDown = 1;
//         $("#reset").show();
//         // hide countdown button

//     }
    
//   state = {
//     Score: 0,
//     HighScore: 0,
//     message: "Click a Superhero to get started!",
//     NewSuperheros: [],
//     Superheros: Superheros
//   }


//   ClickedImage = id => {
//     const { NewSuperheros } = this.state;
//     if (NewSuperheros.includes(id)) {
//       this.shuffle();
//       this.resetGame(false);
//     }
//     else if (!NewSuperheros.includes(id)) {
//       this.shuffle();
//       this.setState({ Score: this.state.Score + 1 }, function () {
//         console.log("line 51: the score now is " + this.state.Score)
//         if (this.state.Score > this.state.HighScore) {
//           this.setState({ HighScore: this.state.Score }, function () {
//             if (this.state.Score === 12) {
//               this.resetGame(true);
//               // window.location.reload();
//               console.log("reset game damnit")
//             }
//           })
//         }
//       })
//       NewSuperheros.push(id);
//     }
//   };


//   shuffle = () => {
//     this.state.Superheros.sort(function () { return 0.5 - Math.random() });
//   }
  //reset game function
//   resetGame = (booleam) => {
//     if (!booleam){
//     this.setState({
//       Score: 0,
//       NewSuperheros: [],
//       message: "OOO So close, try again!"
//     })
//   }else if (booleam) {
//     this.setState({
//       Score: 0,
//       NewSuperheros: [],
//       HighScore: 0,
//       message: "YAY YOU WIN!!!!!!"
//     })
//   }
//   }
checkAnswer = (myanswer, myquestion) => {
    // e.preventDefault()
    console.log("clicked")
    console.log(myanswer)
    console.log("myanswer")
    console.log(myquestion)
    console.log("myquestion")
}

  render() {

    return (
      <div className="body">
            <div className="gameDiv">
<div className= "gameName"><h1>SUPERHERO TRIVIA GAME</h1></div>

<div className="questions"><h3> Questions </h3> 
    {this.state.Questions.map(question => (
<List>
    <ListItem>

<List>
    
{question.question}

    

{question.answer.map(myanswer => (

    <ListItem >
    <Button onClick={this.checkAnswer(myanswer, question)}>
{myanswer}
    </Button>
    </ListItem>
))}

</List>
    </ListItem>
</List>
    ))}
</div>
{/* <div className="timeremaining"><h3>Time Remaining: </h3></div> */}

<div className="answers"></div>
<div id="results"></div>
            <button id="reset">Start Game</button>

     </div>
      </div>
    )
  }
}

export default Triviagame;