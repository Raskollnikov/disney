import { getImages } from "@/lib/getMovies";
import React from "react";
import Image from "next/image";
import getImagePath from "@/lib/getImagePath";
export default async function Images({ id }) {
  const images = await getImages(id);
  console.log(images.backdrops);
  return (
    <div className="w-full border">
      {images.backdrops.map((each, index) => (
        <Image
          key={index}
          src={getImagePath(each.file_path)}
          alt={each.file_path}
          height={2000}
          width={2000}
        />
      ))}
    </div>
  );
}
