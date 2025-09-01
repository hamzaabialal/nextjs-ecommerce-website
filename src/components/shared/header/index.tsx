import Image from "next/image";
import Link from "next/link";
import Search from "./search";
import { menu } from "@/lib/menu";
import { MenuIcon, ShoppingCartIcon, UserIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-black text-white">
      {/* Row 1: Logo + Search + Sign In + Cart */}
      <div className="px-4 flex items-center justify-between py-3 border-b border-gray-700">
        {/* Logo */}
        <div>
          <Link href="/home" className="flex items-center gap-2">
            <Image
              src="/amazon-tile.svg"
              width={40}
              height={40}
              alt="logo"
            />
            <span className="font-bold text-lg">Shopping</span>
          </Link>
        </div>

        {/* Search */}
        <div className="flex-1 px-6 max-w-2xl">
          <Search />
        </div>

        {/* Sign In + Cart */}
        <div className="flex items-center gap-6">
          <Link
            href="/signin"
            className="flex items-center gap-1 hover:text-gray-300"
          >
            <UserIcon className="h-5 w-5" />
            <span>Sign In</span>
          </Link>
          <Link
            href="/cart"
            className="flex items-center gap-1 hover:text-gray-300"
          >
            <ShoppingCartIcon className="h-5 w-5" />
            <span className="font-bold">Cart</span>
          </Link>
        </div>
      </div>

      {/* Row 2: "All" + Menu Links */}
      <div className="px-4 flex items-center gap-6 py-2 bg-gray-900 text-sm overflow-x-auto">
        {/* All Button (styled like other links) */}
        <Link
          href="#"
          className="flex items-center gap-2 hover:text-gray-300 whitespace-nowrap"
        >
          <MenuIcon className="h-5 w-5" />
          All
        </Link>

        {/* Menu Links */}
        {menu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hover:text-gray-300 whitespace-nowrap"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </header>
  );
}
