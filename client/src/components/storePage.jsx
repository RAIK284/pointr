import React, { Component } from "react";
import HeaderDrawer from "./headerDrawer.jsx";
import './styles/storePage.css';
import Trophy from "./trophy.jsx";
import InternalHeading from "./internalHeading.jsx";
import TrophySingle from "./trophySingle.jsx";

//reference: https://mui.com/components/drawers/

class StorePage extends Component {
  state = {
      isOpen : false
  }
    render() {
        return (
            
            <React.Fragment>

        
            
                
           <HeaderDrawer index={2}></HeaderDrawer>
            <InternalHeading title="Store"></InternalHeading>
                <div className="storeBackground">
                    <div id="trophyDisplay" >
                        <Trophy className="storeDisplay"></Trophy>
                        <div className="fill-window">
                         <TrophySingle className="singleDisplay" isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}></TrophySingle>
                        </div>
                    </div>

                    
                  
                </div>
                    
                   

            
                    
            </React.Fragment>
        );
    }

    
}

export default StorePage;