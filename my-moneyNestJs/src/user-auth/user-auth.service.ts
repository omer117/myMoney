import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserAuthDto } from './dto/create-user-auth.dto';
import { User, UserDocument } from './scheme/user-auth.scheme';

@Injectable()
export class UserAuthService {
  constructor(@InjectModel(User.name) private UserModel: Model<UserDocument>) { }
  create(createUserAuthDto: CreateUserAuthDto) {
    const newUser = new this.UserModel(createUserAuthDto);
    return newUser.save()
  }


  findAll() {
    return this.UserModel.find();
  }

  findOne(id: string) {
  return this.UserModel.findById(id); 
  }

  update(id: string , createUserDto: CreateUserAuthDto) {
    this.UserModel.findByIdAndRemove(id);
    const newUser =  new this.UserModel(createUserDto)
    return newUser.save();
  }

  remove(id: string) {
  return this.UserModel.findByIdAndRemove(id);
  }
}
