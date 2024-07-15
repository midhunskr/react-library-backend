const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    images: [String],
    mainImage: String,
    author: {
        type: mongoose.ObjectId,
        ref: 'Author'
    },
    title: String,
    price: String,
    description: String
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book