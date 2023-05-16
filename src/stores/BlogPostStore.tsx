import { atom } from "nanostores";
import type { PostModel } from "@src/data/models/PostModel";

export const MIN_POST_BANNER_HEIGHT = 180;
export const MAX_POST_BANNER_HEIGHT = 380;

export interface PostPageColorsPalette {
  theme: "light" | "dark";
  main: number[];
  dark: number[];
  light: number[];
}

export interface BlogPostCtx {
  post: PostModel;
  banner_height: number;
  banner_image: string;
  palette: PostPageColorsPalette;
}

const INITIAL_VALUE: Partial<BlogPostCtx> = {
  banner_height: MAX_POST_BANNER_HEIGHT,
};

export const blogCtx = atom<Partial<BlogPostCtx>>(INITIAL_VALUE);

export function setBannerHeight(height: number) {
  blogCtx.set({
    ...blogCtx.get(),
    banner_height: height,
  });
}

export function setBlogPost(post: PostModel) {
  blogCtx.set({
    ...blogCtx.get(),
    post,
  });
}
