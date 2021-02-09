const faker = require('faker');
const fs = require('fs');


const productName = [
  'monitor needs-based enable hat',
  'Zealand shoes',
  'Guinea sweater',
  'encryption hat',
  'Grass-roots sweater',
  'Squares shirt',
  'Home sweater',
  'user-facing deliverables shorts',
  '24/7 Table pants',
  'wireless Clothing grey long-sleeve',
  'deposit shorts',
  'Mouse CSS t-shirt',
  'Keyboard solutions array pants',
  'Fresh Fresh invoice pull-over',
  'infomediaries zero shorts',
  'payment long-sleeve',
  'Emirates Global sweater',
  'throughput functionalities Soap t-shirt',
  'protocol Identity Plastic shoes',
  'framework shoes',
  'backing Baby long-sleeve',
  'e-services Lead grey sweater',
  'Senior Configuration blazer',
  'framework hat',
  'invoice Oregon shoes',
  'niches shoes',
  'synthesize fresh-thinking Implementation pull-over',
  'overriding t-shirt',
  'Metal Regional shirt',
  'panel calculate tee',
  'Buckinghamshire Car Samoa pull-over',
  'Kina hat',
  'Regional supply-chains Fresh pull-over',
  'back-end t-shirt',
  'solid tee',
  'maroon optimize t-shirt',
  'mesh wireless sweater',
  'Technician navigating Applications hat',
  'Intelligent sweater',
  'invoice California t-shirt',
  'empower blazer',
  'Shoes shoes',
  'Handcrafted Rhode Research pants',
  'forecast Enhanced hat',
  'Plastic Handcrafted sweater',
  'Baby Hampshire America pull-over',
  'port Manager sweater',
  'Bermuda suit',
  'indigo responsive hat',
  'Bacon architecture Games blazer',
  'revolutionary suit',
  'Uganda payment orchestrate hat',
  'AI shoes',
  'turquoise suit',
  'Bedfordshire shoes',
  'bus Salad pants',
  'Texas pants',
  'New dynamic t-shirt',
  'Bfaker.helpers.randomize shirt',
  'Decentralized Future THX shorts',
  'Drives shirt',
  'International Customer Guernsey shorts',
  "Indonesia Pa'anga action-items shoes",
  'Health Salad hat',
  'Minnesota primary sweater',
  'Chips digital pull-over',
  'Iceland tee',
  'intangible shorts',
  'Chicken tee',
  'bypass tee',
  'Hills shirt',
  'Gorgeous Delaware tee',
  'deliver Djibouti pull-over',
  'Iranian Auto Arkansas hat',
  'silver driver Anguilla sweater',
  'connecting Creative pants',
  'Kansas t-shirt',
  'Cambridgeshire program Borders shorts',
  'SMS tee',
  'U.S. Cameroon Security pull-over',
  'salmon teal hat',
  'Table XML needs-based sweater',
  'Terrace pants',
  'Burundi blazer',
  'Sleek long-sleeve',
  'Dollar Configurable Dollar shorts',
  'RAM auxiliary t-shirt',
  'Steel shirt',
  'portal Marketing shirt',
  'Poland Customer monitoring pull-over',
  'withdrawal lime reinvent t-shirt',
  'Rubber repurpose Ball suit',
  'Intelligent Bike Shoes shoes',
  'Wooden Pataca pull-over',
  'Concrete Chad sweater',
  'Croatian navigating long-sleeve',
  'Ergonomic Manager payment sweater',
  'York incentivize tee',
  'transmit Dynamic Pants pants',
  'invoice navigate pants',
];

const productTypes = [
  'outer',
  'active',
  'swim',
  'casual',
  'leg',
  'neck',
  'head',
  'torso',
  'foot',
  'leg',
]

const shopNames = [
  'rusticRepublic',
  'sleekGlobal',
  'tastyShirtsRus',
  'refinedFashion',
  'intelligentFashion',
  'practicalGlobal',
  'fantasticFashion',
  'practicalGlobal',
  'awesomeDesign',
  'practicalFashion',
];
// random prices with numbers between 1 and 100 with decimals to the 100th place
const priceValues = [
  95.75, 55.99, 33.75, 24.25, 21.75, 8.99, 0.25, 86.75, 72.99,
  52.25, 31.99, 2.25, 66, 38.75, 48, 10.25, 87.99, 8.99,
  62.99, 33.99, 31, 10.25, 75, 72.99, 94, 44.75, 32.75,
  27.99, 25.75, 86.25, 25.99, 11.25, 78.99, 21, 1.25, 39.99,
  80.75, 42, 26.99, 26.25, 27.75, 79.75, 53, 16.25, 39.25,
  50.99, 57.25, 78.25, 61.99, 54, 81.75, 21.99, 80.99, 5.75,
  31.25, 45.75, 93.99, 27, 61, 71, 56.75, 68.25, 47.75,
  3, 1.25, 90, 73.25, 84, 29, 17, 42.25, 44.25,
  3.99, 68.25, 2, 68.75, 38, 3, 77.75, 80.25, 11.25,
  26.75, 55.75, 46.99, 52, 31.75, 79.75, 38.75, 29.99, 25.75,
  97.99, 98.25, 93.75, 16.75, 91, 64.99, 83.25, 35.75, 86.25,
  54,
];

// random arrays length 4-10
// with random integers between 1-10million
// const recommend = (size) => {
//   let recommendArray = '';
//   let randomSize = faker.random.number({
//     'min':4,
//     'max':10
//   });
//   for (var i =0; i<randomSize; i++) {
//     let str = `${faker.random.number(size)}`;
//     recommendArray = recommendArray + str + ',';
//   }
//   recommendArray = recommendArray.slice(0, -1);
//   let recom = '{' + recommendArray + '}'
// return '' + recom;
// }
//change to for each loop that runs X amount of times picking a random product name, random price, random recommended item between 1 and X

const seedProducts = fs.createWriteStream('products.csv');
seedProducts.write('productType,imageUrl,productName,displayPrice,onSale,worth,shippingDisplay,shippingEligibility,salePercentage,fk_shop_id,salePrice\n', 'utf8');

function createAndWriteProducts(writer, encoding, callback) {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      let price = priceValues[faker.random.number(1, priceValues.length-1)];
      let product = {
        //id is set automatically
        imageUrl: `https://picsum.photos/id/${(i%100) + 100}/400/300`,
        productName: productName[faker.random.number(productName.length)],
        displayPrice: `${price}`,
        onSale: faker.helpers.randomize([true, false]),
        worth: price,
        shippingEligibility: faker.helpers.randomize([true, false]),
        salePrice: price,
        salePercentage: 1,
        fk_shop_id: faker.random.number({
          'min':1,
          'max':10
        }),
        productType: productTypes[faker.random.number({
          'min':1,
          'max':10
        })],
        shippingDisplay: 'Standard Shipping',
      }
      let ranPercent = faker.helpers.randomize([0.10, 0.15, 0.20, 0.25, 0.30, 0.50, 0.75])
      if (product.onSale) {
        product.salePercentage = ranPercent;
        product.salePrice = `$${((1 - ranPercent) * product.worth).toFixed(2)}`;
      }
      if (product.shippingEligibility) {
        product.shippingDisplay = 'Free shipping eligible';
      }
      const data = `${product.productType},${product.imageUrl},${product.productName},${product.displayPrice},${product.onSale},${product.worth},${product.shippingDisplay},${product.shippingEligibility},${product.salePercentage},${product.fk_shop_id},${product.salePrice}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        // see if we should continue, or wait
        // don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // had to stop early!
      // write some more once it drains
      writer.once('drain', write);
    }
  }
  write()
}
createAndWriteProducts(seedProducts, 'utf-8', () => {
  seedProducts.end();
});

const seedShops = fs.createWriteStream('shops.csv');
seedShops.write('shopName\n', 'utf8');
function createAndWriteShops(writer, encoding, callback) {
  let i = 1000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      let shopName = faker.helpers.randomize(shopNames);
      let data = `${shopName}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write()
}
createAndWriteShops(seedShops, 'utf-8', () => {
  seedShops.end();
});
