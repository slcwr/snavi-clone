import {
  Injectable,
  NotAcceptableException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async login(LoginDto: { username: string; password: string }) {
    const user = await this.userService.findOne(LoginDto.username) as User;

    if (!user || user.password !== LoginDto.password) {
      throw new UnauthorizedException('Invaulid credentials');
    }
    const payload = { username: user.username, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user.id,
        username: user.username,
      },
    };
  }
}
