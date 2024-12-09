import { PartialType } from '@nestjs/mapped-types';
import { CreateMachinegroupDto } from './create-machinegroup.dto';
import { System } from 'src/system/entities/system.entity';

export class UpdateMachinegroupDto extends PartialType(CreateMachinegroupDto) {
    name: string;
    system: System;
}
