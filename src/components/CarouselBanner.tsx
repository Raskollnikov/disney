import { getDiscoverMovies } from "@/lib/getMovies";
import React from "react";
import Carousel from "./Carousel";

type Props = {
  id?: string;
  keyWords?: string;
};
async function CarouselBanner({ id, keyWords }: Props) {
  const movies = await getDiscoverMovies(id, keyWords);
  return <Carousel movies={movies} />;
}

export default CarouselBanner;
