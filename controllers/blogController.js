const BlogPost = require("../models/blogPost");
const asyncHandler = require("express-async-handler");


exports.get = asyncHandler(async (req, res, next) => {
  const allBlogPosts = await BlogPost.find().exec();
  res.json({
    allBlogPosts,
  });
});


