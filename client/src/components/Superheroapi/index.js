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

const Superheroapi = props => {
  const [{ data: heroinfo, loading }, randomtext] = useAxios({
    url:
      "https://cors-anywhere.herokuapp.com/http://superheroapi.com/api/10214859933028426/search/" +
      props.props.match.params.name +
      "/id/biography"
  });
  console.log("this is a test");
  console.log(props);
  console.log(props.props.match.params.name);
  console.log("********************");
  console.log(heroinfo);
  console.log("********************");
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
                <img src={item.image.url} alt={item.name} />
                <GridListTileBar
                  title={<Link to={"/series/" + item.name}>{item.name}</Link>}
                  subtitle={
                    <>
                      <span>Full Name: {item.biography["full-name"]}</span>
                      <br />
                      <span>Bases: {item.work.base}</span>
                    </>
                  }
                  classes={{
                    root: classes.titleBar,
                    title: classes.title
                  }}
                />
                <div>Name : {item.name}, </div>
                {/* <div>Full Name: {item.biography["full-name"]}</div> */}
                <div>Bases: {item.work.base}</div>
              </GridListTile>
            ))}
          </GridList>
        </Grid>
      )}
    </>
  );
};

export default Superheroapi;
