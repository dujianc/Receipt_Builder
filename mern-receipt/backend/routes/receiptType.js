const router = require('express').Router();
let ReceiptTypes = require('../models/receiptType.model');

router.route('/').get((req, res) =>{
    ReceiptTypes.find()
    .then(receiptType => res.json(receiptType))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) =>{
    const receiptName = req.body.receiptName;
    const newReceiptName = new ReceiptTypes({receiptName});

    newReceiptName.save()
    .then(() => res.json('ReceiptType added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;