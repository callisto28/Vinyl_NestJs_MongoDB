import { Field, Float, ObjectType } from '@nestjs/graphql';
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from 'src/common/abstract/abstract-document.schema';

@ObjectType()
@ObjectType()
@Schema({ versionKey: false, timestamps: true })
export class Material extends AbstractDocument {
  @Prop()
  @Field()
  title: string;

  @Prop()
  @Field()
  description: string;

  @Prop({ required: false })
  @Field({ nullable: true })
  image: string;

  @Prop({ required: false })
  @Field({ nullable: true })
  referral_url: string;

  @Prop()
  @Field(() => Float)
  price: number;

  @Prop()
  @Field()
  seller: string;

  @Prop()
  @Field()
  author: string;

  @Prop({ default: false })
  @Field({ defaultValue: false })
  featured: boolean;
}

export const MaterialSchema = SchemaFactory.createForClass(Material);
