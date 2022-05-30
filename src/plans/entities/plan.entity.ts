import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType()
export class Plan {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;
  @Prop({ type: String })
  @Field(() => String, { description: 'plan title' })
  title: string;
  @Prop({ type: String })
  @Field(() => String, { description: 'plan description' })
  description: string;
  @Prop({ type: String })
  @Field(() => String, { description: 'plan image' })
  image?: string;
  @Prop({ type: String })
  @Field(() => String, { description: 'plan url' })
  url?: string;
  @Prop({ type: Date, default: Date.now })
  @Field(() => String, { description: 'plan date' })
  createdAt!: Date;
  @Prop()
  @Field(() => String, { description: 'plan author' })
  author: string | null;
}

export const PlanSchema = SchemaFactory.createForClass(Plan);
