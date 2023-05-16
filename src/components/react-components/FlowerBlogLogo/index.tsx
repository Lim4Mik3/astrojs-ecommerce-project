import { memo } from "react";
import { useStore } from "@nanostores/react";
import { blogCtx } from "@src/stores/BlogPostStore";

interface Props {
  color: number[];
}

function FlowerBlogLogo({ color }: Props) {
  return (
    <div className="flex font-medium text-3xl">
      <p className="text-orange-500">Flower</p>
      <p className="ml-1" style={{ color: `rgb(${color})` }}>
        Blog
      </p>
    </div>
  );
}

export default memo(FlowerBlogLogo);
