import React, { useState } from "react";
import API from "../../utils/API";
import { List, ListItem } from "../List";
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
  Button
} from "@material-ui/core";

import useAxios from "axios-hooks";

const Notes = () => {
  const [{ data: allnotes, loading }, getallnotes] = useAxios("/api/notes");
  const [{ newdata, myname: dataloading }, addmynote] = useAxios({url:"/api/notes", method: "POST"});
  const [mynote, setmynote] = useState();
  const [myname, setmyname] = useState("");
  const [mymessage, setmymessage] = useState("");

  let handleFormSubmit = async event => {
    event.preventDefault();
    let { data: results } = await API.saveNote(mymessage, myname)
    setmynote(results.items)
    console.log(mynote)
    setmyname("")
    setmymessage("")
  // }

  // const handleFormSubmit = event => {
  //   event.preventDefault();
  //   API.saveNote({
  //     name: myname,
  //     message: mymessage
  //   })
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err));
  };
  const handleInputChangename = event => {
    console.log(myname)
    setmyname(myname);
  };
  const handleInputChangemessage = event => {
    console.log(mymessage)
    setmymessage(mymessage);
  };
  if (loading) {
    return <></>;
  }
  return (
    <>
      <form>
        <Input
          value={myname}
          onChange={(e)=> setmyname(e.target.value)}
          name="name"
          placeholder="name (required)"
        />
        <Input
          value={mymessage}
          // onChange={handleInputChangemessage}
          onChange={(e)=> setmymessage(e.target.value)}
          name="message"
          placeholder="message (required)"
        />
        <FormBtn onClick={handleFormSubmit}>Submit Note</FormBtn>
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
  );
};

export default Notes;
