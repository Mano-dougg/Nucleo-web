import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Cabecalho`.
 */
export type CabecalhoProps = SliceComponentProps<Content.CabecalhoSlice>;

/**
 * Component for "Cabecalho" Slices.
 */
const Cabecalho = ({ slice }: CabecalhoProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for cabecalho (variation: {slice.variation}) Slices
    </section>
  );
};

export default Cabecalho;
