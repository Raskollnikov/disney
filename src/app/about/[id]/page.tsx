import Container from "./Container";
import DataUi from "./DataUi";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "info",
  description: "movies rating reviews etc...",
};
export default async function Page({ params: { id } }: any) {
  return (
    <div className="">
      <Container id={id} />
      <DataUi id={id} />
    </div>
  );
}
