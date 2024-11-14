 // db/entities/Product.ts
import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn, 
  UpdateDateColumn } from 'typeorm';

@Entity('generateproducts')  // テーブル名を明示的に指定
export class GenerateProduct {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ length: 100 })
  productno!: string;

  @Column({ unique: true })
  productname!: string;

  @Column()
  description!: string;

  @Column({ default: true })
  isActive!: boolean;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}