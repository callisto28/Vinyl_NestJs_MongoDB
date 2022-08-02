import { Field, Float, InputType } from '@nestjs/graphql';

@InputType()
export class CreateVinylInput {
  @Field()
  title: string;

  @Field({ nullable: true })
  artiste: string;

  @Field({ nullable: true })
  subtitle: string;

  @Field()
  description: string;

  @Field({ nullable: true })
  image: string;

  @Field({ nullable: true })
  imageB: string;

  @Field({ nullable: true })
  referral_url: string;

  @Field({ nullable: true })
  spotify_url: string;

  @Field(() => Float, { nullable: true })
  priceEur: number;

  @Field(() => Float, { nullable: true })
  priceUSD: number;

  @Field({ nullable: true })
  label: string;

  @Field({ nullable: true })
  genre: string;

  @Field({ nullable: true })
  promo: string;

  @Field({ nullable: true })
  release: string;

  @Field()
  seller: string;

  @Field()
  author: string;

  @Field({ defaultValue: false })
  featured: boolean;

  @Field({ defaultValue: 'vinyl' })
  slug: string;
}
