import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class System {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
