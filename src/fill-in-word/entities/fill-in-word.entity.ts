import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'fillInWord' })
export class FillInWord extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  question: string;

  @Column()
  correctAnswer: string;

  @Column()
  explain: string;

  @Column()
  done: string;
}
