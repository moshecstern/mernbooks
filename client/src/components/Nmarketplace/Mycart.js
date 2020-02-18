import React, { useState, useEffect } from "react";
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
  // import StripeCheckout from 'react-stripe-checkout';
  // import Checkout from "../Marketplace/checkout"
  // import {StripeProvider} from 'react-stripe-elements';
  // import { Elements, StripeProvider } from "react-stripe-elements";
  // import Checkout from "./Checkout"
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
    // backgroundColor: lightGreen[500],
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

const Mycart = props =>{
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
    url: "/api/mycart/"+ jwtDecode(accessString).id,
    headers: { Authorization: `JWT ${accessString}` }
  });
  const [editbookprofile, setblogedit] = useState(false);

const openmodal = () =>{
  // setblogedit(true)
  handleOpen()
}
// const [mytitle, setmytitle] = useState("");
// const [mymessage, setmymessage] = useState("");
// const [myimg, setmyimg] = useState("https://cdn.pixabay.com/photo/2017/04/09/16/40/batman-2216148_1280.jpg");
// const [mylink, setmylink] = useState("");
// const [mymessagetwo, setmymessagetwo] = useState("");
// const [mylinkdescription, setmylinkdescription] = useState("blog link");
// const [myauthor, setmyauthor] = useState("");

// async function addToCart (titleM, descM, imgM, linkM, authorM, publishedM, numissuesM, priceM, messageM) {
//  const message2I = prompt("Ask a question/ or comment & we will get back to you")
//   Axios.post("/api/mycart", {
//     userID: jwtDecode(accessString).id,
//     Title: titleM,
//     img: imgM,
//     link: linkM,
//     author: authorM,
//     description: descM,
//     published: publishedM,
//     numIssues: numissuesM,
//     price: priceM,
//     message: messageM,
//     payed: false,
//     message2: message2I
//   },{headers: { Authorization: `JWT ${accessString}` }})
//   .then(res => console.log(res))
//   .then(alert("Saved to Cart"))
//   .catch(err => alert(err));
// }
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
const [total, setTotal] = useState(0)
async function buyCart(event){
    event.preventDefault()
    getTotalPrice();
    // if payed(true), then
books.map(cartBook => (
    Axios.post("/api/productsbought/", {
        userID: jwtDecode(accessString).id,
        username: jwtDecode(accessString).username,
        Title: cartBook.Title,
        img: cartBook.img,
        link: cartBook.link,
        author: cartBook.author,
        description: cartBook.description,
        published: cartBook.published,
        numIssues: cartBook.numissues,
        price: cartBook.price,
        message: cartBook.message,
        payed: true,
        message2: cartBook.message2
    },{headers: { Authorization: `JWT ${accessString}` }} )
    .then(res => console.log(res))
    .then(alert("Your product/s should arrive with in 2 weeks"))
    .catch(err => alert(err))
))
books.map(delBook => (
    Axios.delete("/api/mycart/"+ delBook._id, {headers: { Authorization: `JWT ${accessString}` }})
    .then(res => randomtext())
  .catch(err => console.log(err))
))
// else alert(please enter credit card info to purchase)
}

useEffect(() => {
  randomtext()
  }, []);
// if(!loading){
//     getTotalPrice()
// }
        
    

function getTotalPrice() {
        books.map(bookprice => (
            setTotal(total+bookprice.price)
            ))
        }
  return (
    <>
      
    <div>
    <h1>Our Store is not ready yet, but feel free to browse! All books shown will be available</h1>
<h2>My Cart</h2>
{/* <Checkout amount={total}/> */}
{/* <Button onClick={openblogform}>edit book</Button> */}
{!books ? null : (
  <div> 
  {/* {function(){getTotalPrice()}} */}
  <Button onClick={getTotalPrice}>calculate Total</Button>
  <h2>Total: {total}</h2>
  <Button onClick={openmodal}>Buy({total})</Button>
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
        <Button onClick={()=> deleteItemFromCart(book._id)}>Remove from cart</Button>

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
    <Button onClick={openmodal}>Buy ({total})</Button>
</div>

    )}
    {books ? null : (
      <div><h2>There is nothing in your cart.. yet!</h2> </div>
      
    )}
    {/* <StripeProvider apiKey="pk_test_XxtjpEXLFbdljxFdiXtqbyte00eGPoT2JU">
      <Checkout />
    </StripeProvider> */}

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

           <Button onClick={savebooks}>Save Blog</Button>
      <Button onClick={handleClose}>exit</Button>
   
  <StripeProvider apiKey={"pk_test_XxtjpEXLFbdljxFdiXtqbyte00eGPoT2JU"}>
            <Elements>
              <Checkout amount={total}/>
            </Elements>
          </StripeProvider>

      </div>
      
   
    
</Grid>
    </Fade>
        </Modal> */}
    </div>

      </>
  );
}
export default Mycart;