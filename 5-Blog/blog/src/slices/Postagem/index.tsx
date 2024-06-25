import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Postagem`.
 */
export type PostagemProps = SliceComponentProps<Content.PostagemSlice>;

/**
 * Component for "Postagem" Slices.
 */
const Postagem = ({ slice }: PostagemProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for postagem (variation: {slice.variation}) Slices
    </section>
  );
};

export default Postagem;
