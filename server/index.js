const relic = require('newrelic');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const {Pool, Client} = require('pg');

// const client = new Client({
//   user: 'postgres',
//   password: '',
//   host: 'localhost',
//   database: 'billionspg',
//   port: 5432,
// });

// client.connect();

// client.query('SELECT NOW()', (err, res) => {
//   // console.log(err, res);
//   client.end;
// });

const pool = new Pool({
  user: 'postgres',
  host: '50.18.76.168',
  database: 'billionspg',
  password: '',
  port: 5432,
});

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
  console.log(product);
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

app.listen(process.env.PORT || 3003);
