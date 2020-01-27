import React, { useState } from "react";
import REACT_APP_googlebooks_APP_API_KEY from "dotenv";
import Superheroapi from "../components/Superheroapi";
import { List, ListItem } from "../components/List";
import Linkpage from "../components/Linkpage";
import Comicbookvineapi from "../components/Comicvineapi";
import DisplayallSeries from "../components/DisplayallSeries"
import Cookies from 'js-cookie';
import {
  Grid,
  Typography,
  Button,
  ListItemAvatar,
  Avatar,
  ListItemText
} from "@material-ui/core";
import useAxios from "axios-hooks";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import FolderIcon from "@material-ui/icons/Folder";
import Modal from "@material-ui/core/Modal";
function rand() {
  return Math.round(Math.random() * 20) - 10;
}
function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
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

const Detail = props => {
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
    <>
    {/* <Linkpage props={props}>{props}</Linkpage> */}
      {/* <Superheroapi props={props}>{props}</Superheroapi> */}
 <DisplayallSeries props={props}>{props}</DisplayallSeries>
      <Comicbookvineapi props={props}>{props}</Comicbookvineapi>
 
      {/* <Grid container spacing={2}>
        <Grid item xs>
          <Typography variant="h3" className={classes.title}>
            Character name: {props.match.params.name} 
          </Typography>
          <List dense className={classes.root}>
          {console.log(series)}
          {console.log("?!!?!?!?!??!?!?!?!?!?")}
            {series.map(item => (
              
              <ListItem key={item._id}>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon
                      onClick={() => showvolumes(item._id, series, item.name)}
                    />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={`Series Era: ${item.series}`}
                  secondary={`Series Line: ${item.name}`}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item>
          {!seriesid ? null : (
            <div className={classes.volumes}>
              <Typography variant="h3" className={classes.title}>
                Volumes
              </Typography>
              <List dense>
                {seriesid.map(vol => (
                  <div className={classes.demo}>
                    <ListItem key={vol}>
                      <ListItemText
                        primary={
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            {vol}
                          </Typography>
                        }
                      />
                      <Button
                        onClick={() =>
                          showvolumeinformation(vol, currentname, currentSeries)
                        }
                      >
                        Get Volumes Information
                      </Button>
                    </ListItem>
                  </div>
                ))}
              </List>
            </div>
          )}
        </Grid>
      </Grid>

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
                      <img src={result.volumeInfo.imageLinks.thumbnail}></img>
                    </div>
                  )}
                  <div>
                    <a href={result.volumeInfo.previewLink} target="_blank">
                      Google Books Link
                    </a>
                  </div>
                  <div>Authors: {result.volumeInfo.authors}</div>
                  <div>Published Date: {result.volumeInfo.publishedDate}</div>
                  <div>Description: {result.volumeInfo.description}</div>
                </ListItem>
              ))}
            </List>
          </div>
        </Modal>
      )} */}
    </>
  );
};

export default Detail;
