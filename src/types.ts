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
}

export interface ProductCardProps {
  id: number;
  title: string;
  thumbnail: string;
  price: number;
  discountPercentage: number;
}
