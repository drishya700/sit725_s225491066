const mongoose = require('mongoose');
const Book = require('./models/Book');

mongoose.connect('mongodb://127.0.0.1:27017/bookNookDB');

mongoose.connection.on('connected', async () => {
  console.log('Connected to MongoDB - seeding bookNookDB ...');

  // Clear existing data so re-running seed doesn't duplicate entries
  await Book.deleteMany({});

  const sampleBooks = [
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      genre: "Fantasy",
      coverImage: "images/hobbit.jpg",
      yearPublished: 1937,
      rating: 4.8,
      description: "Bilbo Baggins is swept into an unexpected adventure with a company of dwarves."
    },
    {
      title: "Dune",
      author: "Frank Herbert",
      genre: "Science Fiction",
      coverImage: "images/dune.jpg",
      yearPublished: 1965,
      rating: 4.7,
      description: "A young heir navigates politics, prophecy and survival on a desert planet."
    },
    {
      title: "Murder on the Orient Express",
      author: "Agatha Christie",
      genre: "Mystery",
      coverImage: "images/orient-express.jpg",
      yearPublished: 1934,
      rating: 4.5,
      description: "Detective Hercule Poirot investigates a murder aboard a snowbound train."
    },
    {
      title: "Sapiens",
      author: "Yuval Noah Harari",
      genre: "Non-fiction",
      coverImage: "images/sapiens.jpg",
      yearPublished: 2011,
      rating: 4.6,
      description: "A sweeping look at how Homo sapiens came to dominate the world."
    },
    {
      title: "The Martian",
      author: "Andy Weir",
      genre: "Science Fiction",
      coverImage: "images/the-martian.jpg",
      yearPublished: 2011,
      rating: 4.4,
      description: "An astronaut stranded on Mars must engineer his own survival."
    }
  ];

  try {
    await Book.insertMany(sampleBooks);
    console.log(`Inserted ${sampleBooks.length} sample books into bookNookDB.`);
  } catch (err) {
    console.error("Error seeding data:", err.message);
  } finally {
    mongoose.connection.close();
  }
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err.message);
});
