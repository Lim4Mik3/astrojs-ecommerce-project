import { ProductItem } from "../dtos/IProductContentResponse";
import { ProductPhoto } from "../models/ProductModel";
import { ProductModel } from "../models/ProductModel";
import type { Document } from "@contentful/rich-text-types";

export default {
  toDomain({ fields, sys }: ProductItem): ProductModel {
    return {
      id: sys.id,
      title: fields.title,
      description: fields.description as Document[],
      price: fields.price,
      stock: fields.stock,
      photos: fields.photos.map(
        (photo): ProductPhoto => ({
          id: photo.sys.id,
          content_type: photo.sys.contentType as unknown as string,
          created_at: photo.sys.createdAt,
          file_name: photo.fields.file.fileName,
          path: "https:" + photo.fields.file.url,
          title: photo.fields.title,
        })
      ),
    };
  },
};
