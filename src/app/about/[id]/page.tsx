import Image from "next/image";
import getImagePath from "@/lib/getImagePath";
import { FaImdb } from "react-icons/fa";
import { getData } from "@/lib/getMovies";
import Container from "./Container";
import Video from "./Video";
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
    <div className="">
      {/* <Video id={id} /> */}
      <Container id={id} />
      hello
    </div>
  );
}
