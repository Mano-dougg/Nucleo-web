import Image from "next/image";
import BaseText from "./comentario/textoBase/BaseText";

interface CardOutrosProps{
    imageUrl:string;
    produtoName:string;
}

const CardOutros = (props:CardOutrosProps) => {
  return (
    <div
      className={`h-auto w-52 max-w-52 flex flex-col gap-9 bg-bg-card border border-black items-center justify-center py-6`}
    >
        <Image src={props.imageUrl} height={140} width={140} alt={props.produtoName} className={`max-h-36 max-w-36 rounded-full`}/>
        <BaseText isBlack={true}>{props.produtoName}</BaseText>
    </div>
  );
};

export default CardOutros;
