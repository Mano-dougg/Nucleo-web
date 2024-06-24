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
import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div className="w-screen h-screen relative items-start justify-start flex flex-col">
      <Navbar />
      <Banner />
      <div className="flex flex-col gap-4 pl-12 -mb-[700px]">
        <h2 className="mt-5 text-lg font-semibold px-2">Novos episódios</h2>
        <section className="flex flex-row gap-3">
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
        </section>
      </div>
    </div>
  );
}
