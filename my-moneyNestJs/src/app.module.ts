import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CurrentModule } from './current/current.module';
import { ActionModule } from './action/action.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserAuthModule } from './user-auth/user-auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://babybe:SGEwh9FBjtNhAl5K@cluster0.wfrejua.mongodb.net/?retryWrites=true&w=majority')
    , CurrentModule, ActionModule
    , UserAuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
// SGEwh9FBjtNhAl5K