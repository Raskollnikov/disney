"use client";
import MoviesCarousel from "@/components/MoviesCarousel";
import { useSelector } from "react-redux";

export default function Favorite() {
  const store = useSelector((store) => store.favorite.movies);

  return (
    <div className="my-20">
      <MoviesCarousel movies={store} title="favorites" pinnedOptions={true} />
    </div>
  );
}
