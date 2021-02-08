const mongoose = require('mongoose');

const { Schema } = mongoose;

const url = 'mongodb://localhost:27017/recommended';

mongoose.connect(process.env.MONGO_URL || url, { useNewUrlParser: true, useUnifiedTopology: true });

const recommendedSchema = new Schema({
  _id: Number,
  name: String,
  imageUrl: String,
  shopName: String,
  price: {
    display: String,
    worth: Number,
    onSale: Boolean,
    salePercentage: Number,
    salePrice: String,
  },
  shipping: {
    display: String,
    eligibility: Boolean,
  },
  similarProduct: [Number],

}, { timestamps: { updatedAt: 'updated_at' } });

const Item = mongoose.model('Item', recommendedSchema);

module.exports = Item;
