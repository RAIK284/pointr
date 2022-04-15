import React, { Component, useState, useEffect} from "react";
import './styles/newMessage.css';
import Button from '@mui/material/Button';
// import TokensBox from "./tokensBox";
import TokenCostButton from "./tokenCostButton";
////
import smiley from './images/smiley.png'
import joyTears from './images/emojis/joyTears.png'
import sunglass from './images/emojis/sunglass.png'
import poo from './images/emojis/poo.png'
import kiss from './images/emojis/kiss.png'
import hundred from './images/emojis/hundred.png'
import thumbsUp from './images/emojis/thumbsUp.png'
import frog from './images/emojis/frog.png'
import clinkGlass from './images/emojis/clinkGlass.png'
import glowStar from './images/emojis/glowStar.png'
import fire from './images/emojis/fire.png'


function NewMessage(props){

    const emojiData = {
        joyTears: {
            image: joyTears,
            price: 10,
            emoji: "😂"
        },
        sunglass: {
            image: sunglass,
            price: 10,
            emoji: "😎"
        },
        poo: {
            image: poo,
            price: 5,
            emoji: "💩"
        },
        kiss: {
            image: kiss,
            price: 20,
            emoji: "💋"
        },
        hundred: {
            image: hundred,
            price: 100,
            emoji: "💯"
        },
        thumbsUp: {
            image: thumbsUp,
            price: 15,
            emoji: "👍"
        },
        frog: {
            image: frog,
            price: 50,
            emoji: "🐸"
        },
        clinkGlass: {
            image: clinkGlass,
            price: 10,
            emoji: "🥂"
        },
        glowStar: {
            image: glowStar,
            price: 20,
            emoji: "🌟"
        },
        fire: {
            image: fire,
            price: 5,
            emoji: "🔥"
        }

    }

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
    }

    var dict = {
        0x1B780: 10,//mushroom worth 10 pts
        0x1B64A: 15//heart eyes worth 15 pts
    }
    const getMessageValue = (messageBody) => {
        console.log("In getMessageValue function")
        console.log(messageBody)
        // console.log(messageBody.length)

        var totalValue = 0

        for (var i = 0; i < messageBody.length; i++) {
            // if the character is not ASCII
            if (messageBody.charCodeAt(i) > 127)
                
                // every emoji is 2 characters
                // emoji id is charCode
                var emojiID = messageBody.charCodeAt(i)+messageBody.charCodeAt(i+1)

                // if emoji is in our approved list, add its value
                if (dict[emojiID] != null) {
                    console.log("INSIDE IF")
                    console.log(emojiID)// this emoji id is wrong... only f***s up when theres a char btwn emojis
                    console.log(dict[emojiID])
                    totalValue += dict[emojiID]
                }

                // skip next char since emojis take up 2 chars
                i++

        }

        console.log(totalValue)

    }

    useEffect(() => {
        setMessageBody(messageBody)
    }, [messageBody]);


    const setMessageData = async () => {
        getMessageValue(messageBody);
        messageObject.name = this.name;
        messageObject.timestamp = new Date().toUTCString()
        messageObject.receiver = email;
        messageObject.messageBody = messageBody;

        // console.log(messageBody)
        // console.log(email)
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
                    {/* <input className = 'sendToEntryBox' name={"email"} onChange={e => setEmail(e.target.value)} type="text" placeholder="send to email"></input> */}
                    <div class="dropdown">
                        <span>Select User</span>
                        <div class="dropdown-content">
                            <p onClick={e => setEmail(e.target.value)}>hard coded user 1</p>
                            <p>hard coded user 2</p>
                            <p>hard coded user 3</p>
                            <p>hard coded user 4</p>
                            <p>hard coded user 5</p>
                            <p>hard coded user 6</p>
                            <p>hard coded user 7</p>
                            <p>hard coded user 8</p>
                            <p>hard coded user 9</p>
                            <p>hard coded user 10</p>
                            <p>hard coded user 12</p>
                            <p>hard coded user 13</p>
                            <p>hard coded user 14</p>
                            <p>hard coded user 15</p>

                        </div>
                    </div>

                    <textarea className="messageEntryBox" value={messageBody} name={"messageBody"} rows="4" cols="50" onChange={e => setMessageBody(e.target.value)} placeholder="Type your message here..."></textarea>
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