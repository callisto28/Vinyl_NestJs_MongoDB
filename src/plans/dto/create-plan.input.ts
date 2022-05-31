import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePlanInput {
  @Field()
  readonly title: string;
  @Field()
  readonly description: string;
  @Field()
  readonly image: string;
  @Field()
  readonly url: string;
  @Field()
  readonly price: number;
  @Field()
  readonly seller: string;
  // @Field(() => Date)
  // createdAt?: Date;
  @Field()
  readonly author: string;
}
