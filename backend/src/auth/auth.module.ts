import { Module,forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from 'src/user/user.module';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [
  PassportModule,
  // JWTを使うための設定
  JwtModule.register({
    // envファイルから秘密鍵を渡す
    secret: process.env.JWT_SECRET,
    // 有効期間を設定
    signOptions: { expiresIn: '1h'}
  }),
  forwardRef(() => UserModule) 
],
  providers: [AuthService,JwtStrategy],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
