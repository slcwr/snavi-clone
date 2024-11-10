 // db/entities/Product.ts
import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn, 
  UpdateDateColumn } from 'typeorm';

@Entity('products')  // テーブル名を明示的に指定
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ length: 100 })
  productno!: string;

  @Column({ unique: true })
  productname!: string;

  @Column()
  price!: number;

  @Column({ default: true })
  isActive!: boolean;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;
}