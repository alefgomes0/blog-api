const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("luxon");

const BlogPostSchema = new Schema({
  title: { type: String, required: true },
  synopsis: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comments" }],
  is_published: { type: Boolean, required: true },
  lp_image_path: { type: String },
  inside_image_path: { type: String },
});

BlogPostSchema.virtual("date_formatted").get(function () {
  return `${this.date.toLocaleDateString(DateTime.DATE_SHORT)}`;
});

module.exports = mongoose.model("BlogPost", BlogPostSchema);
