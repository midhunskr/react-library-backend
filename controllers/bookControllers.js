const Book = require("../model/bookModel")

const getAllBooks = async (req, res) => {
    try{
        const books = await Book.find(req.query)
        res.json(books)
    }
    catch(error){
        res.status(500).json('Could not fetch data!')
    }
}

const getBookById = async (req, res) => {
    try{
        const book = await Book.findById(req.params.bookId).exec()
        res.status(201).json(book)
    }
    catch(error){
        res.status(404).json('Book not found!')
    }
}

const addNewBook = async (req, res) => {
    const newBook = new Book(req.body)
    await newBook.save()
    res.status(201).json(newBook)
}

const updateBook = async (req, res) => {
    try{
        res.status(201).json(await Book.findByIdAndUpdate(req.params.bookId, req.body, {new: true}))
    }
    catch(error){
        res.status(404).json('Book not found!')
    }
}

const deleteBook = async (req, res) => {
    try{
        await Book.findByIdAndDelete(req.params.bookId)
        res.status(201).json('Book is deleted!')
    }
    catch(error){
        res.status(404).json('Book not found!')
    }
    
}

module.exports = {
    getAllBooks,
    getBookById,
    addNewBook,
    updateBook,
    deleteBook
}