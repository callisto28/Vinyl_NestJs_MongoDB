import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DeskResolvers } from './desk.resolver';
import { DeskService } from './desk.service';
import { Desk, DeskSchema } from './schema/desk.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Desk.name, schema: DeskSchema }]),
  ],
  providers: [DeskService, DeskResolvers],
})
export class DeskModule {}
