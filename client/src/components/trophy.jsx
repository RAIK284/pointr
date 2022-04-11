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
                        <text>100 fds</text> 
                    </div>

                    <button variant="text" onClick={(e) => this.setState({ isOpen: true })}>
                        +
                    </button>

                    


                </div>
                <TrophySingle className="singleDisplay" isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
                            <h3>Single Trophy</h3>
            </TrophySingle>
                
                
            

            </React.Fragment>
        );

    }   
    
}
export default Trophy;