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

  update(id: string, createCurrentDto: CreateCurrentDto) {
    this.CurrentModel.findByIdAndRemove(id);
    const newCurrent = new this.CurrentModel(createCurrentDto);
    return newCurrent.save();
  }


  remove(id: string) {
    return this.CurrentModel.findByIdAndRemove(id);
  }
}
