import { Content } from "@prismicio/client";
import {
  SliceComponentProps,
  PrismicRichText,
  JSXMapSerializer,
} from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Image from "next/image";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="md" className=" text-white text-center mb-12">
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading
      as="h3"
      size="sm"
      className=" text-white mb-8 font-medium text-center font-display"
    >
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className=" text-6xl text-base font-medium font-body text-white sm:text-left text-center">
      {children}
    </p>
  ),
};

const icons = {
  primeiro: <PrimeiroIcon />,
  segundo: <SegundoIcon />,
  terceiro: <TerceiroIcon />,
};

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText components={components} field={slice.primary.heading} />

      <div className=" grid sm:grid-cols-2 lg:grid-cols-3 max-w-5xl gap-x-15 gap-y-12 mx-auto place-items-center">
        {slice.primary.repeatablezone.map((item, index) => (
          <div
            key={index}
            className="max-w-xs grid sm:place-items-start place-items-center text-center "
          >
            {item.icon && <div className="mb-5">{icons[item.icon]}</div>}
            <PrismicRichText components={components} field={item.title} />
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Features;

function PrimeiroIcon() {
  return (
    <Image 
      src="/assets/icons8-números-50.png" 
      alt="Primeiro Ícone"
      width={100} 
      height={100} 
    />
  );
}

function SegundoIcon() {
  return (
    <Image 
      src="/assets/icons8-2-50.png" 
      alt="Segundo Ícone"
      width={100} 
      height={100} 
    />
  );
}

function TerceiroIcon() {
  return (
    <Image 
      src="/assets/icons8-3-50.png" 
      alt="Terceiro Ícone"
      width={100}
      height={100} 
    />
  );
}
