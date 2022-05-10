import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UserDocument } from 'src/user/entities/user.entity';

export const GetUser = createParamDecorator(
  (data, ctx: ExecutionContext): UserDocument => {
    if (ctx.getType() === 'http') {
      const request = ctx.switchToHttp().getRequest();
      return request.user;
    }

    const contextGql = GqlExecutionContext.create(ctx);
    return contextGql.getContext().req.user;
  },
);
