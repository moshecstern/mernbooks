import React, { useState } from "react";
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
      justifyContent: "space-around",
      overflow: "hidden",
      backgroundColor: theme.palette.background.paper
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
  // const showvolumes = (id, series) => {
  //   console.log("this is whatever series is" + id);
  //   console.log(series);
  //   const theVolumes = series.filter(series => series._id === id);
  //   console.log("this is theVolume:");
  //   console.log(theVolumes[0].volumes);
  //   setseriesid(theVolumes[0].volumes);
  //   return (
  //     <div>
  //       {console.log(
  //         <List>
  //           {theVolumes[0].volumes.map(vol => (
  //             <ListItem key={vol}>{vol}</ListItem>
  //           ))}
  //         </List>
  //       )}
  //     </div>
  //   );
  // };
  if (loading) {
    return <></>;
  }

  return (
    <>
      {!heroinfo ? null : (
        <Grid className={classes.root} container>
          <GridList cols={2} item cellHeight={400} className={classes.gridList}>
            <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
              <ListSubheader component="div">
                <Typography variant="h3">
                  {props.props.match.params.name}
                </Typography>
              </ListSubheader>
            </GridListTile>
            {heroinfo.results.map(item => (
              <GridListTile key={item}>
                <img src={item.image.url} alt={item.name} />
                <GridListTileBar
                  title={<Link to={"/series/" + item.name}>{item.name}</Link>}
                  subtitle={
                    <>
                      <span>Full Name: {item.biography["full-name"]}</span>{" "}
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
