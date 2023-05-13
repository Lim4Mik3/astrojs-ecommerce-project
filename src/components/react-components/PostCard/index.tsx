import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";
import { FaRegEye } from "@react-icons/all-files/fa/FaRegEye";
import { PostModel } from "@src/data/models/PostModel";
import { formatDate } from "@src/shared/utils/formatDate";
import { getRandomPhoto } from "@src/shared/utils/getRandomPhoto";

interface Props {
  _post: PostModel;
}

export default function PostCard({ _post }: Props) {
  const { author, id, created_at, post, title, banner, author_photo } = _post;

  return (
    <a
      href={`/post/${id}`}
      className="bg-white rounded-lg hover:cursor-pointer hover:scale-105 drop-shadow-2xl transition ease-in-out duration-200 max-w-[380px]"
    >
      <header className="flex items-center justify-between p-3">
        <div className="flex items-center">
          <img
            src={author_photo}
            alt="Random photo author fic"
            className="max-w-[40px] max-h-[40px] rounded-full"
          />
          <span className="text-sm text-zinc-950 ml-3">{author}</span>
        </div>

        <span className="text-xs text-zinc-600">{formatDate(created_at)}</span>
      </header>

      <div>
        <img
          src={banner}
          alt={title}
          className="max-w-[380px] max-h-[240px] w-full object-cover mb-4"
        />
        <span className="text-xl ml-2 font-medium flex-wrap">{title}</span>
        <p className="ml-3 mt-3 text-zinc-600 leading-6">lorem ipsum</p>
      </div>

      <footer className="mt-6 p-4 flex items-center justify-between">
        <div className="flex items-center justify-center">
          <span className="flex items-center justify-center text-xs text-zinc-600">
            <AiFillHeart size={12} className="mr-1" />
            {Math.floor(Math.random() * 800)}
          </span>
          <span className="flex items-center justify-center ml-3 text-xs text-zinc-600">
            <FaRegEye size={12} className="mr-1" />
            {Math.floor(Math.random() * 5000)}
          </span>
        </div>

        <span className="text-zinc-900 text-sm">Ler mais...</span>
      </footer>
    </a>
  );
}
