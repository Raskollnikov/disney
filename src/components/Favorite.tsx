"use client";
import MoviesCarousel from "@/components/MoviesCarousel";
import { useSelector } from "react-redux";
import { Roboto } from "next/font/google";
import { useEffect, useState } from "react";
import Link from "next/link";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Favorite() {
  const store = useSelector((store: any) => store.favorite.movies);
  const [isVertical, setIsVertical] = useState<boolean>(
    window.innerWidth <= 767
  );

  useEffect(() => {
    const handleResize = () => {
      setIsVertical(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="my-[100px] mx-5">
      <p
        className={`${roboto.className} text-2xl dark:text-white text-[#1A1C29]`}
      >
        {store.length == 0 ? "No Movies Yet" : " Favorites"}
      </p>

      <MoviesCarousel movies={store} title="" isVertical={isVertical} />

      {store.length == 0 && (
        <div
          className={`font-bold  text-white text-4xl text-center ${roboto.className}`}
        >
          <Link href="/">
            Search for <span className="text-purple-400 underline">movies</span>
          </Link>
        </div>
      )}
    </div>
  );
}
