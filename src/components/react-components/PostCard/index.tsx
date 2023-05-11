import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart";
import { FaRegEye } from "@react-icons/all-files/fa/FaRegEye";

export default function PostCard() {
  return (
    <article className="bg-white rounded-lg hover:cursor-pointer hover:scale-105 drop-shadow-2xl transition ease-in-out duration-200">
      <header className="flex items-center justify-between p-3">
        <div className="flex items-center">
          <img
            src="https://avatars.githubusercontent.com/u/51518726?v=4"
            alt="Leonardo"
            className="max-w-[40px] max-h-[40px] rounded-full"
          />
          <span className="text-sm text-zinc-950 ml-2">Leonardo Oliveira</span>
        </div>

        <span className="text-xs text-zinc-600">20 de fev 2023</span>
      </header>

      <div>
        <img
          src="https://images.unsplash.com/photo-1559672831-b2929e754cb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
          alt="house"
          className="max-w-[380px] max-h-[240px] w-full object-cover mb-4"
        />
        <b className="ml-3 text-xl font-medium">Titulo lindo</b>
        <p className="ml-3 mt-3 text-zinc-600 leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
          quisquam!
        </p>
      </div>

      <footer className="mt-6 p-4 flex items-center justify-between">
        <div className="flex items-center justify-center">
          <span className="flex items-center justify-center text-xs text-zinc-600">
            <AiFillHeart size={12} className="mr-1" />
            15
          </span>
          <span className="flex items-center justify-center ml-3 text-xs text-zinc-600">
            <FaRegEye size={12} className="mr-1" />
            2000
          </span>
        </div>

        <span className="text-zinc-900 text-sm">Read more</span>
      </footer>
    </article>
  );
}
