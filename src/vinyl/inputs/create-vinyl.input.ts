import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class CreateVinylInput {
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

  @Field()
  seller: string;

  @Field()
  author: string;

  @Field({ defaultValue: false })
  featured: boolean;
}
