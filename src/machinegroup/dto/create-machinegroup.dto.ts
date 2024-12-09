import { System } from "src/system/entities/system.entity";

export class CreateMachinegroupDto {
    id: number;
    name: string;
    system: System;
}
