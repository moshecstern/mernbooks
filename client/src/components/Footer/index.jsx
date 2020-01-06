import React from "react";
import { Grid, Typography, Link, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => {
  return {
    title: {
      backgroundColor: "#F2A74B",
      padding: theme.spacing(2, 1, 2, 1)
    }
  };
});


const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container justify="space-between" alignItems="baseline" className={classes.title}> 
      <Grid item>
        <Link href="https://github.com/moshecstern/mernbooks">
          View Repository
        </Link>
      </Grid>
      <Grid item>
        <Typography variant="subtitle2">
          Copyright 2020 Zachary Powers, Moshe Stern, Liam Wynne
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
