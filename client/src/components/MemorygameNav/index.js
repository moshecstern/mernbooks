import React from "react";
import "./style.css";

// By extending the React.Component class, Navbar inherits functionality from it
function MemorygameNav(props) {

        return (
            <nav className="navbar d-block">
                <div className="row">
                    <div className="col-md-4">Superhero Clicky Game</div>
                    <div className="col-md-4">{props.message}</div>
                     <div className="col-md-4">Score: {props.count}||High Score: {props.highcount}</div>
                </div>
             
            </nav>
        );
    }


export default MemorygameNav;