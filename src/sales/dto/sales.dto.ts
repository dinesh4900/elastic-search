export class CreateSalesDto {
  product_id: string;
  product_name: string;
  category?: string;
  discounted_price?: string;
  actual_price?: string;
  discount_percentage?: string;
  rating?: number;
  rating_count?: string;
}

export class UpdateSalesDto {
  name: string;
  age: number;
  email: string;
}