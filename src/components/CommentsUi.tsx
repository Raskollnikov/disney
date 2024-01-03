"use client";
import { Zilla_Slab } from "next/font/google";
import { useState } from "react";

const hind = Zilla_Slab({ subsets: ["latin"], weight: "500" });
export default function CommentsUi({ content }: { content: string }) {
  const [show, setShow] = useState(false);
  return (
    <div className={`w-full text-xl xl:w-[70%] ${hind.className}`}>
      {show ? (
        <div>
          <span>{content}</span>
          <button
            onClick={() => setShow(!show)}
            className="text-blue-800 underline pl-1"
          >
            show less
          </button>
        </div>
      ) : (
        <div>
          <span>{content.slice(0, 300)}</span>{" "}
          {content.length > 200 && (
            <button
              onClick={() => setShow(!show)}
              className="text-blue-800 underline pl-1"
            >
              show more
            </button>
          )}
        </div>
      )}
    </div>
  );
}
