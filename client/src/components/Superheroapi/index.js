import React, { Component, useState } from "react";
import API from "../../utils/API";
import { Link, useParams } from "react-router-dom";
import { Col, Row } from "../Grid";
import { List, ListItem } from "../List";
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
import Modal from "../Modals";
import SimpleModal from "../Modals";
import SearchResults from "../SearchResults";
import { render } from "react-dom";
import Axios from "axios";
import cors from "cors";

const Superheroapi = (props) => {
  const [{ data: heroinfo, loading }, randomtext] = useAxios(
    { url: "https://cors-anywhere.herokuapp.com/http://superheroapi.com/api/10214859933028426/search/"+ props.props.match.params.name+"/id/biography" }
    // { url: "/api/series/"}
    )

  console.log("this is a test");
  console.log(props);
  console.log(props.props.match.params.name);

  console.log("********************")
  console.log(heroinfo);
console.log("********************")

  const [currentname, setCurrentname] = useState();
  const [seriesid, setseriesid] = useState();
  const [currentId, setCurrentId] = useState()
 
  console.log(currentname);
  console.log("currentname");
  const argvparams = window.location.pathname.split("/").slice(-1)[0];

  const seriesidhandler = id => () => {
    // setCurrentId(id)
    console.log(id)
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

  const showvolumes = (id, series) => {
    // setseriesid(id);
    console.log("this is whatever series is" + id);
    console.log(series)
    const theVolumes = series.filter(series => series._id === id);
    console.log("this is theVolume:");
    console.log(theVolumes[0].volumes);
    setseriesid(theVolumes[0].volumes)
  return (

    <div>
    {console.log( 
    <List>
      {theVolumes[0].volumes.map(vol =>(
        <ListItem key={vol}>
        {vol}
        </ListItem>
      ))}
      </List>
    )}
  </div>
    )
 }
  if (loading) {
    return <></>;
  }

  return (
    <>
    {/* {console.log("heroinfo")}
{console.log(heroinfo)}
{console.log("heroinfo")} */}
   {/* {add modal on click of vol. that takes in item.series + item.character+ vol. ... pass through to goodreads api and diplays results} */}
      {/* {console.log(window.location.pathname.split("/").slice(-1)[0])}
      {console.log("current name")} */}
{console.log(heroinfo.results)}
{/* ------------------- */}
      {!heroinfo ? null : (
          <List>
      {heroinfo.results.map(item => (
              <ListItem key={item}>

        <div>Name : {item.name}, </div> 
         {/* Full Name: {item.biography.full-name} */}
<div>Base's: {item.work.base}</div>

         
         

              </ListItem>
      ))}
          </List>
      )}
      {/* ------------------- */}

      {/* {series.map(item => (
        <List key={item._id}>
          <ListItem key={item._id}>
            {item.character}, {item.name}, {item.series} ,{item.synopsis},{" "}
            {<Button onClick={() => showvolumes(item._id, series)}>Get Volumes</Button>}
             {!seriesid ? null : (
              <List>
                {seriesid.filter(vol => (
                  <ListItem key={vol}>{vol}</ListItem>
                ))}
              </List>
            )}
          </ListItem>
        </List>
      ))} */}

      {}
    </>
  );
};

export default Superheroapi;