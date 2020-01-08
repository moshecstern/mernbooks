import React from "react";
import {
  TextField,
  Button,
  Grid,
  makeStyles,
  Typography,
  Link
} from "@material-ui/core";
import ComicbookpagesModified from "../../images/ComicbookpagesModified.jpg";
import "typeface-roboto";
import Modal from "@material-ui/core/Modal";

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

const Nav = () => {
  const classes = useStyles();
  const login = false;
  const userName = "anything";
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
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
          <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            variant="outlined"
          />
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
