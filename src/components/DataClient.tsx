"use client";
import { FaHeartCirclePlus } from "react-icons/fa6";
import { useState, useEffect } from "react";
import { TbMessageReport } from "react-icons/tb";
import { addMovie, removeItem } from "@/lib/redux/slices/FavoriteMovie";
import { useDispatch, useSelector } from "react-redux";

function DataClient({ data }) {
  const dispatch = useDispatch();
  const storedColor =
    localStorage.getItem(`favoriteColor-${data.id}`) || "white";
  const [color, setColor] = useState(storedColor);

  const favoriteMovies = useSelector((store) => store.favorite.movies);
  const isMovieInFavorites = favoriteMovies.some(
    (movie) => movie.id === data.id
  );

  useEffect(() => {
    setColor(isMovieInFavorites ? "red" : "white");
  }, [isMovieInFavorites]);

  const handleClick = () => {
    const newColor = color === "white" ? "red" : "white";
    setColor(newColor);
    localStorage.setItem(`favoriteColor-${data.id}`, newColor);

    if (color === "white") {
      dispatch(addMovie(data));
    } else if (color === "red") {
      dispatch(removeItem());
    }
  };

  return (
    <div className="flex gap-5">
      <FaHeartCirclePlus
        title="Add To Favorites"
        className={`hover:scale-110 cursor-pointer`}
        size={25}
        style={{ color: color }}
        onClick={handleClick}
      />
      <TbMessageReport
        size={25}
        title="Report Problem"
        className={`hover:scale-110 cursor-pointer`}
      />
    </div>
  );
}

export default DataClient;
