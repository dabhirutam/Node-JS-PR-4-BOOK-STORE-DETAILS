const mongoose = require('mongoose');

const transactionSchema = mongoose.Schema({
    type: { type: String, required: true },
    category: { type: String, required: true },
    amount: { type: Number, required: true },
    description: String,
    date: { type: Date, default: Date.now },
})

const transactionModel = mongoose.model('books', transactionSchema);

module.exports = transactionModel;