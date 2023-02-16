export interface ProductProps {
  id: number;
  title: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  thumbnail: string;
  images: string[];
}
export interface ProductDetailProps {
  title: string;
  brand: string;
  category: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  images: string[];
  finalCart: number;
  setFinalCart: Function;
}

export interface ProductCardProps {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  discountPercentage: number;
  finalCart: number;
  setFinalCart: Function;
}

export interface PaymentProductsProps {
  finalCart: FinalCart;
}

export interface FinalCart {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  amount: number;
}
