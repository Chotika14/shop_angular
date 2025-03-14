import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class UserLogin {
  @PrimaryGeneratedColumn()
  u_id: number;

  @Column()
  u_name: string;

  @Column()
  u_email: string;

  @Column()
  u_password: string;

  @Column()
  u_phone: string;

  @Column()
  u_address: string;
}
