"use client";
import React from "react";
import Image from "next/image";
import getImagePath from "@/lib/getImagePath";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

Autoplay.globalOptions = { delay: 8000 };

function ImageTest({ images }: any) {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
    Autoplay(),
  ]);
  return (
    <div className="overflow-hidden relative cursor-pointer" ref={emblaRef}>
      <div className="flex">
        {images.map((each: any) => (
          <div key={each.id} className="flex-full min-w-0 relative">
            <Image
              key={each.id}
              src={getImagePath(each.file_path, true)}
              alt=""
              width={1920}
              height={1080}
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1A1C29]" />
    </div>
  );
}

export default ImageTest;
