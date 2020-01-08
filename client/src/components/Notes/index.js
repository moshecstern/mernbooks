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
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import useAxios from "axios-hooks";

const Notes = () => {
  const [{ data: allnotes, loading }, getallnotes] = useAxios("/api/notes");
  const [
    { data: putData, loading: putLoading, error: putError },
    addmynote
  ] = useAxios({
    url: "/api/notes",
    method: "PUT"
  });
  const [mynote, setmynote] = useState();
  const [myname, setmyname] = useState();
  const [mymessage, setmymessage] = useState();
  const handleFormSubmit = event => {
    event.preventDefault();
    API.saveNote({
      name: myname,
      message: mymessage
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  const handleInputChangename = event => {
    setmyname(myname);
  };
  const handleInputChangemessage = event => {
    setmymessage(mymessage);
  };
  if (loading || putLoading) {
    return <></>;
  }
  return (
    <Grid container direction="column">
      <Grid item>
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
          <FormBtn onClick={handleFormSubmit}>Submit Note</FormBtn>
        </form>
      </Grid>
      <Grid item container>
        <Typography variant="h5">Recent Notes</Typography>
        <List dense item container component="nav" aria-label="notesDisplay">
          {allnotes.map(item => (
            <ListItem key={item}>
              <ListItemIcon>
                <NoteAddIcon />
              </ListItemIcon>
              <Grid direction="column">
                <ListItemText primary={item.name} secondary={item.message} />
                <ListItemText secondary={item.date} />
                {/* <Grid>Message: {item.message}</Grid> */}
                {/* <Grid>Date: {item.date}</Grid> */}
                {/* </Grid> */}
              </Grid>
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default Notes;



// import React, { useState } from "react";
// import API from "../../utils/API";
// // import { List, ListItem } from "../List";
// import { Input, FormBtn } from "../Form";
// import {
//   Container,
//   Grid,
//   GridList,
//   GridListTile,
//   GridListTileBar,
//   IconButton,
//   Loading,
//   Collapse,
//   Paper,
//   Typography,
//   Button,
//   List,
//   ListItem,
//   ListItemIcon,
//   ListItemText
// } from "@material-ui/core";
// import NoteAddIcon from "@material-ui/icons/NoteAdd";
// import useAxios from "axios-hooks";

// const Notes = () => {
//   const [{ data: allnotes, loading }, getallnotes] = useAxios("/api/notes");
//   const [
//     { data: putData, loading: putLoading, error: putError },
//     addmynote
//   ] = useAxios({
//     url: "/api/notes",
//     method: "PUT"
//   });
//   const [mynote, setmynote] = useState();
//   const [myname, setmyname] = useState("");
//   const [mymessage, setmymessage] = useState("");

//   let handleFormSubmit = async event => {
//     event.preventDefault();
//     let { data: results } = await API.saveNote(mymessage, myname)
//     setmynote(results.items)
//     console.log(mynote)
//     setmyname("")
//     setmymessage("")
//   // }

//   // const handleFormSubmit = event => {
//   //   event.preventDefault();
//   //   API.saveNote({
//   //     name: myname,
//   //     message: mymessage
//   //   })
//   //     .then(res => console.log(res))
//   //     .catch(err => console.log(err));
//   };
//   const handleInputChangename = event => {
//     console.log(myname)
//     setmyname(myname);
//   };
//   const handleInputChangemessage = event => {
//     console.log(mymessage)
//     setmymessage(mymessage);
//   };
//   if (loading || putLoading) {
//     return <></>;
//   }
//   return (
//     // <>
//       {/* <form>
//         <Input
//           value={myname}
//           onChange={(e)=> setmyname(e.target.value)}
//           name="name"
//           placeholder="name (required)"
//         />
//         <Input
//           value={mymessage}
//           // onChange={handleInputChangemessage}
//           onChange={(e)=> setmymessage(e.target.value)}
//           name="message"
//           placeholder="message (required)"
//         />
//         <FormBtn onClick={handleFormSubmit}>Submit Note</FormBtn>
//       </form>

//       <form> */}
//         <List>
//     <Grid container direction="column">
//       <Grid item>
//         <form>
//           <Input
//             value={myname}
//             onChange={handleInputChangename}
//             name="name"
//             placeholder="name (required)"
//           />
//           <Input
//             value={mymessage}
//             onChange={handleInputChangemessage}
//             name="message"
//             placeholder="message (required)"
//           />
//           <FormBtn onClick={handleFormSubmit}>Submit Note</FormBtn>
//         </form>
//       </Grid>
//       <Grid item container>
//         <Typography variant="h5">Recent Notes</Typography>
//         <List dense item container component="nav" aria-label="notesDisplay">
//           {allnotes.map(item => (
//             <ListItem key={item}>
//               <ListItemIcon>
//                 <NoteAddIcon />
//               </ListItemIcon>
//               <Grid direction="column">
//                 <ListItemText primary={item.name} secondary={item.message} />
//                 <ListItemText secondary={item.date} />
//                 {/* <Grid>Message: {item.message}</Grid> */}
//                 {/* <Grid>Date: {item.date}</Grid> */}
//                 {/* </Grid> */}
//               </Grid>
//             </ListItem>
//           ))}
//         </List>
//       </Grid>
//     </Grid>
//   );
// };

// export default Notes;
