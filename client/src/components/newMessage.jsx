import React, { Component } from "react";
import './styles/newMessage.css';
import Button from '@mui/material/Button';

function NewMessage(props){
    return(props.trigger) ? (
        <React.Fragment >

            <div className = 'newMessage'>
                <div className = 'newMessageInner'>
                    <button className = 'closeButton'>X</button>
                    {props.children}
                </div>

            </div>
        </React.Fragment>
    ) : "";
}

export default NewMessage