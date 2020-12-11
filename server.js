const express = require('express');
const path = require('path');

let app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const reservations = [];
const waitList = [];

//routes
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
})

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
})

app.get("/add", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
})

//listener
app.listen(PORT, function(){
    console.log("App is listening at http://localhost:" + PORT);
});