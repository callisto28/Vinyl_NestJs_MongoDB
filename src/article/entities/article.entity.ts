import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType()
export class Article {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;
  @Prop()
  @Field(() => String, { description: 'article title' })
  title: string;
  @Prop()
  @Field(() => String, { description: 'article description' })
  description: string;
  @Prop()
  @Field(() => String, { description: 'article content' })
  content?: string;
  @Prop({ type: Date, default: Date.now })
  @Field(() => String, { description: 'article date' })
  createdAt!: Date;
  @Prop()
  @Field(() => String, { description: 'article author' })
  author: string;
}
export const ArticleSchema = SchemaFactory.createForClass(Article);
