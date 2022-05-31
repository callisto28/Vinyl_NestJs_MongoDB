/* eslint-disable prettier/prettier */
// import
import { Document } from 'mongoose';

export interface IArticle extends Document {
  readonly title: string;
  readonly description: string;
  readonly image?: string;
  readonly subtitle: string;
  readonly contentA: string;
  readonly contentB?: string;
  readonly contentC?: string;
  readonly contentD?: string;
  readonly contentE?: string;
  readonly contentF?: string;
  readonly url?: string;
  readonly createdAt?: Date;
  readonly author: string;
}

export interface IPlan extends Document {
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly url: string;
  readonly price: number;
  readonly seller: string;
  readonly createdAt?: Date;
  readonly author: string;
}

export interface IUser extends Document {
  readonly email: string;
  readonly password: string;
  readonly role: string;
}
