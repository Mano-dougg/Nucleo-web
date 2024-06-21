import { FaStar } from "react-icons/fa";

interface CardProps {
  title: string;
  rate: number;
  image: string;
}

const Card = (props: CardProps) => {
  return (
    <div className="flex flex-col justify-start max-w-[250px] max-h-[290px] h-[290px]">
      <img
        src={`https://image.tmdb.org/t/p/w300${props.image}`}
        alt=""
        className="rounded-md max-w-[250px] max-h-[370px]"
      />
      <div className="py-2 flex flex-col items-start gap-2">
        <span className="text-[12px] text-primary-border">
          USA, 2016 - Current
        </span>
        <h2 className="font-bold text-xl text-btn-bg ">{props.title}</h2>
        <p className="text-btn-bg  text-sm font-normal flex justify-between w-full items-end">
          <span className="text-btn-bg font-semibold">
            RATED: {props.rate}/100
          </span>
          <FaStar className="w-6 h-6" color="yellow" />
        </p>
      </div>
    </div>
  );
};

export default Card;
