const mongoose = require('mongoose');

const ReceiptBookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  count: { type: Number, required: false },
  village: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const ReceiptBook = mongoose.model('ReceiptBook', ReceiptBookSchema);

module.exports = ReceiptBook;
