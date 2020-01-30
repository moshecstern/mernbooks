import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Modal from "@material-ui/core/Modal";
import { List, ListItem } from "../List";
import Axios from "axios";
import useAxios from "axios-hooks";
import Fade from '@material-ui/core/Fade';
import Cookies from 'js-cookie';
import {
    Grid,
    Typography,
    Button,
    ListItemAvatar,
    Avatar,
    ListItemText
  } from "@material-ui/core";
  import Backdrop from '@material-ui/core/Backdrop';
  import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
  import clsx from 'clsx';
  import Card from '@material-ui/core/Card';
  import CardHeader from '@material-ui/core/CardHeader';
  import CardMedia from '@material-ui/core/CardMedia';
  import CardContent from '@material-ui/core/CardContent';
  import CardActions from '@material-ui/core/CardActions';
  import Collapse from '@material-ui/core/Collapse';
  import IconButton from '@material-ui/core/IconButton';
  import { red } from '@material-ui/core/colors';
  const jwtDecode = require('jwt-decode');
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    height: 500,
    flexGrow: 1,
    minWidth: 300,
    transform: 'translateZ(0)',
  },
  card: {
    maxWidth: 345,
    backgroundColor: "floralWhite",
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
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  avatar: {
    backgroundColor: red[500],
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    // backgroundColor: '#5HN7E7K',
    height: '75%',
    width: '75%',
    alignContent: 'center',
    // color: 'white',
    padding: theme.spacing(1),
  },
  paper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Userprofilecustom = props =>{
    let accessString = localStorage.getItem('JWT')
    if(accessString == null){
      accessString = Cookies.get("JWT");
    }
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [{ data: myuser, loading }, randomtext] = useAxios({
    url: "/api/userprofilecustom/" + jwtDecode(accessString).id,
    headers: { Authorization: `JWT ${accessString}` }
  });
  const [editUserprofile, setuserprofile] = useState(false);

const opencustomprofile = () =>{
  setuserprofile(true)
  handleOpen()
}
const [mylocation, setmylocation] = useState("");
const [myocupation, setmyocupation] = useState("");
const [myimg, setmyimg] = useState("https://i.stack.imgur.com/34AD2.jpg");
const [myinfo, setmyinfo] = useState("");
const [myfullname, setmyfullname] = useState("");
const [mynickname, setmynickname] = useState("");

function savecustomprofile(){
  if(myuser.userID === jwtDecode(accessString).id){
    Axios.put("/api/userprofilecustom/"+jwtDecode(accessString).id, {
      location: mylocation,
    ocupation: myocupation,
    img: myimg,
    info: myinfo,
    fullname: myfullname,
    nickname: mynickname
    },{headers: { Authorization: `JWT ${accessString}` }} )
    .then(res => randomtext())
    .catch(err => console.log(err));
  }else {
  Axios.post("/api/userprofilecustom", {
    userID: jwtDecode(accessString).id,
    location: mylocation,
    ocupation: myocupation,
    img: myimg,
    info: myinfo,
    fullname: myfullname,
    nickname: mynickname
  },{headers: { Authorization: `JWT ${accessString}` }} )
  .then(res => randomtext())
  .catch(err => console.log(err));
}
}
function deleteprofile(id){
  console.log(id)
  Axios.delete("/api/userprofilecustom/"+ id, {headers: { Authorization: `JWT ${accessString}` }})
  .then(res => randomtext())
.catch(err => console.log(err))
};
  // if (loading) {
  //   return <></>;
  // }
  return (
    <>
      
    <div>
<h2>User Profile</h2>
<Button onClick={opencustomprofile}>Create Profile</Button>
{!myuser ? null : (
  <div> 
{myuser.map(user => (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="book" className={classes.avatar}>
            P
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        
        title={user.nickname}
        subheader={user.fullname}
      />
      <CardMedia
        className={classes.media}
        image={user.img}
        title={user.nickname}
      />
      <CardContent>
      {/* {user.author.map(auth1 =>(
        <Typography variant="body2" color="textSecondary" component="p">
 BY: {auth1}
</Typography>
 ))} */}
        <Typography variant="body2" color="textSecondary" component="p">
       Name: {user.fullname}  Local: {user.location}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Since {user.date}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography variant="body2" color="textSecondary" component="p">
        <Button onClick={() => deleteprofile(user._id)}>Delete</Button>
         || Click => for more about me 
         {/* || <a href={user.link} target="_blank" rel="noopener noreferrer">Click me for google books</a> */}
        </Typography>
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
      {/* <Button onClick={() =>showuserumeinformation(user.Title)}> Get userumes Information</Button> */}
      {/* <Button onClick={() => deleteBook(user._id)}>Delete</Button> */}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>About Me</Typography>
          <Typography paragraph>
            {user.info}
          </Typography>
      
        </CardContent>
      </Collapse>
    </Card>
    ))}
</div>
    )}
    {myuser ? null : (
      function(){

      setuserprofile(false)
      handleOpen()
      }
      
    )}
    {/* {!editUserprofile ? false : ( */}
        <Modal
                // aria-labelledby="transition-modal-title"
        // aria-describedby="transition-modal-description"
        
        aria-labelledby="server-modal-title"
        aria-describedby="server-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        // container={() => rootRef.current}
        >
        <Fade in={open}>
    <div className={classes.root}>
      <div>
      <div><h2>Fill out as much or as little as you want to share</h2></div>
        {/* <TextField
          id="standard-full-width"
          label="Nickname"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          helperText="Full width!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        /> */}
        <TextField
          label="Full Name"
          id="margin-none"
          // defaultValue="John Smith"
          className={classes.textField}
          value={myfullname}
          onChange={(e)=> setmyfullname(e.target.value)}
          helperText="John Smith"
        />
          <TextField
          label="Nickname"
          id="margin-none"
          // defaultValue="Comicnerd1994"
          className={classes.textField}
          value={mynickname}
          onChange={(e)=> setmynickname(e.target.value)}
          helperText="Comicnerd1994"
        />
                <TextField
          label="Image"
          id="margin-none"
          // defaultValue="https://i.stack.imgur.com/34AD2.jpg"
          className={classes.textField}
          value={myimg}
          onChange={(e)=> setmyimg(e.target.value)}
          helperText="https:///yourimagehere.jpg"
        />
        </div>
        <div>
          <TextField
          label="Location"
          id="margin-none"
          // defaultValue="Philadelphia"
          className={classes.textField}
          value={mylocation}
          onChange={(e)=> setmylocation(e.target.value)}
          helperText="Philadelphia"
        />
            <TextField
          label="Ocupation"
          id="margin-none"
          // defaultValue="Full-Stack Developer"
          className={classes.textField}
          value={myocupation}
          onChange={(e)=> setmyocupation(e.target.value)}
          helperText="Full-Stack Developer"
        />
     
      {/* </div>
     
      <div> */}
        <TextField
          id="filled-full-width"
          label="Info"
          style={{ margin: 8 }}
          // placeholder="Share who you are"
          value={myinfo}
          onChange={(e)=> setmyinfo(e.target.value)}
          helperText="Share who you are, hobbies, ect."
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
              <Button onClick={savecustomprofile}>Save Profile</Button>
      <Button onClick={handleClose}>exit</Button>
      </div>

      <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="book" className={classes.avatar}>
            P
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        
        title={mynickname}
        subheader={myfullname}
      />
      <CardMedia
        className={classes.media}
        image={myimg}
        title={mynickname}
      />
      <CardContent>
      {/* {user.author.map(auth1 =>(
        <Typography variant="body2" color="textSecondary" component="p">
 BY: {auth1}
</Typography>
 ))} */}
        <Typography variant="body2" color="textSecondary" component="p">
       Name: {myfullname}  Local: {mylocation}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Since {Date.now}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography variant="body2" color="textSecondary" component="p">
        <Button >Delete</Button>
         || Click => for more about me 
         {/* || <a href={user.link} target="_blank" rel="noopener noreferrer">Click me for google books</a> */}
        </Typography>
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
      {/* <Button onClick={() =>showuserumeinformation(user.Title)}> Get userumes Information</Button> */}
      {/* <Button onClick={() => deleteBook(user._id)}>Delete</Button> */}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>About Me</Typography>
          <Typography paragraph>
            {myinfo}
          </Typography>
      
        </CardContent>
      </Collapse>
    </Card>


    </div>


    </Fade>
        </Modal>
      {/* )} */}
    </div>
      {/* </div> */}
      </>
  );
}
export default Userprofilecustom;