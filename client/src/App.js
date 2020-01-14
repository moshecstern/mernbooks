import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import { Container, makeStyles } from "@material-ui/core";
import "typeface-roboto";
import News from "./components/News";
import ComicbookpagesModified from "./images/Comicbookpages.jpg";
import gamespage from "./pages/Gamespage"
import memorygame from "./components/Memorygame"
import triviagame from "./components/Triviagame"

const useStyles = makeStyles(theme => ({
  bg: { backgroundImage: `url(${ComicbookpagesModified})` },
  container: { backgroundColor: "#F2F2F2" }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.bg}>
      <Container className={classes.container}>
        <Router>
          <Nav />
          <Switch className={classes.container}>
            <Route exact path="/" component={Home} />
            <Route exact path="/character" component={Home} />
            <Route exact path="/series/:name" component={Detail} />
            <Route exact path="/gamepage" component={gamespage} />
            <Route exact path="/gamepage/memorygame" component={memorygame} />
            <Route exact path="/gamepage/triviagame" component={triviagame} />

            <Route exact path="/character/:id" component={Detail} />
            <Route
              exact
              path="/api/series/:seriesname/:charactername"
              component={Detail}
            />
            <Route exact path="*" component={NoMatch} />
          </Switch>
          <News />
          <Footer />
        </Router>
      </Container>
    </div>
  );
}

export default App;
