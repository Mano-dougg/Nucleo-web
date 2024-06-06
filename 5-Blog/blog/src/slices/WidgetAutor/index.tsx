import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `WidgetAutor`.
 */
export type WidgetAutorProps = SliceComponentProps<Content.WidgetAutorSlice>;

/**
 * Component for "WidgetAutor" Slices.
 */
const WidgetAutor = ({ slice }: WidgetAutorProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for widget_autor (variation: {slice.variation})
      Slices
    </section>
  );
};

export default WidgetAutor;
