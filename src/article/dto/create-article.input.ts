/* eslint-disable prettier/prettier */
import { InputType, Field, ID } from '@nestjs/graphql';


@InputType()
export class CreateArticleInput { 
  @Field()
  readonly title: string;
  @Field()
  readonly description: string;
  @Field()
  readonly content!: string;
   @Field()
  readonly author: string;
  
 
}
