import React from "react";
import { Grid, Typography, Link } from "@material-ui/core";

const News = () => {
  return (
    <Grid container justify="space-around" alignItems="baseline">
      <Grid item>
        <Typography variant="h1">Item One </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h1">Item two </Typography>
      </Grid>
    </Grid>
  );
};

export default News;
