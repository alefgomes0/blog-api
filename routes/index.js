const express = require("express");
const router = express.Router();
const blogPost = require("../controllers/blogController")
const comment = require("../controllers/commentController")

router.get("/posts", blogPost.get);

router.get("/posts/:postId/comments", comment.get)
router.post("/posts/:postId/comments", comment.post)

module.exports = router;
