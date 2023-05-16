import FlowerShopLogo from "@components/react-components/FlowerShopLogo";
import { memo } from "react";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { FaShoppingCart } from "@react-icons/all-files/fa/FaShoppingCart";
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
    <header className="w-full bg-white">
      <div className="max-w-[1440px] w-full mx-auto flex items-center justify-between h-24  overflow-hidden px-32 py-1">
        <FlowerShopLogo />

        <nav className="flex items-center justify-between">
          <ul className="flex list-none font-thin text-xl">
            {MENU.map((menu, index) => {
              const isFirstItem = index === 0;
              const { title, path } = menu;

              if (isFirstItem) {
                return (
                  <li
                    key={index}
                    className={
                      "transition ease-in-out duration-200 hover:text-orange-500 hover:cursor-pointer"
                    }
                  >
                    <a href={path}>{title}</a>
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
                  <a href={path}>{title}</a>
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
      </div>
    </header>
  );
}

export default memo(Header);
