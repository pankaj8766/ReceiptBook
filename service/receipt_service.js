const ReceiptBook = require('../model/receipt_model');


class ReceiptBookService {
  // Method to get the total count of receipt books
  async getTotalCount() {
    return await ReceiptBook.countDocuments();
  }

  // Method to get the count of receipt books used per day
  async getDailyCount() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return await ReceiptBook.countDocuments({
      date: { $gte: today }
    });
  }

  // Method to get the count of receipt books used per week
  async getWeeklyCount() {
    const today = new Date();
    const weekStart = new Date(today.setDate(today.getDate() - today.getDay()));
    weekStart.setHours(0, 0, 0, 0);

    return await ReceiptBook.countDocuments({
      date: { $gte: weekStart }
    });
  }

  // Method to create a new receipt book entry
  async createReceiptBook(data) {
    const receiptBook = new ReceiptBook(data);
    return await receiptBook.save();
  }

  // Method to get all counts and receipt books data
  async getAllData() {
    const totalCount = await this.getTotalCount();
    const dailyCount = await this.getDailyCount();
    const weeklyCount = await this.getWeeklyCount();
    const allReceipts = await ReceiptBook.find({});

    return {
      totalCount,
      dailyCount,
      weeklyCount,
      allReceipts
    };
  }
}

module.exports = ReceiptBookService;
