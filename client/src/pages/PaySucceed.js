import React, { useState, useEffect } from "react";
import Notes from "../components/Notes"
import Flow from "../components/Nmarketplace/Flow"
// import FeaturedAll from "../components/HomeNavLayout/FeaturesAll"
import Productsbought from "../components/Nmarketplace/productsbought"
import Axios from "axios";
import useAxios from "axios-hooks";
import Cookies from 'js-cookie';
import {
    Grid,
    Typography,
    Button,
    ListItemAvatar,
    Avatar,
    ListItemText
  } from "@material-ui/core";
  import { Link } from "react-router-dom";
  import FlowCard from "../components/Nmarketplace/Flow"
const jwtDecode = require('jwt-decode');

const PaySucceed = props => {
    let accessString = localStorage.getItem('JWT')
    if(accessString == null){
      accessString = Cookies.get("JWT");
    }
    const [{ data: books, loading }, randomtext] = useAxios({
        url: "/api/mycart/"+ jwtDecode(accessString).id,
        headers: { Authorization: `JWT ${accessString}` }
      });
    useEffect(() => {
        if (!loading){
            buyCart()
        }
        // videoSearch(props.search)
      }, [!loading]);
      async function buyCart(){
        // event.preventDefault()
        // if payed(true), then
        if(books){
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
        .then(Axios.delete("/api/mycart/"+ cartBook._id,{headers: { Authorization: `JWT ${accessString}` }} )
        ).then (res => console.log(res))
        .then(alert("Your product/s should arrive with in 2 weeks"))
        .catch(err => alert(err))
    ))
    alert("Your product/s should arrive with in 2 weeks");
    } else{
        console.log("you have no items in cart")
    }
    // books.map(delBook => (
    //     Axios.delete("/api/mycart/"+ delBook._id, {headers: { Authorization: `JWT ${accessString}` }})
    //     .then(res => randomtext())
    //   .catch(err => console.log(err))
    // ))
    // else alert(please enter credit card info to purchase)
    }
    // const [selectedDashboard, setSelectedDashboard] = useState('VolumesByDB')
if (!books || loading){
    return (
        <Link to={"/marketplace"}><Button>Go back to Marketplace</Button></Link>
    )
}else{
    return (
        <>
        <div className="text-center">
        <h2>Purchased Succeeded!</h2>
        {/* <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
>
        <FlowCard title={"Step 1"} button={} body={"Click here to calculate your total"}/>
        <FlowCard title={"Step 2"} body={"Click here to pay through Stripe"}/>
        <FlowCard title={"Step 3"} body={"Come back soon!"}/>
</Grid> */}
        <Link to={"/marketplace"}><Button>Go back to Marketplace</Button></Link>
        <Productsbought />
        {/* <FeaturedAll tab={"cart"}/> */}
<br />
        <Notes />
        
</div>
    </>
  );
}
}
export default PaySucceed;