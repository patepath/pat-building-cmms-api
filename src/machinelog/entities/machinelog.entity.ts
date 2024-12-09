import { Machine } from "src/machine/entities/machine.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Machinelog {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Machine, (machine) => machine.id, { eager: true })
    @JoinColumn()
    machine: Machine;

    @Column()
    sn: string;

    @Column()
    contactName: string;
    
    @Column()
    contactPhone: string;

    @Column()
    location: string;

    @Column('datetime')
    createdDate: Date;

    @Column('text')
    description: string;
}

