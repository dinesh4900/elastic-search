import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Sales extends Document {
  @Prop({ required: true })
  product_id: string;

  @Prop()
  product_name: string;

  @Prop()
  category: string;

  @Prop()
  discounted_price: number;

  @Prop()
  actual_price: number;

  @Prop()
  discount_percentage: number;

  @Prop()
  rating: number;

  @Prop()
  rating_count: number;
}

export type TaskDocument = Sales & Document;
export const SalesSchema = SchemaFactory.createForClass(Sales);
