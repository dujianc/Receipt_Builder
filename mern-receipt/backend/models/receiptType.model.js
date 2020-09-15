const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const receiptTypeSchema = new Schema({
    receiptName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
   
}, {
    timestamp: true,
});

const ReceiptType = mongoose.model('ReceiptType', receiptTypeSchema);

module.exports = ReceiptType;