const express = require('express');
const Razorpay = require('razorpay');
const router = express.Router();

const razorpay = new Razorpay({
  key_id: 'rzp_test_ms7xsWidGAyqd8',
  key_secret: 'KeJzEa33BZfrwCP7pH4sPFg8',
});

router.post('/create-order', async (req, res) => {
  const { amount } = req.body;

  const options = {
    amount: amount * 100, // amount in paise (e.g. ₹100 = 10000)
    currency: 'INR',
    receipt: 'receipt_order_74394',
    payment_capture: 1,
  };

  try {
    const order = await razorpay.orders.create(options);
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
