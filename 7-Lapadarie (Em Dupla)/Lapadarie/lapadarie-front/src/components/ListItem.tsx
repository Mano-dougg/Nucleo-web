import React, { Children } from "react";
import Trash from "./icons/Trash";
import "../app/globals.css";

interface ListItemProps {
  // Define any props for your component here
  title: string;
  breadAmount: string;
  amountToPay: string;
}

const ListItem: React.FC<ListItemProps> = ({
  title,
  breadAmount,
  amountToPay,
}) => {
  return (
    <span className="flex flex-row w-full min-w-[390px] bg-white bg-opacity-80 rounded-md p-4 items-center justify-between pr-6">
      <div className="flex flex-col justify-between h-full gap-1.5">
        <h3 className="text-pbrown text-base font-bold">{title}</h3>
        <div className="flex flex-row gap-4" id="item-list-amounts">
          <p className="text-pbrown text-xs font-normal">
            <span className="font-bold">Total de pães: </span>
            {`${breadAmount} pães`}
          </p>
          <p className="text-pbrown text-xs font-normal">
            <span className="font-bold">Total a pagar: </span>
            {`R$ ${amountToPay}`}
          </p>
        </div>
      </div>
      <button>
        <Trash />
      </button>
    </span>
  );
};

export default ListItem;
