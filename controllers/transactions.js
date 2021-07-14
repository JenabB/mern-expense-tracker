const Transaction = require('../models/Transaction');

// get all transactions
// GET /api/v1/transactions
// public
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    return res.send(500).json({
      success: false,
      error: 'server error',
    });
  }
};

// get one transaction
// GET /api/v1/transaction/:id
// public
exports.getTransactionById = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: 'No transaction found',
      });
    }
    return res.status(200).json({
      success: true,
      data: transaction,
    });
  } catch (error) {
    return res.send(500).json({
      success: false,
      error: 'server error',
    });
  }
};

// add transactions
// POST /api/v1/transactions
// public
exports.addTransaction = async (req, res, next) => {
  try {
    const { text, description, amount } = req.body;

    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server Error',
      });
    }
  }
};

// edit transaction
// PUT /api/v1/transaction/:id
// public
exports.editTransaction = async (req, res, next) => {
  try {
    Transaction.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true },
      (err, editTransaction) => {
        if (err) {
          res.send(err);
        }
        res.json(editTransaction);
      }
    );
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc    Delete transaction
// @route   DELETE /api/v1/transactions/:id
// @access  Public
exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: 'No transaction found',
      });
    }

    await transaction.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};
