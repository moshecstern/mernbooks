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
import memorygame from "./components/Memorygamemain/Memorygame"
import triviagame from "./components/Triviagame"
import Login from "./components/login/login"
import Signup from "./components/signup/signup";
import Userprofile from "./pages/Userprofile"
import GameTrivia from "./components/GameTrivia"
import Blog from "./pages/Blog";

const useStyles = makeStyles(theme => ({
  bg: { backgroundImage: `url(${ComicbookpagesModified})` },
  container: { backgroundColor: "#f6ef98" }
  // container: { backgroundColor: "#F2F2F2" }    floralwhite;
  
  
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.bg}>
      <Container className={classes.container}>
        <Router>
          <Nav />
          <Switch className={classes.container}>
          <Route exact path="/" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
            <Route exact path="/home" component={Home} />
            <Route exact path="/character" component={Home} />
            <Route exact path="/series/:name" component={Detail} />
            <Route exact path="/gamepage" component={gamespage} />
            <Route exact path="/gamepage/memorygame" component={memorygame} />
            <Route exact path="/gamepage/triviagame" component={GameTrivia} />
            <Route exact path="/userprofile" component={Userprofile} />
            <Route exact path="/blog" component={Blog} />

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
// import React, { Fragment } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Navbar from './components/layout/Navbar';
// import Home from './components/pages/Home';
// import About from './components/pages/About';
// import Register from './components/auth/Register';
// import Login from './components/auth/Login';
// import Alerts from './components/layout/Alerts';
// import PrivateRoute from './components/routing/PrivateRoute';

// import ContactState from './context/contact/ContactState';
// import AuthState from './context/auth/AuthState';
// import AlertState from './context/alert/AlertState';
// import './App.css';

// const App = () => {
//   return (
//     <AuthState>
//       <ContactState>
//         <AlertState>
//           <Router>
//             <Fragment>
//               <Navbar />
//               <div className='container'>
//                 <Alerts />
//                 <Switch>
//                   <PrivateRoute exact path='/' component={Home} />
//                   <Route exact path='/about' component={About} />
//                   <Route exact path='/register' component={Register} />
//                   <Route exact path='/login' component={Login} />
//                 </Switch>
//               </div>
//             </Fragment>
//           </Router>
//         </AlertState>
//       </ContactState>
//     </AuthState>
//   );
// };

// export default App;
