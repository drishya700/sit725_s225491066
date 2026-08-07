var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

const mongoose = require('mongoose');
const Book = require('./models/Book');

// Middleware
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB - note the database name is different from the prac
// (bookNookDB vs myprojectDB)
mongoose.connect('mongodb://127.0.0.1:27017/bookNookDB');

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB (bookNookDB)');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err.message);
});

// GET all books
app.get('/api/books', async (req, res) => {
  try {
    const books = await Book.find({});
    res.json({ statusCode: 200, data: books, message: "Success" });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
});

// POST a new book (safe write: allowlist fields + schema validation)
app.post('/api/books', async (req, res) => {
  try {
    const { title, author, genre, coverImage, yearPublished, rating, description } = req.body;

    const book = new Book({ title, author, genre, coverImage, yearPublished, rating, description });
    await book.save(); // schema validation runs here

    res.status(201).json({
      statusCode: 201,
      message: "Book added successfully",
      data: book
    });
  } catch (err) {
    res.status(400).json({
      statusCode: 400,
      message: err.message
    });
  }
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
