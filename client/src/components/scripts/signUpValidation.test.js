const {verifyName} = require("./signUpValidation")

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

// --------------------------

test('Does not accept a username of length 0', () => {
    expect(verifyUsername("")).toEqual("Please input a username!");
});

test('Usernames should not be able to be over 40 characters long', () => {
    expect(verifyUsername("ThisUsernameWouldBeValidButItsTooLong")).toEqual("Names must be under 40 characters long");
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
