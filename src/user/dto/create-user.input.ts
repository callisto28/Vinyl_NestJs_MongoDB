import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => ID)
  readonly id: string;
  @Field()
  readonly email: string;
  @Field()
  readonly password: string;
}
