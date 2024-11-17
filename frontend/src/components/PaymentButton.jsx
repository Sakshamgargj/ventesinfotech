import { useState } from 'react';
import Script from 'next/script';
import { paymentService } from '../services/paymentService';

export default function PaymentButton({ amount, orderId, onSuccess }) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    try {
      // Create order on backend
      const order = await paymentService.createOrder(amount);

      // Initialize Razorpay
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: 'Ventes Infotech',
        description: `Order #${orderId}`,
        order_id: order.id,
        handler: async function (response) {
          // Verify payment
          const verification = await paymentService.verifyPayment({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          });

          if (verification.verified) {
            onSuccess(response);
          } else {
            // alert(verification.verified)
            alert('Payment verification failed');
          }
        },
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
          contact: 'customer_contact',
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.error('Payment error:', error);
      alert('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />
      <button
        onClick={handlePayment}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded "
      >
        {loading ? 'Processing...' : 'Pay Noww'}
      </button>
    </>
  );
}