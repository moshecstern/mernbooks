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
// import { Link } from "react-router-dom";


// const Searchbar = () => {
//   let [{ data: search, loading }, findsearch] = useAxios("/series/"+ mysearch);
//   // const [
//   //   { data: putData, loading: putLoading, error: putError },
//   //   addmynote
//   // ] = useAxios({
//   //   url: "/api/notes",
//   //   method: "PUT",
//   //   data: {
//   //     name: myname,
//   //     message: mymessage
//   //   }
//   // });
//   const [mysearch, setmysearch] = useState();

//   const handleFormSubmit = event => {
//     event.preventDefault();
//     findsearch()
    
//   };

//    if (loading //|| putLoading
//     ) {
//     return <></>;
//   }
//   return (
    
//       <Grid item>
//         <form>
//           <Input
//             value={mysearch}
//             // onChange={handleInputChangename}
//             onChange={(e)=> setmysearch(e.target.value)}

//             name="search"
//             placeholder="Search Any Character"
//           />
     
//           <FormBtn onClick={handleFormSubmit}>Submit Search</FormBtn>
//         </form>
//       </Grid>
     
//   );
// };

// export default Searchbar;