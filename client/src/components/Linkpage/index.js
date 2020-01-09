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
  // const wikifandomdis = "https://"+props.props.match.params.name+".fandom.com/wiki/"+ props.props.match.params.name +"_(Disambiguation)";
  // const wikifandommain = "https://"+props.props.match.params.name+".fandom.com/wiki/"+ props.props.match.params.name;
  const wikifandomdis = "https://superheroes.fandom.com/wiki/"+ props.props.match.params.name +"_(Disambiguation)";
  const wikifandommain = "https://superheroes.fandom.com/wiki/"+ props.props.match.params.name;
  const readingList ="https://www.comicbookherald.com/reading-dc-comics/"+props.props.match.params.name+"-reading-order/";
  // const wikiList ="https://en.wikipedia.org/wiki/List_of_"+props.props.match.params.name+"_comics";
  const wikiList ="https://en.wikipedia.org/wiki/"+props.props.match.params.name;
  

  return (
    <>
    <div className="linklist">
    <ul>
        <li><a href={wikifandomdis} target="_blank">See All Versions of {props.props.match.params.name} </a></li>
        <li><a href={wikifandommain} target="_blank">More Info!</a></li>
        <li><a href={readingList} target="_blank">Comic Reading order</a></li>
        <li><a href={wikiList} target="_blank">Wiki</a></li>
    </ul>
    </div>




    </>
  );
};

export default Linkpage;