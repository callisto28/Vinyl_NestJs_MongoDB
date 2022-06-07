import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateVinylInput } from './inputs';
import { Vinyl } from './schema/vinyl.schema';
import { VinylService } from './vinyl.service';

@Resolver(() => Vinyl)
export class VinylResolver {
  constructor(private readonly vinylService: VinylService) {}

  @Query(() => [Vinyl])
  public async getVinylFeatured() {
    return this.vinylService.findbyFeatured();
  }

  @Mutation(() => Vinyl)
  public async createVinyl(@Args('input') input: CreateVinylInput) {
    return this.vinylService.create(input);
  }
}
