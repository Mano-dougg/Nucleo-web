import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Titulo`.
 */
export type TituloProps = SliceComponentProps<Content.TituloSlice>;

/**
 * Component for "Titulo" Slices.
 */
const Titulo = ({ slice }: TituloProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for titulo (variation: {slice.variation}) Slices
    </section>
  );
};

export default Titulo;
