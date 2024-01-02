import { getImages } from "@/lib/getMovies";
import { IdType } from "../../types";
import ImageTest from "./Image";
// if Trailer Does Not Found
export default async function ImageSlider({ id }: IdType) {
  const images = await getImages(id);
  return <ImageTest images={images.backdrops} />;
}
