import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Material, MaterialSchema } from './schema/material.schema';
import { MaterialResolver } from './material.resolver';
import { MaterialService } from './material.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Material.name, schema: MaterialSchema },
    ]),
  ],
  providers: [MaterialService, MaterialResolver],
})
export class MaterialModule {}
