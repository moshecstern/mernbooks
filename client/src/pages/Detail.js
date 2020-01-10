import React, { useState } from "react";
import REACT_APP_googlebooks_APP_API_KEY from "dotenv";
import Superheroapi from "../components/Superheroapi";
import { List, ListItem } from "../components/List";
import Linkpage from "../components/Linkpage";
import Comicbookvineapi from "../components/Comicvineapi";

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
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [{ data: series, loading }, randomtext] = useAxios({
    url: "/api/series/" + props.match.params.name
  });

  console.log("this is a test");
  console.log(props);
  console.log(props.match.params.name);
  console.log(series);
  const [currentextras, setcurrentextras] = useState();
  const [currentname, setCurrentname] = useState();
  const [seriesid, setseriesid] = useState();
  const [currentId, setCurrentId] = useState();
  const [currentsearchresults, setcurrentsearchresults] = useState();
  const [currentSeries, setCurrentSeries] = useState();
  console.log(currentname);
  console.log("currentname");

  const showvolumes = (id, series) => {
    console.log("this is whatever series is" + id);
    console.log(series);
    const theVolumes = series.filter(series => series._id === id);
    console.log("this is theVolume:");
    console.log(theVolumes[0].extras)
    setcurrentextras(theVolumes[0].extras);
    console.log(theVolumes[0].volumes);
    setseriesid(theVolumes[0].volumes);
    setCurrentname(theVolumes[0].name);
    setCurrentSeries(theVolumes[0].series);
  };

  //figure out what you need to pass as variable 'seriesid' from the button
  const showvolumeinformation = (vol, name, series) => {
    //this is where you do your google reader call or however you are going to display infromation.
    //reference showvolumes method above
    console.log(process.env.REACT_APP_googlebooks_APP_API_KEY);
    console.log(vol);
    console.log("vol")
    console.log(name);
    console.log("name________________________");
    console.log(series);
    console.log("series")
    // let searchvol = props.match.params.name +" "+ vol + " " + name
    let searchvol = name + " " + vol + " " + series;
    // let searchvol = name + " " + vol;

    console.log(searchvol);
    Axios.get(
      "https://www.googleapis.com/books/v1/volumes?q='" +
        searchvol +
        "&orderBy=relevance"
    ).then(function(response) {
      console.log(response);
      console.log(response.data);
      console.log("props.match.params.name");
      console.log(props.match.params.name);
      setcurrentsearchresults(response.data);
      handleOpen();
    });
  };
  const getgooglebook = vol => {
    console.log(vol);
  };
  if (loading) {
    return <></>;
  }
  return (
    <>
    {/* <Linkpage props={props}>{props}</Linkpage> */}
      {/* <Superheroapi props={props}>{props}</Superheroapi> */}
      <Comicbookvineapi props={props}>{props}</Comicbookvineapi>

      <Grid container spacing={2}>
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
      )}
    </>
  );
};

export default Detail;
