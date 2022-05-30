import * as mongoose from 'mongoose';

export const ArticleSchema = new mongoose.Schema({
  title: String,
  description: String,
  subtitle: String,
  contentA: String,
  contentB: String,
  contentC: String,
  createdAt: { type: Date, default: Date.now },
  author: String,
});
