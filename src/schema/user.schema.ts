/* eslint-disable prettier/prettier */

import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    
    email: String,
    role: String,
    password: String,
});
