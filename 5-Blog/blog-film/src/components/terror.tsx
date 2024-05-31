import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import '../app/css/globals.css';

export default async function MoviesList() {
    const client = createClient();
    const movieslist = await client.getSingle('movieslist');

  return (
    <>
    <h2 className="flex pt-4 pl-20 font-inter font-regular text-2xl justify-start mt-14 text-white">Terror:</h2>
    <section className="flex font-inter text-white flex-nowrap justify-center space-x-4 items-center mt-4">
    {movieslist.data.movie.map((item) => (
      <div className="movie relative w-1/6 p-4 items-center justify-center rounded-2xl bg-[#262b38]">
        <div className="relative h-40  bg-[#262b38]">
          <PrismicNextLink field={item.link} className=" block w-full h-full">
            <PrismicNextImage
              field={item.moviebg}
              className="absolute inset-0 w-full saturate h-full object-cover"
            />
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-50">
              <PrismicRichText field={item.title} />
              <PrismicRichText field={item.year} />
            </div>
          </PrismicNextLink>
        </div>
        <div className="bg-[#262b38] p-4">
          <div className="movied">
            <PrismicRichText field={item.description} />
          </div>
        </div>
      </div>
    ))}
  </section>
  </>
  
  
    
  )
}
