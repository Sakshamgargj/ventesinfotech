import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Minus, Plus } from "@svg/index";
import { decrement, increment } from "src/redux/features/cartSlice";

const ProductQuantity = ({ limit }) => {
  const { orderQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    if (orderQuantity < limit) {
      dispatch(increment());
    }
  };

  const handleDecrease = () => {
    if (orderQuantity > 1) {
      dispatch(decrement());
    }
  };

  return (
    <div className="product__details-quantity">
      <div className="tp-product-quantity mt-10 mb-10">
        <span className="tp-cart-minus" onClick={handleDecrease}
        style={{
          color: orderQuantity >= 2 ? 'black' : 'grey', 
        }}>
          <Minus />
        </span>
        <input
          className="tp-cart-input"
          type="text"
          value={orderQuantity}
          readOnly
        />
        <span
          className="tp-cart-plus"
          onClick={handleIncrease}
          style={{
            pointerEvents: orderQuantity >= limit ? 'none' : 'auto', 
            color: orderQuantity >= limit ? 'grey' : 'black', 
            transition: 'color 0.3s ease',
          }}
        >
          <Plus />
        </span>
      </div>
    </div>
  );
};

export default ProductQuantity;
