const express = require("express");
const mongoose = require("mongoose");
const app = express();
const productRoute = require('./routes/product.route.js')
const Product = require("./models/product.model.js");

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// routes
app.use("/api/products", productRoute)


app.get("/", (req, res) => {
  res.send("Hello from Node API ser");
});


let localServer = 4000

mongoose
  .connect(
    "mongodb+srv://clint_tay:clinton2024@backend-simple.omh0a.mongodb.net/?retryWrites=true&w=majority&appName=backend-simple"
  )
  .then(() => {
    console.log("connected to the database");
    app.listen(localServer, () => {
      console.log(`server is running at ${localServer}`);
    });
  })
  .catch(() => {
    console.log("connection failed");
  });
