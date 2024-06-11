import React from "react";
import { default as Person2 } from "./icons/Person2";

interface TransactionProps {
  // Define any props for your component here
  amount: string;
}

const Transaction: React.FC<TransactionProps> = ({ amount }) => {
  return (
    <div className="bg-white w-[395px] h-[136px] flex flex-col justify-between p-[25px] pt-[20px] pb-[18px] rounded-md font-sans">
      <div className="text-base flex flex-row justify-between items-center">
        <p>Pessoas na fila</p>
        <Person2 />
      </div>
      <div className="text-4xl font-medium">{amount}</div>
    </div>
  );
};

export default Transaction;
