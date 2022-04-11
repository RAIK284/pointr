import React, { Component } from "react";
import HeaderDrawer from "./headerDrawer.jsx";
import './styles/storePage.css';
import Trophy from "./trophy.jsx";
import InternalHeading from "./internalHeading.jsx";
import Button from '@mui/material/Button';
import TrophySingle from "./trophySingle.jsx";

//reference: https://mui.com/components/drawers/

class StorePage extends Component {
    constructor(props) {
        super(props);
        this.state={
            trophySingle : false
        }
    }
  /* state = {
      isOpen : false
  } */
    render() {
        return (
            
            <React.Fragment>

        
            
                
           {/* <HeaderDrawer index={2}></HeaderDrawer>
            <InternalHeading title="Store"></InternalHeading> */}
                
                    <div id="trophyDisplay" >
                    
                        <Trophy className="storeDisplay"></Trophy>
                        
                    </div>

                    <Button variant="text" onClick={()=> this.setState({trophySingle: true})}>
                        popup
                    </Button>
                    {/* <div>
                         <TrophySingle className="singleDisplay" isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}></TrophySingle>
                    </div> */}
                    
                    <TrophySingle className="singleDisplay" trigger={this.state.trophySingle}>
                        <h2>My Popup</h2>
                        <p>This is my button triggered popup</p>
                        <button className = 'closeButton' onClick={()=> this.setState({newMessage: false})}>
                            XX
                        </button>
                    </TrophySingle>

            
                    
                   

            
                    
            </React.Fragment>
        );
    }

    
}

export default StorePage;