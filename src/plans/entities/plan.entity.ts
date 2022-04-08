import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Plan {
  @Field(() => ID)
  id?: string;
  @Field()
  description: string;
  @Field()
  image: string;
  @Field()
  url: string;
  @Field()
  createdAt: Date;
  @Field()
  author: string;
}
