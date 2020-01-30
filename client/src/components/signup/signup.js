// import React from "react"
import React, { useState } from "react";
import Axios from "axios"
import {Redirect} from "react-router-dom"

// class Signup extends React.Component {
    function Signup(props){
        const [username, setUsername] =useState("");
        const [password, setPassword] =useState("");
        const [confirmPassword, setConfirmPassword] =useState("");
        const [email, setEmail] =useState("");
        const [signedUp, setSignedUp] =useState(false);
        const [badPassword, setBadPassword] =useState(false);

    // constructor(props){
        // super(props)
        // this.state = {
        //     username: "",
        //     password: "",
        //     confirmPassword: "",
        //     email: "",
        //     signedUp: false,
        //     badPassword: false
        // }
    // }
    function handleChangeUsername (event)  {
        setUsername(event.target.value)
       };
       function handleChangePassword (event)  {
         setPassword(event.target.value)
        };
        function handleChangeconfirmPassword (event)  {
            setConfirmPassword(event.target.value)
           };
           function handleChangeEmail (event)  {
             setEmail(event.target.value)
            };
    // handleChange = (event) => {
    //     this.setState({
    //       [event.target.name]: event.target.value,
    //     });
    //   };

   function signupUser(event){
        event.preventDefault();
        if(password !== confirmPassword){
            setBadPassword(true)
        }
        else{
        Axios.post("/registerUser", {
            username: username,
            password: password,
            email: email
        }).then((data)=>{
            console.log("signed up")
            setSignedUp(true)
        }).catch((err)=>{
            console.log(err)
        })
    }
    }

    // render(){
        if(!signedUp) {
        return <div className="container">
        <form>
        Username: <input type="text" name="username" class="form-control" value={username} onChange={handleChangeUsername} /><br />
        Password: <input type="password" name="password" class="form-control" value={password} onChange={handleChangePassword} /><br />
        Confirm Password: <input type="password" class="form-control" name="confirmPassword" value={confirmPassword} onChange={handleChangeconfirmPassword} /><br />
        Email: <input type="text" name="email" class="form-control" value={email} onChange={handleChangeEmail}/><br />
        <button type="submit" className="btn-success" onClick={signupUser}>Sign up</button>
        </form>
        <br/>
        <div class="alert alert-danger" role="alert" hidden={!badPassword}>
            Passwords don't match!
        </div>
    </div>
        }
    else{
        return <Redirect to="/" />
    }
    }
// }

export default Signup