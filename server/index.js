const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Item = require('../database/itemModel.js');

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json());

app.get('/product/:id', (req, res) => {
  Item.findById(req.params.id, 'shopName similarProduct').exec()
    .then((data) => {
      Item.find({ shopName: data.shopName }).exec()
        .then((shops) => {
          Item.find({ _id: { $in: data.similarProduct } }).exec((err, sim) => {
            if (err) res.status(400).send(err);
            res.status(200).send([sim, shops]);
          });
        });
    });
});

module.exports = app;
