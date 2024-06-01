import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Policy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  policyNumber: string;

  @Column()
  holderName: string;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  premium: number;
}
