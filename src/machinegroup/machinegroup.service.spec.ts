import { Test, TestingModule } from '@nestjs/testing';
import { MachinegroupService } from './machinegroup.service';

describe('MachinegroupService', () => {
  let service: MachinegroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MachinegroupService],
    }).compile();

    service = module.get<MachinegroupService>(MachinegroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
