const User = require("../models/userModel")

//LOGIN USER
const loginUser = async(req,res) => {
    res.json({msg : 'LOGIN USER'})
}

//SIGNUP USER
const signupUser = async(req,res) => {
    res.json({msg : 'SIGNUP USER'})
}

module.exports = {
    loginUser,
    signupUser
}