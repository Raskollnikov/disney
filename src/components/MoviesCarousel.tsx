import Link from "next/link";
import { Movie } from "../../types";
import MovieCard from "./MovieCard";

type Props = {
  title?: string;
  movies?: Movie[] | any;
  isVertical?: boolean;
};

export default function MoviesCarousel({ title, movies, isVertical }: Props) {
  return (
    <div className="z-50">
      <h2 className="text-xl font-bold px-10 py-2 text-white dark:text-white">
        {title}
      </h2>
      <div
        className={`${
          isVertical && "flex-col space-x-0 space-y-12"
        } flex space-x-4 overflow-scroll px-5 lg:px-10 py-5 scrollbar-hide`}
      >
        {isVertical
          ? movies?.map((movie: Movie) => (
              <div
                key={movie.id}
                className={
                  isVertical &&
                  "flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5"
                }
              >
                <MovieCard movie={movie} />
                <div className="max-w-2xl text-black dark:text-white">
                  <Link href={`/about/${movie.id}`}>
                    <p className="font-bold">
                      {movie.title} ({movie.release_date?.split("-")[0]})
                    </p>
                  </Link>
                  <hr className="mb-3" />
                  <p className="">{movie.overview}</p>
                </div>
              </div>
            ))
          : movies?.map((movie: Movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
      </div>
    </div>
  );
}
