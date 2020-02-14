import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./style.css"
import { List, ListItem } from "../List";
import ReactHtmlParser from 'react-html-parser'; 
import useAxios from "axios-hooks";
import Axios from "axios";
import {
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  Typography,
  TextField
} from "@material-ui/core";

import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import InfoIcon from '@material-ui/icons/Info';
import Cookies from 'js-cookie';
import {
    Button,
    ListItemAvatar,
    Avatar,
    ListItemText
  } from "@material-ui/core";
  import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
  // import InfoIcon from '@material-ui/icons/Info';
  const jwtDecode = require('jwt-decode');
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
    volumes: { minWidth: "200px" },
    paper: {
      position: "relative",
      width: "auto",
      backgroundColor: "#D9D9D9",
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  }));


// https://cors-anywhere.herokuapp.com/
const VolumeDB = props => {
    let accessString = localStorage.getItem('JWT')
    if(accessString == null){
      accessString = Cookies.get("JWT");
    }
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
  
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const [searchURL, setSearchURL] = useState("all")
    const [offsetname, setOffsetname] = useState(0)
    const [searchByTerm, setSearchByTerm] = useState("something")
    const [title, setTitle] = useState()
    const [{ data: series, loading }, randomtext] = useAxios({
      url: "/api/comicvinevolumes/"+searchURL+"/"+ searchByTerm+"/"+offsetname,
        headers: { Authorization: `JWT ${accessString}` }
    });
 

    // const [characterinfo, setcharacterinfo] = useState();
const [currentextras, setcurrentextras] = useState();
const [currentname, setCurrentname] = useState();
const [seriesid, setseriesid] = useState();
const [currentId, setCurrentId] = useState();
const [currentsearchresults, setcurrentsearchresults] = useState();
const [currentSeries, setCurrentSeries] = useState();
const [characterinfo, setcharacterinfo] = useState();
//   const [useStyles2, setstyles2] = useState();
//   2nd styls 
  const useStyles2 = makeStyles(theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#F2F2F2",
        textAlign: "center"
      },
    gridList: {
      width: "auto",
      height: "auto"
    },
    icon: {
      color: "rgba(255, 255, 255, 0.54)"
    }
  }));
  //   console.log(currentname);
//   console.log("currentname");
const classes2 = useStyles2();

//   const htmlDecode = (input)=>{
//     var e = document.createElement('div');
//     e.
//     innerHTML = input;
//     return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
//   }
const options = () => {
console.log("HI")
}

// main js for getting things to populate
// change to editbyid
function editvoltoprofile (myid, mytitle, myimg, mylink, myauthor, mydesc, mypublished) {
  // console.log(jwtDecode(accessString).id)
  // event.preventDefault();
    // const accessString = localStorage.getItem('JWT');

    // need to add another savetoprofile func that saves directly only the comicvinedb


    console.log(myid)
    console.log("MY ID")
    // need post to edit userbook by matching userID & title to series.title & year to series.year
    Axios.put("/api/userbooks/" + seriesID, {
      userID: myid,
      Title: mytitle,
      img: myimg,
      link: mylink,
      author: myauthor,
      description: mydesc,
      published: mypublished,
      numIssues: numissues,
      publisher: mypublisher,
      img2: myimg2
    },{headers: { Authorization: `JWT ${accessString}` }} )
    .then(res => console.log(res))
    .then(handleClose())
    .catch(err => console.log(err));
  }

const [myYear, setMyYear] = useState("")
const [myimg2, setMyImg2] = useState("")
const [mytitle, setMyTitle] = useState("")
const [mypublisher, setMyPublisher] = useState("")
const [numissues, setMyNumIssues] = useState("")
// const [myYear, setMyYear] = useState(series.year)
// const [myimg2, setMyImg2] = useState(series.img)
// const [mytitle, setMyTitle] = useState(series.title)
// const [mypublisher, setMyPublisher] = useState(series.publisher)
// const [numissues, setMyNumIssues] = useState(series.Field7)
const [seriesID, setSeriesID] = useState()

function savevoltoprofile (mytitle5, myimg25, myYear5, numissues5, mypublisher5) {
    // console.log(jwtDecode(accessString).id)
    // event.preventDefault();
    // const accessString = localStorage.getItem('JWT');
    // console.log(myid)
    // console.log("MY ID")
    Axios.post("/api/userbooks", {
      userID: jwtDecode(accessString).id,
      Title: mytitle5,
      img: myimg25,
      published: myYear5,
      numIssues: numissues5,
      publisher: mypublisher5,
    },{headers: { Authorization: `JWT ${accessString}` }} )
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }
    //figure out what you need to pass as variable 'seriesid' from the button
    const showvolumeinformation = (myid, year, name) => {
      //this is where you do your google reader call or however you are going to display infromation.
      //reference showvolumes method above
      // console.log(process.env.REACT_APP_googlebooks_APP_API_KEY);
   setSeriesID(myid)
      // let searchvol = props.match.params.name +" "+ vol + " " + name
      let searchvol = changeCaseFirstLetter( name) + " " + year;
      // let searchvol = name + " " + vol;
  
      console.log(searchvol);
      Axios.get(
        "https://www.googleapis.com/books/v1/volumes?q='" +
          searchvol +
          "&orderBy=relevance&maxResults=5"
      ).then(function(response) {
        console.log(response);
        console.log(response.data);
        console.log("props.match.params.name");
        // console.log(props.match.params.name);
        setcurrentsearchresults(response.data);
        handleOpen();
      });
    };
    const getgooglebook = vol => {
      console.log(vol);
    };
  //   function changeCaseFirstLetter(params) {
  //     if(typeof params === 'string') {
  //             return params.charAt(0).toUpperCase() + params.slice(1);
  //     }
  //     return null;
  // }
  const showMyModal = myinfo => {
    setcharacterinfo(myinfo)
    handleOpen();
}

  function camelCase (string) {
      return string.replace( /-([a-z])/ig, function( all, letter ) {
          return '-'+letter.toUpperCase();
      });
  }
  function changeCaseFirstLetter(str) {
      
          var splitStr = str.trim().toLowerCase().split(' ');
          for (var i = 0; i < splitStr.length; i++) {
              // You do not need to check if i is larger than splitStr length, as your for does that for you
              // Assign it back to the array
              splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
          }
          // Directly return the joined string
          // return splitStr.join(' '); 
         const newstring= splitStr.join(' '); 
        return camelCase(newstring)
       }

       function findmorevolumes(event) {
        event.preventDefault();
        setOffsetname(offsetname +100)
        console.log(offsetname)
        randomtext()
      }
// functions for searching volumes by conditions
// name front to back is default
// all letters + buttons for DC & Marvel(publisher) mongoose query letters starts with
// search title
// search year
// most issues (Field7)

// const handleInputChange = event => {
//   event.preventDefault()
//   console.log("Hi' yall");
//   // console.log(event.target.value)
//   setSearchByTerm(event.target.value);
//   // console.log(searchTerm);
// };
async function searchAllAZ() {
  setOffsetname(0)
setSearchURL("all")
setSearchByTerm("something")
randomtext()
}
async function searchAllReverse() {
  setOffsetname(0)
setSearchURL("allreverse")
setSearchByTerm("something")
randomtext()
}
async function searchByTitle(event) {
  event.preventDefault()
  setOffsetname(0)
setSearchURL("title")
setSearchByTerm(changeCaseFirstLetter(title))
console.log(searchByTerm)
randomtext()
}
async function searchByYear(event) {
  event.preventDefault()
  setOffsetname(0)
setSearchURL("year")
setSearchByTerm(changeCaseFirstLetter(year))
console.log(searchByTerm)
if(year.length === 4){
  randomtext()
}else {
  alert("Please only enter a year with 4 digits")
}
}
// search titles by letter

async function searchByLetter() {
  // event.preventDefault()
  setOffsetname(0)
setSearchURL("letter")

setSearchByTerm(letter)
console.log(searchByTerm)

randomtext()
}
const [letter, setLetter] =useState("A")
const [year, setYear]=useState(2019)
async function goToLastPage() {
  setOffsetname(0)
  if(searchURL === "title"){
    setSearchURL("titlereverse")
  }else if(searchURL === "letter"){
    setSearchURL("letterreverse")
  }else if(searchURL === "year"){
    setSearchURL("yearreverse")
  }else if(searchURL === "all"){
    setSearchURL("allreverse")
  }else {
    setSearchURL("all")
  }
  randomtext()
}
  if (loading) {
    return <></>;
  }
  return (
    <>
      {!series ? null : (
        <Grid
          direction="column"
          className={classes2.root}
          container
          justify="center"
        >
          <Typography variant="h3">Series</Typography>
          {/* make search inut for dc by year, marvel by year, title, publisher */}
          <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
          {/* <span> */}
          <Button onClick={searchAllReverse}>All Series Z-A</Button>
          <Button onClick={searchAllAZ}>All Series A-Z</Button>
          <form onSubmit={searchByTitle}>
          <TextField
          // id="outlined-search"
          label="Search any character"
          type="search"
          color="red"
          variant="outlined"
          // value={title}
          onChange={(event)=> setTitle(event.target.value)}
           />
          </form>
          <form onSubmit={searchByYear}>
          <TextField
          // id="outlined-search"
          label="Search By Year"
          type="search"
          color="red"
          variant="outlined"
          // value={title}
          onChange={(event)=> setYear(event.target.value)}
           />
          </form>
          {/* </span> */}
          </Grid>
          {/* A-Z */}
          <span>
          <Button onClick={() =>{
           setLetter("A")
            searchByLetter();
          }}>A</Button>
            <Button onClick={() =>{
            setLetter("B");
            searchByLetter();
          }}>B</Button>
            <Button onClick={() =>{
            setLetter("C");
            searchByLetter();
            }}>C</Button>
           <Button onClick={() =>{
            setLetter("D");
            searchByLetter();
          }}>D</Button>
            <Button onClick={() =>{
            setLetter("E");
            searchByLetter();
          }}>E</Button>
            <Button onClick={() =>{
            setLetter("F");
            searchByLetter();
          }}>F</Button>
            <Button onClick={() =>{
            setLetter("G");
            searchByLetter();
          }}>G</Button>
            <Button onClick={() =>{
            setLetter("H");
            searchByLetter();
          }}>H</Button>
            <Button onClick={() =>{
            setLetter("I");
            searchByLetter();
          }}>I</Button>
            <Button onClick={() =>{
            setLetter("J");
            searchByLetter();
          }}>J</Button>
            <Button onClick={() =>{
            setLetter("K");
            searchByLetter();
          }}>K</Button>
            <Button onClick={() =>{
            setLetter("L");
            searchByLetter();
          }}>L</Button>
            <Button onClick={() =>{
            setLetter("M");
            searchByLetter();
          }}>M</Button>
          <Button onClick={() =>{
            setLetter("N");
            searchByLetter();
          }}>N</Button>
            <Button onClick={() =>{
            setLetter("O");
            searchByLetter();
          }}>O</Button>
            <Button onClick={() =>{
            setLetter("P");
            searchByLetter();
          }}>P</Button>
          </span>
          <span>
            <Button onClick={() =>{
            setLetter("Q");
            searchByLetter();
          }}>Q</Button>
            <Button onClick={() =>{
            setLetter("R");
            searchByLetter();
          }}>R</Button>
            <Button onClick={() =>{
            setLetter("S");
            searchByLetter();
          }}>S</Button>
            <Button onClick={() =>{
            setLetter("T");
            searchByLetter();
          }}>T</Button>
            <Button onClick={() =>{
            setLetter("U");
            searchByLetter();
          }}>U</Button>
            <Button onClick={() =>{
            setLetter("V");
            searchByLetter();
          }}>V</Button>
            <Button onClick={() =>{
            setLetter("W");
            searchByLetter();
          }}>W</Button>
            <Button onClick={() =>{
            setLetter("X");
            searchByLetter();
          }}>X</Button>
            <Button onClick={() =>{
            setLetter("Y");
            searchByLetter();
          }}>Y</Button>
            <Button onClick={() =>{
            setLetter("Z");
            searchByLetter();
          }}>Z</Button>
          <Button onClick={searchByLetter}>Click twice or here to search the letter: {letter}</Button>
          </span>
          <span>
          <Button onClick={goToLastPage}>Last Page</Button>
          <Button onClick={findmorevolumes}>Find More</Button>
          </span>
          {/* INSERT BUTTONS TO SEARCH AND FIND MORE ON CUREENT PAGE */}
          <GridList cellHeight={400} cols={4} className={classes.gridList}>
            {series.map(item => (
              <GridListTile key={item.id}>
                <img src={item.img} alt={item.title} />
                <GridListTileBar
                //   title={<Link to={"/series/" + item.name}>{item.name}</Link>}
                  title={<> 
                  {/* <br /> */}
                  {!item.description ? null : (
                  <span>
                  <InfoIcon
                      onClick={() => showMyModal(item.description)}
                    />
                
                  </span>
                  )}
                  <span>{item.title}</span>

                  </>}
                  subtitle={
                    <>
                      {/* <span>Episodes: </span>
                      <br /> */}
                      {/* <Button */}
                      <FavoriteBorderOutlinedIcon
                        onClick={() =>
                                                    // (mytitle5, myimg25, myYear5, numissues5, publisher5)
                            savevoltoprofile(item.title, item.img, item.year, item.Field7, item.publisher)
                        }
                      />
                        {/* Save to collection */}
                      {/* </Button> */}
                      {/* <Button */}
                      <InfoIcon
                        onClick={() =>
                          showvolumeinformation(item._id, item.year, item.title)
                        }
                      />
                        {/* Get Volumes Information
                      </Button> */}
                    <br />
                      <span>Year: {item.year}</span>
                      <br />
                      <span>NumIssues: {item.Field7}</span>
                      <br />
                      <span>publisher: {item.publisher}</span>
                      {/* <span>Num of team members: {item.count_of_team_members}</span> */}
                      {/* <span> First appeared: {item.first_appeared_in_issue.name} </span>  */}
                      {/* <br /> */}
                      {/* <span>Link: {item.api_detail_url}</span> */}
                      {/* <a href={item.api_detail_url} target="_blank">Link</a> */}
                      {/* <br /> */}

                      {/* <span>Info </span>
                      <br /> */}
                      {/* <span>{item.deck} </span> */}

                    </>
                  }
                  classes={{
                    root: classes2.titleBar,
                    title: classes2.title
                  }}
                />
              </GridListTile>
            ))}
          </GridList>
        </Grid>
      )}

      {!currentsearchresults ? null : (
        <Modal
          aria-labelledby="volumes-modal-title"
          aria-describedby="volumes-modal-description"
          open={open}
          onClose={handleClose}
        >
          <div style={modalStyle} className={classes.paper}>
            <List>
              {currentsearchresults.items.map(result => (
                <ListItem key={result}>
                  {console.log(result)}
                  <div>Title: {result.volumeInfo.title}: {result.volumeInfo.subtitle}</div>
                  {!result.volumeInfo.imageLinks ? null : (
                    <div>
                      <img src={result.volumeInfo.imageLinks.thumbnail}/>
                    </div>
                  )}
                  <div>
                    <a href={result.volumeInfo.previewLink}rel="noopener noreferrer" target="_blank">
                      Google Books Link
                    </a>
                  </div>
                  <div>Authors: {result.volumeInfo.authors}</div>
                  <div>Published Date: {result.volumeInfo.publishedDate}</div>
                  <div>Description: {result.volumeInfo.description}</div>
                                                                         {/* myid, myimg, mylink, myauthor, mydesc, mypublished */}
                  <Button
                        onClick={() =>
                          editvoltoprofile(jwtDecode(accessString).id, result.volumeInfo.title, result.volumeInfo.imageLinks.thumbnail, result.volumeInfo.previewLink, result.volumeInfo.authors, result.volumeInfo.description, result.volumeInfo.publishedDate)
                        }
                      >
                        Save Volume
                      </Button>
                </ListItem>
              ))}
            </List>
          </div>
        </Modal>
      )}
      {!characterinfo ? null : (
        <Modal
          aria-labelledby="volumes-modal-title"
          aria-describedby="volumes-modal-description"
          open={open}
          onClose={handleClose}
        >
          <div style={modalStyle} className={classes.paper}>
          <List>
<div> { ReactHtmlParser (characterinfo)}</div>
          </List>
          {console.log(characterinfo)}
         
          </div>
        </Modal>
      )}
      <span>
      <Button onClick={findmorevolumes}>Find More</Button>
      <Button onClick={goToLastPage}>Last Page</Button>
      </span>
    </>
  );
};

export default VolumeDB;
