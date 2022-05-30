/* eslint-disable prettier/prettier */
import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateArticleInput {
  @Field()
  readonly title: string;
  @Field()
  readonly description: string;
  @Field()
  readonly subtitle: string;
  @Field()
  readonly contentA: string;
  @Field()
  readonly contentB: string;
  @Field()
  readonly contentC: string;
  // @Field(() => Date)
  // readonly createdAt!: Date;
  @Field()
  readonly author: string;
}
