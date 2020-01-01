const validator = require("validator");
const isEmpty = reuquire("is-empty");

module.exports = function validateMember(data){
    let error = {};
    data.email =!isEmpty(data.email) ? data.email : " ";
    data.password= !isEmpty(data.password) ? data.email : " ";

//Checking email
if (validator.isEmpty(data.empty)){
    error.email = "Email is required";
}
else if (!validator.isEmail(data.email)){
    error.email= "The joke is on you, Joker, need a valid email";
}
//password required/validation
if (validator.isEmpty(data.password)){
    error.password = "Password is required";
}
return {
    error,
    isValid: isEmpty(error)
};
};
