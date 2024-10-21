import React from "react";

const OldNewPrice = ({originalPrice,discount}) => {
  return (
    <div className="product__price">
      <del className="product__ammount old-price">
      ₹{originalPrice.toFixed(2)}
      </del>
      <span className="product__ammount new-price">
        {" "}M.R.P: {" "}
        <span className="rupee-symbol">₹</span>
        {(
          Number(originalPrice) -
          (Number(originalPrice) * Number(discount)) / 100
        ).toFixed(2)}
      </span>
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

export default OldNewPrice;
