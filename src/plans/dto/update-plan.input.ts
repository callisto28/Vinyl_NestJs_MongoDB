import { CreatePlanInput } from './create-plan.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePlanInput extends PartialType(CreatePlanInput) {
  @Field(() => Int)
  id: number;
}
