import { contentfulClient } from "src/lib/contentful";
import { PostModel } from "../models/PostModel";
import { EntrySkeletonType } from "contentful";
import { IPostContentResponse, PostItem } from "../dtos/IPostContentResponse";
import PostDataMapper from "../data-mappers/PostDataMapper";

export async function getPosts(): Promise<PostModel[]> {
  const entries = await contentfulClient.getEntries<
    EntrySkeletonType<IPostContentResponse>
  >({
    content_type: "blogPost",
  });

  if (entries.total === 0) {
    return [];
  }

  return entries.items.map((item) =>
    PostDataMapper.toDomain(item as unknown as PostItem)
  );
}

export async function getUniquePost(postId: string) {
  const entry = await contentfulClient.getEntry(postId);

  if (!entry) {
    throw new Error("not found this resource");
  }

  return PostDataMapper.toDomain(entry as unknown as PostItem);
}
