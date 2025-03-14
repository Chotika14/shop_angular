import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ProductType {
  @PrimaryGeneratedColumn()
  pt_id: number;

  @Column()
  pt_name: string;
}
