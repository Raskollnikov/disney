import React from "react";
import Image from "next/image";
import getImagePath from "@/lib/getImagePath";
import { IdType, MovieReview } from "../../types";
import { getReviews } from "@/lib/getMovies";

export default async function Comments({ id }: IdType) {
  const reviews = await getReviews(id);

  return (
    <div className="w-[90%]">
      <div className="text-3xl">Reviews:</div>
      <div className="flex gap-4 flex-col mt-10">
        {reviews.results.length > 1 ? (
          reviews.results.map((each: MovieReview) => (
            <div key={each.id} className="flex gap-5 flex-col">
              <div className="flex items-center gap-5">
                <Image
                  src={getImagePath(each.author_details.avatar_path)}
                  width={50}
                  height={50}
                  alt={each.id}
                  className="w-12 h-10 rounded-full object-cover"
                />
                <div className="text-xl">{each.author}</div>
              </div>
              <div className="w-[50%]">{each.content.slice(0, 200)}</div>
            </div>
          ))
        ) : (
          <h1>No Comments</h1>
        )}
      </div>
    </div>
  );
}
