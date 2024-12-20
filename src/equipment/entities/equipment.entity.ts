import { Group } from 'src/group/entities/group.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, ManyToMany } from 'typeorm';

@Entity()
export class Equipment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: ''})
    code: string;

    @Column({default: ''})
    name: string;
    
    @ManyToOne(() => Group, (group) => group.id, { eager: true })
    group: Group
}
