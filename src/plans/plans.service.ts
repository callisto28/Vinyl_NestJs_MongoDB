import { Injectable } from '@nestjs/common';
import { CreatePlanInput } from './dto/create-plan.input';
import { UpdatePlanInput } from './dto/update-plan.input';

@Injectable()
export class PlansService {
  create(createPlanInput: CreatePlanInput) {
    return 'This action adds a new plan';
  }

  findAll() {
    return `This action returns all plans`;
  }

  findOne(id: number) {
    return `This action returns a #${id} plan`;
  }

  update(id: number, updatePlanInput: UpdatePlanInput) {
    return `This action updates a #${id} plan`;
  }

  remove(id: number) {
    return `This action removes a #${id} plan`;
  }
}
