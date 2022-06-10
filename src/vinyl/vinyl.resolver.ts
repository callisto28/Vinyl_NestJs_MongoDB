import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateVinylInput } from './inputs';
import { UpdateVinylInput } from './inputs/update-vinyl.input';
import { Vinyl } from './schema/vinyl.schema';
import { VinylService } from './vinyl.service';

@Resolver(() => Vinyl)
export class VinylResolver {
  constructor(private readonly vinylService: VinylService) {}

  @Query(() => [Vinyl])
  public async getVinylFeatured() {
    return this.vinylService.findbyFeatured();
  }

  @Query(() => Vinyl, { name: 'vinyl' })
  public async getVinyl(@Args('id', { type: () => String }) id: string) {
    return this.vinylService.findOne(id);
  }

  @Mutation(() => Vinyl)
  public async createVinyl(@Args('input') input: CreateVinylInput) {
    return this.vinylService.create(input);
  }
  @Mutation(() => Vinyl)
  updateVinyl(@Args('updateVinyl') updateVinylInput: UpdateVinylInput) {
    return this.vinylService.update(updateVinylInput._id, updateVinylInput);
  }
}
