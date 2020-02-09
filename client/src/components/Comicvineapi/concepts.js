import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"
import { List, ListItem } from "../List";
import ReactHtmlParser from 'react-html-parser'; 
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
const Superheroapi = props => {

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

  const [{ data: heroinfo, loading }, randomtext] = useAxios({
    url: "https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/concepts/?api_key=633dbefdef3f0c1fbfb7e640d1fa1895b452b02f&filter=name:"+props.props.match.params.name+"&format=json"
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

//   const htmlDecode = (input)=>{
//     var e = document.createElement('div');
//     e.
//     innerHTML = input;
//     return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
//   }
const options = () => {
console.log("HI")
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
          <Typography variant="h3">Concepts</Typography>
          <GridList cellHeight={400} cols={2} className={classes.gridList}>
            {heroinfo.results.map(item => (
              <GridListTile key={item}>
                <img src={item.image.medium_url} alt={item.name} />
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
                  <span>{item.name}</span>

                  </>}
                  subtitle={
                    <>
                      {/* <span>Episodes: </span>
                      <br /> */}
                      {/* <span>Num of team members: {item.count_of_team_members}</span> */}
                      {/* <span> First appeared: {item.first_appeared_in_issue.name} </span>  */}
                      {/* <br /> */}
                      {/* <span>Link: {item.api_detail_url}</span> */}
                      {/* <a href={item.api_detail_url} target="_blank">Link</a> */}
                      {/* <br /> */}

                      {/* <span>Info </span>
                      <br /> */}
                      <span>{item.deck} </span>

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

    </>
  );
};

export default Superheroapi;
