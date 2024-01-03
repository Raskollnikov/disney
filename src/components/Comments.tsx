import Image from "next/image";
import getImagePath from "@/lib/getImagePath";
import { IdType, MovieReview } from "../../types";
import { getReviews } from "@/lib/getMovies";
import CommentsUi from "./CommentsUi";

export default async function Comments({ id }: IdType) {
  const reviews = await getReviews(id);

  return (
    <div className="w-[90%]  my-10 p-3">
      <div className="text-3xl">Comments:</div>
      <div className="flex gap-5 flex-col mt-10">
        {reviews.results.length > 1 ? (
          reviews.results.map((each: MovieReview) => (
            <div key={each.id} className="flex gap-5 flex-col p-3">
              <div className="flex items-center gap-4">
                <Image
                  src={getImagePath(each.author_details.avatar_path)}
                  width={50}
                  height={50}
                  alt={each.id}
                  className="w-12 h-10 rounded-full object-cover"
                />
                <div className="text-xl">{each.author}</div>
              </div>
              <CommentsUi content={each.content} />
            </div>
          ))
        ) : (
          <h1 className="p-3 text-xl font-bold text-center">No Comments...</h1>
        )}
      </div>
    </div>
  );
}
