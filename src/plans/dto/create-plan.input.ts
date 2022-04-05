import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePlanInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
