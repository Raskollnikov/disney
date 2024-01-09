import CarouselBanner from "@/components/CarouselBanner";
import MoviesCarousel from "@/components/MoviesCarousel";
import { Metadata } from "next";
import {
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from "@/lib/getMovies";

export const metadata: Metadata = {
  title: "Best Movies",
  description: "top rated movies for free",
};

export default async function Home() {
  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const popularMovies = await getPopularMovies();

  return (
    <main>
      <CarouselBanner />
      <div className="flex flex-col space-y-2 xl:-mt-48 bg-[#1A1C29]">
        <MoviesCarousel movies={upcomingMovies} title="Upcoming" />
        <MoviesCarousel movies={topRatedMovies} title="Top Rated" />
        <MoviesCarousel
          movies={popularMovies}
          title="Popular"
          isVertical={false}
        />
      </div>
    </main>
  );
}
