import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ProductType } from './ProductType';
import { join } from 'path';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  p_id: number;

  @Column()
  p_name: string;

  @Column()
  p_image: string;

  @Column()
  p_description: string;

  @Column()
  p_code_item: string;

  @Column()
  p_price: string;

  @ManyToOne(() => ProductType)
  @JoinColumn({name:'pt_id'})
  producttype : ProductType

  
}