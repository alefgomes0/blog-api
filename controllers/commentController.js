const Comment = require("../models/comments");
const BlogPost = require("../models/blogPost");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.post = [
  body("name").escape().trim(),
  body("message").escape().trim(),

  asyncHandler(async (req, res, next) => {
    console.log("start");
    const postId = req.params.postId;

    const comment = new Comment({
      name: req.body.name,
      message: req.body.message,
      date: new Date(),
      blogPost: postId,
    });

    const blogPost = await BlogPost.findOne({ _id: postId }).exec();
    blogPost.comments.push(comment._id);
    await Promise.all([blogPost.save(), comment.save()]);
    res.json(res.status = 200)
  }),
];
