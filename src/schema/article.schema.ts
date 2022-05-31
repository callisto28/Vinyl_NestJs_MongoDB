import * as mongoose from 'mongoose';

export const ArticleSchema = new mongoose.Schema({
  title: String,
  description: String,
  subtitle: String,
  image: String,
  contentA: String,
  contentB: String,
  contentC: String,
  contentD: String,
  contentE: String,
  contentF: String,
  url: String,
  createdAt: { type: Date, default: Date.now },
  author: String,
});
