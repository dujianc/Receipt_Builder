const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const receiptSchema = new Schema({
    receiptName: {type: String, required: true},
    description: {type: String, required: true},
    product: {type: Number, required: true},
    date: {type: Date, required: true}
}, {
    timestamp: true,
});

const Receipt = mongoose.model('Receipt', receiptSchema);

module.exports = Receipt;