import axios from "axios";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

interface CardProps {
  title: string;
  rate: number;
  image: string;
  snap: string;
}

const Card = (props: CardProps) => {
  const star = localStorage.getItem("star");

  function handleFavorite() {
    const data = {}
    const post = axios.post('http://localhost:7001/tmdb-app/add_favorite')
  }

  return (
    <div
      className={`flex h-[310px] max-h-[310px] max-w-[250px] flex-col justify-start ${props.snap} rounded-lg border-2`}
    >
      <img
        src={`https://image.tmdb.org/t/p/w400${props.image}`}
        alt=""
        className="h-60 max-h-[370px] max-w-[250px] rounded-md"
      />
      <div className="flex flex-col items-start gap-2 px-1 py-2">
        <span className="text-[12px] text-primary-border">
          USA, 2016 - Current
        </span>
        <h2 className="text-xl font-bold text-btn-bg">{props.title}</h2>
        <p className="flex w-full items-end justify-between text-sm font-normal text-btn-bg">
          <span className="font-semibold text-btn-bg">
            RATED: {props.rate}/100
          </span>
          <FaStar
            className="h-6 w-6"
            color={"yellow"}
            onClick={() => handleFavorite()}
          />
        </p>
      </div>
    </div>
  );
};

export default Card;
