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
            
                   <div id="trophyDisplay" >
                        <Trophy className="storeDisplay"></Trophy>
                        
                    </div>
            <TrophySingle className="singleDisplay" isOpen={this.state.isOpen} onClose={(e) => this.setState({ isOpen: false })}>
                            <h3>Single Trophy</h3>
            </TrophySingle>
                    
            </React.Fragment>
        );
    }

    
}

export default StorePage;