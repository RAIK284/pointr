import React, { Component } from "react";
// import './styles/tokensBox.css';
import Button from '@mui/material/Button';
import smiley from './images/smiley.png'


class TokenCostButton extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         image: this.props.image,
    //         points: this.props.points,
    //     }
    // }
    render() {
        return (
            <React.Fragment >
                                    
                <Button>
                    <img src={smiley} id="emoji"></img>

                    <div id="emoji">
                        <text>100 pts</text>
                    </div>
                </Button>

            </React.Fragment>
        );

    }   
}
export default TokenCostButton;