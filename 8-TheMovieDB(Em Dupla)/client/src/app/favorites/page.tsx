import Image from "next/image";
import Cart from "../../../public/svg/icons/cart";
import Search from "../../../public/svg/icons/search";
import Person from "../../../public/svg/icons/person";
import MovieBanner from "../../../public/movie-banner.jpg";
import MovieLogo from "../../../public/svg/movieLogo";
import Play from "../../../public/svg/icons/play";
import Link from "next/link";
import MovieCard from "../../components/MovieCard";
import AnatomyOfAFall from "../../../public/anatomy-of-a-fall-landscape.jpg";
import Barbie from "../../../public/barbie-landscape.jpeg";
import NavbarFav from "@/components/NavbarFav";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div className="w-screen h-screen relative items-start justify-start flex flex-col">
      <NavbarFav />
      <main className="ml-12 mt-12">
        <h2 className="text-lg font-semibold px-2 mb-6">Meus favoritos</h2>
        <div className="flex flex-row gap-3">
          <MovieCard
            image={AnatomyOfAFall}
            title="Anatomy of a Fall"
            price={100.5}
            director="Justine Triet"
          ></MovieCard>
          <MovieCard
            image={Barbie}
            title="Barbie"
            price={0.0}
            director="Greta Gerwig"
          ></MovieCard>
        </div>
      </main>
    </div>
  );
}
