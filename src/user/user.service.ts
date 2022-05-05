import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { IUser } from '../types';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private userModel: Model<IUser>) {}

  async create(createUserInput: CreateUserInput): Promise<IUser> {
    const saltRounds = 10;
    const password = createUserInput.password;
    createUserInput.password = await bcrypt.hash(password, saltRounds);
    const createdUser = new this.userModel(createUserInput);
    return await createdUser.save();
  }

  async findAll(): Promise<IUser[]> {
    return await this.userModel.find().exec();
  }
  // perhaps change findById to findOne
  async findOne(id: string): Promise<IUser> {
    return await this.userModel.findById(id);
  }

  async update(id: string, updateUserInput: UpdateUserInput): Promise<IUser> {
    return await this.userModel.findByIdAndUpdate(id, updateUserInput, {
      new: true,
    });
  }

  async remove(id: string): Promise<IUser> {
    return await this.userModel.findByIdAndRemove(id);
  }
}
