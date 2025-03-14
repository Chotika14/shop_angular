import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { UserLogin } from './UserLogin';
import { Product } from './Product';

@Entity()
export class ProductCustomer {
  @PrimaryGeneratedColumn()
  pc_id: number;

  @Column()
  pc_amount: number;

  @ManyToOne(() => UserLogin)
  @JoinColumn({name:'u_id'})
  userlogin: UserLogin;

  @ManyToOne(() => Product)
  @JoinColumn({name:'p_id'})
  product: Product;

}
