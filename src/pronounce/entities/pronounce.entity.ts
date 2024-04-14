import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'pronounce' })
export class Pronounce extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'json', default: null })
  topic: { [key: string]: any[] };
}
