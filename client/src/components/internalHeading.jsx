import React, { Component } from "react";
import './styles/internalHeading.css';

class InternalHeading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title
        }
    }
    render() {
        return (
            <React.Fragment >
                
                <h1 id="heading">
                    {this.props.title}
                </h1>

            </React.Fragment>
        );
    }   
}
export default InternalHeading;