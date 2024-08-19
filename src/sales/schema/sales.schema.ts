import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Sales extends Document {
  @Prop({ type: String, required: true })
  productId: string;

  @Prop({ type: String, nullable: true })
  product_name: string

  @Prop({ type: [String], nullable: true })
  category: string[]

  @Prop({ type: String, nullable: true })
  discounted_price: string

  @Prop({ type: String, nullable: true })
  actual_price: string

  @Prop({ type: String, nullable: true })
  discount_percentage: string

  @Prop({ type: Number, nullable: true })
  rating: number

  @Prop({ type: Number, nullable: true })
  rating_count: number

  @Prop({ type: [String], nullable: true })
  about_product: string[]

  @Prop({ type: [String], nullable: true })
  user_id: string[]

  @Prop({ type: [String], nullable: true })
  user_name: string[]

  @Prop({ type: String, nullable: true })
  review_id: string

  @Prop({ type: String, nullable: true })
  review_title: string

  @Prop({ type: String, nullable: true })
  review_content: string

  @Prop({ type: String, nullable: true })
  img_link: string

  @Prop({ type: String, nullable: true }) x
  product_link: string
}

export type SalesDocument = Sales & Document;
export const SalesSchema = SchemaFactory.createForClass(Sales);
