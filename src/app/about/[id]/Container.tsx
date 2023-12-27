import { getImages } from "@/lib/getMovies";
import React from "react";
import Image from "next/image";
import getImagePath from "@/lib/getImagePath";
import Video from "./Video";

export default async function Container({ id }) {
  const images = await getImages(id);
  const singleImg = images.backdrops[0];

  return (
    <div className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden">
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${getImagePath(singleImg?.file_path)})`,
          backgroundSize: "cover",
          filter: "blur(10px)",
          zIndex: -1,
        }}
      />
      <Video id={id} />
    </div>
  );
}
