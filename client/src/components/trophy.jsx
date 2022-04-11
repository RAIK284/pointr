import React, { Component } from "react";
import './styles/trophy.css';
import Button from '@mui/material/Button';
import ducky from './images/ducky.png'


class Trophy extends Component {

    render() {
        return (
            <React.Fragment >
                    
                
                <div className="storeDisplay">
                     
                    <img src={ducky} id="trophyImageSmall"/>

                    <div id="trophyCostSmall">
                        <text>100 fds</text> 
                    </div>


                </div>
                


            </React.Fragment>
        );

    }   
}
export default Trophy;