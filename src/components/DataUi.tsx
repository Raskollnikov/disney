import { getData, getSimilarMovies } from "@/lib/getMovies";
import DataClient from "./DataClient";
import { FaImdb } from "react-icons/fa";
import MoviesCarousel from "@/components/MoviesCarousel";

import { GenreInfo, Companies, Countries } from "../../types";
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
    <div className="text-white flex flex-col justify-center items-center max-w-[90%] my-2">
      <div className="w-[90%] flex flex-col gap-5 justify-center p-4">
        <div className="flex w-full justify-between items-center  ">
          {" "}
          <div className="text-3xl">
            {original_title} - {release_date.slice(0, 4)}
          </div>
          <DataClient />
        </div>
        <div className="flex flex-col gap-3 ">
          <div className="flex gap-2">
            {spoken_languages.map((each: any) => (
              <h1 key={each.name}>{each.name}</h1>
            ))}
          </div>
          <div className="flex gap-2 items-center">
            <FaImdb color={"orange"} size={40} />

            {vote_average.toFixed(1)}
          </div>
        </div>
      </div>

      <div className="mt-5 w-[90%] p-4">
        <div className="flex gap-5">
          <div>genres:</div>
          <div>
            {genres.map((each: GenreInfo) => (
              <span className="mx-1" key={each.id}>
                {each.name},
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-5">
          release date:
          <div>{release_date.slice(0, 4)}</div>
        </div>
        <div className="flex gap-5">
          studios:
          <div>
            {production_companies.map((each: Companies) => (
              <span key={each.id}>{each.name}</span>
            ))}
          </div>
        </div>
        <div className="flex gap-5">
          duration:
          <div>{runtime}min</div>
        </div>
        <div className="flex gap-5">
          country:
          <div>
            {production_countries.map((each: Countries) => (
              <span key={each.name}>{each.name} </span>
            ))}
          </div>
        </div>
        <div className="flex gap-5">
          revenue:
          <div>{revenue}$</div>
        </div>

        <div className="flex flex-col gap-5 mt-6">
          <div className="text-xl">overview</div>
          <div className="w-[70%]">{overview}</div>
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
