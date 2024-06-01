import FireIcon from "@/components/icons/dire-icon";
import MainImageSingle from "@/components/main-image/main-image";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MainImage`.
 */
export type MainImageProps = SliceComponentProps<Content.MainImageSlice>;

/**
 * Component for "MainImage" Slices.
 */
const MainImage = ({ slice }: MainImageProps): JSX.Element => {


  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="relative bg-gradient-to-b from-[70%] from-background-1 to-background-2
       flex flex-col items-center
      w-full pt-[15%] sm:pt-[10%] pb-[10%]"
    >
      <h2><FireIcon /> {slice.primary.reason}</h2>
      <div  className="w-[80%]">
        {slice.primary.miniPost.map((item, i) => (
          <>
          {/* @ts-ignore */}
           <MainImageSingle link={item.link} image={item.image} title={item.title} desc={item.desc} category={item.hasOwnProperty('category')? item.category:undefined} i={i} />
          </> 
        ))}
      </div>
    </section>
  );
};

export default MainImage;
