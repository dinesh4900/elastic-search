import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ISales } from '../interface/sales.interface';
import { BaseDocument } from 'src/base/schema/base.schema';

@Schema()
export class Sales extends BaseDocument implements ISales {
  @Prop({ required: true })
  productId: string;

  @Prop()
  productName: string;

  @Prop()
  category: string[];

  @Prop()
  actualPrice: number;

  @Prop()
  discountedPrice: number;

  @Prop()
  discountPercentage: number;

  @Prop()
  rating: number;

  @Prop()
  ratingCount: number;
}

export type SalesDocument = Sales & Document;
export const SalesSchema = SchemaFactory.createForClass(Sales);
