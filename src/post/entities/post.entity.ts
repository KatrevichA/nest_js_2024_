import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BaseEntity } from '../../common/database/base.entity';

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  title: string;

  @Column('text', { nullable: true })
  description?: string;

  @Column('text', { nullable: true })
  body?: string;

  @Column()
  user_id: string;
}