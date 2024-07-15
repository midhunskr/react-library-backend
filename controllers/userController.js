const bcrypt = require('bcrypt')
const saltRounds = 10;
const User = require("../model/userModel")

const getAllUsers = async (req, res) => {
    const users = await User.find({})
    res.json(users)
}

const getUserById = async (req, res) => {
    try{
        const user = await User.findById(req.params.userId).exec()
        res.status(200).json(user)
    }
    catch(error){
        res.status(404).json('User not found!')
    }
}

const addNewUser = async (req, res) => {
    const userData = req.body
    const hash = bcrypt.hashSync(userData.password, saltRounds)
    const newUser = new User({
        ...userData,
        password: hash
    })
    await newUser.save()
    res.status(201).json(newUser)
}

const updateUser = async (req, res) => {
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, {new: true})
        res.status(201).json(updatedUser)
    }
    catch(error){
        res.status(404).json('User not found!')
    }
    
}

const deleteUser = async (req, res) => {
    try{
        await User.findByIdAndDelete(req.params.userId)
        res.status(201).json('User is deleted!')
    }
    catch(error){
        res.status(404).json('User not found!')
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    addNewUser,
    updateUser,
    deleteUser
}