const express = require('express')
const { getAllBooks, getBookById, addNewBook, updateBook, deleteBook } = require('../controllers/bookControllers')
const router = express.Router()

// 1. Get all books.
router.get('/', getAllBooks)
// 2. get a book by ID.
router.get('/:bookId', getBookById)
// 3. Add a book.
router.post('/', addNewBook)
// 4. Update a book.
router.patch('/:bookId', updateBook)
// 5. Delete a book.
router.delete('/:bookId', deleteBook)
  
  module.exports = router