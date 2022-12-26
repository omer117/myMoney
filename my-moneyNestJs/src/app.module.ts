import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CurrentModule } from './current/current.module';
import { ExpenseModule } from './expense/expense.module';
import { IncomeModule } from './income/income.module';
import { ActionModule } from './action/action.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserAuthModule } from './user-auth/user-auth.module';

@Module({
  imports: [CurrentModule, ExpenseModule, IncomeModule, ActionModule
    , MongooseModule.forRoot('mongodb://localhost/mymoney'), UserAuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
