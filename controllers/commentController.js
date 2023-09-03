const Comment = require("../models/comments");
const BlogPost = require("../models/blogPost");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.post = [
  body("name")
    .escape()
    .trim(),
  body("message")
    .escape()
    .trim(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors)
      res.json({
        errors: errors.array()
      });
    } else {
      console.log("start");
      const postId = req.params.postId;
      const blogPost = await BlogPost.findOne({ _id: postId }).exec();
      console.log(req.body.name, req.body.message);
      res.json(blogPost);
    }
  }),
];
