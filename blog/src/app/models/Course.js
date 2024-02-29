const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, maxLength: 255 },
    description: { type: String, maxLength: 600 },
    videoID: { type: String, maxLength: 255, required: true },
    thumbnail: { type: String, maxLength: 255 },
    slug: { type: String, slug: "name"},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", Course);