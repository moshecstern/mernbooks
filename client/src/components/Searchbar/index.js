import React, { useState } from "react";
// import API from "../../utils/API";
// import { List, ListItem } from "../List";
// import { Input, FormBtn } from "../Form";
// import SearchIcon from '@material-ui/icons/Search';
import {
  // Container,
  Grid,
  // GridList,
  // GridListTile,
  // GridListTileBar,
  // IconButton,
  // Loading,
  // Collapse,
  // Paper,
  // Typography,
  Button,
  // makeStyles,
  TextField,
  // List,
  // ListItem,
  // ListItemIcon,
  // ListItemText
} from "@material-ui/core";
// import NoteAddIcon from "@material-ui/icons/NoteAdd";
import useAxios from "axios-hooks";
// import ReactDOM from "react-dom";
// import { Link, Redirect, Route, BrowserRouter, Switch } from "react-router-dom";
// import Modal from "@material-ui/core/Modal";
// import { withRouter } from 'react-router-dom';
// import Axios from "axios";
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
      // const [{ data, loading, error }, refetch] = useAxios(
      //   '/series/:'+searchTerm
      // )
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
          // id="outlined-search"
          label="Search any character"
          type="search"
          // color="red"
          variant="outlined"
          onChange={handleInputChange}
        //   onSubmit={() => history.push('/series/'+searchTerm)}
          onSubmit={handleformsubmit}
        //   onSubmit={<Link to={location => ({ ...location, pathname: "/series/"+ searchTerm })} />}
        />
        {/* <Button>
          <p>
            {
              <Link to={"/series/" + searchTerm}>
                Search 
              </Link>
            }
          </p>
        </Button> */}
        
      </form>
    </Grid>
  );
        }
export default Searchbar