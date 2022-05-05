import * as mongoose from 'mongoose';

export const ArticleSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
  createdAt: Date,
  author: String,
});
