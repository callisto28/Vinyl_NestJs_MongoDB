import { Field, Float, ObjectType } from '@nestjs/graphql';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from 'src/common/abstract/abstract-document.schema';

@ObjectType()
@Schema({ versionKey: false, timestamps: true })
export class Vinyl extends AbstractDocument {
  @Prop()
  @Field()
  title: string;

  @Prop({ required: false })
  @Field({ nullable: true })
  subtitle: string;

  @Prop()
  @Field()
  description: string;

  @Prop({ required: false })
  @Field({ nullable: true })
  image: string;

  @Prop({ required: false })
  @Field({ nullable: true })
  referral_url: string;

  @Prop({ required: false })
  @Field(() => Float, { nullable: true })
  priceEur: number;

  @Prop({ required: false })
  @Field(() => Float, { nullable: true })
  priceUSD: number;

  @Prop({ required: false })
  @Field({ nullable: true })
  label: string;

  @Prop({ required: false })
  @Field({ nullable: true })
  genre: string;

  @Prop()
  @Field()
  seller: string;

  @Prop()
  @Field()
  author: string;

  @Prop({ default: false })
  @Field({ defaultValue: true })
  featured: boolean;
}

export const VinylSchema = SchemaFactory.createForClass(Vinyl);
