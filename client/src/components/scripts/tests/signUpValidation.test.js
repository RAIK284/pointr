const {verifyName} = require("../signUpValidation")
const {verifyUsername} = require("../signUpValidation")
const {verifyEmail} = require("../signUpValidation")
const {verifyPassword} = require("../signUpValidation")
const {isExistingEmail} = require("../signUpValidation")
const {isExistingUsername} = require("../signUpValidation")


// --------------- Unit tests for Verifying Names ---------------

test('Does not accept a name of length 0', () => {
    expect(verifyName("")).toEqual("Please input a name!");
});

test('Names should not be able to be over 40 characters long', () => {
    expect(verifyName("ThisNameUsesValidCharactersButIsTooLongToBeAllowed")).toEqual("Names must be under 40 characters long");
});

test('Names cannot contain numbers', () => {
    expect(verifyName("Name123")).toEqual("Invalid name. Only characters a-z are allowed");
});

test('Names cannot contain special characters', () => {
    expect(verifyName("Name!")).toEqual("Invalid name. Only characters a-z are allowed");
});

// a return value of "true" indicates a valid name
test('Names may contain spaces', () => {
    expect(verifyName("This Name is Valid")).toBe(true);
});

test('Valid names are accepted', () => {
    expect(verifyName("Valid Name")).toBe(true);
});

// --------------- Unit tests for Verifying Usernames ---------------

test('Does not accept a username of length 0', () => {
    expect(verifyUsername("")).toEqual("Please input a username!");
});

test('Usernames should not be able to be over 30 characters long', () => {
    expect(verifyUsername("ThisUsernameWouldBeValidButItsTooLong")).toEqual("Usernames must be under 30 characters long");
});

test('Usernames cannot contain special characters', () => {
    expect(verifyUsername("Name!")).toEqual("Invalid username. Only letters and numbers are allowed");
});

test('Names may not contain spaces', () => {
    expect(verifyUsername("This Name is Valid")).toEqual("Invalid username. Only letters and numbers are allowed");
});

test('Usernames can contain numbers', () => {
    expect(verifyUsername("Name123")).toEqual(true);
});

test('Valid usernames are accepted', () => {
    expect(verifyUsername("ThisUsernameIsValid123")).toBe(true);
});

// --------------- Unit tests for Verifying Emails ---------------

test('Does not accept an email of length 0', () => {
    expect(verifyEmail("")).toEqual("Please input an email!");
});

test('Emails cannot contain spaces', () => {
    expect(verifyEmail("Email 123 @gmail.com")).toEqual("Invalid email!");
});

test('Emails must include an @ symbol', () => {
    expect(verifyEmail("email.com")).toBe("Invalid email!");
});

test('Emails must include a top-level domain', () => {
    expect(verifyEmail("email@")).toBe("Invalid email!");
});

test('Emails must have content before an @ symbol', () => {
    expect(verifyEmail("@email.com")).toBe("Invalid email!");
});

test('Emails can contain numbers', () => {
    expect(verifyEmail("Email123@gmail.com")).toEqual(true);
});

test('Valid emails are accepted', () => {
    expect(verifyEmail("validEmail123@gmail.com")).toBe(true);
});

// --------------- Unit tests for Verifying Passwords ---------------

test('Does not accept a password of length 0', () => {
    expect(verifyPassword("")).toEqual("Password is too short! It must be at least 8 characters long");
});

test('Does not accept a less than 8 characters long', () => {
    expect(verifyPassword("Pass123")).toEqual("Password is too short! It must be at least 8 characters long");
});

test('Passwords cannot contain spaces', () => {
    expect(verifyPassword("Pass 12345")).toEqual("Invalid password. Only characters a-z, 0-9, and special characters excluding spaces are allowed");
});

test('Passwords can contain numbers', () => {
    expect(verifyPassword("Pass12345")).toEqual(true);
});

test('Passwords must contain a capital letter', () => {
    expect(verifyPassword("pass12345")).toEqual("Password must contain a capital letter");
});

test('Passwords must contain a number', () => {
    expect(verifyPassword("Password")).toEqual("Password must contain a number");
});

test('Passwords can contain special characters', () => {
    expect(verifyPassword("Pass123!@#$&()")).toEqual(true);
});

test('Valid passwords are accepted', () => {
    expect(verifyPassword("ValidPassword#123")).toBe(true);
});

// --------------- Async Unit Tests for Email Verification ---------------

// These tests relate to the endpoint /api/isExistingEmail. This endpoint returns a status of 200 if the email is not in use. Otherwise it returns a status of 401

test('Existing email accounts return a response code of 401', () => {
    // This test email is contained in the database
    const email = "test@gmail.com"
    return isExistingEmail(email).then(data => {
        expect(data).toEqual(401);
    });
});

test('Non-existant email accounts return a response code of 200', () => {
    // This test email is not contained in the database, and since it is not valid to be used it should always be considered "available" by this test
    const email = "test email account@gmail.com"
    return isExistingEmail(email).then(data => {
        expect(data).toEqual(200);
    });
});

// --------------- Async Unit Tests for Username Verification ---------------

// These tests relate to the endpoint /api/isExistingUsername. This endpoint returns a status of 200 if the username is not in use. Otherwise it returns a status of 401

test('Existing usernames return a response code of 401', () => {
    // This test username is contained in the database
    const username = "test12345"
    return isExistingUsername(username).then(data => {
        expect(data).toEqual(401);
    });
});

test('Non-existant usernames return a response code of 200', () => {
    // This test username is not contained in the database, and since it is not valid to be used it should always be considered "available" by this test
    const username = "test username!"
    return isExistingUsername(username).then(data => {
        expect(data).toEqual(200);
    });
});