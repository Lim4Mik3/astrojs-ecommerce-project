import type { Document } from "@contentful/rich-text-types";

export interface PostModel {
  id: string;
  title: string;
  author: string;
  author_photo: string;
  post: Document;
  banner: string;
  created_at: string;
}
