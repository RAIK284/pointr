import React, { Component } from "react";
import HeaderDrawer from "./headerDrawer.jsx";
import SearchBar from "./searchBar.jsx";
import './styles/explorePage.css';
//reference: https://mui.com/components/drawers/

class ExplorePage extends Component {
    render() {
        return (
            <React.Fragment>
                
           {/*  <HeaderDrawer index={3}></HeaderDrawer>
                <div id="content">
                </div> */}

                <SearchBar></SearchBar>
            </React.Fragment>
        );
    }
}

export default ExplorePage;