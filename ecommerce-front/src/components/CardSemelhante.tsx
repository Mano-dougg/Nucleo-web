import Image from "next/image";
import BaseText from "./comentario/textoBase/BaseText";

interface ProdutoProps {
  imageUrl: string;
  produtoNome: string;
  preco: string;
}

const CardSemelhante = (props: ProdutoProps) => {
  return (
    <div
      className={`h-auto w-52 max-w-52 flex flex-col gap-8 bg-bg-card border border-black py-2 items-center justify-center`}
    >
      <Image
        src={props.imageUrl}
        height={106}
        width={106}
        alt={props.produtoNome}
        className="max-h-28 max-w-28"
      />
      <BaseText isBlack={true}>{props.produtoNome}</BaseText>
      <div className={`w-full flex justify-around`}>
        <BaseText isBlack={true}>R${props.preco}</BaseText>
        <Image
          src={"/shopping-cart.svg"}
          height={24}
          width={24}
          alt={"carrinho de compras"}
          className="max-h-6 max-w-6"
        />
      </div>
    </div>
  );
};

export default CardSemelhante;
