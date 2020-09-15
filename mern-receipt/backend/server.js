const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const receiptRouter = require('./routes/receipt');
const receiptTypeRouter = require('./routes/receiptType');

app.use('/receipt', receiptRouter);
app.use('/receiptType', receiptTypeRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});