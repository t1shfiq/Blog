const express = require("express");
const app = express ();
const Post = require("./api/models/posts");
const postsData = new Post();

app.get("/", (req,res) => {

    res.status(200).send(postsData.get());

})

// Initialize the server
app.listen(3000, () => {
    
    console.log ("Listening on localhost 3000")

})