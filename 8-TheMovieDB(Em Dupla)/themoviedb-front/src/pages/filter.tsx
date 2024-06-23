"use client";
import { GetMovies } from "@/hooks/getMovies";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import NavBar from "@/components/NavBar";
import { FilterBox } from "@/components/FilterBox";
import genres from "@/genres/genres";

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

  const generos: any = Object.values(genres).slice(0, 19);
  const [genero, setGenero] = useState<string>();
  const [classification, setClassification] = useState<string>();
  const [organize, setOrganize] = useState<string>();

  console.log(genero);

  return (
    <main
      className={`relative flex h-screen w-full flex-col gap-10 overflow-x-hidden p-2 pt-0`}
    >
      <NavBar
        value={search}
        btnFn={() => handleSearch()}
        valueChange={(e) => setSearch(e.target.value)}
      />
      <section
        className={`flex h-auto w-full grid-cols-1 flex-wrap justify-center gap-4`}
      >
        <FilterBox
          interator={generos}
          interatorTitle="genere"
          value={genero || ""}
          selectFn={(currentValue) => {
            setGenero(currentValue === genero ? "" : currentValue);
          }}
        />
        <FilterBox
          interator={["Adult", "Kids"]}
          interatorTitle="Classification"
          value={classification || ""}
          selectFn={(currentValue) => {
            setClassification(
              currentValue === classification ? "" : currentValue,
            );
          }}
        />
        <FilterBox
          interator={["asc", "desc"]}
          interatorTitle="Org By"
          value={organize || ""}
          selectFn={(currentValue) => {
            setOrganize(currentValue === organize ? "" : currentValue);
          }}
        />
        <Dialog open={isFetching}>
          <DialogContent className="flex h-auto w-auto items-center justify-center rounded-full bg-transparent text-2xl font-bold text-white">
            <div className="h-8 w-8 animate-spin rounded-full border-[4px] border-b-white border-l-white border-r-transparent border-t-white"></div>
          </DialogContent>
        </Dialog>
      </section>
      <div className="flex h-auto w-full justify-center gap-12 pb-4"></div>
    </main>
  );
}
