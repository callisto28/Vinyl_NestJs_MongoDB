import { Module } from '@nestjs/common';
import { PlansService } from './plans.service';
import { PlansResolver } from './plans.resolver';

@Module({
  providers: [PlansResolver, PlansService]
})
export class PlansModule {}
