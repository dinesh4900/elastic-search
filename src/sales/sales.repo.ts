import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { BaseRepo } from 'src/base/base.repo';
import { ISales } from './interface/sales.interface';
import { SalesDocument, Sales } from './schema/sales.schema';

@Injectable()
export class SalesRepo extends BaseRepo<SalesDocument, ISales> {
  constructor(@InjectModel(Sales.name) public model: Model<SalesDocument>) {
    super(model);
  }
}
