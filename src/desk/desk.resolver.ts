import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DeskService } from './desk.service';
import { CreateDeskInput } from './inputs';
import { Desk } from './schema/desk.schema';

@Resolver(() => Desk)
export class DeskResolvers {
  constructor(private readonly deskService: DeskService) {}

  @Query(() => [Desk])
  public async getDeskFeatured() {
    return this.deskService.findbyFeatured();
  }
  @Mutation(() => Desk)
  public async createDesk(@Args('input') input: CreateDeskInput) {
    return this.deskService.create(input);
  }
}
