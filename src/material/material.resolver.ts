import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateMaterialInput } from './inputs';
import { Material } from './schema/material.schema';
import { MaterialService } from './material.service';

@Resolver(() => Material)
export class MaterialResolver {
  constructor(private readonly materialService: MaterialService) {}

  @Query(() => [Material])
  public async getMaterialFeatured() {
    return this.materialService.findbyFeatured();
  }

  @Mutation(() => Material)
  public async createMaterial(@Args('input') input: CreateMaterialInput) {
    return this.materialService.create(input);
  }
}
