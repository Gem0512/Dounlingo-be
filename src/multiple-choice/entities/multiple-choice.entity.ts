import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'multipleChoice' })
export class MultipleChoice extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  question: string;

  @Column({ type: 'json' })
  answer: { [key: string]: any[] };

  @Column()
  correctAnswer: string;

  @Column()
  explain: string;

  @Column()
  done: string;
}
