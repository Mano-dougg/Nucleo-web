import Image from "next/image";

interface ServiceCardProps {
  children: React.ReactNode;
  leftImgUrl: string;
}

const ServiceCard = (props: ServiceCardProps) => {
  return (
    <p className={`text-xl font-semibold flex items-center justify-between gap-2 px-2 py-5 w-full`}>
      <Image src={props.leftImgUrl} alt="icon" height={48} width={48} />
      {props.children}
      <Image src={`/serviceIcons/alert-circle.svg`} alt="icon" height={24} width={24} />
    </p>
  );
};

export default ServiceCard;
