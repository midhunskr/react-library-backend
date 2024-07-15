const express = require('express')
const { getAllUsers, getUserById, addNewUser, updateUser, deleteUser } = require('../controllers/userController')
const router = express.Router()

// 1.Get all users.
router.get('/', getAllUsers)

// 2. Get a user by ID.
router.get('/:userId', getUserById)

// 3. Add a user.
router.post('/', addNewUser)

// 4. Update a user.
router.patch('/:userId', updateUser)

// 5. Delete a user.
router.delete('/:userId', deleteUser)

module.exports = router