import { System } from "src/system/entities/system.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Machinegroup {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => System, (system) => system.id, { eager: true })
    @JoinColumn()
    system: System;
}
