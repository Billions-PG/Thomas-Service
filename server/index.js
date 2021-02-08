const relic = require('newrelic');
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
app.get('/api/product/:id', async (req, res) => {
  const response = [[],[]];
  var structuredResponse = (product, shopName, arrayNum) => {
    // console.log(shopName);
    response[arrayNum].push({
      _id: product.id,
      imageUrl: product.imageurl,
      name: product.productname,
      price: {
        display: product.displayprice,
        onSale: product.onsale,
        worth: product.worth,
        salePercentage: product.salepercentage,
        salePrice: product.saleprice,
      },
      shipping: {
        display: product.shippingdisplay,
        eligibility: product.shippingeligibility,
      },
      shopName: shopName,
    })
  }

  const product = await pool.query('SELECT * FROM products WHERE id = $1', [req.params.id]);
  //get product by id
  await Promise.all(product.rows.map(async(product) => {
  //get shop name
    let shopName = await pool.query('SELECT shopName FROM shops WHERE id = $1', [product.fk_shop_id]);
  //find other products from the same shop
    let shopProducts = await pool.query('SELECT * FROM products WHERE fk_shop_id = $1 LIMIT 20', [product.fk_shop_id]);
    await Promise.all(shopProducts.rows.map(async(relatedShopProduct) => {
      structuredResponse(relatedShopProduct, shopName.rows[0].shopname, 1);
    }))
  //find other products of the same product type
    let related = await pool.query('SELECT * FROM products WHERE productType = $1 LIMIT 20', [product.producttype]);
    await Promise.all(related.rows.map(async(relatedProduct) => {
      let shopName = await pool.query('SELECT * FROM shops WHERE id = $1', [relatedProduct.fk_shop_id]);
      structuredResponse(relatedProduct, shopName.rows[0].shopname, 0);
    }))
  }))
  res.status(200).send(response);
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
