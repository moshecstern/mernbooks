import React, { useState } from "react";
import './style.css'; 
import { Link } from "react-router-dom";
import {
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  Typography,
  ListSubheader
} from "@material-ui/core";
import useAxios from "axios-hooks";
import { makeStyles } from "@material-ui/core/styles";

const Linkpage = props => {
  const wikifandomdis = "https://batman.fandom.com/wiki/"+ props.props.match.params.name +"_(Disambiguation)";
  const wikifandommain = "https://batman.fandom.com/wiki/"+ props.props.match.params.name;
  const readingList ="https://www.comicbookherald.com/reading-dc-comics/"+props.props.match.params.name+"-reading-order/";
  ;


  return (
    <>
    <div className="linklist">
    <ul>
        <li><a href={wikifandomdis} target="_blank">See All Versions of {props.props.match.params.name} </a></li>
        <li><a href={wikifandommain} target="_blank">more info!</a></li>
        <li><a href={readingList} target="_blank">Comic Reading order  </a></li>
    </ul>
    </div>




    </>
  );
};

export default Linkpage;