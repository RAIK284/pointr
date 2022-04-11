import React, { Component } from "react";
import './styles/newMessage.css';
import Button from '@mui/material/Button';

function NewMessage(props){
    return(props.trigger) ? (
        <React.Fragment >

            <div className = 'newMessage'>
                <div className = 'newMessageInner'>
                    
                    <text className = 'sendTo'>Send a message to: </text>

                    <input className = 'messageEntryBox' type="text" placeholder="Type your message here..."></input>


                    <div className = 'tokensBox'>
                        [emojis will go here]
                    </div>

                    <Button variant="text" id= "send">
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
