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

const Productsbought = props =>{
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

  const [{ data: books, loading }, randomtext] = useAxios({
    url: "/api/productsbought/"+ jwtDecode(accessString).id,
    headers: { Authorization: `JWT ${accessString}` }
  });
  const [editbookprofile, setblogedit] = useState(false);

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

async function addToCart (titleM, descM, imgM, linkM, authorM, publishedM, numissuesM, priceM, messageM) {
 const message2I = prompt("Ask a question/ or comment & we will get back to you")
  Axios.post("/api/mycart", {
    userID: jwtDecode(accessString).id,
    Title: titleM,
    img: imgM,
    link: linkM,
    author: authorM,
    description: descM,
    published: publishedM,
    numIssues: numissuesM,
    price: priceM,
    message: messageM,
    payed: false,
    message2: message2I
  },{headers: { Authorization: `JWT ${accessString}` }})
  .then(res => console.log(res))
  .then(alert("Saved to Cart"))
  .catch(err => alert(err));
}
// function savelike(id, liked, bookid){
//   console.log(jwtDecode(accessString).bookname)
//   if(bookid !== jwtDecode(accessString).id){
   
//     Axios.put("/api/bookblog/"+id, {
//     liked: liked + 1  
//     },{headers: { Authorization: `JWT ${accessString}` }} )
//     .then(res => randomtext())
//     .catch(err => console.log(err));
//   }
// }
// function savebooks(){
//     // console.log(jwtDecode(accessString))
// //    getbook()
//     // run function to retrieve book name
//   Axios.post("/api/bookblog", {
//     bookID: jwtDecode(accessString).id,
//     author: jwtDecode(accessString).bookname,
//     title: mytitle,
//     img: myimg,
//     message: mymessage,
//     messagetwo: mymessagetwo,
//     link: mylink,
//     linkdescription: mylinkdescription
//   },{headers: { Authorization: `JWT ${accessString}` }} )
//   .then(alert("Saved Blog!"))
//   .then(res => randomtext())
//   // .catch(err => console.log(err));
//   .catch(err => alert(err));

// }
function deleteItemFromCart(id){
  console.log(id)
  Axios.delete("/api/mycart/"+ id, {headers: { Authorization: `JWT ${accessString}` }})
  .then(res => randomtext())
.catch(err => console.log(err))
};
//   if (loading) {
//     return <></>;
//   }
// const [total, setTotal] = useState(0)
// async function buyCart(event){
//     event.preventDefault()
//     // if payed(true), then
// books.map(cartBook => (
//     Axios.post("/api/productsbought/", {
//         userID: jwtDecode(accessString).id,
//         username: jwtDecode(accessString).username,
//         Title: cartBook.Title,
//         img: cartBook.img,
//         link: cartBook.link,
//         author: cartBook.author,
//         description: cartBook.description,
//         published: cartBook.published,
//         numIssues: cartBook.numissues,
//         price: cartBook.price,
//         message: cartBook.message,
//         payed: true,
//         message2: cartBook.message2
//     },{headers: { Authorization: `JWT ${accessString}` }} )
//     .then(res => console.log(res))
//     .then(alert("Your product/s should arrive with in 2 weeks"))
//     .catch(err => alert(err))
// ))
// books.map(delBook => (
//     Axios.delete("/api/mycart/"+ delBook._id, {headers: { Authorization: `JWT ${accessString}` }})
//     .then(res => randomtext())
//   .catch(err => console.log(err))
// ))
// // else alert(please enter credit card info to purchase)
// }
// useEffect(() => {
//     getTotalPrice
//   }, []);
// const getTotalPrice = () => {
//     books.map(bookprice => (
//   setTotal(total+bookprice.price)
//     ))
// }
  return (
    <>
      
    <div>
<h2>Books Bought</h2>
{/* <Button onClick={openblogform}>edit book</Button> */}
{!books ? null : (
  <div> 
  {/* <h2>Total: {total}</h2>
  <Button onClick={buyCart}>Buy({total})</Button> */}
<Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
  margin="auto"
>
{books.map(book => (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="blog" className={classes.avatar}>
            P
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        
        title={book.Title}
        subheader={'$'+book.price}
      />
      <CardMedia
        className={classes.media}
        image={book.img}
        title={book.author}
      />
      <CardContent>
      {/* {book.author.map(auth1 =>(
        <Typography variant="body2" color="textSecondary" component="p">
 BY: {auth1}
</Typography>
 ))} */}
        <Typography variant="body2" color="textSecondary" component="p">
       Details: {book.message} 
        </Typography>
        {!book.message2 ? null : (
<span>
        {book.message2.map(message => (
        <Typography variant="body2" color="textSecondary" component="p">
       Comments: {message} 
        </Typography>
        ))}
        </span>
        )}
        <Typography variant="body2" color="textSecondary" component="p">
        {book.publisher}, {book.author}  
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Created: {book.date}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography variant="body2" color="textSecondary" component="p">
        {/* <Button onClick={() => deleteblog(book._id)}>Delete</Button> */}
        || <a href={book.link} target="_blank" rel="noopener noreferrer">Click me {book.linkdescription}</a> || Click => for more
         {/* || <a href={book.link} target="_blank" rel="noopener noreferrer">Click me for google books</a> */}
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
        {/* <Button onClick={()=> addToCart(book.Title,book.description, book.img, book.link, book.author, book.published, book.numIssues, book.price ,book.message)}>Add to cart</Button> */}
        {/* <Button onClick={()=> deleteItemFromCart(book._id)}>Remove from cart</Button> */}

        {/* <Button onClick={() =>savelike(book._id, book.liked, book.bookID)}> Like {book.liked}</Button> */}
      {/* <Button onClick={() =>showbookumeinformation(book.Title)}> Get bookumes Information</Button> */}
      {/* <Button onClick={() => deleteBook(book._id)}>Delete</Button> */}
      
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {/* <Typography paragraph>About Me</Typography> */}
          <Typography paragraph>
            {book.description}
          </Typography>
      
        </CardContent>
      </Collapse>
    </Card>
    
    ))}
    </Grid>
    {/* <Button onClick={buyCart}>Buy ({total})</Button> */}
</div>

    )}
    {books ? null : (
      <div><h2>There is nothing in your purchase history.. yet!</h2> </div>
      
    )}
    
        {/* <Modal
     
        
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
        
        >
        <Fade in={open}>
       
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
        
          className={classes.textField}
          value={myauthor}
          onChange={(e)=> setmyauthor(e.target.value)}
          helperText="Your Name"
        />
        <TextField
          label="Title"
          id="margin-none"
         
          className={classes.textField}
          value={mytitle}
          onChange={(e)=> setmytitle(e.target.value)}
          helperText="Batman is awesome"
        />
          <TextField
          label="Link"
          id="margin-none"
         
          className={classes.textField}
          value={mylink}
          onChange={(e)=> setmylink(e.target.value)}
          helperText="Add a link"
        />
                  <TextField
          label="Link Description"
          id="margin-none"
          
          className={classes.textField}
          value={mylinkdescription}
          onChange={(e)=> setmylinkdescription(e.target.value)}
          helperText="Title your link"
        />
                <TextField
          label="Image"
          id="margin-none"
         
          className={classes.textField}
          value={myimg}
          onChange={(e)=> setmyimg(e.target.value)}
          helperText="https:///yourimagehere.jpg"
        />
        </div>
        <div>
  
     
    
        <TextField
          id="filled-full-width"
          label="Info"
          style={{ margin: 8 }}
          
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
           <Button onClick={savebooks}>Save Blog</Button>
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
        subheader={myauthor}
      />
      <CardMedia
        className={classes.media}
        image={myimg}
        title={myauthor}
      />
      <CardContent>

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
        </Modal> */}
    </div>

      </>
  );
}
export default Productsbought;