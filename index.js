const express = require('express');
const mongoose = require('mongoose');
const Product = require("./models/product_model.js");
const productRoute = require("./routes/product_route.js");
const app = express()

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// routes
app.use("/api/products", productRoute);




app.get("/", (req, res) => {
    res.send("Hello from Node API Server Updated");
});


mongoose.connect("mongodb+srv://emirbagdatli:5x6ikZ2b9BZCZbhp@backenddb.prdcdxn.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB").then(() => {
    console.log('Connected to db');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
}).catch(() => {
    console.log('connection failed');
});