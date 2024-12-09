import { Test, TestingModule } from '@nestjs/testing';
import { MachinelogService } from './machinelog.service';

describe('MachinelogService', () => {
  let service: MachinelogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MachinelogService],
    }).compile();

    service = module.get<MachinelogService>(MachinelogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
