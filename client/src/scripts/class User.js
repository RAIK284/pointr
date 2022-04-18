class User  {
    constructor(ID, username, password, messagingPoints, funds, email, phoneNumber, inventoryID, bio, messages, isPrivate)   {

        this.ID = ID;
        this.username = username;
        this.password = password;
        this.messagingPoints = messagingPoints;
        this.funds = funds;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.inventoryID = inventoryID;
        this.bio = bio;
        this.messages = messages;
        this.isPrivate = isPrivate;
    }

    getUserData()   {

        var dict = {}
        dict["ID"] = this.ID;
        dict["username"] = this.username;
        dict["password"] = this.password;
        dict["messagingPoints"] = this.messagingPoints;
        dict["funds"] = this.funds;
        dict["email"] = this.email;
        dict["phoneNumber"] = this.phoneNumber;
        dict["inventoryID"] = this.inventoryID;
        dict["bio"] = this.bio;
        dict["messages"] = this.messages;
        dict["isPrivate"] = this.isPrivate;

        return dict;
    }

    getID() {

        return this.ID;
    }

    getUsername()   {

        return this.username;
    }

    getPassword()   {

        return this.password;
    }

    getMessagingPoints()    {

        return this.messagingPoints;
    }

    getFunds()  {

        return this.funds;
    }

    getEmail()  {

        return this.email;
    }

    getPhoneNumber()    {

        return this.phoneNumber;
    }

    getInventoryID()    {

        return this.inventoryID;
    }

    getBio()    {

        return this.bio;
    }

    getMessages()   {

        return this.messages;
    }

    getIsPrivate()  {

        return this.isPrivate;
    }

    updateUserData(newDict)    {

        this.ID = newDict["ID"];
        this.username = newDict["username"];
        this.password = newDict["password"];
        this.messagingPoints = newDict["messagingPoints"];
        this.funds = newDict["funds"];
        this.email = newDict["email"];
        this.phoneNumber = newDict["phoneNumber"];
        this.inventoryID = newDict["inventoryID"];
        this.bio = newDict["bio"];
        this.messages = newDict["messages"];
        this.isPrivate = newDict["isPrivate"];
    }

    setID(newID)    {

        this.ID = newID;
    }

    setUsername(newUsername)    {

        this.username = newUsername;
    }

    setPassword(newPassword)    {

        this.password = newPassword;
    }

    setMessagingPoints(newMessagingPoints)  {

        this.messagingPoints = newMessagingPoints;
    }

    setFunds(newFunds)  {

        this.funds = newFunds;
    }

    setEmail(newEmail)  {

        this.email = newEmail;
    }

    setPhoneNumber(newPhoneNumber)  {

        this.phoneNumber = newPhoneNumber;
    }

    setInventoryID(newInventoryID)  {

        this.inventoryID = newInventoryID;
    }

    setBio(newBio)  {

        this.bio = newBio;
    }

    addMessage(newMessage)    {

        this.messages.push(newMessage);
    }

    changeIsPrivate()  {

        this.isPrivate = !this.isPrivate;
    }

    getAllUsers()   {

        //Return all user objects as a list.
    }
}