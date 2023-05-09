import { memo } from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

import FlowerShopLogo from "@components/FlowerShopLogo";

function Footer() {
  return (
    <footer className="px-20 py-10 bg-zinc-700 grid grid-cols-3 gap-8">
      <div>
        <FlowerShopLogo />
        <p className="mt-3 font-thin text-zinc-300 text-justify">
          Some random stuff about flower shop and some more info cuz this box
          had to get fill Some random stuff about flower shop and some more info
          cuz this box had to get fill Some random stuff about flower shop and
          some more info cuz this box had to get fill
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col items-center justify-center text-zinc-200 font-thin">
          <span className="mb-5">Links</span>
          <a className="mt-1" href="#">
            Home
          </a>
          <a className="mt-1" href="#">
            Shop
          </a>
          <a className="mt-1" href="#">
            Blog
          </a>
          <a className="mt-1" href="#">
            About
          </a>
        </div>
        <div className="flex flex-col items-center justify-center text-zinc-200 font-thin">
          <span className="mb-5">Links</span>
          <a className="mt-1" href="#">
            Home
          </a>
          <a className="mt-1" href="#">
            Shop
          </a>
          <a className="mt-1" href="#">
            Blog
          </a>
          <a className="mt-1" href="#">
            About
          </a>
        </div>
      </div>

      <div className="font-thin text-zinc-200">
        <span>Contact</span>

        <p className="flex items-center my-7">
          <FaMapMarkerAlt className="mr-2 text-zinc-500" /> 26985 Brighton Lane,
          Lake Forest, CA
        </p>
        <p className="flex items-center mb-7">
          <MdAlternateEmail className="mr-2 text-zinc-500" />{" "}
          support@Flowers.com
        </p>
        <p className="flex items-center">
          <FaPhoneAlt className="mr-2 text-zinc-500" /> +1 236 5489
        </p>
      </div>
    </footer>
  );
}

export default memo(Footer);
