import { contentfulClient } from "src/lib/contentful";
import { PostModel } from "../models/PostModel";
import { EntrySkeletonType } from "contentful";
import { IPostContentResponse, PostItem } from "../dtos/IPostContentResponse";
import PostDataMapper from "../data-mappers/PostDataMapper";
import { getRandomPhoto } from "@src/shared/utils/getRandomPhoto";

export async function getPosts(): Promise<PostModel[]> {
  const [entries, photo] = await Promise.all([
    contentfulClient.getEntries<EntrySkeletonType<IPostContentResponse>>({
      content_type: "blogPost",
      locale: "pt-BR",
    }),
    getRandomPhoto("face"),
  ]);

  if (entries.total === 0) {
    return [];
  }

  return entries.items.map((item) => ({
    ...PostDataMapper.toDomain(item as unknown as PostItem),
    author_photo: photo,
  }));
}

export async function getUniquePost(postId: string): Promise<PostModel> {
  const [entry, photo] = await Promise.all([
    contentfulClient.getEntry(postId),
    getRandomPhoto("face"),
  ]);

  if (!entry) {
    throw new Error("not found this resource");
  }

  const formatted_obj = PostDataMapper.toDomain(entry as unknown as PostItem);

  return {
    ...formatted_obj,
    author_photo: photo,
  };
}
