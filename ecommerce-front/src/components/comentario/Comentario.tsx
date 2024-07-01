import Image from "next/image";
import BaseText from "./textoBase/BaseText";

interface ComentarioProps{
  userImageUrl:string;
  userName:string;
  comentario:string;
  time:string;
}

const Comentario = (props:ComentarioProps) => {
  return (
    <div className={`max-w-[600px] max-h-[216px] p-3 border border-black flex gap-4`}>
      <Image
        src={props.userImageUrl}
        height={100}
        width={100}
        alt={"image do perfil"}
        className="rounded-full max-h-24 max-w-24"
      />
      <div className={`h-full flex flex-col gap-9`}>
        <BaseText isBlack={true} >{props.userName}</BaseText>
        <BaseText isBlack={true} >
         {props.comentario}
        </BaseText>
        <BaseText isBlack={false}>
          {props.time}
        </BaseText>
      </div>
    </div>
  );
};

export default Comentario;
