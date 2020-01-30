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
  import { red, lightGreen } from '@material-ui/core/colors';
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
    padding: theme.spacing(2,3,2,3),
    margin: theme.spacing(2)
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
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  avatar: {
    backgroundColor: lightGreen[500],
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: lightGreen[500],
    // backgroundColor: '#5HN7E7K',
    height: '75%',
    width: '75%',
    alignContent: 'center',
    // color: 'white',
    padding: theme.spacing(3),
  },
  paper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const Allblogs = props =>{
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

  const [{ data: myblog, loading }, randomtext] = useAxios({
    url: "/api/userblog/",
    headers: { Authorization: `JWT ${accessString}` }
  });
  const [editUserprofile, setblogedit] = useState(false);

const openblogform = () =>{
  setblogedit(true)
  handleOpen()
}
const [mytitle, setmytitle] = useState("");
const [mymessage, setmymessage] = useState("");
const [myimg, setmyimg] = useState("https://cdn.pixabay.com/photo/2017/04/09/16/40/batman-2216148_1280.jpg");
const [mylink, setmylink] = useState("");
const [mymessagetwo, setmymessagetwo] = useState("");
const [mylinkdescription, setmylinkdescription] = useState("blog link");
const [myauthor, setmyauthor] = useState("");

function savelike(id, liked, userid){
  console.log(jwtDecode(accessString).username)
  if(userid !== jwtDecode(accessString).id){
   
    Axios.put("/api/userblog/"+id, {
    liked: liked + 1  
    },{headers: { Authorization: `JWT ${accessString}` }} )
    .then(res => randomtext())
    .catch(err => console.log(err));
  }
}
function savemyblog(){
    // console.log(jwtDecode(accessString))
//    getuser()
    // run function to retrieve user name
  Axios.post("/api/userblog", {
    userID: jwtDecode(accessString).id,
    author: jwtDecode(accessString).username,
    title: mytitle,
    img: myimg,
    message: mymessage,
    messagetwo: mymessagetwo,
    link: mylink,
    linkdescription: mylinkdescription
  },{headers: { Authorization: `JWT ${accessString}` }} )
  .then(res => randomtext())
  .catch(err => console.log(err));

}
function deleteblog(id){
  console.log(id)
  Axios.delete("/api/userblog/"+ id, {headers: { Authorization: `JWT ${accessString}` }})
  .then(res => randomtext())
.catch(err => console.log(err))
};
//   if (loading) {
//     return <></>;
//   }
  return (
    <>
      
    <div>
<h2>Blogs</h2>
<Button onClick={openblogform}>Create Blog</Button>
{!myblog ? null : (
  <div> 
<Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
  margin="auto"
>
{myblog.map(user => (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="blog" className={classes.avatar}>
            B
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        
        title={user.author}
        subheader={user.title}
      />
      <CardMedia
        className={classes.media}
        image={user.img}
        title={user.author}
      />
      <CardContent>
      {/* {user.author.map(auth1 =>(
        <Typography variant="body2" color="textSecondary" component="p">
 BY: {auth1}
</Typography>
 ))} */}
        <Typography variant="body2" color="textSecondary" component="p">
       Name: {user.author} 
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {user.message} 
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Created: {user.date}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography variant="body2" color="textSecondary" component="p">
        {/* <Button onClick={() => deleteblog(user._id)}>Delete</Button> */}
        || <a href={user.link} target="_blank" rel="noopener noreferrer">Click me {user.linkdescription}</a> || Click => for more
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
        <Button onClick={() =>savelike(user._id, user.liked, user.userID)}> Like {user.liked}</Button>
      {/* <Button onClick={() =>showuserumeinformation(user.Title)}> Get userumes Information</Button> */}
      {/* <Button onClick={() => deleteBook(user._id)}>Delete</Button> */}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {/* <Typography paragraph>About Me</Typography> */}
          <Typography paragraph>
            {user.messagetwo}
          </Typography>
      
        </CardContent>
      </Collapse>
    </Card>
    ))}
    </Grid>
</div>

    )}
    {myblog ? null : (
      function(){

      setblogedit(false)
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
        {/* <div> */}
        <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
    <div className={classes.root}>
      <div>
      <div><h2>What's on your mind?</h2></div>
      <br />
      <TextField
          label="Name"
          id="margin-none"
          // defaultValue="Comicnerd1994"
          className={classes.textField}
          value={myauthor}
          onChange={(e)=> setmyauthor(e.target.value)}
          helperText="Your Name"
        />
        <TextField
          label="Title"
          id="margin-none"
          // defaultValue="John Smith"
          className={classes.textField}
          value={mytitle}
          onChange={(e)=> setmytitle(e.target.value)}
          helperText="Batman is awesome"
        />
          <TextField
          label="Link"
          id="margin-none"
          // defaultValue="Comicnerd1994"
          className={classes.textField}
          value={mylink}
          onChange={(e)=> setmylink(e.target.value)}
          helperText="Add a link"
        />
                  <TextField
          label="Link Description"
          id="margin-none"
          // defaultValue="Comicnerd1994"
          className={classes.textField}
          value={mylinkdescription}
          onChange={(e)=> setmylinkdescription(e.target.value)}
          helperText="Title your link"
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
  
     
      {/* </div>
     
      <div> */}
        <TextField
          id="filled-full-width"
          label="Info"
          style={{ margin: 8 }}
          // placeholder="Share who you are"
          value={mymessage}
          onChange={(e)=> setmymessage(e.target.value)}
          helperText="Main blog area"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
                <TextField
          id="filled-full-width"
          label="Info"
          style={{ margin: 8 }}
          // placeholder="Share who you are"
          value={mymessagetwo}
          onChange={(e)=> setmymessagetwo(e.target.value)}
          helperText="More information, will display on click"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
           <Button onClick={savemyblog}>Save Blog</Button>
      <Button onClick={handleClose}>exit</Button>
      </div>
      <div>
<div><h2>How it will look</h2></div>
<Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="blog" className={classes.avatar}>
            B
          </Avatar>
        }
        title={mytitle}
        // subheader={jwtDecode(accessString).id}
        subheader={myauthor}
      />
      <CardMedia
        className={classes.media}
        image={myimg}
        title={myauthor}
      />
      <CardContent>
      {/* {user.author.map(auth1 =>(
        <Typography variant="body2" color="textSecondary" component="p">
 BY: {auth1}
</Typography>
 ))} */}
        <Typography variant="body2" color="textSecondary" component="p">
       Name: {myauthor} 
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        {mymessage} 
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Created: {Date.now}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography variant="body2" color="textSecondary" component="p">
        <Button>Delete</Button>
        || <a>Click me {mylinkdescription}</a> || Click => for more
        </Typography>
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
 </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {mymessagetwo}
          </Typography>
      
        </CardContent>
      </Collapse>
    </Card>
</div>
   
    </div>
</Grid>
    </Fade>
        </Modal>
    </div>

      </>
  );
}
export default Allblogs;