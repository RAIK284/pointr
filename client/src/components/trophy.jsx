import React, { Component } from "react";
import './styles/trophy.css';
import Button from '@mui/material/Button';
import ducky from './images/ducky.png'
import StorePage from "./storePage";
import TrophySingle from "./trophySingle";



class Trophy extends Component {
    state = {
        isOpen : false
    }

    render() {
        return (
            <React.Fragment >
                    
                
                <div className="storeDisplay">
                     
                    <img src={ducky} id="trophyImageSmall"/>

                    

                   <div id="trophyCostSmall">
                        <var>100 </var> 
                        <text>&nbsp;fds</text>
                    </div>

                    


                </div>
                
                
                
            

            </React.Fragment>
        );

    }   
    
}
export default Trophy;