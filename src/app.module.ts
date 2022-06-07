import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticleModule } from './article/article.module';
import { PlansModule } from './plans/plans.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { VinylModule } from './vinyl/vinyl.module';
import { MaterialModule } from './material/material.module';
import { DeskModule } from './desk/desk.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      buildSchemaOptions: {
        dateScalarMode: 'timestamp',
      },
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    ArticleModule,
    PlansModule,
    UserModule,
    AuthModule,
    VinylModule,
    MaterialModule,
    DeskModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
