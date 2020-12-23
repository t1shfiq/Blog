const PATH = "./data.json"
const fs = require('fs');

class Post {

    get(){
        return this.readData();
    }

    getIndividualBlog(postId){
        const post = this.readData();
        const foundPost = post.find((post) => post.id == postId);
        return foundPost;
    }

    add(newPost) { 
        const currentPosts = this.readData();
        currentPosts.unshift(newPost);
        this.storeData(currentPosts);
    }

    readData(){
        // JSON.parse takes JSON data as input and returns a new JavaScript object. 
        // Otherwise, we would just have a string of data with properties we can’t access.
        let rawdata = fs.readFileSync(PATH);
        let posts = JSON.parse(rawdata);
        return posts;
    }

    storeData(rawData){

        // object to JSON
        let data = JSON.stringify(rawData);
        fs.writeFileSync(PATH, data);
    }

}

module.exports = Post;