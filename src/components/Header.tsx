import React from "react";
import Image from "next/image";
import Link from "next/link";
import SearchInput from "./SearchInput";
import GenreDropdown from "./GenreDropdown";

import FavoritesPlacehorder from "./FavoritesPlacehorder";
export default function Header() {
  return (
    <header className="fixed w-full z-20 flex top-0 items-center p-5 bg-gradient-to-t justify-between from-gray-200/0 via-gray-900/25 to-gray-900">
      <Link href="/" className="mr-10">
        <Image
          src="https://links.papareact.com/a943ae"
          width={120}
          height={100}
          alt="Disney Logo"
          className={"cursor-pointer invert dark:invert "}
          // invert
        />
      </Link>
      {/*  */}

      <div className="flex space-x-4 items-center">
        {/* added */}

        <Link href="/favorites">
          <FavoritesPlacehorder />
        </Link>
        {/* added */}
        <GenreDropdown />

        <SearchInput />
      </div>
    </header>
  );
}
