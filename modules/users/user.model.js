const {Schema,model} = require("mongoose");

const userSchema = new Schema({
    firstName:{
        type: String,
        requred: true,
    },
    lastName:{
        type: String,
        requred: true,
    },
    email:{
        type: String,
        requred: true,
        unique: true,
        lowercase: true,

    },
    password:{
        type: String,
        requred: true,
        minLength:[6, "password to short"]
        
    }

});
module.exports = model("User", userSchema)