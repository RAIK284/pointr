import React, { Component, useState} from "react";
import './styles/newMessage.css';
import Button from '@mui/material/Button';

function NewMessage(props){

    const [email, setEmail] = useState('');
    const [messageBody, setMessageBody] = useState('');

    const messageObject = {
        "timestamp": "",
        "sender": "bsimpleman",
        "receiver": "",
        "value": "",
        "messageBody": "",
        "isRead": false
    }

    const handleInput = () => {
        setMessageData()
    }

    const getMessageValue = () => {

    }

    const setMessageData = async () => {
        getMessageValue();
        messageObject.timestamp = new Date().toUTCString()
        messageObject.receiver = email;
        messageObject.messageBody = messageBody;

        console.log(messageBody)
        await postMessage(messageObject);
        await subtractMessageValue(messageObject);
    }

    const postMessage = async (messageObject) => {
        const jsonData = JSON.stringify(messageObject);

        fetch("http://localhost:8080/api/message", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: jsonData
        });
    }

    const subtractMessageValue = async (messageObject) => {
        const jsonData = JSON.stringify(messageObject);

        fetch("http://localhost:8080/api/user?username=bsimpleman", {
            method: "PATCH",
            headers: {'Content-Type': 'application/json'},
            body: jsonData
        });
    }

    return(props.trigger) ? (
        <React.Fragment >

            <div className = 'newMessage'>
                <div className = 'newMessageInner'>
                    <text className = 'sendTo'>Send a message to: </text>
                    <input className = 'sendToEntryBox' name={"email"} onChange={e => setEmail(e.target.value)} type="text" placeholder="send to email"></input>


                    <input className = 'messageEntryBox' name={"messageBody"} type="text" onChange={e => setMessageBody(e.target.value)} placeholder="Type your message here..."></input>


                    <div className = 'tokensBox'>
                        [emojis will go here]
                    </div>

                    <Button variant="text" id= "send" onClick={() => handleInput()}>
                        Send
                    </Button>



                    {props.children}
                </div>

            </div>
        </React.Fragment>
    ) : "";
}

export default NewMessage

// import MessagingPage from "./messagingPage";


// class NewMessage extends Component {
//     constructor(props) {
//         super(props);
//         this.newMessage = this.newMessage.bind(this)

//     }

//     render() {
//         return(
//             <React.Fragment >
    
//                 <div className = 'newMessage'>
//                     <div className = 'newMessageInner'>
//                         <button className = 'closeButton' onClick={()=> this.setState({newMessage: false})}>
//                             X
//                         </button>
//                     </div>
    
//                 </div>
//             </React.Fragment>
    
//         )
    
//     }
// }
