import React, { Component } from "react";
import './styles/trophy.css';
import Button from '@mui/material/Button';
import ducky from './images/ducky.png'


function TrophySingle(props){
    return (props.trigger) ? (
        <React.Fragment >

            <div className="singleDisplay">
            
                     
                <img src={ducky} id="trophyImageLarge"/>
                

                 <div id="trophyTitle">
                     <text>Trophy Title</text>
                 </div>

              <div id="trophyDescription">
                     <text>This is where the trophy's description will go.</text>
                  </div> 

                 <div id="trophyCostLarge">
                     <text>Cost: 100 FUNds</text> 
                 </div>

                <div id="buttonWrapper">
                    <Button variant="contained" id="addToProfile" onClick={()=>{window.location.href='/store'}}>Add to My Profile</Button>
                </div>

             </div>

                <div className = 'singleInner'>
                    <button className = "trophyclosebutton">X</button>
                    {props.children}
                </div>

            
        </React.Fragment>
    ) :"";
}

export default TrophySingle