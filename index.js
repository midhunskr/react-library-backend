require('dotenv').config()
const mongoose = require('mongoose');
const express = require('express')
const bookRoutes = require('./Routes/bookRoutes')
const authorRoutes = require('./Routes/authorRoutes')
const userRoutes = require('./Routes/userRoutes')
const authRoutes = require('./Routes/authRoutes')
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express()
const port = 3000

app.use(cors({
    credentials: true,
    origin: true
}))
app.use(express.json())
app.use(cookieParser())

app.use('/books', bookRoutes)
app.use('/authors', authorRoutes)
app.use('/users', userRoutes)
app.use('/auth', authRoutes)

app.listen(port, () => {
  console.log(`Server running on port ${port}.`)
})

// getting-started.js

main().then(() => console.log('connected')) .catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DB_URL);
}