const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const User = require("../model/userModel")

const login = async (req, res) => {

    const {email, password} = req.body

    const user = await User.findOne({email: email})
    
    //if no user found, then;
    if(!user){
        return res.status(401).send("User not found!")
    }

    //compare passwords
    const passwordsMatch = bcrypt.compareSync(password, user.password)

    //send a response
    if(passwordsMatch){
        const token = jwt.sign({_id: user._id, email: user.email}, 'f91fdfeb274057b9c71d9a84915276aff5c6bbaf87c175070212f971932a24f25dd0536c8dbde5bc3f344bb7b00487744ae8525e514eda49f4f41e4cbf65d639', {expiresIn: '1h'})
        res.cookie('token', token, {httpOnly: true})
        res.send("Login success!")
    } else{
        return res.status(401).send("Password does not match!")
    }

}

const verifyLogin = async (req, res) => {
    if(req.cookies.token){
        res.send("logged in!")
    }
    else {
        res.status(401).send("Unauthorized access!")
    }
}

const logout = async (req, res) => {
    res.clearCookie('token')
    res.send("Logged out")
}

module.exports = {
    login,
    verifyLogin,
    logout
}