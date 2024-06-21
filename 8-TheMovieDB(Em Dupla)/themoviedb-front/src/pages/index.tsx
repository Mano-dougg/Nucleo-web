import { MdOutlineLocalMovies } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { Inter } from "next/font/google";
import { Input } from "@/components/ui/input";
import { Menu } from "@/components/ui/menu";
import { FaStar } from "react-icons/fa";
import Card from "@/components/ui/Card";
import { GetMovies } from "@/hooks/getMovies";
import { useEffect, useState } from "react";
import { cardType } from "@/types/cardType";

export default function Home() {
  const [search, setSearch] = useState<string>("a");
  const [page, setPage] = useState<number>(1);

  const movie = search == "" ? "a" : search;
  const { data, refetch } = GetMovies({ movie, page });

  useEffect(() => {
    refetch();
  }, [search]);

  return (
    <main className="w-full h-screen flex flex-col gap-10 p-2">
      <nav className="w-full h-auto p-2 flex justify-between gap-2">
        <div className="flex gap-6 *:text-sm *:text-btn-bg items-center *:font-semibold *:cursor-pointer">
          <Menu />
          <MdOutlineLocalMovies className="w-8 h-8 sm:flex hidden" />
          <span className="sm:flex hidden">Movies JC</span>
          <span className="sm:flex hidden">Discover</span>
          <span className="sm:flex hidden">Filter</span>
        </div>
        <div className="w-96 max-w-96 border-2 rounded-md flex items-center px-2">
          <CiSearch className="w-6 h-6" />
          <Input
            className="w-full border-0 outline-0 flex-1"
            placeholder="Search Movies"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </nav>
      <section className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-2">
        {data?.results?.slice(0, 20).map((item: cardType) => (
          <Card
            key={item.id}
            title={item.original_title}
            rate={item.vote_average}
            image={item.backdrop_path}
          />
        ))}
      </section>
    </main>
  );
}
