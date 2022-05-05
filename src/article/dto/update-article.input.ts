import { CreateArticleInput } from './create-article.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateArticleInput extends PartialType(CreateArticleInput) {
  @Field(() => ID)
  id!: string;
  @Field()
  title: string;
  @Field()
  description: string;
  @Field()
  content!: string;
  @Field()
  createdAt!: Date;
  @Field()
  author!: string;
}
