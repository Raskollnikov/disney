import Image from "next/image";
import getImagePath from "@/lib/getImagePath";
import { FaImdb } from "react-icons/fa";
import { getData } from "@/lib/getMovies";
import Images from "./Images";

export default async function Page({ params: { id } }: any) {
  const data = await getData(id);
  console.log(data);

  const {
    genres,
    overview,
    popularity,
    backdrop_path,
    release_date,
    revenue,
    spoken_languages,
    vote_average,
    original_title,
  } = data;

  return (
    <div className="text-white mt-20 ">
      <div className=" p-4 flex gap-7 flex-col md:flex-row">
        <Images id={id} />

        <div className="flex flex-col gap-3 items-center md:items-start">
          <h1 className="text-2xl font-bold">{original_title}</h1>
          <p className="w-[85%] lg:w-[50%]"> {overview}</p>
        </div>
      </div>
      <div className="px-4">
        <div className="flex gap-1 items-center ">
          <FaImdb color={"orange"} size={40} />
          {vote_average}
        </div>
        <h2 className="">revenue: {revenue}$</h2>

        <h3 className="">Popularity:{popularity.toFixed(0)}K</h3>

        <div className="flex gap-2 font-bold ">
          {genres.map((each) => (
            <div key={each.id}>{each.name}</div>
          ))}
        </div>
      </div>
    </div>
  );
}
