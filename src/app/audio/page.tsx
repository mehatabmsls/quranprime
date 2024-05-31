"use client";
import Image from "next/image";
import surahs from "@/data/surahs";
import { Howl, Howler } from "howler";
import { Spline_Sans } from "next/font/google";
import { useState } from "react";

const spline = Spline_Sans({ subsets: ["latin"] });

export default function Home() {
  const [active, setActive] = useState("telugu");
  const [folder, setFolder] = useState("teluguaudio");
  function stopAllAudio() {}
  function playAudio(chapter: number) {
    Howler.stop();
    const sound = new Howl({
      src: `/${folder}/${chapter}.mp3`,
      html5: true,
    });
    // Play the sound.
    sound.play();
  }
  return (
    <section className="text-white">
      <div className="flex justify-center pt-12 pb-6 text-lg items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
        Select Language
      </div>
      <section className="flex justify-center gap-4">
        <div
          onClick={() => {
            setActive("telugu");
            setFolder("teluguaudio");
          }}
          className={`px-4 py-2 bg-[rgb(32,32,32)] rounded-lg cursor-pointer ${
            active === "telugu" ? "bg-blue-600" : ""
          }`}
        >
          Telugu
        </div>
        <div
          onClick={() => {
            setActive("hindi");
            setFolder("hindiaudio");
          }}
          className={`px-4 py-2 bg-[rgb(32,32,32)] rounded-lg cursor-pointer ${
            active === "hindi" ? "bg-blue-600" : ""
          }`}
        >
          Hindi
        </div>
        <div
          onClick={() => {
            setActive("english");
            setFolder("englishaudio");
          }}
          className={`px-4 py-2 bg-[rgb(32,32,32)] rounded-lg cursor-pointer ${
            active === "english" ? "bg-blue-600" : ""
          }`}
        >
          English
        </div>
      </section>
      <section className="flex flex-wrap py-6 mx-9 gap-6 justify-center my-12">
        {surahs.map((item, index) => (
          <section
            key={index}
            className="w-96 flex p-4 gap-6 bg-[rgb(32,32,32)] rounded-md justify-between"
          >
            <section className="flex justify-center gap-6 bg-[rgb(32,32,32)]">
              <section className="flex justify-center items-center bg-[rgb(32,32,32)]">
                <div className="bg-[black] flex justify-center items-center rounded-full min-w-10 h-10">
                  {item.chapter}
                </div>
              </section>

              <section className="flex flex-col gap-1 bg-[rgb(32,32,32)]">
                <div className={`${spline} bg-[rgb(32,32,32)] text-lg`}>
                  {item.surah}
                </div>
                <div
                  className={`${spline.className} bg-[rgb(32,32,32)] text-slate-400`}
                >
                  {item.englishName}
                </div>
              </section>
            </section>
            <section className="flex flex-col justify-center gap-2 bg-[rgb(32,32,32)]">
              {/* <div className="bg-[rgb(32,32,32)]">time</div> */}
              <div
                onClick={() => playAudio(item.chapter)}
                className="bg-[rgb(32,32,32)]"
              >
                {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="rgb(0,0,0)"
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="black"
                    className="size-9 bg-[rgb(32,32,32)] cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                    />
                  </svg> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-10 bg-[rgb(32,32,32)] cursor-pointer"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </section>
          </section>
        ))}
      </section>
    </section>
  );
}