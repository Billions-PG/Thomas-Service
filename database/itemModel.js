const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/recommended', {useNewUrlParser: true, useUnifiedTopology: true});

const recommendedSchema = new Schema({
  name: String,
  imageUrl: String,
  shopName: String,
  priceDisplay: String,
  price: {
    display: String,
    worth: Number,
    onSale: Boolean,
    salePrice: Number,
  }
  shipping: {
    display: String,
    eligibility: Boolean
  }
  recommended: {
    fromShop: [String],
    similarProduct: [String]
}, {timestamps:{ updatedAt: 'updated_at' } });


const Item = mongoose.model('Item', recommendedSchema);

module.exports = Item;