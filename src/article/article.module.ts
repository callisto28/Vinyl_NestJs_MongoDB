import { Module } from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleResolver } from './article.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleSchema } from 'src/schema/article.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Article', schema: ArticleSchema }]),
  ],
  providers: [ArticleResolver, ArticleService],
})
export class ArticleModule {}
