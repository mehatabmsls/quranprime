"use client";
import React, { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";

const Cards = () => {
  useEffect(() => {
    redirect("/audio");
  }, []);
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
      {paths.map((item, index) => (
        <Link key={index} href={`/${item.toLowerCase()}`}>
          <div className=" bg-[rgb(32,32,32)] h-24 w-44 px-4 flex rounded-md justify-center items-center text-base cursor-pointer">
            {item}
          </div>
        </Link>
      ))}
    </>
  );
};

export default Cards;
