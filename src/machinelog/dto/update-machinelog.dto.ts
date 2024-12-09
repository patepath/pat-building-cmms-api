import { PartialType } from '@nestjs/mapped-types';
import { CreateMachinelogDto } from './create-machinelog.dto';
import { Machine } from 'src/machine/entities/machine.entity';

export class UpdateMachinelogDto extends PartialType(CreateMachinelogDto) {
    machine: Machine;
    sn?: string;
    contactName?: string;
    contactPhone?: string;
    location: string;
    createdDate: Date;
    description: string;
}
