const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const Item = require('../database/itemModel');

describe('insert', () => {
  let connection;

  beforeAll(async () => {
    connection = await MongoClient.connect(process.env.MONGO_URL,
      { useNewUrlParser: true, useUnifiedTopology: true });
    await connection.db();
  });

  afterAll(async () => {
    await connection.close();
    await mongoose.connection.close();
  });

  afterEach(async () => {
    await Item.deleteMany();
  });

  it('should insert a doc into collection with right shape', async () => {
    const item = await new Item({
      _id: 15333,
      name: 'punisher',
      imageUrl: 'htt://someurl.com',
      shopName: 'marvel',
      price: {
        display: '$40.00',
        worth: 40.00,
        onSale: true,
        salePercentage: 0.20,
        salePrice: 32.00,
      },
      shipping: {
        display: 'Free shipping eligible',
        eligibility: true,
      },
      recommended: {
        fromShop: [22, 45, 88, 2],
        similarProduct: [4, 3, 55, 2],
      },
    });
    await item.save();
    const testItem = await Item.findOne({ _id: 15333 });
    expect(testItem.name).toEqual('punisher');
    expect(new Set(testItem.recommended.fromShop)).toContain(88);
    expect(testItem.updated_at).toBeTruthy();
  });
});
