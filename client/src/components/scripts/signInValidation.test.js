const {validateUser} = require("./signInValidation")


test('Valid login returns user data.', () => {
    !expect(validateUser("")).toEqual(-1);
});