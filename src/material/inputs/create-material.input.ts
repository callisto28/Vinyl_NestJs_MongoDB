import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class CreateMaterialInput {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  image: string;

  @Field({ nullable: true })
  referral_url: string;

  @Field(() => Float)
  price: number;

  @Field({ nullable: true })
  seller: string;

  @Field({ nullable: true })
  brand: string;

  @Field()
  author: string;

  @Field({ defaultValue: false })
  featured: boolean;

  @Field({ defaultValue: 'hifi' })
  slug: string;
}
