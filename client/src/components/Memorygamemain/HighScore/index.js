import React, { useState } from "react";
// import REACT_APP_googlebooks_APP_API_KEY from "dotenv";
// import Superheroapi from "../Superheroapi";
// import { List, ListItem } from "../List";
// import Linkpage from "../Linkpage";
// import Comicbookvineapi from "../Comicvineapi";
import { Link } from "react-router-dom";
import Cookies from 'js-cookie';

import {
  Grid,
  Typography,
  Button,
  ListItemAvatar,
  Avatar,
  ListItemText
} from "@material-ui/core";
import useAxios from "axios-hooks";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
// import FolderIcon from "@material-ui/icons/Folder";
// import Modal from "@material-ui/core/Modal";
// import clsx from 'clsx';
import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import IconButton from '@material-ui/core/IconButton';
// import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import Backdrop from '@material-ui/core/Backdrop';
// import Fade from '@material-ui/core/Fade';
// import Map from "../Map";
const jwtDecode = require('jwt-decode');
const useStyles = makeStyles({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const Userhighscorememory = props => {
    let accessString = localStorage.getItem('JWT')
    if(accessString == null){
      accessString = Cookies.get("JWT");
    }
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    //   const [modalStyle] = React.useState(getModalStyle);
      const [expanded, setExpanded] = React.useState(false);
    
    //   const handleExpandClick = () => {
    //     setExpanded(!expanded);
    //   };

    const [{ data: memScore, loading }, randomtext] = useAxios({
        url: "/api/userhighscorememory/" + jwtDecode(accessString).id,
        headers: { Authorization: `JWT ${accessString}` }
      });

      function deleteScore(id){
        console.log(id)
        Axios.delete("/api/userhighscorememory/"+ id, {headers: { Authorization: `JWT ${accessString}` }})
        .then(res => randomtext())
      .catch(err => console.log(err))
      };

      if (loading) {
        return <></>;
      }
      return (
        <>
{memScore.map(score => (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Trivia Game
        </Typography>
        <Typography variant="h5" component="h2">
          Score: {score.score}
        </Typography>
        {/* <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography> */}
        <Typography variant="body2" component="p">
         <Button onClick={() =>deleteScore(score._id)}>Delete</Button>
          <br />
          {/* {'"a benevolent smile"'} */}
          Date: {score.date}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    ))}




         </>
  );
};

export default Userhighscorememory;