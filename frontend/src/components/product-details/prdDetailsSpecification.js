import React from "react";

// internal
const PrdDetailsSpecification = ({ product }) => {
  return (
    <div className="product__details-specifications pt-40">
      <div className="row">
        <div className="col-lg-12">
          <div className="product__details-specifications-content">
            <div className="specifications-table">
              {product?.specification.map((e, index) => (
                <div className="specification-row" key={index}>
                  <div className="specification-key">{e.skey}</div>
                  <div className="specification-value">{e.svalue}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional styles */}
      <style jsx>{`
        .product__details-specifications {
          margin-top: 20px;
        }
        .product__details-specifications-content {
          background-color: #f9f9f9;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        .specifications-title {
          font-size: 24px;
          margin-bottom: 20px;
          font-weight: bold;
          text-align: left;
          color: #333;
        }
        .specifications-table {
          display: flex;
          flex-direction: column;
        }
        .specification-row {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          border-bottom: 1px solid #ddd;
        }
        .specification-key {
          font-weight: 600;
          color: #555;
          flex: 0 0 40%;
        }
        .specification-value {
          color: #333;
          flex: 0 0 60%;
        }
        .specification-row:last-child {
          border-bottom: none;
        }
      `}</style>
    </div>
  );
};

export default PrdDetailsSpecification;
