import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { RichText } from "@/components/RichText";

/**
 * Props for `RichText`.
 */
export type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

/**
 * Component for "RichText" Slices.
 */
const RichTextSlice = ({ slice }: RichTextProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="flex flex-col gap-2 sm:gap-4"
    >
      <RichText field={slice.primary.content} />
    </section>
  );
};

export default RichTextSlice;
