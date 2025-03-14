import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { UserLogin } from './UserLogin';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  c_id: number;

  @ManyToOne(() => UserLogin)
  @JoinColumn({name:'u_id'})
  userlogin: UserLogin;
}