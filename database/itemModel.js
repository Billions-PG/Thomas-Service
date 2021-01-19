const mongoose = require('mongoose');

const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/recommended', { useNewUrlParser: true, useUnifiedTopology: true });

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
    salePrice: Number,
  },
  shipping: {
    display: String,
    eligibility: Boolean,
  },
  recommended: {
    fromShop: [Number],
    similarProduct: [Number],
  },
}, { timestamps: { updatedAt: 'updated_at' } });

const Item = mongoose.model('Item', recommendedSchema);

module.exports = Item;
