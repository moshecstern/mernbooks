import React, { useState } from "react";
import Cookies from 'js-cookie';
import VolumesDB from "../components/VolumesDB"
import ProfileCustom from "../components/Userprofile"
import Products from "../components/Nmarketplace/Products"
import Mycart from "../components/Nmarketplace/Mycart"
import Productspurchased from "../components/Nmarketplace/productsbought"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {
    Grid,
    Typography,
    Button,
    ListItemAvatar,
    Avatar,
    ListItemText
  } from "@material-ui/core";
const jwtDecode = require('jwt-decode');
// const useStyles = makeStyles(theme => ({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//       height: 500,
//       flexGrow: 1,
//       minWidth: 300,
//       transform: 'translateZ(0)',
//     },
//     card: {
//       maxWidth: 345,
//       backgroundColor: "floralWhite",
//       padding: theme.spacing(2,3,2,3),
//       margin: theme.spacing(2)
//     },
//     media: {
//       height: 0,
//       paddingTop: '56.25%', // 16:9
//     },
//     expand: {
//       transform: 'rotate(0deg)',
//       marginLeft: 'auto',
//       transition: theme.transitions.create('transform', {
//         duration: theme.transitions.duration.shortest,
//       }),
//     },
//     expandOpen: {
//       transform: 'rotate(180deg)',
//     },
//     textField: {
//       marginLeft: theme.spacing(1),
//       marginRight: theme.spacing(1),
//       width: 200,
//     },
//     // avatar: {
//     //   backgroundColor: lightGreen[500],
//     // },
//     modal: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     //   backgroundColor: lightGreen[500],
//       // backgroundColor: '#5HN7E7K',
//       height: '75%',
//       width: '75%',
//       alignContent: 'center',
//       // color: 'white',
//       padding: theme.spacing(3),
//     },
//     paper: {
//       width: 400,
//       backgroundColor: theme.palette.background.paper,
//       border: '2px solid #000',
//       boxShadow: theme.shadows[5],
//       padding: theme.spacing(2, 4, 3),
//     },
//     control: {
//       padding: theme.spacing(2),
//     },
//   }));

const Userprofile = props => {
    const [logIn, SetLogIn] = useState(logIn)
    const [adminPassword, setAdminPassword] = useState("")
    const [adminQ, setAdminQ]= useState(true)
    // const classes = useStyles();
    // useEffect(() => {
    const checklogin = ()=>{
      if(props.location.state && props.location.state.loggedIn){
      SetLogIn(true);
    }else if(Cookies.get("JWT")){
      SetLogIn(true);
    }
  }
  async function checkadminpassword(event){
    event.preventDefault();
      console.log(adminPassword)
    //   if(jwtDecode(accessString).username === ""){

    //   }
if(adminPassword === "6missingducks"){
    setAdminQ(false)
}
else{
    alert("sorry not admin matireal try again!")
}
  }
  function handleChangePassword (event)  {
    setAdminPassword(event.target.value)
   };
   const [selectedDashboard, setSelectedDashboard] = useState('mybooks')

    return (
      <>

      {!adminQ ? false : (
      <div>
          <div className="form-group">
            Password: <input type="password" class="form-control" name="password" value={adminPassword} onChange={handleChangePassword} />
            </div>
          <Button onClick={checkadminpassword}>Verify</Button>
        {/* <TextField
          label="Admin Password"
          id="margin-none"
          // defaultValue="Comicnerd1994"
          className={classes.textField}
            value={adminPassword}
          onChange={(e)=> setAdminPassword(e.target.value)}
          helperText="Password"
        /> */}
      </div>
      )}
      {adminQ ? false : (
          <span>

        <Button onClick={(e)=> setSelectedDashboard("mybooks")}>My Books</Button>
        <Button onClick={(e)=> setSelectedDashboard("products")}>Products</Button>
        <Button onClick={(e)=> setSelectedDashboard("cart")}>My Cart</Button>
        <Button onClick={(e)=> setSelectedDashboard("history")}>My PurchaseHistory</Button>


          </span>

      )}
{/* create mycart, products, productsbought(all), wishlist */}
      {selectedDashboard === 'mybooks' && <ProfileCustom admin={adminPassword}/>}
      {selectedDashboard === 'products' && <Products admin={adminPassword}/>}
      {selectedDashboard === 'cart' && <Mycart admin={adminPassword}/>}
      {selectedDashboard === 'history' && <Productspurchased admin={adminPassword}/>}
      <ProfileCustom admin={adminPassword}/>
    <VolumesDB />
      </>
    );
  };
  export default Userprofile;