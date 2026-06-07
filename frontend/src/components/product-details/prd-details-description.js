import React from "react";

// internal
const PrdDetailsDescription = ({ product }) => {
  return (
    <div className="product__details-description pt-auto">
      <div className="row">
        <div className="col-lg-12">
          <div className="product__details-description-content">
            <h3 className="product-desc-title">{product?.title}</h3>
            <p className="product-desc-text">
              {product?.description}
            </p>
          </div>
        </div>
      </div>

      {/* Additional styles */}
      <style jsx>{`
        .product__details-description {
          margin-top: 20px;
        }
        .product__details-description-content {
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        .product-desc-title {
          font-size: 24px;
          margin-bottom: 15px;
          font-weight: bold;
          color: #333;
          text-align: left;
        }
        .product-desc-text {
          font-size: 16px;
          line-height: 1.6;
          color: #555;
        }
      `}</style>
    </div>
  );
};

export default PrdDetailsDescription;
