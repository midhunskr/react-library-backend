const Author = require("../model/authorModel")

const getAllAuthors = async (req, res) => {
    const authors = await Author.find({})
    res.json(authors)
}

const getAuthorById = async (req, res) => {
    try{
        const author = await Author.findById(req.params.authorId).exec()
        res.status(200).json(author)
    }
    catch(error){
        res.status(404).json('Author not found!')
    }
}

const addNewAuthor = async (req, res) => {
    const authorData = req.body
    const newAuthor = new Author(authorData)
    await newAuthor.save()
    res.status(201).json(newAuthor)
}

const updateAuthor = async (req, res) => {
    try{
        const updatedAuthor = await Author.findByIdAndUpdate(req.params.authorId, req.body, {new: true})
        res.status(201).json(updatedAuthor)
    }
    catch(error){
        res.status(404).json('Author not found!')
    }
    
}

const deleteAuthor = async (req, res) => {
    try{
        await Author.findByIdAndDelete(req.params.authorId)
        res.status(201).json('Author is deleted!')
    }
    catch(error){
        res.status(404).json('Author not found!')
    }
}

module.exports = {
    getAllAuthors,
    getAuthorById,
    addNewAuthor,
    updateAuthor,
    deleteAuthor
}