import React, { Component, useState } from "react";
import API from "../utils/API";
import Superheroapi from "../components/Superheroapi";
import { Link, useParams } from "react-router-dom";
import { Col, Row } from "../components/Grid";
import { List, ListItem } from "../components/List";
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
  Typography,
  Button
} from "@material-ui/core";

import useAxios from "axios-hooks";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import { ObjectId } from "mongoose";
import Modal from "../components/Modals";
import SimpleModal from "../components/Modals";
import SearchResults from "../components/SearchResults";
import { render } from "react-dom";
import Axios from "axios";

const Detail = props => {
  const [{ data: series, loading }, randomtext] = useAxios(
    { url: "/api/series/" + props.match.params.name }
    // { url: "/api/series/"}
  );

  console.log("this is a test");
  console.log(props);
  console.log(props.match.params.name);
  console.log(series);
  // const { location } = props;
  // const { query } = getParams(location);
  const [currentname, setCurrentname] = useState();
  const [seriesid, setseriesid] = useState();
  const [currentId, setCurrentId] = useState();
  //  {
  //   query: searchParams.get('query') || '',
  // };

  // const searchParams = newURLSearchParams(location.search)
  console.log(currentname);
  console.log("currentname");
  const argvparams = window.location.pathname.split("/").slice(-1)[0];
  // const Detail = () => {
  //   const [{ data: series, loading }, getData] = useAxios(
  //     "/api/characters"
  //     );

  const [{ data, loading: dataLoading }, getmyseries] = useAxios(
    { url: "/api/series/" + currentId },
    { manual: true }
  );

  // const [{ data, loading: dataLoading }, getData] = useAxios(
  //   { url: "/api/series/" + currentname },
  //   { manual: true }
  // );

  const seriesidhandler = id => () => {
    // setCurrentId(id)
    console.log(id);
    // getmyseries()
  };

  const LoadChosenSeries = name => {
    setCurrentname(name);
    console.log(name);
    // getData();
    // API.getseriesbyname(argvparams)
    //   .then(
    //     res => setCurrentname(res)
    //   )
    //   .catch(err => console.log(err));
  };
  // const  LoadChosenSeries = () => {
  //   API.getseriesbyname(this.props.match.name)
  //   .then(res => this.setState({ series: res.data })
  //   )
  //   .catch(err => console.log(err));
  // }

  // const serieshandler = name => () => {
  //   setCurrentname(name);
  //   console.log(name);
  //   getData();
  // };

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
    API.getseriesbyname(name)
      .then(res => {
        // this.setState({ series: res.data });
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

  // const tempCharacter = series.filter(item => item.character === argvparams);

  const showvolumes = (id, series) => {
    // setseriesid(id);
    console.log("this is whatever series is" + id);
    console.log(series);

    const theVolumes = series.filter(series => series._id === id);
    console.log("this is theVolume:");
    console.log(theVolumes[0].volumes);
    setseriesid(theVolumes[0].volumes);
    // getData();

    return (
      <div>
        {console.log(
          <List>
            {theVolumes[0].volumes.map(vol => (
              <ListItem key={vol}>{vol}</ListItem>
            ))}
          </List>
        )}
      </div>
    );
    //     }

    //     return (
    //       <div>
    //   <List>
    //   {item.volumes.map(vol => (
    //     <ListItem key={vol}>{vol}</ListItem>
    //   ))}
    // </List>
    //       </div>
    //     )
  };

  const getgooglebook = (vol) => {
    console.log(vol)
  };

  if (loading) {
    return <></>;
  }

  return (
    <>
      <Superheroapi props={props}>{props}</Superheroapi>
      {/* <GridList cols={4}>
        {series.map(item => (
          <GridListTile key={item._id} onClick={getseriesbyname(item.name)}>

                <Link to={`/api/series//${item.name}`}>
                {item.character}
                {item.volumes}
                  </Link>
            <GridListTileBar
              title={<Link to={"/api/series/" + item.character}>{item.character}</Link>}
              classes={
                {
                    root: classes.titleBar,
                    title: classes.title
                }
              }
              actionIcon={
                <IconButton
                  aria-label={`star ${item.character}`}
                  onClick={serieshandler(item.series)}
                >
                  <FindInPageIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList> */}
      {/* working code  */}
      {/* {name   synopsis  volumes  extras} */}
      {/* {console.log(this.process.argv)} */}
      {/* {add modal on click of vol. that takes in item.series + item.character+ vol. ... pass through to goodreads api and diplays results} */}
      {console.log(window.location.pathname.split("/").slice(-1)[0])}
      {console.log("current name")}
      {console.log(currentname)}
      {console.log(argvparams)}
      {/* {<div onClick={LoadChosenSeries(series.character)}> CLICK ME!</div>} */}
      {/* {series.map(item => (
        <List key={item._id} >
          {item.character}, {item.name}, {item.synopsis}
          {item.volumes.map(vol => (
            <ListItem key={vol} >{vol}</ListItem>
          ))}
        </List>
      ))} */}
      {/* working code  */}

      {series.map(item => (
        <List key={item._id}>
          <ListItem key={item._id}>
            {item.character}, {item.name}, {item.series} ,{item.synopsis},{" "}
            {/* {<button onClick={() => seriesidhandler(item._id)}>Get Volumes</button>} */}
            {
              <Button onClick={() => showvolumes(item._id, series)}>
                Get Volumes
              </Button>
            }
            {/* const theVolumes = series.filter(series => series._id === id);
    console.log("this is theVolume:");
    console.log(theVolumes[0].volumes); */}
            {/* {!seriesid ? null : (
       <List>
        {series.filter(filterobject => filterobject._id = item(
         { filterobject}
        ))}
       </List>
     )} */}
            {/* {seriesid.filter(vol => ( */}
            {!seriesid ? null : (
              <List>
                {seriesid.map(vol => (
                  <ListItem key={vol} onClick={getgooglebook(vol)}>
                    {vol}
                  </ListItem>
                ))}
              </List>
            )}
          </ListItem>
        </List>
      ))}

      {}
      {/* 
      {!seriesid ? null : (

       
        <Paper>
       
          {series.map(item => (
            <Grid container key={item._id}>
            {console.log(item)}
              <Grid item>
                <Typography variant="h3">{}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h4"> Name {item.name}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h4"> series {item.series}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h4"> volumes {item.volumes}</Typography>
              </Grid>
            </Grid>
          ))}
        </Paper>
      )} */}
    </>
  );
};

export default Detail;
