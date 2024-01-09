"use client";
import { useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";

export default function FavoritesPlacehorder() {
  const store = useSelector((store: any) => store.favorite.movies);

  return (
    <div className="relative mr-3" title="Favorites">
      <FaHeart size={27} color="red" />
      <div className="absolute bottom-[-2px] font-bold text-white right-[0.5px]">
        {store.length > 0 && store.length}
      </div>
    </div>
  );
}
