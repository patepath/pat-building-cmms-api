import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Department {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @Column()
    name: string;
}
