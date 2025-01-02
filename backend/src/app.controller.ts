import {
  Controller,
  Get,
  Post,
  Req,
  Body,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user/entities/user.entity';
import { AuthService } from './auth/auth.service';
import { Request } from 'express';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';

export const GetUser = createParamDecorator(
  //ctx: 実行コンテキスト（リクエスト情報へのアクセスを提供）
  //data: デコレータに渡されるカスタムデータ
  (data: unknown, ctx: ExecutionContext) => {
    //switchToHttp()メソッドでHTTPコンテキストにアクセス.リクエスト、レスポンス、次のハンドラーにアクセス可能
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  },
);

@Controller()
export class AppController {
  //1つのコンストラクタ内で全てのサービスを宣言
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


}
