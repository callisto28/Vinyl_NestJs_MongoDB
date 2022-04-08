import { Module } from '@nestjs/common';
import { PlansService } from './plans.service';
import { PlansResolver } from './plans.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { PlanSchema } from 'src/schema/plan.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Plan', schema: PlanSchema }])],
  providers: [PlansResolver, PlansService],
})
export class PlansModule { }
