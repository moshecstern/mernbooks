import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import MatUiCard from "../MaterialuiComponents/Card"
import basicimage from "../../images/underconstruction.png"
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export default function CSSGrid() {
  const classes = useStyles();

  return (
    <div>
      {/* <Typography variant="subtitle1" gutterBottom>
        What we offer
      </Typography> */}
      <Grid container spacing={3}>
        <Grid item xs={6}>
          {/* <Paper className={classes.paper}> */}
          <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={basicimage}
          title="profile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Profile
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          create your own profile
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        <Button size="small" color="primary">
        <Link to={"/userprofile"}>Profile  </Link>
        </Button>
      </CardActions>
    </Card>
        </Grid>
    {/* blogging card */}
        <Grid item xs={6}>
          {/* <Paper className={classes.paper}> */}
          <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={basicimage}
          title="Blog"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Blogging
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          create your own Blog
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        <Button size="small" color="primary">
        <Link to={"/blog"}>Blog  </Link>
        </Button>
      </CardActions>
    </Card>
        </Grid>
        {/* marketplace */}
        <Grid item xs={6}>
          {/* <Paper className={classes.paper}> */}
          <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={basicimage}
          title="marketplace"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Market Place (coming soon)
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Sell or lend your books
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        <Button size="small" color="primary">
        <Link to={"/home"}>Market Place  </Link>
        </Button>
      </CardActions>
    </Card>
        </Grid>
        {/* games */}
        <Grid item xs={6}>
          {/* <Paper className={classes.paper}> */}
          <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={basicimage}
          title="Games"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Games
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Play games and save your scores
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        <Button size="small" color="primary">
        <Link to={"/gamepage"}>All Games  </Link>
        </Button>
      </CardActions>
    </Card>
        </Grid>
        <Grid item xs={12}>
          {/* <Paper className={classes.paper}> */}
          <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={basicimage}
          title="Character"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Character Search
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Find Character, series, and volume info by searching above or clicking below
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions> */}
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        {/* <Button size="small" color="primary">
        <Link to={"/blog"}>Blog  </Link>
        </Button> */}
      {/* </CardActions> */}
    </Card>
        </Grid> 
          {/* <MatUiCard 
          thistitle={"Profile"}
         thislink={"/userprofile"}
          thistext= {"create your own profile"}
          thisimage={"../../images/Comicbookpages.jpg"}
          /> */}
          {/* </Paper> */}
        {/* <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid> */}
        {/* <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>xs=3</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>xs=8</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>xs=4</Paper>
        </Grid> */}
      </Grid>
      <Divider className={classes.divider} />

    </div>
  );
}