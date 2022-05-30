import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true, autoIndex: true })
@ObjectType()
export class User {
  @Prop({ type: String, required: true, unique: true })
  @Field(() => String)
  _id?: MongooseSchema.Types.ObjectId;
  @Prop({ required: true, unique: true, message: 'Email must be unique' })
  @Field(() => String, { description: 'User email' })
  email: string;
  @Prop()
  @Field(() => String, { description: 'User role' })
  role: string | null;
  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.index({ email: 1 }, { unique: true });
