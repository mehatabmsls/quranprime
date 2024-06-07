"use client";
import Image from "next/image";
import surahs from "@/data/surahs";
import { Howl, Howler } from "howler";
import { Spline_Sans, Spline_Sans_Mono, Fira_Code } from "next/font/google";
import { useState, useEffect } from "react";
import useStore from "@/state/state";
import { PuffLoader } from "react-spinners";

const spline = Spline_Sans({ subsets: ["latin"], weight: ["400"] });
const fira = Spline_Sans_Mono({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  const [active, setActive] = useState("telugu");
  const [folder, setFolder] = useState("teluguaudio");
  const [rate, setRate] = useState("1.00X");
  const [loop, setLoop] = useState(false);
  const [totalDuration, setTotalDuration] = useState("00:00:00");
  const [runningDuration, setRunningDuration] = useState("00:00:00");
  const setLoading = useStore((state: any) => state.setLoading);
  const main = useStore((state: any) => state.main);
  const currentSound = useStore((state: any) => state.currentSound);
  const setCurrentSound = useStore((state: any) => state.setCurrentSound);
  const setPause = useStore((state: any) => state.setPause);
  const setCurrent = useStore((state: any) => state.setCurrent);
  const currentId = useStore((state: any) => state.currentId);
  const closePrevPause = useStore((state: any) => state.closePrevPause);

  // useEffect(() => {
  //   if (currentSound) {
  //     currentSound.once("load", function () {
  //       new Date(currentSound.duration() * 1000).toISOString().slice(11, 19);
  //     });
  //   }
  // }, [currentSound]);

  // function updateProgress() {
  //   currentSound &&
  //     new Date(currentSound.duration() * 1000).toISOString().slice(11, 19);
  // }

  function pauseAudio(chapter: number) {
    if (currentSound && currentSound.playing()) {
      currentSound.pause();
      setPause(chapter);
    }
  }

  function playNext() {}

  function playAudio(chapter: number) {
    if (currentSound && currentId && currentId === chapter) {
      currentSound.play();
      setPause(chapter);
    } else {
      setLoading(chapter);
      Howler.stop();
      const sound = new Howl({
        src: `/${folder}/${chapter}.mp3`,
        html5: true,
        onload: () => {
          setLoading(chapter);
        },
        onplay: () => {},
        onend: () => {
          setPause(chapter);
          if (loop) {
            playNext();
          }
        },
      });
      sound.play();
      setCurrentSound(sound);
      closePrevPause();
      setPause(chapter);
      setCurrent(chapter);
      if (rate === "1.00X") {
        sound.rate(1);
      } else if (rate === "0.75X") {
        sound.rate(0.75);
      } else if (rate === "1.25X") {
        sound.rate(1.25);
      }
    }
  }
  return (
    <section className="text-white">
      <div className="flex justify-center py-6 text-lg items-center gap-2">
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
      <section className={`${fira.className} flex justify-center gap-4 pb-6`}>
        <div
          onClick={() => {
            if (active != "telugu") {
              setActive("telugu");
              setFolder("teluguaudio");
              closePrevPause();
              Howler.stop();
              setCurrentSound("");
            }
          }}
          className={`px-4 py-2 bg-[rgb(32,32,32)] rounded-lg flex justify-center items-center cursor-pointer ${
            active === "telugu" ? "bg-slate-800" : ""
          }`}
        >
          Telugu
        </div>
        <div
          onClick={() => {
            if (active != "hindi") {
              setActive("hindi");
              setFolder("hindiaudio");
              closePrevPause();
              Howler.stop();
              setCurrentSound("");
            }
          }}
          className={`px-4 py-2 bg-[rgb(32,32,32)] rounded-lg flex justify-center items-center cursor-pointer ${
            active === "hindi" ? "bg-slate-800" : ""
          }`}
        >
          Hindi
        </div>
        <div
          onClick={() => {
            if (active != "english") {
              setActive("english");
              setFolder("englishaudio");
              closePrevPause();
              Howler.stop();
              setCurrentSound("");
            }
          }}
          className={`px-4 py-2 bg-[rgb(32,32,32)] rounded-lg flex justify-center items-center cursor-pointer ${
            active === "english" ? "bg-slate-800" : ""
          }`}
        >
          English
        </div>
      </section>
      <section className="flex flex-wrap my-6 mx-8 gap-6 justify-center">
        {main.map((item: any, index: number) => (
          <section
            key={index}
            className={` w-[375px] flex px-6 py-2.5 text-[15px]  gap-6 bg-[rgb(32,32,32)] rounded-md justify-between items-center`}
          >
            <section className="flex justify-center gap-6 bg-[rgb(32,32,32)]">
              <section className="flex justify-center items-center bg-[rgb(32,32,32)]">
                <div
                  className={`${fira.className} bg-[black] flex justify-center items-center rounded-full min-w-10 h-10`}
                >
                  {item.chapter}
                </div>
              </section>

              <section className="flex flex-col gap-1 bg-[rgb(32,32,32)]">
                <div
                  className={`${spline.className} bg-[rgb(32,32,32)] text-lg`}
                >
                  {item.surah}
                </div>
                <div
                  className={`${fira.className} bg-[rgb(32,32,32)] text-slate-400 text-base`}
                >
                  {item.englishName}
                </div>
              </section>
            </section>
            <section className="flex flex-col justify-center gap-2 bg-[rgb(32,32,32)]">
              {/* <div className="bg-[rgb(32,32,32)]">time</div> */}
              <div className="bg-[rgb(32,32,32)]">
                {item.loading ? (
                  <PuffLoader color="#36d7b7" size={40} />
                ) : item.paused ? (
                  <svg
                    onClick={() => pauseAudio(item.chapter)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-11 cursor-pointer"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM9 8.25a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75H9Zm5.25 0a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75h-.75Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    onClick={() => playAudio(item.chapter)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-11 bg-[rgb(32,32,32)] cursor-pointer"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </section>
          </section>
        ))}
      </section>
      {currentSound && (
        <div className="w-full bg-[rgb(32,32,32)] py-2 flex justify-center flex-col audio-player gap-4 sticky bottom-0">
          {/* <section className="w-full sticky bottom-0 h-6 flex items-center justify-between gap-4">
            <div className="text-sm">{runningDuration}</div>
            <input
              type="range"
              id="profress-bar"
              min="0"
              max="100"
              className=""
            ></input>
            <div className="text-sm">{totalDuration}</div>
          </section> */}

          <div className="bg-[rgb(32,32,32)] w-full h-16 sticky bottom-0 flex justify-center items-center">
            <section className="flex justify-center items-center gap-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 cursor-pointer"
              >
                <path
                  fillRule="evenodd"
                  d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                onClick={() => {
                  let currentPos = currentSound.seek();
                  if (currentPos < 10) {
                    currentSound.seek([0]);
                  } else {
                    currentSound.seek([currentPos - 10]);
                  }
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 cursor-pointer"
              >
                <path
                  fillRule="evenodd"
                  d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                onClick={() => {
                  if (currentId > 1) {
                    playAudio(currentId - 1);
                  }
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-8 rotate-180 cursor-pointer"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clipRule="evenodd"
                />
              </svg>
              {currentSound.playing() ? (
                <svg
                  onClick={() => pauseAudio(currentId)}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-12 cursor-pointer"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12ZM9 8.25a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75h.75a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75H9Zm5.25 0a.75.75 0 0 0-.75.75v6c0 .414.336.75.75.75H15a.75.75 0 0 0 .75-.75V9a.75.75 0 0 0-.75-.75h-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  onClick={() => playAudio(currentId)}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-12 bg-[rgb(32,32,32)] cursor-pointer"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}

              <svg
                onClick={() => {
                  if (currentId < 114) {
                    playAudio(currentId + 1);
                  }
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-8 cursor-pointer"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                onClick={() => {
                  let currentPos = currentSound.seek();
                  currentSound.seek([currentPos + 10]);
                }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 cursor-pointer"
              >
                <path
                  fillRule="evenodd"
                  d="M14.47 2.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H9a5.25 5.25 0 1 0 0 10.5h3a.75.75 0 0 1 0 1.5H9a6.75 6.75 0 0 1 0-13.5h10.19l-4.72-4.72a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
              <div
                className="cursor-pointer"
                onClick={() => {
                  if (currentSound) {
                    if (currentSound.rate() === 1) {
                      currentSound.rate([1.25]);
                      setRate("1.25X");
                    } else if (currentSound.rate() === 1.25) {
                      currentSound.rate([0.75]);
                      setRate("0.75X");
                    } else if (currentSound.rate() === 0.75) {
                      currentSound.rate([1]);
                      setRate("1.00X");
                    }
                  }
                }}
              >
                {rate}
              </div>
            </section>
          </div>
        </div>
      )}
    </section>
  );
}
