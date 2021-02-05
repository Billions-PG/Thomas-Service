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

// random arrays length 1-10
// with random integers between 1-10million
const recommend = [

  [
    72, 99, 51, 16, 100, 9,
    38, 7, 37, 72, 8, 24,
    29, 64, 56,
  ],
  [21, 88, 80, 58, 5, 21],
  [
    90, 25, 70, 67, 76, 57,
    7, 95, 5, 52, 18, 48,
    55,
  ],
  [
    27, 52, 16, 57, 78, 5,
    73, 97, 74, 30, 2, 70,
    84, 93, 27, 56,
  ],
  [
    54, 24, 85, 21,
    84, 57, 50,
  ],
  [
    71, 60, 1, 99,
    33, 83, 99,
  ],
  [
    53, 93, 1, 76, 81,
    10, 99, 7, 16, 28,
    6, 15,
  ],
  [
    48, 14, 72, 56, 42, 95, 17,
    5, 39, 35, 60, 99, 9, 25,
    86, 39, 49,
  ],
  [
    62, 36, 1, 20, 46, 27,
    70, 69, 44, 92, 81, 17,
    95, 61, 20,
  ],
  [
    10, 40, 73, 94, 66, 19,
    43, 100, 74, 66, 44, 73,
    79,
  ],
  [
    85, 69, 86, 76, 4,
    16, 61, 26, 98, 40,
  ],
  [80, 68, 41, 7, 73],
  [
    56, 73, 69, 3, 41, 2,
    79, 20, 77, 15, 73, 27,
    74, 8, 13, 84,
  ],
  [37, 63, 8, 11, 71],
  [
    8, 95, 92, 48, 33, 83,
    3, 12, 40, 33, 5, 24,
    36,
  ],
  [
    14, 40, 6, 97, 29,
    94, 96, 53, 29, 39,
    48,
  ],
  [
    2, 16, 100, 96, 40, 81,
    85, 19, 21, 80, 23, 36,
    80, 3, 89,
  ],
  [
    94, 13, 76, 31, 57, 86,
    45, 99, 69, 29, 39, 49,
    37, 77, 72, 87,
  ],
  [
    60, 59, 65, 91, 66,
    71, 45, 80, 75, 24,
    64,
  ],
  [
    1, 43, 68, 13, 6, 38, 84,
    56, 8, 88, 94, 96, 86, 46,
    2, 93, 36,
  ],
  [78, 41, 49, 63, 20, 2, 57],
  [
    54, 49, 26, 81, 63, 99, 89,
    56, 6, 92, 4, 15, 62, 91,
    96, 30, 5,
  ],
  [54, 67, 8, 72, 6, 15],
  [
    79, 33, 48, 77, 38,
    40, 9, 37, 35, 54,
  ],
  [71, 54, 74, 6, 9, 3],
  [
    95, 25, 98, 73, 9, 80,
    5, 84, 11, 13, 78, 21,
    21,
  ],
  [
    83, 91, 9, 97,
    1, 63, 23, 59,
  ],
  [65, 75, 95, 20, 62, 8, 88],
  [
    13, 45, 31, 100, 63, 62,
    46, 39, 50, 18, 75, 38,
    39, 55, 76, 10,
  ],
  [
    33, 99, 18, 39, 51, 6,
    97, 6, 40, 56, 42, 16,
    39, 29, 74,
  ],
  [
    86, 93, 2, 45, 23, 7,
    56, 14, 36, 56, 12, 5,
    21, 72, 36,
  ],
  [
    40, 15, 33, 100,
    3, 18, 36,
  ],
  [
    20, 13, 71, 60, 28, 82,
    76, 49, 11, 77, 84, 33,
    55, 94, 83,
  ],
  [21, 44, 74, 88, 9, 68],
  [
    79, 71, 63, 43, 99, 18,
    72, 99, 93, 80, 2, 5,
    49,
  ],
  [100, 56, 94, 99, 3, 84],
  [
    51, 85, 40, 26, 31, 62,
    83, 76, 82, 52, 36, 16,
    3, 74,
  ],
  [
    100, 82, 73, 18, 91, 46,
    84, 82, 84, 34, 29, 44,
    2, 18, 11,
  ],
  [
    44, 64, 73, 7, 72, 98,
    25, 11, 20, 47, 27, 88,
    9, 29,
  ],
  [
    8, 5, 56, 45, 7,
    26, 16, 28, 28, 59,
  ],
  [
    18, 97, 73, 80,
    84, 90, 11, 86,
  ],
  [
    27, 94, 49, 65, 49, 40,
    8, 84, 56, 51, 78, 55,
    4, 98, 69,
  ],
  [
    96, 6, 97, 55, 67, 11,
    18, 28, 42, 70, 8, 15,
    48, 37,
  ],
  [
    44, 77, 99, 49, 54,
    48, 86, 46, 59, 98,
    66,
  ],
  [
    53, 85, 17, 13, 54,
    41, 78, 41, 50, 64,
    23,
  ],
  [
    68, 67, 38, 26,
    40, 96, 8, 63,
  ],
  [
    96, 24, 77, 29, 38,
    63, 72, 38, 69, 14,
  ],
  [
    1, 14, 95, 8, 65, 26, 65,
    29, 47, 21, 92, 5, 26, 62,
    49, 60, 63, 14,
  ],
  [
    12, 54, 52, 68,
    6, 67, 24,
  ],
  [
    100, 88, 17, 93, 24,
    3, 29, 70, 36, 61,
  ],
  [
    95, 86, 12, 58, 97,
    76, 15, 27, 45, 23,
    82,
  ],
  [
    17, 20, 49, 73, 90, 60, 22,
    97, 4, 64, 12, 54, 57, 89,
    87, 27, 21,
  ],
  [
    82, 43, 73, 56, 54,
    89, 23, 21, 23, 11,
  ],
  [
    10, 36, 90, 10, 6,
    37, 28, 58, 56, 29,
    4,
  ],
  [
    45, 92, 49, 49, 16,
    11, 42, 94, 19, 36,
    70, 66,
  ],
  [
    40, 58, 62, 57, 22, 22, 29,
    26, 67, 74, 30, 74, 81, 29,
    68, 92, 93,
  ],
  [
    51, 9, 53, 94, 55, 66, 13,
    39, 52, 56, 13, 47, 62, 18,
    29, 80, 69,
  ],
  [
    70, 51, 66, 73, 99,
    56, 43, 47, 25, 65,
    82, 27,
  ],
  [
    22, 33, 80, 43, 14,
    51, 90, 73, 51, 76,
    6, 28,
  ],
  [
    47, 98, 13, 2, 29,
    71, 25, 41, 99, 97,
    7, 65,
  ],
  [
    35, 75, 46, 78, 20, 51,
    77, 47, 49, 14, 88, 51,
    37, 7,
  ],
  [
    62, 1, 64, 60, 25,
    100, 100, 64, 56, 49,
    99, 9,
  ],
  [
    2, 64, 94, 78, 21,
    76, 87, 48, 42, 21,
  ],
  [
    93, 21, 79, 26, 21, 92, 44,
    53, 4, 4, 93, 69, 34, 68,
    42, 34, 83,
  ],
  [
    38, 30, 34, 42, 65, 55,
    71, 26, 53, 13, 100, 90,
    65, 17, 20, 23, 79,
  ],
  [
    64, 32, 71, 41, 3, 65,
    23, 66, 73, 70, 74, 65,
    61, 11, 98, 36,
  ],
  [
    47, 16, 68, 71, 5,
    82, 27, 60, 96, 77,
  ],
  [
    80, 34, 21, 25, 64, 95,
    50, 17, 65, 12, 91, 3,
    51, 23,
  ],
  [
    96, 87, 71, 47, 91, 32,
    3, 2, 13, 6, 53, 39,
    4, 65, 27,
  ],
  [
    61, 89, 80, 85, 70,
    30, 33, 68, 78,
  ],
  [
    25, 46, 71, 71,
    6, 5, 31, 14,
  ],
  [
    42, 68, 42, 96,
    36, 82, 29, 55,
  ],
  [
    20, 26, 24, 80, 25, 99,
    58, 99, 83, 49, 54, 55,
    34, 13,
  ],
  [80, 54, 80, 72, 98, 3, 68],
  [
    34, 43, 63, 25, 5,
    32, 48, 99, 75,
  ],
  [
    20, 69, 8, 66, 91, 13, 73,
    45, 71, 37, 80, 57, 78, 94,
    38, 92, 75,
  ],
  [
    99, 62, 77, 67, 11,
    85, 96, 1, 26, 22,
    25,
  ],
  [15, 45, 92, 4, 16],
  [2, 5, 19, 6, 92],
  [
    54, 10, 35, 45, 10,
    96, 74, 40, 64,
  ],
  [
    80, 80, 2, 21, 76, 53, 6,
    31, 55, 10, 24, 78, 92, 38,
    77, 86, 49,
  ],
  [
    73, 93, 100, 94, 73, 61,
    59, 31, 25, 41, 81, 34,
    75, 40,
  ],
  [
    65, 11, 15, 86, 55, 31,
    27, 50, 26, 72, 48, 26,
    17,
  ],
  [
    82, 47, 44, 43, 100,
    16, 80, 47, 58, 73,
    81,
  ],
  [
    60, 36, 18, 24, 57,
    43, 43, 62, 2, 9,
  ],
  [
    18, 25, 42, 28, 25,
    40, 99, 16, 83,
  ],
  [
    44, 11, 52, 4, 46, 74,
    62, 15, 70, 97, 83, 64,
    25, 42, 78,
  ],
  [
    68, 68, 29, 70, 75, 1,
    25, 15, 73, 92, 94, 31,
    49, 23, 70, 35,
  ],
  [
    15, 84, 50, 8, 19,
    67, 79, 67, 7, 34,
  ],
  [
    97, 37, 48, 28, 74, 1,
    90, 48, 59, 81, 71, 71,
    90, 26, 45, 93,
  ],
  [
    38, 54, 3, 26, 43, 62, 81,
    7, 24, 38, 91, 5, 14, 33,
    31, 13, 50,
  ],
  [
    92, 56, 79, 33, 99, 43, 30,
    68, 93, 32, 8, 62, 20, 67,
    99, 84, 69, 51,
  ],
  [
    43, 10, 2, 93, 47,
    74, 34, 58, 48,
  ],
  [27, 77, 66, 58, 2, 58],
  [
    12, 63, 86, 26, 62, 17,
    98, 21, 100, 34, 86, 14,
    47, 66, 29, 61,
  ],
  [
    19, 9, 23, 96,
    22, 88, 60,
  ],
  [
    50, 90, 53, 4, 16, 53,
    20, 15, 22, 26, 25, 40,
    28, 92, 86, 50,
  ],
  [
    64, 62, 25, 33, 73, 70, 27,
    35, 24, 26, 4, 61, 92, 21,
    24, 54, 98, 37,
  ],
  [
    34, 28, 8, 73, 81,
    26, 2, 17, 97, 18,
    47, 33,
  ],
  [
    42, 94, 77, 78, 89, 38,
    9, 99, 87, 83, 13, 49,
    64, 91, 70,
  ],
];
//change to for each loop that runs X amount of times picking a random product name, random price, random recommended item between 1 and X

const seedProducts = fs.createWriteStream('products.csv');
seedProducts.write('imageUrl,productName,displayPrice,onSale,worth,shippingDisplay,shippingEligibility,salePercentage,fk_shop_id,salePrice\n', 'utf8');

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
        imageUrl: `https://picsum.photos/id/${i + 100}/400/300`,
        productName: productName[faker.random.number(productName.length)],
        displayPrice: `${price}`,
        onSale: faker.helpers.randomize([true, false]),
        worth: price,
        shippingDisplay: '',
        shippingEligibility: faker.helpers.randomize([true, false]),
        salePrice: price,
        salePercentage: 1,
        fk_shop_id: faker.random.number({'min':1,'max':10}),
      }
      let ranPercent = faker.helpers.randomize([0.10, 0.15, 0.20, 0.25, 0.30, 0.50, 0.75])
      if (product.onSale) {
        product.salePercentage = ranPercent;
        product.salePrice = `$${((1 - ranPercent) * product.worth).toFixed(2)}`;
      }
      if (product.shippingEligibility) {
        product.shippingDisplay = 'Free shipping eligible';
      }
      const data = `${product.imageUrl},${product.productName},${product.displayPrice},${product.onSale},${product.worth},${product.shippingDisplay},${product.shippingEligibility},${product.salePercentage},${product.fk_shop_id},${product.salePrice}\n`;
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
  let i = 10;
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

const seedSimilarProducts = fs.createWriteStream('similarProducts.csv');
seedSimilarProducts.write('shopName\n', 'utf8');
function createAndWriteSimilarProducts(writer, encoding, callback) {
  let i = 100000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;

      let fk_product_id = faker.random.number({'min':1,'max':100});
      let fk_similarProduct_id = faker.random.number({'min':1,'max':100});
      let data = `${fk_product_id},${fk_similarProduct_id}\n`;

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
createAndWriteSimilarProducts(seedSimilarProducts, 'utf-8', () => {
  seedSimilarProducts.end();
});
