const Blog = require("../models/blog");


exports.getBlog = async (req,res,next) => {
  try {
    const result = await Blog.find();
    res.status(200).json({
      success:true,
      result,
    })
  } catch (error) {
    next(error)
  }
}


module.exports.addBlog = async (req, res, next) => {
  try {
    console.log("Request Bodyy:", req.body);

    const { author, content, description, image, title } = req.body;
    const newBlog = { author, content, description, image, title };
    
    const newBlogCreated = await Blog.create(newBlog);
    
    res.status(201).json({
      success: true,
      message: 'Blog added successfully',
      data: newBlogCreated,
    });
  } catch (error) {
    next(error);
  }
};
