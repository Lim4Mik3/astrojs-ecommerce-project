import { EntrySkeletonType } from "contentful";
import { contentfulClient } from "src/lib/contentful";
import { ProductModel } from "../models/ProductModel";

import ProductDataMapper from "../data-mappers/ProductDataMapper";
import { IProductContenfulResponse } from "../dtos/IProductContentResponse";
import { ProductItem } from "../dtos/IProductContentResponse";

export async function getProducts(): Promise<ProductModel[]> {
  const entries = await contentfulClient.getEntries<
    EntrySkeletonType<IProductContenfulResponse>
  >({
    content_type: "product",
  });

  if (entries.total === 0) {
    return [];
  }

  return entries.items.map((item) =>
    ProductDataMapper.toDomain(item as unknown as ProductItem)
  );
}
