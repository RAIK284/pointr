import React, { Component } from "react";
import './styles/trophy.css';
import Button from '@mui/material/Button';
import ducky from './images/ducky.png'

let dialogCloseButtonStyles = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    width: '30px',
    height: '30px',
    fontWeight: 'bold',
    alignSelf: 'flex-end'
};


class TrophySingle extends Component{
    
    render() {

    let trophysingle = (
    <React.Fragment>

            <div className="singleDisplay">
            <button style={dialogCloseButtonStyles} onClick={this.props.onClose}>x</button>

                     
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

                
 </React.Fragment>
    );

    if (! this.props.isOpen) {
        trophysingle = null;
    }
    return (
        <div>
            {trophysingle}
        </div>
    );
       
    }
    
        }

export default TrophySingle