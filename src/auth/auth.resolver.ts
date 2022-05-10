import { Body, UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';

import { GetUser } from 'src/common/decorators/user.decorator';
import { LogInWithCredentialsGuard } from 'src/common/guards/local.guard';

import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login-response';
import { LoginUserInput } from './dto/login-user.input';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}
  @UseGuards(LogInWithCredentialsGuard)
  @Mutation(() => LoginResponse)
  async login(
    @Args('body') loginUserInput: LoginUserInput,
    @GetUser() user: any,
  ) {
    console.log(user, 'req');
    return this.authService.login(user);
  }
}
