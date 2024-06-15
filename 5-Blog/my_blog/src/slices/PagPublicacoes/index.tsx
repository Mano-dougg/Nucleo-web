import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `PagPublicacoes`.
 */
export type PagPublicacoesProps =
  SliceComponentProps<Content.PagPublicacoesSlice>;

/**
 * Component for "PagPublicacoes" Slices.
 */
const PagPublicacoes = ({ slice }: PagPublicacoesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for pag_publicacoes (variation: {slice.variation})
      Slices
    </section>
  );
};

export default PagPublicacoes;
