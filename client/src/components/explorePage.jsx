import React, { Component } from "react";
import HeaderDrawer from "./headerDrawer.jsx";
import "./styles/explorePage.css";
import searchicon from "./images/header-icons/search.svg"
import InternalHeading from "./internalHeading.jsx";
import SearchBar from "./searchBar.jsx";


class ExplorePage extends Component {
    render() {
        return (
            <React.Fragment>
                
            <HeaderDrawer index={3}></HeaderDrawer>
            <InternalHeading title="Explore"></InternalHeading>
            
                <div id="content">
                        {/* <p className="header">Explore</p> */}
                        {/* <input type="text" placeholder="Search for users..." className="search"></input> */}
                        <SearchBar className="search"></SearchBar>
{/*                         <img id="img" alt="search" src={searchicon}/>
 */}                        <br />
                        <br />
                    </div>
                

                
            </React.Fragment>
        );
    }
}

export default ExplorePage;