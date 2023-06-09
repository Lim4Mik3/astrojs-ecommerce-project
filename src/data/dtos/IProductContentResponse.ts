// Generated by https://quicktype.io

export interface IProductContenfulResponse {
  sys: IProductContenfulResponseSys;
  total: number;
  skip: number;
  limit: number;
  items: ProductItem[];
  includes: Includes;
}

export interface Includes {
  Asset: Asset[];
}

export interface Asset {
  metadata: Metadata;
  sys: AssetSys;
  fields: AssetFields;
}

export interface AssetFields {
  title: string;
  description: string;
  file: File;
}

export interface File {
  url: string;
  details: Details;
  fileName: string;
  contentType: string;
}

export interface Details {
  size: number;
  image: Image;
}

export interface Image {
  width: number;
  height: number;
}

export interface Metadata {
  tags: any[];
}

export interface AssetSys {
  space: ContentType;
  type: string;
  id: string;
  revision: number;
  createdAt: string;
  updatedAt: string;
  environment: ContentType;
  locale: string;
  contentType?: ContentType;
}

export interface ContentType {
  sys: ContentTypeSys;
}

export interface ContentTypeSys {
  id: ID;
  type: Type;
  linkType: LinkType;
}

export enum ID {
  Master = "master",
  Product = "product",
  The1X2Ggthfjioa = "1x2ggthfjioa",
}

export enum LinkType {
  ContentType = "ContentType",
  Environment = "Environment",
  Space = "Space",
}

export enum Type {
  Link = "Link",
}

export interface ProductItem {
  metadata: Metadata;
  sys: AssetSys;
  fields: ItemFields;
}

export interface ItemFields {
  title: string;
  description: Description[];
  photos: Asset[];
  price: number;
  stock: number;
}

export interface Description {
  data: Data;
  content: DescriptionContent[];
  nodeType: string;
}

export interface DescriptionContent {
  data: Data;
  content: ContentContent[];
  nodeType: string;
}

export interface ContentContent {
  data: Data;
  marks: any[];
  value: string;
  nodeType: string;
}

export interface Data {}

export interface IProductContenfulResponseSys {
  type: string;
}
