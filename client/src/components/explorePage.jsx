import React, { Component } from "react";
import HeaderDrawer from "./headerDrawer.jsx";
import "./styles/explorePage.css";
import searchicon from "./images/search.svg"
import ProfileList from "./profileList"

class ExplorePage extends Component {
    render() {
        return (
            <React.Fragment>
                
            <HeaderDrawer index={3}></HeaderDrawer>
                <div id="content">
                    <p className="header">Explore</p>
                    <input type="text" placeholder="Search for users..." className="search"></input>
                    <img id="img" alt="search" src={searchicon}/>
                    <br />
                    <br />
                    <ProfileList numProfiles={3}/>
                </div>
            </React.Fragment>
        );
    }
}

export default ExplorePage;