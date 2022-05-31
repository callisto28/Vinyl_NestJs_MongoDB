import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType()
export class Article {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;
  @Prop({ type: String, required: true })
  @Field(() => String, { description: 'article title' })
  title!: string;
  @Prop({ type: String, required: false })
  @Field(() => String, { description: 'article image' })
  image: string;
  @Prop({ type: String, required: true })
  @Field(() => String, { description: 'article description' })
  description!: string;
  @Prop({ type: String, required: true })
  @Field(() => String, { description: 'article subtitle' })
  subtitle: string;
  @Prop({ type: String, required: true })
  @Field(() => String, { description: 'article contentA' })
  contentA: string;
  @Prop({ type: String, required: false })
  @Field(() => String, { description: 'article contentB' })
  contentB?: string;
  @Prop({ type: String, required: false })
  @Field(() => String, { description: 'article contentC' })
  contentC?: string;
  @Prop({ type: String, required: false })
  @Field(() => String, { description: 'article contentD' })
  contentD?: string;
  @Prop({ type: String, required: false })
  @Field(() => String, { description: 'article contentE' })
  contentE?: string;
  @Prop({ type: String, required: false })
  @Field(() => String, { description: 'article contentF' })
  contentF?: string;
  @Prop({ type: String, required: false })
  @Field(() => String, { description: 'article url' })
  url?: string;
  @Prop({ type: Date, default: Date.now })
  @Field(() => String, { description: 'article date' })
  createdAt!: Date;
  @Prop()
  @Field(() => String, { description: 'article author' })
  author: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
