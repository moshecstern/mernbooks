import React, { useState } from "react";
import { Link } from "react-router-dom";
// import "./style.css"
// import { List, ListItem } from "../List";
// import ReactHtmlParser from 'react-html-parser'; 
import {
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  Typography
} from "@material-ui/core";
import useAxios from "axios-hooks";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import InfoIcon from '@material-ui/icons/Info';
import {
    Button,
    ListItemAvatar,
    Avatar,
    ListItemText
  } from "@material-ui/core";
  import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
  import Axios from "axios";
  import Cookies from 'js-cookie';
  const jwtDecode = require('jwt-decode');
// import { parse } from "dotenv/types";
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
const MoviebyName = props => {
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

    const [characterinfo, setcharacterinfo] = useState();
    const [pagenum, setpagenum] = useState(1);

  const [{ data: heroinfo, loading }, randomtext] = useAxios({
    url: "https://cors-anywhere.herokuapp.com/https://www.omdbapi.com/?apikey=trilogy&type=movie&page="+pagenum+"&s="+props.props.match.params.name
    
  });
  
  console.log("this is a test");
  console.log(props);
  console.log(props.props.match.params.name);
  console.log("********************");
  console.log(heroinfo);
  console.log("********************");

  const handleparser = info => {
     return info  
//     const parser = new DOMParser();
// return parser.parseFromString(info, "text/html")
  }

const showMyModal = myinfo => {
    setcharacterinfo(myinfo)
    handleOpen();
}



  const [currentname, setCurrentname] = useState();
  const [seriesid, setseriesid] = useState();
  const [currentId, setCurrentId] = useState();
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
  console.log(currentname);
  console.log("currentname");
  const classes2 = useStyles2();
function findmoremovies() {
    setpagenum(pagenum +1)
    console.log(pagenum)
    randomtext()
    
}

// https://www.imdb.com/title/tt2313197/
function savevoltoprofile (myname, myimg, mylink, myyear) {
  let thisLink = 'https://www.imdb.com/title/'+mylink+'/';
  Axios.post("/api/favmedia", {
    userID: jwtDecode(accessString).id,
    title: myname,
    img: myimg,
    link: thisLink,
    year: myyear,
    catagory: "Movie"
  },{headers: { Authorization: `JWT ${accessString}` }} )
  .then(res => console.log(res))
  .then(alert("Added to your profile!"))
  .catch(err => alert(err));
}
  if (loading) {
    return <></>;
  }
  return (
    <>
      {!heroinfo ? null : (
        <Grid
          direction="column"
          className={classes2.root}
          container
          justify="center"
        >
          <Typography variant="h3">Movies</Typography>
          <Button onClick={findmoremovies}>Find More</Button>
          <GridList cellHeight={400} cols={2} className={classes.gridList}>
            {heroinfo.Search.map(item => (
              <GridListTile key={item}>
                <img src={item.Poster} alt={item.Title} />
                <GridListTileBar
                  title={<> 
                  <span>{item.Title}</span>
                  <FavoriteBorderOutlinedIcon 
                        onClick={() =>
                                                    // (mytitle5, myimg25, myYear5, numissues5, publisher5)
                            savevoltoprofile(item.Title, item.Poster, item.imdbID, item.Year)
                        }
                      />
                  </>}
                  subtitle={
                    <>
                      <span>{item.Year} </span>
                      <br />
                      <span>
                      <a href={"https://www.imdb.com/title/"+item.imdbID+"/"} target="_blank">IMDB Link</a>
                      </span>
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


    </>
  );
};

export default MoviebyName;
