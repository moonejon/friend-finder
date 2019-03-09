// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
var entries = [
    {
        name: "Ryan Gosling",
        email: "the_notebook@gmail.com",
        answers: [3, 5, 2, 4, 3, 3, 1, 4, 5, 2]
    },
    {
        name: "Emily Blunt",
        email: "practically_perfect_in_every_way@gmail.com",
        answers: [4, 1, 2, 5, 3, 2, 1, 3, 5, 3]
    }
];

// Routes
// =============================================================

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});


app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});

// Displays all entries
app.get("/api/survey", function (req, res) {
    return res.json(entries);
});

// Create New Characters - takes in JSON input
app.post("/api/survey", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newEntry = req.body;

    console.log(newEntry);

    // We then add the json the user sent to the character array
    entries.push(newEntry);

    // We then display the JSON to the users
    res.json(newEntry);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
