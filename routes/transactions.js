const express = require('express');
const router = express.Router();
const {
  getTransactions,
  getTransactionById,
  addTransaction,
  deleteTransaction,
} = require('../controllers/transactions');

router.route('/').get(getTransactions).post(addTransaction);

router.route('/:id').get(getTransactionById).delete(deleteTransaction);

module.exports = router;
