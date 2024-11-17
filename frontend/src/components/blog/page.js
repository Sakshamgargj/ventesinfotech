import React from "react";

export default function BlogArea({ blogData = [] }) {
  return (
    <div className="container py-5">
      <h2 className="text-center display-4 mb-5 text-primary">Our Blog</h2>
      <div className="row py-3 gx-5 gy-5">
        {blogData.map((blog) => (
          <div key={blog.id} className=" col-12">
            <div className="card h-100 shadow-lg border-0 rounded overflow-hidden blog-card">
              <img
                src={blog.image}
                className="card-img-top"
                alt={blog.title}
                style={{
                  height: "250px",
                  objectFit: "cover",
                }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-center text-dark mb-3">
                  {blog.title}
                </h5>
                <p className="card-text text-center text-secondary mb-4">
                  {blog.description}
                </p>
                <p className="card-text text-muted small">
                  {/* {blog.content.length > 120
                    ? `${blog.content.substring(0, 120)}...`
                    : blog.content} */}
                    {blog.content}
                </p>
                <div className="mt-auto text-center">
                  <p className="card-text text-muted small mb-3">
                    By <span className="fw-bold">{blog.author}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .blog-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .blog-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }
        .card-img-top {
          transition: transform 0.3s ease;
        }
        .card-img-top:hover {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  );
}
