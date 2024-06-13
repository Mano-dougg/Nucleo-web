import { createClient } from "@/prismicio";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import '../app/css/globals.css';

// #f5f295 - amarelo
// #283044 - azul

export default async function CardSlicer() {
    const client = createClient();
    const cardslicer = await client.getSingle('cardslicer');

  return (
    <>
   <h2 className="flex pt-10 font-montserrat font-bold text-2xl justify-center text-white">Last <span className="text-[#f5f295] pl-1"> Reviews:</span></h2>
<section className="flex font-inter md:mt-10 text-white flex-wrap justify-center md:space-x-4  md:items-center">
    {cardslicer.data.card.map((item) => (
        <div className={`relative w-full md:mt-2 md:flex-grow-0 md:flex-shrink-0 min-w-[130px] ${item.highlight ? 'md:w-1/3' : 'md:w-1/5'}`}>
            <div className="relative h-64">
                <PrismicNextImage field={item.image} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 z-50 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-50">
                    <h1 className="text-1xl font-bold mb-2">
                        <PrismicRichText field={item.title} />
                    </h1>
                    <h2 className="text-lg mb-2">
                        <PrismicRichText field={item.description} />
                    </h2>
                    <PrismicNextLink field={item.cardbutton}>
                        <button className="px-4 py-2 bg-[#283044] border text-white rounded">
                            {item.label}
                        </button>
                    </PrismicNextLink>
                </div>
            </div>
        </div>
    ))}
</section>



    </>
  )
}
