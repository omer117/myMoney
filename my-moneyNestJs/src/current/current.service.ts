import { Injectable } from '@nestjs/common';
import { CreateCurrentDto } from './dto/create-current.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Current, CurrentDocument } from './scheme/current.scheme';
import { Model } from 'mongoose';
import { Logger } from '@nestjs/common/services';


@Injectable()
export class CurrentService {
  constructor(@InjectModel(Current.name) private CurrentModel: Model<CurrentDocument>) { }
  create(createCurrentDto: CreateCurrentDto) {
    const newCurrent = new this.CurrentModel(createCurrentDto);
    return newCurrent.save();
  }


  findAll() {
    return this.CurrentModel.find();
  }

  findOne(id: string) {
    Logger.log(id)
    return this.CurrentModel.findById(id);
  }

  async update(id: string, createCurrentDto: CreateCurrentDto) {
    await this.CurrentModel.findByIdAndUpdate(id,createCurrentDto);
  }

  async updateAmount(id: string, amount : Object) {
    const oldCurrent = await this.CurrentModel.findById(id)
    let newAmount = oldCurrent.amount + amount.amount
    oldCurrent.amount = newAmount
    return this.CurrentModel.findByIdAndUpdate(id, oldCurrent)
  }



  remove(id: string) {
    return this.CurrentModel.findByIdAndRemove(id);
  }
}
