import { FaStar } from "react-icons/fa";

interface CardProps {
  title: string;
  rate: number;
  image: string;
}

const Card = (props: CardProps) => {
  return (
    <div className="flex h-[290px] max-h-[290px] max-w-[250px] flex-col justify-start">
      <img
        src={`https://image.tmdb.org/t/p/w300${props.image}`}
        alt=""
        className="max-h-[370px] max-w-[250px] rounded-md"
      />
      <div className="flex flex-col items-start gap-2 py-2">
        <span className="text-[12px] text-primary-border">
          USA, 2016 - Current
        </span>
        <h2 className="text-xl font-bold text-btn-bg">{props.title}</h2>
        <p className="flex w-full items-end justify-between text-sm font-normal text-btn-bg">
          <span className="font-semibold text-btn-bg">
            RATED: {props.rate}/100
          </span>
          <FaStar className="h-6 w-6" color="yellow" />
        </p>
      </div>
    </div>
  );
};

export default Card;
