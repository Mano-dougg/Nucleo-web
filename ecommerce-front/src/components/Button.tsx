import Link from "next/link";

interface ButtonProps {
  url: string;
  children: React.ReactNode;
  addClass?:string;
}

const Button = (props: ButtonProps) => {
  return (
    <Link
      className={`bg-black text-white rounded-[60px] text-[24px] px-8 py-2 text-center lg:w-max ${props.addClass}`}
      href={props.url}
    >
     {props.children}
    </Link>
  );
};

export default Button;
