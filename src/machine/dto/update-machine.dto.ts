import { PartialType } from '@nestjs/mapped-types';
import { CreateMachineDto } from './create-machine.dto';
import { Machinegroup } from 'src/machinegroup/entities/machinegroup.entity';
import { Brand } from 'src/brand/entities/brand.entity';

export class UpdateMachineDto extends PartialType(CreateMachineDto) {
    name: string;
    model?: string;
    machineGroup?: Machinegroup;
    brand?: Brand;
}
