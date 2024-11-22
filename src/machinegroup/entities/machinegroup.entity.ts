import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Machinegroup {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
