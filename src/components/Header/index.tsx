export default function Header() {
  return (
    <header className="flex align-middle justify-between h-24 bg-red-500 overflow-hidden px-20 py-1">
      <div className="flex">
        Flower
        <p className="ml-1 flex">Shop</p>
      </div>

      <nav>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Blog</li>
          <li>About</li>
        </ul>
      </nav>
    </header>
  );
}
