import React, { Component } from "react";
import HeaderDrawer from "./headerDrawer.jsx";
import './styles/storePage.css';
import Trophy from "./trophy.jsx";
//reference: https://mui.com/components/drawers/

class StorePage extends Component {
    render() {
        return (
            <React.Fragment>
                
            <HeaderDrawer index={2}></HeaderDrawer>
            
                <div id="storeBackground">
                    <h1 id="heading">
                        Store
                    </h1>

                    <div id="trophyDisplay">
                        <Trophy id="Ttest"></Trophy>

                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default StorePage;