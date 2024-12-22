import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('generateproducts')
export class GenerateProduct {
  @ApiProperty({ description: 'The unique identifier' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({ description: 'GenerateProduct number', maxLength: 100 })
  @Column({ length: 100 })
  generateproductno: string;

  @ApiProperty({ description: 'GenerateProduct name' })
  @Column({ unique: true })
  generateproductname: string;

  @ApiProperty({ description: 'GenerateProduct price' })
  @Column()
  price: number;

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