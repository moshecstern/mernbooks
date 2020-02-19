import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Axios from "axios";
import Cookies from "js-cookie";
import { List, ListItem } from "../List";
import ReactHtmlParser from "react-html-parser";
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
import InfoIcon from "@material-ui/icons/Info";
import {
  Button,
  ListItemAvatar,
  Avatar,
  ListItemText
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import DeleteIcon from '@material-ui/icons/Delete';
// need to be able to search through volumes, fix limit of only a hundred
// import { parse } from "dotenv/types";
const jwtDecode = require("jwt-decode");
function rand() {
  return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
  const top = 50;
  const left = 50;
  const width = 75;
  return {
    width: `${width}%`,
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: "100%",
    maxWidth: 360,
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2)
    }
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

// https://cors-anywhere.herokuapp.com/
const CardAPI = props => {
  let accessString = localStorage.getItem("JWT");
  if (accessString == null) {
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

  const [characterinfo, setcharacterinfo] = useState({});
  const [offset, setoffset] = useState(0);
  const [{ data: heroinfo, loading }, randomtext] = useAxios({
    url: "/api/" + props.url + "/" + jwtDecode(accessString).id,
    headers: { Authorization: `JWT ${accessString}` }
  });

  console.log("this is a test");
  // console.log(props);
  // console.log(props.props.match.params.name);
  console.log("********************");
  console.log(heroinfo);
  console.log("********************");

  const showMyModal = myinfo => {
    setcharacterinfo(myinfo);
    handleOpen();
  };

  const [currentname, setCurrentname] = useState();
  const [seriesid, setseriesid] = useState();
  const [currentId, setCurrentId] = useState();
  //   const [useStyles2, setstyles2] = useState();
  //   2nd styls
  const useStyles2 = makeStyles(theme => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
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

  // function savevoltoprofile (mytitle5, myimg25, myYear5, numissues5, mydesc) {
  //   // console.log(jwtDecode(accessString).id)
  //   // event.preventDefault();
  //   // const accessString = localStorage.getItem('JWT');
  //   // console.log(myid)
  //   // console.log("MY ID")
  //   Axios.post("/api/userbooks", {
  //     userID: jwtDecode(accessString).id,
  //     Title: mytitle5,
  //     img: myimg25,
  //     published: myYear5,
  //     numIssues: numissues5,
  //     // description: mydesc
  //   },{headers: { Authorization: `JWT ${accessString}` }} )
  //   .then(res => console.log(res))
  //   .then(alert("Added to your profile!"))
  //   .catch(err => alert(err));
  // }
  // const [myAlert, setMyAlert] = useState("false")

  function deleteItem(id){
    console.log(id)
    Axios.delete("/api/"+props.url+"/"+ id, {headers: { Authorization: `JWT ${accessString}` }})
    .then(res => randomtext())
  .catch(err => console.log(err))
  };

  function findmorevolumes(e) {
    e.preventDefault();
    setoffset(offset + 100);
    console.log(offset);
    randomtext();
  }
  if (loading) {
    return <></>;
  }
  return (
    <>
      {/* {myAlert ? "success" : (
      <div className={classes.root}>
      <Alert severity="success">This is a success alert — check it out!</Alert>
      </div>
    )} */}
      {!heroinfo ? null : (
        <Grid
          direction="column"
          className={classes2.root}
          container
          justify="center"
        >
          <Typography variant="h3">{props.head}</Typography>
          {/* <Button onClick={findmorevolumes}>Find More</Button> */}
          <GridList cellHeight={600} cols={3} className={classes.gridList}>
            {heroinfo.map(item => (
              <GridListTile key={item.id}>
                {!props.title ? null : <img src={item.img} alt={item.title} />}
                {!props.name ? null : <img src={item.img} alt={item.name} />}
                <GridListTileBar
                  //   title={<Link to={"/series/" + item.name}>{item.name}</Link>}
                  title={
                    <>
                      {/* <br /> */}
                      {/* {!item.description ? null : ( */}
                      {/* <span>
                        <InfoIcon onClick={() => showMyModal(item)} />
                      </span> */}
                      {/* )} */}
                      {!props.title ? null : <span>{item.title}</span>}
                      {!props.name ? null : <span>{item.name}</span>}
                      <DeleteIcon onClick={() => deleteItem(item._id)} />
                    </>
                  }
                  subtitle={
                    <>
                    <span>Catagory: {item.catagory}</span>
                    <br />
                      {!props.name ? null : 
                        <div>
                          {!item.aliases ? null : (
                            <span>
                              {item.aliases.map(alias => (
                                <span>{alias},</span>
                              ))}
                            <br />
                            </span>
                          )}
                          {!item.realname ? null : <span>Real Name: {item.realname} | Birth: {item.birth} <br /></span>}
                          {!item.apearences ? null : <span>Number of Appearences: {item.apearences} <br /></span>}
                          {!item.nummembers ? null : <span>Number of Members: {item.nummembers} <br /></span>}

                       
                        </div>
                      }

                      {!props.title ? null : 
                        <div>
                        {!item.episodes ? null : <span>Number of Episodes: {item.episodes}</span>}

                      </div>
                      }
                      <br />
                      <a href={item.link} target="_blank">
                        Link
                      </a>
                      <br />
                      <span>{item.bio} </span>
                      <span>{item.info} </span>
                      
                      {/* <Button onClick={() => deleteItem(item._id)}>Delete</Button> */}
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
      {heroinfo ? null : <h2>Nothing Saved Yet</h2>}
      {/* <Button onClick={findmorevolumes}>Find More</Button> */}
      {/* {!characterinfo ? null : (
        <Modal
          aria-labelledby="volumes-modal-title"
          aria-describedby="volumes-modal-description"
          open={open}
          onClose={handleClose}
        >
          <div style={modalStyle} className={classes.paper}>
          {characterinfo.map(item => (
            <GridListTile key={item.id}>
                {!props.title ? null : <img src={item.img} alt={item.title} />}
                {!props.name ? null : <img src={item.img} alt={item.name} />}
                <GridListTileBar
                  //   title={<Link to={"/series/" + item.name}>{item.name}</Link>}
                  title={
                    <>
                 
                      {!props.title ? null : <span>{item.title}</span>}
                      {!props.name ? null : <span>{item.name}</span>}
                    </>
                  }
                  subtitle={
                    <>
                    <span>Catagory: {item.catagory}</span>
                    <br />
                      {!props.name ? null : (
                        <div>
                          {!item.aliases ? null : (
                            <span>
                              {item.aliases.map(alias => (
                                <span>{alias},</span>
                              ))}
                            <br />
                            </span>
                          )}
                          {!item.realname ? null : (<span>Real Name: {item.realname} | Birth: {item.birth} <br /></span>)}
                          {!item.apearences ? null : (<span>Number of Appearences: {item.apearences} <br /></span>)}
                          {!item.nummembers ? null : (<span>Number of Members: {item.nummembers} <br /></span>)} 
                        </div>
                      )}
                      {!props.title ? null : (
                        <div>
                        {!item.episodes ? null : (<span>Number of Episodes: {item.episodes}</span>)}

                      </div>
                      )}
                      <br />
                      <a href={item.link} target="_blank">
                        Link
                      </a>
                      <br />
                      <span>{item.bio} </span>
                      <span>{item.info} </span>
                    </>
                  }
                  classes={{
                    root: classes2.titleBar,
                    title: classes2.title
                  }}
                />
              </GridListTile>
          ))} */}
            {/* <List>
<div> { ReactHtmlParser (characterinfo)}</div>
          </List>
          {console.log(characterinfo)}
          */}
          {/* </div>
        </Modal>
      )} */}
    </>
  );
};
// }
export default CardAPI;
