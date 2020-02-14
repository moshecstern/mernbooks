import React, { useState } from "react";
import Map from "../Map"
import { Link } from "react-router-dom";
// import "./style.css"
import { List, ListItem } from "../List";
import ReactHtmlParser from 'react-html-parser'; 
import {
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  Typography,
  TextField,
} from "@material-ui/core";
import useAxios from "axios-hooks";
import Axios from "axios";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
// import InfoIcon from '@material-ui/icons/Info';
import {
    Button,
    ListItemAvatar,
    Avatar,
    ListItemText
  } from "@material-ui/core";
  import InfoIcon from '@material-ui/icons/Info';
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
const YelpAPI = props => {
    const [businessInfo, setBusinessInfo] =useState(false)
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
  
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    // const [characterinfo, setcharacterinfo] = useState();



  const handleparser = info => {
     return info  
//     const parser = new DOMParser();
// return parser.parseFromString(info, "text/html")
  }
const [mylong, setmylong] =useState()
const [mylat, setmylat] =useState()

const showMyModal = (lat, lang) => {
    // setcharacterinfo(myinfo)
    setBusinessInfo(true)
    handleOpen();
}



  // const [heroinfo, setheroinfo] = useState();
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
    
    const [searchTerm, setSearchTerm] =useState("comics")
    const [searchCity, setSearchCity] =useState("philadelphia")
    const [offset, setOffset] = useState(0)
// fffff
  const [{ data: heroinfo, loading }, randomtext] = useAxios({
    // url: "https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/concepts/?api_key=633dbefdef3f0c1fbfb7e640d1fa1895b452b02f&filter=name:"+props.props.match.params.name+"&format=json"
    url: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term="+searchTerm+"&location="+searchCity+"&radius=4000&limit=10&offset="+offset,
 headers: {
      Authorization: "Bearer CRh4dVy8vCYb_8OeBP5ACVQmlTbrk6mZXHwi8VSv9jcOtYRHNHktPbFWZD6dqfqmv9zICcen2OEQx5aEI--lPD5BhlLYpblNxIBlGyJT2aNN1ZpmzytcLGCHOfW5XXYx",
      redirect: "follow"
    },
  });
  // console.log(heroinfo.results.businesses);
  // console.log("this is a test");
  // console.log(props);
  // console.log(props.props.match.params.name);
  console.log("********************");
  console.log(heroinfo);
  console.log("********************");
  

function findyelpapi() {
const myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer CRh4dVy8vCYb_8OeBP5ACVQmlTbrk6mZXHwi8VSv9jcOtYRHNHktPbFWZD6dqfqmv9zICcen2OEQx5aEI--lPD5BhlLYpblNxIBlGyJT2aNN1ZpmzytcLGCHOfW5XXYx");

const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term="+searchTerm+"&location="+searchCity+"&radius=4000&limit=10&offset="+offset, requestOptions)
  .then(response => response.text())
  // .then(result => setheroinfo(result.businesses))
  .then(result => console.log(result))
  // .then(setloading(true))
  .catch(error => console.log('error', error));
}
function nextpagefunc () {
setOffset(offset + 10)
randomtext()
}
// const [loading, setloading] = React.useState(false);
  if (loading) {
    return <></>;
  }
  return (
    <>
    <h2>Yelp Api</h2>
    <Button onClick={()=> findyelpapi()}>Find by location</Button>
    <Grid item>
      <form onSubmit={randomtext}>
        <TextField
          // id="outlined-search"
          label="Search By City"
          type="search"
          color="red"
          variant="outlined"
          value={searchCity}
          onChange={()=> setSearchCity(searchCity)}
          // onSubmit={randomtext()}
        />
              <TextField
          // id="outlined-search"
          label="Search Term"
          type="search"
          color="red"
          variant="outlined"
          value={searchTerm}
          onChange={()=> setSearchTerm(searchTerm)}
          // onSubmit={randomtext()}
        />
        <Button onClick={randomtext}>
        Search
        </Button>
        
      </form>
    </Grid>
<Button onclick={nextpagefunc}>Find More</Button>

      {!heroinfo ? null : (
        <Grid
          direction="column"
          className={classes2.root}
          container
          justify="center"
        >
          <Typography variant="h3">Yelp Businesses</Typography>
          <GridList cellHeight={400} cols={2} className={classes.gridList}>
            {heroinfo.businesses.map(item => (
              <GridListTile key={item}>
                <img src={item.image_url} alt={item.name} />
                <GridListTileBar
                //   title={<Link to={"/series/" + item.name}>{item.name}</Link>}
                  title={<> 
                  {/* <br /> */}
                
                  {/* <span>
                  <InfoIcon
                      onClick={() => showMyModal(item.coordinates.latitude, item.coordinates.longitude)}
                    />
                  </span> */}
              
                  <span>{item.name}</span>

                  </>}
                  subtitle={
                    <>
                    {/* rating, price, location, phone, link (url), review_count */}
                    <span>Location: {item.location.address1}, {item.location.city}, {item.location.zip_code}</span>
                      <br />
                      <span>Rating: {item.rating}, from {item.review_count} reviews</span>
                      <br />
                     <span>{item.price}</span>
                      <br />
                   <span>Phone: {item.display_phone}</span>
                   <br />
                   <span><a href={item.url} target="_blank">Website</a></span>
                     
                   

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
{/* MAKE MODAL FOR GOOGLE MAPS */}

      {/* {!businessInfo ? false : (
        <Modal
          aria-labelledby="volumes-modal-title"
          aria-describedby="volumes-modal-description"
          open={open}
          onClose={handleClose}
        >
          <div style={modalStyle} className={classes.paper}>
 <Map lat={mylat} long={mylong}/>
          </div>
        </Modal>
      )} */}

    </>
  );
};

export default YelpAPI;
