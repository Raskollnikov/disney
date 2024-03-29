import { getData, getSimilarMovies } from "@/lib/getMovies";
import DataClient from "./DataClient";
import { FaImdb } from "react-icons/fa";
import MoviesCarousel from "@/components/MoviesCarousel";

import { GenreInfo, Companies, Countries, spokenLang } from "../../types";
import Comments from "./Comments";
import { IdType } from "../../types";

export default async function DataUi({ id }: IdType) {
  const data = await getData(id);
  const recomendations = await getSimilarMovies(id);

  const {
    genres,
    production_companies,
    overview,
    runtime,
    release_date,
    revenue,
    spoken_languages,
    production_countries,
    vote_average,
    original_title,
  } = data;
  return (
    <div className="text-white bg-[#1A1C29] flex flex-col justify-center items-center max-w-[100%] ">
      <div className="w-[90%] flex flex-col gap-5 justify-center p-4  ">
        <div className="flex w-full justify-between items-center">
          {" "}
          <div className="text-2xl md:text-3xl">
            <span>{original_title}</span> -
            <span>{release_date.slice(0, 4)}</span>{" "}
          </div>
          <DataClient data={data} />
        </div>
        <div className="flex gap-3 flex-col">
          <div className="flex gap-2">
            <span className="text-lg xl:text-xl">available:</span>
            <div className="flex gap-2 text-lg xl:text-xl">
              {spoken_languages.map((each: spokenLang) => (
                <h1 key={each.name}>{each.name}</h1>
              ))}
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <FaImdb color={"orange"} size={40} />

            {vote_average.toFixed(1)}
          </div>
        </div>
      </div>

      <div className="mt-5 w-[90%] p-4 flex flex-col gap-3">
        <div className="flex gap-3">
          <div className="text-lg xl:text-xl">genres:</div>
          <div>
            {genres.map((each: GenreInfo) => (
              <span
                className="text-orange-400 mx-1 font-bold text-lg xl:text-xl"
                key={each.id}
              >
                {each.name},
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3 text-lg xl:text-xl">
          release date:
          <div className="text-orange-400 mx-1 font-bold text-lg xl:text-xl">
            {release_date.slice(0, 4)}
          </div>
        </div>
        <div className="flex gap-3 text-lg xl:text-xll">
          studios:
          <div>
            {production_companies.map((each: Companies) => (
              <span
                key={each.id}
                className="text-orange-400 mx-1 font-bold text-lg xl:text-xl"
              >
                {each.name}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-3 text-lg xl:text-xl">
          duration:
          <div className="text-orange-400 mx-1 font-bold text-lg xl:text-xl">
            {runtime}min
          </div>
        </div>
        <div className="flex gap-3 text-lg xl:text-xl">
          country:
          <div>
            {production_countries.map((each: Countries) => (
              <span
                key={each.name}
                className="text-orange-400 mx-1 font-bold text-lg xl:text-xl"
              >
                {each.name}{" "}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-3 text-lg xl:text-xl">
          revenue:
          <div className="text-orange-400 mx-1 font-bold text-lg xl:text-xl">
            {revenue}$
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-6 text-lg xl:text-xl">
          <div className="text-lg xl:text-xl">overview</div>
          <div className="w-[90%]  my-3">{overview}</div>
        </div>
      </div>

      <div className="flex flex-col p-4 w-[100%] mt-10">
        {recomendations.results.length > 1 && (
          <MoviesCarousel
            title="You May Also Like"
            movies={recomendations.results}
          />
        )}
      </div>

      <Comments id={id} />
    </div>
  );
}
