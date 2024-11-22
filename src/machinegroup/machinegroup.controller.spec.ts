import { Test, TestingModule } from '@nestjs/testing';
import { MachinegroupController } from './machinegroup.controller';
import { MachinegroupService } from './machinegroup.service';

describe('MachinegroupController', () => {
  let controller: MachinegroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MachinegroupController],
      providers: [MachinegroupService],
    }).compile();

    controller = module.get<MachinegroupController>(MachinegroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
