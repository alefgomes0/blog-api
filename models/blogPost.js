const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("luxon");

const BlogPostSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comments" }],
});

BlogPostSchema.virtual("date_formatted").get(function () {
  return `${this.date.toLocaleDateString(DateTime.DATE_SHORT)}`;
});

module.exports = mongoose.Schema("BlogPost", BlogPostSchema);
