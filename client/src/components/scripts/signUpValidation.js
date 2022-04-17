const jsonBody = {
    "username": "",
    "name": "",
    "bio": "",
    "email": "",
    "age": 0,
    "password": "",
    "profileImg": "./images/default.png",
    "phoneNumber": 4029490831,
    "messagingPoints": 0,
    "funds": 0,
    "inventoryId": "",
    "lastLogin": "",
    "isPrivate": false,
    "notifications" : false,
    "trophies": []
}

// Names can only be characters a-z
export function verifyName(name) {
    if ([...name].length === 0) {
        return "Please input a name!"
    } else if ([...name].length > 50) {
        return "Names must be under 50 characters long"
    } else if (!name.match(/^[-_ a-zA-Z]+$/)) {
        return "Invalid name. Only characters a-z are allowed"
    } else {
        return true;
    }
}

// Username cannot already be in use
export function verifyUsername(username) {
    if ([...username].length === 0) {
        return "Please input a username!"
    } else if ([...username].length > 30) {
        return "Usernames must be under 30 characters long"
    } else if (!username.match(/^[0-9A-Za-z]+$/)) {
        return "Invalid username. Only letters and numbers are allowed"
    } else {
        return true;
    }
}

export async function isExistingUsername(username) {
    const users = await fetch('http://localhost:8080/api/existingUser?username=' + username);
    const response = await users;
    return response.status;
}

export async function isExistingEmail(email) {
    const emails = await fetch('http://localhost:8080/api/existingEmail?email=' + email);
    const response = await emails;
    return response.status;
}

export async function createUser(name, username, email, password) {
    jsonBody.name = name;
    jsonBody.username = username;
    jsonBody.email = email;
    jsonBody.password = password;

    const newUserJSON = JSON.stringify(jsonBody);

    // Send JSON data into POST request
    const response = await fetch("http://localhost:8080/api/signup", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: newUserJSON
    });

    const responseData = await response.json();
    console.log(response)
    console.log(responseData)

    localStorage.setItem('token', responseData.token);
}

export function verifyEmail(email) {
    if ([...email].length === 0) {
        return "Please enter an email!"
    } else if (!(/\S+@\S+\.\S+/.test(email))) {
        return "Invalid email!"
    } else {
        return true;
    }
}

export function verifyPassword(password) {
    if ([...password].length < 8){
        return "Password is too short! It must be at least 8 characters long"
    } else if ([...password].length > 30) {
        return "Passwords must be under 30 characters long"
    } else if (!password.match(/^[0-9A-Za-z]+$/)) {
        return "Invalid password. Only characters a-z and 0-9 are allowed"
    } else if (!(/\d/.test(password))) {
        return "Password must contain a number"
    } else if (password.toLowerCase() === password) {
        return "Password must contain a capital letter"
    } else {
        return true;
    }
}