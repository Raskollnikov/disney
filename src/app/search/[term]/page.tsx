import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "search result",
  description: "search result for movie",
};

type Props = {
  params: {
    term: string;
  };
};

async function SearchPage({ params: { term } }: Props) {
  if (!term) {
    return notFound();
  }
  const termToUse = decodeURI(term);
  //   api call to get searched movies
  const movies = await getSearchedMovies(termToUse);
  const popularMovies = await getPopularMovies();
  // api call to get Popular Movies
  return (
    <div className="max-w-7xl mx-auto dark:text-white ">
      <div className="flex flex-col space-y-5 mt-32 xl:mt-42 ">
        <h1 className="text-6xl font-bold px-10">Results for {termToUse}</h1>
        <MoviesCarousel title={"Movies"} movies={movies} isVertical />
        <MoviesCarousel title={"You may also like"} movies={popularMovies} />
      </div>
    </div>
  );
}

export default SearchPage;
