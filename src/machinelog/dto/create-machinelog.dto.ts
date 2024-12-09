import { Machine } from "src/machine/entities/machine.entity";

export class CreateMachinelogDto {
    id: number;
    machine: Machine;
    sn?: string;
    contactName?: string;
    contactPhone?: string;
    location: string;
    createdDate: Date;
    description: string;
}
