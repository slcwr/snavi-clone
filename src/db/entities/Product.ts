 // db/entities/Product.ts
const { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  CreateDateColumn, 
  UpdateDateColumn 
} = require('typeorm');

require('reflect-metadata');

@Entity('products')
class Product {
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

module.exports = { Product };