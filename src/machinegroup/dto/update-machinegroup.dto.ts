import { PartialType } from '@nestjs/mapped-types';
import { CreateMachinegroupDto } from './create-machinegroup.dto';

export class UpdateMachinegroupDto extends PartialType(CreateMachinegroupDto) {
    name: string;
}
