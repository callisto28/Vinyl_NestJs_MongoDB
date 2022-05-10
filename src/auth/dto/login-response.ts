import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../../user/entities/user.entity';

@ObjectType('LoginResponse')
export class LoginResponse {
  @Field(() => String, { description: 'Generated access_token of the user' })
  access_token: string;
  // @Field(() => User, { description: 'User data' })
  // user: User;
}
