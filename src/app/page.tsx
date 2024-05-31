import Cards from "@/components/Cards";

export default function Home() {
  return (
    <main className="text-white">
      <nav className="flex justify-between gap-16 items-center">
        <section className="p-6">
          <div className="text-xl">QuranPrime</div>
        </section>
        <section className="flex gap-16 p-6 navs">
          <div>Home</div>
          <div>Quran</div>
          <div>Sunnah</div>
          <div>Audio</div>
          <div>Transliteration</div>
        </section>
        <section className="flex p-6 profile">
          <div className="h-1 w-6 my-1 bg-white"></div>
          <div className="h-1 w-6 my-1 bg-white"></div>
          <div className="h-1 w-6 my-1 bg-white"></div>
        </section>
      </nav>
      <section className="pt-16 flex justify-center gap-3  flex-wrap">
        <Cards></Cards>
      </section>
    </main>
  );
}
