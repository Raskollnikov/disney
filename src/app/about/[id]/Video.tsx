import React from "react";
import { getVideos } from "@/lib/getMovies";
import { AiOutlineWarning } from "react-icons/ai";
import { Bebas_Neue } from "next/font/google";
export const roboto_mono = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});
export default async function Video({ id }) {
  const videos = await getVideos(id);
  const key = videos.results[1]?.key;

  return (
    <div className="w-full flex justify-center">
      {key ? (
        <iframe
          width="75%"
          height="450"
          src={`https://www.youtube.com/embed/${key}?modestbranding=0&autoplay=1&mute=1&rel=0&controls=0&loop=1&showinfo=0&amp;`}
          allow="&autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          frameBorder="0"
          className=" object-cover pointer-events-none select-none mt-10 rounded-xl"
        ></iframe>
      ) : (
        <div
          className={`text-6xl text-white font-bold flex items-center gap-2 ${roboto_mono.className}`}
        >
          <span className="mt-1">No Trailer Found</span>{" "}
          <AiOutlineWarning size={60} />
        </div>
      )}
    </div>
  );
}
