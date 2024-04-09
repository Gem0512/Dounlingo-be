import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'pronounce' })
export class Pronounce extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  topic: string;

  @Column()
  wordTa: string;

  @Column()
  wordTv: string;

  @Column()
  audio: string;

  @Column()
  done: string;
}
