// import React from "react";
import React, { Component, useState } from "react";
import API from "../../utils/API";
import CustomForm from "../CustomForm";
import { Link, useParams } from "react-router-dom";
import { Col, Row } from "../Grid";
import { List, ListItem } from "../List";
import { Input, TextArea, FormBtn } from "../Form";
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
  Button
} from "@material-ui/core";

import useAxios from "axios-hooks";
// import { useInput } from './hooks/input-hook';
// import { useForm } from 'react-hook-form';
// import { useForm } from 'react-hook-form';

import FindInPageIcon from "@material-ui/icons/FindInPage";
import { ObjectId } from "mongoose";
import Modal from "../Modals";
import SimpleModal from "../Modals";
import SearchResults from "../SearchResults";
import { render } from "react-dom";
import Axios from "axios";
import cors from "cors";

const Notes = () => {
  const [{data: allnotes, loading}, getallnotes] = useAxios(
    "/api/notes"
  );
  
  const [{data, loading: dataloading}, addmynote] = useAxios(
    "/api/notes"
    );
    const [mynote, setmynote] = useState();
    const [myname, setmyname]= useState();
    const [mymessage, setmymessage] = useState();
    


//  const loadNotes = () => {
//       API.getallnotes()
//       .then(res => {
//           this.setState({ notes: res.data})
//       })
//       .catch(err => console.log(err));
//   }
   const handleFormSubmit = event => {
    event.preventDefault();
    // if (this.state.name && this.state.info) {
      API.saveNote({
        name: myname,
        message: mymessage
      })
        // .then(res => this.loadNotes())
        .then(res=>console.log(res))
        .catch(err => console.log(err));
    // }
  };
 const handleInputChange = event => {
    const { name, value } = event.target;
    setmynote({[name]: value})
    // this.setState({
    //   [name]: value
    // });
  };
  
const  deleteNote = id => {
    API.deleteNote(id)
      .then(res => this.loadCharacters())
      .catch(err => console.log(err));
  };

const handleInputChangename = event => {
  setmyname(myname)
}
const handleInputChangemessage = event => {
  setmymessage(mymessage)
}

  if (loading) {
    return <></>;
  }
  
      return (
        <>

      <form>
  <Input
    value={myname}
    onChange={handleInputChangename}
    name="name"
    placeholder="name (required)"
  />
  <Input
    value={mymessage}
    onChange={handleInputChangemessage}
    name="message"
    placeholder="message (required)"
  />
  <FormBtn
    // disabled={!(this.state.message && this.state.name)}
    // onClick={handleFormSubmit}
    onClick={handleFormSubmit}
  >
    Submit Note
  </FormBtn>
</form>



<form>
      <List>
            {allnotes.map(item => (
              <ListItem key={item}>
                <div>Name : {item.name}, </div>
                <div>message: {item.message}</div>
                <div>Date: {item.date}</div>
              </ListItem>
            ))}
          </List> 

</form>
</>  
            
) 
      }
    
  export default Notes;




   



