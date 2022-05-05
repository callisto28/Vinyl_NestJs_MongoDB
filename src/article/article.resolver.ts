import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { ArticleService } from './article.service';
import { Article } from './entities/article.entity';
import { CreateArticleInput } from './dto/create-article.input';
import { UpdateArticleInput } from './dto/update-article.input';
import { IArticle } from '../types';

@Resolver(() => Article)
export class ArticleResolver {
  constructor(private readonly articleService: ArticleService) {}

  @Mutation(() => Article)
  createArticle(
    @Args('createArticleInput') createArticleInput: CreateArticleInput,
  ) {
    return this.articleService.create(createArticleInput);
  }

  @Query((returns) => [Article])
  async Article(): Promise<IArticle[]> {
    return await this.articleService.findAll();
  }

  @Query(() => Article, { name: 'article' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.articleService.findOne(id);
  }

  @Mutation((returns) => Article)
  updateArticle(
    @Args('updateArticleInput') updateArticleInput: UpdateArticleInput,
  ) {
    return this.articleService.update(
      updateArticleInput.id,
      updateArticleInput,
    );
  }

  @Mutation((returns) => Article)
  removeArticle(@Args('id', { type: () => ID }) id: string) {
    return this.articleService.delete(id);
  }
}
