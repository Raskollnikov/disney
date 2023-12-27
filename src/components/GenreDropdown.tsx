import React from "react";
import { Genres } from "../../types";
import Link from "next/link";

async function GenreDropdown() {
  const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";

  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
    },
    next: {
      //
      revalidate: 60 * 60 * 24, // 24hr
    },
  };

  const request = await fetch(url, options);
  const data = (await request.json()) as Genres;

  return (
    <div className="hidden lg:block">
      <select
        className="bg-transparent outline-none rounded-xl
       text-white h-full dark:text-white dark:bg-transparent"
      >
        {data.genres.map((each) => (
          <option
            key={each.id}
            value={each.name}
            className="p-2 dark:text-[#1A1C29]"
          >
            {each.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default GenreDropdown;
