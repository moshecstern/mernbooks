import React, { Component, useState } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Notes from "../components/Notes";
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
import Modal from "../components/Modals";
import SimpleModal from "../components/Modals";

const Home = () => {
  const [{ data: characters, loading }, getbyname] = useAxios(
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

  const state = {
    character: [],
    volumes: [],
    series: [],
    singlevolume: []
  };

  const getallseriesbycharacterName = () => {
    API.getallseriesbycharacter()
      .then(res => {
        this.setState({ series: res.data });
      })
      .catch(err => console.log(err));
  };

  const getseriesbyid = id => {
    API.getSeriesByid(id)
      .then(res => {
        this.setState({ volumes: res.data });
      })
      .catch(err => console.log(err));
  };

  const loadCharacters = () => {
    API.getCharacters()
      .then(res => {
        //console.log(res);
        this.setState({ characters: res.data, name: "", info: "", link: "" });
      })
      .catch(err => console.log(err));
  };

  const getseriesbyname = name => {
    console.log("Get series by name!");
    console.log(name);
    API.getseriesbyname(name)
      .then(res => {
        this.setState({ series: res.data });
        console.log("This is the res: ");
        console.log(res);
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
          /* <GridListTile key={item.name} onClick={getseriesbyname(item.name)}> */
          <GridListTile
            key={item.name}
            onClick={() => getseriesbyname(item.name)}
          >
            <img src={item.img} alt={item.name} />
            {/* <Link to={"/character/" + item._id}> */}
            {/* <Link to={`/api/series/${item.name}`}> */}
            {item.name}
            {/* </Link> */}
            <GridListTileBar
              title={<Link to={"/series/" + item.name}>{item.name}</Link>}
              classes={
                {
                  // root: classes.titleBar,
                  // title: classes.title
                }
              }
              actionIcon={
                <IconButton
                  aria-label={`star ${item.title}`}
                  onClick={iconHandler(item._id)}
                  // onClick={loadCharacters(item._id)}
                  // onClick={<Link to={"/character/" + item._id}></Link>}
                >
                  <FindInPageIcon />
                </IconButton>
              }
            />
            {/* <Link to={"/character/" + item._id}>
                {item.name}
                  </Link> */}
          </GridListTile>
        ))}
      </GridList>
      {!currentId ? null : (
        <Paper>
          {characters.map(item => (
            <Grid container key={item._id}>
              <Grid item>
                <Typography variant="h3">{}</Typography>
                {console.log(item)}
              </Grid>
              <Grid item>
                <Typography variant="h4"> Name {item.name}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h4">Link {item.Link}</Typography>
              </Grid>
              {/* <Grid item container>
              <Grid item>
                <Typography variant="h4">Series</Typography>
                {characters.series.map(item => (
                  <Grid item>{item}</Grid>
                ))}
              </Grid>
            </Grid> */}
            </Grid>
          ))}
        </Paper>
      )}
    </>
  );
};

export default Home;
