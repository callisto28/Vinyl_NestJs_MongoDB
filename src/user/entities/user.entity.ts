import { ObjectType, Field, ID } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  readonly id: string;
  @Field()
  readonly email: string;
  @Field()
  readonly password: string;
}
