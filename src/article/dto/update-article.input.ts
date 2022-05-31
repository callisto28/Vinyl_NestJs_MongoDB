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
  image?: string;
  @Field()
  subtitle: string;
  @Field()
  contentA: string;
  @Field()
  contentB: string;
  @Field()
  contentC: string;
  @Field()
  contentD: string;
  @Field()
  contentE: string;
  @Field()
  contentF: string;
  @Field()
  url?: string;
  // @Field()
  // createdAt!: Date;
  @Field()
  author!: string;
}
