import * as mongoose from 'mongoose';

export const PlanSchema = new mongoose.Schema({
    title: String,
    description: String,
    image: String,
    url: String,
    author: String,
});
