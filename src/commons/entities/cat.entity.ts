import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class Cat {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false, length: 100 })
    name: string;
}
