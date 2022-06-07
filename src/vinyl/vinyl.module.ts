import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Vinyl, VinylSchema } from './schema/vinyl.schema';
import { VinylResolver } from './vinyl.resolver';
import { VinylService } from './vinyl.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Vinyl.name, schema: VinylSchema }]),
  ],
  providers: [VinylService, VinylResolver],
})
export class VinylModule {}
