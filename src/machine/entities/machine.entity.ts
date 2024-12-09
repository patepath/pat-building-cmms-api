import { Brand } from "src/brand/entities/brand.entity";
import { Machinegroup } from "src/machinegroup/entities/machinegroup.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Machine {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: ''})
    name: string;

    @Column({default: ''})
    model: string;

    @ManyToOne(()=>Machinegroup, machineGroup => machineGroup.id, {eager: true})
    @JoinColumn()
    machineGroup: Machinegroup;

    @ManyToOne(()=> Brand, brand => brand.id, {eager: true, nullable: true})
    @JoinColumn()
    brand: Brand;
}

