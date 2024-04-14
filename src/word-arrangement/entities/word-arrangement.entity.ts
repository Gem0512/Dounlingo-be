import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'wordArrangement' })
export class WordArrangement extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  questions: string;

  @Column()
  done: string;
}
