import { CreateArticleInput } from './create-article.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateArticleInput extends PartialType(CreateArticleInput) {
  @Field(() => Int)
  id: number;
}
