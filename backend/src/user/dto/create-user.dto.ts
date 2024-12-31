// src/generate-product/dto/createUser.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateUserDto {

  @ApiProperty({ description: 'ユーザー名', uniqueItems: true })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ description: 'パスワード' })
  @IsNotEmpty()
  @IsString()
  password: string;

  @ApiProperty({ description: 'アクティブ状態', default: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}