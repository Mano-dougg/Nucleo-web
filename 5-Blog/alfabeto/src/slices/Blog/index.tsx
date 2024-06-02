import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Blog`.
 */
export type BlogProps = SliceComponentProps<Content.BlogSlice>;

/**
 * Component for "Blog" Slices.
 */
const Blog = ({ slice }: BlogProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextLink field={slice.primary.link_blog}>
        <div className="flex flex-col mt-6 mb-20 text-center ml-auto mr-auto w-4/5 md:flex-row md:gap-6 md:text-left md:mb-0">
          <PrismicNextImage
            field={slice.primary.imagem_blog}
            className="object-cover rounded-md w-80 h-80 mx-auto md:mx-0"
          />  
          <div className="flex flex-col pt-4 gap-5">
            <h3 className="font-bold text-2xl md:text-6xl">{slice.primary.titulo_blog}</h3>
            <h4 className=" font-semibold text-lg md:text-3xl">{slice.primary.subtitulo_blog}</h4>
          </div>
        </div>    
        <hr className="flex w-4/5 mx-auto mt-6 border-gray-400"></hr>
      </PrismicNextLink>
  
    </section>
  );
};

export default Blog;
