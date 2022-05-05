import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { IUser } from 'src/types';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
}
