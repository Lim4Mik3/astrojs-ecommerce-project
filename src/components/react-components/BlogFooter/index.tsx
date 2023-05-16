import { memo } from "react";
import { formatDate } from "@src/shared/utils/formatDate";
import { BlogPostCtx, blogCtx } from "@src/stores/BlogPostStore";
import { useStore } from "@nanostores/react";
import { motion } from "framer-motion";
import { MIN_POST_BANNER_HEIGHT } from "../BlogContent";

interface Props {
  _ctx: BlogPostCtx;
}

function BlogFooter({ _ctx }: Props) {
  const { banner_height } = useStore(blogCtx);

  const {
    post,
    palette: { main, dark, light },
  } = _ctx;

  const isBannerReachedMiddle = banner_height === MIN_POST_BANNER_HEIGHT;

  return (
    <motion.footer
      initial={{ opacity: 1, y: 0 }}
      animate={{
        opacity: isBannerReachedMiddle ? 0 : 1,
        y: isBannerReachedMiddle ? 100 : 0,
      }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-0 border-t w-full max-h-20 h-full backdrop-blur-lg"
      style={{
        backgroundColor: `rgba(${dark}, 0.2)`,
        borderTopColor: `rgba(${dark}, 0.5)`,
      }}
    >
      <div className="max-w-[1000px] w-full mx-auto h-full flex items-center justify-between">
        <div>
          <span className="mr-3 text-sm" style={{ color: `rgb(${main})` }}>
            Publicado em: {formatDate(post.created_at)}
          </span>
        </div>

        <div className="flex items-center ml-auto h-full">
          <span className="mr-3 text-sm" style={{ color: `rgb(${main})` }}>
            Criado por: {post.author}
          </span>

          <img
            src={post.author_photo}
            alt="Random photo author fic"
            className="max-w-[40px] max-h-[40px] rounded-full"
          />
        </div>
      </div>
    </motion.footer>
  );
}

export default memo(BlogFooter);
