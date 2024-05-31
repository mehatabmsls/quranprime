"use client";
import React, { useState } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";

const Cards = () => {
  const [paths, setPaths] = useState([
    // "Quran",
    // "Sunnah",
    "Audio",
    // "Transliteration",
    // "Duas",
    // "Knowledge",
    // "Seerah",
  ]);

  return (
    <>
      {redirect("/audio")}
      {paths.map((item, index) => (
        <Link href={`/${item.toLowerCase()}`}>
          <div
            key={index}
            className=" bg-[rgb(32,32,32)] h-24 w-44 px-4 flex rounded-md justify-center items-center text-base cursor-pointer"
          >
            {item}
          </div>
        </Link>
      ))}
    </>
  );
};

export default Cards;
