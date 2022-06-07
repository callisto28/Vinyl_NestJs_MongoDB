import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { PlansService } from './plans.service';
import { Plan } from './entities/plan.entity';
import { CreatePlanInput } from './dto/create-plan.input';
import { UpdatePlanInput } from './dto/update-plan.input';
import { IPlan } from '../types';
// import { ProductUnion, TYPE_PRODUCT } from './enums';
import { CreateVinylInput } from 'src/vinyl/inputs';
import { CreateMaterialInput } from 'src/material/inputs';
import { CreateProductDto } from './dto/create-product.dto';

@Resolver(() => Plan)
export class PlansResolver {
  constructor(private readonly plansService: PlansService) {}

  @Mutation(() => Plan)
  createPlan(@Args('createPlanInput') createPlanInput: CreatePlanInput) {
    return this.plansService.create(createPlanInput);
  }

  @Query(() => [Plan])
  async Plans(): Promise<IPlan[]> {
    return this.plansService.findAll();
  }

  @Query(() => Plan, { name: 'plan' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.plansService.findOne(id);
  }

  @Mutation(() => Plan)
  updatePlan(@Args('updatePlanInput') updatePlanInput: UpdatePlanInput) {
    return this.plansService.update(updatePlanInput.id, updatePlanInput);
  }

  @Mutation(() => Plan)
  removePlan(@Args('id', { type: () => ID }) id: string) {
    return this.plansService.delete(id);
  }
  //
  // @Mutation(() => ProductUnion)
  // createProduct(@Args('input') args: CreateProductDto) {
  //   switch (args.type) {
  // case TYPE_PRODUCT.MATERIAL:
  //       return 'mat';

  //     default:
  //       return 'false';
  //   }
  // }
}
