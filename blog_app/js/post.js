/**

 * TODO: Complete getPost function to get post data from API
 * TODO: Complete buildPost function to fill in the post data in the post.html file using ids
 */

const API_URL = "http://localhost:3000/api/posts/";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
    getPost();
}

const getPostIdParam = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return (urlParams.get("id"));
}


const getPost = () => {
    const postId = getPostIdParam();
    const FULL_URL = `${API_URL}${postId}`;

    fetch(FULL_URL, {
        method: 'GET'
    }).then((response)=>{
        return response.json();
    }).then((data)=>{
        buildPosts(data);
        //console.log(data);
    })
}


const buildPosts = (blogPost) => {

    const postImage = `${API_BASE_URL}${blogPost.post_image}`;
    const postDate = new Date(parseInt(blogPost.added_date)).toDateString();
    document.getElementById("individual-post-title").innerText = blogPost.title;
    document.getElementById("individual-post-date").innerText = `Published on ${postDate}`;
    document.getElementById("individual-post-content").innerText = blogPost.content;
    document.querySelector("header").style.backgroundImage =  `url(${postImage})`

/*
        let blogPostsContent = "";

            const postDate = new Date(parseInt(blogPosts.added_date)).toDateString();
            const postImage = `${API_BASE_URL}${blogPosts.post_image}`;
            blogPostsContent +=`
            <div class="navigation">
            <a href="index.html">Back</a>
            </div>
            <div class="post-container">
                            <div id="individual-post-title">${blogPosts.title}</div>
                            <div id="individual-post-date">${postDate}</div>
                            <div id="individual-post-content">${blogPosts.content}</div>
                        </div>
            `
            document.querySelector('.posts').innerHTML = blogPostsContent;
    */
    }
