import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User, UserDocument } from '../user/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

export interface JWTPayload {
  email: string;
  role: string;
}

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private jwtTokenService: JwtService, // private readonly authService: AuthService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);
    console.log(user, 'user');

    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: UserDocument) {
    const payload = { email: user.email, sub: user._id };
    return {
      access_token: this.jwtTokenService.sign(payload),
    };
  }
}
