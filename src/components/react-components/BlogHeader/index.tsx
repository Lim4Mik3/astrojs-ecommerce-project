import { memo } from "react";

import { motion } from "framer-motion";
import FlowerBlogLogo from "../FlowerBlogLogo";
import {
  BlogPostCtx,
  MIN_POST_BANNER_HEIGHT,
  blogCtx,
} from "@src/stores/BlogPostStore";
import { useStore } from "@nanostores/react";

interface Props {
  _ctx?: Partial<BlogPostCtx>;
}

function BlogHeader({ _ctx }: Props) {
  const { banner_height } = useStore(blogCtx);

  const {
    palette: { main, theme, light, dark },
  } = _ctx;

  const isBannerReachedMiddle = banner_height === MIN_POST_BANNER_HEIGHT;

  const menuItemsColor = theme === "light" ? dark : light;
  const isNOTOnTheListPage = !window.location.href.endsWith("/blog");

  return (
    <motion.header
      initial={{ opacity: 1, y: 0 }}
      animate={{
        opacity: isBannerReachedMiddle ? 0 : 1,
        y: isBannerReachedMiddle ? -100 : 0,
      }}
      transition={{ duration: 0.3 }}
      className={`w-full fixed z-10 top-0 backdrop-blur-md border-b`}
      style={{
        backgroundColor: `rgba(${main}, 0.15)`,
        borderBottomColor: `rgba(${main}, 0.2)`,
      }}
    >
      <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between h-24  overflow-hidden px-32 py-1">
        <FlowerBlogLogo color={main} />

        <nav>
          <ul className="flex items-center justify-between">
            {isNOTOnTheListPage && (
              <li
                className="hover:underline uppercase ml-4 first:ml-0 text-sm text-zinc-500 hover:text-orange-600 transition ease-in-out duration-200 hover:cursor-pointer"
                style={{ color: `rgb(${menuItemsColor})` }}
              >
                <a href="/blog">Todos posts</a>
              </li>
            )}
            <li
              className="hover:underline uppercase ml-4 text-sm text-zinc-500 hover:text-orange-600 transition ease-in-out duration-200 hover:cursor-pointer"
              style={{ color: `rgb(${menuItemsColor})` }}
            >
              Sobre o blog
            </li>
            <li
              className="hover:underline uppercase ml-4 text-sm text-zinc-500 hover:text-orange-600 transition ease-in-out duration-200 hover:cursor-pointer"
              style={{ color: `rgb(${menuItemsColor})` }}
            >
              <a href="/shop">Shop</a>
            </li>
            <li
              className="hover:underline uppercase ml-4 text-sm text-zinc-500 hover:text-orange-600 transition ease-in-out duration-200 hover:cursor-pointer"
              style={{ color: `rgb(${menuItemsColor})` }}
            >
              <a href="/">Voltar a Home</a>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}

export default memo(BlogHeader);
