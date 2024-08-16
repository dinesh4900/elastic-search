import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Sales extends Document {
  @Prop({ required: true })
  name: string;

  @Prop()
  age: number;

  @Prop()
  email: string;
}

export type TaskDocument = Sales & Document;
export const SalesSchema = SchemaFactory.createForClass(Sales);
