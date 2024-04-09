import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'wordArrangement' })
export class WordArrangement extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'json' })
  words: { [key: string]: any[] };

  @Column({ type: 'json' })
  correct: string;

  @Column()
  explain: string;

  @Column()
  done: string;
}
