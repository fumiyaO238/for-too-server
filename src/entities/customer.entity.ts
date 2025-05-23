import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CustomerNote } from './customer-note.entity';

@Entity('customers')
@Unique(['tel', 'email', 'line', 'instagram'])
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'char', length: 36 })
  uuid: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ length: 30 })
  firstName: string;

  @Column({ length: 30 })
  lastName: string;

  @Column({ length: 30 })
  firstNameKana: string;

  @Column({ length: 30 })
  lastNameKana: string;

  @Column({ type: 'date', nullable: true })
  birthday?: Date;

  @Column({ length: 191, nullable: true })
  address?: string;

  @Column({ length: 15, unique: true })
  tel: string;

  @Column({ length: 191, unique: true, nullable: true })
  email?: string;

  @Column({ length: 191, unique: true, nullable: true })
  line?: string;

  @Column({ length: 191, unique: true, nullable: true })
  instagram?: string;

  @OneToMany(() => CustomerNote, (customerNote) => customerNote.customer)
  customerNotes: CustomerNote[];
}
