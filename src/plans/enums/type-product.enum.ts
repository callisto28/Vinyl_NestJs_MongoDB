import { createUnionType, registerEnumType } from '@nestjs/graphql';
import { Material } from 'src/material/schema/material.schema';
import { Vinyl } from 'src/vinyl/schema/vinyl.schema';

export enum TYPE_PRODUCT {
  VINYL = 'VINYL',
  DESK = 'DESK',
  MATERIAL = 'MATERIAL',
}

registerEnumType(TYPE_PRODUCT, {
  name: 'TYPE_PRODUCT',
});

export const ProductUnion = createUnionType({
  name: 'ProductUnion',
  types: () => [Vinyl, Material] as const,
});
