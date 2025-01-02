import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export interface User {
    id: number;
    username: string;
    password: string;
}

@Entity('users')
export class User {
  @ApiProperty({ description: 'The unique identifier' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'User name', maxLength: 100 })
  @Column({ length: 100 })
  username: string;

  @ApiProperty({ description: 'Password' })
  @Column({ unique: true })
  password: string;

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