const BlogPost = require("../models/blogPost");
const asyncHandler = require("express-async-handler");

exports.get = asyncHandler(async (req, res, next) => {
  const allBlogPosts = await BlogPost.find().exec();
  res.json({
    allBlogPosts,
  });
});

exports.put = asyncHandler(async (req, res, next) => {
  await BlogPost.findByIdAndUpdate(req.params.postId, {
    $set: { is_published: req.params.publishStatus },
  }).exec();
});

exports.delete = asyncHandler(async (req, res, next) => {
  await BlogPost.findByIdAndDelete(req.params.postId).exec();
});
