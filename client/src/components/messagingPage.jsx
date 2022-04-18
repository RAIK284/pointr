import React, { Component } from "react";
import './styles/messagingPage.css';
import Button from '@mui/material/Button';
import MessageDisplayBox from "./messageDisplayBox";
import InternalHeading from "./internalHeading";
import HeaderDrawer from "./headerDrawer";
import NewMessage from "./newMessage";

class MessagingPage extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            receivedMessages: {},
            sentMessages: {},
            newMessage: false,
            viewStatus: false
        }
    }

    handleChange() {
        const newStatus = !this.state.viewStatus;
        this.setState({viewStatus: newStatus});
        console.log(this.state.viewStatus);
    }

     componentDidMount() {
         fetch('http://localhost:8080/api/message?receiver=bsimpleman')
            .then(response => response.json())
            .then(data => this.setState({receivedMessages: data}))

         fetch('http://localhost:8080/api/message?sender=bsimpleman')
             .then(response => response.json())
             .then(data => this.setState({sentMessages: data}))
    }

    render() {
        if(this.state.receivedMessages === undefined) return <div>Loading...</div>

        let sentMessages = [];
        let receivedMessages = [];

        for (let i = 0; i < this.state.sentMessages.length; i++) {
            sentMessages.push(<MessageDisplayBox name={this.state.sentMessages[i].name} username={this.state.sentMessages[i].sender} messageBody={this.state.sentMessages[i].messageBody}></MessageDisplayBox>);
        }

        for (let i = 0; i < this.state.receivedMessages.length; i++) {
            receivedMessages.push(<MessageDisplayBox name={this.state.receivedMessages[i].name} username={this.state.receivedMessages[i].sender} messageBody={this.state.receivedMessages[i].messageBody}></MessageDisplayBox>);
        }

        if (this.state.viewStatus) {
            return (
                <React.Fragment >
                    <div id="messagingBackground">

                        <HeaderDrawer index={1}></HeaderDrawer>

                        <InternalHeading title="Messages"></InternalHeading>

                        <Button variant="text" id= "newMessage" onClick={()=> this.setState({newMessage: true})}>
                            new message
                        </Button>

                        <label className="toggle">
                            <input type="checkbox" onChange={() => this.handleChange()}></input>
                            <span className="labels" data-on="Sent" data-off="Recieved"></span>
                        </label>

                        <div id="messageDisplayBoxes">
                            {sentMessages}
                        </div>

                    </div>

                    <NewMessage trigger={this.state.newMessage}>
                        <button className = 'closeButton' onClick={()=> this.setState({newMessage: false})}>
                            X
                        </button>
                    </NewMessage>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment >
                    <div id="messagingBackground">

                        <HeaderDrawer index={1}></HeaderDrawer>

                        <InternalHeading title="Messages"></InternalHeading>

                        <Button variant="text" id= "newMessage" onClick={()=> this.setState({newMessage: true})}>
                            new message
                        </Button>

                        <label className="toggle">
                            <input type="checkbox" onChange={() => this.handleChange()}></input>
                            <span className="labels" data-on="Sent" data-off="Recieved"></span>
                        </label>

                        <div id="messageDisplayBoxes">
                            {/* The way this is displaying is NOT how it should be. We should have a call
                        to the api, and loop throug every message. Then, we display a box for every message. That way
                        for ex if someone only has 2 messages only 2 boxes show up */}
                            {receivedMessages}
                        </div>

                    </div>

                    <NewMessage trigger={this.state.newMessage}>
                        <button className = 'closeButton' onClick={()=> this.setState({newMessage: false})}>
                            X
                        </button>
                    </NewMessage>
                </React.Fragment>
            );
        }

    }   
}
export default MessagingPage;