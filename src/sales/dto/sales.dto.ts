export class CreateSalesDto {
  product_id: string;
  product_name: string;
  category?: string[];
  discounted_price?: number;
  actual_price?: number;
  discount_percentage?: number;
  rating?: number;
  rating_count?: string;
}

export class UpdateSalesDto {
  name: string;
  age: number;
  email: string;
}