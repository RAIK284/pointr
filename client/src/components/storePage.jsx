import React, { Component } from "react";
import HeaderDrawer from "./headerDrawer.jsx";
import './styles/storePage.css';
import Trophy from "./trophy.jsx";
import InternalHeading from "./internalHeading.jsx";
import TrophySingle from "./trophySingle.jsx";
import { useState } from "react";
//reference: https://mui.com/components/drawers/

class StorePage extends Component {
  
    render() {
        return (
            
            <React.Fragment>
                <button>open popup</button>
            <TrophySingle trigger={true} className="singleDisplay">
                            <h3>Single Trophy</h3>
            </TrophySingle>
                
            <HeaderDrawer index={2}></HeaderDrawer>
            <InternalHeading title="Store"></InternalHeading>
            
                   {/* <div id="trophyDisplay">
                        <Trophy className="storeDisplay"></Trophy>
                        

                    </div> */}

                    
            </React.Fragment>
        );
    }

    
}

export default StorePage;