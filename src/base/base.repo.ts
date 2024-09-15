import {
  Document, FilterQuery, Model, Types, UpdateQuery,
} from 'mongoose';
import { IModelState } from './interface/base.interface';
import { ObjectId } from 'mongodb';
import { NotFoundException } from '@nestjs/common';

export abstract class BaseRepo<
  TDocument extends Document<any>,
  TState extends IModelState,
> {

  constructor(protected model: Model<TDocument>) { }

  newId(): string {
    return new Types.ObjectId().toHexString();
  }

  async findById(_id: string) {
    const x: FilterQuery<any> = {
      _id: new ObjectId(_id),
      isDeleted: { $eq: false },
    };
    const doc = await this.model.findOne(x);
    if (!doc) {
      throw new NotFoundException(_id, '_id');
    }

    return doc;
  }

  create(_id: string, state: TState) {
    const doc = new this.model(state);
    doc._id = _id;
    return doc.save();
  }

  async update(_id: string, state: TState) {
    const doc = await this.model.findById(_id);
    await doc.updateOne(state);
    return await this.model.findById(_id);
  }

  async delete(_id: string) {
    const fields: UpdateQuery<any> = {
      isDeleted: true,
    };

    const x: FilterQuery<any> = {
      _id: _id,
      isDefault: { $eq: false },
    };

    const doc = await this.model.findOne(x);
    if (!doc) throw new NotFoundException('Entry not found or Default entry');
    return doc?.updateOne(fields as any);
  }
}