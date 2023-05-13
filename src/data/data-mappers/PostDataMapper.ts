import { PostItem } from "../dtos/IPostContentResponse";
import { PostModel } from "../models/PostModel";
import type { Document } from "@contentful/rich-text-types";

export default {
  toDomain({ fields, sys }: PostItem): Omit<PostModel, "author_photo"> {
    return {
      id: sys.id,
      author: fields.author,
      created_at: sys.createdAt,
      post: fields.post as unknown as Document,
      title: fields.title,
      banner: "https:" + fields.banner.fields.file.url,
    };
  },
};
