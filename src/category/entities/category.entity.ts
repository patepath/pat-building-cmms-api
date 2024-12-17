import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: ''})
    code: string;

    @Column({default: ''})
    name: string;
}
