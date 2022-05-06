import { CreatePlanInput } from './create-plan.input';
import { InputType, Field, ID, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePlanInput extends PartialType(CreatePlanInput) {
  @Field(() => ID)
  id: string;
  @Field()
  title: string;
  @Field()
  description: string;
  @Field()
  image: string;
  @Field()
  url: string;
  @Field()
  createdAt: Date;
  @Field()
  author: string;
}
