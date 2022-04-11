const {verifyName} = require("./signUpValidation")


test('Does not accept a name of length 0', () => {
    expect(verifyName("")).toEqual("Please input a name!");
});