const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const Item = require('../database/itemModel.js');

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json());
app.use(cors());

app.get('/product/:id', (req, res) => {
  Item.findById(req.params.id, 'shopName similarProduct').exec()
    .then((data) => {
      Item.find({ shopName: data.shopName }).exec()
        .then((shops) => {
          Item.find({ _id: { $in: data.similarProduct } }).exec((err, sim) => {
            let similarItems = randomizeArray(sim);
            let similarShops = randomizeArray(shops);
            if (err) res.status(400).send(err);
            res.status(200).send([similarItems, similarShops]);
          });
        });
    });
});

const randomizeArray = (arr) => {
  let res = [];
  let leng = arr.length;
  while (res.length !== leng) {
    let index = Math.floor(Math.random() * (arr.length));
    res.push(arr[index]);
    arr.splice(index, 1);
  }
  return res;
}

module.exports = app;
