//File to test code out before moving to routes

const {Pool} = require('pg');
const pool = new Pool({
  user: 'thomasmcnutt'
  host: 'localhost',
  database: 'billionspg',
  port: 5432,
})

//should retrieve 4 products and 4 related products for each
app.get('/api/product:id', async (req, res) => {
  const response = [];
  var structureResponse = (prod, shop) {
    response.push({
      imageUrl: product.imageUrl,
      name: product.productsName,
      price: {
        display: product.displayPrice,
        onSale: product.onSale,
        worth: product.worth,
        salePercentage: product.salePercentage,
        salePrice: product.salePrice,
      }
      shipping: {
        display: review.shippingDisplay,
        eligibility: review.shippingEligibility,
      }
      shopName: shop.shopName,
    })
  }

  const products = await pool.query('SELECT * FROM products WHERE id = $1', [req.params.id]);

  await Promise.all(products.rows.map(async(product) => {
    let shopName = await pool.query('SELECT * from shops WHERE id = $1', [product.fk_shop_id]);
    structureResponse(product, shopName);
  }))
  await Promise.all(products.rows.map(async(product) => {
    let related = await pool.query('SELECT TOP 4 from products WHERE productType = $1', [product.productType]);
    await Promise.all(related.rows.map(async(relatedProduct) => {
      let shopName = await pool.query('SELECT * from shops WHERE id = $1', [product.fk_shop_id]);
      structureResponse(relatedProduct, shopName);
    }))
  }))
})

