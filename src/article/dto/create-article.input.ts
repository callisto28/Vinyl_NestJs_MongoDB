import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateArticleInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
