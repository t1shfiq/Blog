const PATH = "./data.json"
const fs = require('fs');

class Post {

    

    get(){
        return this.readData();
    }

    getIndividualBlog(){

    }

    add(){


    }

    readData(){
        
        // JSON.parse takes JSON data as input and returns a new JavaScript object. 
        // Otherwise, we would just have a string of data with properties we can’t access.
        let rawdata = fs.readFileSync(PATH);
        let posts = JSON.parse(rawdata);
        return posts;

    }

}

module.exports = Post;