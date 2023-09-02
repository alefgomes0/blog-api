const Comment = require("../models/comments");
const BlogPost = require("../models/blogPost");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.post = [
  body("name")
    .escape()
    .trim()
    .isLength({ min: 2, max: 30 })
    .withMessage(
      "'Name' field should have at least 2 and at max 30 characters"
    ),
  body("message")
    .escape()
    .trim()
    .isLength({ min: 2, max: 300 })
    .withMessage(
      "'Message' field should have at least 2 and at max 300 characters"
    ),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors)
      res.json(errors)
    }

    console.log("start");
    const postId = req.params.postId;
    const blogPost = await BlogPost.findOne({ _id: postId }).exec();
    console.log(req.body.name, req.body.message)
  }),
];
