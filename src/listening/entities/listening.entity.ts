import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'listening' })
export class Listening extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column({ type: 'longblob' }) // Sử dụng bytea để lưu dữ liệu nhị phân
  // audio: Buffer;
  @Column({ default: '' }) // Sử dụng bytea để lưu dữ liệu nhị phân
  audio: string;

  @Column({ type: 'json', default: null })
  questions: { [key: string]: any[] };

  @Column()
  paragraphTa: string;

  @Column()
  paragraphTv: string;

  @Column()
  done: string;
}
