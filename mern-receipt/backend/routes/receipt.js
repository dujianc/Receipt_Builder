const router = require('express').Router();
let Receipts = require('../models/receipt.model');

router.route('/').get((req, res) =>{
    Receipts.find()
    .then(receipt => res.json(receipt))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) =>{
    const receiptName = req.body.receiptName;
    const description = req.body.description;
    const product = Number(req.body.product);
    const date = Date.parse(req.body.date);
   
    const newReceipt = new Receipts({
      receiptName,
      description,
      product,
      date,    
    });

    newReceipt.save()
    .then(() => res.json('Receipt added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Receipts.findById(req.params.id)
    .then(receipt => res.json(receipt))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Receipts.findByIdAndDelete(req.params.id)
    .then(() => res.json('Receipt deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Receipts.findById(req.params.id)
    .then(receipt => {
        receipt.receiptName = req.body.receiptName;
        receipt.description = req.body.description;
        receipt.product = Number(req.body.product);
        receipt.date = Date.parse(req.body.date);

        receipt.save()
       .then(() => res.json('Receipt updated!'))
       .catch(err => res.status(400).json('Error: ' + err));
})
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;