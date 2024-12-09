import { Brand } from "src/brand/entities/brand.entity";
import { Machinegroup } from "src/machinegroup/entities/machinegroup.entity";

export class CreateMachineDto {
    id: number;
    name: string;
    model?: string;
    machineGroup?: Machinegroup;
    brand?: Brand;
}
