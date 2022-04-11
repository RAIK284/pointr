import React, { Component } from "react";
import './styles/trophy.css';
import Button from '@mui/material/Button';

function TrophySingle(){
    return (
        <React.Fragment >

            <div className = "singleDisplay">
                <div className = 'singleInner'>
                    <button className = 'closeButton'>X</button>
                    
                </div>

            </div>
        </React.Fragment>
    ) 
}

export default TrophySingle