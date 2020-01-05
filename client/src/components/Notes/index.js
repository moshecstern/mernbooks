// import React from "react";
import React, { Component } from "react";
import API from "../../utils/API";
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
import FindInPageIcon from "@material-ui/icons/FindInPage";
import { ObjectId } from "mongoose";
import Modal from "../Modals";
import SimpleModal from "../Modals";
import SearchResults from "../SearchResults";
import { render } from "react-dom";
import Axios from "axios";
import cors from "cors";

class Notes extends Component {
// const Notes = props => {
state = {
name: "",
message:"",
notes: []
}
componentDidMount() {
    this.loadNotes();
    
  }
  loadNotes = () => {
      API.getallnotes()
      .then(res => {
          this.setState({ notes: res.data})
      })
      .catch(err => console.log(err));
  }
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.info) {
      API.saveNote({
        name: this.state.name,
        message: this.state.message
      })
        .then(res => this.loadNotes())
        .catch(err => console.log(err));
    }
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  
  deleteNote = id => {
    API.deleteNote(id)
      .then(res => this.loadCharacters())
      .catch(err => console.log(err));
  };
  
    return () {
      return (
        <>
      <form>
  <Input
    value={this.state.name}
    onChange={this.handleInputChange}
    name="name"
    placeholder="name (required)"
  />
  <Input
    value={this.state.message}
    onChange={this.handleInputChange}
    name="message"
    placeholder="message (required)"
  />
  <FormBtn
    disabled={!(this.state.message && this.state.name)}
    onClick={this.handleFormSubmit}
  >
    Submit Note
  </FormBtn>
</form>
<form>
      <List>
            {this.state.notes.map(item => (
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
    }
  export default Notes;

//   {!notesinfo ? null : ( 
//     <List>
//      {.map(item => (
//        <ListItem key={item}>
//          <div>Name : {item.name}, </div>
//          <div>message: {item.message}</div>
//          <div>Base's: {item.date}</div>

//        </ListItem>
//      ))}
//    </List> 






