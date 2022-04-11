import React, { Component } from "react";
import './styles/trophy.css';
import Button from '@mui/material/Button';
import ducky from './images/ducky.png'


function TrophySingle(props){
    return (props.trigger) ? (
        <React.Fragment >

            <div className="singleDisplay">
            
                     
                     <img src={ducky} id="trophyImage"/>
                

                 <div id="trophyTitle">
                     <text>Trophy Title</text>
                 </div>

              <div id="trophyDescription">
                     <text>This is where the trophy's description will go.</text>
                  </div> 

                 <div id="trophyCost">
                     <text>Cost: 100</text> 
                 </div>

                 <Button variant="contained" id="addToProfile" onClick={()=>{window.location.href='/store'}}>Add to My Profile</Button>

             </div>

                <div className = 'singleInner'>
                    <button className = "trophyclosebutton">X</button>
                    {props.children}
                </div>

            
        </React.Fragment>
    ) :"";
}

export default TrophySingle