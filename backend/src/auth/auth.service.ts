import { Injectable, NotAcceptableException } from '@nestjs/common';
//import bcrypt = require('bcrypt');
import { JwtService } from '@nestjs/jwt';
import { userInfo } from 'os';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { isErrored } from 'stream';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(id: number): Promise<any> {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new NotAcceptableException('ユーザが見つかりません');
    }
    return user;
  }

  async login(user: any) {
    const payload = {
      username: user.username,
      sub: user.id,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        username: user.username,
      },
    };
  }
}
