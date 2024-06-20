import Image from "next/image";
import Header from "@/components/header";
import FilmList from "@/components/film-list";
import link from "next/link";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header/>
      <FilmList/>
    </main>
  );
}
