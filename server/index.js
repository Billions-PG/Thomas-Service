const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const Item = require('../database/itemModel.js');

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json());
app.use(cors());

const randomizeArray = (arr) => {
  const res = [];
  const leng = arr.length;
  while (res.length !== leng) {
    const index = Math.floor(Math.random() * (arr.length));
    res.push(arr[index]);
    arr.splice(index, 1);
  }
  return res;
};

app.get('/product/:id', (req, res) => {
  Item.findById(req.params.id, 'shopName similarProduct').exec()
    .then((data) => {
      Item.find({ shopName: data.shopName }).exec()
        .then((shops) => {
          Item.find({ _id: { $in: data.similarProduct } }).exec((err, sim) => {
            const similarItems = randomizeArray(sim);
            const similarShops = randomizeArray(shops);
            if (err) res.status(400).send(err);
            res.status(200).send([similarItems, similarShops]);
          });
        });
    });
});

module.exports = app;
