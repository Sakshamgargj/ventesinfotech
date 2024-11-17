import React, { useState } from "react";
import { CardElement } from "@stripe/react-stripe-js";
import PaymentButton from "@components/PaymentButton";

const PaymentCardElement = ({ stripe, cardError, cart_products,isCheckoutSubmit }) => {
  const handlePaymentSuccess = (response) => {
    console.log('Payment successful:', response);
    // Handle success (e.g., redirect to success page, update order status)
  };
  
  return (
    <div className="my-2">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="order-button-payment mt-25">
        <button
          type="submit"
          className="tp-btn"
          disabled={!stripe || cart_products.length === 0 || isCheckoutSubmit}
        >
          Place order
        </button>
        <PaymentButton
        amount={1000}
        orderId="123"
        onSuccess={handlePaymentSuccess}
        disabled={cart_products.length === 0 || isCheckoutSubmit}
      />
      </div>
      {cardError && (
        <p className="mt-15" style={{ color: "red" }}>
          {cardError}
        </p>
      )}
    </div>
  );
};

export default PaymentCardElement;
