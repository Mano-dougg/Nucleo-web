import React from "react";
import Card from "../Card";

type Props = {
  name: string;
  imgUrl: string;
};

const Product = ({ name, imgUrl }: Props) => {
  return (
    <Card className="bg-white  border-[1px] border-black items-center flex flex-col justify-around py-9 px-9 gap-9"
    link="/">
      <img src={imgUrl} alt={name} className="rounded-full" />
      <p>{name}</p>
    </Card>
  );
};

export default Product;
