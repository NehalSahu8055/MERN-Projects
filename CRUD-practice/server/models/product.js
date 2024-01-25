import mongoose, { Schema, model } from 'mongoose';

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('Database Connected');
}

//schema for type checking [configuration of collection] for abstraction]
// tuple or document with validations
const productSchema = new Schema({
  id: Number,
  title: String,
  description: String,
  price: { type: String, min: [0, 'Wrong Price'] },
  discountPercentage: String,
  rating: {
    type: String,
    min: [0, 'Must be greater than 0'],
    max: [20, 'Wrong Rating'],
  },
  stock: String,
  brand: String,
  category: String,
  thumbnail: String,
  images: [String],
});

// collection
// const sameName = new model(sameName,...)
const Product = new model('Product', productSchema);

export { Product };
