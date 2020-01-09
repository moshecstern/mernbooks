import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  Typography
} from "@material-ui/core";
import useAxios from "axios-hooks";
import { makeStyles } from "@material-ui/core/styles";
// import { parse } from "dotenv/types";


// https://cors-anywhere.herokuapp.com/
const Superheroapi = props => {
  const [{ data: heroinfo, loading }, randomtext] = useAxios({
    url:
      "https://cors-anywhere.herokuapp.com/https://comicvine.gamespot.com/api/characters/?api_key=633dbefdef3f0c1fbfb7e640d1fa1895b452b02f&filter=name:"+props.props.match.params.name+"&format=json"
  });
  console.log("this is a test");
  console.log(props);
  console.log(props.props.match.params.name);
  console.log("********************");
  console.log(heroinfo);
  console.log("********************");

  const handleparser = info => {
     return info  
//     const parser = new DOMParser();
// return parser.parseFromString(info, "text/html")
  }


  const [currentname, setCurrentname] = useState();
  const [seriesid, setseriesid] = useState();
  const [currentId, setCurrentId] = useState();
  const useStyles = makeStyles(theme => ({
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
  const classes = useStyles();
  if (loading) {
    return <></>;
  }
  return (
    <>
      {!heroinfo ? null : (
        <Grid
          direction="column"
          className={classes.root}
          container
          justify="center"
        >
          <Typography variant="h3">{props.props.match.params.name}</Typography>
          <GridList cellHeight={600} cols={3} className={classes.gridList}>
            {heroinfo.results.map(item => (
              <GridListTile key={item}>
                <img src={item.image.medium_url} alt={item.name} />
                <GridListTileBar
                  title={<Link to={"/series/" + item.name}>{item.name}</Link>}
                  subtitle={
                    <>
                      <span>Aliases: {item.aliases}</span> 
                      <br />
                      {/* <span>Link: {item.api_detail_url}</span> */}
                      <a href={item.api_detail_url} target="_blank">Link</a>
                      <br />

                      <span>Bio: {item.deck} </span>

                      {/* <span>Bio: {handleparser(item.description)} </span> */}

                      
                      
                      {/* <span>Groups: {item.connections["group-affiliation"]}</span> */}

                      {/* <br />
                      <span>alter egos{item.biography["alter-egos"]}</span>
                    <br /> */}
                    </>
                  }
                  classes={{
                    root: classes.titleBar,
                    title: classes.title
                  }}
                />
              </GridListTile>
            ))}
          </GridList>
        </Grid>
      )}
    </>
  );
};

export default Superheroapi;
