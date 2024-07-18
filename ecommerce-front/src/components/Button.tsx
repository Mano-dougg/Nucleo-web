import Link from "next/link";

interface ButtonProps {
  url: string;
  children: React.ReactNode;
  addClass?:string;
  onClick?: () => void;
}

const Button = (props: ButtonProps) => {
  return (
    <Link
      className={`bg-black font-inter rounded-[60px] sm:text-[24px] text-[16px] px-8 py-2 text-center lg:w-max ${props.addClass} text-white`}
      href={props.url}
    >
     {props.children}
    </Link>
  );
};

export default Button;
