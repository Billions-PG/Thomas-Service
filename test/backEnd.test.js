const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const request = require('supertest');
const Item = require('../database/itemModel');
const app = require('../server');

describe('insert', () => {
  let connection;

  beforeAll(async () => {
    connection = await MongoClient.connect(process.env.MONGO_URL,
      { useNewUrlParser: true, useUnifiedTopology: true });
    await connection.db();
  });

  afterAll(async () => {
    await Item.deleteMany();
    await connection.close();
    await mongoose.connection.close();
  });

  // beforeEach(async () => {
  //   await Item.deleteMany();
  // });

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
        salePrice: '32.00',
      },
      shipping: {
        display: 'Free shipping eligible',
        eligibility: true,
      },
      similarProduct: [4, 3, 55, 2],
    });
    await item.save();
    const testItem = await Item.findOne({ _id: 15333 });
    expect(testItem.name).toEqual('punisher');
    expect(new Set(testItem.similarProduct)).toContain(55);
    expect(testItem.updated_at).toBeTruthy();
  });
  it('should do GET', async () => {
    const result = await request(app).get(`/product/${15333}`);
    expect(result.body).toHaveLength(2);
  });
});
