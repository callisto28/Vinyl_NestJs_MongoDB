import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UserResolver } from '../../user/user.resolver';

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
