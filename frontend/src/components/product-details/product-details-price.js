import React from "react";

const ProductDetailsPrice = ({ price, discount }) => {
  return (
    <div className="product__details-price">
      {discount > 0 ? (
        <>
          <span className="product__details-ammount old-ammount">₹{price}</span>
          <span className="product__details-ammount new-ammount">
          {" "}M.R.P: {" "}
          <span className="rupee-symbol">₹</span>
            {(Number(price) - (Number(price) * Number(discount)) / 100).toFixed(2)}
          </span>
          <span className="product__details-offer">-{discount}%</span>
          <span style={{color:"black",fontSize:"20px"}}>&nbsp;&nbsp;Inc. GST</span>
        </>
      ) : (
        <>
          <span className="product__details-ammount new-ammount">₹{price}</span>
        </>
      )}
      <style jsx>{`
        .rupee-symbol {
          position: relative;
          top: -2px; /* Moves the Rupee symbol slightly upwards */
          font-size: 0.9em; /* Slightly smaller size for alignment */
          margin-right: 2px; /* Adds a little space between the symbol and the number */
        }
      `}</style>
    </div>
  );
};

export default ProductDetailsPrice;
