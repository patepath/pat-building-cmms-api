import { Test, TestingModule } from '@nestjs/testing';
import { MachinelogController } from './machinelog.controller';
import { MachinelogService } from './machinelog.service';

describe('MachinelogController', () => {
  let controller: MachinelogController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MachinelogController],
      providers: [MachinelogService],
    }).compile();

    controller = module.get<MachinelogController>(MachinelogController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
