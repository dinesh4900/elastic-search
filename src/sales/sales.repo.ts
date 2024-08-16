import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Sales } from './schema/sales.schema';
import { CreateSalesDto, UpdateSalesDto } from './dto/sales.dto';


@Injectable()
export class SalesRepo {
  constructor(@InjectModel(Sales.name) private readonly salesModel: Model<Sales>) { }

  async create(input: CreateSalesDto): Promise<Sales> {
    const createdSale = new this.salesModel(input);
    return createdSale.save();
  }

  async findAll(): Promise<Sales[]> {
    return this.salesModel.find().exec();
  }

  async findOne(id: string): Promise<Sales | null> {
    return this.salesModel.findById(id).exec();
  }

  async update(id: string, input: Partial<UpdateSalesDto>): Promise<Sales | null> {
    return this.salesModel.findByIdAndUpdate(id, input, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return this.salesModel.findByIdAndDelete(id).exec();
  }
}
