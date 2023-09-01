const mongoose = require("mongoose")

const ImageDetailsSchema = new mongoose.Schema({
  image: { type: String },
  blogPost: { type: mongoose.Schema.Types.ObjectId }
})

module.exports = mongoose.model("ImageDetails", ImageDetailsSchema)
