import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
} from 'typeorm';
import { CustomerNote } from './customer-note.entity';

@Entity('customers')
@Unique(['tel', 'email', 'line', 'instagram'])
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'char', length: 36 })
  uuid: string;

  @Column({ length: 30 })
  firstName: string;

  @Column({ length: 30 })
  lastName: string;

  @Column({ length: 30 })
  firstNameKana: string;

  @Column({ length: 30 })
  lastNameKana: string;

  @Column('date')
  birthDate: Date;

  @Column({ length: 191 })
  address: string;

  @Column({ length: 15, unique: true })
  tel: string;

  @Column({ length: 191, unique: true })
  email: string;

  @Column({
    type: 'varchar',
    length: 191,
  })
  password: string; // Hash値

  @Column({ length: 191, unique: true })
  line: string;

  @Column({ length: 191, unique: true })
  instagram: string;

  @OneToMany(() => CustomerNote, (customerNote) => customerNote.customer)
  customerNotes: CustomerNote[];
}
