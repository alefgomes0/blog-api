const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
  blogPost: { type: Schema.Types.ObjectId, required: true, ref: "BlogPost" },
  date: { type: Date },
});

CommentsSchema.virtual("date_formatted").get(function () {
  return `${this.date.toLocaleDateString(DateTime.DATE_SHORT)}`;
});

module.exports = mongoose.model("Comments", CommentsSchema);
