import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Article {
  @Field(() => ID)
  id?: string;
  @Field()
  title: string;
  @Field()
  description: string;
  @Field()
  content?: string;
  @Field()
  createdAt: Date;
  @Field()
  author: string;
}
