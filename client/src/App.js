import React from "react";
// import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Character from "./pages/Characters";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div>
      <Nav />
     <Switch>
     <Route exact path="/" component={Character} />
     <Route exact path="/character" component={Character} />
     <Route exact path="/character/:id" component={Detail} />
     <Route exact path="/series/:id" component={Detail} />
     <Route exact path="/api/series/:seriesname/:charactername" component={Detail} />
     <Route exact path="*" component={NoMatch} />

     </Switch>
    

      {/* <Books /> */}
    </div>
    </Router>
  );
}

export default App;
