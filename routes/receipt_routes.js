const express = require('express');
const router = express.Router();
const ReceiptBookService = require('../service/receipt_service');

const receiptBookService = new ReceiptBookService();

// Route to get all counts and receipt books data
router.get('/all', async (req, res) => {
  try {
    const data = await receiptBookService.getAllData();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get total count of receipt books
router.get('/total', async (req, res) => {
  try {
    const totalCount = await receiptBookService.getTotalCount();
    res.json({ totalCount });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get daily count of receipt books
router.get('/daily', async (req, res) => {
  try {
    const dailyCount = await receiptBookService.getDailyCount();
    res.json({ dailyCount });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to get weekly count of receipt books
router.get('/weekly', async (req, res) => {
  try {
    const weeklyCount = await receiptBookService.getWeeklyCount();
    res.json({ weeklyCount });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to create a new receipt book entry
router.post('/', async (req, res) => {
  try {
    const newReceiptBook = await receiptBookService.createReceiptBook(req.body);
    res.status(201).json(newReceiptBook);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
