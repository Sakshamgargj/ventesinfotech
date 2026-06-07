const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String
    },
  description: {
    type: String, default: "" 
  },
  content: { 
    type: String, default: "" 
  },
  author: { 
    type: String
  },
  image: { 
    type: String, default: "" 
  },
  status: { 
    type: String, enum: ["active", "inactive"], default: "active" 
  },
}, {
  timestamps: true,
});



const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;