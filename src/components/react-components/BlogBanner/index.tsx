import { motion } from "framer-motion";
import { BlogPostCtx, blogCtx } from "@src/stores/BlogPostStore";
import { useStore } from "@nanostores/react";
import { useScroll } from "@src/hooks/useScroll";

interface Props {
  _ctx: BlogPostCtx;
}

export function BlogBanner({ _ctx }: Props) {
  const { banner_height } = useStore(blogCtx);
  const { banner_image, post } = _ctx;

  return (
    <motion.div
      id="post-banner"
      className="w-full bg-red-600/10 fixed top-0 overflow-hidden shadow-2xl"
      style={{
        minHeight: banner_height,
        maxHeight: banner_height,
      }}
    >
      <img
        src={banner_image}
        alt={post.title}
        className="w-full h-full object-cover post-banner-photo"
      />

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex px-5 max-w-[1300px] w-full z-10">
        <h1 className="text-white text-5xl z-10 drop-shadow-2xl shadow-slate-950 bg-clip-text">
          {post.title}
        </h1>
      </div>

      <div className="banner-overlay"></div>
    </motion.div>
  );
}
