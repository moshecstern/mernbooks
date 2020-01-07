import React, { useState } from "react";
import REACT_APP_googlebooks_APP_API_KEY from "dotenv";
import Superheroapi from "../components/Superheroapi";
import { List, ListItem } from "../components/List";
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

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 0, 2),
    height: theme.spacing(5)
  },
  volumes: { minWidth: "600px" }
}));

const Detail = props => {
  const classes = useStyles();

  const [{ data: series, loading }, randomtext] = useAxios({
    url: "/api/series/" + props.match.params.name
  });

  console.log("this is a test");
  console.log(props);
  console.log(props.match.params.name);
  console.log(series);
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
    console.log(name);
    console.log(series);
    console.log("name________________________");
    // let searchvol = props.match.params.name +" "+ vol + " " + name
    let searchvol = name + " " + vol + " " + series;
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
      <Superheroapi props={props}>{props}</Superheroapi>
      <Grid container spacing={2}>
        <Grid item xs>
          <Typography variant="h3" className={classes.title}>
            Character name: {props.match.params.name}
          </Typography>
          <List dense>
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
                  primary={`Series Name: ${item.series}`}
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
              <List>
                {seriesid.map(vol => (
                  <div className={classes.demo}>
                    <ListItem key={vol}>
                      {" "}
                      <ListItemText
                        primary={
                          <React.Fragment>
                            <Typography
                              component="span"
                              variant="body2"
                              className={classes.inline}
                              color="textPrimary"
                            ></Typography>
                            {vol}
                          </React.Fragment>
                        }
                        secondary={
                          <React.Fragment>
                            <Button
                              onClick={() =>
                                showvolumeinformation(
                                  vol,
                                  currentname,
                                  currentSeries
                                )
                              }
                            >
                              Get Volumes Information
                            </Button>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  </div>
                ))}
              </List>
            </div>
          )}
        </Grid>
      </Grid>

      {!currentsearchresults ? null : (
        <List>
          {currentsearchresults.items.map(result => (
            <ListItem key={result}>
              {console.log(result)}
              <div>Title: {result.volumeInfo.title}</div>
              {/* <div><img src={result.volumeInfo.imageLinks.smallThumbnail}></img></div> */}
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
              {/* <div>
<List>
{result.map(author=>(
  <ListItem>
  {author}, 
  </ListItem>
))}
</List>
</div> */}
              <div>Published Date: {result.volumeInfo.publishedDate}</div>
              <div>Description: {result.volumeInfo.description}</div>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
};

export default Detail;
