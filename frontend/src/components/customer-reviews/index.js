// components/CustomerReviews.js

import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const reviews = [
  {
    name: "Akshith N",
    avatar: "A", // Can be a letter or an image if you want
    rating: 5,
    reviewText:
      "This place is simply excellent. Not only is this the best place to get a custom built pc here, the store employees are also kind and patient...",
  },
  {
    name: "Ronald Dhawle",
    avatar: "R", // Assuming avatar images exist
    rating: 5,
    reviewText:
      "I recently went to Ankit Infotech and had a fantastic experience. The owner is really friendly and humble. I highly recommend this place...",
  },
  {
    name: "Himanshu Mishra",
    avatar: "H",
    rating: 5,
    reviewText: "Amazing service and discount.",
  },
];

const CustomerReviews = () => {
  return (
    <div className="container py-5">
      {/* Header */}
      <div className="text-center mb-4">
        <h2>Customers About Ventes Infotech</h2>
        <hr
          className="w-25 mx-auto"
          style={{ borderTop: "3px solid blue" }}
        />
      </div>

      {/* Reviews Section */}
      <div className="row justify-content-center">
        {/* Rating Summary */}
        <div className="col-md-3 text-center">
          <div className="border p-4 rounded">
            <h3>Excellent</h3>
            <div className="d-flex justify-content-center align-items-center mb-2">
              <FaStar className="text-warning" />
              <FaStar className="text-warning" />
              <FaStar className="text-warning" />
              <FaStar className="text-warning" />
              <FaStarHalfAlt className="text-warning" />
            </div>
            <p>Based on 1474 reviews</p>
            <img
              src="https://www.logo.wine/a/logo/Google/Google-Logo.wine.svg"
              alt="Google"
              width={200}
              height={200}
            />
          </div>
        </div>

        {/* Review Cards */}
        {reviews.map((review, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <div className="card h-100">
              <div className="card-body">
                <div className="d-flex align-items-center mb-3">
                  {/* Avatar or Letter */}
                  {typeof review.avatar === "string" &&
                  review.avatar.length === 1 ? (
                    <div
                      className="rounded-circle bg-warning text-white d-flex align-items-center justify-content-center"
                      style={{
                        width: "40px",
                        height: "40px",
                        fontSize: "20px",
                      }}
                    >
                      {review.avatar}
                    </div>
                  ) : (
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="rounded-circle"
                      width="40"
                      height="40"
                    />
                  )}
                  <h5 className="ms-3">{review.name}</h5>
                </div>
                <div className="d-flex mb-2">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <FaStar key={i} className="text-warning" />
                  ))}
                </div>
                <p>{review.reviewText}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      {/* <div className="text-center mt-4">
        <p>
          Please leave us a rating{" "}
          <a href="#" className="text-primary">
            here
          </a>
        </p>
      </div> */}
    </div>
  );
};

export default CustomerReviews;
