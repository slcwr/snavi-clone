import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  @ApiOperation({ summary: 'ユーザーログイン' }) // エンドポイントの説明
  @ApiResponse({ status: 200, description: '認証成功' }) // レスポンスの説明
  @ApiBody({ type: LoginDto }) // リクエストボディの型定義
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
