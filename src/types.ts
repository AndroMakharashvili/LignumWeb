export interface Artwork {
  id: string;
  title: string;
  titleEn?: string;
  category: string;
  tag?: string;
  tagEn?: string;
  description: string;
  descriptionEn?: string;
  image: string;
  dimensions: string;
  dimensionsEn?: string;
  materials: string[];
  materialsEn?: string[];
  stock: number;
  createdAt: string;
  price?: string;
}

export type Category = 'All' | 'Bowls' | 'Boards' | 'Furniture' | 'Decor';

export interface CustomOrderRequest {
  id: string;
  customerName: string;
  email: string;
  category: string;
  description: string;
  dimensions: string;
  materialPreference: string;
  colorPalette: string[];
  estimatedPriceRange: [number, number];
  status: 'Pending' | 'Approved' | 'Withdrawn';
  createdAt: string;
}

export interface ArtisanStats {
  totalViews: number;
  totalInquiries: number;
  soldItemsCount: number;
  totalRevenue: number;
}
