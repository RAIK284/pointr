import React, { Component } from "react";
import HeaderDrawer from "./headerDrawer.jsx";
import './styles/storePage.css';
import Trophy from "./trophy.jsx";
import InternalHeading from "./internalHeading.jsx";
//reference: https://mui.com/components/drawers/

class StorePage extends Component {
    render() {
        return (
            <React.Fragment>
                
            <HeaderDrawer index={2}></HeaderDrawer>
            <InternalHeading title="Store"></InternalHeading>
                

                    <div id="trophyDisplay">
                        <Trophy className="storeDisplay"></Trophy>
                        {/* add trophies here */}

                    </div>
            </React.Fragment>
        );
    }
}

export default StorePage;