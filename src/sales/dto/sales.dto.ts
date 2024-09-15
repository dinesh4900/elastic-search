export class CreateSalesDto {
  productId: string;
  productName: string;
  category?: string[];
  discountedPrice?: number;
  actualPrice?: number;
  discountPercentage?: number;
  rating?: number;
  ratingCount?: number;
}

export class UpdateSalesDto {
  name: string;
  age: number;
  email: string;
}