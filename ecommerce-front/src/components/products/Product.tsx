import React from "react";

type Props = {
  name: string;
  imgUrl: string;
};

const Product = ({ name, imgUrl }: Props) => {
  return (
    <div className="bg-white  border-[1px] border-black items-center flex flex-col justify-around py-9 px-9 gap-9">
      <img src={imgUrl} alt={name} className="rounded-full" />
      <p>{name}</p>
    </div>
  );
};

export default Product;
