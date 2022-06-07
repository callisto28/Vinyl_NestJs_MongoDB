import { createUnionType, Field, InputType, ObjectType } from '@nestjs/graphql';
import { CreateMaterialInput } from 'src/material/inputs';
import { Material } from 'src/material/schema/material.schema';
import { CreateVinylInput } from 'src/vinyl/inputs';
import { Vinyl } from 'src/vinyl/schema/vinyl.schema';
import { TYPE_PRODUCT } from '../enums';

export const UnionDto = createUnionType({
  name: 'UnionDto',
  types: () => [CreateVinylInput, CreateMaterialInput] as const,
});

@InputType()
export class CreateProductDto {
  @Field(() => TYPE_PRODUCT)
  type: TYPE_PRODUCT;

  @Field(() => Vinyl)
  data: Vinyl;
}
