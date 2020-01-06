import React, { useState } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import Notes from "../components/Notes";
import {
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Paper,
  Typography
} from "@material-ui/core";
import useAxios from "axios-hooks";
import FindInPageIcon from "@material-ui/icons/FindInPage";

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
  if (loading) {
    return <></>;
  }
  return (
    <>
      <GridList cols={4}>
        {characters.map(item => (
          <GridListTile
            key={item.name}
            onClick={() => getseriesbyname(item.name)}
          >
            <img src={item.img} alt={item.name} />
            {item.name}
            <GridListTileBar
              title={<Link to={"/series/" + item.name}>{item.name}</Link>}
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
            </Grid>
          ))}
        </Paper>
      )}
      <Notes></Notes>
    </>
  );
};

export default Home;
