/* eslint-disable prettier/prettier */
import { InputType, Field, ID } from '@nestjs/graphql';

@InputType()
export class CreateArticleInput {
  @Field()
  readonly title: string;
  @Field()
  readonly description: string;
  @Field()
  readonly image?: string;
  @Field()
  readonly subtitle: string;
  @Field()
  readonly contentA: string;
  @Field()
  readonly contentB: string;
  @Field()
  readonly contentC: string;
  @Field()
  readonly contentD: string;
  @Field()
  readonly contentE: string;
  @Field()
  readonly contentF: string;
  @Field()
  readonly url?: string;
  // @Field(() => Date)
  // readonly createdAt!: Date;
  @Field()
  readonly author: string;
}
