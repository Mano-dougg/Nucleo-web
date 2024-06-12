import React from "react";
import { default as DollarSign } from "./icons/DollarSign";

interface TransactionProps {
  // Define any props for your component here
  amount: string;
}

const Transaction: React.FC<TransactionProps> = ({ amount }) => {
  return (
    <div className="bg-pbrown max-w-[100%] h-[136px] flex flex-col justify-between p-[25px] pt-[20px] pb-[18px] rounded-md font-sans text-white">
      <div className="text-base flex flex-row justify-between items-center">
        <p>Entrada</p>
        <DollarSign />
      </div>
      <div className="text-4xl font-medium">{amount}</div>
    </div>
  );
};

export default Transaction;
