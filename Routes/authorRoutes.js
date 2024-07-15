const express = require('express')
const { getAllAuthors, getAuthorById, addNewAuthor, updateAuthor, deleteAuthor } = require('../controllers/authorControllers')
const router = express.Router()

// 1.Get all authors.
router.get('/', getAllAuthors)

// 2. Get a author by ID.
router.get('/:authorId', getAuthorById)

// 3. Add a author.
router.post('/', addNewAuthor)

// 4. Update a author.
router.patch('/:authorId', updateAuthor)

// 5. Delete a author.
router.delete('/:authorId', deleteAuthor)

module.exports = router