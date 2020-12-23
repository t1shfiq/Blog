const express = require("express");
const app = express ();
const Post = require("./api/models/posts");
const postsData = new Post();

app.get("/api/posts", (req,res) => {

    postsData.add(test);
    res.status(200).send(postsData.get());
})

app.get("/api/posts/:id", (req,res) => {
    const postId = req.params.id;
    const foundPost = postsData.getIndividualBlog(postId);

    if(foundPost) {
        res.status(200).send(foundPost)
    } else {
        res.status(404).send("Not Found");
    }
});

// Initialize the server
app.listen(3000, () => {
    console.log ("Listening on localhost 3000")
})