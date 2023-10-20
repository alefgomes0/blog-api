const express = require("express");
const router = express.Router();
const blogPost = require("../controllers/blogController");
const comment = require("../controllers/commentController");
const newBlogPost = require("../controllers/newPostController");

router.get("/posts", blogPost.get);
router.put("/posts/:postId/:publishStatus", blogPost.put)
router.delete("/posts/:postId", blogPost.delete);

router.get("/posts/:postId/comments", comment.get);
router.post("/posts/:postId/comments", comment.post);
router.delete("/posts/:postId/comments/:commentId", comment.delete)

router.post("/new-post", newBlogPost.post);

module.exports = router;
