import { Module,forwardRef } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthModule } from '../auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User]),forwardRef(() => AuthModule)],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], // AuthModuleで使用するため
})
export class UserModule {}
