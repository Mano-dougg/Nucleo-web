import data from "@/pages/produto/coments";
import Comentario from "../Comentario";
import { useEffect, useState } from "react";
import BaseText from "../textoBase/BaseText";
import Image from "next/image";

const Dropdown = () => {
  const [show, setShow] = useState<string>("flex");
  

  const handleClick = () => {
    setShow(() => (show == "flex" ? "hidden" : "flex"));
  };

  return (
    <div className="lg:hidden flex flex-col justify-center items-center gap-6">
      <button
        className="p-3 border border-black bg-bg-card"
        onClick={() => handleClick()}
      >
        <BaseText isBlack={true}>
          Ver comentários
          <Image
            src={"/chevron-down.svg"}
            height={24}
            width={24}
            alt="dropdown icon"
          />
        </BaseText>
      </button>

      <label className={`${show} flex-col gap-2 `}>
        {data?.map((comment, index) => (
          <Comentario
            userImageUrl={comment.userImageUrl}
            userName={comment.userName}
            comentario={comment.comentario}
            time={comment.time}
            key={index}
          />
        ))}
      </label>
    </div>
  );
};

export default Dropdown;
