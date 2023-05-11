import FlowerShopLogo from "@components/react-components/FlowerShopLogo";
import { memo } from "react";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";

interface MenuItem {
  title: string;
  path: string;
}

const MENU: MenuItem[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Shop",
    path: "/shop",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "About",
    path: "/about",
  },
];

function Header() {
  return (
    <header className="flex items-center justify-between h-24 bg-white overflow-hidden px-32 py-1">
      <FlowerShopLogo />

      <nav className="flex items-center justify-between">
        <ul className="flex list-none font-thin text-xl">
          {MENU.map((menu, index) => {
            const isFirstItem = index === 0;
            const { title } = menu;

            if (isFirstItem) {
              return (
                <li
                  key={index}
                  className={
                    "transition ease-in-out duration-200 hover:text-orange-500 hover:cursor-pointer"
                  }
                >
                  {title}
                </li>
              );
            }

            return (
              <li
                key={index}
                className={
                  "ml-6 transition ease-in-out duration-200 hover:text-orange-500 hover:cursor-pointer"
                }
              >
                {title}
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="flex items-center justify-center">
        <a href="" className="mx-4">
          <FaUserAlt className="text-orange-500" size={22} />
        </a>
        <a href="" className="mr-4">
          <FaShoppingCart className="text-orange-500" size={22} />
        </a>
      </div>
    </header>
  );
}

export default memo(Header);