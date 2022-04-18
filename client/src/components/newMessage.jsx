import React, { Component, useState, useEffect} from "react";
import './styles/newMessage.css';
import Button from '@mui/material/Button';
import TokenCostButton from "./tokenCostButton";
import emojiDataExport from './emojiData.js'


function NewMessage(props){

    const emojiData = emojiDataExport;

    const [email, setEmail] = useState('');
    const [messageBody, setMessageBody] = useState('');

    const messageObject = {
        "name": "Blake Simpleman",
        "timestamp": "",
        "sender": "bsimpleman",
        "receiver": "",
        "value": "",
        "messageBody": "",
        "isRead": false
    }

    const handleInput = () => {
        setMessageData()
        console.log(messageObject)
    }

    var dict = {
        '😂': emojiData.joyTears.price,
        '😎': emojiData.sunglass.price,
        '💩': emojiData.poo.price,
        '💋': emojiData.kiss.price,
        '💯': emojiData.hundred.price,
        '👍': emojiData.thumbsUp.price,
        '🐸': emojiData.frog.price,
        '🥂': emojiData.clinkGlass.price,
        '🌟': emojiData.glowStar.price,
        '🔥': emojiData.fire.price
    }
    
    
    function removeEmojis(str) {
        var emojiRE = /(\P{EPres})|(\P{ExtPict})/gu;
        return str.replace(emojiRE, '');
    }

    function removeNonEmojis(str) {
        var emojiRE = /(\P{EPres})|(\P{ExtPict})/gu;
        return str.replace(emojiRE, '');
    }

    const getMessageValue = (messageBody) => {

        var messageBodyPostCull = removeEmojis(messageBody)

        var messageBodyPostCull = removeNonEmojis(messageBody)

        var totalValue = 0

        for (var i = 0; i < messageBodyPostCull.length; i++) {
            // if the character is not ASCII
            if (messageBodyPostCull.charCodeAt(i) > 127)
                
                var emojiIcon = messageBodyPostCull.charAt(i) + messageBodyPostCull.charAt(i+1)

                // if the emoji is in our selected list
                if (dict[emojiIcon] != null) {
 
                    totalValue += dict[emojiIcon]
   
                }
                // skip next char since emojis take up 2 chars
                i++
        }
        console.log("totalValue: ")
        return totalValue
    }

    useEffect(() => {
        setMessageBody(messageBody)
    }, [messageBody]);


    const setMessageData = async () => {
        messageObject.value = getMessageValue(messageBody);

        messageObject.name = messageObject.name;
        messageObject.timestamp = new Date().toUTCString();
        messageObject.receiver = document.getElementById("selectedEmail").value;

        messageObject.messageBody = messageBody;

        await postMessage(messageObject);
        await subtractMessageValue(messageObject);

    }

    const postMessage = async (messageObject) => {
        const jsonData = JSON.stringify(messageObject);

        fetch("http://localhost:8080/api/message", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: jsonData
        })
        .then((response) => {
            if(response.status === 200) {
                alert("Message Sent :)")
            }
        })
        .catch((error) => {
            console.log('error: ' + error);
            console.log("POST REQUEST TO SEND MESSAGE CAUSED ERRORS")
        })

    }

    useEffect(() => console.log(messageBody), [messageBody]);

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
                 
                    <div className="box">
                        <select id="selectedEmail">
                            {/* {emailList} */}
                            {/* look at store page */}
                            <option>username1</option>
                        </select>
                    </div>

                    <div>
                        <textarea className="messageEntryBox" value={messageBody} name={"messageBody"} rows="4" cols="50" onChange={e => setMessageBody(e.target.value)} placeholder="Type your message here..."></textarea>
                    </div>
                    <div className="tokensBox">
                        <TokenCostButton 
                            image = {emojiData.joyTears.image} 
                            points = {emojiData.joyTears.price} 
                            onClick={(e) => setMessageBody(messageBody + emojiData.joyTears.emoji)}>
                        </TokenCostButton>

                        <TokenCostButton 
                            image = {emojiData.sunglass.image} 
                            points = {emojiData.sunglass.price} 
                            onClick={(e) => setMessageBody(messageBody + emojiData.sunglass.emoji)}>
                        </TokenCostButton>

                        <TokenCostButton 
                            image = {emojiData.poo.image} 
                            points = {emojiData.poo.price} 
                            onClick={(e) => setMessageBody(messageBody + emojiData.poo.emoji)}>
                        </TokenCostButton>

                        <TokenCostButton 
                            image = {emojiData.kiss.image} 
                            points = {emojiData.kiss.price} 
                            onClick={(e) => setMessageBody(messageBody + emojiData.kiss.emoji)}>
                        </TokenCostButton>

                        <TokenCostButton 
                            image = {emojiData.hundred.image} 
                            points = {emojiData.hundred.price} 
                            onClick={(e) => setMessageBody(messageBody + emojiData.hundred.emoji)}>
                        </TokenCostButton>

                        <TokenCostButton 
                            image = {emojiData.thumbsUp.image} 
                            points = {emojiData.thumbsUp.price} 
                            onClick={(e) => setMessageBody(messageBody + emojiData.thumbsUp.emoji)}>
                        </TokenCostButton>

                        <TokenCostButton 
                            image = {emojiData.frog.image} 
                            points = {emojiData.frog.price} 
                            onClick={(e) => setMessageBody(messageBody + emojiData.frog.emoji)}>
                        </TokenCostButton>

                        <TokenCostButton 
                            image = {emojiData.clinkGlass.image} 
                            points = {emojiData.clinkGlass.price} 
                            onClick={(e) => setMessageBody(messageBody + emojiData.clinkGlass.emoji)}>
                        </TokenCostButton>

                        <TokenCostButton 
                            image = {emojiData.glowStar.image} 
                            points = {emojiData.glowStar.price} 
                            onClick={(e) => setMessageBody(messageBody + emojiData.glowStar.emoji)}>
                        </TokenCostButton>

                        <TokenCostButton 
                            image = {emojiData.fire.image} 
                            points = {emojiData.fire.price} 
                            onClick={(e) => setMessageBody(messageBody + emojiData.fire.emoji)}>
                        </TokenCostButton>

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