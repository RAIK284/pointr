import React, { Component } from "react";
import HeaderDrawer from "./headerDrawer.jsx";
//reference: https://mui.com/components/drawers/

class SettingsPage extends Component {
    render() {
        return (
            <React.Fragment>
                
            <HeaderDrawer index={5}></HeaderDrawer>
                <div id="content">
                </div>
            </React.Fragment>
        );
    }
}

export default SettingsPage;