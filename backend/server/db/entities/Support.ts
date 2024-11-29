import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn,
    BaseEntity
  } from 'typeorm';
  
  @Entity('products')
  export class Support extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;
  
    @Column({ length: 100 })
    productno!: string;
  
    @Column({ unique: true })
    productname!: string;
  
    @Column({ select: false })
    price!: number;
  
    @Column({ default: true })
    isActive!: boolean;
  
    @CreateDateColumn()
    createdAt!: Date;
  
    @UpdateDateColumn()
    updatedAt!: Date;
  }