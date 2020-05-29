const express = require("express");
const BlogPost = require("../schema/Blogpost");

const router = express.Router();

router.get("/api/blogposts", async (req, res) => {
  console.log("running");
  let allBlogPosts = await BlogPost.find();
  res.status(200).send(allBlogPosts);
});

router.post("/api/blogposts", async (req, res) => {
  console.log("running");
console.log(req.body)
  const header = req.body.header
  const body = req.body.body
  const blogPost = new BlogPost({
    header,
    body,
    date: new Date().toISOString()
  })
 
  await blogPost.save();
  console.log(blogPost);
  
  res.status(200).send(blogPost);
});

module.exports = router;
