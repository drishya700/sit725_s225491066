# BookNook - SIT725 Task 4.2P

A small book catalogue web app, built for Task 4.2P (Add a Database). This follows the
same *approach* shown in Prac 4 (Express + MongoDB + Mongoose, REST API, static frontend
with Materialize CSS) but is a distinct implementation:

## How this differs from Prac 4

| Prac 4 ("Project" cards) | This submission ("Book" cards) |
|---|---|
| Fields: title, image, link, description | Fields: title, author, genre, coverImage, yearPublished, rating, description |
| DB name: `myprojectDB` | DB name: `bookNookDB` |
| Collection: `projects` | Collection: `books` |
| Sample data: kitten images | Sample data: 5 real books across different genres |
| Only GET endpoint shown in prac | Includes both GET and a safe-write POST endpoint |

## Setup instructions

1. Make sure MongoDB is installed and running locally (`mongosh` should connect
   successfully to `mongodb://127.0.0.1:27017`).
2. Install dependencies:
   ```
   npm install
   ```
3. Seed the database with sample books:
   ```
   npm run seed
   ```
4. Start the server:
   ```
   npm start
   ```
5. Open your browser at `http://localhost:3000`.

## API endpoints

- `GET /api/books` — returns all books as JSON.
- `POST /api/books` — creates a new book (validated against the Mongoose schema).

## Verifying the data in MongoDB

Using the shell:
```
mongosh
use bookNookDB
db.books.find().pretty()
```
Or open MongoDB Compass and connect to `mongodb://localhost:27017`, then browse to
`bookNookDB > books`.
