"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import * as z from "zod";

const formSchema = z.object({
  input: z.string().min(2).max(50),
});
export default function SearchInput() {
  const router = useRouter();
  const [data, setData] = useState("");
  const handleClick = (e: any) => {
    e.preventDefault();
    router.push(`/search/${data}`);
  };
  return (
    <form onSubmit={handleClick} className="space-x-8">
      <input
        placeholder="search"
        onChange={(e) => setData(e.target.value)}
        minLength={2}
        maxLength={20}
        value={data}
        name="data"
        className="p-2 rounded-md bg-white dark:bg-[#111112] text-white"
      />
    </form>
  );
}
