import { IModelState } from "src/base/interface/base.interface";

export interface ISales extends IModelState {
  productId: string;
  productName: string;
  category?: string[];
  discountedPrice?: number;
  actualPrice?: number;
  discountPercentage?: number;
  rating?: number;
  ratingCount?: number;
  currency?: string
  aboutProduct?: string
}