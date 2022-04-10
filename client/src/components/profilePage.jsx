import React, { Component } from "react";
import Carousel from './carousel.jsx';
//import car from './images/car.jpg';
import ducky from './images/ducky.png'
import HeaderDrawer from "./headerDrawer.jsx";
//reference: https://mui.com/components/drawers/

import './styles/profilePage.css';


const drawerWidth = 240;
class ProfilePage extends Component {
    render() {
        return (
            <React.Fragment>
                
            <div id="header">
                <p id="welcome">
                    Welcome Name.
                </p>
                <p id="sub">
                    Hi! I'm name, and I like to hobby! Message me your favorite quote.
                </p>
            </div>

            <HeaderDrawer index={0} />

            <div id="content">
                <br />
                <br />
                <p id="leaderboard">
                    Leaderboard Rank <div class="rank">1</div>                
                </p>
                <br />
                <br />
                <Carousel 
                    height={200} 
                    width={200} 
                    numslides={4} 
                    images={[ducky, ducky, ducky, ducky]}
                    visibleSlides={3}
                />
                <br />
                <br />
                <p class="stats">messaging points <div class="rank">100</div></p>
                <p class="stats">FUNds <div class="rank">20,000</div></p>
            </div>
            </React.Fragment>
        );
    }
}

// SignIn.propTypes = {
//     field1: PropTypes.string.isRequired,
//     field2: PropTypes.string.isRequired,
// };

export default ProfilePage;