import React, { Component } from "react";
import './styles/messagingPage.css';
import Button from '@mui/material/Button';
import MessageDisplayBox from "./messageDisplayBox";

class MessagingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    async componentDidMount() {
        await fetch('http://localhost:8080/api/message?receiver=bsimpleman')
            .then(response => response.json())
            .then(data => this.setState({data}))
    }
    render() {
        if (this.state.data === undefined) return <div>Loading...</div>
        console.log(this.state.data)
        let messages = [];

        console.log()

        for (let i = 0; i < this.state.data.length; i++) {
            messages.push(<MessageDisplayBox name={this.state.data[i].name} username={this.state.data[i].sender} messageBody={this.state.data[i].messageBody}></MessageDisplayBox>);
        }
        return (
            <React.Fragment >
                <div id="messagingBackground">
                    <h1 id="heading">
                        Messages
                    </h1>

                    <Button variant="text" id= "newMessage" onClick={()=>{window.location.href='/'}}>
                        new message
                    </Button>

                    <div id="messageDisplayBoxes">
                        {messages}
                    </div>




                </div>
            </React.Fragment>
        );

    }   
}
export default MessagingPage;