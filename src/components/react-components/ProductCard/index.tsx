interface Props {
  image: string;
  title: string;
  price: number;
}

export default function ProductCard({ image, title, price }: Props) {
  return (
    <div className="bg-white p-4 rounded-md">
      <img
        src={image}
        alt={title}
        className="w-64 h-56 object-cover rounded-lg"
      />

      <b>{title}</b>

      <footer>
        <span>{price}</span>

        <button type="button">Add to cart</button>
      </footer>
    </div>
  );
}
