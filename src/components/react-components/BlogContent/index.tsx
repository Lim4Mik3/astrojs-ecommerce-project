import { motion } from "framer-motion";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { customRenderConfig } from "@src/lib/contentful/custom-render-nodes";
import {
  BlogPostCtx,
  blogCtx,
  setBannerHeight,
} from "@src/stores/BlogPostStore";
import { useStore } from "@nanostores/react";
import { useRef } from "react";

export const MIN_POST_BANNER_HEIGHT = 180;
export const MAX_POST_BANNER_HEIGHT = 380;

interface Props {
  _ctx: BlogPostCtx;
}

export function BlogContent({ _ctx: { post } }: Props) {
  const ArticleElementREF = useRef<HTMLElement>();
  const { banner_height } = useStore(blogCtx);

  function handleContentScroll() {
    if (!ArticleElementREF.current)
      throw new Error(
        "Something is wrong with the current ArticleElementREF of the article blog content"
      );

    if (banner_height === MIN_POST_BANNER_HEIGHT) return;

    const articleRef = ArticleElementREF.current;

    const currentArticleScroll = articleRef.scrollTop;
    const currentpercentage = currentArticleScroll / MAX_POST_BANNER_HEIGHT;
    const newBannerHeight = Math.floor(
      MAX_POST_BANNER_HEIGHT +
        currentpercentage * (-MIN_POST_BANNER_HEIGHT - MAX_POST_BANNER_HEIGHT)
    );

    if (newBannerHeight >= MIN_POST_BANNER_HEIGHT) {
      setBannerHeight(newBannerHeight);
    } else {
      setBannerHeight(MIN_POST_BANNER_HEIGHT);
    }
  }

  return (
    <div className="w-full h-full overflow-hidden flex flex-col justify-end">
      <motion.article
        className={`bg-white max-w-[1000px] pt-16 px-32 w-full mx-auto overflow-auto shadow-lg pb-24`}
        style={{ height: `calc(100% - ${banner_height}px)` }}
        ref={ArticleElementREF}
        onScroll={handleContentScroll}
        dangerouslySetInnerHTML={{
          __html: documentToHtmlString(post.post, customRenderConfig),
        }}
      ></motion.article>
    </div>
  );
}
