import { PostModel } from "@src/data/models/PostModel";
import { formatDate } from "@src/shared/utils/formatDate";
import { memo } from "react";

interface Props {
  post: PostModel;
}

function PostListCard({ post }: Props) {
  return (
    <a href={`/blog/post/${post.id}`}>
      <div className="flex mb-4 opacity-90 shadow-lg transition ease-in-out duration-200 hover:cursor-pointer hover:opacity-100 hover:bg-orange-100">
        <aside className="rounded-tl-2xl rounded-bl-2xl overflow-hidden">
          <img
            src={post.banner}
            alt={post.title}
            className="w-80 h-64 object-cover"
          />
        </aside>
        <div className="flex flex-col" style={{ width: "calc(100% - 320px)" }}>
          <header className="w-full">
            <p className="p-3 text-3xl text-orange-800">{post.title}</p>
            <span className="p-3 text-lg text-zinc-800">
              {formatDate(post.created_at)}
            </span>
          </header>
          <div>
            <p className="p-3">descricao maneiraaaa demais...</p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default memo(PostListCard);
