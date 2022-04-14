import React, { Component } from "react";
// import './styles/tokensBox.css';
import Button from '@mui/material/Button';
import smiley from './images/smiley.png'


class TokenCostButton extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <React.Fragment >
                                    
                <Button onClick={this.props.onClick}>
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