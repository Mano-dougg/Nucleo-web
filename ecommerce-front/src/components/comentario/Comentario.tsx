import Image from "next/image";
import BaseText from "./textoBase/BaseText";

interface ComentarioProps {
  userImageUrl: string;
  userName: string;
  comentario: string;
  time: string;
}

const Comentario = (props: ComentarioProps) => {
  return (
    <div
      className={`max-w-[600px] bg-bg-card lg:max-h-[216px] h-auto p-3 border lg:border-black flex lg:gap-4 gap- 2 lg:justify-start overflow-hidden lg:flex-row flex-col lg:items-start items-center `}
    >
      <div className="w-auto h-full">
        <img
          src={props.userImageUrl}
          height={100}
          width={100}
          alt={"image do perfil"}
          className="rounded-full lg:max-h-24 lg:max-w-24 max-w-20 max-h-20"
        />
      </div>
      <div className={`h-full flex flex-col lg:gap-9 gap-1`}>
        <p className="font-semibold w-full lg:text-2xl text-xl">{props.userName}</p>
        <p className="font-semibold w-full lg:text-2xl text-base">{props.comentario}</p >
        <p className="font-semibold w-full lg:text-2xl text-base text-text-footer">{props.time}</p>
      </div>
    </div>
  );
};

export default Comentario;
