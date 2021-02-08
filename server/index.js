const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const {Pool} = require('pg');

const pool = new Pool({
  user: 'thomasmcnutt',
  host: 'localhost',
  database: 'billionspg',
  port: 5432,
})

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true,
})
)
app.use(cors());

//should retrieve 4 products and 4 related products for each
app.get('/api/product:id', async (req, res) => {
  const response = [];
  var structuredResponse = (product, shopName) => {
    console.log(product);
    response.push({
      imageUrl: product.imageUrl,
      name: product.productsName,
      price: {
        display: product.displayPrice,
        onSale: product.onSale,
        worth: product.worth,
        salePercentage: product.salePercentage,
        salePrice: product.salePrice,
      },
      shipping: {
        display: product.shippingDisplay,
        eligibility: product.shippingEligibility,
      },
      shopName: shopName,
    })
  }

  const products = await pool.query('SELECT * FROM products WHERE id = $1', [req.params.id]);

  await Promise.all(products.rows.map(async(product) => {
    let shopName = await pool.query('SELECT * FROM shops WHERE id = $1', [product.fk_shop_id]);
    structuredResponse(product, shopName);
  }))
  // await Promise.all(products.rows.map(async(product) => {
  //   let related = await pool.query('SELECT * FROM products WHERE productType = $1 limit 8', [product.productType]);
  //   await Promise.all(related.rows.map(async(relatedProduct) => {
  //     let shopName = await pool.query('SELECT * FROM shops WHERE id = $1', [product.fk_shop_id]);
  //     structuredResponse(relatedProduct, shopName);
  //   }))
  // }))
  res.send(response);
});

//randomizer randomizes which images will show up first.
// const randomizeArray = (arr) => {
//   const res = [];
//   const leng = arr.length;
//   while (res.length !== leng) {
//     const index = Math.floor(Math.random() * (arr.length));
//     res.push(arr[index]);
//     arr.splice(index, 1);
//   }
//   return res;
// };

//get route grabs the same
// app.get('/product/:id', (req, res) => {
//   Item.findById(req.params.id, 'shopName similarProduct').exec()
//     .then((data) => {
//       Item.find({ shopName: data.shopName }).exec()
//         .then((shops) => {
//           Item.find({ _id: { $in: data.similarProduct } }).exec((err, sim) => {
//             console.log('sim length', sim[0], 'shops length', shops[0]);
//             // const similarItems = randomizeArray(sim);
//             const similarItems = sim;
//             // const similarShops = randomizeArray(shops);
//             const similarShops = shops;
//             if (err) res.status(400).send(err);
//             res.status(200).send([similarItems, similarShops]);
//           });
//         });
//     });
// });

module.exports = app;
