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
            <InternalHeading title="FUNds Store"></InternalHeading>
                <div id="storeBackground">

                    <div id="trophyDisplay">
                        <Trophy className="storedisplay"></Trophy>
                        {/* add trophies here */}



                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default StorePage;