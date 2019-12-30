import React from "react";
import {
  TextField,
  Button,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import ComicbookpagesModified from "../../images/ComicbookpagesModified.jpg";
import "typeface-roboto";

const useStyles = makeStyles(theme => {
  return {
    root: {
      backgroundColor: "red"
    },
    title: {
      backgroundImage: `url(${ComicbookpagesModified})`,
      padding: theme.spacing(15, 0, 15, 0)
    }
  };
});

const Nav = () => {
  const classes = useStyles();
  const login = true;
  const userName = "anything";
  return (
    <Grid container direction="column">
      <Grid container item justify="space-between" className={classes.root}>
        <Grid item>
          <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            variant="outlined"
          />
        </Grid>
        {login ? (
          `Hello ${userName}`
        ) : (
          <Grid item>
            <Button>Login</Button>
          </Grid>
        )}
      </Grid>
      <Grid item className={classes.title}>
        <Typography variant="h2" gutterBottom align="center">
          Graphic Know-vel{" "}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Nav;
