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
    ListItemText,
    Link
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
  // import StripeScriptLoader from 'react-stripe-script-loader'
import {
  StripeProvider,
  Elements,
  CardNumberElement,
} from 'react-stripe-elements'
import scriptLoader from 'react-async-script-loader';
import axios from 'axios';
import { Redirect } from "react-router";
import FlowCard from "./Flow"
const jwtDecode = require('jwt-decode');
let accessString = localStorage.getItem('JWT')
if(accessString == null){
  accessString = Cookies.get("JWT");
}
  const CURRENCY = 'usd';

  const toCent = amount => amount * 100;
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

const Mycart = ({ isScriptLoaded, isScriptLoadSucceed }) =>{
  const [stripe, setStripe] = useState(null);
  useEffect(() => {
    if (isScriptLoaded && isScriptLoadSucceed) {
      setStripe(window.Stripe('pk_test_XxtjpEXLFbdljxFdiXtqbyte00eGPoT2JU'));
    }
  }, [isScriptLoaded, isScriptLoadSucceed]);

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
function deleteItemFromCart(id){
  console.log(id)
  Axios.delete("/api/mycart/"+ id, {headers: { Authorization: `JWT ${accessString}` }})
 .then(getTotalPrice())
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

async function getTotalPrice(event) {
  event.preventDefault()
  let fullprice = 0;
 books.map(book => (
   fullprice = book.price + fullprice
   ))
   setTotal(fullprice)
  console.log(total)
        }
// const thisLocation = 'http://localhost:3000';
const thisLocation = 'https://shrouded-taiga-88482.herokuapp.com/';


        const openStripe = async event => {
          event.preventDefault();
          const useremail= alert("Please provide an email for reciept")
          const session = await axios.post(
            thisLocation+'/payment/session-initiate',
            {
              customerEmail: useremail,
              clientReferenceId:
                'Check your profile => Bought Products',
              lineItem: {
                name: jwtDecode(accessString).username,
                description: books[0].message,
                images: [books[0].img],
                amount: toCent(total),
                currency: CURRENCY,
                quantity: 1,
              },
              successUrl: thisLocation+'/cart/success',
              cancelUrl: thisLocation+'/cart/fail',
            }
          );
      
          const result = await stripe.redirectToCheckout({
            sessionId: session.data.id,
          });
      
          console.log(result.error.message);
        };
      
        if (!stripe) {
          return null;
        }

  return (
    <>
<h2>My Cart</h2>
          <Grid
  container
  direction="row"
  justify="space-evenly"
  alignItems="center"
>
       
        <FlowCard title={"Total: "+total} button={"Calculate"} img={"https://www.picpng.com/uploads/small/Number__PNG_35305.Png"} click={getTotalPrice} body={"Calculate total"}/>
        
        <FlowCard title={"Pay"} click={openStripe} button={"Pay"} body={"Pay through Stripe"} img={"https://www.picpng.com/uploads/small/Number__PNG_35353.Png"}/>
        
       <FlowCard title={"Search"} click={getTotalPrice} button={"Search"} body={"Come back soon!"} img={"https://www.picpng.com/uploads/Number__PNG_35388.Png"}/>
</Grid>
    {/* <div> */}
    {/* <h1>Our Store is not ready yet, but feel free to browse! All books shown will be available</h1> */}
{/* <Checkout amount={total}/> */}
{/* <Button onClick={openblogform}>edit book</Button> */}
{!books ? null : (
  <div> 
  {/* {function(){getTotalPrice()}} */}
  {/* <Button onClick={getTotalPrice}>calculate Total</Button> */}
  {/* <h2>Total: {total}</h2> */}
  {/* <Button onClick={openStripe}>Buy({total})</Button> */}
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
    {/* <Button onClick={openmodal}>Buy ({total})</Button> */}
</div>

    )}
    {books ? null : (
      <div><h2>There is nothing in your cart.. yet!</h2> </div>
      
    )}

    {/* <StripeScriptLoader
  uniqueId=""
  script='https://js.stripe.com/v3/'
  loader="Loading..."
>
  <StripeProvider apiKey="pk_test_XxtjpEXLFbdljxFdiXtqbyte00eGPoT2JU">
        <Elements>
          <CardNumberElement />
        </Elements>
      </StripeProvider>
    </StripeScriptLoader> */}
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
    {/* </div> */}

      </>
  );
}
export default scriptLoader('https://js.stripe.com/v3/')(Mycart);