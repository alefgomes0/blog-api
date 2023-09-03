const Comment = require("../models/comments");
const BlogPost = require("../models/blogPost");
const asyncHandler = require("express-async-handler");
const { body } = require("express-validator");

exports.get = asyncHandler(async (req, res, next) => {
  const allPostComments = await Comment.find({
    blogPost: req.params.postId,
  }).exec();
  res.json({
    comments: allPostComments,
  });
});

exports.post = [
  body("name").escape().trim(),
  body("message").escape().trim(),

  asyncHandler(async (req, res, next) => {
    const postId = req.params.postId;

    const comment = new Comment({
      name: req.body.name,
      message: req.body.message,
      date: new Date(),
      blogPost: postId,
    });

    await Promise.all([
      BlogPost.findByIdAndUpdate(postId, {
        $push: { comments: comment._id },
      }).exec(),
      comment.save(),
    ]);
    res.status(200).json({ message: "Comment sent successfully" });
  }),
];
