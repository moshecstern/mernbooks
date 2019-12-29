import React from "react";
import { Grid, Typography, Link } from "@material-ui/core";

const Footer = () => {
  return (
    <Grid container justify="space-between">
      <Grid item>
        <Link>View Repository</Link>
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
