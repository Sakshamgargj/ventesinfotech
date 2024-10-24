const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const paymentService = {
  createOrder: async (amount) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/payments/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      });
      return await response.json();
    } catch (error) {
      throw new Error('Failed to create order');
    }
  },

  verifyPayment: async (paymentData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/payments/verify-payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentData),
      });
      return await response.json();
    } catch (error) {
      throw new Error('Failed to verify payment');
    }
  },
};