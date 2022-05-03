import React, { Component } from "react";
import './styles/internalHeading.css';

// heading component for internal pages to keep formatting consistent
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