import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Rodape`.
 */
export type RodapeProps = SliceComponentProps<Content.RodapeSlice>;

/**
 * Component for "Rodape" Slices.
 */
const Rodape = ({ slice }: RodapeProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for rodape (variation: {slice.variation}) Slices
    </section>
  );
};

export default Rodape;
