import React, { useState } from "react";
import REACT_APP_googlebooks_APP_API_KEY from "dotenv";
import Superheroapi from "../Superheroapi";
import { List, ListItem } from "../List";
import Linkpage from "../Linkpage";
import Comicbookvineapi from "../Comicvineapi";
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
import FolderIcon from "@material-ui/icons/Folder";
import Modal from "@material-ui/core/Modal";
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
const jwtDecode = require('jwt-decode');
// console.log(jwtDecode(accessString).id)

function rand() {
  return Math.round(Math.random() * 20) - 10;
}
// function getModalStyle() {
//   const top = 50;
//   const left = 50;
//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`
//   };
// }
const useStyles = makeStyles(theme => ({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
  }));

const Userprofile = props => {
  let accessString = localStorage.getItem('JWT')
  if(accessString == null){
    accessString = Cookies.get("JWT");
  }
  const classes = useStyles();
//   const [modalStyle] = React.useState(getModalStyle);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [{ data: mybooks, loading }, randomtext] = useAxios({
    url: "/api/userbooks/" + jwtDecode(accessString).id,
    headers: { Authorization: `JWT ${accessString}` }
  });
//   props.match.params.name

  console.log("this is a test from userprofile &&$&&#&*@&^#@@#S");
  // console.log(changeCaseFirstLetter(props.props.match.params.name));
//   console.log(props.match.params.name);
  console.log(mybooks);
  console.log("my books")
  const [currentextras, setcurrentextras] = useState();
  const [currentname, setCurrentname] = useState();
  const [seriesid, setseriesid] = useState();
  const [currentId, setCurrentId] = useState();
  const [currentsearchresults, setcurrentsearchresults] = useState();
  const [currentSeries, setCurrentSeries] = useState();
//   console.log(currentname);
//   console.log("currentname");

function savevoltoprofile (myid, mytitle, myimg, mylink, myauthor, mydesc, mypublished) {
    // console.log(jwtDecode(accessString).id)
    // event.preventDefault();
    // const accessString = localStorage.getItem('JWT');
    console.log(myid)
    console.log("MY ID")
    Axios.post("/api/userbooks", {
      userID: myid,
      Title: mytitle,
      img: myimg,
      link: mylink,
      author: myauthor,
      description: mydesc,
      published: mypublished
    },{headers: { Authorization: `JWT ${accessString}` }} )
    .then(res => randomtext())
    .catch(err => console.log(err));
  }
 //figure out what you need to pass as variable 'seriesid' from the button
  const showvolumeinformation = (searchtitle) => {
    Axios.get(
      "https://www.googleapis.com/books/v1/volumes?q='" +
        searchtitle +
        "&orderBy=relevance"
    ).then(function(response) {
    //   console.log(response);
    //   console.log(response.data);
      // console.log(props.match.params.name);
      setcurrentsearchresults(response.data);
      handleOpen();
    });
  };
  // const getgooglebook = vol => {
  //   console.log(vol);
  // };

   
  if (loading) {
    return <></>;
  }
  return (
    <>
    {/* <Grid container spacing={2}>
    <Grid item> */}
    {mybooks.map(vol => (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="book" className={classes.avatar}>
            V
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={vol.Title}
        subheader={vol.published}
      />
      <CardMedia
        className={classes.media}
        image={vol.img}
        title="Paella dish"
      />
      <CardContent>
      {vol.author.map(auth1 =>(
        <Typography variant="body2" color="textSecondary" component="p">
 BY: {auth1}
</Typography>
 ))}
        <Typography variant="body2" color="textSecondary" component="p">
         Click Below for Description || <a href={vol.link} target="_blank" rel="noopener noreferrer">Click me for google books</a>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      <Button
                        onClick={() =>
                          showvolumeinformation(vol.Title)
                        }
                      >
                        Get Volumes Information
                      </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
            {vol.description}
          </Typography>
      
        </CardContent>
      </Collapse>
    </Card>
    ))}

      {!currentsearchresults ? null : (
        <Modal
                aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}

        >
        <Fade in={open}>
          <div className={classes.paper}>
            <List>
              {currentsearchresults.items.map(result => (
                <ListItem key={result}>
                  {console.log(result)}
                  <div>Title: {result.volumeInfo.title}: {result.volumeInfo.subtitle}</div>
                  
                {!result.volumeInfo.imageLinks ? null : (
                    <div>
                      <img src={result.volumeInfo.imageLinks.thumbnail}/>
                    </div>
                  )}
                  <div>
                    <a href={result.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
                      Google Books Link
                    </a>
                  </div>
                  <div>Authors: {result.volumeInfo.authors}</div>
                  <div>Published Date: {result.volumeInfo.publishedDate}</div>
                  <div>Description: {result.volumeInfo.description}</div>
                  <Button
                        onClick={() =>
                          savevoltoprofile(jwtDecode(accessString).id, result.volumeInfo.title, result.volumeInfo.imageLinks.thumbnail, result.volumeInfo.previewLink, result.volumeInfo.authors, result.volumeInfo.description, result.volumeInfo.publishedDate)
                        }
                      >
                        Save Volume
                      </Button>
                </ListItem>
              ))}
            </List>
          </div>
          </Fade>
        </Modal>
      )}
      {/* </div> */}
    {/* </Grid> */}
    </>
  );
};

export default Userprofile;