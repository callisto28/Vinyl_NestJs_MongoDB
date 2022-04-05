import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Plan {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
