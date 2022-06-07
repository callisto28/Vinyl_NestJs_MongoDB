import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMaterialInput } from './inputs';
import { Material } from './schema/material.schema';

@Injectable()
export class MaterialService {
  constructor(
    @InjectModel(Material.name) private materialModel: Model<Material>,
  ) {}

  public async create(createMaterialInput: CreateMaterialInput) {
    return this.materialModel.create({
      ...createMaterialInput,
    });
  }

  public async findbyFeatured() {
    return this.materialModel.find({ featured: true }, undefined, {
      lean: true,
    });
  }
}
