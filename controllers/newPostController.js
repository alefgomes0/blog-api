const BlogPost = require("../models/blogPost");
const asyncHandler = require("express-async-handler");
const { body } = require("express-validator");

exports.post = [
  body("title").escape().trim(),
  body("synopsis").escape().trim(),
  body("content").escape().trim(),

  asyncHandler(async (req, res, next) => {
    const newBlogPost = new BlogPost({
      title: req.body.title,
      synopsis: req.body.synopsis,
      content: req.body.content,
      is_published: true,
      date: new Date(),
    });

    await newBlogPost.save();
    console.log(req.headers.referer)
    res.redirect(`${req.headers.referer}`)
  }),
];
