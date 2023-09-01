const express = require("express");
const router = express.Router();
const blogPost = require("../controllers/blogController")


router.get("/posts", blogPost.get);

module.exports = router;
