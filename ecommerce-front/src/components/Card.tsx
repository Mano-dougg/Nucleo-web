import Link from "next/link";
import { ComponentProps } from "react";

interface CardProps extends ComponentProps<"a"> {
  link: string;
  children: React.ReactNode;
}

const Card = (props: CardProps) => {
  return (
    <Link
      href={`/produto${props.link}`}
      className={`border border-black h-auto w-auto`}
      {...props}
    >
      {props.children}
    </Link>
  );
};

export default Card;
