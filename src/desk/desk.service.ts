import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Desk } from './schema/desk.schema';
import { Model } from 'mongoose';
import { CreateDeskInput } from './inputs/create-desk.input';

@Injectable()
export class DeskService {
  constructor(@InjectModel(Desk.name) private deskModel: Model<Desk>) {}

  public async create(createDeskInput: CreateDeskInput) {
    return this.deskModel.create({
      ...createDeskInput,
    });
  }
  public async findOne(id: string) {
    return this.deskModel.findById(id);
  }

  public async findbyFeatured() {
    return this.deskModel
      .find({ featured: true }, undefined, { lean: true })
      .sort({ createdAt: 'desc' });
  }
}
