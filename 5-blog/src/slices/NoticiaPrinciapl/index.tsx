import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `NoticiaPrinciapl`.
 */
export type NoticiaPrinciaplProps =
  SliceComponentProps<Content.NoticiaPrinciaplSlice>;

/**
 * Component for "NoticiaPrinciapl" Slices.
 */
const NoticiaPrinciapl = ({ slice }: NoticiaPrinciaplProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for noticia_princiapl (variation: {slice.variation})
      Slices
    </section>
  );
};

export default NoticiaPrinciapl;
