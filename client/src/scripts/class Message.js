class Message   {
    constructor(ID, timestamp, sender, receiver, body)  {

        this.ID = ID;
        this.timestamp = timestamp;
        this.sender = sender;
        this.receiver = receiver;
        this.body = body;
    }

    calculatePointValue()   {

        //Find each emoji in body, then add the values up and return.
    }

    sendMessageToReceiver() {
        
        //Using receiver, add this message to the user's messages.
    }
}