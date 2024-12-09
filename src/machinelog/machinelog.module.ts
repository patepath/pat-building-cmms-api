import { Module } from '@nestjs/common';
import { MachinelogService } from './machinelog.service';
import { MachinelogController } from './machinelog.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Machinelog } from './entities/machinelog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Machinelog])],
  controllers: [MachinelogController],
  providers: [MachinelogService]
})
export class MachinelogModule {}
