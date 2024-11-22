import { Module } from '@nestjs/common';
import { MachinegroupService } from './machinegroup.service';
import { MachinegroupController } from './machinegroup.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Machinegroup } from './entities/machinegroup.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Machinegroup])],
  controllers: [MachinegroupController],
  providers: [MachinegroupService]
})
export class MachinegroupModule {}
