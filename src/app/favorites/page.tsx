import Favorite from "@/components/Favorite";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favorite",
  description: "Favorite movies for user",
};

export default function Page() {
  return <Favorite />;
}
