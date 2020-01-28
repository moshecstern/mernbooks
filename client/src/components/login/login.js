// import React from "react";
import React, { useState } from "react";
import Axios from "axios";
import {Redirect, NavLink} from "react-router-dom";
import "./login.css"

// class Login extends React.Component{
  function Login(props){
    // constructor(props){
        // super(props)
        const [username, setUsername] =useState("");
        const [password, setPassword] =useState("");
        const [loggedIn, setLoggedIn] =useState(false);
    // }

   function handleChangeUsername (event)  {
       setUsername(event.target.value)
      };
      function handleChangePassword (event)  {
        setPassword(event.target.value)
       };

  function loginUser(event){
        event.preventDefault();
        Axios.post("/loginUser", {
            username: username,
            password: password,
        }).then((res)=>{
            localStorage.setItem('JWT', res.data.token);
            setLoggedIn(true);
            console.log("logged in")
        }).catch((err)=>{
            console.log(err)
        })
    }

    function googleLogin (event) {
        event.preventDefault();
        Axios.get("/auth/google").then(res =>{
            console.log(res)
        })
    }

    // render(){
        {if(!loggedIn){
            return <div className="container">
        <div className="jumbotron">
  <h1 className="display-4 text-center">Welcome to Graphic Know-vel</h1>
  <p className="lead text-center">A website dedicated to comic books, graphic novels, and superheroes</p>
  <hr className="my-4"/>
  <p className="text-center">Sign in or sign up below to become apart of our community</p>
  
  {/* <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}
            <form>
            <div class="form-group">
            Username: <input type="text" class="form-control" name="username" value={username} onChange={handleChangeUsername} />
            </div>
            <div class="form-group">
            Password: <input type="password" class="form-control" name="password" value={password} onChange={handleChangePassword} />
            </div>
            <button type="submit" class="btn btn-success" onClick={loginUser}>Login</button>
            <NavLink to="/signup"> Signup </NavLink>
        </form>
</div>
        {/* <div className="google-btn-container">
          <a href="/auth/google">
            <div className="google-btn">
              <div className="google-icon-wrapper">
                <img
                  className="google-icon"
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="signin"
                />
              </div>
              <p className="btn-text">
                <b>Log in with Google</b>
              </p>
            </div>
          </a>
        </div> */}
        </div>
        }
        else {
          // return <Redirect to="/home" />
          return <Redirect to={{pathname: "/home", state: {loggedIn: true}}}/>
        }
    }

    // )
  }
export default Login;