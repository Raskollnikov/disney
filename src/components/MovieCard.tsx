import React from "react";
import { Movie } from "../../types";
import Image from "next/image";
import getImagePath from "@/lib/getImagePath";
import Link from "next/link";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div className="relative text-white flex-shrink-0 cursor-pointer transform hover:scale-105 transition duration-200 ease-out hover:drop-shadow-lg">
      <Link href={`/about/${movie.id}`}>
        <div className="dark:absolute dark:inset-0 dark:bg-gradient-to-b dark:from-gray-200/0 dark:via-gray-900/10 to-gray-300 dark:to-[#1A1C29]/80 z-10" />
        <p className="absolute z-20 bottom-5 left-5">{movie.title}</p>

        <Image
          className="w-fit lg:min-w-[400px] h-56 object-cover object-center 
        shadow-md shadow-gray-900 drop-shadow-xl rounded-sm"
          alt={movie.title}
          width={1920}
          height={1080}
          key={movie.id}
          src={getImagePath(movie.backdrop_path || movie.poster_path)}
        />
      </Link>
    </div>
  );
}
