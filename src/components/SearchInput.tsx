"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SearchInput() {
  const router = useRouter();
  const [data, setData] = useState("");
  const handleClick = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!data) return;
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
        className="p-2 rounded-md bg-[#1A1C29] dark:bg-[#111112] text-white outline-none"
      />
    </form>
  );
}
