import type { Document } from "@contentful/rich-text-types";

export interface ProductModel {
  id: string;
  title: string;
  description: Document[];
  photos: ProductPhoto[];
  price: number;
  stock: number;
}

export interface ProductPhoto {
  id: string;
  path: string;
  created_at: string;
  content_type: string;
  file_name: string;
  title: string;
}
