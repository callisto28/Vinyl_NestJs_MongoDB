import * as mongoose from 'mongoose';

export const PlanSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  url: String,
  price: Number,
  seller: String,
  createdAt: { type: Date, default: Date.now },
  author: String,
});
