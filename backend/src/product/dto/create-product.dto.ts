// src/generate-product/dto/create-generate-product.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ description: '製品番号', maxLength: 100 })
  @IsNotEmpty()
  @IsString()
  productno: string;

  @ApiProperty({ description: '製品名', uniqueItems: true })
  @IsNotEmpty()
  @IsString()
  productname: string;

  @ApiProperty({ description: '製品説明' })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ description: 'アクティブ状態', default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}