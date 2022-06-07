import { Prop, Schema } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';
import { ObjectType, ID, Field } from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
export abstract class AbstractDocument {
  @Field(() => ID)
  _id: string;

  @Field()
  createdAt?: Date;

  @Field()
  updatedAt?: Date;
}
