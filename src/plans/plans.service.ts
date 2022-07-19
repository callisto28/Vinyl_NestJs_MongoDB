import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPlan } from '../types';
import { CreatePlanInput } from './dto/create-plan.input';
import { UpdatePlanInput } from './dto/update-plan.input';

@Injectable()
export class PlansService {
  constructor(@InjectModel('Plan') private planModel: Model<IPlan>) {}
  async create(createPlanInput: CreatePlanInput): Promise<IPlan> {
    const createdPlan = new this.planModel(createPlanInput);
    return await createdPlan.save();
  }

  async findAll(): Promise<IPlan[]> {
    return await this.planModel.find().sort({ createdAt: 'desc' }).exec();
  }

  async findOne(id: string): Promise<IPlan> {
    return await this.planModel.findById(id);
  }

  async update(id: string, updatePlanInput: UpdatePlanInput): Promise<IPlan> {
    return await this.planModel.findByIdAndUpdate(id, updatePlanInput, {
      new: true,
    });
  }

  async delete(id: string): Promise<IPlan> {
    return await this.planModel.findByIdAndRemove(id);
  }
}
