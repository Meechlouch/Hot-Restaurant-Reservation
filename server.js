const express = require('express');
const path = require('path');

let app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

const reservations = [];
const waitList = [];

//listener
app.listen(PORT, function(){
    console.log("App is listening on PORT " + PORT);
});