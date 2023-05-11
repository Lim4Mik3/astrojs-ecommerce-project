import { FaCartPlus } from "@react-icons/all-files/fa/FaCartPlus";

interface Props {
  image: string;
  title: string;
  price: number;
}

export default function ProductCard({ image, title, price }: Props) {
  return (
    <div className="bg-white p-4 rounded-md hover:cursor-pointer hover:scale-105 transition ease-in-out duration-200">
      <img
        src={image}
        alt={title}
        className="w-64 h-56 object-cover rounded-lg"
      />

      <p className="mt-3 text-lg">{title}</p>

      <footer className="mt-6 flex items-center justify-between">
        <span className="text-sm text-zinc-400 font-medium">{price}$</span>

        <button
          type="button"
          className="flex items-center justify-center text-sm text-orange-500 font-medium pl-3 pt-3 hover:text-orange-700 transition ease-in-out duration-200"
        >
          <FaCartPlus size={14} className="mr-2" />
          Add to cart
        </button>
      </footer>
    </div>
  );
}
