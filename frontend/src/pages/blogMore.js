import React from 'react';

const blogData = [
  {
    id: 1,
    title: "Exploring the Future of Technology",
    description: "A deep dive into the technological advancements shaping our world.",
    author: "John Doe",
    date: "October 29, 2024",
    content: "Full blog content goes here...",
    image: "https://via.placeholder.com/600x400",
  },
  // Additional blog data
];

export default function BlogDetails() {
  


  return (
    <div className="container py-5">
      {blogData.map((blog) => (
          <div className="col-md-12 col-lg-12 mb-12">
            <div className="card h-100 shadow-sm">
              <h5 className="card-title text-center p-2">{blog.title}</h5>
              <img src={blog.image} className="card-img-top" alt={blog.title} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-xl">{blog.description}</h5>
                <p className="card-text text-secondary">{blog.content}</p>
                <p className="card-text text-muted mt-auto">
                  By <span className="fw-semibold">{blog.author}</span> on {blog.date}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
