const express = require('express')
require('dotenv').config()
const db = require('./db')

const app = express()

app.use(express.json());

app.get('/friends', (req, res, next) => {
    return res.status(200).json({friends: db.friends}) 
})

app.get('/books', (req, res, next) => {
    return res.status(200).json({books: db.books})
})

app.listen(3000, () => console.log(`Listening port ${3000}`))