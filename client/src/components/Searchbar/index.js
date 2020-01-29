import React, { useState } from "react";
import API from "../../utils/API";
// import { List, ListItem } from "../List";
import { Input, FormBtn } from "../Form";
import {
  Container,
  Grid,
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  Loading,
  Collapse,
  Paper,
  Typography,
  Button,
  makeStyles,
  TextField,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import useAxios from "axios-hooks";
import ReactDOM from "react-dom";
import { Link, Redirect, Route, BrowserRouter, Switch } from "react-router-dom";
import Modal from "@material-ui/core/Modal";
import { withRouter } from 'react-router-dom';
import Axios from "axios";
// import Input from "@material-ui/core/Input";



// function Searchbar
const Searchbar = props => {
function submitSearch(){
    const [searchTerm, setSearchTerm] = useState(null);
    const [shouldRedirect, setShouldRedirect] = useState(false);
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     setShouldRedirect(true);
    //   };
    
    //   const handleChange = (e) => {
    //     setSearchTerm(e.target.value);
    //   }
    
    //   return shouldRedirect ? (
    //     <Redirect from="/" to={`series/:${searchTerm}`} noThrow />
    //   ) : (
    //     <div>
    //       <div>
    //         {/* <h1>Create new selection</h1> */}
    //         <form onSubmit={handleSubmit}>
    //           {/* <label>Project Name</label> */}
    //           <input onChange={handleChange} type="text" name="projectName" required />
    //           <button type="submit">Submit</button>
    //         </form>
    //       </div>
    //     </div>
    //   );

}


      const [searchTerm, setSearchTerm] = React.useState("");
      const [{ data, loading, error }, refetch] = useAxios(
        '/series/:'+searchTerm
      )
    //   const [{} ,searchForCharacter] = useAxios("/series/"+searchTerm);
  const handleInputChange = event => {
    // event.preventDefault()
    console.log("Hi' yall");
    // console.log(event.target.value)
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };
  const handleformsubmit = event => {
      event.preventDefault()
      const myRoute = "/series/" + searchTerm;
      console.log("trying to lod details page by :" + searchTerm)
      window.location.href = myRoute;
  }
  return (
    
    // <Grid container item justify="space-between" className={classes.root}>
    <Grid item>
      <form onSubmit={handleformsubmit}>
        <TextField
          id="outlined-search"
          label="Search any character"
          type="search"
          variant="outlined"
          onChange={handleInputChange}
        //   onSubmit={() => history.push('/series/'+searchTerm)}
          onSubmit={handleformsubmit}
        //   onSubmit={<Link to={location => ({ ...location, pathname: "/series/"+ searchTerm })} />}
        />
        <Button>
          <h4>
            {
              <Link to={"/series/" + searchTerm}>
                Search 
                {/* ({searchTerm}) */}
              </Link>
            }
          </h4>
        </Button>
        
      </form>
    </Grid>
  );
        }
export default Searchbar;

// // import React from "react";
// import React, { useState } from "react";

// import Searchbar from "../Searchbar";
// import Signinmodal from "../Signinmodal";
// import { Link } from "react-router-dom";
// import {
//   TextField,
//   Button,
//   form,
//   Grid,
//   makeStyles,
//   Typography
// } from "@material-ui/core";
// import ComicbookpagesModified from "../../images/ComicbookpagesModified.jpg";
// import "typeface-roboto";
// import Modal from "@material-ui/core/Modal";
// import Input from "@material-ui/core/Input";
// import useAxios from "axios-hooks";
// import Axios from "axios";
// import Cookies from 'js-cookie';
// const jwtDecode = require('jwt-decode');

// const useStyles = makeStyles(theme => {
//   return {
//     root: {
//       backgroundColor: "#D92B6B"
//     },
//     title: {
//       backgroundImage: `url(${ComicbookpagesModified})`,
//       padding: theme.spacing(15, 0, 15, 0)
//     },
//     paper: {
//       position: "absolute",
//       width: 400,
//       backgroundColor: theme.palette.background.paper,
//       border: "2px solid #000",
//       boxShadow: theme.shadows[5],
//       padding: theme.spacing(2, 4, 3)
//     }
//   };
// });

// const Nav = (props) => {
//  const classes = useStyles();
//  const [logIn, SetLogIn] = useState(logIn)
//   // useEffect(() => {
//   const checklogin = ()=>{
//     if(props.location.state && props.location.state.loggedIn){
//     SetLogIn(true);
//   }else if(Cookies.get("JWT")){
//     SetLogIn(true);
//   }
// }
// function logout () {
//   // this.setState({loggedIn:false})
//   SetLogIn(false)
//   localStorage.clear('JWT');
//   Cookies.remove('JWT');
// }
//   return (
//     // <Grid container direction="column">
//       <Grid container item spacing={1} justify="flex-end" className={classes.root}>
//         <Grid container direction="row">
//         <Searchbar />
//         {/* <Grid direction="row" item justify="flex-end"> */}
//         {/* <ul>
//           <li><Link to={"/"}>Home  </Link></li>
//           <li><Link to={"/gamepage"}>Games  </Link></li>
//         </ul> */}
// {/* {!logIn ? true : ( */}
//   <Grid container justify="space-between">
//   <Grid item><a href="/" onClick={logout}>logout</a></Grid>
// {/* )} */}

//         <Grid item><Link to={"/home"}>Home  </Link></Grid>
//         <Grid item><Link to={"/gamepage"}>Games  </Link></Grid>
//         <Grid item><Link to={"/userprofile"}>User Profile  </Link></Grid>
//         </Grid>
//         </Grid>
//         {/* <Signinmodal /> */}

//       </Grid>
//     // </Grid>
//   );
// };

// export default Nav;