const {createUser} = require("../signUpValidation")

// --------------- Async Unit Tests for the "createUser" Signup Function ---------------

beforeEach(async () => {
    await createNewTestUser();
});

afterEach(async () => {
    await deleteNewTestUser();
});

// Setup - this setup includes the createUser function which is the function we are testing
async function createNewTestUser() {

// This data is intentionally invalid to be used as an actual user. The createUser function plays no part in validation, it only stores new data.
// To avoid conflicts with real users this invalid data will be used.
    const newUserData = {
        "name": "test name 123",
        "username": "test*username",
        "email": "test email@gmail.com",
        "password": "Password123"
    }

    await createUser(newUserData.name, newUserData.username, newUserData.email, newUserData.password);
}

async function getNewTestUser() {
    const data = await fetch('http://localhost:8080/api/user?username=test*username')
        .then(response => {return response.json()})

    return data;
}

// Teardown
async function deleteNewTestUser() {

    const userToDelete = {username: "test*username"};
    const jsonData = JSON.stringify(userToDelete);

    fetch("http://localhost:8080/api/user", {
        method: "DELETE",
        headers: {'Content-Type': 'application/json'},
        body: jsonData
    });
}

test('Users created from the createUser function are stored with the correct name', () => {
    getNewTestUser().then(data => expect(data.name).toEqual("test name 123"));
});

test('Users created from the createUser function are stored with the correct username', () => {
    getNewTestUser().then(data => expect(data.username).toEqual("test*username"));
});

test('Users created from the createUser function are stored with the correct email', () => {
    getNewTestUser().then(data => expect(data.email).toEqual("test email@gmail.com"));
});

test('Users created from the createUser function are not stored with their password in plain-text', () => {
    getNewTestUser().then(data => expect(data.password).not.toEqual("Password123"));
});

test('Users are created with "isPrivate" set to false as default', () => {
    getNewTestUser().then(data => expect(data.isPrivate).toEqual(false));
});

test('Users are created with "notifications" set to false as default', () => {
    getNewTestUser().then(data => expect(data.notifications).toEqual(false));
});