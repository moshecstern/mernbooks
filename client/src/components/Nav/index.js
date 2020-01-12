import React from "react";
import Searchbar from "../Searchbar";
import { Link } from "react-router-dom";
import {
  TextField,
  Button,
  form,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import ComicbookpagesModified from "../../images/ComicbookpagesModified.jpg";
import "typeface-roboto";
import Modal from "@material-ui/core/Modal";
import Input from "@material-ui/core/Input";
import useAxios from "axios-hooks";
import Axios from "axios";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => {
  return {
    root: {
      backgroundColor: "#D92B6B"
    },
    title: {
      backgroundImage: `url(${ComicbookpagesModified})`,
      padding: theme.spacing(15, 0, 15, 0)
    },
    paper: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    }
  };
});

const Nav = e => {
  const [searchTerm, setSearchTerm] = React.useState("");
  // const [{} ,searchForCharacter] = useAxios("/series/"+searchTerm);
  const classes = useStyles();
  const login = false;
  const userName = "anything";
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  // function App() {
  //    const handleChange = event => {
  //      setSearchTerm(event.target.value);
  //    };
  const handleInputChange = event => {
    // event.preventDefault()
    console.log("Hi' yall");
    // console.log(event.target.value)
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };
  const handleSearch = (event, value) => {
    // event.preventDefault()
    console.log("Hi' yall whats up");
    console.log(value);
    console.log(searchTerm);
    // useAxios.get(window.location+"/series/"+searchTerm)
    // useAxios("/series/:"+ value)
    // Axios.request("/series/"+ searchTerm.valueOf)
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid container direction="column">
      <Grid container item justify="space-between" className={classes.root}>
        <Grid item>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-search"
              label="Click Below to Search"
              type="search"
              variant="outlined"
              onChange={handleInputChange}
              // onSubmit={Axios.get("/series/" + searchTerm)}
              // onSubmit={handleSearch(Event)}
            />
            {/* <Button type="button" value={searchTerm} onClick={handleSearch(searchTerm)}> */}
            <Button>
              <h4>
                {
                  <Link to={"/series/" + searchTerm}>
                    Search For ({searchTerm})
                  </Link>
                }
              </h4>
            </Button>
            {/* </Button> */}
          </form>
        </Grid>
        {login ? (
          `Hello ${userName}`
        ) : (
          <Grid item>
            <Button type="button" onClick={handleOpen}>
              Login
            </Button>
          </Grid>
        )}
      </Grid>
      <Grid item className={classes.title}>
        <Link href="/" color="inherit">
          <Typography variant="h2" gutterBottom align="center">
            Graphic Know-vel
          </Typography>
        </Link>
      </Grid>
      <Modal
        aria-labelledby="login-modal-title"
        aria-describedby="login-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="login-modal-title">Please enter your Info</h2>{" "}
          <p id="login-modal-description">Sign In to view your Saved Novels</p>
          <TextField
            id="outlined-userName"
            label="Alter Ego"
            type="userName"
            variant="outlined"
          />
          <TextField
            id="outlined-password"
            label="Codeword"
            type="password"
            variant="outlined"
          />
          <br />
          <Button type="button">Login</Button>
        </div>
      </Modal>
    </Grid>
  );
};

export default Nav;
