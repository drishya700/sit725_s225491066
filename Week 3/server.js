var express = require("express")
var app = express()

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Simple GET REST endpoint - returns book data as JSON
app.get('/api/books', (req, res) => {
    const books = [
        {
            title: "Atomic Habits",
            author: "James Clear",
            image: "images/atomic.png",
            link: "About Atomic Habits",
            description: "A practical guide to building good habits and breaking bad ones."
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt & David Thomas",
            image: "images/book3.jpeg",
            link: "About The Pragmatic Programmer",
            description: "Timeless tips and tricks for becoming a better software developer."
        },
        {
            title: "Sapiens",
            author: "Yuval Noah Harari",
            image: "images/sapiens.jpg",
            link: "About Sapiens",
            description: "A brief history of humankind, from the Stone Age to the present."
        }
    ];
    res.json(books);
});

var port = process.env.port || 3000;
app.listen(port, () => {
    console.log("App listening to: " + port)
})