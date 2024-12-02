import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('products')
export class Product {
  @ApiProperty({ description: 'The unique identifier' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'Product number', maxLength: 100 })
  @Column({ length: 100 })
  productno: string;

  @ApiProperty({ description: 'Product name' })
  @Column({ unique: true })
  productname: string;

  @ApiProperty({ description: 'Product description' })
  @Column()
  description: string;

  @ApiProperty({ description: 'Active status', default: true })
  @Column({ default: true })
  isActive: boolean;

  @ApiProperty({ description: 'Creation date' })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: 'Last update date' })
  @UpdateDateColumn()
  updatedAt: Date;
}