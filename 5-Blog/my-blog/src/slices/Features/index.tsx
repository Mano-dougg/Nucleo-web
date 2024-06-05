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
  calendar: <CalendarIcon />,
  bargraph: <BarGraphIcon />,
  clover: <CloverIcon />,
  hourglass: <HourGlassIcon />,
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

      <div className=" grid sm:grid-cols-2 lg:grid-cols-3 max-w-5xl gap-x-15 gap-y-12 mx-auto place-items-center place-items-center">
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

function CalendarIcon() {
  return (
    <Image 
    src="/assets/icons8-números-50.png" 
    alt="Logo"
    width={100} // ajuste conforme necessário
    height={100} // ajuste conforme necessário
  />
  );
}

function BarGraphIcon() {
  return (
    <Image 
    src="/assets/icons8-2-50.png" 
    alt="Logo"
    width={100} // ajuste conforme necessário
    height={100} // ajuste conforme necessário
  />
  );
}

function CloverIcon() {
  return (
    <Image 
    src="/assets/icons8-3-50.png" 
    alt="Logo"
    width={100} // ajuste conforme necessário
    height={100} // ajuste conforme necessário
  />
  );
}

function HourGlassIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      fill="none"
      viewBox="0 0 80 80"
    >
      <g stroke="#0891B2" strokeWidth="5" clipPath="url(#clip0_1_1501)">
        <path d="M49.9 30.2L40 40l-9.9-9.8C20.4 20.6 15.5 15.8 17 11.6l.4-1c2-4 9-4 22.7-4 13.8 0 20.7 0 22.7 4l.4 1c1.4 4.2-3.5 9-13.2 18.6z"></path>
        <path
          strokeOpacity="0.5"
          d="M30.1 49.8L40 40l9.9 9.8c9.7 9.6 14.6 14.4 13.2 18.6l-.4 1c-2 4-9 4-22.7 4-13.8 0-20.7 0-22.7-4a7 7 0 01-.4-1c-1.4-4.2 3.5-9 13.2-18.6z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1_1501">
          <rect width="80" height="80" fill="#fff" rx="16.6"></rect>
        </clipPath>
      </defs>
    </svg>
  );
}