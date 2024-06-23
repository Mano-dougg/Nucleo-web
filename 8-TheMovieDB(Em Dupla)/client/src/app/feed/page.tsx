import Image from "next/image";
import Cart from "../../../public/svg/icons/cart";
import Search from "../../../public/svg/icons/search";
import Person from "../../../public/svg/icons/person";
import MovieBanner from "../../../public/movie-banner.jpg";
import MovieLogo from "../../../public/svg/movieLogo";
import Play from "../../../public/svg/icons/play";
import Link from "next/link";
import MovieCard from "../../../components/MovieCard";
import AnatomyOfAFall from "../../../public/anatomy-of-a-fall-landscape.jpg";
import Barbie from "../../../public/barbie-landscape.jpeg";

export default function Home() {
  return (
    <div className="w-screen flex flex-col items-start justify-start">
      <header className="w-full h-24 absolute top-0 flex flex-row items-center justify-between pl-24 pr-12 z-10">
        <section className="flex flex-row gap-24">
          <p>logo</p>
          <nav>
            <ul className="flex flex-row gap-12">
              <li>
                <Link href={""}>Home</Link>
              </li>
              <li>
                <Link href={""}>Store</Link>
              </li>
              <li>
                <Link href={""}>Library</Link>
              </li>
            </ul>
          </nav>
        </section>
        <section className="flex flex-row gap-10 items-center">
          <button>
            <Cart />
          </button>
          <div
            className="bg-solidblack bg-opacity-30 pr-[18px] flex flex-row h-12 items-center gap-1.5 rounded-full backdrop-blur-2xl border-[1.5px] border-white border-opacity-15"
            id="search"
          >
            <input
              className="bg-transparent w-[220px] h-full ml-5 mb-[1px] text-sm focus:outline-none focus:ring-0"
              type="search"
              placeholder="Search for a movie or tv show..."
            ></input>
            <Search />
          </div>
          <button>
            <Person />
          </button>
        </section>
      </header>
      <div className="w-screen h-[610px] top-0 -z-20 mb-[400px]">
        <div className="absolute bottom-12 left-[52px]">
          <MovieLogo />
          <p className="text-base max-w-[420px] mt-6 mb-9 text-opacity-70 text-[#E2EBEB]">
            An internal succession war within House Targaryen at the height of
            its power, 172 years before the birth of Daenerys Targaryen.
          </p>
          <button className="bg-[#590E06] pl-5 pr-[21px] py-4 rounded-2xl flex flex-row gap-3 items-center">
            <Play />
            Watch now
          </button>
        </div>
        <div className="-z-10 w-screen h-[350px] absolute bottom-0 bg-gradient-to-b from-gradient-red-0 to-gradient-red"></div>
        <Image
          src={MovieBanner}
          alt=""
          unoptimized={true}
          className="-z-20 absolute top-0 h-[610px]"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        ></Image>
      </div>
      <main className="px-9 flex flex-row gap-5 mb-8">
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
      </main>
    </div>
  );
}
