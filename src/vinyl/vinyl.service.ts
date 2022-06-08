import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVinylInput } from './inputs';
import { Vinyl } from './schema/vinyl.schema';

@Injectable()
export class VinylService {
  constructor(@InjectModel(Vinyl.name) private vinylModel: Model<Vinyl>) {}

  public async create(createVinylInput: CreateVinylInput) {
    return this.vinylModel.create({
      ...createVinylInput,
    });
  }
  public async findOne(id: string) {
    return this.vinylModel.findById(id);
  }

  public async findbyFeatured() {
    return this.vinylModel.find({ featured: true }, undefined, { lean: true });
  }
}
