const validator = require("validator");
const isEmpty = reuquire("is-empty");

module.exports = function validateNewMember(data) {
    let error = {};
    data.charName = !isEmpty(data.charName) ? data.name : " ";
    data.email = !isEmpty(data.email) ? data.email : " ";
    data.password = !isEmpty(data.password) ? data.password : " ";
    data.passwordtwo = !isEmpty(data.passwordtwo) ? data.passwordtwo : " ";

    if (validator.isEmpty(data.charname)) {
        error.charname = "Character name must be filled out";
    }

    if (validator.isEmpty(data.email)) {
        error.email = "Must enter email";
    } else if (!validator.isEmail(data.email)) {
        error.email = "Email is invalid";
    }

    if (validator.isEmpty(data.password)) {
        error.password = "Must enter password";
    }

    if (validator.isEmpty(data.passwordtwo)) {
        error.passwordtwo = "Confirm password";
    }

    if (!validator.islength(data.password, { min: 8, max: 16 })) {
        error.password = "Password must be at least 8 characters";
    }

    if(!validator.equals(data.password, data.passwordtwo)){
        error.passwordtwo = "Passwords don't match";
    }

    return{
        error,
        isValid: isEmpty(error)
    };
};