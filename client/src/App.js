import React from "react";
// import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import { Container } from "@material-ui/core";

function App() {
  return (
    <Container>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/character" component={Home} />
          <Route exact path="/character/:id" component={Detail} />
          <Route
            exact
            path="/api/series/:seriesname/:charactername"
            component={Detail}
          />
          <Route exact path="*" component={NoMatch} />
        </Switch>
        <Footer />
      </Router>
    </Container>
  );
}

export default App;
