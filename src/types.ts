/* eslint-disable prettier/prettier */
// import
import { Document } from 'mongoose';

export interface IArticle extends Document {
    readonly title: string;
    readonly description: string;
    readonly content: string;
    readonly createdAt: Date;
    readonly author: string;
}

export interface IPlan extends Document {
    readonly title: string;
    readonly description: string;
    readonly image: string;
    readonly url: string;
    readonly createdAt: Date;
    readonly author: string;
}

export interface IUser extends Document {
    readonly email: string;
    readonly password: string;
}
