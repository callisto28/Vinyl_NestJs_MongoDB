import { Field, Float, ID, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateVinylInput {
  @Field(() => ID)
  _id: string;
  @Field({ nullable: true })
  title: string;
  @Field({ nullable: true })
  subtitle: string;
  @Field({ nullable: true })
  description: string;
  @Field({ nullable: true })
  image: string;
  @Field({ nullable: true })
  imageB: string;
  @Field({ nullable: true })
  referral_url: string;
  @Field(() => Float, { nullable: true })
  priceEur: number;
  @Field(() => Float, { nullable: true })
  priceUSD: number;
  @Field({ nullable: true })
  label: string;
  @Field({ nullable: true })
  genre: string;
  @Field({ nullable: true })
  seller: string;
  @Field({ nullable: true })
  author: string;
  @Field({ defaultValue: true })
  featured: boolean;
  @Field({ defaultValue: 'vinyl' })
  slug: string;
}
