import { Test, TestingModule } from '@nestjs/testing';
import { PlansResolver } from './plans.resolver';
import { PlansService } from './plans.service';

describe('PlansResolver', () => {
  let resolver: PlansResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlansResolver, PlansService],
    }).compile();

    resolver = module.get<PlansResolver>(PlansResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
