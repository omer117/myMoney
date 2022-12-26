import { Module } from '@nestjs/common';
import { CurrentService } from './current.service';
import { CurrentController } from './current.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Current, CurrentFactory } from './scheme/current.scheme';

@Module({
  imports:[MongooseModule.forFeature([{name: Current.name, schema:CurrentFactory }])],
  controllers: [CurrentController],
  providers: [CurrentService]
})
export class CurrentModule {}
