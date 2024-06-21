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
    setPage(1);
    refetch();
  }

  const { data, refetch, isFetching, isFetched } = GetMovies({
    movie,
    page,
  });

  return (
    <main
      className={`relative flex h-screen w-full flex-col gap-10 overflow-x-hidden p-2`}
    >
      <nav className="flex h-auto w-full justify-between gap-2 p-2">
        <div className="flex items-center gap-6 *:cursor-pointer *:text-sm *:font-semibold *:text-btn-bg">
          <Menu />
          <Link href="">
            <MdOutlineLocalMovies className="hidden h-8 w-8 sm:flex" />
          </Link>
          <span className="hidden sm:flex">Movies JC</span>
          <span className="hidden sm:flex">Discover</span>
          <span className="hidden sm:flex">Filter</span>
        </div>
        <div className="flex w-96 max-w-96 items-center justify-between rounded-md border-2 pl-2">
          <CiSearch className="h-6 w-6" />
          <Input
            className="w-full flex-1 border-0 outline-0"
            placeholder="Search Movies"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button onClick={() => handleSearch()}>Search</Button>
        </div>
      </nav>
      <section
        className={`grid h-auto w-full grid-cols-1 justify-items-center gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
      >
        <Dialog open={isFetching}>
          <DialogContent className="flex h-auto w-auto items-center justify-center rounded-full bg-transparent text-2xl font-bold text-white">
            <div className="h-8 w-8 animate-spin rounded-full border-[4px] border-b-white border-l-white border-r-transparent border-t-white"></div>
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
      <div className="flex h-auto w-full justify-center gap-12 pb-4">
        <Button disabled={page == 1} onClick={() => setPage((e) => e - 1)}>
          Prev Page
        </Button>
        <Button onClick={() => setPage((e) => e + 1)}>Next Page</Button>
      </div>
    </main>
  );
}
