import React, { Component, useState } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
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
  Typography
} from "@material-ui/core";
import useAxios from "axios-hooks";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import { ObjectId } from "mongoose";

const Home = () => {
  const [{ data: characters, loading }, getCharacters] = useAxios(
    "/api/characters"
  );

  const [currentId, setCurrentId] = useState();

  const [{ data, loading: dataLoading }, getData] = useAxios(
    { url: "/api/characters/" + currentId },
    { manual: true }
  );

  const iconHandler = id => () => {
    setCurrentId(id);
    console.log(id);
    getData();
  };
  //   const loadCharacters = () => {
  //     API.getCharacters()
  //       .then(res => {
  //         //console.log(res);
  //         this.setState({ characters: res.data, name: "", info: "", link: "" });
  //       })
  //       .catch(err => console.log(err));
  //   };

  const getseriesbyid = (id) => {
    API.getSeriesByid(id)
    .then(res => {
      this.setState({ volumes: res.data});
    })
    .catch(err => console.log(err));

  }

  const getseriesbyname = () => {
    API.findCharacterBySeries()
      .then(res => {
        this.setState({ volumes: res.data });
      })
      .catch(err => console.log(err));
  };

  const deleteCharacter = id => {
    API.deleteCharacter(id)
      .then(res => this.loadCharacters())
      .catch(err => console.log(err));
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.info) {
      API.saveCharacter({
        name: this.state.name,
        link: this.state.link,
        info: this.state.info
      })
        .then(res => this.loadCharacters())
        .catch(err => console.log(err));
    }
  };

  if (loading) {
    return <></>;
  }

  return (
    <>
      <GridList cols={4}>
        {characters.map(item => (
          <GridListTile key={item._id}>
            <img src={item.img} alt={item.name} />
            <GridListTileBar
            
              title={item.name}
              classes={
                {
                  //   root: classes.titleBar,
                  //   title: classes.title
                }
              }
              actionIcon={
                <IconButton
                  aria-label={`star ${item.title}`}
                  onClick={iconHandler(item._id)}
                >
                  <FindInPageIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
      {!currentId ? null : (
        <Paper>
          <Grid container>
            <Grid item>
              <Typography variant="h3">Info</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4">Name {data.name}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4">Link {data.Link}</Typography>
            </Grid>
            <Grid item container>
              <Grid item>
                <Typography variant="h4">Series</Typography>
                {data.series.map(item => (
                  <Grid item>{item}</Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      )}
    </>
  );
};

export default Home;
