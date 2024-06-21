import { MdOutlineLocalMovies } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { Input } from "@/components/ui/input";
import { Menu } from "@/components/ui/menu";
import Card from "@/components/ui/Card";
import { GetMovies } from "@/hooks/getMovies";
import { useEffect, useState } from "react";
import { cardType } from "@/types/cardType";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [movie, setMovie] = useState("a");

  function handleSearch() {
    setMovie(search);
    refetch();
  }

  const { data, refetch, isFetching, isFetched } = GetMovies({
    movie,
    page,
  });

  return (
    <main
      className={`w-full h-screen flex flex-col gap-10 p-2 relative overflow-x-hidden`}
    >
      <nav className="w-full h-auto p-2 flex justify-between gap-2">
        <div className="flex gap-6 *:text-sm *:text-btn-bg items-center *:font-semibold *:cursor-pointer">
          <Menu />
          <Link href="">
            <MdOutlineLocalMovies className="w-8 h-8 sm:flex hidden" />
          </Link>
          <span className="sm:flex hidden">Movies JC</span>
          <span className="sm:flex hidden">Discover</span>
          <span className="sm:flex hidden">Filter</span>
        </div>
        <div className="w-96 max-w-96 border-2 rounded-md flex items-center pl-2 justify-between">
          <CiSearch className="w-6 h-6" />
          <Input
            className="w-full border-0 outline-0 flex-1"
            placeholder="Search Movies"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button onClick={() => handleSearch()}>Search</Button>
        </div>
      </nav>
      <section
        className={`w-full h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-2`}
      >
        <Dialog open={isFetching}>
          <DialogContent className="w-auto h-auto bg-transparent rounded-full text-2xl text-white flex items-center justify-center font-bold">
            <div className="w-8 h-8 border-[4px] rounded-full border-l-white border-t-white border-b-white border-r-transparent animate-spin"></div>
          </DialogContent>
        </Dialog>
        {isFetched &&
          data?.results
            ?.slice(0, 20)
            .map((item: cardType) => (
              <Card
                key={item.id}
                title={item.original_title}
                rate={item.vote_average}
                image={item.backdrop_path}
              />
            ))}
      </section>
      <div className="w-full h-auto flex justify-center gap-12 pb-4">
        <Button disabled={page == 1} onClick={() => setPage((e) => e - 1)}>
          Prev Page
        </Button>
        <Button onClick={() => setPage((e) => e + 1)}>Next Page</Button>
      </div>
    </main>
  );
}
