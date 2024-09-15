import { Prop, Schema } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export abstract class BaseDocument {
  _id: string;

  @Prop({ type: Boolean, default: false })
  isDeleted: boolean;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop({ type: Boolean, default: true })
  isActive?: boolean;
}
