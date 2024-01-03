import { getData, getVideos } from "@/lib/getMovies";
import { Bebas_Neue } from "next/font/google";
import getImagePath from "@/lib/getImagePath";
import Image from "next/image";
import ImageSlider from "./ImageSlider";
import { IdType } from "../../types";

export const roboto_mono = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export default async function Video({ id }: IdType) {
  const videos = await getVideos(id);
  const iTest = await getData(id);
  const imagePath = iTest.poster_path;
  return (
    <div className="w-full flex justify-center">
      {videos[0] ? (
        <div className="w-full flex justify-center gap-2  h-[60vh] object-cover pointer-events-none select-none mt-10 rounded-xl">
          <div className="h-full hidden xl:flex flex-col cursor-pointer ">
            <Image
              src={getImagePath(imagePath)}
              width={250}
              height={700}
              alt={"test"}
              className=" h-[86%]"
            />
            <div className="flex justify-center text-xl p-3 items-center bg-red-500 text-white font-bold max-h-[14%]">
              Movie Trailer
            </div>
          </div>

          <iframe
            src={`https://www.youtube.com/embed/${videos[0]?.key}?autoplay=1&modestbranding=1&autohide=1&mute=1&rel=0&controls=0&loop=1&showinfo=0&amp;`}
            className="w-70%"
            frameBorder={0}
            width={700}
          ></iframe>
        </div>
      ) : (
        <div
          className={`w-full object-cover pointer-events-none select-none mt-10 rounded-xl  h-[60vh] justify-center text-white font-bold flex items-center gap-2 ${roboto_mono.className}`}
        >
          <div className="h-full hidden  xl:flex xl:flex-col cursor-pointer  ">
            <Image
              src={getImagePath(imagePath)}
              width={250}
              height={700}
              alt={"test"}
              className=" h-[100%] object-contain"
            />
          </div>
          <div className="text-5xl w-full xl:w-[50%] flex items-center justify-center">
            <ImageSlider id={id} />
          </div>
        </div>
      )}
    </div>
  );
}
