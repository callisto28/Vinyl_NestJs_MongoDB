import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateArticleInput } from './dto/create-article.input';
import { UpdateArticleInput } from './dto/update-article.input';
import { IArticle } from 'src/types';

@Injectable()
export class ArticleService {
  constructor(@InjectModel('Article') private articleModel: Model<IArticle>) {}

  async create(createArticleInput: CreateArticleInput): Promise<IArticle> {
    const createdArticle = new this.articleModel(createArticleInput);
    return await createdArticle.save();
  }

  async findAll(): Promise<IArticle[]> {
    return await this.articleModel.find().sort({ createdAt: 'desc' }).exec();
  }

  async findOne(id: string): Promise<IArticle> {
    return await this.articleModel.findById(id);
  }

  async update(
    id: string,
    updateArticleInput: UpdateArticleInput,
  ): Promise<IArticle> {
    return await this.articleModel.findByIdAndUpdate(id, updateArticleInput, {
      new: true,
    });
  }

  async delete(id: string): Promise<IArticle> {
    return await this.articleModel.findByIdAndRemove(id);
  }
}
